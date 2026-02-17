"use client";

import { useSky } from "./SkyProvider";
import type { SkyMode } from "@/lib/sky";

const OPTIONS: { value: SkyMode; label: string; icon: string }[] = [
  { value: "day", label: "Day", icon: "\u2600" },
  { value: "auto", label: "AUTO", icon: "" },
  { value: "night", label: "Night", icon: "\u263E" },
];

export default function SkyToggle() {
  const { mode, setMode } = useSky();

  return (
    <div
      role="radiogroup"
      aria-label="Sky theme"
      className="flex items-center gap-0.5 bg-bg-card/60 rounded px-1 py-0.5 border border-border-pixel"
    >
      {OPTIONS.map((opt) => {
        const active = mode === opt.value;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => setMode(opt.value)}
            className={`font-[family-name:var(--font-pixel)] text-[8px] px-2 py-1 rounded transition-colors cursor-pointer ${
              active
                ? "bg-accent-cyan/20 text-accent-cyan"
                : "text-text-secondary hover:text-text-heading"
            }`}
          >
            {opt.icon || opt.label}
          </button>
        );
      })}
    </div>
  );
}
