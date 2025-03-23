import React from 'react';
import {
  FaCode, // Icon for Web Development
  FaPlug, // Icon for API Integration
  FaPaintBrush, // Icon for Frontend Development
  FaCloudUploadAlt, // Icon for Deployment
} from 'react-icons/fa';
import '../styles/services.css'; // Import the CSS file

const Services = () => {
  return (
    <section id="services" className="services-section">
      <button className="services-button">Services</button>
      <h1 className="services-heading">
        My <span className="highlight">Specializations</span>
      </h1>

      {/* Cards Container */}
      <div className="services-cards">
        {/* Card 1: Web Development */}
        <div className="service-card">
          <div className="service-title">
            Web Development
            <FaCode className="service-icon" />
          </div>
          <p className="service-description">
            Building responsive and dynamic websites using modern technologies like React, Node.js, and MongoDB. Delivering seamless user experiences across all devices.
          </p>
        </div>

        {/* Card 2: API Integration */}
        <div className='Services_row'>
        <div className="service-card">
          <div className="service-title">
            REST API Integration
            <FaPlug className="service-icon" />
          </div>
          <p className="service-description">
  Designing and implementing RESTful APIs with a focus on scalability, security, and performance. Using tools like Node.js, Express, and MongoDB.
</p>
        </div>
        <div className="service-card">
          <div className="service-title">
            Frontend Developments
            <FaPaintBrush className="service-icon" />
          </div>
          <p className="service-description">
  Designing and implementing user interfaces with a focus on usability, accessibility, and performance. Using tools like React, Tailwind CSS, and Framer Motion.
</p>
        </div>
        </div>
      
        {/* Card 3: Frontend Development */}
       

        {/* Card 4: Deployment */}
        <div className="service-card">
          <div className="service-title">
            Deployment
            <FaCloudUploadAlt className="service-icon" />
          </div>
          <p className="service-description">
            Deploying applications to cloud platforms like Vercel, Netlify, and AWS. Ensuring smooth and efficient deployment pipelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;