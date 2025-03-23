import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaCogs, // Icon for Services
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';
import '../styles/sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  // Function to handle scroll and update active section
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
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
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <div className="sidebar">
      <a href="#home" className={`sidebar-icon ${activeSection === 'home' ? 'active' : ''}`}>
        <FaHome size={24} />
      </a>
      <a href="#about" className={`sidebar-icon ${activeSection === 'about' ? 'active' : ''}`}>
        <FaUser size={24} />
      </a>
      <a href="#experience" className={`sidebar-icon ${activeSection === 'experience' ? 'active' : ''}`}>
        <FaBriefcase size={24} />
      </a>
     
      <a href="#services" className={`sidebar-icon ${activeSection === 'services' ? 'active' : ''}`}>
        <FaCogs size={24} />
      </a>
      <a href="#skills" className={`sidebar-icon ${activeSection === 'skills' ? 'active' : ''}`}>
        <FaCode size={24} />
      </a>
      <a href="#projects" className={`sidebar-icon ${activeSection === 'projects' ? 'active' : ''}`}>
        <FaProjectDiagram size={24} />
      </a>
      <a href="#contact" className={`sidebar-icon ${activeSection === 'contact' ? 'active' : ''}`}>
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default Sidebar;