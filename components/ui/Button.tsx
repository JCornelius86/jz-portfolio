import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost";
type Size = "sm" | "md";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsButton extends CommonProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<Size, string> = {
  sm: "text-[12px] px-4 py-2 tracking-[0.06em]",
  md: "text-[13px] px-5 py-2.5 tracking-[0.06em]",
};

const variantStyles: Record<Variant, string> = {
  // Ink-filled — primary action on light, inverts on dark.
  primary:
    "bg-ink text-bg hover:bg-accent hover:text-bg",
  // Ochre-filled — for the inverted footer CTA and the like.
  accent:
    "bg-accent text-bg hover:opacity-90",
  // Hairline outline — secondary action.
  ghost:
    "bg-transparent text-ink border border-rule hover:border-accent hover:text-accent",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium uppercase transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const btn = props as ButtonAsButton;
  return (
    <button
      type={btn.type ?? "button"}
      onClick={btn.onClick}
      disabled={btn.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
