"use client";

import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section
      className="relative py-24 md:py-28 px-4"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#ffffff",
            }}
          >
            Let&apos;s Work Together!
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Are you ready to align your faith, purpose, and goals to thrive
            spiritually and professionally? I&apos;ve helped leaders in
            Nigeria, Canada, and beyond — and I&apos;d love to help you too.
          </p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                  "0 10px 30px rgba(229,193,88,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#E5C158";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <span className="relative z-10">Contact Me Today</span>
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
            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}