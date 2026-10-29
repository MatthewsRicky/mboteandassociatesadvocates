import type { Metadata } from "next";

import ManagingPartner from "@/components/partners/ManagingPartner";
import PartnerCards from "@/components/partners/PartnerCards";

export const metadata: Metadata = {
  title: "The Partners",
  description:
    "Meet the managing partner and partners of Mbote & Associates Advocates.",
  alternates: {
    canonical: "/about/the-partners",
  },
};

export default function ThePartnersPage() {
  return (
    <main>
      <ManagingPartner />
      <PartnerCards />
    </main>
  );
}
