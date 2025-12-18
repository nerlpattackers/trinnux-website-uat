// src/pages/services/VPN.jsx
import React from "react";
import { ShieldCheck } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function VPN() {
  const sections = [
    { heading: "Overview", body: "Secure VPN solutions for remote users, site-to-site connectivity and multi-branch bank connectivity." },
    { heading: "Offerings", items: ["Site-to-site VPN setup", "Remote access VPN with MFA", "SSL / IPsec tuning & HA", "Monitoring & failover"] },
    { heading: "Compliance", body: "We implement secure tunnels and policies to meet banking and regulatory requirements where needed." },
  ];
  return <ServicePage Icon={ShieldCheck} title="VPN & Secure Connectivity" intro="Encrypted VPN services for remote workers and branch offices." sections={sections} />;
}
