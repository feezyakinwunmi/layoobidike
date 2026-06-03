"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const initiatives = [
  {
    title: "ThriveOn",
    desc: "Empowering entrepreneurs and fostering economic growth through business incubation and support.",
    image: "/org-thriveon.jpg",
    url: "https://ithriveonwisdom.com",
  },
  {
    title: "LO Publications",
    desc: "Providing meaningful insights and inspiration through our diverse range of publications.",
    image: "/org-lo-publications.jpg",
    url: "https://lopublications.com",
  },
  {
    title: "PraiseGates School",
    desc: "Enhancing educational experiences and fostering personal development in a nurturing environment.",
    image: "/org-pfschools.jpg",
    url: "https://pfschools.com",
  },
  {
    title: "God's Treasury Cooperative",
    desc: "Supporting financial wellness and community development through cooperative efforts.",
    image: "/org-gtcs.png",
    url: "https://godstreasury.com",
  },

];

export default function KeyInitiatives() {
  return (
    <section
      className="relative py-24 md:py-28 px-4"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-5xl mx-auto">
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
            What I&apos;ve Built
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#ffffff",
            }}
          >
            Our Key Initiatives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500"
              style={{
                textDecoration: "none",
                backgroundColor: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(229,193,88,0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.backgroundColor =
                  "rgba(229,193,88,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.015)";
              }}
            >
              <div className="relative w-16 h-16 mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#ffffff" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}