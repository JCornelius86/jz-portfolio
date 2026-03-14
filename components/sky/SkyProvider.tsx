"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  getEasternTime,
  getSkyPeriod,
  getPeriodProgress,
  getDayProgress,
  type SkyPeriod,
  type SkyMode,
} from "@/lib/sky";

interface SkyContextValue {
  period: SkyPeriod;
  progress: number;
  dayProgress: number;
  mode: SkyMode;
  setMode: (mode: SkyMode) => void;
}

const SkyContext = createContext<SkyContextValue>({
  period: "night",
  progress: 0,
  dayProgress: 0,
  mode: "auto",
  setMode: () => {},
});

export function useSky() {
  return useContext(SkyContext);
}

function computeFromTime() {
  const { hour, minute } = getEasternTime();
  return {
    period: getSkyPeriod(hour),
    progress: getPeriodProgress(hour, minute),
    dayProgress: getDayProgress(hour, minute),
  };
}

const MODE_OVERRIDES: Record<"day" | "night", { period: SkyPeriod; progress: number; dayProgress: number }> = {
  day: { period: "day", progress: 0.5, dayProgress: 0.5 },
  night: { period: "night", progress: 0.5, dayProgress: 0 },
};

export default function SkyProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<SkyMode>("auto");
  // Always start with SSR-safe default to avoid hydration mismatch;
  // useEffect below will compute the real values on mount.
  const [sky, setSky] = useState({ period: "night" as SkyPeriod, progress: 0, dayProgress: 0 });

  // Read localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("sky-mode") as SkyMode | null;
    if (stored && ["auto", "day", "night"].includes(stored)) {
      setModeState(stored);
    }
  }, []);

  const setMode = useCallback((newMode: SkyMode) => {
    setModeState(newMode);
    localStorage.setItem("sky-mode", newMode);
  }, []);

  // Compute sky state based on mode
  useEffect(() => {
    function update() {
      if (mode === "auto") {
        setSky(computeFromTime());
      } else {
        setSky(MODE_OVERRIDES[mode]);
      }
    }
    update();

    // Poll every 60s for auto mode
    if (mode === "auto") {
      const interval = setInterval(update, 60_000);
      return () => clearInterval(interval);
    }
  }, [mode]);

  // Set data-sky attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-sky", sky.period);
  }, [sky.period]);

  return (
    <SkyContext.Provider value={{ ...sky, mode, setMode }}>
      {children}
    </SkyContext.Provider>
  );
}
