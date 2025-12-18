// src/pages/services/Networking.jsx
import React from "react";
import { Network } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function Networking() {
  const sections = [
    { heading: "Overview", body: "Design and deploy enterprise networks: routing, switching, VLANs, redundancy, and performance tuning." },
    { heading: "Services", items: ["Network architecture & design", "Point-to-point wireless links", "VLAN, QoS and traffic engineering", "Fiber optic termination & testing"] },
    { heading: "Why it matters", body: "A well-designed network reduces outages, improves performance and makes the rest of your stack more reliable." },
  ];
  return <ServicePage Icon={Network} title="Network Infrastructure & Wireless" intro="Enterprise network design, wireless links, fiber and public Wi-Fi solutions." sections={sections} />;
}
