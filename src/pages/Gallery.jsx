// src/pages/Gallery.jsx
import React, { useState, useRef, useEffect, useMemo } from "react";
import "../styles/gallery.css";

/* ===========================
   IMAGE DATA
   =========================== */
const images = [
  {
    webp: "/gallery/trainings.webp",
    jpg: "/gallery/trainings.jpg",
    alt: "Technical Trainings",
    caption: "Hands-on technical trainings conducted by Trinnux engineers",
    category: "Training",
    featured: true,
  },
  {
    webp: "/gallery/cybersecurity-awareness-seminar.webp",
    jpg: "/gallery/cybersecurity-awareness-seminar.jpg",
    alt: "Cybersecurity Awareness Seminar",
    caption: "Cybersecurity awareness seminar promoting best practices and risk awareness",
    category: "Training",
  },
  {
    webp: "/gallery/excel-training.webp",
    jpg: "/gallery/excel-training.jpg",
    alt: "Productivity Training",
    caption: "Productivity and Excel skills training for teams and professionals",
    category: "Training",
  },
  {
    webp: "/gallery/wireless-radio-installation.webp",
    jpg: "/gallery/wireless-radio-installation.jpg",
    alt: "Wireless Radio Installation",
    caption: "Field deployment and alignment of wireless radio infrastructure",
    category: "Installation",
    featured: true,
  },
  {
    webp: "/gallery/party.webp",
    jpg: "/gallery/party.jpg",
    alt: "Team Celebration",
    caption: "Celebrating milestones and strengthening teamwork at Trinnux",
    category: "Team & Culture",
    featured: true,
  },
  {
    webp: "/gallery/3nnux-christmas-party.webp",
    jpg: "/gallery/3nnux-christmas-party.jpg",
    alt: "Christmas Celebration",
    caption: "Fostering collaboration and company culture through shared celebrations",
    category: "Team & Culture",
  },
];

/* ===========================
   ANALYTICS (LOCAL)
   =========================== */
function trackView(image) {
  const key = "gallery-analytics";
  const data = JSON.parse(localStorage.getItem(key) || "{}");
  data[image.alt] = (data[image.alt] || 0) + 1;
  localStorage.setItem(key, JSON.stringify(data));
}

/* ===========================
   LAZY IMAGE
   =========================== */
function LazyImage({ webp, jpg, alt, featured, onClick }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <button className="gallery-item" onClick={onClick}>
      {/* ⭐ Featured badge */}
      {featured && <span className="gallery-featured">Featured</span>}

      <picture ref={ref}>
        <source srcSet={visible ? webp : ""} type="image/webp" />
        <img
          src={visible ? jpg : ""}
          alt={alt}
          loading="lazy"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </button>
  );
}

/* ===========================
   GALLERY PAGE
   =========================== */
export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const touchStartX = useRef(null);

  const categories = ["All", "Training", "Installation", "Team & Culture"];

  /* Featured images first */
  const filteredImages = useMemo(() => {
    const list =
      category === "All"
        ? images
        : images.filter((img) => img.category === category);

    return [...list].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [category]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i > 0 ? i - 1 : visibleImages.length - 1));
  const next = () =>
    setActiveIndex((i) => (i < visibleImages.length - 1 ? i + 1 : 0));

  /* Track analytics */
  useEffect(() => {
    if (activeIndex !== null) {
      trackView(visibleImages[activeIndex]);
    }
  }, [activeIndex]);

  /* Keyboard navigation */
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  /* Swipe navigation */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 60) delta > 0 ? prev() : next();
    touchStartX.current = null;
  };

  return (
    <main className="gallery-page">
      <div className="container">
        {/* Header */}
        <header className="gallery-header">
          <h1>Our Work in Action</h1>
          <p>
            A look at how 3NNUX brings together people, training, technology, and teamwork—inside and beyond the workplace.
          </p>
        </header>

        {/* Filters */}
        <div className="gallery-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={c === category ? "active" : ""}
              onClick={() => {
                setCategory(c);
                setVisibleCount(12);
                setActiveIndex(null);
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="gallery-grid">
          {visibleImages.map((img, i) => (
            <LazyImage
              key={i}
              webp={img.webp}
              jpg={img.jpg}
              alt={img.alt}
              featured={img.featured}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </section>

        {/* Load more */}
        {visibleCount < filteredImages.length && (
          <div className="gallery-load-more">
            <button onClick={() => setVisibleCount((v) => v + 9)}>
              Load more photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="lightbox-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>

          <div
            className="lightbox-image-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <picture>
              <source
                srcSet={visibleImages[activeIndex].webp}
                type="image/webp"
              />
              <img
                src={visibleImages[activeIndex].jpg}
                alt={visibleImages[activeIndex].alt}
              />
            </picture>

            <div className="lightbox-caption">
              {visibleImages[activeIndex].caption}
            </div>
          </div>

          <button
            className="lightbox-btn next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
