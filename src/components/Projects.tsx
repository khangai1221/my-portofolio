import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="section alt"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="section">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on during my studies and
          personal time
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <img
              src="https://media.istockphoto.com/id/1046976906/photo/carnival-arcade-game.jpg?s=1024x1024&w=is&k=20&c=Ovj2aEXTL8448X6N1rAs_2eDtBYAArNc3rHiqhBf3S4="
              alt="Whack-A-Mole"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Whack-A-Mole</h3>
              <p className="project-description">
                A simple online store built with HTML, CSS, and JavaScript.
                Features include product catalog, shopping cart, and contact
                forms.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/whack-a-mole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://whack-a-mole-cyan-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
