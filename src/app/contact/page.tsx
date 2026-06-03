"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const reasons = [
  {
    title: "Book Coaching",
    description: "You're interested in booking a coaching session",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Speaking Invitation",
    description: "You want to invite Layo to speak at your event or podcast",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Collaboration & Partnerships",
    description: "You're inquiring about collaboration, partnerships, or press",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Share Your Story",
    description: "You simply want to share how the message has impacted you",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you'd integrate with your email service (Resend, SendGrid, etc.)
  };

  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>

      {/* ===== HERO ===== */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-4 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(229,193,88,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
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
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: "#F5D06B" }}>
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading), serif", color: "#ffffff" }}
          >
            Contact{" "}
            <span style={{ color: "#E5C158" }}>Layo Obidike</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-3"
            style={{ color: "#E5C158" }}
          >
            Clarity. Alignment. Kingdom Momentum.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            It begins with a conversation. Whether you&apos;re ready to book a
            session, inquire about speaking, or ask a question — you&apos;re in
            the right place.
          </motion.p>
        </div>
      </section>

      {/* ===== REASONS + FORM ===== */}
      <section className="relative py-16 md:py-24 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* ===== LEFT: Reasons ===== */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: "#ffffff" }}>
                Reasons You Might Reach Out:
              </h2>
              <div className="space-y-3">
                {reasons.map((reason, index) => (
                  <div
                    key={reason.title}
                    className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.015)",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="flex-shrink-0 mt-0.5" style={{ color: "#E5C158" }}>
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-0.5" style={{ color: "#ffffff" }}>
                        {reason.title}
                      </h4>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm mt-6 italic" style={{ color: "rgba(255,255,255,0.5)" }}>
                Whatever&apos;s on your heart, let&apos;s start the conversation.
              </p>

              {/* Direct Email */}
              <div
                className="mt-8 p-5 rounded-xl"
                style={{
                  backgroundColor: "rgba(229,193,88,0.04)",
                  border: "1px solid rgba(229,193,88,0.12)",
                }}
              >
                <h3 className="text-sm font-semibold mb-2" style={{ color: "#F5D06B" }}>
                  Prefer direct email?
                </h3>
                <a
                  href="mailto:layo@layoobidike.com"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F5D06B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  layo@layoobidike.com
                </a>
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Please include your name, best contact method, and a brief note
                  about how we can serve you.
                </p>
              </div>
            </motion.div>

            {/* ===== RIGHT: Form ===== */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-2xl text-center h-full flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: "rgba(229,193,88,0.04)",
                    border: "1px solid rgba(229,193,88,0.15)",
                  }}
                >
                  <svg
                    className="mb-5"
                    width="56"
                    height="56"
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
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#ffffff" }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Thank you for reaching out. We&apos;ll respond within 48 business hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.015)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#ffffff",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                        }}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#ffffff",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#ffffff",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                        }}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Reason for Contact *
                      </label>
                      <select
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none appearance-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: form.reason ? "#ffffff" : "rgba(255,255,255,0.35)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        }}
                      >
                        <option value="" style={{ color: "#0A0A0A" }}>Select a reason...</option>
                        <option value="coaching" style={{ color: "#0A0A0A" }}>Coaching Session</option>
                        <option value="speaking" style={{ color: "#0A0A0A" }}>Speaking Invitation</option>
                        <option value="collaboration" style={{ color: "#0A0A0A" }}>Collaboration / Partnership</option>
                        <option value="press" style={{ color: "#0A0A0A" }}>Press / Media</option>
                        <option value="general" style={{ color: "#0A0A0A" }}>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#ffffff",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                      }}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none resize-none"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#ffffff",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                      }}
                    />
                  </div>

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
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== RESPONSE TIME ===== */}
      <section className="relative py-10 px-4" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              We aim to respond within 48 business hours (Monday–Friday). We honor
              rest and sabbath rhythms, so please allow extra time on weekends or
              during ministry seasons.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ===== COACHING CTA ===== */}
      <section className="relative py-16 md:py-20 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-2xl"
            style={{
              backgroundColor: "rgba(229,193,88,0.03)",
              border: "1px solid rgba(229,193,88,0.12)",
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
              Need Coaching Support?
            </h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              If you&apos;re interested in working with Layo 1-on-1, the best way
              to start is through the Coaching Page. You&apos;ll find details on
              sessions, strategy offers, and how to book directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/coaching"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300"
                  style={{
                    backgroundColor: "#E5C158",
                    color: "#0A0A0A",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F5D06B";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(229,193,88,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#E5C158";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Go to Coaching Page
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </Link>
              <Link
                href="#"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300"
                  style={{
                    backgroundColor: "transparent",
                    color: "#F5D06B",
                    border: "1.5px solid rgba(229,193,88,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(229,193,88,0.08)";
                    e.currentTarget.style.borderColor = "#E5C158";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "rgba(229,193,88,0.3)";
                  }}
                >
                  Book a Complimentary 30 Minute Call
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}