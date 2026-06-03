"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RoundedTriangleProps {
  children: ReactNode;
}

export default function RoundedTriangle({ children }: RoundedTriangleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative bg-richBlack border border-white/10 rounded-l-3xl overflow-hidden"
      style={{
        // This creates the rounded triangle edge on the right
        clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)",
        WebkitClipPath:
          "polygon(0 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 0 100%)",
      }}
    >
      {/* Subtle gold shimmer line on the angled edge */}
      <div
        className="absolute top-0 bottom-0 bg-gradient-to-b from-gold-500/60 via-gold-400/20 to-gold-500/60"
        style={{
          right: "0",
          width: "2px",
          clipPath:
            "polygon(0 0, 100% 0, 100% 15%, 100% 85%, 0% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 p-10 md:p-14 lg:p-20">{children}</div>
    </motion.div>
  );
}