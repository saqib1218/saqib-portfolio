import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';
import reactIcon from '../assets/icons/react.png';
import nextjsIcon from '../assets/icons/nextjs.png';
import javascriptIcon from '../assets/icons/javascript.png';
import nodejsIcon from '../assets/icons/nodejs.png';
import expressIcon from '../assets/icons/expressjs.png';
import mongoIcon from '../assets/icons/mongo.png';
import dockerIcon from '../assets/icons/docker.png';
import awsIcon from '../assets/icons/aws.png';

const Skills = () => {
  const skills = [
    { icon: reactIcon, name: 'React' },
    { icon: nextjsIcon, name: 'Next.js' },
    { icon: javascriptIcon, name: 'JavaScript' },
    { icon: nodejsIcon, name: 'Node.js' },
    { icon: expressIcon, name: 'Express' },
    { icon: mongoIcon, name: 'MongoDB' },
    { icon: dockerIcon, name: 'Docker' },
    { icon: awsIcon, name: 'AWS' }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const flipItem = {
    hidden: { 
      rotateY: 90,
      opacity: 0,
      scale: 0.5
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.05,
      rotateY: [0, 5, -5, 0], // Gentle wiggle effect
      transition: {
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#22D3EE",
      color: "#fff",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="skills-container"
      >
        <motion.button 
          className="skill-button"
          variants={buttonVariants}
        >
          Skills
        </motion.button>
        
        <motion.h1 
          className="skill-heading"
          variants={titleVariants}
        >
          My <span className="skill-text">Skills</span>
        </motion.h1>

        <motion.div 
          className="card-container"
          variants={container}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card"
              variants={flipItem}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div className="card-content">
                <motion.img 
                  src={skill.icon} 
                  alt={skill.name}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.10 }}
                />
                <motion.p 
                  className="skill-name"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;