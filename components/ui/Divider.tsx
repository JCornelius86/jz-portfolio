interface DividerProps {
  label?: string;
  className?: string;
}

/**
 * A single hairline rule. Optional centered mono label sits on the
 * line in a card-bg chip. Replaces PixelDivider.
 */
export default function Divider({ label, className = "" }: DividerProps) {
  if (!label) {
    return (
      <hr
        aria-hidden="true"
        className={`border-0 border-t border-rule my-12 ${className}`}
      />
    );
  }
  return (
    <div
      className={`relative my-12 flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-1/2 h-px bg-rule" />
      <span className="relative bg-bg px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
    </div>
  );
}
