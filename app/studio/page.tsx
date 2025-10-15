import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../../components/Footer";

const projects = [
  { name: "Times Tales Go!", description: "Mobile app • ad-supported" },
  { name: "clapback", description: "Social app • in development" },
  { name: "simple therapy", description: "Social app • in development" },
  { name: "tmrw-audit", description: "Infrastructure security • CLI" },
  { name: "n2n.work", description: "Consulting • available for hire" },
  { name: "fathom", description: "Corporate website • web" },
  { name: "attuned counseling", description: "Therapist website • web" },
];

export const metadata: Metadata = {
  title: "Studio TMRW",
  description:
    "Independent studio building digital products for tomorrow with precision, clarity and calm confidence.",
};

export default function StudioPage() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col gap-24">
      <section className="section-padding py-24" aria-labelledby="studio-heading">
        <div className="grid-layout items-center gap-12">
          <div className="md:col-span-7 lg:col-span-6 space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-electricBlue/80">studio.tmrw.it</p>
            <h1 id="studio-heading" className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              TMRW's R&D Studio
            </h1>
            <p className="max-w-2xl text-lg text-offwhite/70 sm:text-xl">
              Internal independent R&D studio building digital products for tomorrow with precision, clarity and calm confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://studio.tmrw.it"
                className="inline-flex items-center justify-center rounded-full border border-electricBlue/60 bg-electricBlue/10 px-6 py-3 text-sm font-medium text-offwhite transition hover:bg-electricBlue/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electricBlue"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit studio.tmrw.it
              </a>
              <span className="text-sm text-offwhite/60">Explore the full studio site.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="projects-heading">
        <div className="flex flex-col gap-10">
          <div className="grid-layout items-end">
            <div className="md:col-span-6 space-y-4">
              <h2 id="projects-heading" className="text-3xl font-semibold sm:text-4xl">
                Projects
              </h2>
              <p className="max-w-xl text-lg text-offwhite/70">
                A sampling of the products, platforms and collaborations currently in flight.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="card-hover flex h-full flex-col justify-between rounded-2xl border border-offwhite/10 bg-graphite/60 p-8"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-offwhite">{project.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-offwhite/60">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-16" aria-labelledby="about-heading">
        <div className="grid-layout gap-12">
          <div className="md:col-span-7 lg:col-span-6 space-y-6">
            <h2 id="about-heading" className="text-3xl font-semibold sm:text-4xl">
              About
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-offwhite/70">
              <p>
                We craft apps, tools, platforms and experiments that balance delightful consumer experiences with resilient,
                secure infrastructure.
              </p>
              <p>
                From ad-supported mobile products to long-term product partnerships, we bring systems thinking, technical warmth
                and product craft to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pb-24" aria-labelledby="contact-heading">
        <div className="grid-layout gap-12 rounded-3xl border border-offwhite/10 bg-graphite/60 p-10">
          <div className="md:col-span-6 space-y-4">
            <h2 id="contact-heading" className="text-3xl font-semibold sm:text-4xl">
              Contact
            </h2>
            <p className="text-lg text-offwhite/70">
              New projects, collaborations or press — email <a href="mailto:hello@tmrw.it" className="text-offwhite underline decoration-electricBlue/60 underline-offset-4 transition hover:text-electricBlue">hello@tmrw.it</a>.
            </p>
            <p className="text-lg text-offwhite/70">
              Security questions? Reach us at <a href="mailto:security@tmrw.it" className="text-offwhite underline decoration-electricBlue/60 underline-offset-4 transition hover:text-electricBlue">security@tmrw.it</a>.
            </p>
          </div>
          <div className="md:col-span-6 flex items-end justify-end">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-offwhite/20 px-6 py-3 text-sm font-medium text-offwhite transition hover:border-electricBlue/60 hover:text-electricBlue"
            >
              Back to tmrw.it
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
