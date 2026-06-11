import React from "react";
import "./App.css";

function About() {
  return (
    <div className="dashboard-panel glass-panel">
      <div className="panel-header">
        <h2>About AuraDash</h2>
      </div>
      <div className="panel-body" style={{ color: "var(--text)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          
          {/* Mission Block */}
          <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "24px" }}>
            <h3 style={{ marginBottom: "12px", color: "var(--primary)" }}>Our Vision & Purpose</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              AuraDash is a premium administrator dashboard built to unify workspace metrics, REST API integrations, and database schemas under a single high-performance interface. Designed with modern React frameworks and responsive layouts, AuraDash focuses on maximizing productivity for developers, store managers, and system administrators alike.
            </p>
          </div>

          {/* Grid of Core Values */}
          <div className="stats-grid">
            <div className="stat-card glass-panel" style={{ padding: "20px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "8px" }}>🚀 Rapid Loading</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Built with optimized component trees and virtual DOM updates for instantaneous page transitions and layout rendering.
              </p>
            </div>
            <div className="stat-card glass-panel" style={{ padding: "20px" }}>
              <h4 style={{ color: "var(--success)", marginBottom: "8px" }}>🔒 Secure Nodes</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Restricted data payload queries with client-side password sanitization and secure Express server routing pipelines.
              </p>
            </div>
            <div className="stat-card glass-panel" style={{ padding: "20px" }}>
              <h4 style={{ color: "var(--warning)", marginBottom: "8px" }}>📊 Live Analytics</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Synchronized widget states and SVG performance curves representing active database updates and sync streams.
              </p>
            </div>
          </div>

          {/* Developers Profile */}
          <div style={{ display: "flex", gap: "24px", alignItems: "center", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "24px", flexWrap: "wrap" }}>
            <div className="profile-avatar" style={{ width: "80px", height: "80px", fontSize: "1.8rem" }}>VM</div>
            <div style={{ flex: 1, minWidth: "250px" }}>
              <h3 style={{ margin: "0 0 4px 0" }}>Vinit Mistri</h3>
              <p style={{ color: "var(--primary)", fontWeight: "600", fontSize: "0.9rem", marginBottom: "8px" }}>Full-Stack Developer & Lead Designer</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.5" }}>
                Developed the complete React SPA architecture, custom CSS grids, Express API routes, and MongoDB database link handlers from the ground up for this university capstone project.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
