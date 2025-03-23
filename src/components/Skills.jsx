import React from 'react';
import '../styles/skills.css'; // Import the CSS file for Skills
import figmaIcon from '../assets/icons/figma.png'; // Import the image

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <button className="skill-button">Skill</button>
      <h1 className="skill-heading">My <span className="skill-text">Skills</span></h1>
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src={figmaIcon} alt="Figma" />
        </div>
        {/* Card 2 */}
        <div className="card">
          <img src={figmaIcon} alt="Figma" />
        </div>
        {/* Card 3 */}
        <div className="card">
          <img src={figmaIcon} alt="Figma" />
        </div>
        {/* Card 4 */}
        <div className="card">
          <img src={figmaIcon} alt="Figma" />
        </div>
        {/* Card 5 */}
        <div className="card">
          <img src={figmaIcon} alt="Figma" />
        </div>
        {/* Card 6 */}
        <div className="card">
          <img src={figmaIcon} alt="Figma" />
        </div>
      </div>
    </section>
  );
};

export default Skills;