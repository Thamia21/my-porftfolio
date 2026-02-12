# My Portfolio Website

A modern, responsive portfolio website built with React.js showcasing projects, skills, and professional information.

## Features

- 🎨 Modern and clean design with gradient effects
- 📱 Fully responsive across all devices
- ⚡ Smooth animations and transitions
- 🎯 Easy navigation with smooth scrolling
- 💼 Project showcase with live demos
- 🛠️ Skills section with technology icons
- 📧 Contact form for easy communication
- 🌐 Social media integration

## Technologies Used

- **React.js** - Frontend framework
- **Flutter** - Cross-platform mobile development
- **Django** - Backend web framework
- **CSS3** - Styling with modern features
- **React Icons** - Icon library
- **Devicon** - Technology icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Change "Your Name" to your actual name
   - Update the title/role
   - Modify the description
   - Update social media links

2. **About Section** (`src/components/About.js`):
   - Update the about text with your story
   - Modify the feature cards as needed

3. **Skills Section** (`src/components/Skills.js`):
   - Add/remove skills
   - Update skill levels
   - Modify skill categories

4. **Projects Section** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update project images, descriptions, and links
   - Modify technologies used

5. **Contact Section** (`src/components/Contact.js`):
   - Update email address
   - Update phone number
   - Update location

6. **Footer** (`src/components/Footer.js`):
   - Update social media links
   - Update contact information

### Colors and Styling

The main color scheme uses a purple gradient (`#667eea` to `#764ba2`). To change this:

1. Search for `#667eea` and `#764ba2` in CSS files
2. Replace with your preferred colors
3. Update the gradient values throughout the project

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Firebase, Netlify, or Vercel

Follow the respective platform's documentation for deploying React applications.

## Project Structure

```
my-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!

---

Made with ❤️ using React
