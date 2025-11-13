import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Thamia21/', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/thamia-keneilwe-sedibe-450a2b302/', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/keneilwe_sedibe?igsh=MWZ3ZDBtZXFueXppaw==', label: 'Instagram' },
    { icon: <FaEnvelope />, url: 'mailto:thamiakeneilwe1@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-description">
              Building digital experiences that make a difference. 
              Let's create something amazing together.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-contact">
              <li>thamiakeneilwe1@gmail.com</li>
              <li>+27 79 604 0252</li>
              <li>Nelspruit, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. Made with <FaHeart className="heart-icon" /> by Keneilwe Sedibe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
