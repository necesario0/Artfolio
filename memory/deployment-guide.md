# Deployment Guide: Vercel & Sanity

Follow these steps to take **chilovesyuu** live.

## Phase 1: Git & GitHub
1. **Commit your changes**:
   ```bash
   git commit -m "feat: finalize cms integration, branding, and mobile responsiveness"
   ```
2. **Push to GitHub**:
   ```bash
   git push origin master
   ```

## Phase 2: Vercel Deployment (Frontend)
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your `artfolio_v2` (or `chilovesyuu`) repository.
4. In **Environment Variables**, add the following:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity Project ID.
   - `NEXT_PUBLIC_SANITY_DATASET`: Usually `production`.
   - `SANITY_API_READ_TOKEN`: A token from Sanity Manage with "viewer" permissions.
5. Click **Deploy**.

## Phase 3: Sanity Studio Deployment
1. Open your terminal in the project root.
2. Run the deployment command:
   ```bash
   npx sanity deploy
   ```
3. Choose a name for your studio (e.g., `chilovesyuu-studio`).
4. This will provide you with a permanent URL for your CMS.

## Phase 4: CORS & API Settings
1. Go to [Sanity Manage](https://www.sanity.io/manage).
2. Select your project.
3. Go to **Settings** > **API settings**.
4. Under **CORS origins**, click **Add CORS origin**.
5. Add your Vercel deployment URL (e.g., `https://chilovesyuu.vercel.app`).
6. Ensure **Allow credentials** is checked.
7. Click **Save**.

---
**Done!** Your portfolio is now live and fully connected to the CMS.
