// src/pages/services/Identity.jsx
import React from "react";
import { Lock } from "lucide-react";
import ServicePage from "../../components/ServicePage";

export default function Identity() {
  const sections = [
    { heading: "Overview", body: "Centralized identity: Active Directory, RADIUS, LDAP integration and enterprise SSO for applications and wireless access." },
    { heading: "Services", items: ["AD design & deployment", "RADIUS (EAP) for wireless auth", "LDAP integration & SSO", "IAM policies and least-privilege"] },
    { heading: "Deliverables", items: ["AD forest/domain design", "RADIUS config & test report", "SSO integration guide", "MFA recommendations"] },
  ];
  return <ServicePage Icon={Lock} title="Authentication & Access Management" intro="Active Directory, RADIUS, LDAP and enterprise single-sign-on." sections={sections} />;
}
