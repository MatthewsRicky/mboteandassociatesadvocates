import Link from "next/link";

import AboutDropdown from "@/components/layout/AboutDropdown";
import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import { primaryNavigation } from "@/data/navigation";
import { firm } from "@/data/firm";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white">
      <Container>
        <div className="relative flex min-h-20 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${firm.shortName} — Home`}
            className="shrink-0"
          >
            <span className="block font-serif text-xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-2xl">
              {firm.shortName}
            </span>

            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Advocates
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 md:flex lg:gap-8"
          >
            {primaryNavigation.map((item) =>
              item.children?.length ? (
                <AboutDropdown key={item.href} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              Contact the Firm
            </Link>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
