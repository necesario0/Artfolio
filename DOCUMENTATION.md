# Technical Documentation: chilovesyuu

This document provides a deep dive into the architecture and content management of the **chilovesyuu** portfolio.

## 🗄️ CMS Architecture (Sanity)

The project uses a headless CMS approach. Content is stored in Sanity and fetched via GROQ queries.

### 1. Artwork Schema (`artworkType.ts`)
The core of the gallery. Supports three media types:
- **Image**: Standard single-image display.
- **Video**: Supports MP4/MOV files with an automatic thumbnail/poster image for performance.
- **Multiple Images**: An array of images that rendered as a swipeable storybook in the lightbox.

### 2. Commission Schema (`commissionType.ts`)
Manages the pricing tiers on the `/commission` page.
- **Fields**: Name, Example Image, Order (for carousel positioning), and a nested **Pricing Array** (Label/Value pairs).

### 3. Site Settings (`siteSettings.ts`)
A singleton document for global site control.
- **Commissions Open Toggle**: Instantly shows/hides the "Commission Me" buttons on the Home page and updates the Commission page state.

## ⚡ Performance Optimizations

- **Font Loading**: Heavy cursive fonts are scoped to specific pages to avoid bloating the initial bundle.
- **Caching Strategy**: The `revalidate = 0` export is used on dynamic pages (Gallery, Commission) to ensure Vercel bypasses the static cache when content changes in Sanity.
- **Image Formats**: `next.config.ts` is configured to prefer AVIF and WebP for the smallest possible file sizes.
- **LCP Fixes**: Entrance animations for "Above the Fold" elements have no delay to ensure immediate browser painting.

## 🚢 Deployment Guide

### Vercel (Frontend)
1. Import the repository.
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_API_READ_TOKEN` to Environment Variables.
3. Deploy.

### Sanity Studio (Management)
1. Run `npx sanity deploy` in the terminal.
2. Authorized the new Studio URL and the Vercel URL in **Sanity Manage > API settings > CORS origins**. **Check "Allow Credentials".**

## 🔧 Maintenance

### Adding a new Tag
Tags in the gallery are automatically derived from the data. Simply add a new tag string to any artwork in Sanity, and it will appear in the filter bar on the next page load.

### Updating Prices
Prices are managed in the **Commission Types** section of the Studio. Changes appear instantly on the live site without a rebuild.
