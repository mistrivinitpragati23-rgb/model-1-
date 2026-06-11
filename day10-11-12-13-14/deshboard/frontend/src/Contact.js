import React, { useState } from "react";
import "./App.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", topic: "general", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your support ticket regarding "${formData.topic}" has been logged successfully in our system log.`);
    setFormData({ name: "", email: "", topic: "general", message: "" });
  };

  return (
    <div className="dashboard-panel glass-panel">
      <div className="panel-header">
        <h2>Contact & Developer Support</h2>
      </div>
      <div className="panel-body">
        <div className="overview-graphics-grid" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "30px" }}>
          
          {/* Support Form */}
          <div className="profile-settings-view">
            <h3>Send a Message</h3>
            <p className="settings-intro">Have queries about Mongoose syncs or dashboard modules? Let us know.</p>
            
            <form onSubmit={handleSubmit} className="profile-body-form">
              <div className="form-row">
                <div className="form-col">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    placeholder="Enter your name" 
                    required 
                    className="profile-input" 
                  />
                </div>
                <div className="form-col">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    placeholder="student@example.com" 
                    required 
                    className="profile-input" 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-col">
                  <label>Subject / Topic</label>
                  <select 
                    value={formData.topic} 
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })} 
                    className="profile-input" 
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", cursor: "pointer" }}
                  >
                    <option value="general">General Support</option>
                    <option value="api">FakeStore API Issues</option>
                    <option value="mongodb">MongoDB Connection Error</option>
                    <option value="bug">Dashboard Layout Bug</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-col">
                  <label>Your Message</label>
                  <textarea 
                    rows="4" 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    placeholder="Describe your issue or feedback in detail..." 
                    required 
                    className="profile-input" 
                    style={{ resize: "none", fontFamily: "inherit" }}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="glow-btn save-profile-btn">Submit Ticket</button>
            </form>
          </div>

          {/* Quick Details Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="graphics-card glass-panel" style={{ padding: "20px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "8px" }}>🏢 Campus Desk</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.5" }}>
                Student Union Building<br />
                Ground Floor, Office 12B<br />
                University Campus
              </p>
            </div>
            
            <div className="graphics-card glass-panel" style={{ padding: "20px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "8px" }}>📧 Electronic Mail</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.5" }}>
                admin@auradash.io<br />
                vinit@mywebsite.com
              </p>
            </div>

            <div className="graphics-card glass-panel" style={{ padding: "20px" }}>
              <h4 style={{ color: "var(--success)", marginBottom: "8px" }}>🕒 Working Hours</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.5" }}>
                Monday - Friday: 10:00 - 18:00<br />
                Saturday - Sunday: Close
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
