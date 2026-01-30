"use client";

const COLORS = [
  "#00fff5", // cyan
  "#ff00ff", // magenta
  "#39ff14", // green
  "#ffbf00", // amber
];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function generateParticles() {
  const particles = [];
  for (let i = 0; i < 45; i++) {
    const color = COLORS[i % COLORS.length];
    const size = 2 + Math.floor(seededRandom(i * 7) * 3); // 2-4px
    const left = seededRandom(i * 13) * 100; // 0-100%
    const top = 60 + seededRandom(i * 17) * 40; // start in bottom 40%
    const duration = 20 + seededRandom(i * 23) * 40; // 20-60s
    const delay = -(seededRandom(i * 31) * 60); // negative delay so they start staggered
    const opacity = 0.08 + seededRandom(i * 37) * 0.17; // 0.08-0.25

    particles.push({ color, size, left, top, duration, delay, opacity });
  }
  return particles;
}

const particles = generateParticles();

export default function StarField() {
  return (
    <div
      className="star-field fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {particles.map((p, i) => (
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
