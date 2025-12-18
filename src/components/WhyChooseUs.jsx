// src/components/WhyChooseUs.jsx
import React from "react";
import { ShieldCheck, Zap, BadgeCheck, Workflow } from "lucide-react";
import "../styles/whychooseus.css";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Proven Expertise",
      desc: "Built, managed, and secured real production environments across cloud, network, and on-prem infrastructures.",
      Icon: BadgeCheck,
    },
    {
      title: "SLA-Backed Reliability",
      desc: "Clear SLAs, proactive monitoring, and operational discipline ensure predictable uptime and fast incident response.",
      Icon: ShieldCheck,
    },
    {
      title: "Automation-Driven",
      desc: "IaC, orchestration, and repeatable workflows reduce human error and accelerate deployments.",
      Icon: Workflow,
    },
    {
      title: "Transparent Engagements",
      desc: "Straightforward pricing, scoped deliverables, and honest consultations — no hidden surprises.",
      Icon: Zap,
    },
  ];

  return (
    <section className="py-5 reveal" aria-label="Why choose us">
      <div className="container">
        <div className="row g-4 align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-5" data-aos="fade-right">
            <h3 className="section-title">What makes Trinnux unique?</h3>
            <p className="section-sub mt-2 text-muted">
              We combine engineering discipline, automation, and operational excellence to deliver stable, scalable,
              and secure systems — so your business stays online and ahead.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="col-md-7" data-aos="fade-left" data-aos-delay="150">
            <div className="row g-4">
              {items.map((item, idx) => (
                <div className="col-sm-6" key={idx}>
                  <div className="why-card h-100 p-4">
                    {/* MAROON ICON BUBBLE */}
                    <div className="why-icon maroon mb-3">
                      <item.Icon size={26} strokeWidth={1.8} />
                    </div>

                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="small text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
