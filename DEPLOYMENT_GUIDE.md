# Deployment Guide - Pupamino Website

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier works great!)
- Git installed locally

## 🚀 Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if you haven't already
# On macOS:
brew install gh

# Login to GitHub
gh auth login

# Create repository and push
gh repo create pupamino-website --public --source=. --remote=origin --push
```

### Option B: Using GitHub Website

1. Go to https://github.com/new
2. Repository name: `pupamino-website`
3. Description: "Modern pet care product website built with Next.js, TypeScript, and Tailwind CSS"
4. Choose **Public** (required for free Vercel hosting)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

7. Then run these commands in your terminal:
```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/pupamino-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option B: Using Vercel Dashboard (Recommended for First Time)

1. Go to https://vercel.com
2. Click "Sign Up" or "Login" (use your GitHub account)
3. Click "Add New..." → "Project"
4. Import your `pupamino-website` repository
5. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
6. Click "Deploy"

That's it! Vercel will automatically deploy your site.

## ✅ Post-Deployment Checklist

After deployment, verify:
- [ ] All images load correctly
- [ ] Fonts display properly
- [ ] Mobile menu works
- [ ] All animations are smooth
- [ ] Forms work (newsletter signup)
- [ ] All sections scroll correctly
- [ ] No console errors

## 🔧 Environment Variables (if needed)

Currently, this project doesn't require any environment variables. If you add features later that need them:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## 📱 Custom Domain (Optional)

To add a custom domain:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `pupamino.com`)
3. Follow Vercel's DNS configuration instructions
4. Wait for DNS propagation (usually 5-10 minutes)

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to GitHub:
- **Push to `main` branch** = Production deployment
- **Push to other branches** = Preview deployment

To update your site:
```bash
# Make changes to your code
git add .
git commit -m "Update: your changes here"
git push origin main
```

Vercel will automatically redeploy in ~1-2 minutes!

## 🎯 Your Deployment URLs

After deployment, you'll get:
- **Production**: `https://pupamino-website.vercel.app`
- **Preview**: `https://pupamino-website-git-branch-username.vercel.app`

You can share these immediately!

## 🐛 Troubleshooting

### Build Fails on Vercel

**Issue**: Build fails with dependency errors
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "fix: Update dependencies"
git push
```

### Images Not Loading

**Issue**: Images show broken
**Solution**: Check that all images are in `public/assets/` and paths are correct

### Fonts Look Wrong

**Issue**: Fonts don't display correctly
**Solution**: Verify Google Fonts are loading in `app/layout.tsx`

## 📊 Performance Optimization

Your site is already optimized with:
- ✅ Next.js Image optimization
- ✅ Static page generation
- ✅ Font optimization
- ✅ Minimal bundle size (169 KB)
- ✅ Lazy loading images

Vercel automatically adds:
- ✅ Global CDN
- ✅ Edge caching
- ✅ Automatic HTTPS
- ✅ Compression (Brotli/Gzip)

## 🎉 You're Done!

Your Pupamino Website is now live and accessible worldwide!

### Next Steps:
1. Share your site: `https://pupamino-website.vercel.app`
2. Add custom domain (optional)
3. Monitor analytics in Vercel Dashboard
4. Continue developing and pushing updates

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issues in your repo for tracking

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
