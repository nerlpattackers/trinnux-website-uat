// src/pages/services/Servers.jsx
import React from "react";
import { Server } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function Servers() {
  const sections = [
    { heading: "Overview", body: "Server deployment and hardening: Hyper-V VM infrastructure, Windows & Linux servers, SQL Server installs and MySQL clustering." },
    { heading: "Services", items: ["Bare-metal & VM setup", "Hyper-V cluster design", "SQL Server installation & tuning", "MySQL clustered setups and backups"] },
    { heading: "Operations", items: ["Configuration management", "Patch scheduling", "Backup & DR planning"] },
  ];
  return <ServicePage Icon={Server} title="Server & Virtualization Infrastructure" intro="Hyper-V, SQL Server, MySQL clusters and HA private cloud infrastructure." sections={sections} />;
}
