"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LiquidBackgroundProps {
  imageSrc: string;
  imageAlt: string;
}

export default function LiquidBackground({
  imageSrc,
  imageAlt,
}: LiquidBackgroundProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* The liquid morphing blob */}
      <div className="relative w-[320px] h-[380px] md:w-[400px] md:h-[480px]">
        {/* Outer glow ring */}
        <div className="absolute inset-0 animate-liquid bg-gradient-to-br from-gold-400/30 via-gold-500/20 to-richBlack rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-sm" />

        {/* Main morphing shape */}
        <div className="absolute inset-0 animate-liquid bg-gradient-to-br from-gold-500/40 via-gold-400/25 to-richBlack rounded-[60%_40%_30%_70%/60%_30%_70%_40%] backdrop-blur-sm border border-gold-400/20 overflow-hidden">
          {/* Inner glass shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
        </div>

        {/* The actual image - clipped to the morphing shape */}
        <div className="absolute inset-0 animate-liquid overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 320px, 400px"
          />
          {/* Subtle overlay so image blends with the gold vibe */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/15 to-richBlack/30" />
        </div>
      </div>
    </motion.div>
  );
}