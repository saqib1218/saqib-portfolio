import React from 'react';
import { motion } from 'framer-motion'; 
import {
  FaCode, 
  FaPlug, 
  FaPaintBrush, 
  FaCloudUploadAlt,
} from 'react-icons/fa';
import '../styles/services.css'; 

const Services = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 },
  };

  const rowCardVariants = {
    hidden: { opacity: 0, scaleX: 1 }, 
    visible: { opacity: 1, scaleX: 1 }, 
  };

  return (
    <section id="services" className="services-section">
      <button className="services-button">Services</button>
      <h1 className="services-heading">
        My <span className="highlight">Specializations</span>
      </h1>

      {/* Cards Container */}
      <div className="services-cards">
        {/* Card 1: Web Development */}
        <motion.div
          className="service-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="service-title">
            Web Development
            <FaCode className="service-icon" />
          </div>
          <p className="service-description">
            Building responsive and dynamic websites using modern technologies like React, Node.js, and MongoDB. Delivering seamless user experiences across all devices.
          </p>
        </motion.div>

        {/* Card 2: API Integration */}
        <div className="Services_row">
          <motion.div
            className="service-card"
            variants={rowCardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            <div className="service-title">
              REST API Integration
              <FaPlug className="service-icon" />
            </div>
            <p className="service-description">
              Designing and implementing RESTful APIs with a focus on scalability, security, and performance. Using tools like Node.js, Express, and MongoDB.
            </p>
          </motion.div>

          {/* Card 3: Frontend Development */}
          <motion.div
            className="service-card"
            variants={rowCardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="service-title">
              Frontend Development
              <FaPaintBrush className="service-icon" />
            </div>
            <p className="service-description">
              Designing and implementing user interfaces with a focus on usability, accessibility, and performance. Using tools like React, Tailwind CSS, and Framer Motion.
            </p>
          </motion.div>
        </div>

        {/* Card 4: Deployment */}
        <motion.div
          className="service-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="service-title">
            Deployment
            <FaCloudUploadAlt className="service-icon" />
          </div>
          <p className="service-description">
            Deploying applications to cloud platforms like Vercel, Netlify, and AWS. Ensuring smooth and efficient deployment pipelines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;