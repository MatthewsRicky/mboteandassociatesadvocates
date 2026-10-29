"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { GalleryImage } from "@/data/gallery";

type ImageLightboxProps = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: ImageLightboxProps) {
  const image = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose, onPrevious, onNext]);

  if (!image || activeIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-primary)]/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Office photo viewer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white/10 sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white/10 sm:right-6"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="w-full max-w-5xl">
        <div className="relative h-[65vh] min-h-64 w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>

        <div className="mt-5 text-center text-white">
          <p className="font-serif text-xl">{image.title}</p>
          <p className="mt-2 text-sm text-white/60">
            {activeIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
