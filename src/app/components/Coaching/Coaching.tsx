"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "1-on-1 Coaching",
    description:
      "Personalized guidance tailored to your unique journey. We'll work together to align your faith, purpose, and goals for lasting transformation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    cta: "Book a Session",
    highlight: true,
  },
  {
    title: "Group Workshops",
    description:
      "Interactive sessions designed for teams, churches, and communities. Grow together through shared learning and collective empowerment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    cta: "Explore Workshops",
  },
  {
    title: "Online Courses",
    description:
      "Self-paced learning rooted in biblical wisdom. Access transformative content anytime, anywhere, and grow at your own rhythm.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <polyline points="10 9 14 12 10 15" />
      </svg>
    ),
    cta: "Browse Courses",
  },
];

export default function Coaching() {
  return (
    <section
      id="coaching"
      className="relative py-24 md:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(229,193,88,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: "#F5D06B" }}
          >
            How I Can Help You
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#ffffff",
            }}
          >
            Coaching & Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-500 relative overflow-hidden"
              style={{
                backgroundColor: service.highlight
                  ? "rgba(229,193,88,0.06)"
                  : "rgba(255,255,255,0.015)",
                border: service.highlight
                  ? "1px solid rgba(229,193,88,0.25)"
                  : "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(229,193,88,0.3)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = service.highlight
                  ? "rgba(229,193,88,0.25)"
                  : "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div
                  className="absolute top-4 right-4"
                  style={{
                    backgroundColor: "rgba(229,193,88,0.15)",
                    color: "#F5D06B",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    padding: "2px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Popular
                </div>
              )}

              {/* Icon */}
              <div
                className="mb-5 p-3 rounded-xl transition-all duration-500 group-hover:scale-110 w-fit"
                style={{
                  color: "#E5C158",
                  backgroundColor: "rgba(229,193,88,0.08)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg md:text-xl font-bold mb-3"
                style={{ color: "#ffffff" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 group/link"
                style={{ color: "#E5C158", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F5D06B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#E5C158";
                }}
              >
                {service.cta}
                <svg
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}