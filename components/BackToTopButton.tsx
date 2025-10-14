"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { trackEvent } from "../lib/analytics";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);

    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      media.removeEventListener("change", updateMotionPreference);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    trackEvent("Back to Top Clicked");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-electricBlue/40 bg-graphite/90 text-offwhite/80 shadow-lg transition",
        "hover:bg-electricBlue/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electricBlue",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-label="Back to top"
      style={{ willChange: visible ? "transform" : undefined }}
    >
      <span aria-hidden="true" className="text-lg">↑</span>
    </button>
  );
}
