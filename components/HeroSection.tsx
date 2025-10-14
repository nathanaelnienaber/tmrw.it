"use client";

import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

export function HeroSection() {
  return (
    <motion.section
      className="section-padding relative flex min-h-screen items-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionFade}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{ backgroundPositionX: ["0%", "100%"], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(74,178,247,0.12) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(74,178,247,0.08) 0, transparent 46%), linear-gradient(90deg, rgba(74,178,247,0.12) 1px, transparent 0)",
          backgroundSize: "280px 280px, 320px 320px, 140px 140px",
          willChange: "transform",
        }}
      />
      <div className="grid-layout">
        <div className="md:col-span-7 lg:col-span-6 space-y-6">
          <motion.p
            className="text-sm uppercase tracking-[0.4em] text-electricBlue/80"
            variants={heroItem}
            custom={0}
          >
            tmrw
          </motion.p>
          <motion.h1
            className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            variants={heroItem}
            custom={0.15}
          >
            Practical AI for real work.
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-offwhite/80 sm:text-xl"
            variants={heroItem}
            custom={0.35}
          >
            We help teams design, build, and deploy AI agents — trained on your data, connected through MCP, and integrated with your systems.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4"
            variants={heroItem}
            custom={0.55}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-electricBlue/60 bg-electricBlue/10 px-6 py-3 text-sm font-medium text-offwhite shadow-[0_0_0_0_rgba(74,178,247,0.0)] transition will-change-transform hover:bg-electricBlue/20 hover:shadow-[0_0_20px_rgba(74,178,247,0.25)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a strategy session
            </motion.a>
            <span className="text-sm text-offwhite/60">
              Trusted by operators building the next wave of intelligent tooling.
            </span>
          </motion.div>
        </div>
        <div className="mt-12 flex items-center justify-center md:col-span-5 lg:col-span-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-xl border border-electricBlue/20 bg-gradient-to-br from-graphite to-electricBlue/10 p-6"
            style={{ willChange: "transform" }}
          >
            <motion.div
              className="aspect-square w-full rounded-lg border border-electricBlue/10"
              animate={{ rotate: [0, 1, 0], scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              style={{ backgroundImage: "radial-gradient(circle, rgba(74,178,247,0.12), transparent 55%)" }}
            >
              <motion.div
                className="size-full"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 0), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 0)",
                  backgroundSize: "60px 60px",
                  mixBlendMode: "screen",
                  willChange: "background-position",
                }}
              />
            </motion.div>
            <div className="absolute inset-0 -z-10 rounded-xl bg-electricBlue/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
