"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "../lib/analytics";

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const notes = (formData.get("notes") ?? "").toString().trim();

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, notes }),
      });

      if (!response.ok) {
        let errorMessage = "Something went wrong. Please try again.";
        try {
          const data = (await response.json()) as { error?: string };
          if (data?.error) {
            errorMessage = data.error;
          }
        } catch {
          // Ignore JSON parsing errors and fall back to default message.
        }
        throw new Error(errorMessage);
      }

      trackEvent("CTA Submit", {
        cta: "Contact",
        name,
      });

      setStatus("success");
      setErrorMessage(null);
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send your request right now. Please try again later.",
      );
    }
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
            <div className="space-y-2">
              <button
                type="submit"
                className="w-full rounded-full bg-electricBlue px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-electricBlue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electricBlue disabled:cursor-not-allowed disabled:bg-electricBlue/60"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send request"}
              </button>
              <p className="text-sm text-offwhite/70" aria-live="polite" role="status">
                {status === "success" && "Thanks for reaching out! We'll be in touch soon."}
                {status === "error" && errorMessage}
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
