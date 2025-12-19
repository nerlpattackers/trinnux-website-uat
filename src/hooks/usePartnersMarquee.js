// src/hooks/usePartnersMarquee.js
import { useEffect, useRef } from "react";

export default function usePartnersMarquee({ speed = 120 } = {}) {
  const list = [
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

  const innerRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTsRef = useRef(null);
  const loopWidthRef = useRef(1);

  const measure = () => {
    const el = innerRef.current;
    if (!el) return;

    // EXACT width of ONE set of logos
    loopWidthRef.current = el.scrollWidth / 2;
  };

  const step = (ts) => {
    if (!lastTsRef.current) lastTsRef.current = ts;
    const delta = ts - lastTsRef.current;
    lastTsRef.current = ts;

    offsetRef.current += (speed * delta) / 1000;
    offsetRef.current %= loopWidthRef.current;

    innerRef.current.style.transform =
      `translate3d(-${offsetRef.current}px,0,0)`;

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    measure();
    rafRef.current = requestAnimationFrame(step);

    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [speed]);

  return { innerRef, list };
}
