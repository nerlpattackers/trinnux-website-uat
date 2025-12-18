// CLEAN hook: NO JSX inside!
import { useEffect, useRef } from "react";

export default function usePartnersScrollDouble({ speed = 120 } = {}) {
  const partnerLogos = [
    "/partners/rbgi.png",
    "/partners/katipunanbank.png",
    "/partners/jmhi.png",
    "/partners/mvsm.png",
    "/partners/mactanbank.png",
    "/partners/rbsmi.png",
    "/partners/myfc2.png",
    "/partners/rbparacale.png",
    "/partners/fppbi.png",
    "/partners/rbrizal.png",
    "/partners/rbpilar.png",
  ];

  const list = partnerLogos;

  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTsRef = useRef(null);
  const widthRef = useRef(0);

  const pausedRef = useRef(false);
  const resizeTimerRef = useRef(null);
  const startTimerRef = useRef(null);
  const mountedRef = useRef(false);

  const waitForImages = async (root) => {
    if (!root) return;
    const imgs = Array.from(root.querySelectorAll("img"));
    if (!imgs.length) return;

    await Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete && img.naturalWidth > 0) return resolve();
            const done = () => {
              img.removeEventListener("load", done);
              img.removeEventListener("error", done);
              resolve();
            };
            img.addEventListener("load", done);
            img.addEventListener("error", done);
          })
      )
    );
  };

  const measure = (inner) => {
    const rect = inner.getBoundingClientRect();
    widthRef.current = rect.width || inner.scrollWidth || 1;
  };

  const step = (ts) => {
    if (!mountedRef.current) return;

    if (pausedRef.current) {
      lastTsRef.current = ts;
      rafRef.current = requestAnimationFrame(step);
      return;
    }

    if (lastTsRef.current == null) lastTsRef.current = ts;

    const delta = ts - lastTsRef.current;
    lastTsRef.current = ts;

    offsetRef.current += (speed * delta) / 1000;

    const w = widthRef.current || 1;

    if (offsetRef.current >= w) offsetRef.current -= w;

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.transform = `translate3d(-${offsetRef.current.toFixed(3)}px, 0, 0)`;
    }

    rafRef.current = requestAnimationFrame(step);
  };

  const start = async () => {
    const inner = innerRef.current;
    if (!inner) return;

    await waitForImages(inner);

    if (startTimerRef.current) clearTimeout(startTimerRef.current);
    startTimerRef.current = setTimeout(() => {
      measure(inner);
      offsetRef.current = offsetRef.current % widthRef.current;
      lastTsRef.current = null;
      rafRef.current = requestAnimationFrame(step);
    }, 200);
  };

  useEffect(() => {
    mountedRef.current = true;

    start();

    const onResize = () => {
      if (!mountedRef.current) return;
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);

      resizeTimerRef.current = setTimeout(() => {
        measure(innerRef.current);
        offsetRef.current %= widthRef.current;
      }, 150);
    };

    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      mountedRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      if (startTimerRef.current) clearTimeout(startTimerRef.current);

      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [speed]);

  return { wrapperRef, innerRef, list };
}
