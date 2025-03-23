import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../styles/experience.css'; // Import the CSS file

const Experience = () => {
  // Animation variants for timeline items
  const timelineVariants = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 }, // Move to the center
  };

  return (
    <section id="experience" className="experience-section">
      <button className="resume-button">Resume</button>
      <h1 className="experience-heading">
        <span className="highlight">Education</span> & Experience
      </h1>

      {/* Timeline */}
      <div className="timeline">
        {/* Experience 1 */}
        <motion.div
          className="timeline-item"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.95, delay: 0.6 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-date">2024 Aug - Present</p>
            <p className="timeline-company">Hypertext Solutions</p>
            <p className="timeline-role">MERN Stack Developer</p>
            <p className="timeline-description">
              Developing and maintaining web applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality software solutions.
            </p>
          </div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          className="timeline-item"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-date">2023 Jul - 2024 Aug</p>
            <p className="timeline-company">Silver Concepts LLc</p>
            <p className="timeline-role">Frontend Developer</p>
            <p className="timeline-description">
              Designed and implemented user interfaces for web applications. Worked closely with designers and backend developers to ensure seamless integration.
            </p>
          </div>
        </motion.div>

        {/* Experience 3 */}
        <motion.div
          className="timeline-item"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-date">2022 Jun - 2023 Jul</p>
            <p className="timeline-company">Kryptohive</p>
            <p className="timeline-role">MERN Stack Developer</p>
            <p className="timeline-description">
              Assisted in the development of web applications. Gained hands-on experience with modern web technologies and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;