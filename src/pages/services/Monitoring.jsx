// src/pages/services/Monitoring.jsx
import React from "react";
import { Gauge } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function Monitoring() {
  const sections = [
    { heading: "Overview", body: "Full stack monitoring with Zabbix: network, servers, databases and application metrics with alerting." },
    { heading: "Services", items: ["Zabbix installation & templating", "Alerting & escalation", "Dashboards & capacity reports", "SLA monitoring"] },
    { heading: "Benefits", body: "Faster incident detection, fewer false alarms, and data-driven capacity planning." },
  ];
  return <ServicePage Icon={Gauge} title="Monitoring & Operations" intro="Zabbix-based monitoring, alerts and dashboards for operations teams." sections={sections} />;
}
