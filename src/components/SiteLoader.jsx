// src/components/SiteLoader.jsx
import React, { useEffect, useState } from "react";
import "../styles/site-loader.css";

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  /* ============================
     CONFIG
     ============================ */
  const LOADER_SECONDS = 2;          // 👈 change this (1, 2, 3, etc.)
  const LOADER_DURATION = LOADER_SECONDS * 1000;

  useEffect(() => {
    // Show loader only once per tab
    const hasLoaded = sessionStorage.getItem("site-loaded");

    if (hasLoaded) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem("site-loaded", "true");

    const timer = setTimeout(() => {
      setVisible(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, [LOADER_DURATION]);

  if (!visible) return null;

  return (
    <div className="site-loader" role="status" aria-label="Loading site">
      <div className="loader-inner">
        <span className="loader-logo">TRINNUX</span>

        <div className="loader-bar" />

        <div className="loader-seconds">
          Loading… {LOADER_SECONDS}s
        </div>
      </div>
    </div>
  );
}
