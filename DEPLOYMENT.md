# Netlify Deployment Guide

## Step 1: Build Your Project

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

## Step 2: Deploy to Netlify

### Option A: Using Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy to Netlify:
```bash
netlify deploy --prod
```

### Option B: Using Netlify Website

1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up or log in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub/GitLab repository OR drag and drop your `dist` folder

## Step 3: Configure Environment Variables

1. In Netlify Dashboard, go to **Site settings** → **Environment variables**
2. Add the env variables

3. Click **Save**

## Step 4: Configure Build Settings (if using Git)

In Netlify Dashboard → Site settings → Build & deploy:

- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Step 5: Redeploy (if needed)

If you already deployed before adding environment variables:
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**

## Important Notes

- ✅ The `.env` file is ignored by git (already in `.gitignore`)
- ✅ Your environment variables are secure and only available server-side
- ✅ Vite bundles environment variables at build time
- ✅ The contact form will work on your live Netlify site

## Troubleshooting

If the contact form doesn't work after deployment:
1. Make sure environment variables are set in Netlify
2. Redeploy after setting environment variables
3. Check browser console for any errors
4. Verify EmailJS credentials are correct
