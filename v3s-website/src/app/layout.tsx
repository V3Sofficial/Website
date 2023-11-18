import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'V3S',
  description: 'Virtual Safety & Security Systems',
  applicationName: 'V3S Website',
  publisher: 'Julian Schumacher',
  generator: 'Next.js',
  //referrer: 'origin-when-cross-origin',
  keywords: ['Security', 'Safety', 'Virtual', 'Safety Systems', 'Security Systems', 'Web Security', 'Web Safety'],
  authors: [{ name: 'Julian Schumacher', url: 'https://julianschumacher.dev' }],
  creator: 'Julian Schumacher',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
    url: true,
    date: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}