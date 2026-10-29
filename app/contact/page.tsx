import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, FileText, ShieldCheck } from "lucide-react";

import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mbote & Associates Advocates to make an enquiry about legal services in Kenya.",
  alternates: {
    canonical: "/contact",
  },
};

const enquiryGuidance = [
  {
    icon: FileText,
    title: "Describe your matter",
    description:
      "Select the closest matter category and provide a brief summary of the assistance you are seeking.",
  },
  {
    icon: ShieldCheck,
    title: "Share information carefully",
    description:
      "Only provide information needed for an initial enquiry. Avoid sending confidential documents through this form.",
  },
  {
    icon: Clock3,
    title: "Await a response",
    description:
      "The firm can review your enquiry and determine the appropriate next steps.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--color-primary)] py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Get in Touch
            </p>

            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              How can we assist you?
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Contact {firm.shortName} to enquire about our legal services.
              Share a brief overview of your matter and the firm can consider
              how best to direct your enquiry.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-background)] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.75fr)] lg:gap-16">
            <div className="border border-[var(--color-border)] bg-white p-5 sm:p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
                  Send an Enquiry
                </h2>

                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  Fields marked with an asterisk are required. Please provide
                  accurate contact details so the firm can identify your
                  enquiry.
                </p>
              </div>

              <ContactForm />
            </div>

            <aside className="space-y-8 lg:pt-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Before You Submit
                </p>

                <h2 className="mt-3 font-serif text-2xl font-semibold text-[var(--color-primary)]">
                  A few things to know
                </h2>

                <div className="mt-6 space-y-6">
                  {enquiryGuidance.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-border)] bg-white text-[var(--color-accent)]">
                          <Icon size={20} aria-hidden="true" />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-[var(--color-primary)]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-[var(--color-border)] pt-6">
                <h2 className="font-serif text-xl font-semibold text-[var(--color-primary)]">
                  Explore our services
                </h2>

                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  Learn more about the firm's practice areas before submitting
                  your enquiry.
                </p>

                <Link
                  href="/practice-areas"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  View Practice Areas
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
