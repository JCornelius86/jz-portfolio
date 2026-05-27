import type { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
  className?: string;
}

export default function PullQuote({
  children,
  attribution,
  className = "",
}: PullQuoteProps) {
  return (
    <figure
      className={`border-l border-accent pl-4 py-1 my-6 ${className}`}
    >
      <blockquote
        data-ff="serif"
        className="italic text-ink text-[18px] md:text-[20px] leading-[1.4]"
      >
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
