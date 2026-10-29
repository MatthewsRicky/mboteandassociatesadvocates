import type { Metadata } from "next";
import Link from "next/link";

import HomeHero from "@/components/home/HomeHero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Mbote & Associates Advocates, explore our legal services, and contact the firm about your legal enquiry.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            The Firm
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--color-primary)] sm:text-4xl">
            Legal services built around your needs
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
            Learn more about the firm, explore its areas of practice, and meet
            the professionals who provide its legal services.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex border-b border-[var(--color-accent)] pb-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
          >
            Discover the firm
          </Link>
        </div>
      </section>
    </>
  );
}
