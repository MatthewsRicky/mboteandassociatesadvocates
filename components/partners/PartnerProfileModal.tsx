"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import type { Partner } from "@/data/partners";

type PartnerProfileModalProps = {
  partner: Partner | null;
  onClose: () => void;
};

export default function PartnerProfileModal({
  partner,
  onClose,
}: PartnerProfileModalProps) {
  useEffect(() => {
    if (!partner) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [partner, onClose]);

  if (!partner) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-primary)]/65 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="partner-modal-heading"
        className="relative w-full max-w-2xl overflow-y-auto border border-[var(--color-border)] bg-white p-6 shadow-2xl sm:p-10 lg:p-12"
        style={{ maxHeight: "min(85vh, 720px)" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close partner profile"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-background)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <p className="pr-12 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {partner.title}
        </p>

        <h2
          id="partner-modal-heading"
          className="mt-4 pr-8 font-serif text-3xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl"
        >
          {partner.name}
        </h2>

        <div className="mt-6 h-px w-16 bg-[var(--color-accent)]" />

        <p className="mt-6 text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
          {partner.biography}
        </p>

        {partner.biographyPending ? (
          <p className="mt-6 border-l-2 border-[var(--color-accent)] bg-[var(--color-background)] px-4 py-3 text-xs leading-5 text-[var(--color-muted)]">
            Profile content is awaiting confirmation and should be replaced
            before this page is published.
          </p>
        ) : null}
      </section>
    </div>
  );
}
