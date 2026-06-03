"use client";

import { motion } from "framer-motion";

const passions = [
  {
    title: "Faith & Personal Growth",
    desc: "My faith is my foundation. It fuels my purpose and inspires me to help others align their spiritual journeys with their goals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Family & Relationships",
    desc: "Being a wife, mother, and friend is one of my greatest luxuries. I cherish love, laughter, and connections that nourish the heart.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Creativity & Education",
    desc: "I love creating educational materials, writing books, and designing transformative programs that help others learn and grow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Consciousness & Reflection",
    desc: "I have a deep fascination with the mind. I treasure quiet moments of solitude to reflect, journey inward, and explore new dimensions of thought.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Connection & Laughter",
    desc: "I believe in the power of joy. Sharing stories, listening deeply, and laughing with loved ones bring light and fulfillment to my life.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Compassion & Community",
    desc: "Through giving back, acts of kindness, and creating spaces for others to thrive, I feel deeply connected to the world around me.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function MyPassion() {
  return (
    <section
      className="relative py-24 md:py-28 px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: "#C9A030" }}
          >
            What Fuels Me
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#0A0A0A",
            }}
          >
            My Passion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 rounded-xl transition-all duration-500"
              style={{
                backgroundColor: "#fafafa",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(229,193,88,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <div
                className="mb-4 p-2.5 rounded-lg inline-block"
                style={{
                  color: "#E5C158",
                  backgroundColor: "rgba(229,193,88,0.08)",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "#0A0A0A" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(0,0,0,0.55)" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}