import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

function Header() {
  return (
    <header className="app-header">
      <div className="header-logo">
        <h2>MyWebsite</h2>
      </div>

      <nav className="header-nav">
        <ul>
          {/* Changed <a> to <Link> and href to 'to' */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <div className="header-actions">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;