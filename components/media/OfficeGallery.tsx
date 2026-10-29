"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";

import Container from "@/components/layout/Container";
import ImageLightbox from "@/components/media/ImageLightBox";
import { officeGallery } from "@/data/gallery";

export default function OfficeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + officeGallery.length) % officeGallery.length;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % officeGallery.length;
    });
  }, []);

  return (
    <>
      <section className="bg-[var(--color-background)] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Inside the Firm
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl">
                Our Office
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Explore the office environment of Mbote & Associates Advocates
                through this collection of photographs.
              </p>
            </div>

            <p className="text-sm text-[var(--color-muted)]">
              {officeGallery.length} photographs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {officeGallery.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger image: ${image.title}`}
                className={`group relative block w-full overflow-hidden bg-white text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${
                  index === 0
                    ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[420px]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 66vw"
                      : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <span className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/70 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white sm:p-5">
                  <span className="font-serif text-lg sm:text-xl">
                    {image.title}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/50 bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[var(--color-primary)]">
                    <Expand size={17} aria-hidden="true" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      <ImageLightbox
        images={officeGallery}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </>
  );
}
