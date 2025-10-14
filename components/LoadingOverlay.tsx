"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function LoadingOverlay() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setIsReady(true), prefersReducedMotion ? 0 : 400);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "loading-overlay pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-graphite",
        isReady ? "opacity-0" : "opacity-100",
        "transition-opacity duration-500 ease-out"
      )}
    >
      <span className="sr-only">Loading tmrw</span>
      <div
        className="h-12 w-12 animate-spin rounded-full border-2 border-electricBlue/70 border-t-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
