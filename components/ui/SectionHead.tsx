interface SectionHeadProps {
  label: string;
  count?: string;
  className?: string;
}

/**
 * Section opener: a short accent line + mono uppercase label, with
 * a hairline rule beneath. Optional right-side count (e.g. "03")
 * for sections with a fixed number of items.
 */
export default function SectionHead({
  label,
  count,
  className = "",
}: SectionHeadProps) {
  return (
    <div
      className={`flex items-baseline justify-between pb-3 border-b border-rule ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span aria-hidden="true" className="block w-5 h-px bg-accent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted font-medium">
          {label}
        </span>
      </div>
      {count ? (
        <span className="font-mono text-[12px] text-muted">{count}</span>
      ) : null}
    </div>
  );
}
