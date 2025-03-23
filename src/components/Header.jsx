import React, { useEffect, useRef } from 'react';
import '../styles/header.css'; 

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         
          headerElement.classList.add('animate');
        } else {
        
          headerElement.classList.remove('animate');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, 
    };

  
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);

  return (
    <header id="home" className="header" ref={headerRef}>
      <div className="header-content">
        <button className="intro-button">Introduction</button>
        <h1 className="greeting">Hello! I am Saqib Iftikhar</h1>
        <p className="description">Full stack developer</p>
        <p className="description-small">
          I specialize in building dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). With a focus on clean code and user-friendly design, I create seamless experiences for both businesses and consumers. Let's turn your ideas into reality!
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years of</span>
            <span className="stat-label">experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Project</span>
            <span className="stat-label">completed so far</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;