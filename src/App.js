import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<UserLogin />} /> */}
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/customer/login" element={<UserLogin/>} />
      </Routes>
    </div>
  );
}
export default App;
