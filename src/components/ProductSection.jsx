// src/components/ProductsSection.jsx
import React from "react";
import { ShieldCheck, Activity, Eye, Lock } from "lucide-react";
import "../styles/products-section.css";

export default function ProductsSection() {
  return (
    <section className="products-section compact">
      <div className="container">

        <div className="product-panel">

          {/* LEFT */}
          <div className="product-panel-text">
            <span className="product-eyebrow">
              IPS / IDS Platform
            </span>

            <h3>
              Real-Time Network Threat Protection
            </h3>

            <ul className="product-panel-features">
              <li><Eye /> Traffic inspection & detection</li>
              <li><ShieldCheck /> Inline & passive prevention</li>
              <li><Activity /> Behavioral anomaly detection</li>
              <li><Lock /> Centralized control & visibility</li>
            </ul>

            <div className="product-panel-actions">
              <a href="/products/ips-ids" className="btn btn-light">
                View Product
              </a>
              <a href="/contact" className="btn btn-outline-light">
                Request Demo
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="product-panel-visual">
            <div className="product-mock" />
          </div>

        </div>

      </div>
    </section>
  );
}
