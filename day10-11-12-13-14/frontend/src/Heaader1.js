import React from "react";
import { Link } from "react-router-dom";

function Header1() {
  return (
    <header className="app-header">
      <div className="header-logo">
        <h2>MyWebsite</h2>
      </div>

      <nav className="header-nav">
        <ul>
  
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/api-users">API Data</Link></li>     
          <li><Link to="/show">Show Users</Link></li>
        </ul>
        
      </nav>
      
    </header>
  );
}

export default Header1;