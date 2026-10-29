import Link from "next/link";

import type { PracticeArea } from "@/data/practice-areas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faBuilding,
  faLandmark,
  faShieldHalved,
  faHouse,
  faUsers,
  faFileInvoiceDollar,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  "fa-scale-balanced": faScaleBalanced,
  "fa-building": faBuilding,
  "fa-landmark": faLandmark,
  "fa-shield-halved": faShieldHalved,
  "fa-house": faHouse,
  "fa-users": faUsers,
  "fa-file-invoice-dollar": faFileInvoiceDollar,
  "fa-comments": faComments,
} as const;

type PracticeAreaCardProps = {
  practiceArea: PracticeArea;
  index: number;
};

export default function PracticeAreaCard({
  practiceArea,
  index,
}: PracticeAreaCardProps) {
  return (
    <article className="group flex h-full flex-col border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-background)] transition-colors duration-300 group-hover:border-[var(--color-accent)]">
          <FontAwesomeIcon
            icon={icons[practiceArea.icon as keyof typeof icons]}
            aria-hidden="true"
            className="size-6 text-[var(--color-accent)]"
          />
        </div>

        <span className="font-serif text-sm text-[var(--color-accent)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 font-serif text-xl font-medium leading-snug text-[var(--color-primary)] sm:text-2xl">
        {practiceArea.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
        {practiceArea.shortDescription}
      </p>

      {practiceArea.services.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-4">
          {practiceArea.services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-2 text-sm leading-6 text-[var(--color-text)]"
            >
              <span
                aria-hidden="true"
                className="mt-[9px] size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
              />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-7">
        <Link
          href={`/practice-areas/${practiceArea.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]"
          aria-label={`Learn more about ${practiceArea.title}`}
        >
          Explore service
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
