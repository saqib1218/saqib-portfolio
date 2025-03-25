import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaCogs,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const sections = ['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        return observer;
      }
      return null;
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <div className={`sidebar ${isMobile ? 'mobile' : ''}`}>
      <a href="#home" className={`sidebar-icon ${activeSection === 'home' ? 'active' : ''}`}>
        <FaHome size={isMobile ? 20 : 24} />
        {isMobile && <span>Home</span>}
      </a>
      <a href="#about" className={`sidebar-icon ${activeSection === 'about' ? 'active' : ''}`}>
        <FaUser size={isMobile ? 20 : 24} />
        {isMobile && <span>About</span>}
      </a>
      <a href="#experience" className={`sidebar-icon ${activeSection === 'experience' ? 'active' : ''}`}>
        <FaBriefcase size={isMobile ? 20 : 24} />
        {isMobile && <span>Experience</span>}
      </a>
      <a href="#services" className={`sidebar-icon ${activeSection === 'services' ? 'active' : ''}`}>
        <FaCogs size={isMobile ? 20 : 24} />
        {isMobile && <span>Services</span>}
      </a>
      <a href="#skills" className={`sidebar-icon ${activeSection === 'skills' ? 'active' : ''}`}>
        <FaCode size={isMobile ? 20 : 24} />
        {isMobile && <span>Skills</span>}
      </a>
     
      <a href="#projects" className={`sidebar-icon ${activeSection === 'projects' ? 'active' : ''}`}>
        <FaProjectDiagram size={isMobile ? 20 : 24} />
        {isMobile && <span>Projects</span>}
      </a>
      <a href="#contact" className={`sidebar-icon ${activeSection === 'contact' ? 'active' : ''}`}>
        <FaEnvelope size={isMobile ? 20 : 24} />
        {isMobile && <span>Contact</span>}
      </a>
    </div>
  );
};

export default Sidebar;