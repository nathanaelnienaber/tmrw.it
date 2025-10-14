"use client";

import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section id="contact" className="section-padding py-32">
      <motion.div
        className="rounded-3xl border border-electricBlue/20 bg-electricBlue/5 p-10 shadow-glow"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-electricBlue/80">Contact</p>
            <h2 className="text-3xl font-semibold">Start with a 30-minute strategy session.</h2>
            <p className="text-offwhite/70 text-lg">
              Share a challenge you&apos;re exploring and we&apos;ll respond with a tailored agenda for your team.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-offwhite/70">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Alex Chen"
                className="mt-1 w-full rounded-xl border border-offwhite/10 bg-graphite/80 px-4 py-3 text-offwhite placeholder:text-offwhite/30 focus:border-electricBlue/60 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-offwhite/70">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-xl border border-offwhite/10 bg-graphite/80 px-4 py-3 text-offwhite placeholder:text-offwhite/30 focus:border-electricBlue/60 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="notes" className="text-sm text-offwhite/70">
                What should we focus on?
              </label>
              <textarea
                id="notes"
                rows={4}
                placeholder="Agent roadmap, integration questions, evaluation setup..."
                className="mt-1 w-full rounded-xl border border-offwhite/10 bg-graphite/80 px-4 py-3 text-offwhite placeholder:text-offwhite/30 focus:border-electricBlue/60 focus:outline-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-electricBlue px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-electricBlue/90"
            >
              Send request
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
