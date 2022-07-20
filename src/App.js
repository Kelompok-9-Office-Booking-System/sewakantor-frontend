import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<UserLogin />} /> */}
        <Route path="/" element={<AdminLogin/>} />
      </Routes>
    </div>
  );
}
export default App;
