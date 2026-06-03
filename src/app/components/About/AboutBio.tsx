"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutBio() {
  return (
    <section
      className="relative py-20 md:py-28 px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Image */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
              style={{ borderRadius: "16px" }}
            >
              <Image
                src="/Layo.jpeg"
                alt="Layo Obidike"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-6"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#0A0A0A",
              }}
            >
              Hi, I&apos;m Layo Obidike
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              I&apos;m passionate about helping Christian entrepreneurs and
              faith-driven leaders thrive in every area of their lives. I guide
              leaders toward clarity, courage, and lasting success by combining
              biblical principles, business strategies, and transformative
              education.
            </p>

            <h3
              className="text-lg font-bold mb-3"
              style={{ color: "#0A0A0A" }}
            >
              Who I Am
            </h3>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              I&apos;m an entrepreneur, author, educator, and passionate
              community leader, deeply committed to helping individuals and
              communities thrive. My journey began as an educator, teaching
              across various levels and discovering my love for guiding others
              toward personal growth, self-discovery, and purposeful success.
            </p>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              With a background in teaching, psychology, and youth ministry,
              I&apos;ve dedicated my life to empowering others by aligning
              faith, business, and education. My work is driven by a belief in
              holistic wellness—addressing not just spiritual growth but also
              economic, emotional, educational, and social well-being.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              Through my ventures, including The God&apos;s Treasury
              Cooperative, The PraiseGates Foundation School, and ThriveOn
              Entrepreneur, I&apos;ve had the privilege of building solutions
              that inspire and empower. Above all, I&apos;m a devoted wife,
              nurturing mother, and a firm believer in the power of compassion,
              faith, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}