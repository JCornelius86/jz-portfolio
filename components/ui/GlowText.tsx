interface GlowTextProps {
  children: React.ReactNode;
  color?: "cyan" | "magenta" | "green" | "amber";
  className?: string;
}

const colorMap = {
  cyan: "text-accent-cyan neon-glow",
  magenta: "text-accent-magenta neon-glow-magenta",
  green: "text-accent-green neon-glow-green",
  amber: "text-accent-amber neon-glow-amber",
};

export default function GlowText({
  children,
  color = "cyan",
  className = "",
}: GlowTextProps) {
  return <span className={`${colorMap[color]} ${className}`}>{children}</span>;
}
