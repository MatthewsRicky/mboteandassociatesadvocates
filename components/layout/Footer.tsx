import Link from "next/link";

import Container from "@/components/layout/Container";
import { firm } from "@/data/firm";
import { HomeIcon, PhoneCallIcon, MessageCircleCheckIcon, Globe2Icon } from "lucide-react";
import Image from "next/image";
const footerLinks = [
  { label: "About the Firm", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];


const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 md:gap-16 lg:py-16">
          <div className="max-w-md">
            <Link
              href="/"
              className="flex items-center gap-3 font-serif text-2xl font-semibold tracking-tight"
            >
              <Image
              src={"/brand/logo.png"}
              alt="Main Company Logo"
              width={60}
              height={20} 
              />
              {firm.shortName} Advocates
              
            </Link>

            

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
              {firm.description}
            </p>
          </div>
          <div className="flex flex-col gap-5 text-sm leading-7 text-white/70">
            <h1 className="uppercase text-white font-semibold">
              Location and Contact
            </h1>
            <div className="flex gap-2 items-center">
              <span>
                <HomeIcon />
              </span>
              <p className="wrap">
                Mum’s Plaza 1st Floor Rm No 16, Along Corner Beach Road,
                (Opposite Family Bank),
                P O Box 1435-80400, Diani.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <PhoneCallIcon />
              </span>
              <p>Phone: (254)739 430 649</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <PhoneCallIcon />
              </span>
              <p>Phone: (254) 726 076 741</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <MessageCircleCheckIcon />
              </span>
              <p>info@mboteadvocates.co.ke</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <Globe2Icon />
              </span>
              <p>www.mboteadvocates.co.ke</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/15 py-5">
          <p className="text-xs leading-6 text-white/65">
            © {currentYear} {firm.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
