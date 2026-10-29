import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import OfficeGallery from "@/components/media/OfficeGallery";

export const metadata: Metadata = {
  title: "Media & Office Gallery",
  description: "Explore office photographs of Mbote & Associates Advocates.",
  alternates: {
    canonical: "/media",
  },
};

export default function MediaPage() {
  return (
    <main>
      <section className="bg-[var(--color-primary)] py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Media
            </p>

            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              A Closer Look at Our Office
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Take a look inside Mbote & Associates Advocates through our office
              photo collection.
            </p>
          </div>
        </Container>
      </section>

      <OfficeGallery />
    </main>
  );
}
