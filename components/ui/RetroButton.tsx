import Link from "next/link";

interface RetroButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "cyan" | "magenta" | "green" | "amber";
  className?: string;
}

const variantStyles = {
  cyan: "border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10",
  magenta: "border-accent-magenta text-accent-magenta hover:bg-accent-magenta/10",
  green: "border-accent-green text-accent-green hover:bg-accent-green/10",
  amber: "border-accent-amber text-accent-amber hover:bg-accent-amber/10",
};

export default function RetroButton({
  href,
  onClick,
  children,
  variant = "cyan",
  className = "",
}: RetroButtonProps) {
  const baseClasses = `inline-block font-[family-name:var(--font-pixel)] text-[10px] uppercase tracking-wider px-6 py-3 border-2 transition-colors ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
