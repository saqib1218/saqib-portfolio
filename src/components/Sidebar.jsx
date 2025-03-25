import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaCogs,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1280;
      const smallMobile = window.innerWidth < 720;
      setIsMobile(mobile);
      setIsSmallMobile(smallMobile);
      
      // Close menu when resizing to larger screens
      if (!smallMobile && menuOpen) {
        setMenuOpen(false);
      }
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
  }, [menuOpen]);

  const handleNavClick = (section) => {
    if (isSmallMobile) {
      setMenuOpen(false);
    }
    setActiveSection(section);
  };

  return (
    <>
      {isSmallMobile ? (
        <div className="mobile-nav-container">
          <button 
            className="hamburger-button" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {menuOpen && (
            <div className="mobile-menu-dropdown">
              <a 
                href="#home" 
                className={`mobile-menu-item ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                <FaHome className="mobile-menu-icon" />
                <span>Home</span>
              </a>
              <a 
                href="#about" 
                className={`mobile-menu-item ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                <FaUser className="mobile-menu-icon" />
                <span>About</span>
              </a>
              <a 
                href="#experience" 
                className={`mobile-menu-item ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => handleNavClick('experience')}
              >
                <FaBriefcase className="mobile-menu-icon" />
                <span>Experience</span>
              </a>
              <a 
                href="#services" 
                className={`mobile-menu-item ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                <FaCogs className="mobile-menu-icon" />
                <span>Services</span>
              </a>
              <a 
                href="#skills" 
                className={`mobile-menu-item ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleNavClick('skills')}
              >
                <FaCode className="mobile-menu-icon" />
                <span>Skills</span>
              </a>
              <a 
                href="#projects" 
                className={`mobile-menu-item ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                <FaProjectDiagram className="mobile-menu-icon" />
                <span>Projects</span>
              </a>
              <a 
                href="#contact" 
                className={`mobile-menu-item ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                <FaEnvelope className="mobile-menu-icon" />
                <span>Contact</span>
              </a>
            </div>
          )}
        </div>
      ) : isMobile ? (
        <div className="sidebar mobile">
          <a 
            href="#home" 
            className={`sidebar-icon ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <FaHome size={20} />
            <span>Home</span>
          </a>
          <a 
            href="#about" 
            className={`sidebar-icon ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <FaUser size={20} />
            <span>About</span>
          </a>
          <a 
            href="#experience" 
            className={`sidebar-icon ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavClick('experience')}
          >
            <FaBriefcase size={20} />
            <span>Exp</span>
          </a>
          <a 
            href="#services" 
            className={`sidebar-icon ${activeSection === 'services' ? 'active' : ''}`}
            onClick={() => handleNavClick('services')}
          >
            <FaCogs size={20} />
            <span>Services</span>
          </a>
          <a 
            href="#skills" 
            className={`sidebar-icon ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavClick('skills')}
          >
            <FaCode size={20} />
            <span>Skills</span>
          </a>
          <a 
            href="#projects" 
            className={`sidebar-icon ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            <FaProjectDiagram size={20} />
            <span>Projects</span>
          </a>
          <a 
            href="#contact" 
            className={`sidebar-icon ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            <FaEnvelope size={20} />
            <span>Contact</span>
          </a>
        </div>
      ) : (
        <div className="sidebar">
          <a 
            href="#home" 
            className={`sidebar-icon ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <FaHome size={24} />
          </a>
          <a 
            href="#about" 
            className={`sidebar-icon ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <FaUser size={24} />
          </a>
          <a 
            href="#experience" 
            className={`sidebar-icon ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavClick('experience')}
          >
            <FaBriefcase size={24} />
          </a>
          <a 
            href="#services" 
            className={`sidebar-icon ${activeSection === 'services' ? 'active' : ''}`}
            onClick={() => handleNavClick('services')}
          >
            <FaCogs size={24} />
          </a>
          <a 
            href="#skills" 
            className={`sidebar-icon ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavClick('skills')}
          >
            <FaCode size={24} />
          </a>
          <a 
            href="#projects" 
            className={`sidebar-icon ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            <FaProjectDiagram size={24} />
          </a>
          <a 
            href="#contact" 
            className={`sidebar-icon ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      )}
    </>
  );
};

export default Sidebar;