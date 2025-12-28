import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/app/header";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Safety & Security Systems",
  description: "Safety and Security in Web, App and Systems",
  publisher: "V3S",
  applicationName: "Next",
  generator: "Next.js",
  keywords: [
    "Security",
    "Safety",
    "Systems",
    "Safety Systems",
    "Security Systems",
    "Safety & Security Systems",
  ],
  authors: { name: "Julian Schumacher", url: "https://juliandevelops.com" },
  creator: "V3S Developmnet",
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
    title: "Virtual Safety & Security Systems",
    description: "Safety and Security in Web, App and Systems",
    creator: "@v3sofficial",
    images: [],
  },
  openGraph: {
    title: "Virtual Safety & Security Systems",
    description: "Safety and Security in Web, App and Systems",
    url: "https://v3s.tech",
    siteName: "Virtual Safety & Security Systems",
    images: [],
    locale: "en_US",
    type: "website",
    countryName: "germany",
    emails: ["support@v3s.tech"],
  },
  category: "development",
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
      <body className={[inter.className].join(" ")}>
        <div className="relative">
          <Header></Header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
