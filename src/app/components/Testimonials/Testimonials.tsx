"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Layo's coaching transformed how I approach my business and my faith. She has a rare gift for seeing what you're capable of before you see it yourself.",
    name: "Adeola O.",
    role: "Entrepreneur, Lagos",
    avatar: "/testimonial-1.jpg",
  },
  {
    quote:
      "The workshop was a turning point for our team. We left with clarity, renewed purpose, and practical tools we still use daily. Truly life-changing.",
    name: "Pastor Michael E.",
    role: "Senior Pastor, Abuja",
    avatar: "/testimonial-2.jpg",
  },
  {
    quote:
      "I've read countless personal development books, but Layo's teachings blend faith and strategy in a way that actually sticks. I'm forever grateful.",
    name: "Chinelo A.",
    role: "Creative Director, London",
    avatar: "/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: "#060606" }}
    >
      {/* Background subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(229,193,88,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
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
            What People Say
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#ffffff",
            }}
          >
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-500 relative"
              style={{
                backgroundColor: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(229,193,88,0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.backgroundColor =
                  "rgba(229,193,88,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.015)";
              }}
            >
              {/* Quote icon */}
              <svg
                className="mb-4 opacity-30"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#E5C158"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>

              {/* Quote text */}
              <p
                className="text-sm md:text-base leading-relaxed mb-6 flex-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                {/* <div
                  className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(229,193,88,0.15)",
                    border: "1.5px solid rgba(229,193,88,0.3)",
                  }}
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div> */}

                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#ffffff" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Gold accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 transition-all duration-500"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(229,193,88,0.15), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}