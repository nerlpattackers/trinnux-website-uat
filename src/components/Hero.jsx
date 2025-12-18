// src/components/Hero.jsx
import React, { useRef, useCallback } from "react";
import "../styles/Hero.css";

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
          ANIMATED NETWORK SVG BACKGROUND
         ================================= */}
      <div
        className="hero-animation-bg"
        ref={bgRef}
        aria-hidden="true"
        style={{ pointerEvents: "none", willChange: "transform" }}
      >
        {/* ----------------------------------------
            SVG REMAINS EXACTLY AS ORIGINAL
           ---------------------------------------- */}
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="glowA" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" stopOpacity="0.95" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.65)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" stopOpacity="0" />
            </radialGradient>

            <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feBlend in="SourceGraphic" in2="b" />
            </filter>

            <linearGradient id="lineGrad" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
            </linearGradient>
          </defs>

          {/* ==== CLUSTERS + DRIFT (UNCHANGED) ==== */}

          <g id="cluster-left" transform="translate(220,260)">
            <circle cx="0" cy="0" r="3.8" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="3.8;5.2;3.8" dur="6.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="0;14;0" dur="7.2s" repeatCount="indefinite" />
            </circle>

            <circle cx="110" cy="60" r="4.6" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="4.6;6;4.6" dur="8.1s" repeatCount="indefinite" />
              <animate attributeName="cx" values="110;122;110" dur="9s" repeatCount="indefinite" />
            </circle>

            <circle cx="40" cy="120" r="3.2" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="3.2;4.4;3.2" dur="5.8s" repeatCount="indefinite" />
              <animate attributeName="cy" values="120;132;120" dur="6.6s" repeatCount="indefinite" />
            </circle>

            <line x1="0" y1="0" x2="110" y2="60" stroke="url(#lineGrad)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.14;0.05;0.14" dur="7.2s" repeatCount="indefinite" />
            </line>

            <line x1="110" y1="60" x2="40" y2="120" stroke="url(#lineGrad)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.12;0.03;0.12" dur="6.2s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Center cluster */}
          <g id="cluster-center" transform="translate(900,520)">
            <circle cx="0" cy="0" r="5.2" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="5.2;7.2;5.2" dur="8.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="0;16;0" dur="9s" repeatCount="indefinite" />
            </circle>

            <circle cx="160" cy="-30" r="4.6" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="4.6;6;4.6" dur="6.8s" repeatCount="indefinite" />
              <animate attributeName="cx" values="160;148;160" dur="7.6s" repeatCount="indefinite" />
            </circle>

            <circle cx="-140" cy="70" r="3.6" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="3.6;5;3.6" dur="7.4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="70;86;70" dur="8.2s" repeatCount="indefinite" />
            </circle>

            <line x1="-140" y1="70" x2="0" y2="0" stroke="url(#lineGrad)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.12;0.04;0.12" dur="7.8s" repeatCount="indefinite" />
            </line>
            <line x1="0" y1="0" x2="160" y2="-30" stroke="url(#lineGrad)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.14;0.05;0.14" dur="9s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Right cluster */}
          <g id="cluster-right" transform="translate(1500,380)">
            <circle cx="0" cy="0" r="3.6" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="3.6;5.4;3.6" dur="7.2s" repeatCount="indefinite" />
              <animate attributeName="cy" values="0;12;0" dur="6.2s" repeatCount="indefinite" />
            </circle>

            <circle cx="-100" cy="-40" r="4.4" fill="url(#glowA)" filter="url(#softBlur)">
              <animate attributeName="r" values="4.4;6;4.4" dur="6.9s" repeatCount="indefinite" />
              <animate attributeName="cx" values="-100;-112;-100" dur="8.1s" repeatCount="indefinite" />
            </circle>

            <line x1="0" y1="0" x2="-100" y2="-40" stroke="url(#lineGrad)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.12;0.03;0.12" dur="6.4s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Depth drifting nodes */}
          <g id="drift" opacity="0.9">
            <circle cx="420" cy="820" r="2.4" fill="url(#glowA)">
              <animate attributeName="cy" values="820;840;820" dur="11s" repeatCount="indefinite" />
            </circle>

            <circle cx="1280" cy="920" r="2.8" fill="url(#glowA)">
              <animate attributeName="cx" values="1280;1304;1280" dur="12s" repeatCount="indefinite" />
            </circle>

            <circle cx="1720" cy="160" r="2.2" fill="url(#glowA)">
              <animate attributeName="cy" values="160;176;160" dur="9s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      {/* ================================
          HERO MAIN CONTENT
         ================================= */}
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT — Text, CTA, Stats */}
          <div className="col-lg-7 text-white" data-aos="fade-right" data-aos-delay="80">

            {/* NEW HEADLINE */}
            <h1 className="hero-title display-4 fw-bold lh-sm">
              Enterprise-Grade Cloud, Infrastructure, and DevOps Solutions
            </h1>

            {/* NEW SUBTEXT */}
            <p className="lead hero-sub mt-3 mb-4 text-white-75">
              We build reliable, scalable, and secure infrastructure — from cloud deployments 
              to high-availability database clusters, network engineering, DevOps automation, 
              and 24/7 SRE support.
            </p>

            {/* CTA BUTTON (only one now) */}
            <div className="d-flex gap-3 flex-wrap mb-4">
              <a href="/contact" className="btn btn-danger btn-lg px-4">
                Get a quote
              </a>
            </div>

            {/* SERVICE-RELATED STATS */}
            <ul className="hero-stats list-unstyled d-flex gap-4 flex-wrap">
              <li className="stat-item">
                <div className="stat-number">120+</div>
                <div className="stat-label">Deployments completed</div>
              </li>

              <li className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Monitoring & SRE support</div>
              </li>

              <li className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime reliability</div>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN REMOVED */}
        </div>
      </div>
    </section>
  );
}
