import dynamic from "next/dynamic";
import { ContextSection } from "../components/ContextSection";
import { ContactCTA } from "../components/ContactCTA";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { PhilosophySection } from "../components/PhilosophySection";
import { SectionSkeleton } from "../components/SectionSkeleton";

const OfferingsSection = dynamic(
  () =>
    import("../components/OfferingsSection").then((mod) => ({
      default: mod.OfferingsSection,
    })),
  {
    loading: () => <SectionSkeleton title="Offerings" />,
    ssr: false,
  }
);

const ProofSection = dynamic(
  () =>
    import("../components/ProofSection").then((mod) => ({
      default: mod.ProofSection,
    })),
  {
    loading: () => <SectionSkeleton title="Proof" />,
    ssr: false,
  }
);

const ProcessSection = dynamic(
  () =>
    import("../components/ProcessSection").then((mod) => ({
      default: mod.ProcessSection,
    })),
  {
    loading: () => <SectionSkeleton title="Process" />,
    ssr: false,
  }
);

export const runtime = "edge";
export const revalidate = 3600;

export default function Home() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col gap-4">
      <HeroSection />
      <ContextSection />
      <OfferingsSection />
      <ProofSection />
      <ProcessSection />
      <PhilosophySection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
