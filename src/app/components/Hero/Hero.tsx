"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RoundedTriangle from "./RoundedTriangle";
import LiquidBackground from "./LiquidBackground";
import FloatingTag from "./FloatingTag";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven fade out
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 50]);

  // Placeholder image - replace with her actual image
  const heroImage = "/layo.jpeg";

  const tags = [
    { label: "Visioneer", position: { top: "8%", right: "5%" }, delay: 0.8, floatSpeed: "slow" as const },
    { label: "God Fearing", position: { top: "25%", left: "0%" }, delay: 1.0, floatSpeed: "medium" as const },
    { label: "Trailblazer", position: { bottom: "20%", right: "0%" }, delay: 1.2, floatSpeed: "fast" as const },
    { label: "Kingdom Driven", position: { bottom: "8%", left: "8%" }, delay: 1.4, floatSpeed: "medium" as const },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale, y }}
      className="relative py-30 lg:py-0 min-h-screen w-full overflow-hidden bg-richBlack flex items-center"
    >
      {/* Subtle background grain/texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
          {/* ===== LEFT: Text Content ===== */}
          <div className="relative z-10">
            <RoundedTriangle>
              {/* Small eyebrow text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-4 font-body"
              >
                Welcome to my world
              </motion.p>

              {/* Main title */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4"
              >
                Hello, I&apos;m{" "}
                <span className="text-gold-500">Layo Obidike</span>
              </motion.h1>

              {/* Small paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/60 text-base md:text-lg max-w-md leading-relaxed mb-8"
              >
                A visionary driven by purpose, faith, and the audacity to build
                something that outlives me.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <button className="group relative inline-flex items-center gap-2 bg-gold-500 text-richBlack font-semibold px-8 py-3.5 rounded-full overflow-hidden transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25">
                  <span className="relative z-10">Book a call</span>
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
                  {/* Button shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
                </button>
              </motion.div>
            </RoundedTriangle>
          </div>

          {/* ===== RIGHT: Image with Liquid Background ===== */}
          <div className="relative flex items-center justify-center h-[450px] md:h-[550px] lg:h-[600px]">
            <LiquidBackground
              imageSrc={heroImage}
              imageAlt="Her Name portrait"
            />

            {/* Floating Tags */}
            {tags.map((tag, index) => (
              <FloatingTag
                key={index}
                label={tag.label}
                position={tag.position}
                delay={tag.delay}
                floatSpeed={tag.floatSpeed}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}