# ⚡ Quick Deploy Guide

## 🚀 Deploy in 5 Commands

```bash
# 1. Install dependencies
npm install

# 2. Initialize git and commit
git init
git add .
git commit -m "Initial commit"

# 3. Add GitHub remote (create repo on GitHub first!)
git remote add origin https://github.com/Thamia21/my-portfolio.git

# 4. Push to GitHub
git branch -M main
git push -u origin main

# 5. Deploy to GitHub Pages
npm run deploy
```

## 🌐 Your Live URL
After deployment (wait 2-5 minutes):
```
https://Thamia21.github.io/my-portfolio
```

## 🔄 Update Your Portfolio Later

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## ✅ Before Deploying Checklist

- [ ] Add your profile picture to `public/images/profile/`
- [ ] Add project screenshots to `public/images/projects/`
- [ ] Update your personal info in all components
- [ ] Test locally with `npm start`
- [ ] Create GitHub repository named `my-portfolio`

## 📝 Important Notes

1. **Create GitHub repo first** before running git commands
2. **Make it public** so GitHub Pages works
3. **Wait 2-5 minutes** after first deploy
4. **Enable GitHub Pages** in repo Settings → Pages → Source: gh-pages

## 🆘 Need Help?

Check the full `DEPLOYMENT.md` file for detailed instructions and troubleshooting!
