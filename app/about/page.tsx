import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about Mbote & Associates Advocates, our leadership, legal practice focus, and aspirations for providing strategic legal services.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[var(--color-background)] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-10 max-w-3xl lg:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] sm:text-sm">
              About the Firm
            </p>

            <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              Strategic legal services grounded in your objectives
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Discover who we are, the areas of law that shape our practice, and
              our aspirations for the clients we serve.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
            {/* Firm image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-white">
              <Image
                src="/about/who-mbote2.jpg"
                alt="Mbote & Associates Advocates"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 42vw, 480px"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-4 border border-white/60 sm:inset-6"
              />
            </div>

            {/* Firm information */}
            <div className="space-y-10 sm:space-y-12">
              <section aria-labelledby="who-we-are-heading">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-8 w-1 shrink-0 bg-[var(--color-accent)]"
                  />

                  <div>
                    <h2
                      id="who-we-are-heading"
                      className="font-serif text-2xl font-medium text-[var(--color-primary)] sm:text-3xl"
                    >
                      Who We Are
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                      Mbote &amp; Associates Advocates is a law firm established
                      in 2019, strategically located in Diani. The firm operates
                      under the leadership and management of partners Mary Mbote
                      Muhati, Sharon Mulomi Odongo, Larry Ayiti Mulomi, and
                      Warren Bunyali Ayiego.
                    </p>

                    <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                      We strive to understand our clients’ business objectives
                      and find appropriate legal solutions that support and
                      promote those objectives.
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="our-focus-heading">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-8 w-1 shrink-0 bg-[var(--color-accent)]"
                  />

                  <div>
                    <h2
                      id="our-focus-heading"
                      className="font-serif text-2xl font-medium text-[var(--color-primary)] sm:text-3xl"
                    >
                      Our Focus
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                      Our main areas of focus include consultancy, arbitration,
                      corporate law, corporate governance, land law,
                      constitutional and public law, commercial law, and other
                      areas of legal practice.
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="our-aspirations-heading">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-8 w-1 shrink-0 bg-[var(--color-accent)]"
                  />

                  <div>
                    <h2
                      id="our-aspirations-heading"
                      className="font-serif text-2xl font-medium text-[var(--color-primary)] sm:text-3xl"
                    >
                      Our Aspirations
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                      We aspire to be the leading law firm in the region in the
                      provision of strategic legal services to our clients. We
                      believe our clients should receive sound legal advice
                      promptly and efficiently, enabling them to operate in
                      compliance with the law.
                    </p>

                    <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                      We therefore work with our clients to assess legal risks
                      and identify potential loopholes that could lead to
                      unnecessary litigation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Calls to action */}
              <div className="flex flex-col gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  Contact the Firm
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>

                <a
                  href="/documents/mbote-associates-profile.pdf"
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-3 border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-medium text-[var(--color-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Download Firm Profile
                  <ArrowDownToLine aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
