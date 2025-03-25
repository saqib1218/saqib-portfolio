import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../styles/about.css'; // Import the CSS file

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between child animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Increase duration for slower animations
        ease: "easeOut", // Smooth easing
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="about-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // Trigger animation every time
    >
      <motion.button
        className="about-button"
        variants={childVariants}
      >
        About
      </motion.button>
      <motion.h1
        className="about-heading"
        variants={childVariants}
      >
        Every great design begins with an even{' '}
        <span className="highlight">better story</span>
      </motion.h1>
      <motion.p
        className="about-description"
        variants={childVariants}
      >
        Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
      </motion.p>
    </motion.section>
  );
};

export default About;