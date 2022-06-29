// React
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages

// Style
import "./index.css";
import SearchOffice from "./pages/SearchOffice";
import "./style/custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchOffice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
