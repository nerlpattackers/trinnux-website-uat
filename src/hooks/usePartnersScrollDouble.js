// src/hooks/usePartnersScrollDouble.js
import { useEffect, useRef } from "react";

export default function usePartnersScrollDouble({ speed = 120 } = {}) {
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

  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTsRef = useRef(null);
  const widthRef = useRef(1);

  const mountedRef = useRef(false);

  /* Measure EXACT width of first track (including gaps) */
  const measure = () => {
    const inner = innerRef.current;
    if (!inner) return;
    widthRef.current = inner.getBoundingClientRect().width || 1;
  };

  const step = (ts) => {
    if (!mountedRef.current) return;

    if (lastTsRef.current == null) lastTsRef.current = ts;
    const delta = ts - lastTsRef.current;
    lastTsRef.current = ts;

    offsetRef.current += (speed * delta) / 1000;
    offsetRef.current %= widthRef.current;

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.transform =
        `translate3d(-${offsetRef.current}px,0,0)`;
    }

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    mountedRef.current = true;

    // Wait one frame to ensure layout is ready
    requestAnimationFrame(() => {
      measure();
      rafRef.current = requestAnimationFrame(step);
    });

    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      mountedRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [speed]);

  return { wrapperRef, innerRef, list };
}
