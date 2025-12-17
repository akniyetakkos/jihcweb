# 🚀 Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### 1. Prepare GitHub Repository

```bash
# Already done! Your repository is initialized
# Now push to GitHub:

# Create a new repository on GitHub (https://github.com/new)
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/jihcweb.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click "Deploy"
6. Done! Your site will be live in 1-2 minutes

## Alternative: Netlify

### 1. Push to GitHub (same as above)

### 2. Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Click "Deploy site"
6. Done!

## Update README with Live URLs

After deployment, update your README.md:

```markdown
## 🔗 Live Demo

- **Live Site:** https://your-app.vercel.app
- **GitHub:** https://github.com/YOUR_USERNAME/jihcweb
```

## Test Your Deployment

1. Visit your live site
2. Test login with demo credentials:
   - Admin: admin@jihc.edu.kz / admin123
   - User: user@jihc.edu.kz / user123
3. Test CRUD operations in Admin Panel
4. Test event registration in User Dashboard
5. Verify all pages load correctly

## Common Issues

### Build Fails
- Check that all dependencies are in `package.json`
- Make sure `dist` folder is in `.gitignore`
- Verify build runs locally: `npm run build`

### Routes Don't Work
- Add `vercel.json` (see below)
- Or configure redirects in Netlify

### Create vercel.json (if routes don't work):

```json
{
  "routes": [
    {
      "src": "/[^.]+",
      "dest": "/",
      "status": 200
    }
  ]
}
```

## That's it! 🎉

Your project is now live and ready for submission!
