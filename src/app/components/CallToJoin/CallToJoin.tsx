"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Floating decorative icons
const floatingIcons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    top: "10%",
    left: "5%",
    size: "24px",
    duration: 5,
    delay: 0,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    top: "70%",
    left: "8%",
    size: "20px",
    duration: 4,
    delay: 1,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    top: "20%",
    right: "5%",
    size: "22px",
    duration: 6,
    delay: 0.5,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    bottom: "15%",
    right: "10%",
    size: "18px",
    duration: 5.5,
    delay: 1.5,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    top: "60%",
    left: "15%",
    size: "16px",
    duration: 7,
    delay: 2,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    top: "40%",
    right: "3%",
    size: "20px",
    duration: 4.5,
    delay: 0.8,
  },
];

export default function CallToJoin() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="join"
      className="relative py-24 md:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* ===== Background Dot Grid ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(229,193,88,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      />

      {/* ===== Floating SVG Icons ===== */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none z-0"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            width: item.size,
            height: item.size,
            color: "rgba(229,193,88,0.2)",
          }}
          animate={{
            y: [0, -15, 0, 10, 0],
            rotate: [0, 5, -5, 3, 0],
            scale: [1, 1.1, 1, 1.05, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Subtle top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(229,193,88,0.25), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* ===== LEFT: Text (3/5 width) ===== */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Small gold spark before text */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E5C158"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{
                color: "rgba(0, 0, 0, 0.65)",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 400,
              }}
            >
              I invite you to join our mission of inspiring transformation and
              creating holistic growth. Explore our initiatives, connect with
              our vision, and discover how you can be part of a thriving
              community committed to faith-driven leadership, holistic growth,
              and meaningful change.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="/collaboration"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                <button
                  className="group relative inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "#E5C158",
                    color: "#0A0A0A",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F5D06B";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(229,193,88,0.4)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#E5C158";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  <span className="relative z-10">Join Us</span>
                  <svg
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  {/* Shimmer */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s infinite",
                    }}
                  />
                </button>
              </motion.a>

             
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: Image (2/5 width) ===== */}
          <motion.div
            className="md:col-span-2"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="relative w-full h-[280px] md:h-[350px] overflow-hidden mx-auto"
              style={{
                borderRadius: "12px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/join.png"
                alt="Join our mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              {/* Gold accent corner */}
              <div
                className="absolute bottom-0 right-0"
                style={{
                  width: "60px",
                  height: "60px",
                  background:
                    "linear-gradient(135deg, transparent 50%, rgba(229,193,88,0.3) 50%)",
                }}
              />

              {/* Gold ring accent around image */}
              <div
                className="absolute -bottom-3 -right-3 rounded-xl -z-10"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(229,193,88,0.2)",
                  borderRadius: "16px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shimmer keyframe injected inline */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}