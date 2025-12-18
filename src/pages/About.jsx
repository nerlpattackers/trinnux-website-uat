// src/pages/About.jsx
import React from "react";
import { MapPin } from "lucide-react";
import "../styles/about.css";

export default function About() {
  return (
    <main>
      {/* ===============================
          ABOUT INTRO
      =============================== */}
      <section className="about-section py-5">
        <div className="container">

          <div className="row align-items-center g-4">
            {/* LEFT: ABOUT TEXT */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="about-title">About Trinnux</h2>

              <p className="about-sub mt-3">
                3NNUX Technologies Corporation, founded in 2019, is a Managed IT
                Services, Software Development, and Staff Augmentation provider.
              </p>

              <p className="text-muted mt-3">
                Originally started in 2013, Trinnux was built by engineers
                delivering wireless networking, infrastructure deployment,
                server setup, and enterprise support. Today, we help
                organizations operate secure, resilient, and scalable systems
                remotely.
              </p>
            </div>

            {/* RIGHT: MAP */}
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="120">
              <div className="about-map-card">
                <h5 className="mb-1">Our Office</h5>

                <div className="office-address">
                  <MapPin size={16} />
                  <span>
                    Trinnux Technologies Corporation, Quezon City, Philippines
                  </span>
                </div>

                <div className="map-embed mt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4737104061637!2d121.06506807488633!3d14.629030485860744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7cc025226e3%3A0xfec243d676c7ad8b!2sTRINNUX!5e0!3m2!1sen!2sph!4v1766043474691!5m2!1sen!2sph"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title="Trinnux Office Location"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===============================
              METRICS
          =============================== */}
          <div className="row mt-5 g-4 text-center">
            <div className="col-md-4" data-aos="fade-up">
              <div className="about-metric">
                <div className="metric-number">12+</div>
                <div className="metric-label">Years combined experience</div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="80">
              <div className="about-metric">
                <div className="metric-number">200+</div>
                <div className="metric-label">Production deployments</div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="160">
              <div className="about-metric">
                <div className="metric-number">24/7</div>
                <div className="metric-label">Operational support</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
