"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "../lib/analytics";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section-padding flex min-h-screen flex-col justify-center py-16 sm:py-20"
      aria-labelledby="hero-heading"
    >
      <div className="grid-layout items-center gap-12">
        <motion.div
          className="md:col-span-7 lg:col-span-6 space-y-6 text-center md:space-y-8 md:text-left"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
          variants={heroVariants}
          style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-electricBlue/80">tmrw</p>
          <h1 id="hero-heading" className="mx-auto max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Practical AI for real work.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-offwhite/80 sm:text-lg lg:text-xl">
            We help teams design, build, and deploy AI agents — trained on your data, connected through MCP, and integrated with
            your systems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-electricBlue/60 bg-electricBlue/10 px-6 py-3 text-sm font-medium text-offwhite transition hover:bg-electricBlue/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electricBlue"
              aria-label="Book a call with tmrw"
              onClick={() => trackEvent("CTA Click", { cta: "Book a Call" })}
            >
              Book a call
            </a>
            <span className="max-w-xs text-sm text-offwhite/60">
              Trusted by operators building the next wave of intelligent tooling.
            </span>
          </div>
        </motion.div>
        <div className="md:col-span-5 lg:col-span-6 mt-12 flex items-center justify-center md:mt-0">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-xl border border-electricBlue/20 bg-gradient-to-br from-graphite to-electricBlue/10 p-6"
            aria-hidden="true"
            style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src="/hero-visual.svg"
                alt="Abstract hero visualization showing orchestrated AI systems"
                fill
                priority
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 -z-10 rounded-xl bg-electricBlue/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
