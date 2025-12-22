// src/components/Hero.jsx
import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-gradient" aria-label="Hero section">
      {/* ================================
          HERO BACKGROUND IMAGE (LCP)
         ================================ */}
      <img
        src="/hero-bg.webp"
        alt=""
        role="presentation"
        className="hero-bg-img"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width="1920"
        height="1080"
      />

      {/* ================================
          OVERLAY
         ================================ */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* ================================
          HERO CONTENT
         ================================ */}
      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-7 text-white">
            <h1 className="hero-title">
              Enterprise-Grade Cloud, Infrastructure, and DevOps Solutions
            </h1>

            <p className="hero-sub mt-3 mb-4">
              We build reliable, scalable, and secure infrastructure — from cloud
              deployments to high-availability clusters, DevOps automation, and
              24/7 SRE support.
            </p>

            <a href="/contact" className="btn btn-danger btn-lg px-4 mb-4">
              Get a quote
            </a>

            <ul className="hero-stats list-unstyled d-flex gap-4 flex-wrap">
              <li className="stat-item">
                <div className="stat-number">120+</div>
                <div className="stat-label">Deployments completed</div>
              </li>

              <li className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Monitoring & SRE</div>
              </li>

              <li className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
