"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

import { primaryNavigation } from "@/data/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-primary)] transition-colors hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation-panel"
          className="absolute inset-x-0 top-full z-50 border-t border-[var(--color-border)] bg-white shadow-lg"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl px-5 py-5 sm:px-8"
          >
            <ul className="divide-y divide-[var(--color-border)]">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center justify-between py-3 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 text-[var(--color-accent)]"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Contact the Firm
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
