// src/pages/products/IpsIdsProduct.jsx
import React from "react";
import {
  ShieldCheck,
  Eye,
  Lock,
  Network,
  Server,
  Users,
  HelpCircle,
  Shield,
  Wrench,
  Handshake
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
            <span className="ips-eyebrow">
              Security Appliance & Managed Service
            </span>

            <h1>3NNUX Secure Gateway</h1>

            <p>
              The <strong>3NNUX Secure Gateway</strong> is a firewall and
              intrusion detection / prevention appliance supplied and
              supported by 3NNUX Technologies Corporation.
              <br /><br />
              Built on the proven <strong>pfSense platform</strong>, this
              solution delivers enterprise-grade network security,
              secure connectivity, and high availability — combined with
              professional deployment and ongoing management by 3NNUX.
            </p>

            <div className="ips-hero-actions">
              <a href="/contact" className="btn btn-light">
                Request Assessment
              </a>
              <a
                href="/docs/pfsense-datasheet.pdf"
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
                A 3NNUX-supplied security gateway delivered with hardened
                firewall policies and best-practice configurations.
              </p>
            </div>

            <div className="ips-feature">
              <Eye />
              <h3>IDS & IPS Protection</h3>
              <p>
                Intrusion detection and prevention configured, tuned,
                and maintained by 3NNUX to balance protection and
                operational stability.
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
                We assess your network, risks, and traffic patterns to
                design a security gateway aligned with your business.
              </p>
            </div>

            <div className="ips-feature">
              <Server />
              <h3>Deployment & Hardening</h3>
              <p>
                Secure installation, baseline hardening, validation,
                and readiness checks before production rollout.
              </p>
            </div>

            <div className="ips-feature">
              <Shield />
              <h3>Phased IDS → IPS Rollout</h3>
              <p>
                We start in detection mode, tune security rules, then
                enable prevention to minimize false positives.
              </p>
            </div>

            <div className="ips-feature">
              <Wrench />
              <h3>Ongoing Management</h3>
              <p>
                Continuous updates, tuning, monitoring, and support
                handled by 3NNUX engineers.
              </p>
            </div>

          </div>

          <p className="ips-note">
            This managed approach ensures strong security, stability,
            and clear accountability with a single vendor.
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
            <li>One vendor for hardware, deployment, and support</li>
            <li>Reduced operational burden for internal IT teams</li>
            <li>Proven deployment methodology and best practices</li>
            <li>Stable, production-ready configurations</li>
            <li>Flexible deployment: on-prem, virtual, or cloud</li>
          </ul>

        </div>
      </section>

      {/* ===============================
          FAQ (ACCORDION)
      =============================== */}
      <section className="ips-section light">
        <div className="container">

          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="ips-faq-accordion">

            <details className="faq-item">
              <summary className="faq-question">
                <HelpCircle className="faq-icon" />
                Did 3NNUX develop pfSense?
              </summary>
              <div className="faq-answer">
                <p>
                  No. pfSense is an open-source firewall platform developed
                  and maintained by Netgate, Inc. 3NNUX does not claim
                  ownership of the pfSense software.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <Shield className="faq-icon" />
                What exactly does 3NNUX provide?
              </summary>
              <div className="faq-answer">
                <p>
                  3NNUX provides a complete security solution including
                  the firewall appliance, professional deployment,
                  IDS/IPS configuration, and ongoing management.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <Wrench className="faq-icon" />
                Who supports the firewall?
              </summary>
              <div className="faq-answer">
                <p>
                  3NNUX provides first-line and ongoing support for the
                  appliance, configuration, and managed security services.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <Handshake className="faq-icon" />
                Can we co-manage or take over later?
              </summary>
              <div className="faq-answer">
                <p>
                  Yes. Customers may choose full management by 3NNUX,
                  co-managed operation, or handover after deployment,
                  based on agreement.
                </p>
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* ===============================
          TECHNOLOGY & LEGAL
      =============================== */}
      <section className="ips-section">
        <div className="container">

          <h2 className="section-title">Powered by Proven Technology</h2>

          <p className="section-intro">
            The 3NNUX Secure Gateway is built on the trusted pfSense
            firewall platform and open-source security engines.
            3NNUX does not claim ownership of the underlying software and
            is not affiliated with Netgate, Inc.
          </p>

          <p className="legal-note">
            pfSense is a registered trademark of Netgate, Inc.
            3NNUX Technologies Corporation is not affiliated with,
            endorsed by, or sponsored by Netgate, Inc.
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
            deployment, tuning, and ongoing support.
          </p>
          <a href="/contact" className="btn btn-light">
            Talk to an Engineer
          </a>
        </div>
      </section>

    </main>
  );
}
