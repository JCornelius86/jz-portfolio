import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-5",
  md: "p-6 md:p-7",
  lg: "p-7 md:p-9",
};

const radiusStyles = {
  sm: "rounded-[12px]",
  md: "rounded-[16px]",
  lg: "rounded-[20px]",
};

export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  radius = "md",
}: CardProps) {
  return (
    <div
      className={`bg-card border border-rule ${radiusStyles[radius]} ${paddingStyles[padding]} ${
        hover
          ? "transition-transform duration-150 hover:-translate-y-px hover:border-accent/60"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
