// src/pages/services/Streaming.jsx
import React from "react";
import { Tv } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function Streaming() {
  const sections = [
    { heading: "Overview", body: "Streaming server setup and scaling, with HAProxy and optimized delivery for media workloads." },
    { heading: "Services", items: ["Streaming server installation", "Transcoding pipelines", "Edge caching & CDN integration", "HAProxy and routing policies"] },
    { heading: "Use cases", items: ["Corporate media", "Education live streams", "Internal broadcasts"] },
  ];
  return <ServicePage Icon={Tv} title="Streaming & Application Services" intro="Streaming server deployment and application-level load balancing." sections={sections} />;
}
