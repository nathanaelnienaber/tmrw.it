"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

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
  const lineRef = useRef<HTMLDivElement | null>(null);
  const networkRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const line = lineRef.current;
      const network = networkRef.current;
      const stepEls = stepRefs.current.filter((step): step is HTMLDivElement => Boolean(step));
      const nodeEls = nodeRefs.current.filter((node): node is HTMLSpanElement => Boolean(node));

      if (!line || stepEls.length < steps.length || nodeEls.length < steps.length) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: true,
          pin: true,
          anticipatePin: 0.8,
        },
      });

      timeline
        .from(".process-intro", { opacity: 0, y: 40, duration: 0.8 })
        .fromTo(
          line,
          { scaleY: 0 },
          { scaleY: 0.33, duration: 1.1 },
          "-=0.2"
        )
        .from(stepEls[0], { opacity: 0, y: 40, duration: 0.8 }, "<")
        .to(
          nodeEls[0],
          { backgroundColor: "#4AB2F7", boxShadow: "0 0 18px rgba(74,178,247,0.55)", duration: 0.6 },
          "<"
        )
        .to(nodeEls[0], { scale: 1.05, duration: 0.4, yoyo: true, repeat: 1, ease: "power1.inOut" }, "<")
        .fromTo(
          line,
          { scaleY: 0.33 },
          { scaleY: 0.66, duration: 1 },
          ">-0.2"
        )
        .from(stepEls[1], { opacity: 0, y: 40, duration: 0.8 }, "<")
        .to(
          nodeEls[1],
          { backgroundColor: "#4AB2F7", boxShadow: "0 0 18px rgba(74,178,247,0.45)", duration: 0.6 },
          "<"
        )
        .fromTo(
          line,
          { scaleY: 0.66 },
          { scaleY: 1, duration: 1 },
          ">-0.2"
        )
        .from(stepEls[2], { opacity: 0, y: 40, duration: 0.8 }, "<")
        .to(
          nodeEls,
          {
            backgroundColor: "#4AB2F7",
            boxShadow: "0 0 24px rgba(74,178,247,0.55)",
            duration: 0.8,
            stagger: 0.1,
          },
          "<"
        )
        .to(network, { opacity: 0.8, duration: 1.2 }, "<0.1");
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="section-padding py-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid-layout items-start">
        <div className="process-intro md:col-span-5 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-amber/80">Process</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Design → Build → Operate</h2>
          <p className="text-lg text-offwhite/70">
            A scroll-guided walkthrough of how we move from discovery to resilient operations.
          </p>
        </div>
        <div className="relative md:col-span-7">
          <div
            ref={networkRef}
            className="absolute inset-0 -z-10 rounded-3xl border border-electricBlue/10 bg-electricBlue/5 opacity-0 blur-xl"
          />
          <div className="relative border-l border-offwhite/10 pl-10">
            <div
              ref={lineRef}
              className="absolute left-[-1px] top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-electricBlue via-electricBlue/60 to-amber"
              style={{ willChange: "transform" }}
            />
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={step.name}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative will-change-transform"
                >
                  <span
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                    className="absolute -left-10 flex h-7 w-7 items-center justify-center rounded-full border border-electricBlue/40 bg-graphite text-xs font-semibold text-electricBlue transition-colors"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-semibold">{step.name}</h3>
                  <p className="mt-3 text-offwhite/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
