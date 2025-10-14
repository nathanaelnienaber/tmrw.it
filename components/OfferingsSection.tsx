"use client";

import { motion, useReducedMotion } from "framer-motion";

const offerings = [
  {
    title: "Strategy",
    description:
      "Assess readiness, prioritize use-cases, and map the technical + org work to reach production with confidence.",
  },
  {
    title: "Agent Development",
    description:
      "Design autonomous and human-in-the-loop agents tailored to your workflows, tools, and governance constraints.",
  },
  {
    title: "Integration",
    description:
      "Connect agents with MCP, APIs, and internal services. Stand up data pipelines, retrieval, and orchestration reliably.",
  },
  {
    title: "AgentOps",
    description:
      "Instrument usage, evaluate output quality, and keep systems healthy with automated monitoring and playbooks.",
  },
];

export function OfferingsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="offerings" className="section-padding py-24" aria-labelledby="offerings-heading">
      <div className="flex flex-col gap-12">
        <div className="grid-layout items-end">
          <motion.div
            className="md:col-span-6 space-y-4"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
            viewport={shouldReduceMotion ? undefined : { once: true }}
            style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
          >
            <h2 id="offerings-heading" className="text-3xl font-semibold sm:text-4xl">
              Offerings
            </h2>
            <p className="max-w-xl text-lg text-offwhite/70">
              Bring us in across the lifecycle or drop into the stage that needs momentum. Each engagement moves with measurable deliverables.
            </p>
          </motion.div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => (
            <motion.article
              key={offering.title}
              className="card-hover h-full rounded-2xl border border-offwhite/10 bg-graphite/60 p-8"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: index * 0.05 }}
              style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-offwhite">{offering.title}</h3>
                <span className="text-sm uppercase tracking-widest text-electricBlue/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-offwhite/70">{offering.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
