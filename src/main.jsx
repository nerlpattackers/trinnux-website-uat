import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
// import "./index.css";
import "./styles/index.css";

import AOS from "aos";
import App from "./App";

// Initialize AOS globally
AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: false,
  mirror: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
