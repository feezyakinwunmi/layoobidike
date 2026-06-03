"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Vision image parallax
  const visionImageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Mission image parallax
  const missionImageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16">
          {/* ===== LEFT: The Vision ===== */}
          <div>
            {/* Image */}
           

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3
                className="text-2xl md:text-3xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#ffffff",
                }}
              >
                The Vision
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 400,
                }}
              >
                I envision a world where individuals and communities flourish
                through personal growth, collective empowerment, and purposeful
                action. My team and I strive to empower Christian entrepreneurs
                to drive positive change by addressing the diverse and holistic
                growth of people from all walks of life.
              </p>
            </motion.div>
          </div>

          {/* ===== RIGHT: The Mission ===== */}
          <div>
            {/* Image */}
           

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3
                className="text-2xl md:text-3xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "#ffffff",
                }}
              >
                The Mission
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 300,
                }}
              >
                My mission is to empower Christian entrepreneurs and leaders to
                align their faith, purpose, and goals, promoting holistic growth
                in every area of life—spiritual, economic, educational,
                emotional, and social. By offering innovative solutions,
                transformative education, and compassionate guidance, I aim to
                inspire individuals and communities to thrive, lead with
                integrity, and make a lasting impact grounded in God&apos;s
                timeless principles and wisdom.
              </p>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}