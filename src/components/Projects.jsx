import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/projects.css';
import kHiveImage from '../assets/cards/k-hive.png';
import cyberImage from '../assets/cards/cyber.png';
import pcpakImage from '../assets/cards/pcpakcard.png';
import applyupImage from '../assets/cards/applyup.png';

const Projects = () => {
  const projects = [
    { image: kHiveImage, name: 'K-Hive' },
    { image: cyberImage, name: 'Cyber' },
    { image: pcpakImage, name: 'PC Pak' },
    { image: applyupImage, name: 'ApplyUp' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="projects-container"
      >
        
        <motion.button 
          className="projects-button"
          variants={itemVariants}
        >
          Projects
        </motion.button>
        
        <motion.h1 
          className="projects-heading"
          variants={titleVariants}
        >
          My <span className="highlight-text">Projects</span>
        </motion.h1>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <>
            <motion.div
              key={index}
            
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
                <div   className="project-card">

               
              <div className="card-header">
                <h3 className="project-title">{project.name}</h3>
                <div className="divider"></div>
              </div>
              <div className="card-image-container">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="project-image"
                />
              </div>
              </div>
             <div className="corner-curve">
             <button className="corner-button">
               <FiArrowUpRight className="arrow-icon" />
             </button>
           </div>
            </motion.div>
             
           </>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;