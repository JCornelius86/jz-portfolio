/**
 * Small editorial company badge for /about and /resume. Each company
 * gets a bespoke geometric glyph (Microsoft window-pane, Snap power
 * button, Lockheed shield, GE wind blades) in the ink color with one
 * ochre accent detail. Falls back to a Fraunces letter monogram for
 * any company without a custom glyph.
 *
 * Chip size scales up at the md breakpoint so the glyph isn't lost
 * in the editorial whitespace of a desktop layout.
 */
import type { ReactNode } from "react";

interface CompanyMarkProps {
  company: string;
  size?: "sm" | "md";
  className?: string;
}

const sizeStyles = {
  sm: { chip: "w-12 h-12 md:w-16 md:h-16", mono: "text-[17px] md:text-[22px]" },
  md: { chip: "w-16 h-16 md:w-[88px] md:h-[88px]", mono: "text-[22px] md:text-[32px]" },
};

function pickGlyph(company: string): ReactNode | null {
  const c = company.toLowerCase();
  if (c.includes("microsoft")) return <MicrosoftGlyph />;
  if (c.includes("snap")) return <SnapGlyph />;
  if (c.includes("lockheed")) return <LockheedGlyph />;
  if (c.includes("general electric") || c.includes("axiem") || /\bge\b/.test(c))
    return <GEGlyph />;
  return null;
}

function monogram(company: string): string {
  const primary = company.replace(/\s*\(.*?\)\s*/g, "").trim();
  if (primary.length <= 3) return primary;
  const words = primary.split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return primary.slice(0, 2);
}

export default function CompanyMark({
  company,
  size = "md",
  className = "",
}: CompanyMarkProps) {
  const glyph = pickGlyph(company);
  const s = sizeStyles[size];
  return (
    <span
      role="img"
      aria-label={`${company} mark`}
      className={`inline-flex items-center justify-center shrink-0 rounded-[12px] bg-card border border-rule text-ink ${s.chip} ${className}`}
    >
      {glyph ? (
        glyph
      ) : (
        <span
          data-ff="serif"
          aria-hidden="true"
          className={`font-[450] tracking-[-0.01em] ${s.mono}`}
        >
          {monogram(company)}
        </span>
      )}
    </span>
  );
}

/* ----------------------------------------------------------------
   Glyphs — each in a 24x24 viewBox, rendered at 62% of the chip so
   they grow with it. Single ochre accent detail per glyph.
   ---------------------------------------------------------------- */

const GLYPH_BASE = "w-[68%] h-[68%]";

function MicrosoftGlyph() {
  // Microsoft 4-square logo: 2x2 grid of filled squares with a small
  // gap between them, top-right square in ochre.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={GLYPH_BASE}
    >
      <rect x="3" y="3" width="8.5" height="8.5" fill="currentColor" />
      <rect
        x="12.5"
        y="3"
        width="8.5"
        height="8.5"
        className="fill-accent"
      />
      <rect x="3" y="12.5" width="8.5" height="8.5" fill="currentColor" />
      <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="currentColor" />
    </svg>
  );
}

function SnapGlyph() {
  // Power button: ring with an ochre vertical stroke at the top.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={GLYPH_BASE}
    >
      <path d="M6.5 8.5 A7 7 0 1 0 17.5 8.5" />
      <line x1="12" y1="3.5" x2="12" y2="11" className="stroke-accent" />
    </svg>
  );
}

function LockheedGlyph() {
  // Shield silhouette with a small ochre five-point star at the center.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      className={GLYPH_BASE}
    >
      <path d="M 12 3.5 L 4.5 5.8 L 4.5 12.5 C 4.5 17.4 7.6 19.8 12 21 C 16.4 19.8 19.5 17.4 19.5 12.5 L 19.5 5.8 Z" />
      <polygon
        points="12,8.5 12.82,10.87 15.33,10.92 13.33,12.43 14.06,14.83 12,13.4 9.94,14.83 10.67,12.43 8.67,10.92 11.18,10.87"
        className="fill-accent stroke-none"
      />
    </svg>
  );
}

function GEGlyph() {
  // 3-blade wind turbine: three lines radiating from an ochre hub at
  // 120 degree intervals.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className={GLYPH_BASE}
    >
      <line x1="12" y1="12" x2="12" y2="3.5" />
      <line x1="12" y1="12" x2="19.4" y2="16.3" />
      <line x1="12" y1="12" x2="4.6" y2="16.3" />
      <circle
        cx="12"
        cy="12"
        r="1.8"
        className="fill-accent stroke-accent"
      />
    </svg>
  );
}
