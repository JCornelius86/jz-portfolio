import type { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4";
type Variant = "display" | "hero" | "page" | "section" | "card";

interface HeadingProps {
  as?: HeadingTag;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

// Scale per DESIGN.md typography table. Display gets WONK 144,
// every other variant gets WONK 48 (body-size serif).
const variantStyles: Record<Variant, string> = {
  display:
    "font-display text-[46px] leading-[0.96] tracking-[-0.03em] sm:text-[88px] md:text-[124px] md:leading-[0.94] md:tracking-[-0.04em] font-[380]",
  hero:
    "font-display text-[36px] leading-[1.04] tracking-[-0.025em] sm:text-[60px] md:text-[72px] md:leading-[1] font-[380]",
  page:
    "font-serif text-[36px] leading-[1.05] tracking-[-0.02em] sm:text-[48px] md:text-[64px] font-[400]",
  section:
    "font-serif text-[22px] leading-[1.2] tracking-[-0.012em] sm:text-[28px] md:text-[32px] font-[440]",
  card:
    "font-serif text-[19px] leading-[1.25] tracking-[-0.01em] md:text-[24px] font-[450]",
};

export default function Heading({
  as = "h2",
  variant = "section",
  children,
  className = "",
}: HeadingProps) {
  const Tag = as;
  return (
    <Tag className={`text-ink ${variantStyles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}

/**
 * Italic accent inline span — the italic-accent rule. Reserved for
 * one or two key words inside a heading, or pull-arrows. Renders
 * italic Fraunces in the ochre accent.
 */
export function Accent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <em className={`not-italic font-serif italic text-accent ${className}`}>
      {children}
    </em>
  );
}

/**
 * The single allowed system animation: blinking underscore cursor
 * for the H1. Pair with a single ochre `_` glyph.
 */
export function Cursor({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`cursor-blink text-accent ${className}`}>
      _
    </span>
  );
}
