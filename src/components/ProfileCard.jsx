import React, { useState, useEffect } from 'react';
import '../styles/profileCard.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';
import saqibImage from '../assets/saqib.jpeg';

const ProfileCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`profile-card ${isMobile ? 'mobile' : ''}`}>
      <h2 className="profile-name">Saqib Iftikhar</h2>
      <img src={saqibImage} alt="Saqib Iftikhar" className="profile-image" />
      <div className="profile-info">
        <p className="profile-email">
          <FaEnvelope className="icon" /> saqibiftikhar756@gmail.com
        </p>
        <p className="profile-phone">
          <FaPhone className="icon" /> +92 3403118722
        </p>
      </div>
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram className="icon" />
        </a>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGlobe className="icon" />
        </a>
      </div>
      <button className="hire-me-button">Hire Me!</button>
    </div>
  );
};

export default ProfileCard;