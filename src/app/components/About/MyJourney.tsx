"use client";

import { motion } from "framer-motion";

export default function MyJourney() {
  return (
    <section
      className="relative py-24 md:py-28 px-4"
      style={{ backgroundColor: "#0A0A0A" }}
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
            style={{ color: "#F5D06B" }}
          >
            The Path So Far
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#ffffff",
            }}
          >
            My Journey
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5"
        >
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
            My journey began with a deep desire to make a meaningful impact in
            the lives of others. I started as an educator, teaching across
            various levels—from kindergarten to tertiary education. Those years
            shaped my understanding of how guidance, encouragement, and
            education can transform lives.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
            As I navigated my path, I discovered my love for psychology and
            philosophy, which deepened my ability to support personal growth and
            self-discovery. My experiences in youth ministry added another
            layer—I served as a music director, created plays, and composed
            songs, using creativity to inspire young people.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
            Driven by a passion for crafting meaningful solutions, I founded:
            The God&apos;s Treasury Cooperative, The PraiseGates Foundation
            School, ThriveOn Entrepreneur, and The Spiritual Woman. Along the
            way, I&apos;ve written books like <em>The Spiritual Woman</em>,{" "}
            <em>The Empowered Teens</em>, and <em>All About Love and Action</em>.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
            Every step of my journey has been about aligning faith, purpose, and
            action to create meaningful change. Today, I continue to serve as an
            entrepreneur, educator, and community leader, empowering others to
            thrive and make a lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}