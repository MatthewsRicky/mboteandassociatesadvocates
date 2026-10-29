import Link from "next/link";

import { firm } from "@/data/firm";
import Container from "@/components/layout/Container";
import Image from "next/image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${firm.name} homepage`}
            className="min-w-0"
          >
            <div className="flex gap-6">
              <Image
                src={"/brand/logo.png"}
                alt="Company Logo"
                width={60}
                height={20}
              />
              <div className="flex flex-col">
                <span className="block font-serif text-xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-2xl">
                  Mbote & Associates
                </span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-xs">
                  Advocates
                </span>
              </div>
            </div>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden shrink-0 bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] sm:inline-flex"
          >
            Contact Us
          </Link>

          <Link
            href="/contact"
            className="shrink-0 bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white sm:hidden"
          >
            Enquire
          </Link>
        </div>
      </Container>
    </header>
  );
}
