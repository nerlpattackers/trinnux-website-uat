// src/pages/Services.jsx
import React from "react";
import ServicesGrid from "../components/ServicesGrid";

export default function Services() {
  return (
    <div className="py-1">
      <div className="container">
        {/* Show ONLY the Services Grid */}
        <ServicesGrid />

      </div>
    </div>
  );
}
