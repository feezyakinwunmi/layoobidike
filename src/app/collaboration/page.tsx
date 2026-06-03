"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const howWeWork = [
  {
    title: "Speaking Engagements",
    description:
      "Inspirational talks for women ministers, entrepreneurs, business professionals, and youth. Topics include family, leadership, wealth, business development, and more.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Strategic Partnerships",
    description:
      "Co-host conferences, workshops, and retreats for greater impact. Joint ventures to promote shared missions and amplify reach.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Event Hosting & Facilitation",
    description:
      "Expert in event hosting, moderating panels, and leading workshops. Ensures a dynamic and engaging audience experience every time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Customized Programs",
    description:
      "Tailored training programs and group mentoring sessions designed for specific audiences, ensuring relevance and maximum transformation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const whyCollaborate = [
  {
    title: "Expertise",
    description: "Over a decade of experience in speaking, mentoring, and business development.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Versatility",
    description: "Inspires faith-based groups, business professionals, and community leaders alike.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Passion",
    description: "Committed to fostering partnerships that create meaningful impact and shared success.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Result-Focused",
    description: "Our clients consistently give great testimonies for their personal and business growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const audienceGains = [
  "Actionable insights to foster personal and professional growth",
  "Tools for building sustainable businesses and impactful ministries",
  "Renewed inspiration to lead with purpose and vision",
];

const testimonials = [
  {
    name: "Jason Martin",
    quote:
      "It has been a wonderful experience with Layo Obidike. Their inspiring content, transformative coaching, and impactful training programs have resonated deeply with me. From thought-provoking publications like 'Rhapsody of Love' to empowering speaking engagements, Layo Obidike consistently delivers authentic, practical, and uplifting experiences. I highly recommend them!",
  },
  {
    name: "Omolara Adeola",
    quote:
      "Layo Obidike is a dedicated and exceptional leader. Her experience has helped me grow both professionally and personally. I will gladly recommend Layo Obidike to anyone seeking growth and empowerment. Her coaching, training, and speaking services will help you get clarifications on purpose, achieve your goals, and integrate spirituality into your personal and professional life.",
  },
  {
    name: "Olukunle Jaiyesimi",
    quote:
      "One-on-one Coaching: I came to know Layo Obidike at the lowest point of my life. I had lost my identity and was struggling to find my feet again. Over the past months with her, I have accomplished the things I didn't know I had the capacity to accomplish. The dreams I long buried are being restored, and I'm pushing my boundaries. Thanks to Layo Obidike, I'm evolving!",
  },
];

export default function CollaborationPage() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>

      {/* ===== HERO ===== */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-4 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "800px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(229,193,88,0.07) 0%, transparent 70%)",
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E5C158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: "#F5D06B" }}>
              Partner With Layo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}
          >
            Collaboration with{" "}
            <span style={{ color: "#E5C158" }}>Layo Obidike</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Empowering Lives, Transforming Communities
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Let&apos;s create impact together through speaking engagements,
            strategic partnerships, and transformational programs.
          </motion.p>

          <motion.a
            href="#start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <button
              className="group relative inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: "#E5C158", color: "#0A0A0A" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F5D06B";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(229,193,88,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#E5C158";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <span className="relative z-10">Let&apos;s Collaborate</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.a>
        </div>
      </section>

      {/* ===== WHY COLLABORATE ===== */}
      <section className="relative py-20 md:py-24 px-4" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              Why Partner With Layo
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              Why Collaborate with Layo
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCollaborate.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,193,88,0.25)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.backgroundColor = "rgba(229,193,88,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.015)";
                }}
              >
                <div className="mb-4 p-3 rounded-xl transition-all duration-500 group-hover:scale-110" style={{ color: "#E5C158", backgroundColor: "rgba(229,193,88,0.08)" }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#ffffff" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE CAN WORK TOGETHER ===== */}
      <section className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              Ways to Partner
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              How We Can Work Together
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howWeWork.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-5 p-6 rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,193,88,0.2)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                <div className="flex-shrink-0 p-3 rounded-xl h-fit transition-all duration-500 group-hover:scale-110" style={{ color: "#E5C158", backgroundColor: "rgba(229,193,88,0.08)" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT SETS ME APART ===== */}
      <section className="relative py-20 md:py-24 px-4" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              The Difference
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              What Sets Me Apart
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-10 rounded-2xl text-center"
            style={{
              backgroundColor: "rgba(229,193,88,0.03)",
              border: "1px solid rgba(229,193,88,0.12)",
            }}
          >
            <p className="text-lg md:text-xl font-bold mb-4" style={{ color: "#E5C158" }}>
              Purpose-Driven. People-Focused. Results-Oriented.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              I don&apos;t just offer services — I partner with visionaries to build lasting impact. My approach is rooted in faith, strategy, and deep insight into human behavior and business systems, with a unique blend of publishing expertise, entrepreneurial development, and spiritual leadership.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              I&apos;m also known for infusing spirituality into leadership and decision-making. I help individuals and organizations transform their stories, sharpen their structures, and multiply their results. Whether through books, business incubators, or digital platforms, I guide clients to align their message with their mission — and monetize it with meaning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT YOUR AUDIENCE WILL GAIN ===== */}
      <section className="relative py-20 md:py-24 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              Bring Layo to Your Event
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              What Your Audience Will Gain
            </h2>
          </motion.div>

          <div className="space-y-4">
            {audienceGains.map((gain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{
                  backgroundColor: "rgba(229,193,88,0.03)",
                  border: "1px solid rgba(229,193,88,0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E5C158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.7)" }}>{gain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              Client Love
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              What People Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-6 rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,193,88,0.2)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                <svg className="mb-4 opacity-30" width="28" height="28" viewBox="0 0 24 24" fill="#E5C158">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="start" className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              Let&apos;s Transform Together!
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Together, we can empower lives, build impactful communities, and inspire generations. Let&apos;s create events that leave lasting legacies.
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
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(229,193,88,0.3)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E5C158";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                <span className="relative z-10">Start Your Collaboration with Layo</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}