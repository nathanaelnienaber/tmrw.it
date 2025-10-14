"use client";

import { motion } from "framer-motion";
import { ContextSection } from "../components/ContextSection";
import { ContactCTA } from "../components/ContactCTA";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { OfferingsSection } from "../components/OfferingsSection";
import { PhilosophySection } from "../components/PhilosophySection";
import { ProcessSection } from "../components/ProcessSection";
import { ProofSection } from "../components/ProofSection";

export default function Home() {
  return (
    <motion.main
      className="flex min-h-screen flex-col gap-4 scroll-smooth"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0.9 }, visible: { opacity: 1 } }}
    >
      <HeroSection />
      <ContextSection />
      <OfferingsSection />
      <ProofSection />
      <ProcessSection />
      <PhilosophySection />
      <ContactCTA />
      <Footer />
    </motion.main>
  );
}
