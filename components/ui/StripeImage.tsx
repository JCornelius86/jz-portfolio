interface StripeImageProps {
  caption?: string;
  /** Aspect ratio as W/H string, e.g. "16/9", "4/3", "1/1". Defaults to 16/9. */
  aspect?: string;
  className?: string;
}

/**
 * Deliberate placeholder pattern from the handoff brief: diagonal
 * stripes in the rule color with a monospace caption pill. Lives
 * in place of real imagery while content port is pending. Replace
 * with next/image + a real asset in Phase 3.
 */
export default function StripeImage({
  caption = "PLACEHOLDER",
  aspect = "16/9",
  className = "",
}: StripeImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[14px] border border-rule bg-card ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={caption}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--c-rule) 0 9px, transparent 9px 18px)",
        }}
      />
      <div className="absolute bottom-3 left-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-card border border-rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          {caption}
        </span>
      </div>
    </div>
  );
}
