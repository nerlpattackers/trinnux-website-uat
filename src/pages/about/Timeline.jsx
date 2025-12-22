import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";
import "../../styles/timeline.css";

const timeline = [
  {
    year: "2013",
    title: "Early Foundations",
    desc: "Started as a small engineering group delivering wireless networking, server setup, and infrastructure support.",
    icon: "🛠️",
    image: "/timeline/2013.jpg",
    tone: "tone-2013",
  },
  {
    year: "2016",
    title: "Enterprise Infrastructure Projects",
    desc: "Expanded into large-scale network deployments, virtualization, and data center support.",
    icon: "🏢",
    image: "/timeline/2016.jpg",
    tone: "tone-2016",
  },
  {
    year: "2019",
    title: "3NNUX Technologies Established",
    desc: "Formally founded as 3NNUX Technologies Corporation, offering managed IT services and enterprise solutions.",
    icon: "🚀",
    image: "/timeline/2019.jpg",
    tone: "tone-2019",
  },
  {
    year: "2022",
    title: "Cloud & DevOps Expansion",
    desc: "Adopted cloud-native architectures, DevOps practices, and reliability engineering services.",
    icon: "☁️",
    image: null,
    tone: "tone-2022",
  },
  {
    year: "2024",
    title: "Growth & Trusted Partnerships",
    desc: "Expanded services across cloud, security, and professional training.",
    icon: "🤝",
    image: "/timeline/2024.jpg",
    tone: "tone-2024",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [lightbox, setLightbox] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Timeline fill height */
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  /* Gradient movement */
  const gradientPos = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "0% 100%"]
  );

  return (
    <main className="timeline-page" ref={containerRef}>
      <div className="container">
        <header className="timeline-header">
          <h1>Our Journey</h1>
          <p>
            A timeline of how 3NNUX Technologies evolved into a trusted
            technology partner.
          </p>
        </header>

        <section className="timeline">
          {/* Center animated gradient line */}
          <motion.span
            className="timeline-line-fill gradient-flow"
            style={{
              height: lineHeight,
              backgroundPosition: gradientPos,
            }}
          />

          {timeline.map((item, i) => {
            const fromX = i % 2 === 0 ? -20 : 20;

            return (
              <motion.div
                key={i}
                className={`timeline-item ${
                  i % 2 === 0 ? "left" : "right"
                } ${item.tone}`}
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 20, x: fromX }
                }
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {/* Dot */}
                <motion.div
                  className="timeline-dot"
                  initial={reduceMotion ? false : { scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.3, ease: "easeOut" }
                  }
                >
                  <span className="timeline-icon">{item.icon}</span>
                </motion.div>

                {/* Card */}
                <div className="timeline-card">
                  {item.image && (
                    <div
                      className="timeline-image-wrap"
                      onClick={() => setLightbox(item.image)}
                    >
                      <img src={item.image} alt={item.title} />
                      <span className="tap-hint">Tap to expand</span>
                    </div>
                  )}

                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}

          {/* TODAY */}
          <motion.div
            className="timeline-item today tone-today"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <div className="timeline-dot today-dot">
              <span className="timeline-icon">★</span>
            </div>

            <div className="timeline-card today-card">
              <span className="timeline-year">Today</span>
              <h3>Continuing Innovation</h3>
              <p>
                We continue to grow with our partners, delivering secure,
                reliable, and modern technology solutions.
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="timeline-lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Expanded" />
        </div>
      )}
    </main>
  );
}
