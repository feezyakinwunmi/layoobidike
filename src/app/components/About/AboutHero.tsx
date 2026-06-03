"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-4 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(229,193,88,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] uppercase mb-4"
          style={{ color: "#F5D06B" }}
        >
          Get to know me
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Christian Entrepreneur, Author, Educator & Community Leader —
          passionate about helping faith-driven leaders thrive in every area of
          life.
        </motion.p>
      </div>
    </section>
  );
}