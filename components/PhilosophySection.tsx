"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PhilosophySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="philosophy" className="section-padding py-32" aria-labelledby="philosophy-heading">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
        viewport={shouldReduceMotion ? undefined : { once: true }}
        style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-electricBlue/60">Philosophy</p>
        <h2 id="philosophy-heading" className="mt-6 text-3xl font-semibold leading-relaxed sm:text-4xl">
          We treat AI like engineering craft.
        </h2>
        <p className="mt-4 text-lg text-offwhite/70">
          Systems should be observable, correctable, and safe. We bias for pragmatic solutions that are maintainable by your teams long after we leave.
        </p>
      </motion.div>
    </section>
  );
}
