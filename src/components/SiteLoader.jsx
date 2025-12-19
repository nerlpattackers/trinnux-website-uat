// src/components/SiteLoader.jsx
import React, { useEffect, useState } from "react";
import "../styles/site-loader.css";

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  /* ============================
     PRODUCTION CONFIG
     ============================ */
  const LOADER_DURATION_MS = 300; // ✅ production-safe

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
    }, LOADER_DURATION_MS);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="site-loader" role="status" aria-label="Loading site">
      <div className="loader-inner">
        <span className="loader-logo">TRINNUX</span>
        <div className="loader-bar" />
      </div>
    </div>
  );
}
