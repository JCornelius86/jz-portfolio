"use client";

import { useSky } from "./SkyProvider";
import { computeSkyGradient } from "@/lib/sky";
import PixelSun from "./PixelSun";
import PixelMoon from "./PixelMoon";
import PixelClouds from "./PixelClouds";

/**
 * Sky scene at the top of the page — scrolls with content (not fixed).
 * Contains gradient, celestial bodies, and clouds.
 */
export default function SkyBackground() {
  const { period, dayProgress } = useSky();

  const gradient = computeSkyGradient(period);

  // Sun arc: maps 6am (0.25 day) to 6pm (0.75 day) → 0–1
  const sunProgress = Math.max(0, Math.min(1, (dayProgress - 0.25) / 0.5));
  // Moon arc: maps 6pm (0.75 day) to 6am (0.25 next day) → 0–1
  const moonRaw = dayProgress >= 0.75 ? dayProgress - 0.75 : dayProgress + 0.25;
  const moonProgress = Math.max(0, Math.min(1, moonRaw / 0.5));

  const showSun = period === "dawn" || period === "day";
  const showMoon = period === "dusk" || period === "night";

  return (
    <div
      className="sky-background absolute top-0 left-0 right-0 h-[400px] z-0 pointer-events-none overflow-hidden transition-[background] duration-[2000ms] ease-in-out"
      style={{ background: gradient }}
      aria-hidden="true"
    >
      {showSun && <PixelSun progress={sunProgress} />}
      {showMoon && <PixelMoon progress={moonProgress} />}
      {showSun && <PixelClouds />}
    </div>
  );
}
