/**
 * Small editorial company badge for /about and /resume. Each company
 * gets a bespoke geometric glyph (Microsoft 4-square, Snap power
 * button, Lockheed star, GE wind blades) in the ink color with one
 * ochre accent detail. Falls back to a Fraunces letter monogram for
 * any company without a custom glyph.
 *
 * Stays inside the editorial system: hairline border on the card
 * surface, no brand colors, single ochre accent per glyph.
 */
interface CompanyMarkProps {
  company: string;
  size?: "sm" | "md";
  className?: string;
}

const sizeStyles: Record<"sm" | "md", { chip: string; svg: number; mono: string }> = {
  sm: { chip: "w-10 h-10", svg: 22, mono: "text-[15px]" },
  md: { chip: "w-12 h-12", svg: 26, mono: "text-[18px]" },
};

function pickGlyph(company: string): ((size: number) => React.ReactNode) | null {
  const c = company.toLowerCase();
  if (c.includes("microsoft")) return MicrosoftGlyph;
  if (c.includes("snap")) return SnapGlyph;
  if (c.includes("lockheed")) return LockheedGlyph;
  if (c.includes("general electric") || c.includes("axiem") || /\bge\b/.test(c))
    return GEGlyph;
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
  const Glyph = pickGlyph(company);
  const s = sizeStyles[size];
  return (
    <span
      role="img"
      aria-label={`${company} mark`}
      className={`inline-flex items-center justify-center shrink-0 rounded-[10px] bg-card border border-rule text-ink ${s.chip} ${className}`}
    >
      {Glyph ? (
        Glyph(s.svg)
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
   Glyphs — each 24x24 viewBox, fill/stroke currentColor for ink,
   with one element using text-accent for the ochre detail.
   ---------------------------------------------------------------- */

function MicrosoftGlyph(size: number) {
  // Window-pane / Fluent: rounded square divided into four quadrants
  // by a hairline cross, bottom-right quadrant filled ochre.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="12.4"
        y="12.4"
        width="8.1"
        height="8.1"
        rx="1.2"
        className="fill-accent stroke-none"
      />
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.2" />
      <line x1="12" y1="3.5" x2="12" y2="20.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
    </svg>
  );
}

function SnapGlyph(size: number) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 8.5 A7 7 0 1 0 17.5 8.5" />
      <line
        x1="12"
        y1="3.5"
        x2="12"
        y2="11"
        className="stroke-accent"
      />
    </svg>
  );
}

function LockheedGlyph(size: number) {
  // Shield silhouette with a small ochre five-point star at the center.
  // Refers to the Aegis BMD work without being a literal missile/weapon.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M 12 3.5 L 4.5 5.8 L 4.5 12.5 C 4.5 17.4 7.6 19.8 12 21 C 16.4 19.8 19.5 17.4 19.5 12.5 L 19.5 5.8 Z" />
      <polygon
        points="12,8.5 12.82,10.87 15.33,10.92 13.33,12.43 14.06,14.83 12,13.4 9.94,14.83 10.67,12.43 8.67,10.92 11.18,10.87"
        className="fill-accent stroke-none"
      />
    </svg>
  );
}

function GEGlyph(size: number) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
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
