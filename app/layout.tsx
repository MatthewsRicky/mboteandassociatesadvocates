import type { Metadata, Viewport } from "next";

import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  metadataBase: new URL(firm.website),
  title: {
    default: `${firm.name} | Legal Counsel in Kenya`,
    template: `%s | ${firm.shortName}`,
  },
  description: firm.description,
  applicationName: firm.name,
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#202a3a",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-KE">
      <body className="min-h-screen antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
