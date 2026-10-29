import Link from "next/link";

import Container from "@/components/layout/Container";
import { firm } from "@/data/firm";

const footerLinks = [
  { label: "About the Firm", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 md:gap-16 lg:py-16">
          <div className="max-w-md">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight"
            >
              {firm.shortName}
            </Link>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
              Advocates
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
              {firm.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/15 py-5">
          <p className="text-xs leading-6 text-white/65">
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
