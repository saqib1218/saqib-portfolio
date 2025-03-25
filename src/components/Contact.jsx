import React from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{  margin: "-100px",amount: 0.3 }}
        variants={containerVariants}
        className="contact-container"
      >
        <motion.button 
          className="contact-button"
          variants={itemVariants}
        >
          Contact
        </motion.button>
        
        <motion.h1 
          className="contact-heading"
          variants={titleVariants}
        >
          Let's <span className="highlight-text">Work Together!</span>
        </motion.h1>

        <motion.form 
          className="contact-form"
          variants={containerVariants}
        >
          <motion.div className="form-group" variants={itemVariants}>
            <input 
              type="text" 
              id="name" 
              className="form-input" 
              placeholder=" "
              required
            />
            <label htmlFor="name" className="form-label">Name</label>
            <div className="form-line"></div>
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder=" "
              required
            />
            <label htmlFor="email" className="form-label">Email</label>
            <div className="form-line"></div>
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <input 
              type="tel" 
              id="phone" 
              className="form-input" 
              placeholder=" "
              required
            />
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <div className="form-line"></div>
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <textarea 
              id="message" 
              className="form-textarea" 
              placeholder=" "
              rows="4"
              required
            ></textarea>
            <label htmlFor="message" className="form-label">Your Message</label>
            <div className="form-line"></div>
          </motion.div>

          <motion.button 
            type="submit" 
            className="submit-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;