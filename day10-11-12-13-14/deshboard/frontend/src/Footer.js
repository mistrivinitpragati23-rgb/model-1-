import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer glass-panel">
      <div className="footer-left">
        <span className="footer-copyright">
          © {currentYear} <Link to="/" className="footer-brand-link">AuraDash</Link>. All rights reserved.
        </span>
      </div>

      <div className="footer-center">
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-right">
        <div className="system-health">
          <span className="health-dot animated-pulse"></span>
          <span className="health-text">All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;