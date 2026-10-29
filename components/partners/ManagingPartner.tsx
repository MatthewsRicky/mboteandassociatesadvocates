import Image from "next/image";

import Container from "@/components/layout/Container";
import { managingPartner } from "@/data/partners";

export default function ManagingPartner() {
  const partner = managingPartner;

  return (
    <section
      aria-labelledby="managing-partner-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden bg-[var(--color-background)] lg:mx-0">
            {partner.image ? (
              <Image
                src={partner.image}
                alt={`Portrait of ${partner.name}`}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-[var(--color-muted)]">
                  Portrait coming soon
                </span>
              </div>
            )}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {partner.title}
            </p>

            <h1
              id="managing-partner-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl"
            >
              {partner.name}
            </h1>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              <p>{partner.biography}</p>
            </div>

            {partner.qualifications?.length ? (
              <div className="mt-9 border-t border-[var(--color-border)] pt-6">
                <h2 className="font-serif text-xl font-semibold text-[var(--color-primary)] sm:text-2xl">
                  Academic &amp; Professional Qualifications
                </h2>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                  {partner.qualifications.map((qualification) => (
                    <li key={qualification} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      />
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {partner.areasOfPractice?.length ? (
              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <h2 className="font-serif text-xl font-semibold text-[var(--color-primary)] sm:text-2xl">
                  Areas of Practice
                </h2>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {partner.areasOfPractice.map((area) => (
                    <li
                      key={area}
                      className="border border-[var(--color-border)] px-3 py-1.5 text-xs leading-5 text-[var(--color-text)] sm:text-sm"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
