# Artfolio v2 Project Memory

## Project Overview
A serverless artist portfolio built with Next.js, TypeScript, and Vanilla CSS, using Sanity CMS for content and Netlify for hosting/forms.

## Current Status
- **Phase 1: Project Initialization** - [COMPLETED]
    - Next.js 15+ (App Router) initialized.
    - TypeScript configured.
    - Tailwind CSS removed in favor of Vanilla CSS (CSS Modules).
    - Basic `globals.css` with "Art Gallery" variables set up.
    - `Navbar` component and responsive `layout.tsx` created.
    - `Home` page placeholder implemented.
- **Phase 2: CMS Setup (Sanity)** - [COMPLETED]
    - Sanity Studio initialized and embedded at `/studio`.
    - `artwork` schema defined (title, image, medium, year, description, category).
    - Sanity client and environment variables configured.
- **Phase 3: Core Pages Development** - [NEXT STEP]
    - Implement Home page hero and bio.
    - Create dynamic Gallery grid with Sanity data.
    - Build Contact/Commission pages with Netlify forms.
