import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Decision from "./decision";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        <h2>Welcome to Decision Desk!</h2>
      </header>

      <main className="main-content">
        <img src="/src/assets/banner.png" alt="Banner" className="banner-image" />
        <p>Your ultimate tool for making informed decisions.</p>

        <button
          className="cta-button"
          onClick={() => navigate("/decision")}
        >
          Let's make a decision
        </button>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision" element={<Decision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;