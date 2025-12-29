// src/pages/products/IpsIdsProduct.jsx
import React from "react";
import {
  ShieldCheck,
  Activity,
  Eye,
  Lock,
  Network,
  Server,
  Users
} from "lucide-react";
import "../../styles/ips-ids-product.css";

export default function IpsIdsProduct() {
  return (
    <main className="ips-product-page">

      {/* ===============================
          HERO
      =============================== */}
      <section className="ips-hero">
        <div className="container ips-hero-grid">

          <div className="ips-hero-text">
            <span className="ips-eyebrow">Security Appliance & Managed Service</span>

            <h1>3NNUX Secure Gateway</h1>

            <p>
              A 3NNUX-branded firewall and intrusion detection / prevention
              appliance designed, supplied, and supported by 3NNUX.
              <br /><br />
              Built on the proven <strong>pfSense platform</strong>, the
              3NNUX Secure Gateway delivers enterprise-grade network
              protection, secure connectivity, and high availability —
              backed by professional deployment and ongoing management.
            </p>

            <div className="ips-hero-actions">
              <a href="/contact" className="btn btn-light">
                Request Assessment
              </a>
              <a
                href="/docs/pfsensee.docx"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Datasheet (PDF)
              </a>
            </div>
          </div>

          <div className="ips-hero-visual">
            <div className="ips-hero-mock" />
          </div>

        </div>
      </section>

      {/* ===============================
          WHAT YOU GET
      =============================== */}
      <section className="ips-section">
        <div className="container">

          <h2 className="section-title">What You Get</h2>

          <div className="ips-features">

            <div className="ips-feature">
              <ShieldCheck />
              <h3>Firewall Appliance</h3>
              <p>
                A dedicated security gateway appliance supplied by 3NNUX,
                preconfigured with hardened firewall policies and best
                practices.
              </p>
            </div>

            <div className="ips-feature">
              <Eye />
              <h3>IDS & IPS Protection</h3>
              <p>
                Intrusion detection and prevention configured, tuned, and
                maintained by 3NNUX to ensure strong protection without
                disrupting business traffic.
              </p>
            </div>

            <div className="ips-feature">
              <Lock />
              <h3>Secure VPN Connectivity</h3>
              <p>
                Encrypted remote access and site-to-site VPNs for users,
                branch offices, and cloud environments.
              </p>
            </div>

            <div className="ips-feature">
              <Network />
              <h3>WAN Failover & Resilience</h3>
              <p>
                Automatic ISP failover and multi-WAN routing to maintain
                connectivity during outages.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          HOW 3NNUX DELIVERS IT
      =============================== */}
      <section className="ips-section light">
        <div className="container">

          <h2 className="section-title">How 3NNUX Delivers It</h2>

          <div className="ips-features">

            <div className="ips-feature">
              <Users />
              <h3>Assessment & Design</h3>
              <p>
                We assess your network topology, traffic patterns, and
                security requirements to design the right gateway
                configuration.
              </p>
            </div>

            <div className="ips-feature">
              <Server />
              <h3>Deployment & Hardening</h3>
              <p>
                Professional installation, baseline hardening, and
                validation before placing the appliance into production.
              </p>
            </div>

            <div className="ips-feature">
              <Activity />
              <h3>Phased IDS → IPS Rollout</h3>
              <p>
                We begin in detection mode, tune security rules, and then
                enable prevention to minimize false positives and service
                disruption.
              </p>
            </div>

            <div className="ips-feature">
              <ShieldCheck />
              <h3>Ongoing Management & Support</h3>
              <p>
                Continuous monitoring, updates, rule tuning, and support
                handled by 3NNUX engineers.
              </p>
            </div>

          </div>

          <p className="ips-note">
            This managed approach ensures strong security, operational
            stability, and clear accountability with a single vendor.
          </p>

        </div>
      </section>

      {/* ===============================
          WHY 3NNUX
      =============================== */}
      <section className="ips-section">
        <div className="container">

          <h2 className="section-title">Why Choose 3NNUX</h2>

          <ul className="ips-list">
            <li>Security appliance supplied and supported by one provider</li>
            <li>Reduced operational burden for internal IT teams</li>
            <li>Proven deployment methodology and best practices</li>
            <li>Stable, production-ready configurations</li>
            <li>Support for on-prem, virtual, and cloud environments</li>
          </ul>

        </div>
      </section>

      {/* ===============================
          TECHNOLOGY ACKNOWLEDGEMENT
      =============================== */}
      <section className="ips-section light">
        <div className="container">

          <h2 className="section-title">Powered by Proven Technology</h2>

          <p className="section-intro">
            The 3NNUX Secure Gateway is built on the trusted pfSense firewall
            platform and open-source security engines. 3NNUX does not claim
            ownership of the underlying software — instead, we deliver a
            professionally engineered appliance and managed service built
            on proven technology.
          </p>

        </div>
      </section>

      {/* ===============================
          CTA
      =============================== */}
      <section className="ips-cta">
        <div className="container">
          <h2>Secure Your Network with 3NNUX</h2>
          <p>
            Get a professionally supplied firewall appliance with expert
            deployment, tuning, and ongoing support from 3NNUX.
          </p>
          <a href="/contact" className="btn btn-light">
            Talk to an Engineer
          </a>
        </div>
      </section>

    </main>
  );
}
