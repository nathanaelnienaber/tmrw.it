"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="section-padding py-24">
      <div className="flex flex-col gap-12">
        <div className="grid-layout items-end">
          <motion.div
            className="md:col-span-6 space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">Offerings</h2>
            <p className="text-offwhite/70 text-lg max-w-xl">
              Bring us in across the lifecycle or drop into the stage that needs momentum. Each engagement moves with measurable deliverables.
            </p>
          </motion.div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => (
            <motion.article
              key={offering.title}
              className="card-hover h-full rounded-2xl border border-offwhite/10 bg-graphite/60 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-offwhite">{offering.title}</h3>
                <span className="text-sm uppercase tracking-widest text-electricBlue/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-offwhite/70 leading-relaxed">{offering.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
