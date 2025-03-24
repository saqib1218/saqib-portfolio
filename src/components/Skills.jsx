import React from 'react';
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

  return (
    <section id="skills" className="skills-section">
      <button className="skill-button">Skill</button>
      <h1 className="skill-heading">My <span className="skill-text">Skills</span></h1>
      <div className="card-container">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img src={skill.icon} alt={skill.name} />
              <p className="skill-name">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;