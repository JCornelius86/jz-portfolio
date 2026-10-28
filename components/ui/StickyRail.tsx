"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

export interface RailItem {
  /** h2/h3 text in the article that switches the rail to this screen. Without
   * it, the trigger is a <RailShot> marker for this src, if one exists. */
  section?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Render this instead of an image (e.g. a portrait diagram). */
  node?: ReactNode;
}

interface StickyRailProps {
  items: RailItem[];
  /** Applied to the frame, e.g. an aspect ratio and a viewport-height width cap. */
  frameStyle?: CSSProperties;
}

/**
 * The pinned screenshot beside a project write-up. As each mapped section
 * heading scrolls past the upper third of the viewport, the rail swaps to that
 * section's screen like a card stack: the outgoing screen lifts and recedes,
 * the next rises in. Direction follows the reader, so scrolling back up plays
 * it in reverse. Reading position only picks the image; scrolling itself is
 * untouched, and reduced motion swaps instantly.
 */
export default function StickyRail({ items, frameStyle }: StickyRailProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3"),
    );
    const markers = Array.from(
      document.querySelectorAll<HTMLElement>("article [data-rail-src]"),
    );
    const targets = items.map((item) =>
      item.section
        ? headings.find((h) => h.textContent?.trim() === item.section) ?? null
        : markers.find((m) => m.dataset.railSrc === item.src) ?? null,
    );

    // A handful of getBoundingClientRect reads per scroll event is cheap, so
    // this runs directly rather than waiting on an animation frame.
    const update = () => {
      const line = window.innerHeight * 0.4;
      let next = 0;
      targets.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < line) next = i;
      });
      setActive((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Pick up a mid-page reload; setState here is from an event-style
    // callback, not the effect body.
    const initial = window.setTimeout(update, 0);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearTimeout(initial);
    };
  }, [items]);

  return (
    <figure>
      <div
        className="relative w-full mx-auto md:mr-0 overflow-hidden rounded-[22px] border border-rule bg-bg"
        style={frameStyle}
      >
        {items.map((item, i) => {
          // Past screens exit upward, upcoming ones wait below, so the swap
          // direction matches the scroll direction for free.
          const state = i === active ? "rail-current" : i < active ? "rail-past" : "rail-next";
          if (item.node) {
            return (
              <div
                key={item.src}
                role={i === active ? "img" : undefined}
                aria-label={i === active ? item.alt : undefined}
                aria-hidden={i === active ? undefined : true}
                className={`rail-shot ${state} absolute inset-0`}
              >
                {item.node}
              </div>
            );
          }
          return (
            <Image
              key={item.src}
              src={item.src}
              alt={i === active ? item.alt : ""}
              aria-hidden={i === active ? undefined : true}
              width={item.width}
              height={item.height}
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 340px"
              className={`rail-shot ${state} absolute inset-0 block w-full h-full object-contain`}
            />
          );
        })}
      </div>
      {items.length > 1 ? (
        <figcaption className="hidden md:flex gap-3 mt-3 font-mono text-[10.5px] uppercase tracking-[0.1em] leading-[1.5] min-h-[3em]">
          <span className="text-accent shrink-0 tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <span className="text-muted">{items[active]?.alt}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
