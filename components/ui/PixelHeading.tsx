interface PixelHeadingProps {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  glow?: "cyan" | "magenta" | "green" | "amber";
  className?: string;
}

const sizeMap = {
  h1: "text-lg sm:text-xl md:text-2xl",
  h2: "text-sm sm:text-base md:text-lg",
  h3: "text-xs sm:text-sm",
};

const glowMap = {
  cyan: "neon-glow text-accent-cyan",
  magenta: "neon-glow-magenta text-accent-magenta",
  green: "neon-glow-green text-accent-green",
  amber: "neon-glow-amber text-accent-amber",
};

export default function PixelHeading({
  as: Tag = "h2",
  children,
  glow = "cyan",
  className = "",
}: PixelHeadingProps) {
  return (
    <Tag
      className={`font-[family-name:var(--font-pixel)] ${sizeMap[Tag]} ${glowMap[glow]} leading-relaxed ${className}`}
    >
      {children}
    </Tag>
  );
}
