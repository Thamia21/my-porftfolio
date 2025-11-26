# Certificate PDFs Folder

## How to Add Your Certificate PDFs

1. **Place your PDF files in this folder** (`public/certificates/`)
   - Name them descriptively (e.g., `react-certificate.pdf`, `javascript-certification.pdf`)
   - Keep file names simple without spaces (use hyphens or underscores)

2. **Update the Achievements component** (`src/components/Achievements.js`)
   - Change the `certificatePdf` path to match your PDF filename
   - Example: `certificatePdf: '/certificates/react-certificate.pdf'`

## Example Structure

```
public/
  certificates/
    react-certificate.pdf
    javascript-certification.pdf
    hackathon-winner.pdf
    aws-cloud-practitioner.pdf
```

## Important Notes

- ✅ PDFs will open in a new browser tab when clicked
- ✅ File paths should start with `/certificates/` (not `public/certificates/`)
- ✅ Supported format: PDF only
- ✅ Keep file sizes reasonable (under 5MB recommended for web performance)
- ✅ Files in this folder will be included in your build and deployed with your site

## Example Achievement Entry

```javascript
{
  title: 'React Developer Certificate',
  issuer: 'Meta (Coursera)',
  date: 'November 2024',
  description: 'Completed comprehensive React development course.',
  icon: 'certificate',
  certificatePdf: '/certificates/react-certificate.pdf'
}
```

## Testing Locally

1. Add your PDF to this folder
2. Update the path in `Achievements.js`
3. Run `npm start`
4. Click "View Certificate" button to test

The PDF will open in a new tab in your browser.
