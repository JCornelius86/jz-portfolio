interface SectionHeadProps {
  label: string;
  count?: string;
  className?: string;
  /** Heading level for the label. Defaults to h2 — change to h3 inside sidebars. */
  as?: "h2" | "h3";
}

/**
 * Section opener: a short accent line + mono uppercase label, with
 * a hairline rule beneath. Optional right-side count (e.g. "03").
 * Renders the label as a real heading (h2 by default) so the page
 * has correct semantic hierarchy.
 */
export default function SectionHead({
  label,
  count,
  className = "",
  as: Tag = "h2",
}: SectionHeadProps) {
  return (
    <div
      className={`flex items-baseline justify-between pb-3 border-b border-rule ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span aria-hidden="true" className="block w-5 h-px bg-accent" />
        <Tag className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted font-medium m-0">
          {label}
        </Tag>
      </div>
      {count ? (
        <span className="font-mono text-[12px] text-muted">{count}</span>
      ) : null}
    </div>
  );
}
