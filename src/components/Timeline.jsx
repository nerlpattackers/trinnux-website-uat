// src/components/Timeline.jsx
import React from "react";
import "../styles/timeline.css";

const timelineData = [
  {
    year: "2013–2014",
    title: "Early Beginnings",
    desc: "Trinnux started as a small engineering startup offering wireless internet services, network infrastructure installation, server setup, BPO setup, and technical training.",
  },
  {
    year: "2015",
    title: "Growth & Expansion",
    desc: "Expanded service offerings and improved operational processes, supporting more enterprise-grade deployments and long-term clients.",
  },
  {
    year: "2016",
    title: "Enterprise Clients",
    desc: "Started serving banking and financial institutions, including rural banks such as RBGI and RBSMI, focusing on secure and reliable infrastructure.",
  },
  {
    year: "2019",
    title: "3NNUX Technologies Corporation",
    desc: "Trinnux formally became 3NNUX Technologies Corporation, transitioning into managed IT services, software development, and staff augmentation.",
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section py-5">
      <div className="container">

        <div className="mb-5 text-center" data-aos="fade-up">
          <h2 className="timeline-title">Our Journey</h2>
          <p className="timeline-sub text-muted">
            A look at how Trinnux evolved through the years.
          </p>
        </div>

        <div className="timeline">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className="timeline-dot">
                <span className="timeline-year">{item.year}</span>
              </div>

              <div className="timeline-content">
                <h5 className="mb-1">{item.title}</h5>
                <p className="small text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
