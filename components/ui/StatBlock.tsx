interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
  align?: "left" | "center";
}

export default function StatBlock({
  value,
  label,
  className = "",
  align = "left",
}: StatBlockProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      <p
        data-ff="serif"
        className="text-ink text-[32px] md:text-[44px] leading-none tracking-[-0.01em] font-[440]"
      >
        {value}
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {label}
      </p>
    </div>
  );
}
