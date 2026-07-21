import Reveal from "@/components/ui/Reveal";

/**
 * Two-track strategy diagram for the Azure Advisor case study: the chat
 * preview (Build 2026, point-in-time, per user) runs parallel to Service
 * Groups (Ignite 2025, durable, org-level), and the tracks converge.
 *
 * Inline SVG on theme tokens (var(--c-*)) so it adapts to light/dark.
 * Sized on a 600-wide viewBox with 16px+ labels so it stays legible at 375px.
 */
export default function TwoTrackDiagram() {
  return (
    <Reveal>
      <figure className="my-8">
        <div className="rounded-[14px] border border-rule bg-card p-4 md:p-6">
          <svg
            viewBox="0 0 600 340"
            role="img"
            aria-label="Diagram of the two-track strategy: the Advisor AI chat, in private preview at Build 2026 and point-in-time per user, runs in parallel with Service Groups, generally available since Ignite 2025 and durable at the organization level. The two tracks converge: from asking to knowing."
            className="w-full h-auto"
          >
            {/* Track A: the chat */}
            <rect
              x={24}
              y={36}
              width={360}
              height={104}
              rx={16}
              fill="var(--c-bg)"
              stroke="var(--c-rule)"
              strokeWidth={1.5}
            />
            <text
              x={44}
              y={70}
              fontSize={19}
              fontWeight={600}
              fill="var(--c-ink)"
            >
              Advisor AI chat
            </text>
            <text
              x={44}
              y={94}
              className="font-mono"
              fontSize={13.5}
              letterSpacing="0.1em"
              fill="var(--c-accent)"
            >
              BUILD 2026 · PRIVATE PREVIEW
            </text>
            <text x={44} y={120} fontSize={16} fill="var(--c-muted)">
              Point-in-time, one user at a time
            </text>

            {/* Track B: Service Groups */}
            <rect
              x={24}
              y={180}
              width={360}
              height={104}
              rx={16}
              fill="var(--c-bg)"
              stroke="var(--c-rule)"
              strokeWidth={1.5}
            />
            <text
              x={44}
              y={214}
              fontSize={19}
              fontWeight={600}
              fill="var(--c-ink)"
            >
              Service Groups
            </text>
            <text
              x={44}
              y={238}
              className="font-mono"
              fontSize={13.5}
              letterSpacing="0.1em"
              fill="var(--c-accent)"
            >
              IGNITE 2025 · GENERALLY AVAILABLE
            </text>
            <text x={44} y={264} fontSize={16} fill="var(--c-muted)">
              Durable, shared, organization-level
            </text>

            {/* Converging paths — enter the node horizontally so the
                label area beneath stays clear */}
            <path
              d="M384 88 C450 88, 450 160, 501 160"
              fill="none"
              stroke="var(--c-muted)"
              strokeWidth={1.5}
            />
            <path
              d="M384 232 C450 232, 450 160, 501 160"
              fill="none"
              stroke="var(--c-muted)"
              strokeWidth={1.5}
            />
            <circle cx={508} cy={160} r={7} fill="var(--c-accent)" />

            {/* Convergence label */}
            <text
              x={508}
              y={200}
              textAnchor="middle"
              fontSize={18}
              fontWeight={600}
              fill="var(--c-ink)"
            >
              From asking
            </text>
            <text
              x={508}
              y={224}
              textAnchor="middle"
              fontSize={18}
              fontWeight={600}
              fill="var(--c-ink)"
            >
              to knowing
            </text>
          </svg>
        </div>
        <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mt-3 text-center leading-[1.5]">
          Two tracks, one strategy: the conversation captures intent now, and
          Service Groups make it durable and organizational.
        </figcaption>
      </figure>
    </Reveal>
  );
}
