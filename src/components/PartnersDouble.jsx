// src/components/PartnersDouble.jsx
import { useEffect, useRef } from "react";
import "../styles/partners-double.css";

export default function PartnersDouble({
  title = "Our Partners",
  speed = 70, // px/sec
}) {
  const logos = [
    "/partners/rbgi.png",
    "/partners/katipunanbank.png",
    "/partners/jmhi.png",
    "/partners/mvsm.png",
    "/partners/mactanbank.png",
    "/partners/rbsmi.png",
    "/partners/myfc2.png",
    "/partners/rbparacale.png",
    "/partners/fppbi.png",
  ];

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const offsetRef = useRef(0);
  const widthRef = useRef(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const imgs = Array.from(track.querySelectorAll("img"));

    const waitForImages = Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete && img.naturalWidth) return resolve();
            img.onload = img.onerror = resolve;
          })
      )
    );

    const measure = () => {
      widthRef.current = track.scrollWidth / 2;
    };

    const step = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      offsetRef.current += (speed * delta) / 1000;
      offsetRef.current =
        ((offsetRef.current % widthRef.current) + widthRef.current) %
        widthRef.current;

      // 🔑 React never touches transform
      track.style.setProperty(
        "--x",
        `-${offsetRef.current}px`
      );

      rafRef.current = requestAnimationFrame(step);
    };

    waitForImages.then(() => {
      measure();
      window.addEventListener("resize", measure);
      rafRef.current = requestAnimationFrame(step);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", measure);
    };
  }, [speed]);

  return (
    <section className="py-4">
      <h5 className="text-center text-muted mb-3">{title}</h5>

      <div className="partners-marquee">
        <div className="partners-track" ref={trackRef}>
          {logos.map((src, i) => (
            <div className="partner-logo" key={`a-${i}`}>
              <img src={src} alt="" draggable="false" />
            </div>
          ))}
          {logos.map((src, i) => (
            <div className="partner-logo" key={`b-${i}`}>
              <img src={src} alt="" draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
