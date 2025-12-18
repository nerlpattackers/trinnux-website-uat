import React from "react";
import { Cloud, GitBranch, Activity } from "lucide-react";
import "../styles/WhatWeDo.css";

const highlights = [
  {
    Icon: Cloud,
    title: "Cloud Modernization",
    desc: "Design, migrate, and optimize secure, scalable cloud platforms.",
  },
  {
    Icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Accelerate delivery with IaC, automated pipelines, and GitOps workflows.",
  },
  {
    Icon: Activity,
    title: "SRE & Reliability",
    desc: "SLA-driven monitoring, alerting, runbooks and incident response.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-5 what-we-do" aria-labelledby="what-we-do-title">
      <div className="container">

        <div className="row align-items-center mb-4">
          <div className="col-md-8" data-aos="fade-up">
            <h2 id="what-we-do-title" className="wwd-title mb-1">What we do</h2>
            <p className="wwd-sub text-muted mb-0">
              We help teams modernize infra, automate delivery, and improve reliability.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {highlights.map((h, i) => (
            <div
              className="col-md-4"
              key={i}
              data-aos="fade-up"
              data-aos-delay={80 + i * 80}
            >
              <article className="wwd-card h-100 p-4">
                <div className="wwd-icon maroon">
                  <h.Icon size={26} strokeWidth={1.8} />
                </div>

                <h5 className="fw-bold mt-3 mb-1">{h.title}</h5>
                <p className="small text-muted mb-0">{h.desc}</p>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
