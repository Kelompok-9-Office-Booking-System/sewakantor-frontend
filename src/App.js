import React from "react";
<<<<<<< Updated upstream
import Login from "./components/login";
=======
import { Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Login></Login>
      </div>
=======
      <Routes>
        <Route path="/" element={<AdminLogin/>} />
      </Routes>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
