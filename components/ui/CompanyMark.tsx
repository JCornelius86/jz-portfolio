/**
 * Small monogram chip used in place of company logos on /about and
 * /resume. Renders one or two characters in Fraunces on a card surface
 * with a hairline border. Replaces the old colored PixelIcon.
 */
interface CompanyMarkProps {
  company: string;
  size?: "sm" | "md";
  className?: string;
}

const sizeStyles = {
  sm: "w-9 h-9 text-[14px]",
  md: "w-12 h-12 text-[18px]",
};

function initials(company: string): string {
  // Strip parenthetical aliases like "SnapOne (formerly SnapAV)" → "SnapOne"
  const primary = company.replace(/\s*\(.*?\)\s*/g, "").trim();
  // Special-case: keep "OvrC" → "Ov" (mixed case, not just letters)
  if (primary.length <= 3) return primary;
  // Two-word names → first letter of each
  const words = primary.split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return primary.slice(0, 2);
}

export default function CompanyMark({
  company,
  size = "md",
  className = "",
}: CompanyMarkProps) {
  return (
    <span
      data-ff="serif"
      aria-hidden="true"
      className={`inline-flex items-center justify-center shrink-0 rounded-[10px] bg-card border border-rule text-ink font-[450] tracking-[-0.01em] ${sizeStyles[size]} ${className}`}
    >
      {initials(company)}
    </span>
  );
}
