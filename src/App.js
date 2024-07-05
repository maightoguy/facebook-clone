import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import HeaderArea from "./HeaderArea/HeaderArea";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/headerArea" element={<HeaderArea />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
