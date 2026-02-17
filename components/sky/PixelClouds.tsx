"use client";

/**
 * Deterministic pixel-art clouds scattered across the top of the sky.
 * Each cloud is a small SVG built from rects.
 * Positions are fixed (no randomness) to avoid hydration mismatches.
 */

interface CloudDef {
  /** left position as % */
  x: number;
  /** top position as % */
  y: number;
  /** scale multiplier */
  scale: number;
  /** opacity 0–1 */
  opacity: number;
  /** which shape variant to use */
  variant: number;
}

const CLOUDS: CloudDef[] = [
  { x: 12, y: 18, scale: 1, opacity: 0.18, variant: 0 },
  { x: 38, y: 30, scale: 0.8, opacity: 0.12, variant: 1 },
  { x: 62, y: 14, scale: 1.1, opacity: 0.15, variant: 2 },
  { x: 82, y: 35, scale: 0.7, opacity: 0.1, variant: 0 },
  { x: 25, y: 45, scale: 0.6, opacity: 0.08, variant: 1 },
  { x: 70, y: 50, scale: 0.9, opacity: 0.1, variant: 2 },
];

const CLOUD_COLOR = "#c8c8e0";

/** Cloud shape variants — each is a list of [x, y, w, h] rects in a 10x4 viewBox */
const SHAPES: [number, number, number, number][][] = [
  // Variant 0 — wide flat cloud
  [
    [3, 0, 4, 1],
    [1, 1, 8, 1],
    [0, 2, 10, 1],
    [1, 3, 8, 1],
  ],
  // Variant 1 — bumpy cloud
  [
    [2, 0, 3, 1],
    [6, 0, 2, 1],
    [1, 1, 8, 1],
    [0, 2, 10, 1],
    [2, 3, 6, 1],
  ],
  // Variant 2 — small puffy cloud
  [
    [3, 0, 3, 1],
    [2, 1, 6, 1],
    [1, 2, 8, 1],
    [2, 3, 5, 1],
  ],
];

export default function PixelClouds() {
  return (
    <>
      {CLOUDS.map((cloud, i) => {
        const shape = SHAPES[cloud.variant];
        const size = 60 * cloud.scale;
        return (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
              opacity: cloud.opacity,
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg
              width={size}
              height={size * 0.4}
              viewBox="0 0 10 4"
              shapeRendering="crispEdges"
              aria-hidden="true"
            >
              {shape.map(([rx, ry, rw, rh], j) => (
                <rect
                  key={j}
                  x={rx}
                  y={ry}
                  width={rw}
                  height={rh}
                  fill={CLOUD_COLOR}
                />
              ))}
            </svg>
          </div>
        );
      })}
    </>
  );
}
