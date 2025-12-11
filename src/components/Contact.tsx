import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="section"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <div className="contact-label">Email</div>
              <a href="mailto:khnoahj@gmail.com" className="contact-value">
                khnoahj@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-item"></div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-info">
              <div className="contact-label">Location</div>
              <span className="contact-value">Ulaanbaatar,Mongolia</span>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <h3>Let's Connect</h3>
          <a
            href="https://github.com/khangai1221"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <span>📱</span> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khangai-j-a73356328/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaOW1yMoUQeO%2FARnljc6iBg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <span>💼</span> LinkedIn
          </a>
          <a
            href="https://x.com/khangai_j6922"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <span>🐦</span> Twitter
          </a>

          <a
            href="mailto:khnoahj@gmail.com"
            className="btn btn-primary"
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          >
            📧 Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
