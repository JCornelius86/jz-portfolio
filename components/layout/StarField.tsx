"use client";

const COLORS = [
  "#00fff5", // cyan
  "#ff00ff", // magenta
  "#39ff14", // green
  "#ffbf00", // amber
];

// Pre-computed particle data to avoid hydration mismatches from
// floating-point differences between server and client Math.sin.
const PARTICLES: {
  color: string;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
}[] = [
  { color: COLORS[0], size: 3, left: 12.4, top: 74.2, duration: 28, delay: -14, opacity: 0.12 },
  { color: COLORS[1], size: 2, left: 87.1, top: 82.5, duration: 45, delay: -32, opacity: 0.18 },
  { color: COLORS[2], size: 4, left: 34.8, top: 68.9, duration: 33, delay: -7, opacity: 0.10 },
  { color: COLORS[3], size: 2, left: 56.3, top: 91.4, duration: 52, delay: -41, opacity: 0.22 },
  { color: COLORS[0], size: 3, left: 73.6, top: 77.1, duration: 24, delay: -19, opacity: 0.15 },
  { color: COLORS[1], size: 2, left: 5.2, top: 85.3, duration: 39, delay: -55, opacity: 0.09 },
  { color: COLORS[2], size: 4, left: 91.7, top: 62.8, duration: 47, delay: -3, opacity: 0.20 },
  { color: COLORS[3], size: 3, left: 42.1, top: 96.5, duration: 31, delay: -28, opacity: 0.14 },
  { color: COLORS[0], size: 2, left: 18.9, top: 70.7, duration: 56, delay: -47, opacity: 0.11 },
  { color: COLORS[1], size: 3, left: 65.4, top: 88.2, duration: 22, delay: -10, opacity: 0.24 },
  { color: COLORS[2], size: 2, left: 28.3, top: 79.6, duration: 43, delay: -36, opacity: 0.13 },
  { color: COLORS[3], size: 4, left: 80.5, top: 65.1, duration: 35, delay: -22, opacity: 0.17 },
  { color: COLORS[0], size: 3, left: 50.8, top: 93.8, duration: 27, delay: -51, opacity: 0.08 },
  { color: COLORS[1], size: 2, left: 3.7, top: 72.4, duration: 58, delay: -15, opacity: 0.21 },
  { color: COLORS[2], size: 3, left: 96.2, top: 84.9, duration: 41, delay: -43, opacity: 0.16 },
  { color: COLORS[3], size: 2, left: 37.5, top: 67.3, duration: 29, delay: -8, opacity: 0.10 },
  { color: COLORS[0], size: 4, left: 61.9, top: 90.1, duration: 50, delay: -33, opacity: 0.19 },
  { color: COLORS[1], size: 2, left: 15.6, top: 76.8, duration: 23, delay: -58, opacity: 0.12 },
  { color: COLORS[2], size: 3, left: 84.3, top: 61.5, duration: 37, delay: -2, opacity: 0.25 },
  { color: COLORS[3], size: 2, left: 47.7, top: 97.2, duration: 54, delay: -26, opacity: 0.09 },
  { color: COLORS[0], size: 3, left: 70.1, top: 71.9, duration: 32, delay: -44, opacity: 0.14 },
  { color: COLORS[1], size: 4, left: 9.8, top: 86.6, duration: 46, delay: -17, opacity: 0.20 },
  { color: COLORS[2], size: 2, left: 53.4, top: 63.4, duration: 25, delay: -39, opacity: 0.11 },
  { color: COLORS[3], size: 3, left: 22.6, top: 80.7, duration: 40, delay: -6, opacity: 0.23 },
  { color: COLORS[0], size: 2, left: 88.9, top: 94.3, duration: 55, delay: -50, opacity: 0.08 },
  { color: COLORS[1], size: 3, left: 31.2, top: 69.5, duration: 21, delay: -12, opacity: 0.17 },
  { color: COLORS[2], size: 2, left: 76.5, top: 87.8, duration: 48, delay: -35, opacity: 0.13 },
  { color: COLORS[3], size: 4, left: 44.8, top: 75.2, duration: 34, delay: -56, opacity: 0.15 },
  { color: COLORS[0], size: 3, left: 1.3, top: 92.6, duration: 26, delay: -21, opacity: 0.22 },
  { color: COLORS[1], size: 2, left: 58.7, top: 64.8, duration: 53, delay: -42, opacity: 0.10 },
  { color: COLORS[2], size: 3, left: 93.1, top: 78.3, duration: 30, delay: -9, opacity: 0.18 },
  { color: COLORS[3], size: 2, left: 16.4, top: 95.9, duration: 44, delay: -30, opacity: 0.12 },
  { color: COLORS[0], size: 4, left: 67.8, top: 66.7, duration: 57, delay: -48, opacity: 0.24 },
  { color: COLORS[1], size: 2, left: 39.5, top: 83.1, duration: 20, delay: -4, opacity: 0.09 },
  { color: COLORS[2], size: 3, left: 82.2, top: 73.5, duration: 42, delay: -37, opacity: 0.16 },
  { color: COLORS[3], size: 2, left: 25.9, top: 89.4, duration: 36, delay: -53, opacity: 0.21 },
  { color: COLORS[0], size: 3, left: 55.1, top: 60.9, duration: 49, delay: -18, opacity: 0.11 },
  { color: COLORS[1], size: 4, left: 7.6, top: 98.1, duration: 28, delay: -40, opacity: 0.14 },
  { color: COLORS[2], size: 2, left: 71.3, top: 81.6, duration: 38, delay: -11, opacity: 0.19 },
  { color: COLORS[3], size: 3, left: 48.9, top: 68.2, duration: 51, delay: -29, opacity: 0.08 },
  { color: COLORS[0], size: 2, left: 94.7, top: 91.7, duration: 24, delay: -54, opacity: 0.23 },
  { color: COLORS[1], size: 3, left: 20.3, top: 74.9, duration: 59, delay: -1, opacity: 0.13 },
  { color: COLORS[2], size: 2, left: 63.6, top: 86.3, duration: 33, delay: -46, opacity: 0.17 },
  { color: COLORS[3], size: 4, left: 36.1, top: 62.1, duration: 45, delay: -23, opacity: 0.10 },
  { color: COLORS[0], size: 3, left: 79.4, top: 95.4, duration: 27, delay: -38, opacity: 0.20 },
];

export default function StarField() {
  return (
    <div
      className="star-field fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: p.color,
            opacity: p.opacity,
            ["--particle-opacity" as string]: p.opacity,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
