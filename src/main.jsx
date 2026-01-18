// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CotaClinicSite from "./CotaClinicSitev2.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CotaClinicSite />
    </BrowserRouter>
  </React.StrictMode>
);
