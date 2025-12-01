import React from "react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Khangai Jargalsaikhan</span>
        </h1>
        <h2>Learning Web Developer</h2>
        <p>
          Passionate about creating beautiful, functional web applications.
          Currently studying at Pinecone Academy and building amazing projects
          with modern technologies.
        </p>
        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Get In Touch
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/khangai1221"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            📱
          </a>
          <a
            href="https://www.linkedin.com/in/khangai-j-a73356328/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaOW1yMoUQeO%2FARnljc6iBg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            💼
          </a>
          <a href="mailto:khnoahj@gmail.com" className="social-link">
            📧
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
