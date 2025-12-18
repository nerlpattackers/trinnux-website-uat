import React from "react";

export default function Hero() {
  return (
    <section className="hero-gradient py-5">
      <div className="container py-5">

        <div className="row align-items-center">
          
          {/* LEFT SIDE — TEXT */}
          <div
            className="col-lg-7"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            <h1 className="display-4 fw-bold text-white lh-sm">
              Reliable Cloud & Infrastructure Solutionssss
            </h1>

            <p className="lead hero-sub mt-3 mb-4">
              We help companies deploy resilient systems so your products stay
              online, scale effortlessly, and remain secure.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-3">
              <a href="/contact" className="btn btn-light btn-lg px-4">
                Get a quote
              </a>

              <a href="/services" className="btn btn-outline-light btn-lg px-4">
                Our services
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — INFO CARD */}
          <div
            className="col-lg-5 mt-4 mt-lg-0"
            data-aos="fade-left"
            data-aos-delay="140"
          >
            <div
              className="card border-0 shadow-sm hero-inner"
              style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(4px)"
              }}
            >
              <div className="card-body p-4">
                <h5 className="fw-semibold" style={{ color: "var(--text)" }}>
                  Managed Services
                </h5>

                <p className="small mb-3" style={{ color: "var(--muted)" }}>
                  On-call SRE support, 24/7 incident response, and proactive 
                  infrastructure monitoring.
                </p>

                <a href="/services" className="btn btn-primary w-100">
                  Learn more
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
