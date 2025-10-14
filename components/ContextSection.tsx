"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ContextSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="context" className="section-padding py-24" aria-labelledby="context-heading">
      <div className="grid-layout items-center">
        <motion.div
          className="md:col-span-7 lg:col-span-6"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
          viewport={shouldReduceMotion ? undefined : { once: true }}
          style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
        >
          <h2 id="context-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Capability is racing ahead. Adoption isn&apos;t keeping up.
          </h2>
        </motion.div>
        <motion.div
          className="md:col-span-5 lg:col-span-6 text-lg leading-relaxed text-offwhite/70"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={shouldReduceMotion ? undefined : { once: true }}
          style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
        >
          <p>
            Teams see demos of multi-agent workflows and copilots, yet the leap from experiment to production remains rare. Legacy systems, unstructured knowledge, and change management stall even the most ambitious roadmaps.
          </p>
          <p className="mt-4">
            tmrw pairs product sensibility with deep technical execution so you can deploy AI systems that actually move metrics — without betting the company on hype.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
