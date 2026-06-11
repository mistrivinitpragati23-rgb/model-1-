import React from "react";
import "./App.css";

function Services() {
  return (
    <div className="dashboard-panel glass-panel">
      <div className="panel-header">
        <h2>Workspace Services & Features</h2>
      </div>
      <div className="panel-body">
        <p className="settings-intro" style={{ marginBottom: "25px" }}>
          Explore the list of standard modular services fully integrated within the AuraDash platform.
        </p>

        <div className="overview-graphics-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          
          {/* Card 1 */}
          <div className="graphics-card glass-panel" style={{ display: "flex", flexDirection: "column", justifySelf: "stretch" }}>
            <span style={{ fontSize: "2rem", marginBottom: "12px" }}>📁</span>
            <h3 style={{ margin: "0 0 8px 0" }}>Database Sync Integrations</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6", flex: 1 }}>
              Full CRUD schema mapping using Mongoose pipelines. Users registered through the portal sync directly to a local MongoDB instances with automatic password hashing filters.
            </p>
            <div style={{ marginTop: "15px", borderTop: "1px solid var(--border)", paddingTop: "12px", fontSize: "0.8rem", color: "var(--accent)", fontWeight: "600" }}>
              Status: Connected on Port 27017
            </div>
          </div>

          {/* Card 2 */}
          <div className="graphics-card glass-panel" style={{ display: "flex", flexDirection: "column", justifySelf: "stretch" }}>
            <span style={{ fontSize: "2rem", marginBottom: "12px" }}>🔌</span>
            <h3 style={{ margin: "0 0 8px 0" }}>RESTful API Connectivity</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6", flex: 1 }}>
              Pre-integrated Axios configurations fetching product catalogs, categories, and review lists from FakeStore APIs, displaying clean list table grids.
            </p>
            <div style={{ marginTop: "15px", borderTop: "1px solid var(--border)", paddingTop: "12px", fontSize: "0.8rem", color: "var(--success)", fontWeight: "600" }}>
              Status: Live Fetch Synced
            </div>
          </div>

          {/* Card 3 */}
          <div className="graphics-card glass-panel" style={{ display: "flex", flexDirection: "column", justifySelf: "stretch" }}>
            <span style={{ fontSize: "2rem", marginBottom: "12px" }}>⚡</span>
            <h3 style={{ margin: "0 0 8px 0" }}>Widget Synchronization</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6", flex: 1 }}>
              Lifted React states synchronized between local elements (like the Counter control panel) and the global dashboard statistics widgets.
            </p>
            <div style={{ marginTop: "15px", borderTop: "1px solid var(--border)", paddingTop: "12px", fontSize: "0.8rem", color: "var(--primary)", fontWeight: "600" }}>
              Status: Real-time Listener Active
            </div>
          </div>

          {/* Card 4 */}
          <div className="graphics-card glass-panel" style={{ display: "flex", flexDirection: "column", justifySelf: "stretch" }}>
            <span style={{ fontSize: "2rem", marginBottom: "12px" }}>📊</span>
            <h3 style={{ margin: "0 0 8px 0" }}>Graphic Visualization</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6", flex: 1 }}>
              Dynamic SVG line graphics and performance grids reflecting mockup monthly resource analysis with fluid CSS load keyframes.
            </p>
            <div style={{ marginTop: "15px", borderTop: "1px solid var(--border)", paddingTop: "12px", fontSize: "0.8rem", color: "var(--warning)", fontWeight: "600" }}>
              Status: GPU Acceleration Enabled
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;
