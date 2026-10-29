"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { primaryNavigation } from "@/data/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  function closeMenu() {
    setIsOpen(false);
    setExpandedItem(null);
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setExpandedItem(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={toggleMenu}
        className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {isOpen ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation-panel"
          className="absolute inset-x-0 top-full z-50 border-b border-[var(--color-border)] bg-white shadow-lg"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto px-5 py-5 sm:px-8"
          >
            <ul className="divide-y divide-[var(--color-border)]">
              {primaryNavigation.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expandedItem === item.href;

                return (
                  <li key={item.href} className="py-1">
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-submenu-${item.label
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          onClick={() =>
                            setExpandedItem((current) =>
                              current === item.href ? null : item.href,
                            )
                          }
                          className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left text-base font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                        >
                          {item.label}

                          <ChevronDown
                            size={18}
                            aria-hidden="true"
                            className={`shrink-0 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <ul
                            id={`mobile-submenu-${item.label
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="mb-3 ml-3 border-l-2 border-[var(--color-accent)] pl-4"
                          >
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={closeMenu}
                                  className="flex min-h-11 items-center py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex min-h-12 items-center justify-between gap-4 py-3 text-base font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      >
                        {item.label}
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                          className="shrink-0 text-[var(--color-muted)]"
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              Contact the Firm
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
