// src/pages/Maintenance.jsx
import React from "react";
import "../styles/maintenance.css";

export default function Maintenance() {
  return (
    <main className="maintenance">
      <div className="maintenance-card">
        <h1>🚧 Under Maintenance</h1>
        <p>
          We’re currently working on improvements to our website.
          Please check back again soon.
        </p>
        <span className="maintenance-brand">
          — 3NNUX Technologies Corp.
        </span>
      </div>
    </main>
  );
}
