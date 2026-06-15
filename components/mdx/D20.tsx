"use client";

import { useEffect, useRef } from "react";

/**
 * A small d20 that rolls once and settles on a natural 20 the first time it
 * scrolls into view. On-theme flourish for CharTaker; deliberately tiny and
 * one-shot to stay inside the site's minimal motion budget. Renders static
 * under prefers-reduced-motion.
 */
export default function D20() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.animate(
              [
                { transform: "rotate(-140deg) scale(0.65)", opacity: 0 },
                { transform: "rotate(18deg) scale(1.08)", opacity: 1, offset: 0.72 },
                { transform: "rotate(0deg) scale(1)", opacity: 1 },
              ],
              { duration: 950, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)", fill: "both" },
            );
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="my-8 flex justify-center text-accent" aria-hidden="true">
      <svg
        ref={ref}
        width="46"
        height="46"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* icosahedron silhouette */}
        <polygon points="24,3 42.2,13.5 42.2,34.5 24,45 5.8,34.5 5.8,13.5" />
        {/* top face */}
        <polygon points="24,3 34.5,17 13.5,17" />
        {/* faceted edges down to the base corners */}
        <path d="M13.5,17 L9,30 M34.5,17 L39,30 M13.5,17 L24,45 M34.5,17 L24,45 M13.5,17 L34.5,17" strokeWidth="1" opacity="0.55" />
        <text
          x="24"
          y="14.5"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="currentColor"
          stroke="none"
          fontFamily="ui-monospace, monospace"
        >
          20
        </text>
      </svg>
    </div>
  );
}
