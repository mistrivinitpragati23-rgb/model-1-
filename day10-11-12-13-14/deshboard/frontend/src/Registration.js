import React, { useState } from "react";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Changed to an async function to handle the fetch request
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (password !== confirmPassword) {
      alert("Error: Passwords do not match!");
      return; 
    }

    // --- NEW: Linking frontend to the backend ---
    try {
      const response = await fetch("http://localhost:5500/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Backend expects 'name', so we pass 'username' as 'name'
        body: JSON.stringify({ name: username, email: email, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success action!
        alert("Registration Successful for " + username + "!");
        
        // Clear the form fields
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        // Handle backend errors (like missing fields)
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Failed to connect to the backend server.");
    }
  };

  // --- UI RENDER (Unchanged) ---
  return (
    <div style={{ padding: "20px" }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username: </label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </p>

        <p>
          <label>Email: </label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>

        <p>
          <label>Password: </label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>

        <p>
          <label>Confirm Password: </label><br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;