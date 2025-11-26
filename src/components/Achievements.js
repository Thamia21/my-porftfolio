import React from 'react';
import './Achievements.css';
import { FaAward, FaCertificate, FaTrophy, FaFilePdf } from 'react-icons/fa';

const Achievements = () => {
  // Use process.env.PUBLIC_URL to handle both development and production paths
  const basePath = process.env.PUBLIC_URL || '';
  
  const achievements = [
    {
      title: 'Diploma in ICT',
      issuer: 'University Of Mpumalanga',
      date: 'May 2025',
      description: 'Foundational training in ICT, where I gained practical skills in programming, web development, database management, and system analysis. It reflects my ability to use technology to solve problems, develop digital solutions, and support modern information systems in a professional environment.',
      icon: 'certificate',
      certificatePdf: `${basePath}/certificates/Qualification.pdf`
    },
    {
      title: 'Data science 101',
      issuer: 'Cognitive Class',
      date: 'September 2025',
      description: 'Foundational knowledge in data science, including data collection, data cleaning, basic analysis, and interpretation of data to support informed decision-making. It reflects my understanding of how to use data, identify patterns, and derive meaningful insights using basic data science concepts and tools.',
      icon: 'award',
      certificatePdf: `${basePath}/certificates/Data science 101 certificate.pdf`
    },
    {
      title: 'Data Science Tool',
      issuer: 'Cognitive Class',
      date: 'September 2025',
      description: 'Practical knowledge of essential data science tools used for data analysis, processing, and visualization. It demonstrates my ability to work with tools that support data exploration, organization, and insight generation to improve decision-making and solve real-world problems.',
      icon: 'award',
      certificatePdf: `${basePath}/certificates/data science tool certificate.pdf`
    }
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'certificate':
        return <FaCertificate />;
      case 'award':
        return <FaAward />;
      case 'trophy':
        return <FaTrophy />;
      default:
        return <FaCertificate />;
    }
  };

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Certificates</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                {getIcon(achievement.icon)}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-issuer">{achievement.issuer}</p>
                <p className="achievement-date">{achievement.date}</p>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.certificatePdf && (
                  <a 
                    href={achievement.certificatePdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="achievement-link"
                  >
                    <FaFilePdf className="pdf-icon" />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
