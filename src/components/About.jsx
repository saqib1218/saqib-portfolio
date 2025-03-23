import React, { useEffect, useRef } from 'react';
import '../styles/about.css'; // Import the CSS file

const About = () => {
  const aboutRef = useRef(null); // Ref for the about section

  useEffect(() => {
    const aboutElement = aboutRef.current;

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when the about section is in view
          aboutElement.classList.add('animate');
        } else {
          // Remove animation classes when the about section is out of view
          aboutElement.classList.remove('animate');
        }
      });
    };

    // Intersection Observer options
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe the about element
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    // Cleanup the observer on unmount
    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <button className="about-button">About</button>
      <h1 className="about-heading">
        Every great design begins with an even <span className="highlight">better story</span>
      </h1>
      <p className="about-description">
        Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
      </p>
    </section>
  );
};

export default About;