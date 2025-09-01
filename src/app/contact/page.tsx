import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Contact Me
          </h2>
          <p className="contact-subtitle">
            Lets get in touch! I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="contact-form-container">
          <div className="contact-form">
            <h3>Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>NabilTuf@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+62 85210965479</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Malang Indonesia</span>
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="contact-social-links">
                <a href="https://www.instagram.com/nradityax_/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
