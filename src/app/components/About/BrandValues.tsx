"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  { heading: "I Love", desc: "I lead with love, infusing warmth and care into every aspect of our work and interactions." },
  { heading: "I Collaborate", desc: "I thrive through collaboration, valuing teamwork and partnerships to achieve our common goals." },
  { heading: "I Strive for Excellence", desc: "I am committed to excellence, ensuring the highest standards in our programs, services, and everything I do." },
  { heading: "I Embrace Creativity", desc: "I champion creativity, leveraging innovative thinking to drive meaningful change and solve challenges." },
  { heading: "I Act with Integrity", desc: "I uphold integrity, maintaining transparency, honesty, and ethical practices in all our endeavors." },
  { heading: "I Build Community", desc: "I focus on building and nurturing vibrant communities, creating a sense of belonging and mutual support." },
  { heading: "I Make Impact", desc: "I am dedicated to making a positive impact, striving to improve lives and contribute to the greater good." },
  { heading: "I Empower", desc: "I empower individuals and communities, helping them realize their potential and achieve their dreams." },
];

export default function BrandValues() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-24 md:py-28 px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: "#C9A030" }}
          >
            What I Stand For
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#0A0A0A",
            }}
          >
            Our Brand Values
          </h2>
        </motion.div>

        <div className="space-y-3">
          {values.map((value, index) => (
            <motion.div
              key={value.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor:
                  openIndex === index ? "rgba(229,193,88,0.04)" : "#fafafa",
              }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors duration-300"
                style={{ cursor: "pointer" }}
              >
                <span
                  className="text-base md:text-lg font-semibold"
                  style={{
                    color: openIndex === index ? "#C9A030" : "#0A0A0A",
                  }}
                >
                  {value.heading}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === index ? "#E5C158" : "rgba(0,0,0,0.3)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: "rgba(0,0,0,0.6)" }}
                    >
                      {value.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}