import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type RateLimitContext = {
  count: number;
  resetTime: number;
};

const rateLimitMap = new Map<string, RateLimitContext>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const AUTH_LIMIT = 5;
const GLOBAL_LIMIT = 100; // Allow more requests for non-auth routes

function cleanupMap() {
  const now = Date.now();
  for (const [key, context] of rateLimitMap.entries()) {
    if (context.resetTime < now) {
      rateLimitMap.delete(key);
    }
  }
}

export function proxy(request: NextRequest) {
  // Reject oversized payloads (> 10KB) for public routes
  // Valid Sanity uploads in `/studio` are unaffected because they are excluded via the matcher.
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 10240) {
      return new NextResponse('Payload Too Large', { status: 413 });
    }
  }

  if (Math.random() < 0.1) {
    cleanupMap();
  }

  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  const path = request.nextUrl.pathname;
  
  const isAuthRoute = path.startsWith('/api/auth') || path.startsWith('/login') || path.startsWith('/register');
  const limit = isAuthRoute ? AUTH_LIMIT : GLOBAL_LIMIT;
  const limitType = isAuthRoute ? 'auth' : 'global';
  const key = `${ip}:${limitType}`;
  
  const now = Date.now();
  let context = rateLimitMap.get(key);
  
  if (!context || context.resetTime < now) {
    context = { count: 0, resetTime: now + WINDOW_MS };
  }
  
  context.count++;
  rateLimitMap.set(key, context);
  
  if (context.count > limit) {
    return new NextResponse('Too Many Requests', { 
      status: 429,
      headers: {
        'Retry-After': Math.ceil((context.resetTime - now) / 1000).toString()
      }
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|studio|images).*)',
  ],
};
