# Achievements Section Guide

## Overview
The Achievements section has been successfully added to your portfolio! It's positioned between the Projects and Contact sections.

## How to Add Your Certificates

### Step 1: Upload Your Certificate PDFs

1. Place your certificate PDF files in the `public/certificates/` folder
2. Name them descriptively (e.g., `react-certificate.pdf`, `javascript-cert.pdf`)
3. Keep filenames simple without spaces (use hyphens or underscores)

### Step 2: Edit the Achievements Component

Edit the file: `src/components/Achievements.js`

Locate the achievements array (around line 6):

```javascript
const achievements = [
  {
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    description: 'Brief description of what this certificate represents and the skills gained.',
    icon: 'certificate',
    certificatePdf: '/certificates/certificate1.pdf' // Path to your PDF
  },
  // Add more certificates here...
];
```

### Step 3: Replace with your actual certificates

Example:

```javascript
const achievements = [
  {
    title: 'React Developer Certificate',
    issuer: 'Meta (Coursera)',
    date: 'November 2024',
    description: 'Completed comprehensive React development course covering hooks, state management, and modern React patterns.',
    icon: 'certificate',
    certificatePdf: '/certificates/react-certificate.pdf'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'October 2024',
    description: 'Mastered fundamental algorithms and data structures using JavaScript.',
    icon: 'award',
    certificatePdf: '/certificates/javascript-cert.pdf'
  },
  {
    title: 'Hackathon Winner',
    issuer: 'Tech Innovation Challenge 2024',
    date: 'September 2024',
    description: 'First place winner for developing an innovative web application solving real-world problems.',
    icon: 'trophy',
    certificatePdf: '/certificates/hackathon-winner.pdf'
  }
];
```

### Step 4: Icon Types

You can use three different icon types:
- `'certificate'` - Shows a certificate icon (best for course completions)
- `'award'` - Shows an award icon (best for recognitions)
- `'trophy'` - Shows a trophy icon (best for competitions/wins)

### Step 5: View Certificate Button

- Each certificate card will display a "View Certificate" button with a PDF icon
- The button opens the PDF in a new browser tab
- The PDF icon has a subtle pulse animation to draw attention
- If you don't have a PDF yet, you can temporarily omit the `certificatePdf` field and the button won't show

## Styling

The achievements section uses the same pink gradient theme as the rest of your portfolio:
- Cards have a glassmorphism effect
- Hover animations for interactive feel
- Responsive design for mobile devices
- Icons animate on hover

## Navigation

The "Achievements" link has been automatically added to your navbar between "Projects" and "Contact".

## Testing

To see your changes:
1. Save the `Achievements.js` file after editing
2. Run `npm start` if not already running
3. Navigate to the Achievements section
4. The page will auto-reload with your changes

## Tips

- Keep descriptions concise (1-2 sentences)
- Use consistent date formatting (e.g., "Month Year")
- Add as many or as few certificates as you want
- The grid layout automatically adjusts to the number of items
- On mobile, cards stack vertically for better readability
