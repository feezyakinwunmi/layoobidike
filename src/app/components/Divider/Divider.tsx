"use client";

interface DividerProps {
  /** Color of the wave — defaults to gold-tinted */
  waveColor?: string;
  /** Background color above the wave */
  topColor?: string;
  /** Background color below the wave */
  bottomColor?: string;
  /** Flip the wave direction */
  flip?: boolean;
}

export default function WaveDivider({
  waveColor = "#ffffff",
  topColor = "#0A0A0A",
  bottomColor = "#ffffff",
  flip = false,
}: DividerProps) {
  return (
    <div style={{ backgroundColor: topColor }} className="relative">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "80px",
          transform: flip ? "rotate(180deg)" : "none",
        }}
      >
        {/* Main wave */}
        <path
          d="M0 40 C 240 80, 480 0, 720 40 C 960 80, 1200 0, 1440 40 L 1440 80 L 0 80 Z"
          fill={bottomColor}
        />
        {/* Gold accent line following the curve */}
        <path
          d="M0 40 C 240 80, 480 0, 720 40 C 960 80, 1200 0, 1440 40"
          fill="none"
          stroke="rgba(229,193,88,0.15)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}