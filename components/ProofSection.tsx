"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    title: "Claims automation",
    description:
      "Triaged inbound claims with retrieval-augmented reasoning, shrinking human review time by 63%.",
  },
  {
    title: "Support assistants",
    description:
      "Equipped customer teams with copilots grounded in policy, reducing time-to-resolution and boosting CSAT.",
  },
  {
    title: "Research summarizers",
    description:
      "Compressed 100+ page reports into digestible briefs with source citations for executive stakeholders.",
  },
];

export function ProofSection() {
  return (
    <section className="section-padding py-24">
      <div className="flex flex-col gap-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Proof it works</h2>
          <p className="mt-4 text-offwhite/70 text-lg">
            Outcomes from systems we&apos;ve delivered with operators across insurance, SaaS, and industrial data.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              className="relative overflow-hidden rounded-2xl border border-offwhite/10 bg-graphite/70 p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electricBlue via-amber to-electricBlue" />
              <h3 className="text-xl font-semibold text-offwhite">{outcome.title}</h3>
              <p className="mt-3 text-offwhite/70 leading-relaxed">{outcome.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
