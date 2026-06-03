"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const organizations = [
  {
    id: 1,
    name: "Canada Clothing",
    description:
      "A premium clothing brand offering high-quality apparel that blends Canadian craftsmanship with contemporary style. From everyday essentials to statement pieces, Canada Clothing delivers comfort, durability, and elegance for the modern individual.",
    logo: "/org-canada-clothing.jpg",
    url: "https://canadaclothing.com",
    category: "Fashion & Retail",
  },
  {
    id: 2,
    name: "Pfschools",
    description:
      "The PraiseGates Foundation School — a nurturing educational institution committed to academic excellence and character development. Pfschools provides a holistic learning environment that shapes young minds for success in academics and life.",
    logo: "/org-pfschools.jpg",
    url: "https://www.pfschools.com",
    category: "Education",
  },
  {
    id: 3,
    name: "GTCS — God's Treasury Cooperative",
    description:
      "A faith-based financial cooperative dedicated to promoting financial literacy, community wealth-building, and economic empowerment. GTCS helps members achieve financial freedom through savings, investments, and cooperative support grounded in biblical principles.",
    logo: "/org-gtcs.png",
    url: "https://godstreasury.com",
    category: "Finance & Community",
  },
  
  {
    id: 5,
    name: "Simart Place",
    description:
      "An innovative marketplace connecting buyers and sellers in a seamless, user-friendly environment. Simart Place makes commerce simple, accessible, and rewarding — whether you're shopping for essentials or growing your business.",
    logo: "/org-simart-place.jpg",
    url: "https://simartplace.com",
    category: "E-Commerce",
  },
  {
    id: 6,
    name: "LO Publications",
    description:
      "A publishing house dedicated to producing inspiring, educational, and transformational content. From children's books to personal development resources, LO Publications amplifies voices that educate, empower, and elevate readers across the globe.",
    logo: "/org-lo-publications.jpg",
    url: "https://lopublications.com",
    category: "Publishing & Media",
  },
  {
    id: 7,
    name: "ThriveOn Entrepreneur",
    description:
      "A dynamic platform that equips Christian entrepreneurs and leaders with mentorship, resources, and community support. ThriveOn Entrepreneur fosters business incubation, leadership development, and economic growth rooted in faith and purpose.",
    logo: "/org-thriveon.jpg",
    url: "https://ithriveonwisdom.com",
    category: "Business & Leadership",
  },
];

const categories = [
  "All",
  "Fashion & Retail",
  "Education",
  "Finance & Community",
  "Faith & Personal Growth",
  "E-Commerce",
  "Publishing & Media",
  "Business & Leadership",
];

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(229,193,88,0.08)",
              border: "1px solid rgba(229,193,88,0.2)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E5C158"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: "#F5D06B" }}>
              Our Ecosystem
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}
          >
            Our{" "}
            <span style={{ color: "#E5C158" }}>Organizations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            A family of purpose-driven ventures committed to faith, education,
            business, and community transformation.
          </motion.p>
        </div>
      </section>

      {/* Organizations List */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {organizations.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group"
              >
                <div
                  className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl transition-all duration-500"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.015)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(229,193,88,0.2)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(229,193,88,0.02)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(229,193,88,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.015)";
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-start justify-center">
                    <div
                      className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-3 rounded-xl transition-all duration-500 group-hover:scale-105"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <h3
                        className="text-xl md:text-2xl font-bold transition-colors duration-300"
                        style={{ color: "#ffffff" }}
                      >
                        {org.name}
                      </h3>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full w-fit"
                        style={{
                          backgroundColor: "rgba(229,193,88,0.08)",
                          color: "#F5D06B",
                          border: "1px solid rgba(229,193,88,0.15)",
                        }}
                      >
                        {org.category}
                      </span>
                    </div>

                    <p
                      className="text-sm md:text-base leading-relaxed mb-5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {org.description}
                    </p>

                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link"
                      style={{ color: "#E5C158", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#F5D06B";
                        e.currentTarget.style.gap = "12px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#E5C158";
                        e.currentTarget.style.gap = "8px";
                      }}
                    >
                      Visit Website
                      <svg
                        className="transition-transform duration-300"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="relative py-20 md:py-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(229,193,88,0.05), rgba(10,10,10,0.95))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}
            >
              Want to Partner With Us?
            </h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              We&apos;re always open to collaborations that drive meaningful impact.
              Let&apos;s build something great together.
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
                style={{ backgroundColor: "#E5C158", color: "#0A0A0A" }}
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
                <span className="relative z-10">Get in Touch</span>
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

    </main>
  );
}