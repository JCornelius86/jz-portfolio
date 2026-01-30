// Pixel art company icons — 32x32 grids rendered as 64x64 inline SVGs

const PX = 2; // Each grid cell = 2 SVG units → 64x64 viewBox for 32x32 grid

type PixelData = { x: number; y: number; color: string }[];

function fill(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string
): PixelData {
  const pixels: PixelData = [];
  for (let y = y1; y <= y2; y++)
    for (let x = x1; x <= x2; x++) pixels.push({ x, y, color });
  return pixels;
}

function StaticIcon({ pixels, label }: { pixels: PixelData; label: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
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

const C = "#00fff5";
const M = "#ff00ff";
const G = "#39ff14";
const A = "#ffbf00";
const W = "#ffffff";
const GRAY = "#8888a0";
const BG = "#0a0a0f";

// ─── Microsoft ─── 4-pane window
function microsoftPixels(): PixelData {
  return [
    ...fill(4, 4, 14, 14, C),
    ...fill(17, 4, 27, 14, M),
    ...fill(4, 17, 14, 27, G),
    ...fill(17, 17, 27, 27, A),
  ];
}

// ─── SnapAV / SnapOne ─── cloud raining IoT devices
function SnapIcon() {
  const cloud: PixelData = [
    // Cloud body (shifted up)
    ...fill(7, 17, 24, 17, C),
    ...fill(5, 16, 26, 16, C),
    ...fill(4, 15, 27, 15, C),
    ...fill(4, 14, 27, 14, C),
    ...fill(4, 13, 27, 13, C),
    ...fill(5, 12, 26, 12, C),
    ...fill(7, 11, 24, 11, C),
    // Left bump
    ...fill(7, 10, 14, 10, C),
    ...fill(8, 9, 13, 9, C),
    ...fill(9, 8, 12, 8, C),
    // Right bump (taller)
    ...fill(16, 10, 24, 10, C),
    ...fill(17, 9, 23, 9, C),
    ...fill(18, 8, 22, 8, C),
    ...fill(19, 7, 21, 7, C),
  ];

  // Camera — 3x3 box with lens pixel
  const camera: PixelData = [
    ...fill(7, 0, 9, 2, C),
    { x: 8, y: 1, color: BG },
  ];

  // Router — 3x2 box with 2 antenna pixels
  const router: PixelData = [
    ...fill(15, 0, 17, 1, C),
    { x: 15, y: -1, color: C },
    { x: 17, y: -1, color: C },
  ];

  // Outlet — 2x3 box with 2 slot pixels
  const outlet: PixelData = [
    ...fill(23, 0, 24, 2, C),
    { x: 23, y: 1, color: BG },
    { x: 24, y: 1, color: BG },
  ];

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      role="img"
      aria-label="SnapOne — cloud raining IoT devices"
      className="flex-shrink-0"
    >
      {cloud.map((p, i) => (
        <rect
          key={`c${i}`}
          x={p.x * PX}
          y={p.y * PX}
          width={PX}
          height={PX}
          fill={p.color}
        />
      ))}
      <g className="snap-device" style={{ animationDelay: "0s" }}>
        {camera.map((p, i) => (
          <rect
            key={`cam${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
      </g>
      <g className="snap-device" style={{ animationDelay: "-1s" }}>
        {router.map((p, i) => (
          <rect
            key={`rtr${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
      </g>
      <g className="snap-device" style={{ animationDelay: "-2s" }}>
        {outlet.map((p, i) => (
          <rect
            key={`out${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
      </g>
    </svg>
  );
}

// ─── General Electric ─── spinning windmill
function GEIcon() {
  // Tower / base (centered trapezoid)
  const tower: PixelData = [
    // Narrow top
    ...fill(15, 16, 16, 16, GRAY),
    ...fill(15, 17, 16, 17, GRAY),
    ...fill(14, 18, 17, 18, GRAY),
    ...fill(14, 19, 17, 19, GRAY),
    ...fill(14, 20, 17, 20, GRAY),
    ...fill(13, 21, 18, 21, GRAY),
    ...fill(13, 22, 18, 22, GRAY),
    ...fill(13, 23, 18, 23, GRAY),
    ...fill(12, 24, 19, 24, GRAY),
    ...fill(12, 25, 19, 25, GRAY),
    ...fill(11, 26, 20, 26, GRAY),
    ...fill(11, 27, 20, 27, GRAY),
    ...fill(10, 28, 21, 28, GRAY),
    // Nacelle at top
    ...fill(13, 14, 18, 15, GRAY),
  ];

  // Hub
  const hub: PixelData = [
    { x: 15, y: 12, color: W },
    { x: 16, y: 12, color: W },
    { x: 15, y: 13, color: W },
    { x: 16, y: 13, color: W },
  ];

  // Blades (drawn relative to hub at 16,12 in grid coords → 32,24 in SVG)
  // Blade 1: straight up
  const blade1: PixelData = [
    ...fill(15, 3, 16, 11, A),
  ];
  // Blade 2: down-right (~120°)
  const blade2: PixelData = [
    { x: 17, y: 14, color: A },
    { x: 18, y: 14, color: A },
    { x: 18, y: 15, color: A },
    { x: 19, y: 15, color: A },
    { x: 19, y: 16, color: A },
    { x: 20, y: 16, color: A },
    { x: 20, y: 17, color: A },
    { x: 21, y: 17, color: A },
    { x: 21, y: 18, color: A },
    { x: 22, y: 18, color: A },
    { x: 22, y: 19, color: A },
    { x: 23, y: 19, color: A },
    { x: 23, y: 20, color: A },
    { x: 24, y: 20, color: A },
    { x: 24, y: 21, color: A },
    { x: 25, y: 21, color: A },
  ];
  // Blade 3: down-left (~240°)
  const blade3: PixelData = [
    { x: 14, y: 14, color: A },
    { x: 13, y: 14, color: A },
    { x: 13, y: 15, color: A },
    { x: 12, y: 15, color: A },
    { x: 12, y: 16, color: A },
    { x: 11, y: 16, color: A },
    { x: 11, y: 17, color: A },
    { x: 10, y: 17, color: A },
    { x: 10, y: 18, color: A },
    { x: 9, y: 18, color: A },
    { x: 9, y: 19, color: A },
    { x: 8, y: 19, color: A },
    { x: 8, y: 20, color: A },
    { x: 7, y: 20, color: A },
    { x: 7, y: 21, color: A },
    { x: 6, y: 21, color: A },
  ];

  const blades = [...blade1, ...blade2, ...blade3];

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      role="img"
      aria-label="General Electric — spinning windmill"
      className="flex-shrink-0"
    >
      {tower.map((p, i) => (
        <rect
          key={`t${i}`}
          x={p.x * PX}
          y={p.y * PX}
          width={PX}
          height={PX}
          fill={p.color}
        />
      ))}
      <g className="ge-blades">
        {blades.map((p, i) => (
          <rect
            key={`b${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
        {hub.map((p, i) => (
          <rect
            key={`h${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
      </g>
    </svg>
  );
}

// ─── SSI Schaefer ─── conveyor belt with moving boxes
function SSIIcon() {
  // Conveyor surface (rail)
  const conveyor: PixelData = [
    ...fill(0, 18, 31, 18, GRAY),
    ...fill(0, 19, 31, 19, GRAY),
    // Support legs
    ...fill(4, 20, 5, 27, GRAY),
    ...fill(15, 20, 16, 27, GRAY),
    ...fill(26, 20, 27, 27, GRAY),
    // Roller dots underneath
    { x: 2, y: 21, color: W },
    { x: 8, y: 21, color: W },
    { x: 13, y: 21, color: W },
    { x: 19, y: 21, color: W },
    { x: 24, y: 21, color: W },
    { x: 30, y: 21, color: W },
  ];

  // 4 boxes on the belt, spaced 10 grid units apart, moving left-to-right
  // Box 1 starts off-screen left at x:-8, others visible at x:2, x:12, x:22
  // Translates right by 20px (10 grid units) so box 1 enters, box 4 exits → seamless loop
  const boxes: { x: number; y: number; w: number; h: number; color: string }[] = [
    { x: -8, y: 15, w: 4, h: 3, color: G },
    { x: 2, y: 14, w: 5, h: 4, color: C },
    { x: 12, y: 15, w: 4, h: 3, color: M },
    { x: 22, y: 14, w: 5, h: 4, color: A },
  ];

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      role="img"
      aria-label="SSI Schaefer — conveyor belt with moving boxes"
      className="flex-shrink-0"
    >
      {conveyor.map((p, i) => (
        <rect
          key={`cv${i}`}
          x={p.x * PX}
          y={p.y * PX}
          width={PX}
          height={PX}
          fill={p.color}
        />
      ))}
      <g className="ssi-boxes">
        {boxes.map((box, bi) => {
          const rects: PixelData = fill(box.x, box.y, box.x + box.w - 1, box.y + box.h - 1, box.color);
          return rects.map((p, pi) => (
            <rect
              key={`bx${bi}-${pi}`}
              x={p.x * PX}
              y={p.y * PX}
              width={PX}
              height={PX}
              fill={p.color}
            />
          ));
        })}
      </g>
    </svg>
  );
}

// ─── Lockheed Martin ─── animated navy destroyer with missile intercept
function LockheedIcon() {
  // Static ship (side profile facing right)
  const ship: PixelData = [
    // Hull
    ...fill(3, 25, 29, 25, M),
    ...fill(2, 24, 28, 24, M),
    ...fill(4, 26, 27, 26, M),
    ...fill(6, 27, 25, 27, M),
    // Bow
    { x: 29, y: 24, color: M },
    { x: 30, y: 24, color: M },
    { x: 30, y: 23, color: M },
    // Stern
    { x: 2, y: 23, color: M },
    { x: 3, y: 23, color: M },
    // Deck
    ...fill(4, 23, 28, 23, M),
    // Superstructure
    ...fill(15, 20, 23, 22, M),
    // Bridge
    ...fill(17, 18, 21, 19, M),
    // Mast
    { x: 19, y: 15, color: M },
    { x: 19, y: 16, color: M },
    { x: 19, y: 17, color: M },
    // Radar
    { x: 18, y: 15, color: M },
    { x: 20, y: 15, color: M },
    // Forward gun turret
    ...fill(7, 21, 10, 22, M),
    // Gun barrel
    { x: 6, y: 20, color: M },
    { x: 5, y: 19, color: M },
    // Water line
    ...fill(1, 28, 30, 28, "#1a1a4e"),
  ];

  // Missile at starting position (top-right, falling down-left)
  const missile: PixelData = [
    { x: 26, y: 1, color: "#ff4444" },
    { x: 27, y: 1, color: "#ff4444" },
    { x: 28, y: 1, color: "#ff4444" },
    { x: 27, y: 2, color: "#ff4444" },
    { x: 27, y: 3, color: "#ff4444" },
    { x: 27, y: 4, color: "#ff4444" },
    { x: 27, y: 0, color: "#ff6600" },
  ];

  // Tracer projectile at gun barrel tip
  const projectile: PixelData = [
    { x: 4, y: 18, color: A },
    { x: 4, y: 17, color: A },
  ];

  // Explosion at intercept point (~16, 12)
  const explosion: PixelData = [
    // White center
    { x: 16, y: 12, color: W },
    { x: 17, y: 12, color: W },
    { x: 16, y: 13, color: W },
    { x: 17, y: 13, color: W },
    // Amber inner ring
    { x: 15, y: 11, color: A },
    { x: 16, y: 11, color: A },
    { x: 17, y: 11, color: A },
    { x: 18, y: 11, color: A },
    { x: 15, y: 14, color: A },
    { x: 16, y: 14, color: A },
    { x: 17, y: 14, color: A },
    { x: 18, y: 14, color: A },
    { x: 14, y: 12, color: A },
    { x: 14, y: 13, color: A },
    { x: 19, y: 12, color: A },
    { x: 19, y: 13, color: A },
    // Magenta outer sparks
    { x: 14, y: 10, color: M },
    { x: 19, y: 10, color: M },
    { x: 13, y: 12, color: M },
    { x: 20, y: 13, color: M },
    { x: 14, y: 15, color: M },
    { x: 19, y: 15, color: M },
    { x: 16, y: 9, color: M },
    { x: 17, y: 16, color: M },
  ];

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Lockheed Martin — navy destroyer intercepting missile"
      className="flex-shrink-0"
    >
      {ship.map((p, i) => (
        <rect
          key={`s${i}`}
          x={p.x * PX}
          y={p.y * PX}
          width={PX}
          height={PX}
          fill={p.color}
        />
      ))}
      <g className="lm-missile">
        {missile.map((p, i) => (
          <rect
            key={`m${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
      </g>
      <g className="lm-projectile">
        {projectile.map((p, i) => (
          <rect
            key={`p${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
      </g>
      <g className="lm-explosion">
        {explosion.map((p, i) => (
          <rect
            key={`e${i}`}
            x={p.x * PX}
            y={p.y * PX}
            width={PX}
            height={PX}
            fill={p.color}
          />
        ))}
      </g>
    </svg>
  );
}

const ICONS: Record<string, { pixels: PixelData; label: string }> = {
  Microsoft: {
    pixels: microsoftPixels(),
    label: "Microsoft logo — four colored panes",
  },
};

export default function PixelIcon({ company }: { company: string }) {
  switch (company) {
    case "Lockheed Martin":
      return <LockheedIcon />;
    case "SnapAV / SnapOne":
      return <SnapIcon />;
    case "General Electric":
      return <GEIcon />;
    case "SSI Schaefer":
      return <SSIIcon />;
    default: {
      const icon = ICONS[company];
      if (!icon) return null;
      return <StaticIcon pixels={icon.pixels} label={icon.label} />;
    }
  }
}
