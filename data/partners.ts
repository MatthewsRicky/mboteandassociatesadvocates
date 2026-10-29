export type Partner = {
  slug: string;
  name: string;
  title: string;
  biography: string;
  qualifications?: string[];
  areasOfPractice?: string[];
  image?: string;
  biographyPending?: boolean;
};

export const managingPartner: Partner = {
  slug: "mary-mbote-muhati",
  name: "Mary Mbote Muhati",
  title: "Managing Partner",
  image: "/team/who-mbote.jpg",
  biography:
    "Mbote M. Muhati was admitted to the Roll of Advocates in 2019. Upon admission she was employed by FIDA-Kenya, Christine Kipsang & Associate Advocates and later practised law in the firm of Polo Kawere Advocates as an associate. She left the said firm and established Mbote & Associates Advocates in 2019. She has a wide experience in Mediation, Consultancy, Corporate and Business law, Conveyance, Constitutional Law, personal injury litigation, insurance law and practice.",
  qualifications: ["Bachelor of Laws & Postgraduate Diploma in Law"],
  areasOfPractice: [
    "Arbitration",
    "Consultancy",
    "Mediation",
    "Insurance Law",
    "Insolvency Law",
    "Intellectual Property Law",
    "Technology Law",
    "E-Commerce Law",
    "Corporate Law",
    "Commercial Litigation",
    "Constitutional Law",
  ],
};

export const otherPartners: Partner[] = [
  {
    slug: "sharon-mulomi-odongo",
    name: "Sharon Mulomi Odongo",
    title: "Partner",
    biography:
      "Mrs Odongo joined the firm in 2019. She previously practised in the firm of Nyangito & Associates Advocates. She has experience in conveyance law, Commercial law, industrial and employment law and litigation. She is also a Masters Candidate at Dalian Maritime University. Academic & Professional Qualifications • Bachelor of Laws • Postgraduate Diploma in Law Professional Affiliations • Law Society of Kenya • East Africa Law Society Areas of Practice • Commercial Law • Land Law • Civil Litigation • Environmental Law • Conveyance • Employment Law • Industrial Law.",
    biographyPending: true,
  },
  {
    slug: "larry-ayiti-mulomi",
    name: "Larry Ayiti Mulomi",
    title: "Partner",
    biography:
      "holder of an LL. B degree and a member of the Law Society of Kenya. Mr. Larry Ayiti Mulomi was admitted to the Roll of Advocates in 2015. Upon admission he was employed with the firm of Letangule & Company Advocates and then worked at The Presidents Delivery unit on various positions, he has a wealth of experience acquired from both the public and private sector. He later joined the firm of Mbote & Associates Advocates as a partner. Mr. Larry Ayiti Mulomi brings to the firm expertise in strategic management, conveyance law and practice, corporate governance, public procurement law, intellectual property law, insurance law and practice and communication law. Academic & Professional Qualifications • Bachelor of Laws • Postgraduate Diploma in Law • Advocate of the High Court of Kenya Professional Affiliations • Law Society of Kenya • East Africa Law Society Areas of Practice • Corporate Law • Corporate Governance • Communication & Technology Law • Insurance Law • Conveyance • Commercial Litigation • Procurement Law",
    biographyPending: true,
  },
  {
    slug: "warren-bunyali-ayiego",
    name: "Warren Bunyali Ayiego",
    title: "Partner",
    biography:
      "Mr. WARREN AYIEGO BUNYALI started his practice at Mbote & Associates Advocates in August 2022 where he had the opportunity to handle complex cases on behalf of the individual, corporate and various statutory bodies. Thereafter in 2014 he joined the firm of Marende Birir & Co Advocates where he has been a tremendous asset in human resource. He is currently head of the Litigation Department. He is well experienced in general litigation, family and commercial law among others areas. Academic & Professional Qualifications • Bachelor of Laws • Postgraduate Diploma in Law Professional Affiliations • Law Society of Kenya • East Africa Law Society Areas of Practice • Insurance law • Litigation • Banking Law • Family Law • Commercial Law • Judicial Review • Land Law • Criminal Law • Sports law",
    biographyPending: true,
  },
];
