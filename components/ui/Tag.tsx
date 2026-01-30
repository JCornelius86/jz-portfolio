interface TagProps {
  children: React.ReactNode;
  color?: "cyan" | "magenta" | "green" | "amber";
}

const colorMap = {
  cyan: "border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5",
  magenta: "border-accent-magenta/30 text-accent-magenta bg-accent-magenta/5",
  green: "border-accent-green/30 text-accent-green bg-accent-green/5",
  amber: "border-accent-amber/30 text-accent-amber bg-accent-amber/5",
};

export default function Tag({ children, color = "cyan" }: TagProps) {
  return (
    <span
      className={`inline-block text-[10px] font-[family-name:var(--font-mono)] px-2 py-1 border rounded-sm ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}
