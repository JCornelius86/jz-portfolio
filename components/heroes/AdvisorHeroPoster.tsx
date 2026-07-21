/**
 * Poster hero for the Azure Advisor case study: a wall of context-free
 * recommendations funnels through the ask (scope + intent) into five
 * prioritized decisions. States the thesis of the case study at a glance.
 *
 * Inline SVG on theme tokens (var(--c-*)) so it adapts to light/dark.
 * Decorative at small sizes: the many-to-few shape reads even where the
 * mono labels get small.
 */
export default function AdvisorHeroPoster() {
  const wallCols = [0, 1, 2, 3, 4, 5, 6];
  const wallRows = [0, 1, 2, 3, 4, 5, 6, 7];

  const wallX = (c: number) => 48 + c * 62;
  const wallY = (r: number) => 96 + r * 50;
  const cardY = (i: number) => 84 + i * 92;

  // Priority pills, fading down the stack. First one is the loud one.
  const priorities = [
    { label: "CRITICAL", strong: true, opacity: 1 },
    { label: "NEXT", strong: false, opacity: 0.85 },
    { label: "NEXT", strong: false, opacity: 0.7 },
    { label: "LATER", strong: false, opacity: 0.55 },
    { label: "LATER", strong: false, opacity: 0.45 },
  ];
  const pillWidth = (label: string) => label.length * 7.4 + 20;

  // Streamlines with horizontal tangents at both ends (clean S-curves,
  // node-graph style). Five leave the wall's right edge at chip-row
  // heights and merge into a bundle at the bubble's left mouth...
  const wallEdge = 474;
  const mouthL = 596;
  const gatherPaths = [110, 205, 296, 390, 460].map(
    (y, i) =>
      `M${wallEdge} ${y} C540 ${y}, 540 ${292 + i * 2}, ${mouthL} ${292 + i * 2}`
  );
  // ...and five fan out from the right mouth, landing flush on each card.
  const mouthR = 730;
  const fanPaths = [122, 214, 306, 398, 490].map(
    (y, i) =>
      `M${mouthR} ${292 + i * 2} C790 ${292 + i * 2}, 790 ${y}, 850 ${y}`
  );

  return (
    <div className="relative w-full overflow-hidden rounded-[20px] border border-rule bg-card">
      <svg
        viewBox="0 0 1200 600"
        role="img"
        aria-label="Poster diagram: a dense wall of context-free recommendations passes through an ask for scope and intent and becomes five prioritized decisions, from critical down to later."
        className="block w-full h-auto"
      >
        {/* ---- Left: the wall ---- */}
        <text
          x={48}
          y={52}
          className="font-mono"
          fontSize={20}
          letterSpacing="0.14em"
          fill="var(--c-muted)"
        >
          HUNDREDS OF RECOMMENDATIONS
        </text>
        {wallRows.map((r) =>
          wallCols.map((c) => (
            <rect
              key={`w-${r}-${c}`}
              x={wallX(c)}
              y={wallY(r)}
              width={50}
              height={26}
              rx={5}
              fill="var(--c-rule)"
              fillOpacity={0.35 + ((r * 7 + c * 3) % 5) * 0.13}
              stroke="var(--c-muted)"
              strokeOpacity={0.4}
              strokeWidth={1}
            />
          ))
        )}

        {/* ---- Streamlines: many gather into the ask ---- */}
        {gatherPaths.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="var(--c-muted)"
            strokeWidth={1.3}
            opacity={0.5}
          />
        ))}

        {/* ---- Middle: the ask, as a speech bubble ---- */}
        <rect
          x={598}
          y={252}
          width={130}
          height={88}
          rx={20}
          fill="var(--c-accent)"
          fillOpacity={0.12}
          stroke="var(--c-accent)"
          strokeWidth={1.8}
        />
        <text
          x={663}
          y={290}
          textAnchor="middle"
          fontSize={26}
          fontWeight={600}
          fill="var(--c-ink)"
        >
          Ask
        </text>
        <text
          x={663}
          y={317}
          textAnchor="middle"
          className="font-mono"
          fontSize={12.5}
          letterSpacing="0.05em"
          fill="var(--c-accent)"
        >
          SCOPE + INTENT
        </text>

        {/* ---- Fan: one line per decision ---- */}
        {fanPaths.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="var(--c-muted)"
            strokeWidth={1.3}
            opacity={0.5}
          />
        ))}

        {/* ---- Right: the five, prioritized ---- */}
        <text
          x={852}
          y={52}
          className="font-mono"
          fontSize={20}
          letterSpacing="0.14em"
          fill="var(--c-accent)"
        >
          FIVE THAT MATTER
        </text>
        {priorities.map((p, i) => {
          const pw = pillWidth(p.label);
          return (
            <g key={`card-${i}`} opacity={p.opacity}>
              <rect
                x={852}
                y={cardY(i)}
                width={300}
                height={76}
                rx={14}
                fill={i === 0 ? "var(--c-accent)" : "var(--c-bg)"}
                fillOpacity={i === 0 ? 0.1 : 1}
                stroke="var(--c-accent)"
                strokeOpacity={i === 0 ? 0.9 : 0.5}
                strokeWidth={1.6}
              />
              <text
                x={884}
                y={cardY(i) + 48}
                textAnchor="middle"
                data-ff="serif"
                fontSize={30}
                fontWeight={500}
                fill="var(--c-accent)"
              >
                {i + 1}
              </text>
              {/* Abstract content bars */}
              <rect
                x={914}
                y={cardY(i) + 22}
                width={110}
                height={10}
                rx={5}
                fill="var(--c-ink)"
                opacity={0.55}
              />
              <rect
                x={914}
                y={cardY(i) + 44}
                width={80}
                height={10}
                rx={5}
                fill="var(--c-muted)"
                opacity={0.5}
              />
              {/* Priority pill */}
              <rect
                x={1122 - pw}
                y={cardY(i) + 27}
                width={pw}
                height={22}
                rx={11}
                fill={p.strong ? "var(--c-accent)" : "none"}
                fillOpacity={p.strong ? 0.15 : 0}
                stroke="var(--c-accent)"
                strokeOpacity={p.strong ? 0.9 : 0.4}
                strokeWidth={1.2}
              />
              <text
                x={1122 - pw / 2}
                y={cardY(i) + 42}
                textAnchor="middle"
                className="font-mono"
                fontSize={12}
                letterSpacing="0.08em"
                fill={p.strong ? "var(--c-accent)" : "var(--c-muted)"}
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
