import React, { useState } from "react";

function Registration() {
  // --- STATE ---
  // We use separate state variables for every input so the code is easy to read.
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // --- EVENT HANDLER ---
  // The 'e' stands for 'event' (the submission of the form).
  const handleSubmit = (e) => {
    // e.preventDefault() is crucial. Normal HTML forms refresh the whole page when submitted. 
    // This stops that, allowing React to handle the data smoothly.
    e.preventDefault(); 

    // Custom Validation: Check if the user typed the same password twice.
    if (password !== confirmPassword) {
      alert("Error: Passwords do not match!");
      return; // The 'return' stops the function instantly so the success code below doesn't run.
    }

    // Success action! In a real app, this is where you would send the data to your backend.
    alert("Registration Successful for " + username + "!");
    
    // Clear the form fields back to empty after a successful submission.
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  // --- UI RENDER ---
  return (
    <div style={{ padding: "20px" }}>
      <h2>Create an Account</h2>
      
      {/* We attach our custom handleSubmit function to the form's onSubmit event */}
      <form onSubmit={handleSubmit}>
        
        {/* CONTROLLED COMPONENTS */}
        {/* In React, an input's 'value' is tied directly to a state variable. 
            When the user types (onChange), we instantly update the state using e.target.value. */}
        <p>
          <label>Username: </label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required // Basic HTML5 validation to ensure the field isn't empty
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