// src/pages/services/CloudInfrastructureManagement.jsx
import React from "react";
import { Cloud, Server, GitBranch, Lock, ShieldCheck } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function CloudInfrastructureManagement() {
  const sections = [
    { heading: "Overview", body: "Accelerate cloud adoption while reducing risk — migration planning, hybrid networking, automation and continuous optimization." },
    { heading: "Focus areas", items: ["Secure cloud architecture", "Hybrid networking & VPN", "Cost optimization", "Infrastructure as Code & automation"] },
    { heading: "Approach", items: ["Assessment & discovery", "Proof-of-concept", "Migration & cutover", "Operate & optimize"] },
  ];

  const deliverables = [
    "Cloud architecture design",
    "Migration runbook & checklist",
    "Security & compliance checklist",
    "Operational guide & runbook",
  ];

  const capabilityGroups = [
    { key: "cloudnet", Icon: Cloud, title: "Cloud Networking", bullets: ["VPC/VNet design", "VPN/Direct connect", "Hybrid routing", "Security groups & NACLs"] },
    { key: "cloudinfra", Icon: Server, title: "HA Cloud Infrastructure", bullets: ["Auto-scaling & load balancing", "Managed SQL/DB design", "Private cloud setups"] },
    { key: "iac", Icon: GitBranch, title: "Infrastructure as Code", bullets: ["Terraform modules", "Repeatable environments", "GitOps workflows"] },
    { key: "cloudsec", Icon: ShieldCheck, title: "Cloud Security", bullets: ["IAM & least privilege", "Network segmentation", "Audit & compliance support"] },
    { key: "auth", Icon: Lock, title: "Identity in Cloud", bullets: ["Cloud AD integration", "Managed identity", "Federation & SSO"] },
  ];

  return (
    <>
      <ServicePage Icon={Cloud} title="Cloud Infrastructure Management" intro="Implement your cloud strategy with automation, security, and continuous improvement." sections={sections} deliverables={deliverables} />

      <section className="py-5 cap-grid-section" aria-labelledby="capabilities-cloud">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8" data-aos="fade-up">
              <h2 id="capabilities-cloud" className="sp-section-title">Cloud Technical Capabilities</h2>
              <p className="text-muted">Specialized competencies we bring to cloud migrations and operations.</p>
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
