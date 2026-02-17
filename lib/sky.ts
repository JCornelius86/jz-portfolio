// Sky theming utilities — pure functions, no React dependency

export type SkyPeriod = "night" | "dawn" | "day" | "dusk";
export type SkyMode = "auto" | "day" | "night";

/** Current Eastern Time hour and minute */
export function getEasternTime(): { hour: number; minute: number } {
  const now = new Date();
  const eastern = now.toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const [h, m] = eastern.split(":").map(Number);
  return { hour: h === 24 ? 0 : h, minute: m };
}

/** Map hour to sky period */
export function getSkyPeriod(hour: number): SkyPeriod {
  if (hour >= 20 || hour < 6) return "night";
  if (hour >= 6 && hour < 8) return "dawn";
  if (hour >= 8 && hour < 18) return "day";
  return "dusk"; // 18–19
}

/** Progress 0–1 within the current period */
export function getPeriodProgress(hour: number, minute: number): number {
  const period = getSkyPeriod(hour);
  const totalMin = hour * 60 + minute;
  switch (period) {
    case "night": {
      // 20:00 → 05:59 = 600 minutes
      const start = 20 * 60;
      const len = 10 * 60; // 600 min
      const elapsed = totalMin >= start ? totalMin - start : totalMin + 24 * 60 - start;
      return Math.min(elapsed / len, 1);
    }
    case "dawn": // 06:00 → 07:59 = 120 min
      return (totalMin - 6 * 60) / 120;
    case "day": // 08:00 → 17:59 = 600 min
      return (totalMin - 8 * 60) / 600;
    case "dusk": // 18:00 → 19:59 = 120 min
      return (totalMin - 18 * 60) / 120;
  }
}

/** Full-day progress for celestial arcs: 0–1 across 24h starting midnight */
export function getDayProgress(hour: number, minute: number): number {
  return (hour * 60 + minute) / 1440;
}

/**
 * Moon phase 0–1 from synodic cycle.
 * Reference: known new moon Jan 6, 2000 00:00 UTC.
 * Period: 29.53058770576 days.
 * 0 = new, 0.5 = full
 */
export function getMoonPhase(date: Date = new Date()): number {
  const refNewMoon = new Date("2000-01-06T00:00:00Z").getTime();
  const synodicPeriod = 29.53058770576;
  const daysSinceRef = (date.getTime() - refNewMoon) / (1000 * 60 * 60 * 24);
  const phase = (daysSinceRef % synodicPeriod) / synodicPeriod;
  return phase < 0 ? phase + 1 : phase;
}

/** Linearly interpolate between two hex colors */
export function lerpColor(hexA: string, hexB: string, t: number): string {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `#${((1 << 24) | (r << 16) | (g << 8) | bl).toString(16).slice(1)}`;
}

function hexToRgb(hex: string) {
  const c = hex.replace("#", "");
  return {
    r: parseInt(c.slice(0, 2), 16),
    g: parseInt(c.slice(2, 4), 16),
    b: parseInt(c.slice(4, 6), 16),
  };
}

/** Sky gradient palette per period */
const SKY_GRADIENTS: Record<SkyPeriod, { top: string; bottom: string }> = {
  night: { top: "#05050a", bottom: "#0a0a1a" },
  dawn: { top: "#0d0d1e", bottom: "#1a1025" },
  day: { top: "#10101e", bottom: "#1a1a30" },
  dusk: { top: "#0d0d1a", bottom: "#1a0d1a" },
};

/** Compute CSS gradient string for the sky background */
export function computeSkyGradient(period: SkyPeriod): string {
  const g = SKY_GRADIENTS[period];
  return `linear-gradient(to bottom, ${g.top}, ${g.bottom})`;
}
