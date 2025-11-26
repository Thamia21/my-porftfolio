import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: 'UMP Connect-Event Managent',
      description: 'digital platform designed for the University of Mpumalanga community to streamline communication, event management, and news updates. It provides a centralized system where students, faculty managers, and administrators can interact efficiently',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Firebase', 'Material-UI'],
      image: `${process.env.PUBLIC_URL}/images/projects/ump-connect.png`,
      github: 'https://github.com/Thamia21/ump-connect',
      
    },
    {
      title: 'Kiosk ordering system',
      description: 'An interactive self-service kiosk system designed for Diatla Restaurant, enabling customers to browse menus, place orders, and make payments independently. The system features an intuitive user interface, real-time order processing, and seamless payment integration, enhancing the dining experience while reducing wait times and improving operational efficiency.',
      technologies: ['Python', 'Node.js', 'Email.js', 'Firebase', 'Stripe', 'Material-UI','Bootstrap'],
      image: `${process.env.PUBLIC_URL}/images/projects/kiosk-system.png`,
      github: 'https://github.com/Thamia21/diatla-kiosk',
      
    },
    {
      title: 'Static Hospital website',
      description: 'digital platform designed to modernize and enhance healthcare services for the Matibidi community. The website serves as an accessible, user-friendly portal for patients, staff, and visitors.',
      technologies: ['HTML5', 'JavaScript', 'Bootstrap', 'CSS3'],
      image: `${process.env.PUBLIC_URL}/images/projects/hospital-website.png`,
      github: 'https://github.com/Thamia21/Matibidi-Hospital',
      
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive, multilingual hospital management system built for South African healthcare providers. ',
      technologies: ['React', 'node.js', 'stripe', 'Express', 'MongoDB', 'Material-UI', 'Bootstrap'],
      image: `${process.env.PUBLIC_URL}/images/projects/hospital-management.png`,
      github: 'https://github.com/Thamia21/hospital-management',
      
    },
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website showcasing projects and skills.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
      image: `${process.env.PUBLIC_URL}/images/projects/portfolio.png`,
      github: 'https://github.com/Thamia21/Thamia21.github.io',
     
    },
    {
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment processing.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'MongoDB'],
      image: `${process.env.PUBLIC_URL}/images/projects/e-commerce.png`,
      github: 'https://github.com/Thamia21/E-Commerce-store.git'
    }
  ];

  // Show only first 3 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More / View Less Button */}
        {projects.length > 3 && (
          <div className="view-more-container">
            <button 
              className="view-more-btn" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'View Less' : `View More Projects (${projects.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
