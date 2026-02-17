"use client";

import { getMoonPhase } from "@/lib/sky";

/**
 * 12x12 pixel moon with phase-accurate shadow.
 * Phase 0 = new (all shadow), 0.5 = full (all lit).
 * Waxing (0→0.5): lit from right. Waning (0.5→1): shadow from right.
 */

// Moon pixel grid: 1 = inside moon shape, 0 = transparent
// Rows indexed 0–11, columns 0–11
const MOON_SHAPE: number[][] = [
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
];

// Crater positions (row, col) for surface detail
const CRATERS: [number, number][] = [
  [3, 7],
  [5, 4],
  [7, 8],
  [9, 5],
  [6, 9],
];

const LIT_COLOR = "#E8E8F0";
const SHADOW_COLOR = "#2a2a3e";
const CRATER_COLOR = "#C8C8D8";

export default function PixelMoon({ progress }: { progress: number }) {
  const phase = getMoonPhase();

  // Arc within sky container, clearing the header
  const x = 5 + 90 * progress;
  const y = 75 - 45 * Math.sin(Math.PI * progress);

  // Determine shadow boundary column for each row
  // phase 0 = new moon (all shadow), 0.5 = full (all lit)
  // Waxing (0 → 0.5): lit from right side
  // Waning (0.5 → 1): shadow from right side
  const isWaxing = phase <= 0.5;
  // illumination goes 0 → 1 → 0
  const illumination = phase <= 0.5 ? phase * 2 : (1 - phase) * 2;

  const craterSet = new Set(CRATERS.map(([r, c]) => `${r},${c}`));

  const pixels: { x: number; y: number; fill: string }[] = [];

  for (let row = 0; row < 12; row++) {
    // Find the leftmost and rightmost moon pixel in this row
    let minCol = -1;
    let maxCol = -1;
    for (let col = 0; col < 12; col++) {
      if (MOON_SHAPE[row][col]) {
        if (minCol === -1) minCol = col;
        maxCol = col;
      }
    }
    if (minCol === -1) continue;

    const rowWidth = maxCol - minCol + 1;

    for (let col = minCol; col <= maxCol; col++) {
      if (!MOON_SHAPE[row][col]) continue;

      // Determine if this pixel is lit or shadow
      const posInRow = col - minCol;
      let isLit: boolean;

      if (isWaxing) {
        // Lit from the right: rightmost pixels light up first
        const litPixels = Math.round(illumination * rowWidth);
        isLit = posInRow >= rowWidth - litPixels;
      } else {
        // Lit from the left: leftmost pixels stay lit longest
        const litPixels = Math.round(illumination * rowWidth);
        isLit = posInRow < litPixels;
      }

      let fill = isLit ? LIT_COLOR : SHADOW_COLOR;
      if (isLit && craterSet.has(`${row},${col}`)) {
        fill = CRATER_COLOR;
      }

      pixels.push({ x: col, y: row, fill });
    }
  }

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
        width="40"
        height="40"
        viewBox="0 0 12 12"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        {pixels.map((p, i) => (
          <rect key={i} x={p.x} y={p.y} width="1" height="1" fill={p.fill} />
        ))}
      </svg>
    </div>
  );
}
