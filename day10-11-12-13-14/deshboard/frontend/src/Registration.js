import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Registration.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5500/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201 || response.status === 200) {
        setRegisteredSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 2200);
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
      if (err?.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError(
          "Unable to connect to the backend server. Please verify it is running on port 5500."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (registeredSuccess) {
    return (
      <div className="register-container">
        <div className="register-form glass-panel success-card">
          <div className="success-icon-wrap">
            <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h2>Registration Successful!</h2>
          <p className="success-msg-desc">Your profile has been created. Redirecting to workspace overview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form glass-panel">
        <h2>Create Account</h2>
        <p className="form-subtitle">Get started with your developer dashboard profile.</p>

        <div className="register-form-group">
          <label className="input-label">Full Name</label>
          <div className="input-field-wrap">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </span>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="register-input"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="register-form-group">
          <label className="input-label">Email Address</label>
          <div className="input-field-wrap">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="register-form-group">
          <label className="input-label">Password</label>
          <div className="input-field-wrap">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <input
              type="password"
              placeholder="Create strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {error && (
          <div className="register-error-banner" aria-live="polite">
            <svg className="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="register-submit-btn glow-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="btn-spinner-layout">
              <span className="spinner-circle"></span>
              <span>Creating Account...</span>
            </div>
          ) : (
            "Create Account"
          )}
        </button>
      </form>
    </div>
  );
}

export default Register;