import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-section">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-link"
        >
          Home
        </a>
        <a
          href="#about"
          className="navbar-link"
        >
          About
        </a>
        <a
          href="#skills"
          className="navbar-link"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="navbar-link"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
