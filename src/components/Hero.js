import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hi, I'm</h1>
            <h1 className="hero-name">Keneilwe Sedibe</h1>
            <h2 className="hero-title">Front-End Developer|Junior Full Stack Developer</h2>
            <p className="hero-description">
              I am a passionate Front-End and Junior Full Stack Developer with a strong focus
              on building responsive, user-friendly, and functional web applications. I enjoy turning
               ideas into interactive digital experiences using modern technologies.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Thamia21" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/thamia-keneilwe-sedibe-450a2b302/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/keneilwe_sedibe?igsh=MWZ3ZDBtZXFueXppaw==" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="mailto:thamiakeneilwe1@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="/images/profile/copy img.png" alt="Keneilwe Sedibe" className="profile-picture" />
              <div className="animated-circle"></div>
              <div className="animated-circle-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
