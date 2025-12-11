import React from "react";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="section"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Here are the technologies I'm working with and continuously learning
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-item">
            <span>HTML/CSS</span>
            <span className="skill-badge badge-intermediate">Intermediate</span>
          </div>
          <div className="skill-item">
            <span>JavaScript</span>
            <span className="skill-badge badge-intermediate">Intermediate</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <div className="skill-item">
            <span>Git/GitHub</span>
            <span className="skill-badge badge-beginner">Beginner</span>
          </div>
          <div className="skill-item">
            <span>VS Code</span>
            <span className="skill-badge badge-intermediate">Intermediate</span>
          </div>
          <div className="skill-item">
            <span>Figma</span>
            <span className="skill-badge badge-intermediate">Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
