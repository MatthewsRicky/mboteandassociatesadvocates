"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

export default function HomeHero() {
  const entrance = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <Container>
        <div className="grid min-h-[580px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <motion.div
            {...entrance}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] sm:text-sm">
              Mbote &amp; Associates Advocates
            </p>

            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              Strategic, Efficient &amp; Appropriate Legal Services
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Explore our legal services, learn about our team, and get in touch
              to discuss your legal enquiry.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Contact the Firm
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-accent)]"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-[var(--color-border)] bg-white p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-5 border border-[var(--color-accent)]/35 sm:inset-8"
              />

              <div className="relative max-w-sm text-center">
                <div
                  aria-hidden="true"
                  className="mx-auto mb-6 h-px w-16 bg-[var(--color-accent)]"
                />

                <p className="font-serif text-3xl leading-snug text-[var(--color-primary)] sm:text-4xl">
                  Professional service.
                  <br />
                  Principled counsel.
                </p>

                <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Mbote &amp; Associates Advocates
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
