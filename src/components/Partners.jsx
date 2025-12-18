// src/components/Partners.jsx
import React from "react";
import usePartnersScroll from "./usePartnersScroll";

export default function Partners({ title = "Our Partners" }) {
  const { trackRef, scrollList } = usePartnersScroll({ speed: 120 });

  return (
    <section className="py-5 reveal" aria-label="Partners">
      <div className="container-fluid px-0">

        <h5 className="text-center text-muted mb-4" data-aos="fade-up">
          {title}
        </h5>

        <div className="partners-marquee" data-aos="fade-up" data-aos-delay="120">
          <div className="partners-track" ref={trackRef}>
            {scrollList.map((src, index) => (
              <div className="partner-logo" key={index}>
                <img src={src} alt={`Partner ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
