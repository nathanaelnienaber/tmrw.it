"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section className="section-padding py-32">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-electricBlue/60">Philosophy</p>
        <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-relaxed">
          We treat AI like engineering craft.
        </h2>
        <p className="mt-4 text-offwhite/70 text-lg">
          Systems should be observable, correctable, and safe. We bias for pragmatic solutions that are maintainable by your teams long after we leave.
        </p>
      </motion.div>
    </section>
  );
}
