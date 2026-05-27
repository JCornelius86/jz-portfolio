import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
  /**
   * Legacy: the old API accepted a color discriminator (cyan / magenta /
   * green / amber). The new system uses a single ochre accent, so the
   * prop is accepted for backwards compatibility and ignored.
   */
  color?: "cyan" | "magenta" | "green" | "amber";
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-mono text-[10.5px] uppercase tracking-[0.1em] px-2.5 py-0.5 text-accent bg-accent/10 ${className}`}
    >
      {children}
    </span>
  );
}
