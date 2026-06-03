"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const organizations = [
  {
    name: "Canada Clothing",
    url: "https://canadaclothing.com",
    logo: "/org-canada-clothing.jpg",
  },
  {
    name: "Pfschools",
    url: "https://www.pfschools.com",
    logo: "/org-pfschools.jpg",
  },
  {
    name: "GTCS",
    url: "https://godstreasury.com",
    logo: "/org-gtcs.png",
  },

  {
    name: "Simart Place",
    url: "https://simartplace.com",
    logo: "/org-simart-place.jpg",
  },
  {
    name: "LO Publications",
    url: "https://lopublications.com",
    logo: "/org-lo-publications.jpg",
  },
  {
    name: "Thriveon",
    url: "https://ithriveonwisdom.com",
    logo: "/org-thriveon.jpg",
  },
];

// Triple for seamless infinite scroll
const infiniteOrgs = [...organizations, ...organizations, ...organizations];

export default function Organizations() {
  return (
    <section
      id="organizations"
      className="relative py-10 md:py-12 overflow-hidden"
      style={{ backgroundColor: "#060606" }}
    >
      {/* Section label */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(229,193,88,0.6)" }}
          >
            Organizations
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "linear-gradient(to right, rgba(229,193,88,0.4), transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Infinite horizontal scroll — both desktop & mobile */}
      <div className="relative">
        <motion.div
          className="flex gap-8 md:gap-12 items-center"
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {infiniteOrgs.map((org, index) => (
            <a
              key={`${org.name}-${index}`}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group flex items-center justify-center transition-all duration-300"
              style={{
                width: "120px",
                height: "60px",
                textDecoration: "none",
                opacity: 0.5,
                filter: "grayscale(30%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.5";
                e.currentTarget.style.filter = "grayscale(30%)";
              }}
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={100}
                height={50}
                className="object-contain max-h-[50px] rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to right, #060606 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to left, #060606 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}