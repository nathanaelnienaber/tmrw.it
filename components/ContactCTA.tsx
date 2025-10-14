"use client";

import { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "../lib/analytics";

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackEvent("CTA Submit", {
      cta: "Contact",
      name: formData.get("name") ?? "",
    });
  };

  return (
    <section id="contact" className="section-padding py-24 sm:py-32" aria-labelledby="contact-heading">
      <motion.div
        className="rounded-3xl border border-electricBlue/20 bg-electricBlue/5 p-8 shadow-glow sm:p-10"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
        viewport={shouldReduceMotion ? undefined : { once: true }}
        style={{ willChange: shouldReduceMotion ? undefined : "transform" }}
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-electricBlue/80">Contact</p>
            <h2 id="contact-heading" className="text-2xl font-semibold sm:text-3xl">
              Start with a 30-minute strategy session.
            </h2>
            <p className="text-base text-offwhite/70 sm:text-lg">
              Share a challenge you&apos;re exploring and we&apos;ll respond with a tailored agenda for your team.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit} aria-label="Request a strategy session">
            <div>
              <label htmlFor="name" className="text-sm text-offwhite/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Alex Chen"
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-offwhite/10 bg-graphite/80 px-4 py-3 text-offwhite placeholder:text-offwhite/30 focus:border-electricBlue/60 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-offwhite/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-offwhite/10 bg-graphite/80 px-4 py-3 text-offwhite placeholder:text-offwhite/30 focus:border-electricBlue/60 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="notes" className="text-sm text-offwhite/70">
                What should we focus on?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Agent roadmap, integration questions, evaluation setup..."
                className="mt-1 w-full rounded-xl border border-offwhite/10 bg-graphite/80 px-4 py-3 text-offwhite placeholder:text-offwhite/30 focus:border-electricBlue/60 focus:outline-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-electricBlue px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-electricBlue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electricBlue"
            >
              Send request
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
