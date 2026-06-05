import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Registration from "./Registration";
import ApiCalling from "./Apicalling"; 

import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import "./App.css"; 

// Active navigation helper
function SidebarLink({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link to={to} className={`sidebar-link ${isActive ? "active" : ""}`}>
      <span className="sidebar-icon">{icon}</span>
      <span className="sidebar-label">{label}</span>
    </Link>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <SidebarLink 
          to="/" 
          label="Overview" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>
          } 
        />
        <SidebarLink 
          to="/api-users" 
          label="Products API" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          } 
        />
        <SidebarLink 
          to="/counter" 
          label="Counter Widget" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22V2"/><path d="M7 22V2"/><path d="M12 7v10"/><path d="M12 7 9 10"/><path d="M12 17 15 14"/></svg>
          } 
        />
        <SidebarLink 
          to="/register" 
          label="Register Form" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
          } 
        />
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section-title">Account</div>
      <div className="sidebar-menu">
        <SidebarLink 
          to="/dashboard/profile" 
          label="Profile" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0-7 7c0 4.3 7 13 7 13s7-8.7 7-7a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="1"/></svg>
          } 
        />
        <SidebarLink 
          to="/dashboard/settings" 
          label="Settings" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          } 
        />
      </div>

      <div className="sidebar-footer">
        <div className="user-avatar-mini">VM</div>
        <div className="user-info-mini">
          <div className="user-name">Vinit Mistri</div>
          <div className="user-role">Administrator</div>
        </div>
      </div>
    </aside>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-panel glass-panel">
      <div className="panel-header">
        <h2>Dashboard Panel</h2>
      </div>
      <div className="panel-body">
        <Outlet />
      </div>
    </div>
  );
}

function DashboardOverview({ count, text }) {
  return (
    <div className="overview-container">
      <div className="welcome-banner glass-panel">
        <div className="welcome-text">
          <h1>Welcome back, Vinit!</h1>
          <p>Here is what's happening with your workspace metrics today.</p>
        </div>
        <div className="welcome-badge">
          <span className="pulse-indicator"></span>
          Live Sync Active
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <div className="stat-header">
            <span className="stat-title">Catalog Products</span>
            <span className="stat-icon-wrap primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
            </span>
          </div>
          <div className="stat-value">20</div>
          <div className="stat-change positive">
            <span className="arrow">↑</span> 12.5% <span className="stat-desc">from FakeStore API</span>
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-header">
            <span className="stat-title">Active Counter</span>
            <span className="stat-icon-wrap success">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </span>
          </div>
          <div className="stat-value">{count}</div>
          <div className="stat-change">
            <span className="stat-desc">You typed: <strong>{text || "nothing yet"}</strong></span>
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-header">
            <span className="stat-title">Users Registered</span>
            <span className="stat-icon-wrap warning">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </span>
          </div>
          <div className="stat-value">3</div>
          <div className="stat-change positive">
            <span className="arrow">↑</span> +1 <span className="stat-desc">this session</span>
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-header">
            <span className="stat-title">System Status</span>
            <span className="stat-icon-wrap accent">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            </span>
          </div>
          <div className="stat-value text-success">Online</div>
          <div className="stat-change">
            <span className="status-dot green"></span>
            <span className="stat-desc">Port 5500 Connected</span>
          </div>
        </div>
      </div>

      <div className="overview-graphics-grid">
        <div className="graphics-card glass-panel">
          <h3>System Performance Analysis</h3>
          <div className="chart-container">
            <svg viewBox="0 0 500 150" className="animated-chart">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 120 C 50 110, 80 50, 130 70 C 180 90, 220 30, 270 40 C 320 50, 360 110, 410 80 C 460 50, 480 30, 500 10 L 500 150 L 0 150 Z" fill="url(#chartGradient)" />
              <path d="M0 120 C 50 110, 80 50, 130 70 C 180 90, 220 30, 270 40 C 320 50, 360 110, 410 80 C 460 50, 480 30, 500 10" fill="none" stroke="var(--primary)" strokeWidth="3" className="chart-line" />
              <circle cx="130" cy="70" r="4" fill="var(--accent)" stroke="#fff" strokeWidth="1.5" />
              <circle cx="270" cy="40" r="4" fill="var(--accent)" stroke="#fff" strokeWidth="1.5" />
              <circle cx="410" cy="80" r="4" fill="var(--accent)" stroke="#fff" strokeWidth="1.5" />
              <circle cx="500" cy="10" r="4" fill="var(--accent)" stroke="#fff" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="chart-labels">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>

        <div className="graphics-card glass-panel quick-links-card">
          <h3>Quick Controls</h3>
          <div className="quick-actions-list">
            <Link to="/api-users" className="action-item">
              <span className="action-bullet primary"></span>
              <div className="action-info">
                <h4>Browse Products</h4>
                <p>Fetch products listing dynamically</p>
              </div>
              <span className="arrow-go">→</span>
            </Link>
            <Link to="/counter" className="action-item">
              <span className="action-bullet success"></span>
              <div className="action-info">
                <h4>Run Counter Tests</h4>
                <p>Interact with application states</p>
              </div>
              <span className="arrow-go">→</span>
            </Link>
            <Link to="/register" className="action-item">
              <span className="action-bullet warning"></span>
              <div className="action-info">
                <h4>Add New Account</h4>
                <p>Connect new user credentials</p>
              </div>
              <span className="arrow-go">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="profile-settings-view">
      <div className="profile-header">
        <div className="profile-avatar">VM</div>
        <div className="profile-meta">
          <h3>Vinit Mistri</h3>
          <p>Administrator • vinit@mywebsite.com</p>
        </div>
      </div>
      <div className="profile-body-form">
        <div className="form-row">
          <div className="form-col">
            <label>First Name</label>
            <input type="text" defaultValue="Vinit" className="profile-input" />
          </div>
          <div className="form-col">
            <label>Last Name</label>
            <input type="text" defaultValue="Mistri" className="profile-input" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label>Email Address</label>
            <input type="email" defaultValue="vinit@mywebsite.com" className="profile-input" />
          </div>
          <div className="form-col">
            <label>Phone Number</label>
            <input type="text" defaultValue="+91 9876543210" className="profile-input" />
          </div>
        </div>
        <button className="glow-btn save-profile-btn">Save Changes</button>
      </div>
    </div>
  );
}

function UserSettings() {
  return (
    <div className="profile-settings-view">
      <h3>System Settings Configuration</h3>
      <p className="settings-intro">Customize your developer panel defaults and api integrations.</p>
      
      <div className="settings-list">
        <div className="setting-row">
          <div className="setting-desc">
            <h4>Live Database Sync</h4>
            <p>Sync new registrations directly to the local MongoDB database automatically</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="switch-slider"></span>
          </label>
        </div>

        <div className="setting-row">
          <div className="setting-desc">
            <h4>High-Performance Graphics</h4>
            <p>Enable smooth CSS transitions and SVG animations across statistics screens</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="switch-slider"></span>
          </label>
        </div>

        <div className="setting-row">
          <div className="setting-desc">
            <h4>Developer Debug Mode</h4>
            <p>Write debug trace to console during REST API exchanges with Mock API</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="switch-slider"></span>
          </label>
        </div>
      </div>
      <button className="glow-btn save-profile-btn">Apply Preferences</button>
    </div>
  );
}

// Visual placeholders for other links
function InfoPage({ title, description, iconColor }) {
  return (
    <div className="info-page-view glass-panel">
      <div className={`info-icon-wrapper ${iconColor || "primary"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </div>
      <h2>{title} Page</h2>
      <p>{description}</p>
      <div className="mock-text-blocks">
        <div className="mock-line"></div>
        <div className="mock-line short"></div>
        <div className="mock-line medium"></div>
      </div>
    </div>
  );
}

function App() {
  // Lifted state to keep the counter synchronized
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            
            <Routes>
              {/* Main Dashboard / Overview Route */}
              <Route path="/" element={<DashboardOverview count={count} text={text} />} />

              {/* Parent Route: Dashboard with nested routes */}
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardOverview count={count} text={text} />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="settings" element={<UserSettings />} />
              </Route>
              
              {/* Standalone Route: Registration Page */}
              <Route path="/register" element={<Registration />} />
              <Route path="/signup" element={<Registration />} />
              
              {/* Standalone Route: API Data Fetching Page */}
              <Route path="/api-users" element={<ApiCalling />} />

              {/* Standalone Route: Counter Page */}
              <Route path="/counter" element={<Counter count={count} setCount={setCount} text={text} setText={setText} />} />

              {/* General Pages from Header */}
              <Route path="/about" element={<InfoPage title="About Us" description="We are dedicated to building premium high-performance web applications." iconColor="primary" />} />
              <Route path="/services" element={<InfoPage title="Our Services" description="Providing custom API integrations, dashboard controls, and database links." iconColor="accent" />} />
              <Route path="/contact" element={<InfoPage title="Contact Us" description="Have questions? Reach out to our team at support@mywebsite.com" iconColor="warning" />} />
            </Routes>

          </main>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;