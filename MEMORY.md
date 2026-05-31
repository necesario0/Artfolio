# Artfolio v2 Project Memory

## Project Overview
A serverless artist portfolio built with Next.js, TypeScript, and Vanilla CSS, using Sanity CMS for content and Netlify for hosting/forms.

## Current Status
- **CMS Migration [COMPLETE]**: Commissions tiers and "Commissions Open" toggle are fully managed via Sanity Studio.
- **Gallery Enhancements [COMPLETE]**: Dynamic multi-select tag filtering (OR logic) implemented.
- **Navbar [FIXED]**: Implemented hamburger menu and responsive dropdown for mobile screens.
- **Performance [OPTIMIZED]**: Lighthouse LCP issues resolved by optimizing font loading and animations.
- **Branding [UPDATED]**: Project renamed to **chilovesyuu**.

## Deployment Plan
1. **Commit & Push**: Commit all staged changes and push to GitHub.
2. **Vercel Setup**: Import the repository to Vercel.
3. **Environment Variables**: Configure Sanity Project ID, Dataset, and API Read Token in Vercel.
4. **Sanity CORS**: Add the Vercel deployment URL to Sanity's CORS settings.
