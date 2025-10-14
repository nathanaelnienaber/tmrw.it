"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="section-padding py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-2 border-t border-offwhite/10 pt-6 text-sm text-offwhite/60 md:flex-row md:items-center md:justify-between">
        <motion.p
          className="flex items-center gap-2"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-electricBlue/40 text-electricBlue"
            whileInView={{ rotate: 360 }}
            viewport={{ once: true }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
          >
            t
          </motion.span>
          <span>tmrw — Practical AI for real work.</span>
        </motion.p>
        <p>© {new Date().getFullYear()} tmrw systems. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
