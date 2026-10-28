/**
 * Portrait redraws of the Azure Advisor diagrams for the case study's side
 * rail. The inline versions are wide (up to 2:1), which shrinks their labels
 * to ~5px at rail width; these stack the same ideas top to bottom on a 300x400
 * viewBox so labels stay 10-17px at ~320px wide.
 *
 * Inline SVG on theme tokens (var(--c-*)) so they follow light/dark.
 */

export const RAIL_DIAGRAM_SIZE = { width: 300, height: 400 };

const svgProps = {
  viewBox: "0 0 300 400",
  className: "block w-full h-full bg-card",
} as const;

export function ContextGapRail() {
  const chips = [0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((c) => ({ r, c })));
  return (
    <svg {...svgProps} aria-hidden="true">
      <text x={150} y={32} textAnchor="middle" className="font-mono" fontSize={12} letterSpacing="0.14em" fill="var(--c-accent)">
        THE CONTEXT GAP
      </text>
      <line x1={150} y1={62} x2={150} y2={232} stroke="var(--c-rule)" strokeWidth={1.5} strokeDasharray="3 7" />

      {/* The system */}
      <rect x={10} y={52} width={132} height={186} rx={14} fill="var(--c-bg)" stroke="var(--c-rule)" strokeWidth={1.5} />
      <text x={76} y={78} textAnchor="middle" className="font-mono" fontSize={10} letterSpacing="0.12em" fill="var(--c-muted)">THE SYSTEM</text>
      <text x={76} y={104} textAnchor="middle" fontSize={16} fontWeight={600} fill="var(--c-ink)">Sees every</text>
      <text x={76} y={123} textAnchor="middle" fontSize={16} fontWeight={600} fill="var(--c-ink)">resource</text>
      {chips.map(({ r, c }) => (
        <rect key={`${r}-${c}`} x={30 + c * 24} y={142 + r * 18} width={18} height={10} rx={3} fill="var(--c-card)" stroke="var(--c-rule)" strokeWidth={1} />
      ))}
      <text x={76} y={222} textAnchor="middle" fontSize={13} fill="var(--c-muted)">Zero context</text>

      {/* The customer */}
      <rect x={158} y={52} width={132} height={186} rx={14} fill="var(--c-bg)" stroke="var(--c-rule)" strokeWidth={1.5} />
      <text x={224} y={78} textAnchor="middle" className="font-mono" fontSize={10} letterSpacing="0.12em" fill="var(--c-muted)">THE CUSTOMER</text>
      <text x={224} y={104} textAnchor="middle" fontSize={16} fontWeight={600} fill="var(--c-ink)">Knows what</text>
      <text x={224} y={123} textAnchor="middle" fontSize={16} fontWeight={600} fill="var(--c-ink)">matters</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={170 + i * 38} y={152} width={32} height={18} rx={9} fill="var(--c-card)" stroke={i === 1 ? "var(--c-accent)" : "var(--c-rule)"} strokeWidth={i === 1 ? 1.5 : 1} />
      ))}
      <circle cx={224} cy={161} r={3.5} fill="var(--c-accent)" />
      <text x={224} y={206} textAnchor="middle" fontSize={13} fill="var(--c-muted)">Context lives</text>
      <text x={224} y={223} textAnchor="middle" fontSize={13} fill="var(--c-muted)">in their heads</text>

      {/* Into the bridge */}
      <path d="M76 238 C76 270, 120 268, 124 302" fill="none" stroke="var(--c-muted)" strokeWidth={1.5} />
      <path d="M224 238 C224 270, 180 268, 176 302" fill="none" stroke="var(--c-muted)" strokeWidth={1.5} />
      <circle cx={76} cy={238} r={3} fill="var(--c-muted)" />
      <circle cx={224} cy={238} r={3} fill="var(--c-muted)" />

      <rect x={40} y={302} width={220} height={74} rx={20} fill="var(--c-accent)" fillOpacity={0.08} stroke="var(--c-accent)" strokeOpacity={0.45} strokeWidth={1.5} />
      <text x={150} y={334} textAnchor="middle" fontSize={17} fontWeight={600} fill="var(--c-ink)">The experience asks</text>
      <text x={150} y={358} textAnchor="middle" className="font-mono" fontSize={11} letterSpacing="0.12em" fill="var(--c-accent)">SCOPE + INTENT</text>
    </svg>
  );
}

export function AskFunnelRail() {
  const priorities = [
    { label: "CRITICAL", strong: true, opacity: 1 },
    { label: "NEXT", strong: false, opacity: 0.85 },
    { label: "NEXT", strong: false, opacity: 0.7 },
    { label: "LATER", strong: false, opacity: 0.55 },
    { label: "LATER", strong: false, opacity: 0.45 },
  ];
  const cardY = (i: number) => 262 + i * 27;
  const pillW = (l: string) => l.length * 5.6 + 12;
  return (
    <svg {...svgProps} aria-hidden="true">
      <text x={150} y={30} textAnchor="middle" className="font-mono" fontSize={10.5} letterSpacing="0.12em" fill="var(--c-muted)">
        HUNDREDS OF RECOMMENDATIONS
      </text>
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4, 5, 6].map((c) => (
          <rect key={`${r}-${c}`} x={26 + c * 36} y={46 + r * 18} width={28} height={12} rx={3} fill="var(--c-rule)" fillOpacity={0.35 + ((r * 7 + c * 3) % 5) * 0.13} stroke="var(--c-muted)" strokeOpacity={0.4} strokeWidth={1} />
        )),
      )}

      {/* Many gather into the ask */}
      {[40, 95, 150, 205, 260].map((x, i) => (
        <path key={x} d={`M${x} 116 C${x} 146, ${146 + i * 2} 140, ${146 + i * 2} 164`} fill="none" stroke="var(--c-muted)" strokeWidth={1.2} opacity={0.55} />
      ))}
      <rect x={95} y={164} width={110} height={54} rx={16} fill="var(--c-accent)" fillOpacity={0.12} stroke="var(--c-accent)" strokeWidth={1.6} />
      <text x={150} y={189} textAnchor="middle" fontSize={18} fontWeight={600} fill="var(--c-ink)">Ask</text>
      <text x={150} y={207} textAnchor="middle" className="font-mono" fontSize={9.5} letterSpacing="0.06em" fill="var(--c-accent)">SCOPE + INTENT</text>

      {/* The ask hands down a ranked stack */}
      <line x1={150} y1={218} x2={150} y2={232} stroke="var(--c-muted)" strokeWidth={1.3} opacity={0.6} />
      <text x={150} y={248} textAnchor="middle" className="font-mono" fontSize={10.5} letterSpacing="0.12em" fill="var(--c-accent)">
        FIVE THAT MATTER
      </text>
      {priorities.map((p, i) => {
        const pw = pillW(p.label);
        return (
          <g key={i} opacity={p.opacity}>
            <rect x={30} y={cardY(i)} width={248} height={22} rx={7} fill={i === 0 ? "var(--c-accent)" : "var(--c-bg)"} fillOpacity={i === 0 ? 0.1 : 1} stroke="var(--c-accent)" strokeOpacity={i === 0 ? 0.9 : 0.5} strokeWidth={1.3} />
            <text x={44} y={cardY(i) + 16} textAnchor="middle" data-ff="serif" fontSize={14} fontWeight={500} fill="var(--c-accent)">{i + 1}</text>
            <rect x={58} y={cardY(i) + 8} width={92} height={6} rx={3} fill="var(--c-ink)" opacity={0.55} />
            <rect x={268 - pw} y={cardY(i) + 4} width={pw} height={14} rx={7} fill={p.strong ? "var(--c-accent)" : "none"} fillOpacity={p.strong ? 0.15 : 0} stroke="var(--c-accent)" strokeOpacity={p.strong ? 0.9 : 0.4} strokeWidth={1} />
            <text x={268 - pw / 2} y={cardY(i) + 14} textAnchor="middle" className="font-mono" fontSize={8} letterSpacing="0.06em" fill={p.strong ? "var(--c-accent)" : "var(--c-muted)"}>{p.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function TwoTrackRail() {
  return (
    <svg {...svgProps} aria-hidden="true">
      {/* Track A */}
      <rect x={12} y={36} width={246} height={96} rx={14} fill="var(--c-bg)" stroke="var(--c-rule)" strokeWidth={1.5} />
      <text x={30} y={66} fontSize={17} fontWeight={600} fill="var(--c-ink)">Advisor AI chat</text>
      <text x={30} y={88} className="font-mono" fontSize={10} letterSpacing="0.06em" fill="var(--c-accent)">BUILD 2026 · PRIVATE PREVIEW</text>
      <text x={30} y={112} fontSize={12} fill="var(--c-muted)">Point-in-time, one user at a time</text>

      {/* Track B */}
      <rect x={12} y={156} width={246} height={96} rx={14} fill="var(--c-bg)" stroke="var(--c-rule)" strokeWidth={1.5} />
      <text x={30} y={186} fontSize={17} fontWeight={600} fill="var(--c-ink)">Service Groups</text>
      <text x={30} y={208} className="font-mono" fontSize={9.5} letterSpacing="0.04em" fill="var(--c-accent)">IGNITE 2025 · GENERALLY AVAILABLE</text>
      <text x={30} y={232} fontSize={12} fill="var(--c-muted)">Durable, shared, organization-level</text>

      {/* The tracks converge */}
      <path d="M258 84 C292 84, 292 268, 150 296" fill="none" stroke="var(--c-muted)" strokeWidth={1.5} />
      <path d="M258 204 C278 204, 278 282, 150 296" fill="none" stroke="var(--c-muted)" strokeWidth={1.5} />
      <circle cx={150} cy={296} r={7} fill="var(--c-accent)" />
      <text x={150} y={334} textAnchor="middle" fontSize={18} fontWeight={600} fill="var(--c-ink)">From asking</text>
      <text x={150} y={356} textAnchor="middle" fontSize={18} fontWeight={600} fill="var(--c-ink)">to knowing</text>
    </svg>
  );
}

export const railDiagrams = {
  "context-gap": ContextGapRail,
  "ask-funnel": AskFunnelRail,
  "two-track": TwoTrackRail,
} as const;

export type RailDiagramName = keyof typeof railDiagrams;
