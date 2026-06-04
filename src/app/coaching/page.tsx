"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const testimonials = [
  {
    name: "Taiwo Johnson",
    rating: 4.5,
    quote:
      "I came to know Layo Obidike at the lowest point of my life. I had lost my identity and was struggling to find my feet again. Over the past months, I have accomplished the things I didn't know I had the capacity to accomplish. The dreams I long buried are being restored. Thanks to Layo Obidike, I'm evolving!",
  },
  {
    name: "Olamilekan Emmanuel",
    rating: 4.5,
    quote:
      "It has been a wonderful experience with Layo Obidike. Their inspiring content, transformative coaching, and impactful training programs have resonated deeply with me. Layo Obidike consistently delivers authentic, practical, and uplifting experiences. I highly recommend them!",
  },
  {
    name: "Aitsebaomo Regina",
    rating: 5,
    quote:
      "Working with LO has been truly transformative. The insights on business, wealth, and purpose are practical and deeply impactful. Whether through coaching, training, or speaking engagements, the clarity and direction provided are unmatched. Highly recommended!",
  },
];

const coachingOptions = [
  {
    title: "One-on-One Intensives",
    description:
      "Targeted sessions focused on breakthrough, clarity, and execution. Designed for leaders navigating high-stakes decisions or fresh transitions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "90-Day Launch or Growth Coaching",
    description:
      "Strategic, guided support to help you launch or grow a God-centered initiative. Designed for authors, entrepreneurs, and ministry builders needing momentum.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Kingdom Strategy Sessions",
    description:
      "Prophetic coaching for realignment, next-step clarity, and spiritual discernment. Designed for moments of uncertainty, vision recalibration, or divine decision-making.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const gains = [
  "A clear, customized roadmap for your next season",
  "Structure, systems, and strategy to support sustainable growth",
  "Confidence to act on divine instructions",
  "Prophetic insight and practical wisdom rooted in the Word",
];

const whoIsItFor = [
  {
    title: "Visionaries",
    desc: "feeling stuck, stagnant, or overwhelmed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Entrepreneurs",
    desc: "building with faith, not just hustle",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Women",
    desc: "called to rise, lead, and multiply impact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Creatives & Leaders",
    desc: "seeking clarity and scale",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "#E5C158" : star <= rating ? "#E5C158" : "rgba(255,255,255,0.15)"}
          stroke={star <= rating ? "#E5C158" : "rgba(255,255,255,0.2)"}
          strokeWidth="1"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="text-xs ml-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
        {rating}/5
      </span>
    </div>
  );
}

export default function CoachingPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Text */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p
                className="text-sm tracking-[0.2em] uppercase mb-4"
                style={{ color: "#F5D06B" }}
              >
                Coaching with Layo Obidike
              </p>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6"
                style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}
              >
                Build Vision. Birth Strategy.{" "}
                <span style={{ color: "#E5C158" }}>Break Limits.</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
                You weren&apos;t meant to play small. You carry purpose,
                potential, and power — and it&apos;s time to activate every
                part of it.
              </p>

              <p className="text-base leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
                Through strategic, spirit-led coaching with Layo Obidike,
                you&apos;ll move from confusion to clarity, from hesitation to
                execution, and from striving to building in alignment with
                God&apos;s design for your life, business, or ministry.
              </p>

              <p className="text-sm italic mb-8" style={{ color: "#E5C158" }}>
                This is not just coaching. This is divine partnership for your
                next level.
              </p>

              <motion.a
                href="#book"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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
                  <span className="relative z-10">Book a Free Discovery Call</span>
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

            {/* Right Image */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="relative w-full h-[350px] md:h-[450px] overflow-hidden"
                style={{ borderRadius: "20px" }}
              >
                <Image
                  src="/Layo.jpeg"
                  alt="Coaching with Layo Obidike"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.4), transparent 40%)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHO IS IT FOR ===== */}
      <section className="relative py-16 md:py-20 px-4" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              Who This Is For
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whoIsItFor.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center p-5 rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="mb-3" style={{ color: "#E5C158" }}>{item.icon}</div>
                <h4 className="text-sm font-bold mb-1" style={{ color: "#ffffff" }}>{item.title}</h4>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU'LL GAIN ===== */}
      <section className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              The Outcome
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              What You&apos;ll Gain
            </h2>
            <p className="mt-4 text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
              This is transformation with direction — not just inspiration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gains.map((gain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  backgroundColor: "rgba(229,193,88,0.03)",
                  border: "1px solid rgba(229,193,88,0.1)",
                }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E5C158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {gain}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COACHING OPTIONS ===== */}
      <section className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              Ways to Work With Me
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              Coaching Options
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coachingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group flex flex-col p-7 rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,193,88,0.25)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(229,193,88,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="mb-5 p-3 rounded-xl w-fit transition-all duration-500 group-hover:scale-110" style={{ color: "#E5C158", backgroundColor: "rgba(229,193,88,0.08)" }}>
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#ffffff" }}>{option.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET YOUR COACH ===== */}
      <section className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full h-[350px] md:h-[420px] overflow-hidden" style={{ borderRadius: "20px" }}>
                <Image
                  src="/Layo.jpeg"
                  alt="Layo Obidike"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
                Meet Your Coach
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
                Layo Obidike
              </h2>
              <p className="text-sm mb-4 italic" style={{ color: "#E5C158" }}>
                Author. Entrepreneur. Builder. Faith Catalyst.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                Layo Obidike has helped hundreds of visionaries step into alignment and activate what&apos;s been dormant. Her coaching weaves together prophetic insight, practical wisdom, and kingdom strategy to bring lasting transformation — not temporary motivation.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Her mission is simple: help purpose-driven leaders obey God boldly and build what they were born to carry.
              </p>
            </motion.div>
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
              Our Happy Clients!
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
                <StarRating rating={item.rating} />
                <p className="text-sm leading-relaxed mt-4 mb-5 flex-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTIVATION CTA ===== */}
      <section className="relative py-20 md:py-24 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              This Isn&apos;t Just Coaching.{" "}
              <span style={{ color: "#E5C158" }}>It&apos;s Activation.</span>
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Your next level isn&apos;t unlocked by motivation alone. It requires decision, direction, and divine partnership. If you&apos;re ready to build what God has shown you, this is your invitation.
            </p>
            <motion.a
              href="#book"
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
                <span className="relative z-10">Book Your Session</span>
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

      {/* ===== FREE GUIDE FORM ===== */}
      <section id="book" className="relative py-20 md:py-28 px-4" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: "#F5D06B" }}>
              Free Guide
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}>
              Signup for a Free Guide
            </h2>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-10 rounded-2xl"
              style={{
                backgroundColor: "rgba(229,193,88,0.05)",
                border: "1px solid rgba(229,193,88,0.2)",
              }}
            >
              <svg
                className="mx-auto mb-4"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E5C158"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Thank you!</h3>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>
                You have successfully joined our subscriber list.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-5 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#ffffff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-5 py-3.5 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#ffffff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ backgroundColor: "#E5C158", color: "#0A0A0A" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F5D06B";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(229,193,88,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E5C158";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Download Now
              </button>
            </motion.form>
          )}
        </div>
      </section>

    </main>
  );
}