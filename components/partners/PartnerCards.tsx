"use client";

import { useCallback, useState } from "react";
import { Plus } from "lucide-react";

import Container from "@/components/layout/Container";
import PartnerProfileModal from "@/components/partners/PartnerProfileModal";
import { otherPartners, type Partner } from "@/data/partners";

export default function PartnerCards() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const closeModal = useCallback(() => {
    setSelectedPartner(null);
  }, []);

  return (
    <>
      <section
        aria-labelledby="other-partners-heading"
        className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Our Leadership
            </p>

            <h2
              id="other-partners-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl"
            >
              Meet the Partners
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Learn more about the partners behind the firm. Select a profile to
              read more about each partner.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {otherPartners.map((partner, index) => (
              <button
                key={partner.slug}
                type="button"
                onClick={() => setSelectedPartner(partner)}
                aria-label={`View profile of ${partner.name}, ${partner.title}`}
                className="group relative flex min-h-64 flex-col justify-between overflow-hidden border border-[var(--color-border)] bg-white p-6 text-left transition-colors duration-300 hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:min-h-72 sm:p-7"
              >
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Partner 0{index + 2}
                </span>

                <div className="relative z-10 mt-auto pt-20 transition-transform duration-300 group-hover:translate-y-2 group-focus-visible:translate-y-2">
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-[var(--color-primary)] sm:text-3xl">
                    {partner.name}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    {partner.title}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 translate-y-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-white opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus-visible:-translate-y-1/2 group-focus-visible:opacity-100"
                >
                  <Plus
                    size={25}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-90 group-focus-visible:rotate-90"
                  />
                </span>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
                />
              </button>
            ))}
          </div>
        </Container>
      </section>

      <PartnerProfileModal partner={selectedPartner} onClose={closeModal} />
    </>
  );
}
