import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section alt"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my journey and what drives me as a developer
        </p>

        <div className="about-grid">
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              I'm currently enrolled at Pinecone Academy, where I'm diving deep
              into modern web development technologies. My passion for coding
              started when I built my first website and saw how code could bring
              ideas to life.
            </p>
            <p>
              When I'm not coding, you can find me exploring new things,
              contributing to open-source projects.
            </p>
          </div>

          <div className="highlights">
            <div className="highlight-card">
              <div className="highlight-icon">💻</div>
              <div>
                <h4>Clean Code</h4>
                <p>Writing maintainable, efficient, and well-documented code</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <div>
                <h4>Problem Solving</h4>
                <p>
                  Approaching challenges with creativity and analytical thinking
                </p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">👥</div>
              <div>
                <h4>Collaboration</h4>
                <p>
                  Working effectively in teams and communicating technical
                  concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
