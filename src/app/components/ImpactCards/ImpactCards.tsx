"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    number: 20,
    suffix: "+",
    label: "Years Leading",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    accent: "#E5C158",
  },
  {
    number: 7,
    suffix: "",
    label: "Organizations",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    accent: "#F5D06B",
  },
  {
    number: 50,
    suffix: "+",
    label: "Publications",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    accent: "#E5C158",
  },
  {
    number: 10000,
    suffix: "+",
    label: "Lives Touched",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "#F5D06B",
  },
];

function AnimatedCount({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactCards() {
  return (
    <section
      className="relative py-16 md:py-20 px-4 -mt-16 md:-mt-20 z-20"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="group relative p-5 md:p-6 rounded-2xl text-center cursor-default overflow-hidden"
              style={{
                backgroundColor: "rgba(10,10,10,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(229,193,88,0.25)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(229,193,88,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.3)";
              }}
            >
              {/* Accent glow behind card */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${card.accent}15, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="flex items-center justify-center mb-3 mx-auto rounded-full transition-all duration-500 group-hover:scale-110"
                style={{
                  width: "44px",
                  height: "44px",
                  color: card.accent,
                  backgroundColor: `${card.accent}10`,
                }}
              >
                {card.icon}
              </motion.div>

              {/* Number */}
              <div
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-1 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#ffffff",
                }}
              >
                <AnimatedCount target={card.number} suffix={card.suffix} />
              </div>

              {/* Label */}
              <p
                className="text-xs tracking-wide uppercase transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {card.label}
              </p>

              {/* Subtle shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.02) 50%, transparent 60%)",
                  backgroundSize: "200% 200%",
                  animation: "shimmer 2s infinite",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }
      `}</style>
    </section>
  );
}