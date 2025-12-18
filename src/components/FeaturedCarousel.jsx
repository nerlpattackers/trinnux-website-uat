// src/components/FeaturedCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/featured-carousel.css";

/* Pull ONLY featured images */
const featuredItems = [
  {
    webp: "/gallery/trainings.webp",
    jpg: "/gallery/trainings.jpg",
    title: "Technical Trainings",
    caption: "Hands-on trainings delivered by Trinnux engineers",
    category: "Training",
  },
  {
    webp: "/gallery/wireless-radio-installation.webp",
    jpg: "/gallery/wireless-radio-installation.jpg",
    title: "Infrastructure Deployment",
    caption: "Real-world wireless and infrastructure installations",
    category: "Installation",
  },
  {
    webp: "/gallery/party.webp",
    jpg: "/gallery/party.jpg",
    title: "Team & Culture",
    caption: "Building strong teams behind reliable solutions",
    category: "Team & Culture",
  },
];

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const next = () =>
    setIndex((i) => (i + 1) % featuredItems.length);
  const prev = () =>
    setIndex((i) => (i - 1 + featuredItems.length) % featuredItems.length);

  /* Auto slide */
  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  /* Keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Swipe */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 60) delta > 0 ? prev() : next();
    touchStartX.current = null;
  };

  return (
    <section
      className="featured-carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {featuredItems.map((item, i) => (
        <div
          key={i}
          className={`carousel-slide ${i === index ? "active" : ""}`}
        >
          <picture>
            <source srcSet={item.webp} type="image/webp" />
            <img src={item.jpg} alt={item.title} />
          </picture>

          <div className="carousel-overlay">
            <span className="carousel-category">{item.category}</span>
            <h2>{item.title}</h2>
            <p>{item.caption}</p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button className="carousel-btn prev" onClick={prev}>‹</button>
      <button className="carousel-btn next" onClick={next}>›</button>
    </section>
  );
}
