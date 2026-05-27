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
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="8" height="8" fill="currentColor" />
      <rect x="13" y="3" width="8" height="8" fill="currentColor" />
      <rect x="3" y="13" width="8" height="8" fill="currentColor" />
      <rect x="13" y="13" width="8" height="8" className="fill-accent" />
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
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <polygon
        points="12,3 14.6,9.4 21.5,9.7 16.1,14 17.9,20.7 12,17 6.1,20.7 7.9,14 2.5,9.7 9.4,9.4"
        fill="currentColor"
      />
      <circle cx="12" cy="13" r="1.4" className="fill-accent" />
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
