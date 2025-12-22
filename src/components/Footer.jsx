// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-v6 mt-0 pt-5 pb-4">
      <div className="container d-flex flex-column align-items-center text-center gap-4">

        {/* Logo (ICON + TEXT) */}
        <div className="footer-logo-wrap">
          <img
            src="/trinnux.png"
            alt="3NNUX"
            className="footer-logo-icon"
          />

          {/* <div className="footer-logo-text">
            <span className="footer-logo-name">3NNUX</span>
            <span className="footer-logo-sub">Technologies Corp.</span>
          </div> */}
        </div>

        {/* Navigation */}
        <nav className="footer-v6-nav d-flex gap-4">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="footer-v6-social d-flex gap-4">
          <a
            href="https://www.facebook.com/trinnuxinc"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://www.linkedin.com/company/3nnux/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a href="mailto:support@trinnux.com" aria-label="Email">
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-v6-copy text-muted small">
          © {new Date().getFullYear()} 3NNUX Technologies Corp. · All rights reserved.
        </div>

      </div>
    </footer>
  );
}
