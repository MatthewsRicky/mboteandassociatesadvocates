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

import type { PracticeArea } from "@/data/practice-areas";

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
  const icon = icons[practiceArea.icon as keyof typeof icons];

  return (
    <article className="group flex h-full flex-col border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-xl sm:p-9 lg:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-16 shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-background)] transition-colors duration-300 group-hover:border-[var(--color-accent)] sm:size-[72px]">
          <FontAwesomeIcon
            icon={icon}
            aria-hidden="true"
            className="size-7 text-[var(--color-accent)] sm:size-8"
          />
        </div>

        <span className="font-serif text-base text-[var(--color-accent)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h2 className="mt-7 font-serif text-2xl font-medium leading-snug text-[var(--color-primary)] sm:mt-8 sm:text-3xl">
        {practiceArea.title}
      </h2>

      <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
        {practiceArea.shortDescription}
      </p>

      {practiceArea.services.length > 0 && (
        <ul className="mt-7 space-y-3 border-t border-[var(--color-border)] pt-6">
          {practiceArea.services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 text-sm leading-7 text-[var(--color-text)] sm:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
              />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
