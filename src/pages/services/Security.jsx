// src/pages/services/Security.jsx
import React from "react";
import { Globe } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function Security() {
  const sections = [
    { heading: "Overview", body: "Traffic governance, proxy, firewall rules and load balancing to secure and optimize access." },
    { heading: "Services", items: ["SQUID proxy & caching", "HAProxy setup", "Firewall policy design", "Traffic shaping & ISP failover"] },
    { heading: "Outcome", body: "Reduced attack surface, better user experience, and predictable traffic flows." },
  ];
  return <ServicePage Icon={Globe} title="Security & Traffic Management" intro="Proxy, load balancing, firewall design and traffic control solutions." sections={sections} />;
}
