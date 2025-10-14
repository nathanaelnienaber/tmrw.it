"use client";

import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="grid-layout">
        <motion.div
          className="md:col-span-7 lg:col-span-6 space-y-6"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-electricBlue/80">tmrw</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Practical AI for real work.
          </h1>
          <p className="text-lg sm:text-xl text-offwhite/80 max-w-2xl">
            We help teams design, build, and deploy AI agents — trained on your data, connected through MCP, and integrated with your systems.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-electricBlue/60 bg-electricBlue/10 px-6 py-3 text-sm font-medium text-offwhite transition hover:bg-electricBlue/20"
            >
              Book a strategy session
            </a>
            <span className="text-sm text-offwhite/60">
              Trusted by operators building the next wave of intelligent tooling.
            </span>
          </div>
        </motion.div>
        <div className="md:col-span-5 lg:col-span-6 mt-12 md:mt-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-xl border border-electricBlue/20 bg-gradient-to-br from-graphite to-electricBlue/10 p-6"
          >
            <div className="aspect-square w-full rounded-lg bg-grid-lines" />
            <div className="absolute inset-0 -z-10 rounded-xl bg-electricBlue/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
