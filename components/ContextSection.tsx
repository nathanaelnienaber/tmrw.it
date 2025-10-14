"use client";

import { motion } from "framer-motion";

export function ContextSection() {
  const lines = [
    "Teams see demos of multi-agent workflows and copilots, yet the leap from experiment to production remains rare.",
    "Legacy systems, unstructured knowledge, and change management stall even the most ambitious roadmaps.",
    "tmrw pairs product sensibility with deep technical execution so you can deploy AI systems that actually move metrics—without betting the company on hype.",
  ];

  return (
    <motion.section
      className="section-padding py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid-layout items-center">
        <motion.div
          className="md:col-span-7 lg:col-span-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Capability is racing ahead. Adoption isn&apos;t keeping up.
          </h2>
        </motion.div>
        <motion.div
          className="relative md:col-span-5 lg:col-span-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="pointer-events-none absolute -right-12 -top-16 hidden h-40 w-40 rounded-full border border-electricBlue/20 md:block">
            <motion.svg
              viewBox="0 0 120 120"
              className="size-full"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.2, 0.45, 0.2] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
              <motion.circle
                cx="30"
                cy="30"
                r="6"
                fill="rgba(74,178,247,0.5)"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.circle
                cx="80"
                cy="46"
                r="4"
                fill="rgba(74,178,247,0.35)"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              />
              <motion.line
                x1="30"
                y1="30"
                x2="80"
                y2="46"
                stroke="rgba(74,178,247,0.3)"
                strokeWidth={1.4}
                strokeDasharray="4"
                animate={{ strokeDashoffset: [12, 0, 12] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
              <motion.circle
                cx="60"
                cy="90"
                r="5"
                fill="rgba(74,178,247,0.3)"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.6 }}
              />
              <motion.line
                x1="60"
                y1="90"
                x2="30"
                y2="30"
                stroke="rgba(74,178,247,0.2)"
                strokeWidth={1}
                strokeDasharray="3"
                animate={{ strokeDashoffset: [18, 6, 18] }}
                transition={{ repeat: Infinity, duration: 9, ease: "linear", delay: 0.3 }}
              />
            </motion.svg>
          </div>
          <motion.div
            className="space-y-4 text-lg leading-relaxed text-offwhite/70"
            initial="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {lines.map((line) => (
              <motion.p
                key={line}
                className="will-change-transform"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.75, ease: "easeOut" },
                  },
                }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
