"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    name: "Design",
    description:
      "Frame the problem, capture existing knowledge, and architect how humans and agents collaborate across the workflow.",
  },
  {
    name: "Build",
    description:
      "Prototype rapidly, wire up tools via MCP, and validate performance with eval harnesses before rollout.",
  },
  {
    name: "Operate",
    description:
      "Launch with monitoring, feedback loops, and playbooks that keep agents accountable to outcomes.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "100%"]);

  return (
    <section id="process" ref={sectionRef} className="section-padding py-24 sm:py-32" aria-labelledby="process-heading">
      <div className="grid-layout items-start gap-12">
        <div className="md:col-span-5 space-y-4">
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-amber/80"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
            viewport={shouldReduceMotion ? undefined : { once: true }}
            style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
          >
            Process
          </motion.p>
          <motion.h2
            id="process-heading"
            className="text-3xl font-semibold sm:text-4xl"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
            viewport={shouldReduceMotion ? undefined : { once: true }}
            style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
          >
            Design → Build → Operate
          </motion.h2>
          <motion.p
            className="text-lg text-offwhite/70"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={shouldReduceMotion ? undefined : { once: true }}
            style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
          >
            A scroll-guided walkthrough of how we move from discovery to resilient operations.
          </motion.p>
        </div>
        <div className="md:col-span-7">
          <div className="relative rounded-2xl border border-offwhite/10 p-6 md:border-none md:p-0 md:pl-8 md:pt-2">
            <motion.span
              style={{ height: progressHeight, willChange: shouldReduceMotion ? undefined : "transform" }}
              className="absolute left-[-1px] top-0 hidden w-[2px] origin-top bg-gradient-to-b from-electricBlue via-electricBlue/60 to-amber md:block"
              aria-hidden="true"
            />
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.name}
                  className="relative"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={shouldReduceMotion ? undefined : { once: false, amount: 0.6 }}
                  style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
                >
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-electricBlue/50 bg-graphite text-sm font-semibold text-electricBlue md:absolute md:-left-8 md:mb-0 md:h-6 md:w-6 md:text-xs">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold md:text-2xl">{step.name}</h3>
                  <p className="mt-2 leading-relaxed text-base text-offwhite/70 md:mt-3">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
