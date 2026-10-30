"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { primaryNavigation } from "@/data/navigation";

export default function AboutDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutItem = primaryNavigation.find((item) => item.label === "About");
  const children = aboutItem?.children ?? [];

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !dropdownRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="desktop-about-dropdown"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      >
        About
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id="desktop-about-dropdown"
          className="absolute left-0 top-full z-50 mt-4 w-56 border border-[var(--color-border)] bg-white py-2 shadow-lg"
        >
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-sm text-[var(--color-primary)] transition-colors hover:bg-[var(--color-background)] hover:text-[var(--color-accent)] focus-visible:bg-[var(--color-background)] focus-visible:outline-none"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
