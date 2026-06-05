import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="app-header">
      <div className="header-brand">
        <Link to="/" className="logo-wrap">
          <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span className="logo-text">AuraDash</span>
        </Link>
      </div>

      <div className="header-search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search workspace, documents..." className="search-input" />
      </div>

      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/" className={isLinkActive("/") ? "active" : ""}>Overview</Link>
          </li>
          <li>
            <Link to="/about" className={isLinkActive("/about") ? "active" : ""}>About</Link>
          </li>
          <li>
            <Link to="/services" className={isLinkActive("/services") ? "active" : ""}>Services</Link>
          </li>
          <li>
            <Link to="/contact" className={isLinkActive("/contact") ? "active" : ""}>Contact</Link>
          </li>
          <li>
            <Link to="/api-users" className={isLinkActive("/api-users") ? "active" : ""}>API Data</Link>
          </li>
        </ul>
      </nav>
      
      <div className="header-actions">
        <button className="icon-action-btn notification-btn" aria-label="Notifications">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="notif-badge"></span>
        </button>
        
        <Link to="/register" className="register-link-wrap">
          <button className="register-btn glow-btn">Register</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;