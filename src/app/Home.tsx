import React from "react";

const Home: React.FC = () => {
  return (
    <section className="home-page-section">
      <div className="home-page-container">
        <div className="home-page-content">
          <div className="home-page-header">
            <h1 className="home-page-title">
              Halo rek,Aku nabil Gantenk
            </h1>
            <h2 className="home-page-subtitle">
               Software Engineer
            </h2>
            <p className="home-page-description">
              Aku adalah Software engginer di SMKN 8 MALANG,dan aku masih pemula banget.
            </p>
          </div>

          <div className="home-page-buttons">
            <a
              href="/skills"
              className="home-page-button-primary"
            >
              My Skills
            </a>
            <a
              href="/contact"
              className="home-page-button-secondary"
            >
              Contact Me
            </a>
          </div>

          <div className="home-page-social-links">
            <a href="https://github.com/Nabiw" target="_blank" rel="noopener noreferrer" className="home-page-social-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="home-page-photo-container">
          <img src="/nabil.jpg" alt="Nabil" className="home-page-photo" style={{ width: '300px', height: '300px', borderRadius: '15%' }} />
        </div>
      </div>
    </section>
  );
};

export default Home;
