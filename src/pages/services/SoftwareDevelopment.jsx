// src/pages/services/SoftwareDevelopment.jsx
import React from "react";
import { Code2, GitBranch, Tv, Lock } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function SoftwareDevelopment() {
  const sections = [
    { heading: "Overview", body: "End-to-end software design, development and maintenance tailored to business workflows and integrations." },
    { heading: "Typical deliverables", items: ["Requirement analysis", "API & backend systems", "Front-end applications", "CI/CD pipelines", "Monitoring & support"] },
    { heading: "Tech stack we work with", items: ["Node.js, Python, .NET", "React, Vue", "MySQL / SQL Server", "Containerization & orchestration"] },
  ];

  const deliverables = [
    "Technical requirements document",
    "System architecture & diagrams",
    "CI/CD pipeline and repo",
    "Support & maintenance plan",
  ];

  const capabilityGroups = [
    { key: "api", Icon: GitBranch, title: "APIs & Integrations", bullets: ["Backend design", "API authentication", "Integration to AD/LDAP"] },
    { key: "frontend", Icon: Code2, title: "Frontend & Web Apps", bullets: ["SPA development", "Responsive UIs", "Performance optimization"] },
    { key: "stream", Icon: Tv, title: "Streaming & Media", bullets: ["Streaming server setup", "Transcoding & caching", "CDN/edge integration"] },
    { key: "security", Icon: Lock, title: "Auth & SSO", bullets: ["LDAP/AD integration", "OAuth/OpenID", "Secure session handling"] },
    { key: "ci", Icon: GitBranch, title: "CI/CD & DevOps", bullets: ["Pipeline authoring", "Canary deployments", "Infrastructure as code"] },
  ];

  return (
    <>
      <ServicePage Icon={Code2} title="Software Development & Management" intro="Design, build and maintain custom applications so you can focus on your core business." sections={sections} deliverables={deliverables} />

      <section className="py-5 cap-grid-section" aria-labelledby="capabilities-software">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8" data-aos="fade-up">
              <h2 id="capabilities-software" className="sp-section-title">Technical Capabilities (Software)</h2>
              <p className="text-muted">Application services and infrastructure we deliver for production-grade systems.</p>
            </div>
          </div>

          <div className="row g-4">
            {capabilityGroups.map((g, i) => (
              <div key={g.key} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={80 + i * 60}>
                <article className="cap-card p-3 h-100 d-flex flex-column non-clickable">
                  <div className="d-flex align-items-start gap-3">
                    <div className="cap-icon red" aria-hidden>
                      <g.Icon size={20} />
                    </div>
                    <div>
                      <h5 className="mb-1">{g.title}</h5>
                      <ul className="small text-muted mb-0 cap-bullets">
                        {g.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
