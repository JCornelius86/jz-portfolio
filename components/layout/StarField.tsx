"use client";

const COLORS = [
  "#00fff5", // cyan
  "#ff00ff", // magenta
  "#39ff14", // green
  "#ffbf00", // amber
];

// Floating particles — larger, actively drifting with rotation
const FLOATERS = [
  { color: COLORS[0], size: 6, left: 8, top: 15, dur: 10, delay: -3, anim: "drift-a" },
  { color: COLORS[1], size: 5, left: 92, top: 40, dur: 12, delay: -7, anim: "drift-b" },
  { color: COLORS[2], size: 7, left: 25, top: 70, dur: 8, delay: -1, anim: "drift-c" },
  { color: COLORS[3], size: 5, left: 78, top: 25, dur: 14, delay: -5, anim: "drift-a" },
  { color: COLORS[0], size: 6, left: 55, top: 85, dur: 11, delay: -9, anim: "drift-b" },
  { color: COLORS[1], size: 8, left: 40, top: 10, dur: 9, delay: -2, anim: "drift-c" },
  { color: COLORS[2], size: 5, left: 68, top: 55, dur: 13, delay: -6, anim: "drift-a" },
  { color: COLORS[3], size: 6, left: 15, top: 45, dur: 10, delay: -8, anim: "drift-b" },
  { color: COLORS[0], size: 7, left: 85, top: 75, dur: 12, delay: -4, anim: "drift-c" },
  { color: COLORS[1], size: 5, left: 48, top: 30, dur: 8, delay: -10, anim: "drift-a" },
  { color: COLORS[2], size: 6, left: 3, top: 60, dur: 14, delay: -1, anim: "drift-b" },
  { color: COLORS[3], size: 5, left: 72, top: 92, dur: 11, delay: -7, anim: "drift-c" },
  { color: COLORS[0], size: 8, left: 33, top: 50, dur: 9, delay: -3, anim: "drift-a" },
  { color: COLORS[1], size: 6, left: 60, top: 8, dur: 13, delay: -11, anim: "drift-b" },
  { color: COLORS[2], size: 5, left: 20, top: 88, dur: 10, delay: -5, anim: "drift-c" },
  { color: COLORS[3], size: 7, left: 95, top: 65, dur: 12, delay: -2, anim: "drift-a" },
];

// Twinkling stars — small, mostly stationary, pulse opacity
const STARS = [
  { left: 5, top: 8, dur: 3, delay: 0 },
  { left: 12, top: 22, dur: 4, delay: -1 },
  { left: 22, top: 5, dur: 3.5, delay: -2 },
  { left: 30, top: 35, dur: 5, delay: -0.5 },
  { left: 38, top: 12, dur: 3, delay: -3 },
  { left: 45, top: 62, dur: 4.5, delay: -1.5 },
  { left: 52, top: 28, dur: 3, delay: -2.5 },
  { left: 58, top: 78, dur: 5, delay: -0.8 },
  { left: 65, top: 18, dur: 4, delay: -3.5 },
  { left: 72, top: 48, dur: 3.5, delay: -1.2 },
  { left: 80, top: 8, dur: 3, delay: -4 },
  { left: 85, top: 55, dur: 4.5, delay: -0.3 },
  { left: 90, top: 32, dur: 5, delay: -2.8 },
  { left: 95, top: 72, dur: 3, delay: -1.8 },
  { left: 18, top: 52, dur: 4, delay: -3.2 },
  { left: 35, top: 82, dur: 3.5, delay: -0.6 },
  { left: 50, top: 42, dur: 5, delay: -4.2 },
  { left: 62, top: 90, dur: 3, delay: -1.1 },
  { left: 75, top: 15, dur: 4.5, delay: -2.2 },
  { left: 88, top: 85, dur: 3.5, delay: -3.8 },
  { left: 2, top: 38, dur: 4, delay: -0.9 },
  { left: 28, top: 95, dur: 3, delay: -2.1 },
  { left: 42, top: 3, dur: 5, delay: -1.6 },
  { left: 70, top: 68, dur: 4.5, delay: -3.4 },
  { left: 97, top: 45, dur: 3.5, delay: -0.4 },
];

// Map colors to glow shadows
const GLOW: Record<string, string> = {
  "#00fff5": "0 0 8px rgba(0,255,245,0.7)",
  "#ff00ff": "0 0 8px rgba(255,0,255,0.7)",
  "#39ff14": "0 0 8px rgba(57,255,20,0.7)",
  "#ffbf00": "0 0 8px rgba(255,191,0,0.7)",
};

export default function StarField() {
  return (
    <div
      className="star-field fixed inset-0 overflow-hidden pointer-events-none z-[1]"
      aria-hidden="true"
    >
      {/* Twinkling background stars */}
      {STARS.map((s, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            left: `${s.left}%`,
            top: `${s.top}%`,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Floating particles */}
      {FLOATERS.map((p, i) => (
        <div
          key={`float-${i}`}
          style={{
            position: "absolute",
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: p.color,
            boxShadow: GLOW[p.color],
            animation: `${p.anim} ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
