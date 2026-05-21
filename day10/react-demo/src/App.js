import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import "./App.css"; 

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
    </aside>
  );
}
function Dashboard() {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", marginTop: "20px" }}>
      <h2>Dashboard Page</h2>
      
      {/* The Outlet is exactly where the child routes will appear */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        
        <div className="main-layout">
          <Sidebar />
          
          <main className="content">
            <Counter></Counter>

            <Routes>
              {/* Parent Route calling the Dashboard component */}
              <Route path="/dashboard" element={<Dashboard />}>
                
                {/* Nested Child Routes */}
                <Route path="profile" element={<h3>User Profile</h3>} />
                <Route path="settings" element={<h3>User Settings</h3>} />
                
              </Route>
            </Routes>

          </main>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;