"use client";

/**
 * Minecraft-style pixel sun — a flat, blocky 8x8 square rendered large.
 * Positioned on a shallow arc across the top of the sky container.
 * Progress 0–1 maps left to right.
 */
export default function PixelSun({ progress }: { progress: number }) {
  // Horizontal: 5% → 95% of container
  const x = 5 + 90 * progress;
  // Shallow arc clearing the header: y ranges from 75% at edges to 30% at center
  const y = 75 - 45 * Math.sin(Math.PI * progress);

  return (
    <div
      className="absolute pointer-events-none transition-all duration-[2000ms] ease-linear"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 8 8"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        {/* Outer edge — warm orange */}
        <rect x="0" y="0" width="8" height="1" fill="#FF8C00" />
        <rect x="0" y="7" width="8" height="1" fill="#FF8C00" />
        <rect x="0" y="0" width="1" height="8" fill="#FF8C00" />
        <rect x="7" y="0" width="1" height="8" fill="#FF8C00" />
        {/* Inner ring — golden yellow */}
        <rect x="1" y="1" width="6" height="1" fill="#FFD700" />
        <rect x="1" y="6" width="6" height="1" fill="#FFD700" />
        <rect x="1" y="2" width="1" height="4" fill="#FFD700" />
        <rect x="6" y="2" width="1" height="4" fill="#FFD700" />
        {/* Core — bright warm yellow */}
        <rect x="2" y="2" width="4" height="4" fill="#FFE44D" />
        {/* Hot center highlight */}
        <rect x="3" y="3" width="2" height="2" fill="#FFF8DC" />
      </svg>
    </div>
  );
}
