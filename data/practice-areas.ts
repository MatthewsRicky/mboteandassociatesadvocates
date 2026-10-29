export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  services: string[];
  icon: string;
  verificationNote?: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "litigation-services",
    title: "Litigation Services",
    icon: "fa-scale-balanced",
    shortDescription:
      "Legal representation across civil and commercial disputes, admiralty matters, claims and judicial reviews.",
    services: [
      "Civil Law",
      "Commercial Law",
      "Admiralty",
      "Claims",
      "Judicial Reviews",
    ],
  },
  {
    slug: "corporate-business-law",
    title: "Corporate & Business Law",
    icon: "fa-building",
    shortDescription:
      "Legal support for company incorporation, liquidation and transfers.",
    services: ["Incorporation of Companies", "Liquidation", "Transfers"],
  },
  {
    slug: "banking-finance-law",
    title: "Banking & Finance Law",
    icon: "fa-landmark",
    shortDescription:
      "Legal services relating to charges, mortgages, debentures and loan syndication.",
    services: [
      "Registration of Charges",
      "Mortgages & Debentures",
      "Loan Syndication",
    ],
  },
  {
    slug: "insurance-law",
    title: "Insurance Law",
    icon: "fa-shield-halved",
    shortDescription:
      "Assistance with policy documentation, insurance product evaluation and declaratory suits.",
    services: [
      "Drafting of Policy Documents",
      "Evaluation of Insurance Products",
      "Declaratory Suits",
    ],
  },
  {
    slug: "property-law",
    title: "Property Law",
    icon: "fa-house",
    shortDescription:
      "Legal assistance with property sale agreements, registrations, transfers and powers of attorney.",
    services: [
      "Sale Agreements",
      "Registration & Transfers",
      "Registration of Powers of Attorney",
    ],
  },
  {
    slug: "hr-law",
    title: "HR Law",
    icon: "fa-users",
    shortDescription:
      "Trade networks of like-minded companies ensuring a synergy of service at both ends of the shipping process.",
    services: [],
    verificationNote: "Verify the supplied description before publication.",
  },
  {
    slug: "debt-recoveries",
    title: "Debt Recoveries",
    icon: "fa-file-invoice-dollar",
    shortDescription:
      "We carry out various public awareness campaigns together with the community and partners.",
    services: [],
    verificationNote: "Verify the supplied description before publication.",
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    icon: "fa-comments",
    shortDescription:
      "Procurement advisory, dispute resolution and legal opinions on the viability of procurement cases or processes.",
    services: [
      "Procurement Advisory",
      "Dispute Resolution",
      "Legal Opinions on Procurement Cases and Processes",
    ],
  },
];
