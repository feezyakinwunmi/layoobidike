"use client";

import { motion } from "framer-motion";

interface FloatingTagProps {
  label: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
  floatSpeed: "slow" | "medium" | "fast";
}

const floatClasses = {
  slow: "animate-float-slow",
  medium: "animate-float-medium",
  fast: "animate-float-fast",
};

export default function FloatingTag({
  label,
  position,
  delay,
  floatSpeed,
}: FloatingTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 200,
      }}
      style={{ position: "absolute", ...position }}
      className={`${floatClasses[floatSpeed]} z-20`}
    >
      <div className="bg-richBlack/80 backdrop-blur-md border border-gold-400/40 rounded-lg px-3 py-1.5 shadow-lg shadow-gold-500/10">
        <span className="text-gold-400 text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">
          {label}
        </span>
        {/* Small gold dot accent */}
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 ml-2 animate-pulse" />
      </div>
    </motion.div>
  );
}