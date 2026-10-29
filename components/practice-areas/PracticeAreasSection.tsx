"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Container from "@/components/layout/Container";
import PracticeAreaCard from "@/components/practice-areas/PracticeAreaCard";
import { practiceAreas } from "@/data/practice-areas";

export default function PracticeAreasSection() {
  return (
    <section
      id="practice-areas"
      aria-labelledby="practice-areas-heading"
      className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] sm:text-sm">
              Our Expertise
            </p>

            <h2
              id="practice-areas-heading"
              className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl"
            >
              Legal services tailored to your needs
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              Explore our areas of practice and discover how our legal services
              can support your personal and business needs.
            </p>
          </div>

          <Link
            href="/practice-areas"
            className="inline-flex w-fit shrink-0 items-center gap-2 border-b border-[var(--color-accent)] pb-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
          >
            View all practice areas
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {practiceAreas.map((practiceArea, index) => (
            <motion.div
              key={practiceArea.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (index % 4) * 0.07,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <PracticeAreaCard practiceArea={practiceArea} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 border border-[var(--color-border)] bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="font-serif text-xl font-medium text-[var(--color-primary)] sm:text-2xl">
              Need assistance with a legal matter?
            </h3>

            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              Contact our firm to discuss your enquiry and determine the
              appropriate next steps.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-12 shrink-0 items-center justify-center bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] sm:mt-0"
          >
            Contact the Firm
          </Link>
        </div>
      </Container>
    </section>
  );
}
