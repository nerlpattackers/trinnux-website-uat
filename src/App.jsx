// src/App.jsx
import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AOS from "aos";

// Loader
import SiteLoader from "./components/SiteLoader";

// Under Construction
import UnderConstruction from "./pages/UnderConstruction";

// Layout
import TopNavbar from "./components/TopNavBar";
import Footer from "./components/Footer";

// Main pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Gallery from "./pages/Gallery";

// About pages
import Timeline from "./pages/about/Timeline";

// Service pages
import ManagedServices from "./pages/services/ManagedServices";
import StaffAugmentation from "./pages/services/StaffAugmentation";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import CloudInfrastructureManagement from "./pages/services/CloudInfrastructureManagement";

import Networking from "./pages/services/Networking";
import VPN from "./pages/services/VPN";
import Identity from "./pages/services/Identity";
import Servers from "./pages/services/Servers";
import Datacenter from "./pages/services/Datacenter";
import Security from "./pages/services/Security";
import Monitoring from "./pages/services/Monitoring";
import Streaming from "./pages/services/Streaming";

import "./styles/transitions.css";

export default function App() {
  const location = useLocation();

  /* ✅ One ref per route (required for react-transition-group) */
  const nodeRefs = useRef({});

  const getNodeRef = (key) => {
    if (!nodeRefs.current[key]) {
      nodeRefs.current[key] = React.createRef();
    }
    return nodeRefs.current[key];
  };

  /* Init AOS */
  useEffect(() => {
    AOS.init({
      duration: 650,
      offset: 80,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  /* Scroll to top + refresh AOS on route change */
  useEffect(() => {
    window.scrollTo(0, 0);

    const t = setTimeout(() => {
      AOS.refresh();
      if (typeof AOS.refreshHard === "function") {
        AOS.refreshHard();
      }
    }, 80);

    return () => clearTimeout(t);
  }, [location.pathname]);

  const nodeRef = getNodeRef(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      {/* Global loader */}
      <SiteLoader />

      {/* Top navigation */}
      <TopNavbar />

      <main className="flex-grow-1 position-relative">
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            classNames="page"
            timeout={350}
            unmountOnExit
          >
            <div ref={nodeRef} className="page-wrapper">
              <Routes location={location}>
                {/* =====================
                    PRIMARY PAGES
                ===================== */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/gallery" element={<Gallery />} />

                {/* =====================
                    ABOUT SUBPAGES
                ===================== */}
                <Route path="/about/journey" element={<Timeline />} />

                <Route
                  path="/about/values"
                  element={
                    <UnderConstruction
                      title="Our Values"
                      subtitle="Our core principles are being refined."
                    />
                  }
                />

                <Route
                  path="/about/team"
                  element={
                    <UnderConstruction
                      title="Leadership & Team"
                      subtitle="Meet the people behind Trinnux — coming soon."
                    />
                  }
                />

                {/* =====================
                    SERVICE PAGES
                ===================== */}
                <Route path="/services/managed" element={<ManagedServices />} />
                <Route path="/services/staff" element={<StaffAugmentation />} />
                <Route
                  path="/services/software"
                  element={<SoftwareDevelopment />}
                />
                <Route
                  path="/services/cloud"
                  element={<CloudInfrastructureManagement />}
                />

                <Route path="/services/networking" element={<Networking />} />
                <Route path="/services/vpn" element={<VPN />} />
                <Route path="/services/identity" element={<Identity />} />
                <Route path="/services/servers" element={<Servers />} />
                <Route path="/services/datacenter" element={<Datacenter />} />
                <Route path="/services/security" element={<Security />} />
                <Route path="/services/monitoring" element={<Monitoring />} />
                <Route path="/services/streaming" element={<Streaming />} />

                {/* =====================
                    FALLBACK
                ===================== */}
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
