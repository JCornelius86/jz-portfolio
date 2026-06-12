import type { ReactNode } from "react";

interface MdxRowProps {
  children?: ReactNode;
}

/**
 * Lays out its children (typically two <Figure> elements) in a responsive
 * two-column grid: stacked on mobile, side-by-side from the sm breakpoint up.
 *
 * Unlike <ImageRow>, this takes its images as children rather than an
 * array-of-objects prop, which renders reliably through next-mdx-remote.
 */
export default function MdxRow({ children }: MdxRowProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 items-start">
      {children}
    </div>
  );
}
