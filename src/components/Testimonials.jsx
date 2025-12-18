// src/components/Testimonials.jsx
import React, { useEffect, useState } from "react";
import "../styles/testimonials.css";

const testimonials = [
  {
    name: "Paulo Honrado",
    role: "President, Rural Bank of Guinobatan Inc.",
    letter: "P",
    img: "/partners/Bosspau.png",
    text: "Trinnux engineered our cloud migration flawlessly. Zero downtime and excellent communication throughout the project.",
    rating: 5,
    logo: "/partners/rbgi.png"
  },
  {
    name: "Jonny Goodman",
    role: "Destroyer, Example",
    letter: "B",
    img: "/partners/sins.png",
    text: "Their automation and incident systems drastically reduced our operational noise. Reporting is clear and extremely helpful.",
    rating: 5,
    logo: null
  },
  {
    name: "Anonymous",
    role: "Admin",
    letter: "J",
    img: null,
    text: "Hatdoooog, frieeees at borgir.",
    rating: 4,
    logo: null
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-v3 py-5 reveal">
      <div className="container">

        <div data-aos="fade-up">
          <h3 className="section-title mb-4">What our clients say</h3>
        </div>

        <div className="v3-slider-wrapper" data-aos="fade-up" data-aos-delay="120">
          
          <div
            className="v3-slider"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="v3-slide">

                <div className="msg-wrapper d-flex align-items-start gap-3">

                  {/* Avatar */}
                  {t.img ? (
                    <img src={t.img} alt={t.name} className="msg-avatar" />
                  ) : (
                    <div className="msg-avatar-fallback">{t.letter}</div>
                  )}

                  {/* Bubble */}
                  <div className="msg-bubble">
                    
                    {t.logo && (
                      <img src={t.logo} className="msg-company mb-2" alt="Company Logo" />
                    )}

                    <p className="msg-text mb-2">“{t.text}”</p>

                    <div className="msg-meta">
                      <div className="fw-bold">{t.name}</div>
                      <div className="small text-muted">{t.role}</div>

                      <div className="v3-stars mt-1">
                        {[...Array(5)].map((_, star) => (
                          <span
                            key={star}
                            className={`star ${star < t.rating ? "filled" : ""}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="v3-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
