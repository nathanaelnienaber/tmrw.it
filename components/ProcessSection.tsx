"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="section-padding py-24 sm:py-32">
      <div className="grid-layout items-start gap-12">
        <div className="space-y-4 md:col-span-5">
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-amber/80"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Process
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Design → Build → Operate
          </motion.h2>
          <motion.p
            className="text-offwhite/70 text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            A scroll-guided walkthrough of how we move from discovery to resilient operations.
          </motion.p>
        </div>
        <div className="md:col-span-7">
          <div className="relative rounded-2xl border border-offwhite/10 p-6 md:border-none md:p-0 md:pl-8 md:pt-2">
            <motion.span
              style={{ height: progressHeight }}
              className="absolute left-[-1px] top-0 hidden w-[2px] origin-top bg-gradient-to-b from-electricBlue via-electricBlue/60 to-amber md:block"
            />
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.name}
                  className="relative"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.6 }}
                >
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-electricBlue/50 bg-graphite text-sm font-semibold text-electricBlue md:absolute md:-left-8 md:mb-0 md:h-6 md:w-6 md:text-xs">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold md:text-2xl">{step.name}</h3>
                  <p className="mt-2 text-base text-offwhite/70 leading-relaxed md:mt-3">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
