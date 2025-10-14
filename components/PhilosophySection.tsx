"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <motion.section
      className="section-padding py-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.45 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 400 220"
            className="mx-auto h-full w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.path
              d="M20 180 C 120 60, 280 60, 380 180"
              stroke="rgba(74,178,247,0.4)"
              strokeWidth="1.5"
              fill="transparent"
              strokeDasharray="520"
              strokeDashoffset={520}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: "easeOut", delay: 0.2 }}
            />
            <motion.circle
              cx="200"
              cy="120"
              r="3.5"
              fill="rgba(74,178,247,0.8)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            />
          </motion.svg>
        </motion.div>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-electricBlue/60">Philosophy</p>
          <h2 className="mt-6 text-3xl font-semibold leading-relaxed sm:text-4xl">
            We treat AI like engineering craft.
          </h2>
          <p className="mt-4 text-lg text-offwhite/70">
            Systems should be observable, correctable, and safe. We bias for pragmatic solutions that are maintainable by your teams long after we leave.
          </p>
        </motion.div>
        <motion.span
          className="absolute inset-0 -z-20 rounded-[48px] border border-electricBlue/20"
          animate={{ boxShadow: ["0 0 0 rgba(74,178,247,0)", "0 0 24px rgba(74,178,247,0.3)", "0 0 0 rgba(74,178,247,0)"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.section>
  );
}
