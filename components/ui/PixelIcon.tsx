// Pixel art company icons — 16x16 grids rendered as inline SVGs

const PX = 2; // Each pixel = 2 SVG units, total viewBox = 32x32

type PixelData = { x: number; y: number; color: string }[];

function PixelGrid({ pixels, label }: { pixels: PixelData; label: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      role="img"
      aria-label={label}
      className="flex-shrink-0"
    >
      {pixels.map((p, i) => (
        <rect
          key={i}
          x={p.x * PX}
          y={p.y * PX}
          width={PX}
          height={PX}
          fill={p.color}
        />
      ))}
    </svg>
  );
}

// Colors from the neon palette
const C = "#00fff5"; // cyan
const M = "#ff00ff"; // magenta
const G = "#39ff14"; // green
const A = "#ffbf00"; // amber

// Microsoft — 4-pane window
function microsoftPixels(): PixelData {
  const pixels: PixelData = [];
  // Top-left pane (cyan)
  for (let y = 3; y < 8; y++)
    for (let x = 3; x < 8; x++) pixels.push({ x, y, color: C });
  // Top-right pane (magenta)
  for (let y = 3; y < 8; y++)
    for (let x = 9; x < 14; x++) pixels.push({ x, y, color: M });
  // Bottom-left pane (green)
  for (let y = 9; y < 14; y++)
    for (let x = 3; x < 8; x++) pixels.push({ x, y, color: G });
  // Bottom-right pane (amber)
  for (let y = 9; y < 14; y++)
    for (let x = 9; x < 14; x++) pixels.push({ x, y, color: A });
  return pixels;
}

// SnapAV / SnapOne — cloud with signal waves
function snapPixels(): PixelData {
  const pixels: PixelData = [];
  // Cloud body
  const cloudRows: [number, number, number][] = [
    [6, 6, 10],
    [5, 5, 11],
    [4, 4, 12],
    [3, 3, 13],
    [2, 3, 13],
    [1, 4, 12],
  ];
  cloudRows.forEach(([y, xStart, xEnd]) => {
    for (let x = xStart; x <= xEnd; x++) pixels.push({ x, y: y + 4, color: C });
  });
  // Signal arcs above cloud
  pixels.push({ x: 8, y: 2, color: C });
  pixels.push({ x: 7, y: 3, color: C });
  pixels.push({ x: 9, y: 3, color: C });
  pixels.push({ x: 6, y: 1, color: C });
  pixels.push({ x: 10, y: 1, color: C });
  return pixels;
}

// Lockheed Martin — star shape
function lockheedPixels(): PixelData {
  const pixels: PixelData = [];
  // 5-pointed star centered at (8,8)
  const starCoords = [
    // Top point
    [8, 2], [7, 3], [8, 3], [9, 3],
    // Upper body
    [6, 4], [7, 4], [8, 4], [9, 4], [10, 4],
    // Left arm + center
    [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5],
    [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6], [12, 6],
    // Mid body
    [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7],
    [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8],
    // Lower spread
    [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [12, 9],
    // Legs
    [4, 10], [5, 10], [6, 10], [10, 10], [11, 10], [12, 10],
    [3, 11], [4, 11], [5, 11], [11, 11], [12, 11], [13, 11],
    [3, 12], [4, 12], [12, 12], [13, 12],
  ];
  starCoords.forEach(([x, y]) => pixels.push({ x, y, color: M }));
  return pixels;
}

// General Electric — lightbulb
function gePixels(): PixelData {
  const pixels: PixelData = [];
  // Bulb top (rounded)
  const bulbRows: [number, number, number][] = [
    [2, 6, 10],
    [3, 5, 11],
    [4, 4, 12],
    [5, 4, 12],
    [6, 4, 12],
    [7, 5, 11],
    [8, 5, 11],
    [9, 6, 10],
  ];
  bulbRows.forEach(([y, xStart, xEnd]) => {
    for (let x = xStart; x <= xEnd; x++) pixels.push({ x, y, color: A });
  });
  // Filament glow center
  pixels.push({ x: 7, y: 5, color: "#fff" });
  pixels.push({ x: 8, y: 5, color: "#fff" });
  pixels.push({ x: 8, y: 6, color: "#fff" });
  pixels.push({ x: 7, y: 6, color: "#fff" });
  // Base/screw
  for (let x = 7; x <= 9; x++) {
    pixels.push({ x, y: 10, color: "#8888a0" });
    pixels.push({ x, y: 11, color: A });
    pixels.push({ x, y: 12, color: "#8888a0" });
    pixels.push({ x, y: 13, color: A });
  }
  return pixels;
}

// SSI Schaefer — gear/cog
function ssiPixels(): PixelData {
  const pixels: PixelData = [];
  // Gear teeth (outer notches)
  const teethCoords = [
    [7, 2], [8, 2], // top tooth
    [7, 13], [8, 13], // bottom tooth
    [2, 7], [2, 8], // left tooth
    [13, 7], [13, 8], // right tooth
    [4, 3], [3, 4], // top-left tooth
    [12, 3], [13, 4], // top-right tooth (adjusted so it doesn't overlap)
    [3, 12], [4, 13], // bottom-left tooth (adjusted)
    [12, 13], [13, 12], // bottom-right tooth (adjusted)
  ];
  teethCoords.forEach(([x, y]) => pixels.push({ x, y, color: G }));
  // Gear body (circle)
  const bodyRows: [number, number, number][] = [
    [4, 6, 10],
    [5, 5, 11],
    [6, 4, 12],
    [7, 4, 12],
    [8, 4, 12],
    [9, 4, 12],
    [10, 5, 11],
    [11, 6, 10],
  ];
  bodyRows.forEach(([y, xStart, xEnd]) => {
    for (let x = xStart; x <= xEnd; x++) pixels.push({ x, y, color: G });
  });
  // Center hole
  for (let y = 7; y <= 9; y++)
    for (let x = 7; x <= 9; x++) pixels.push({ x, y, color: "#0a0a0f" });
  return pixels;
}

const ICONS: Record<string, { pixels: PixelData; label: string }> = {
  Microsoft: { pixels: microsoftPixels(), label: "Microsoft logo — four colored panes" },
  "SnapAV / SnapOne": { pixels: snapPixels(), label: "SnapOne logo — cloud with signal waves" },
  "Lockheed Martin": { pixels: lockheedPixels(), label: "Lockheed Martin logo — star shape" },
  "General Electric": { pixels: gePixels(), label: "General Electric logo — lightbulb" },
  "SSI Schaefer": { pixels: ssiPixels(), label: "SSI Schaefer logo — gear" },
};

export default function PixelIcon({ company }: { company: string }) {
  const icon = ICONS[company];
  if (!icon) return null;
  return <PixelGrid pixels={icon.pixels} label={icon.label} />;
}
