import React from "react";

import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import ProductsSection from "../components/ProductSection";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import PartnersDouble from "../components/PartnersDouble";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />               {/* Bigger spacing */}
      <WhatWeDo />           {/* Normal spacing */}
      <ProductsSection />   {/* IPS / IDS product */}
      <ServicesGrid />       {/* section-tight recommended */}
      <WhyChooseUs />        {/* section-tight */}
      <Testimonials />       {/* section-tight */}
      <PartnersDouble />     {/* Normal spacing */}
      <ContactCTA />         {/* Normal spacing */}
    </>
  );
}
