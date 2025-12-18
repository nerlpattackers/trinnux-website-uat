// src/components/usePartnersScroll.js
import { useEffect, useRef } from "react";

/**
 * rAF-driven partners marquee (reduced-seam version)
 * - Uses getBoundingClientRect for measurement
 * - Keeps halfWidth as float
 * - Applies transforms with fractional precision
 * - Wraps using subtractive logic with a tiny epsilon
 */
export default function usePartnersScroll({ speed = 120 } = {}) {
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

  const scrollList = partnerLogos.concat(partnerLogos);

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);      // px, float
  const lastTsRef = useRef(null);
  const halfWidthRef = useRef(0);   // px, float
  const startTimerRef = useRef(null);
  const resizeTimerRef = useRef(null);
  const mountedRef = useRef(false);
  const pausedRef = useRef(false);

  // Wait until images are loaded (or error)
  const waitForImages = async (track) => {
    const imgs = Array.from(track.querySelectorAll("img"));
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

  // Measure using getBoundingClientRect (gives subpixel floats)
  const measure = (track) => {
    const rect = track.getBoundingClientRect();
    // scrollWidth is still fine, but rect.width is the rendered width of track
    const fullWidth = rect.width || Math.round(track.scrollWidth || 0);
    halfWidthRef.current = Math.max(1, fullWidth / 2);
    track.style.animation = "none";
    track.style.willChange = "transform";
    // store raw float width for debug/inspection
    track.setAttribute("data-marquee-width", String(Math.round(fullWidth)));
  };

  const step = (ts) => {
    if (!mountedRef.current) return;
    if (pausedRef.current) {
      // keep timestamp in-sync so delta remains small on resume
      lastTsRef.current = ts;
      rafRef.current = requestAnimationFrame(step);
      return;
    }

    if (lastTsRef.current == null) lastTsRef.current = ts;
    const delta = ts - lastTsRef.current;
    lastTsRef.current = ts;

    // advance (float)
    offsetRef.current += (speed * delta) / 1000;

    const half = halfWidthRef.current || 1;

    // epsilon to avoid landing exactly at half value (prevents rounding boundary)
    const EPS = 0.0005;

    if (offsetRef.current + EPS >= half) {
      // subtract once (keeps continuity)
      offsetRef.current -= half;
      // ensure it remains non-negative and < half
      if (offsetRef.current < 0) offsetRef.current += half;
    }

    const track = trackRef.current;
    if (track) {
      // apply fractional transform for smooth subpixel motion
      track.style.transform = `translate3d(-${offsetRef.current.toFixed(3)}px,0,0)`;
    }

    rafRef.current = requestAnimationFrame(step);
  };

  const startRaf = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    lastTsRef.current = null;
    rafRef.current = requestAnimationFrame(step);
  };

  const stopRaf = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const restart = async (track) => {
    stopRaf();
    await waitForImages(track);
    if (!mountedRef.current) return;
    if (startTimerRef.current) clearTimeout(startTimerRef.current);
    // small delay allows lazy image swaps to finish
    startTimerRef.current = setTimeout(() => {
      if (!mountedRef.current) return;
      measure(track);
      // modulo preserve (float)
      offsetRef.current = offsetRef.current % (halfWidthRef.current || 1);
      startRaf();
    }, 220); // 220ms is a good compromise
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    mountedRef.current = true;

    restart(track).catch(() => {});

    // handle resize/orientation: debounce and restart preserving offset
    const onResize = () => {
      if (!mountedRef.current) return;
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        restart(track).catch(() => {});
      }, 120);
    };

    // pause/resume on visibility
    const onVisibility = () => {
      pausedRef.current = document.hidden;
      if (!pausedRef.current) {
        // keep offset modulo half and resume rAF after a tiny tick
        offsetRef.current = offsetRef.current % (halfWidthRef.current || 1);
        setTimeout(() => {
          if (!mountedRef.current) return;
          startRaf();
        }, 80);
      }
    };

    const mo = new MutationObserver(() => {
      // content changes (images swapped) -> remesure/restart
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        restart(track).catch(() => {});
      }, 120);
    });
    mo.observe(track, { childList: true, subtree: true, attributes: true });

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      mountedRef.current = false;
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      if (startTimerRef.current) clearTimeout(startTimerRef.current);
      stopRaf();
      mo.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [speed]);

  return { trackRef, scrollList };
}
