// src/pages/services/Datacenter.jsx
import React from "react";
import { Cable } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function Datacenter() {
  const sections = [
    { heading: "Overview", body: "Data center design and implementation: cabling, rack layout, cooling, and power redundancy." },
    { heading: "Services", items: ["Rack & stack", "Structured cabling", "Power & UPS planning", "Network backbone and redundancy"] },
    { heading: "Compliance & ops", body: "We deliver documentation and runbooks for operations and capacity planning." },
  ];
  return <ServicePage Icon={Cable} title="Data Center Solutions" intro="Design and implement resilient data center infrastructures." sections={sections} />;
}
