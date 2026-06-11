import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ApiCalling.css"; // Reuse catalog styles for consistent panels and tables

function ShowUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5500/showusers")
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError("Could not retrieve users from database. Make sure the backend server is running.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="api-page">
        <div className="api-header-section">
          <h2>Registered Users</h2>
          <p>Fetching dynamic records from MongoDB database.</p>
        </div>
        
        {/* Loading skeleton wrapper */}
        <div className="api-table-wrap glass-panel p-4">
          <div className="skeleton-line title loading-shimmer mb-4" style={{ width: "20%" }}></div>
          <div className="skeleton-line loading-shimmer mb-3" style={{ height: "40px", width: "100%" }}></div>
          <div className="skeleton-line loading-shimmer mb-3" style={{ height: "40px", width: "100%" }}></div>
          <div className="skeleton-line loading-shimmer mb-3" style={{ height: "40px", width: "100%" }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-page">
        <div className="api-error-card glass-panel">
          <div className="error-icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="error-alert-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h3>Failed to Load Users</h3>
          <p>{error}</p>
          <button className="glow-btn retry-btn" onClick={() => window.location.reload()}>Retry Connection</button>
        </div>
      </div>
    );
  }

  return (
    <div className="api-page">
      <div className="api-header-section">
        <div className="api-title-desc">
          <h2>Registered Users</h2>
          <p>Explore all accounts registered within the FoodieHaven database ecosystem.</p>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="no-products-found glass-panel">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="empty-box-icon"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          <h3>No Users Found</h3>
          <p>There are no registered users in the database yet. You can sign up using the website registration forms.</p>
        </div>
      ) : (
        <div className="api-table-wrap glass-panel">
          <table className="api-table">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>No.</th>
                <th style={{ width: "35%" }}>Name</th>
                <th style={{ width: "40%" }}>Email Address</th>
                <th style={{ width: "15%" }}>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id || idx}>
                  <td className="table-product-id">#{idx + 1}</td>
                  <td className="table-product-title">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div className="user-avatar-mini" style={{ width: "30px", height: "30px", fontSize: "0.8rem", flexShrink: 0 }}>
                        {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                      </div>
                      <strong>{user.name || "N/A"}</strong>
                    </div>
                  </td>
                  <td>
                    <span style={{ color: "var(--text)" }}>{user.email}</span>
                  </td>
                  <td>
                    <span className="table-category-badge" style={{ textTransform: "uppercase", fontSize: "0.7rem", fontWeight: "700" }}>
                      User
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ShowUsers;
