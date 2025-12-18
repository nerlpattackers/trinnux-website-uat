// src/pages/Careers.jsx
import React from "react";
import { Cloud, Shield, Cpu, Mail } from "lucide-react";
import "../styles/careers.css";

export default function Careers() {
  return (
    <>
      {/* ===============================
          HERO SECTION
      =============================== */}
      <header className="careers-hero text-center">
        <div className="careers-hero-inner" data-aos="fade-up">
          <h1 className="careers-hero-title">Join the Future of Modern Infrastructure</h1>
          <p className="careers-hero-sub">
            We’re not hiring yet — but great people always find a place with us.
            Send us your resume and we’ll keep your profile for future openings.
          </p>

          {/* Send Resume Button */}
          <a
            href="mailto:careers@trinnux.com?subject=Resume Application&body=Hi 3NNUX Team,%0D%0A%0D%0AI would like to submit my resume for future opportunities.%0D%0A%0D%0ARegards,%0D%0A"
            className="careers-btn btn-maroon-gradient"
          >
            <Mail size={18} className="me-2" />
            Send Resume
          </a>
        </div>

        {/* Floating icons */}
        <div className="floating-icon fi-1"><Cloud size={30} /></div>
        <div className="floating-icon fi-2"><Shield size={27} /></div>
        <div className="floating-icon fi-3"><Cpu size={30} /></div>
        <div className="floating-icon fi-4"><Mail size={28} /></div>
        <div className="floating-icon fi-5"><Cpu size={26} /></div>
        <div className="floating-icon fi-6"><Shield size={26} /></div>
        <div className="floating-icon fi-7"><Cloud size={26} /></div>
      </header>

      {/* ===============================
          WHY JOIN SECTION
      =============================== */}
      <section className="py-5">
        <div className="container" data-aos="fade-up">
          <h2 className="careers-title mb-3">Why join Trinnux?</h2>
          <p className="text-muted mb-4">
            We're building a team dedicated to infrastructure excellence,
            automation, secure systems, and great engineering culture.
          </p>

          <div className="careers-card p-4 p-md-5">
            <ul className="careers-list">
              <li>Work with modern cloud, networking, and DevOps ecosystems</li>
              <li>Strong engineering culture focused on automation and reliability</li>
              <li>Flexible, remote-friendly future opportunities</li>
              <li>Direct impact on critical infrastructure projects</li>
              <li>Opportunity to learn fast with mentorship from experts</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
