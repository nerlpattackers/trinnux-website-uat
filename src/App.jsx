// src/App.jsx
import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AOS from "aos";

// layout
import TopNavbar from "./components/TopNavBar";
import Footer from "./components/Footer";

// For maintenance
// import Maintenance from "./pages/Maintenance";

// main pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Gallery from "./pages/Gallery";

// service pages (created earlier)
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

import "./styles/transitions.css"; // optional: custom page transition CSS

export default function App() {
  const location = useLocation();

  // single ref reused for transitions — react-transition-group prefers a nodeRef
  const nodeRef = useRef(null);

  // initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 650,
      offset: 80,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // scroll to top + refresh AOS on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    // small delay lets the new DOM render before refresh
    const t = setTimeout(() => {
      AOS.refresh();
      if (typeof AOS.refreshHard === "function") AOS.refreshHard();
    }, 70);

    return () => clearTimeout(t);
  }, [location]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <TopNavbar />

      <main className="flex-grow-1 position-relative">
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="page"
            timeout={350}
            nodeRef={nodeRef}
            unmountOnExit
          >
            <div ref={nodeRef} className="page-wrapper">
              <Routes location={location}>
                {/* Maintenance */}
                {/* <Route path="/maintenance" element={<Maintenance />} /> */}

                {/* Primary pages */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/gallery" element={<Gallery />} />

                {/* General service pages */}
                <Route path="/services/managed" element={<ManagedServices />} />
                <Route path="/services/staff" element={<StaffAugmentation />} />
                <Route path="/services/software" element={<SoftwareDevelopment />} />
                <Route path="/services/cloud" element={<CloudInfrastructureManagement />} />

                {/* Technical service pages */}
                <Route path="/services/networking" element={<Networking />} />
                <Route path="/services/vpn" element={<VPN />} />
                <Route path="/services/identity" element={<Identity />} />
                <Route path="/services/servers" element={<Servers />} />
                <Route path="/services/datacenter" element={<Datacenter />} />
                <Route path="/services/security" element={<Security />} />
                <Route path="/services/monitoring" element={<Monitoring />} />
                <Route path="/services/streaming" element={<Streaming />} />

                {/* fallback */}
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <Footer />
    </div>
  );
}
