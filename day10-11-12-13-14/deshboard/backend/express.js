const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose'); // Import mongoose to manage the direct connection

// --- CONNECT TO MONGODB DIRECTLY ---
// Using 127.0.0.1 instead of localhost avoids Node.js IPv6 resolution freezes
const MONGO_URI = "mongodb://127.0.0.1:27017/test"; 

mongoose.connect(MONGO_URI)
    .then(() => console.log("🎉 Successfully connected to MongoDB at:", MONGO_URI))
    .catch((err) => {
        console.error("❌ MongoDB connection failed! Error details:");
        console.error(err);
        process.exit(1); // Stop the server if the database fails to connect
    });

// Import your user model AFTER establishing the database connection framework
const { user_model } = require('./db/user.js');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve all static frontend source assets globally
app.use(express.static(path.join(__dirname, "../frontend/src")));

// --- SERVE THE ACTUAL FRONTEND FILES ---

// Home Page Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/src/index.html"));
});

// About Page Route
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/src/about.html"));
});

// Signup Page View Route
app.get("/signup-page", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/src/signup.html"));
});
app.get("show", async (req, res) => {
    const users = await user_model.find();
    res.json(users);
});
// --- API ENDPOINTS ---

// Functional Data Submission Route
app.post("/signup", async (req, res) => {
    try {
        console.log("Signup Request Received: ", req.body);
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        
        const user = new user_model({ name, email, password });
        const result = await user.save();
        
        const responseData = result.toObject();
        delete responseData.password; // Omit hash/sensitive strings from payloads
        
        res.status(201).json({ success: true, user: responseData });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ error: "Internal Server Error during registration" });
    }
});

app.listen(5500, () => {
    console.log("🚀 Unified Full-Stack application running at http://localhost:5500");
});