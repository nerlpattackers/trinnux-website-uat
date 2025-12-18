// src/pages/services/ManagedServices.jsx
import React from "react";
import { Users, Network, ShieldCheck, Server, Database, Globe, Gauge } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function ManagedServices() {
  const sections = [
    {
      heading: "Overview",
      body: "Outsource operations to our team of architects and support engineers — 24/7 monitoring, patching, incident handling and continuous improvement.",
    },
    {
      heading: "What we operate",
      items: ["Network backbone", "Servers & virtualization", "Database instances", "VPN and remote connectivity", "Proxies & traffic control"],
    },
    {
      heading: "Service guarantees",
      items: ["SLA-backed support", "Monthly performance reviews", "Security patching cadence", "Proactive capacity planning"],
    },
  ];

  const deliverables = [
    "Architecture & design docs",
    "Implementation plan & runbook",
    "Configuration & hardening checklist",
    "Handover & knowledge transfer",
  ];

  const capabilityGroups = [
    { key: "network", Icon: Network, title: "Network Operations", bullets: ["Routing & switching", "Point-to-point wireless", "Fiber termination & testing", "VLAN & QoS"] },
    { key: "vpn", Icon: ShieldCheck, title: "VPN & Connectivity", bullets: ["Site-to-site VPN", "Remote access VPN (MFA)", "Bank-grade tunnels & HA", "ISP failover"] },
    { key: "servers", Icon: Server, title: "Server Management", bullets: ["Hyper-V & VM ops", "Patching & hardening", "Backup & DR runbooks"] },
    { key: "db", Icon: Database, title: "Databases", bullets: ["SQL Server installs", "MySQL clustered setups", "Backup & restore strategies"] },
    { key: "monitor", Icon: Gauge, title: "Monitoring & Alerts", bullets: ["Zabbix templates", "SLA dashboards", "Alerting & runbooks"] },
    { key: "security", Icon: Globe, title: "Proxy & Traffic Control", bullets: ["SQUID caching & proxy", "HAProxy load balancing", "Traffic shaping"] },
  ];

  return (
    <>
      <ServicePage Icon={Users} title="Managed Services" intro="Access a dedicated team of architects, network engineers, and support specialists to run and enhance your IT estate." sections={sections} deliverables={deliverables} />

      <section className="py-5 cap-grid-section" aria-labelledby="capabilities">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8" data-aos="fade-up">
              <h2 id="capabilities" className="sp-section-title">Technical Capabilities (Managed Services)</h2>
              <p className="text-muted">Operational capabilities included with our managed services offering.</p>
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
