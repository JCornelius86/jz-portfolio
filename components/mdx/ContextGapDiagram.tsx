import Reveal from "@/components/ui/Reveal";

/**
 * "The context gap" — abstracted diagram for the Azure Advisor case study.
 * The system sees every resource but holds no context; the customer knows
 * what's critical; the ask-based experience bridges the two.
 *
 * Inline SVG on theme tokens (var(--c-*)) so it adapts to light/dark.
 * Sized on a 600-wide viewBox with 16px+ labels so it stays legible at 375px.
 */
export default function ContextGapDiagram() {
  const chipCols = [0, 1, 2, 3, 4, 5];
  const chipRows = [0, 1, 2];
  return (
    <Reveal>
      <figure className="my-8">
        <div className="rounded-[14px] border border-rule bg-card p-4 md:p-6">
          <svg
            viewBox="0 0 600 400"
            role="img"
            aria-label="Diagram of the context gap: the system sees every resource with zero context, the customer knows which workloads matter, and the new experience bridges the gap by asking for scope and intent."
            className="w-full h-auto"
          >
            {/* Gap label */}
            <text
              x={300}
              y={30}
              textAnchor="middle"
              className="font-mono"
              fontSize={15}
              letterSpacing="0.14em"
              fill="var(--c-accent)"
            >
              THE CONTEXT GAP
            </text>

            {/* Dashed divider */}
            <line
              x1={300}
              y1={56}
              x2={300}
              y2={228}
              stroke="var(--c-rule)"
              strokeWidth={1.5}
              strokeDasharray="3 7"
            />

            {/* Left: the system */}
            <rect
              x={24}
              y={52}
              width={260}
              height={180}
              rx={16}
              fill="var(--c-bg)"
              stroke="var(--c-rule)"
              strokeWidth={1.5}
            />
            <text
              x={154}
              y={86}
              textAnchor="middle"
              className="font-mono"
              fontSize={14}
              letterSpacing="0.12em"
              fill="var(--c-muted)"
            >
              THE SYSTEM
            </text>
            <text
              x={154}
              y={116}
              textAnchor="middle"
              fontSize={19}
              fontWeight={600}
              fill="var(--c-ink)"
            >
              Sees every resource
            </text>
            {/* Anonymous resource chips */}
            {chipRows.map((r) =>
              chipCols.map((c) => (
                <rect
                  key={`chip-${r}-${c}`}
                  x={68 + c * 30}
                  y={134 + r * 20}
                  width={22}
                  height={12}
                  rx={3}
                  fill="var(--c-card)"
                  stroke="var(--c-rule)"
                  strokeWidth={1}
                />
              ))
            )}
            <text
              x={154}
              y={216}
              textAnchor="middle"
              fontSize={16}
              fill="var(--c-muted)"
            >
              Zero context
            </text>

            {/* Right: the customer */}
            <rect
              x={316}
              y={52}
              width={260}
              height={180}
              rx={16}
              fill="var(--c-bg)"
              stroke="var(--c-rule)"
              strokeWidth={1.5}
            />
            <text
              x={446}
              y={86}
              textAnchor="middle"
              className="font-mono"
              fontSize={14}
              letterSpacing="0.12em"
              fill="var(--c-muted)"
            >
              THE CUSTOMER
            </text>
            <text
              x={446}
              y={116}
              textAnchor="middle"
              fontSize={19}
              fontWeight={600}
              fill="var(--c-ink)"
            >
              Knows what matters
            </text>
            {/* Three workloads, one critical */}
            <rect
              x={356}
              y={140}
              width={52}
              height={24}
              rx={12}
              fill="var(--c-card)"
              stroke="var(--c-rule)"
              strokeWidth={1}
            />
            <rect
              x={420}
              y={140}
              width={52}
              height={24}
              rx={12}
              fill="var(--c-card)"
              stroke="var(--c-accent)"
              strokeWidth={1.5}
            />
            <circle cx={446} cy={152} r={4} fill="var(--c-accent)" />
            <rect
              x={484}
              y={140}
              width={52}
              height={24}
              rx={12}
              fill="var(--c-card)"
              stroke="var(--c-rule)"
              strokeWidth={1}
            />
            <text
              x={446}
              y={216}
              textAnchor="middle"
              fontSize={16}
              fill="var(--c-muted)"
            >
              Context lives in their heads
            </text>

            {/* Quiet connectors into the bridge */}
            <path
              d="M154 232 C154 268, 230 262, 236 296"
              fill="none"
              stroke="var(--c-muted)"
              strokeWidth={1.5}
            />
            <path
              d="M446 232 C446 268, 370 262, 364 296"
              fill="none"
              stroke="var(--c-muted)"
              strokeWidth={1.5}
            />
            <circle cx={154} cy={232} r={3} fill="var(--c-muted)" />
            <circle cx={446} cy={232} r={3} fill="var(--c-muted)" />

            {/* The bridge: the experience asks */}
            <rect
              x={170}
              y={296}
              width={260}
              height={72}
              rx={20}
              fill="var(--c-accent)"
              fillOpacity={0.08}
              stroke="var(--c-accent)"
              strokeOpacity={0.4}
              strokeWidth={1.5}
            />
            <text
              x={300}
              y={326}
              textAnchor="middle"
              fontSize={19}
              fontWeight={600}
              fill="var(--c-ink)"
            >
              The experience asks
            </text>
            <text
              x={300}
              y={351}
              textAnchor="middle"
              className="font-mono"
              fontSize={14}
              letterSpacing="0.12em"
              fill="var(--c-accent)"
            >
              SCOPE + INTENT
            </text>
          </svg>
        </div>
        <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mt-3 text-center leading-[1.5]">
          The system sees everything and understands nothing. The customer holds
          the missing context. The experience bridges the gap by asking.
        </figcaption>
      </figure>
    </Reveal>
  );
}
