// src/pages/services/StaffAugmentation.jsx
import React from "react";
import { Briefcase, Network, Server, Database, Lock, Cloud } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function StaffAugmentation() {
  const sections = [
    { heading: "Overview", body: "Scale engineering capacity with vetted, certified professionals on-demand. Keep control while we provide the people you need." },
    { heading: "Roles available", items: ["Network engineers", "System administrators", "Database administrators", "Cloud architects", "DevOps engineers"] },
    { heading: "Engagement models", items: ["Short-term contracts", "Long-term bench", "Team extension", "Managed project delivery"] },
  ];

  const deliverables = [
    "Role-based skill matching",
    "Onboarding & knowledge transfer",
    "Performance reporting",
    "Progress reviews",
  ];

  const capabilityGroups = [
    { key: "netroles", Icon: Network, title: "Network Engineers", bullets: ["LAN/WAN design", "Wireless links & fiber ops", "Switching/routing expertise"] },
    { key: "sysroles", Icon: Server, title: "System Administrators", bullets: ["Windows/Linux ops", "Patch & configuration management", "Hyper-V support"] },
    { key: "dbroles", Icon: Database, title: "Database Administrators", bullets: ["SQL Server tuning", "MySQL clustering", "Backup/restore procedures"] },
    { key: "cloudroles", Icon: Cloud, title: "Cloud & DevOps", bullets: ["IaC automations", "CI/CD pipelines", "Cloud networking"] },
    { key: "idroles", Icon: Lock, title: "Identity Engineers", bullets: ["Active Directory", "RADIUS & LDAP integration", "SSO setups"] },
  ];

  return (
    <>
      <ServicePage Icon={Briefcase} title="Staff Augmentation" intro="Extend your team with certified engineers on-demand while retaining operational control." sections={sections} deliverables={deliverables} />

      <section className="py-5 cap-grid-section" aria-labelledby="capabilities-staff">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8" data-aos="fade-up">
              <h2 id="capabilities-staff" className="sp-section-title">On-demand Roles & Capabilities</h2>
              <p className="text-muted">Example roles and technical specialties available for augmentation.</p>
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
