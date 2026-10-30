"use client";

import { MessageCircle } from "lucide-react";

const phoneNumber = "+254 726 076 741"; // Replace with the firm's WhatsApp number, including country code.

const message =
  "Hello Mbote & Associates Advocates, I would like to make a legal enquiry.";

export default function WhatsAppButton() {
  if (!phoneNumber) return null;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mbote & Associates Advocates on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-8 sm:right-8 sm:size-16"
    >
      <MessageCircle
        aria-hidden="true"
        className="size-7 sm:size-8"
        strokeWidth={2.2}
      />

      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
