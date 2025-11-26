# Quick Guide: Adding Your Certificate PDFs

## 🎯 Simple 3-Step Process

### Step 1: Add PDF Files
Drop your certificate PDF files into:
```
public/certificates/
```

**Example:**
```
public/
  certificates/
    react-certificate.pdf
    javascript-cert.pdf
    python-certification.pdf
```

### Step 2: Update Achievements.js
Open: `src/components/Achievements.js`

Replace the sample data with your certificates:

```javascript
const achievements = [
  {
    title: 'Your Certificate Title',
    issuer: 'Organization Name',
    date: 'Month Year',
    description: 'What you learned or achieved.',
    icon: 'certificate', // or 'award' or 'trophy'
    certificatePdf: '/certificates/your-file-name.pdf'
  },
  // Add more certificates...
];
```

### Step 3: Test It!
1. Save the file
2. Run `npm start` (if not already running)
3. Navigate to the Achievements section
4. Click "View Certificate" button

The PDF will open in a new tab! ✨

---

## 📋 Quick Reference

### Icon Options
- `'certificate'` → 📜 Certificate icon
- `'award'` → 🏅 Award icon  
- `'trophy'` → 🏆 Trophy icon

### File Naming Tips
✅ Good: `react-certificate.pdf`, `aws_cert.pdf`  
❌ Bad: `My Certificate (2024).pdf`, `cert #1.pdf`

### Path Format
Always use: `/certificates/filename.pdf`  
NOT: `public/certificates/filename.pdf`

---

## 🎨 Features

- **PDF Icon**: Animated PDF icon on the button
- **New Tab**: PDFs open in a new browser tab
- **Responsive**: Works perfectly on mobile
- **Hover Effects**: Smooth animations on hover
- **Glassmorphism**: Beautiful card design

---

## 🚀 Example

```javascript
{
  title: 'React Developer Certificate',
  issuer: 'Meta via Coursera',
  date: 'November 2024',
  description: 'Completed advanced React course covering hooks, context, and performance optimization.',
  icon: 'certificate',
  certificatePdf: '/certificates/react-meta-cert.pdf'
}
```

---

## ❓ Troubleshooting

**PDF not opening?**
- Check the filename matches exactly (case-sensitive)
- Ensure PDF is in `public/certificates/` folder
- Path should start with `/certificates/` not `public/certificates/`

**Button not showing?**
- Make sure `certificatePdf` field exists
- Check that the value is not empty or null

**Need help?**
See the full guide: `ACHIEVEMENTS-GUIDE.md`
