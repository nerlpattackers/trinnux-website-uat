// src/components/Hero.jsx
import React, { useRef, useCallback } from "react";
import "../styles/hero.css";

export default function Hero() {
  const bgRef = useRef(null);

  // Mouse / touch parallax handler (lightweight)
  const handlePointerMove = useCallback((e) => {
    const target = bgRef.current;
    if (!target) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const rect = target.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width - 0.5;
    const py = (clientY - rect.top) / rect.height - 0.5;

    const translateX = px * 18;
    const translateY = py * 12;
    const rotate = px * 2;

    target.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
    target.style.transition = "transform 120ms linear";
  }, []);

  const handlePointerLeave = useCallback(() => {
    const target = bgRef.current;
    if (!target) return;

    target.style.transform = "translate3d(0,0,0) rotate(0)";
    target.style.transition = "transform 400ms cubic-bezier(.2,.8,.2,1)";
  }, []);

  return (
    <section
      className="hero-gradient"
      aria-label="Hero section"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerLeave}
    >
      {/* ================================
          HERO BACKGROUND IMAGE (FAST LCP)
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
          DARK OVERLAY
         ================================ */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* ================================
          ANIMATED SVG BACKGROUND
         ================================ */}
      <div
        className="hero-animation-bg"
        ref={bgRef}
        aria-hidden="true"
        style={{ pointerEvents: "none", willChange: "transform" }}
      >
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="glowA" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>

            <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>

            <linearGradient id="lineGrad" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
            </linearGradient>
          </defs>

          {/* LEFT CLUSTER */}
          <g transform="translate(220,260)">
            <circle cx="0" cy="0" r="4" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="4;6;4" dur="7s" repeatCount="indefinite" />
            </circle>
            <circle cx="120" cy="80" r="5" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="cx" values="120;140;120" dur="9s" repeatCount="indefinite" />
            </circle>
            <line x1="0" y1="0" x2="120" y2="80" stroke="url(#lineGrad)" strokeWidth="1" />
          </g>

          {/* CENTER CLUSTER */}
          <g transform="translate(960,520)">
            <circle cx="0" cy="0" r="6" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="6;8;6" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="-140" cy="90" r="4" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="cy" values="90;110;90" dur="9s" repeatCount="indefinite" />
            </circle>
            <line x1="-140" y1="90" x2="0" y2="0" stroke="url(#lineGrad)" strokeWidth="1" />
          </g>

          {/* RIGHT CLUSTER */}
          <g transform="translate(1500,380)">
            <circle cx="0" cy="0" r="4" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="cy" values="0;14;0" dur="7s" repeatCount="indefinite" />
            </circle>
            <circle cx="-110" cy="-60" r="5" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="cx" values="-110;-130;-110" dur="8s" repeatCount="indefinite" />
            </circle>
            <line x1="0" y1="0" x2="-110" y2="-60" stroke="url(#lineGrad)" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* ================================
          HERO CONTENT
         ================================ */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-white" data-aos="fade-right">
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
