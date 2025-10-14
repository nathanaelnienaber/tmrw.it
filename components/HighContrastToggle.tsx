"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const STORAGE_KEY = "tmrw:high-contrast";

export function HighContrastToggle() {
  const [enabled, setEnabled] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setEnabled(true);
      document.documentElement.dataset.contrast = "high";
    } else {
      document.documentElement.dataset.contrast = "normal";
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    document.documentElement.dataset.contrast = enabled ? "high" : "normal";
    window.localStorage.setItem(STORAGE_KEY, String(enabled));
  }, [enabled, hydrated]);

  return (
    <button
      type="button"
      className={cn(
        "contrast-toggle inline-flex items-center gap-2 rounded-full border border-offwhite/20 bg-graphite/80 px-4 py-2 text-xs font-semibold text-offwhite/80 shadow-sm transition",
        "hover:bg-electricBlue/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electricBlue"
      )}
      aria-label={enabled ? "Disable high contrast mode" : "Enable high contrast mode"}
      aria-pressed={enabled}
      onClick={() => setEnabled((prev) => !prev)}
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-electricBlue" />
      <span>High contrast</span>
    </button>
  );
}
