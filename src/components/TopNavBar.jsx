import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/TopNav.css";

export default function TopNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const location = useLocation();
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  /* Active route checks */
  const isServicesActive = location.pathname.startsWith("/services");
  const isAboutActive = location.pathname.startsWith("/about");

  /* Close mobile menu & dropdowns on route change */
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    const handler = (e) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }

      if (
        aboutRef.current &&
        !aboutRef.current.contains(e.target)
      ) {
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="topnav">
      <div className="container topnav-inner">

        {/* Logo */}
        <NavLink to="/" className="topnav-logo-wrap">
          <img
            src="/trinnux.png"
            alt="3NNUX"
            className="topnav-logo-icon"
          />

          <div className="topnav-logo-text">
            <span className="logo-name">3NNUX</span>
            <span className="logo-sub">Technologies Corp.</span>
          </div>
        </NavLink>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu */}
        <nav className={`topnav-menu ${menuOpen ? "open" : ""}`}>

          <NavLink to="/" className="topnav-link">
            Home
          </NavLink>

          {/* =========================
              SERVICES DROPDOWN
          ========================= */}
          <div
            className={`topnav-dropdown ${
              servicesOpen ? "open" : ""
            } ${isServicesActive ? "active" : ""}`}
            ref={servicesRef}
          >
            <button
              className={`topnav-dropdown-btn ${
                isServicesActive ? "active" : ""
              }`}
              onClick={() => {
                setServicesOpen((o) => !o);
                setAboutOpen(false);
              }}
            >
              Services
              <span className="dropdown-arrow">▾</span>
            </button>

            <div className="topnav-dropdown-menu">
              <NavLink to="/services/managed">Managed Services</NavLink>
              <NavLink to="/services/staff">Staff Augmentation</NavLink>
              <NavLink to="/services/software">Software Development</NavLink>
              <NavLink to="/services/cloud">Cloud Infrastructure</NavLink>

              <div className="dropdown-divider" />

              <NavLink to="/services" className="all-services">
                View all services →
              </NavLink>
            </div>
          </div>

          <NavLink to="/gallery" className="topnav-link">
            Gallery
          </NavLink>

          <NavLink to="/careers" className="topnav-link">
            Careers
          </NavLink>

          {/* =========================
              ABOUT DROPDOWN (NEW)
          ========================= */}
          <div
            className={`topnav-dropdown ${
              aboutOpen ? "open" : ""
            } ${isAboutActive ? "active" : ""}`}
            ref={aboutRef}
          >
            <button
              className={`topnav-dropdown-btn ${
                isAboutActive ? "active" : ""
              }`}
              onClick={() => {
                setAboutOpen((o) => !o);
                setServicesOpen(false);
              }}
            >
              About
              <span className="dropdown-arrow">▾</span>
            </button>

            <div className="topnav-dropdown-menu">
              <NavLink to="/about">About Trinnux</NavLink>
              <NavLink to="/about/journey">Our Journey</NavLink>
              <NavLink to="/about/values">Our Values</NavLink>
              <NavLink to="/about/team">Leadership & Team</NavLink>
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}
