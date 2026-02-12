import React from 'react';
import './About.css';
import { FaCode, FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Building responsive and modern web applications'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices'
    },
    {
      icon: <FaDatabase />,
      title: 'Backend Development',
      description: 'Developing robust and efficient server-side solutions'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate Full Stack Developer with a love for creating elegant solutions 
              to complex problems. With expertise in modern web and mobile technologies, I specialize in 
              building scalable applications that provide exceptional user experiences.
            </p>
            <p className="about-description">
              My journey in software development has equipped me with a diverse skill set, 
              from front-end frameworks like React to back-end technologies like Node.js. 
              I'm constantly learning and adapting to new technologies to stay at the 
              forefront of web development.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
