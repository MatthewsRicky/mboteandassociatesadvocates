import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";

import Container from "@/components/layout/Container";

export default function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-title"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introductory panel */}
          <div className="relative">
            <div className="flex size-16 items-center justify-center border border-[var(--color-accent)]/40 bg-[var(--color-background)]">
              <Scale
                aria-hidden="true"
                className="size-7 text-[var(--color-accent)]"
                strokeWidth={1.4}
              />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              About the Firm
            </p>

            <h2
              id="about-preview-title"
              className="mt-4 max-w-md font-serif text-3xl leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl"
            >
              Legal experience. Professional commitment.
            </h2>

            <div className="mt-7 h-px w-20 bg-[var(--color-accent)]" />
          </div>

          {/* Firm overview */}
          <div>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9">
              Mbote &amp; Associates Advocates is a law firm established in
              2019, strategically located in Diani. The firm operates under the
              leadership and management of partners Mary Mbote Muhati, Sharon
              Mulomi Odongo, Larry Ayiti Mulomi and Warren Bunyali Ayiego.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9">
              Its areas of legal practice include consultancy, arbitration,
              corporate law, corporate governance, land law, constitutional and
              public law, and commercial law, among others.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[var(--color-accent)] pb-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              Discover the firm
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
