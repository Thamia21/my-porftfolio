# 🚀 Deploy Your Portfolio to GitHub Pages

Follow these steps to deploy your portfolio website to GitHub Pages.

## 📋 Prerequisites

- Git installed on your computer
- A GitHub account
- Your portfolio project ready

## 🔧 Step 1: Install gh-pages Package

Open your terminal in the project folder and run:

```bash
npm install
```

This will install the `gh-pages` package that was added to your `package.json`.

## 📁 Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `my-portfolio`
4. Description: "My personal portfolio website"
5. Keep it **Public**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

## 💻 Step 3: Initialize Git and Push to GitHub

Open your terminal in the project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - My portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/Thamia21/my-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🌐 Step 4: Deploy to GitHub Pages

After pushing to GitHub, run:

```bash
npm run deploy
```

This command will:
1. Build your React app
2. Create a `gh-pages` branch
3. Deploy your build folder to GitHub Pages

## ⚙️ Step 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Thamia21/my-portfolio`
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **"Save"**

## ✅ Step 6: Access Your Live Portfolio

Your portfolio will be live at:
```
https://Thamia21.github.io/my-portfolio
```

⏰ **Note**: It may take 2-5 minutes for your site to go live after the first deployment.

## 🔄 Updating Your Portfolio

Whenever you make changes to your portfolio:

```bash
# Save your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy the updates
npm run deploy
```

## 🎯 Custom Domain (Optional)

If you want to use a custom domain like `yourname.com`:

1. Buy a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. In your repository, go to **Settings → Pages**
3. Under **"Custom domain"**, enter your domain
4. Add a `CNAME` file to your `public` folder with your domain name
5. Configure DNS settings with your domain registrar

## 🐛 Troubleshooting

### Site not loading?
- Wait 5 minutes and refresh
- Check if GitHub Pages is enabled in Settings
- Verify the `homepage` URL in `package.json` matches your GitHub username

### Images not showing?
- Make sure images are in the `public/images` folder
- Use paths starting with `/images/...` not `./images/...`

### Build errors?
- Run `npm run build` locally to test
- Fix any errors before deploying
- Check console for specific error messages

## 📱 Share Your Portfolio

Once live, share your portfolio:
- LinkedIn: Add to your profile
- Resume: Include the URL
- Email signature: Add the link
- Social media: Share with your network

## 🎉 Congratulations!

Your portfolio is now live on the internet! 🌟

---

**Your Portfolio URL**: https://Thamia21.github.io/my-portfolio
