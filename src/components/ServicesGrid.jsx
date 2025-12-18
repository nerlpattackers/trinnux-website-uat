// src/components/ServicesGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Users, Briefcase, Code2, Cloud } from "lucide-react";
import "../styles/services.css";

const services = [
  { Icon: Users, title: "Managed Services", desc: "Gain access to our internal and network of architects and support engineers.", path: "/services/managed" },
  { Icon: Briefcase, title: "Staff Augmentation", desc: "Value your independence? Manage your own staff on-demand.", path: "/services/staff" },
  { Icon: Code2, title: "Software Development & Management", desc: "Design, develop and maintain software for your business while you focus on operations.", path: "/services/software" },
  { Icon: Cloud, title: "Cloud Infrastructure Management", desc: "Accelerate cloud adoption with a risk-mitigated approach, solid security, continuous improvement, and DevOps.", path: "/services/cloud" },
];

export default function ServicesGrid() {
  return (
    <section className="py-5 reveal" aria-labelledby="services-general">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-8" data-aos="fade-up">
            <h2 className="os-title">Our Services</h2>
            <p className="os-sub text-muted">
              High-level service offerings that support your technology strategy, operations, and long-term growth.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={80 + i * 80}
            >
              <article className="os-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="os-icon maroon mb-3" aria-hidden>
                    <s.Icon size={28} strokeWidth={1.7} />
                  </div>

                  <h5 className="fw-bold mb-2">{s.title}</h5>
                  <p className="text-muted small mb-3">{s.desc}</p>
                </div>

                <div className="mt-auto">
                  {/* clickable general Learn more */}
                  <Link to={s.path} className="small text-maroon fw-semibold">
                    Learn more →
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
