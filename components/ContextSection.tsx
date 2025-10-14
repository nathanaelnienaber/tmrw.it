"use client";

import { motion } from "framer-motion";

export function ContextSection() {
  return (
    <section className="section-padding py-24">
      <div className="grid-layout items-center">
        <motion.div
          className="md:col-span-7 lg:col-span-6"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Capability is racing ahead. Adoption isn&apos;t keeping up.
          </h2>
        </motion.div>
        <motion.div
          className="md:col-span-5 lg:col-span-6 text-offwhite/70 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>
            Teams see demos of multi-agent workflows and copilots, yet the leap from experiment to production remains rare. Legacy systems, unstructured knowledge, and change management stall even the most ambitious roadmaps.
          </p>
          <p className="mt-4">
            tmrw pairs product sensibility with deep technical execution so you can deploy AI systems that actually move metrics—without betting the company on hype.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
