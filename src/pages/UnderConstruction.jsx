import React from "react";
import "../styles/under-construction.css";

export default function UnderConstruction({
  title = "Page Under Construction",
  subtitle = "We’re currently working on this section.",
}) {
  return (
    <main className="uc-page">
      <div className="container">
        <div className="uc-card" data-aos="fade-up">
          {/* Accent */}
          <div className="uc-accent" />

          {/* Icon */}
          <span className="uc-icon">🚧</span>

          <h1>{title}</h1>

          <p className="uc-sub">{subtitle}</p>

          <p className="uc-muted">
            This section is being carefully designed to reflect our values,
            leadership, and culture. Please check back soon.
          </p>
        </div>
      </div>
    </main>
  );
}
