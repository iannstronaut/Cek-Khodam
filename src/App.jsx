import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="bg-image">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
