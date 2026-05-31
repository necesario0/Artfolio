# chilovesyuu | Artist Portfolio

A modern, high-performance portfolio built for artists and animators. Fully dynamic and managed via Sanity CMS.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Features

- **🚀 Performance Optimized**: Optimized for Lighthouse scores (90+) with Next.js 15, AVIF/WebP support, and smart font preloading.
- **🎨 Dynamic Gallery**: Supports high-quality images, **MP4/MOV videos**, and **Multiple Image** (Storybook) entries with interactive navigation.
- **💼 Commission System**: Interactive pricing carousel managed entirely via Sanity Studio.
- **⚙️ Live CMS Syncing**: Global toggles (like "Commissions Open") update the website in real-time without redeploying.
- **📱 Mobile-First Design**: Fully responsive with a custom hamburger menu and fluid typography.
- **🛡️ Secure Architecture**: Uses Headless CMS patterns with authorized CORS origins.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: Sanity.io
- **Styling**: Vanilla CSS (CSS Modules)
- **Language**: TypeScript
- **Fonts**: The Seasons (Serif), Adlery Pro (Cursive), Inter (Sans-serif)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/necesario0/Artfolio.git
cd artfolio_v2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="your_token"
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

- `src/app`: Next.js App Router (Pages and Layouts)
- `src/components`: Reusable UI components (Navbar, LoadingScreen, etc.)
- `src/sanity`: Sanity CMS configuration and schemas
- `public`: Static assets (Fonts and placeholder images)

## 📖 Documentation

For detailed information on how to manage content, update schemas, and deploy the project, please refer to [DOCUMENTATION.md](./DOCUMENTATION.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ for artists.
