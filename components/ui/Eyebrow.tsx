import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
  tone?: "muted" | "accent";
}

const toneStyles = {
  muted: "text-muted",
  accent: "text-accent",
};

export default function Eyebrow({
  children,
  className = "",
  as: Tag = "p",
  tone = "muted",
}: EyebrowProps) {
  return (
    <Tag
      className={`font-mono text-[11px] uppercase tracking-[0.12em] ${toneStyles[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}
