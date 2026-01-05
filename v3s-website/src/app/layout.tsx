import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import React from "react";
import Header from "@/app/header";
import Footer from "./footer";
import "./globals.css";
import Link from "next/link";


const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "V3S Cyber Security",
  description: "Operational cyber defense for individuals, enterprises, and public-sector missions.",
  publisher: "V3S",
  applicationName: "Next",
  generator: "Next.js",
  keywords: [
    "Cyber Security",
    "Threat Intelligence",
    "Password Manager",
    "Risk Prevention",
    "Security Operations",
    "Critical Infrastructure",
  ],
  authors: { name: "V3S Security Group", url: "https://v3s.tech" },
  creator: "V3S Security Group",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://v3s.tech"),
  twitter: {
    card: "summary_large_image",
    title: "V3S Cyber Security",
    description: "Operational cyber defense for individuals, enterprises, and public-sector missions.",
    creator: "@v3sofficial",
    images: [],
  },
  openGraph: {
    title: "V3S Cyber Security",
    description: "Operational cyber defense for individuals, enterprises, and public-sector missions.",
    url: "https://v3s.tech",
    siteName: "V3S Cyber Security",
    images: [],
    locale: "en_US",
    type: "website",
    countryName: "germany",
    emails: ["support@v3s.tech"],
  },
  category: "security",
  referrer: "no-referrer",
  verification: {
    google: "", // TODO: Add Google Verification
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[manrope.variable, spaceGrotesk.variable].join(" ")}>
        <div className="maintenance-banner">
          <div className="maintenance-banner-card">
            <p>
              Information: This website is not active yet, the same applies to all contents of this page.
              This is a pure placeholder and demo for possible upcoming changes and content.
              If there is an issue, please contact us via <Link href="mailto:support@v3s.tech">email</Link>.
            </p>
          </div>
        </div>
        <div className="site-blur">
          <div className="page">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
