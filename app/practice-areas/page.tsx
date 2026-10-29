import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import PracticeAreaCard from "@/components/practice-areas/PracticeAreaCard";
import { practiceAreas } from "@/data/practice-areas";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore the legal services offered by Mbote & Associates Advocates, covering litigation, corporate and business law, banking and finance, insurance, property, and consultancy.",
  alternates: {
    canonical: "/practice-areas",
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary)] py-20 text-white sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Our Legal Services
            </p>

            <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Practice Areas
            </h1>

            <div className="my-7 h-px w-20 bg-[var(--color-accent)]" />

            <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore the areas of legal practice served by {firm.name}. Our
              practice areas cover a range of legal matters for individuals,
              businesses, and organisations.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Areas of Focus
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[var(--color-primary)] sm:text-4xl">
              Legal services and areas of practice
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              Review the services listed under each practice area to identify
              the type of legal assistance relevant to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
            {practiceAreas.map((practiceArea, index) => (
              <PracticeAreaCard
                key={practiceArea.slug}
                practiceArea={practiceArea}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 border border-[var(--color-border)] bg-[var(--color-background)] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Contact Our Firm
              </p>

              <h2 className="font-serif text-3xl leading-tight text-[var(--color-primary)] sm:text-4xl">
                Have a legal enquiry?
              </h2>

              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                Get in touch with our firm to discuss your enquiry and the legal
                assistance you may require.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-3 bg-[var(--color-primary)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
