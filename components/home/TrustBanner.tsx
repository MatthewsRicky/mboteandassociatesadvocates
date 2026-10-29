import Image from "next/image";

import Container from "@/components/layout/Container";

const institutionalLogos = [
  {
    name: "Law Society of Kenya",
    src: "/brand/lsk-logo-white.png",
    width: 180,
    height: 90,
  },
  {
    name: "The Judiciary",
    src: "/brand/judiciary-logo.png",
    width: 180,
    height: 90,
  },
  {
    name: "Office of the Attorney General and Department of Justice",
    src: "/brand/ag-logo.jpeg",
    width: 220,
    height: 90,
  },
];

export default function TrustBanner() {
  return (
    <section
      aria-labelledby="trust-banner-heading"
      className="border-y border-[var(--color-border)] bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Our Approach
          </p>

          <h2
            id="trust-banner-heading"
            className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl"
          >
            Strategic, Efficient &amp; Appropriate Legal Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            We strive to understand our clients’ business objectives and find
            appropriate legal solutions.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-px w-20 bg-[var(--color-accent)]"
          />
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8 sm:mt-14 sm:pt-10">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Professional and institutional resources
          </p>

          <div className="mt-8 grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-12">
            {institutionalLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex min-h-20 w-full max-w-xs items-center justify-center px-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 25vw, 220px"
                />
                <span className="uppercase font-semibold text-sm ml-6">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
