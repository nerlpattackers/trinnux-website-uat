// src/components/PartnersDouble.jsx
import React from "react";
import usePartnersScrollDouble from "./usePartnersScrollDouble";
import "../styles/partners-double.css"; // adjust path if needed

export default function PartnersDouble({ title = "Our Partners", speed = 120 }) {
  const { wrapperRef, innerRef, list } = usePartnersScrollDouble({ speed });

  return (
    <section className="py-4 reveal">
      <div className="container-fluid px-0">
        <h5 className="text-center text-muted mb-3" data-aos="fade-up">{title}</h5>

        <div className="partners-marquee" data-aos="fade-up" data-aos-delay="120">
          {/* wrapper that will be translated */}
          <div className="partners-wrapper" ref={wrapperRef} aria-hidden="false">
            {/* first inner track (used for measurement) */}
            <div className="partners-inner" ref={innerRef} aria-hidden="false">
              {list.map((src, i) => (
                <div className="partner-logo" key={`a-${i}`}>
                  <img src={src} alt={`Partner ${i + 1}`} loading="lazy" draggable="false" />
                </div>
              ))}
            </div>

            {/* second inner track (duplicate) */}
            <div className="partners-inner" aria-hidden="true">
              {list.map((src, i) => (
                <div className="partner-logo" key={`b-${i}`}>
                  <img src={src} alt="" loading="lazy" draggable="false" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
