// src/components/ServicePage.jsx
import React from "react";
import "../styles/service-page.css";

export default function ServicePage({ Icon, title, intro, sections = [], deliverables = [] }) {
  return (
    <section className="py-5 service-page">
      <div className="container">
        <div className="row">
          {/* MAIN CONTENT */}
          <div className="col-lg-8">
            <div className="d-flex align-items-start gap-3 mb-4 sp-heading" data-aos="fade-up">
              <div className="sp-icon-bubble red" aria-hidden>
                {Icon && <Icon size={28} strokeWidth={1.7} />}
              </div>

              <div>
                <h1 className="sp-title mb-1">{title}</h1>
                <p className="sp-intro text-muted">{intro}</p>
              </div>
            </div>

            {sections.map((s, i) => (
              <div key={i} className="mb-4" data-aos="fade-up" data-aos-delay={70 + i * 50}>
                <h3 className="sp-section-heading">{s.heading}</h3>

                {s.body && <p className="sp-section-body text-muted">{s.body}</p>}

                {s.items && (
                  <ul className="sp-list text-muted">
                    {s.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* SIDEBAR DELIVERABLES */}
          <div className="col-lg-4" data-aos="fade-left">
            <aside className="sp-sidebar">
              <h4 className="mb-2">Typical deliverables</h4>

              <ul className="sp-list text-muted mb-3">
                {deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              <h6 className="fw-bold mt-3 mb-1">Ready to start?</h6>
              <p className="text-muted small">
                Get a scoped proposal and timeline — we'll tailor to your environment.
              </p>

              <a href="/contact" className="btn btn-danger mt-2 w-100">Contact sales</a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
