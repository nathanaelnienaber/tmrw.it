"use client";

import Lottie from "lottie-react";
import particleAnimation from "../public/particle-network.json";

export function HeroAnimation() {
  return (
    <div className="relative isolate flex aspect-square w-full max-w-xl items-center justify-center overflow-hidden rounded-2xl border border-electricBlue/20 bg-[#0E0E0E] p-6 shadow-[0_40px_120px_-60px_rgba(74,178,247,0.45)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,178,247,0.25),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electricBlue/10 via-transparent to-transparent" />
      <Lottie
        animationData={particleAnimation}
        loop
        autoplay
        className="relative h-full w-full"
        style={{ filter: "drop-shadow(0 0 12px rgba(74, 178, 247, 0.35))" }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/0 via-[#0E0E0E]/10 to-[#0E0E0E]/40" />
    </div>
  );
}
