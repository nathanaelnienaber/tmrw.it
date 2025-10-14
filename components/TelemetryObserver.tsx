"use client";

import { useEffect } from "react";
import { pingUptime, trackEvent } from "../lib/analytics";

const SECTION_OBSERVATIONS: Array<{ id: string; label: string }> = [
  { id: "offerings", label: "Offerings" },
  { id: "proof", label: "Proof" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export function TelemetryObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    pingUptime("pageview");
    trackEvent("Page View");

    const scrollThresholds = [0.5, 0.9];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = scrollTop / docHeight;

      scrollThresholds.forEach((threshold) => {
        if (!reached.has(threshold) && progress >= threshold) {
          trackEvent("Scroll Depth", { depth: `${Math.round(threshold * 100)}%` });
          reached.add(threshold);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section-label") ?? "Unknown";
            trackEvent("Section Engagement", { section });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    SECTION_OBSERVATIONS.forEach(({ id, label }) => {
      const element = document.getElementById(id);
      if (element) {
        element.setAttribute("data-section-label", label);
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
