import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { LoadingOverlay } from "../components/LoadingOverlay";
import { HighContrastToggle } from "../components/HighContrastToggle";
import { BackToTopButton } from "../components/BackToTopButton";
import { TelemetryObserver } from "../components/TelemetryObserver";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tmrw.it"),
  title: {
    default: "tmrw – Practical AI for Real Work",
    template: "%s | tmrw",
  },
  description:
    "tmrw is an AI systems consultancy that designs, builds, and operates production-ready AI agents for real businesses.",
  openGraph: {
    title: "tmrw – Practical AI for Real Work",
    description:
      "tmrw is an AI systems consultancy that designs, builds, and operates production-ready AI agents for real businesses.",
    url: "https://tmrw.it",
    siteName: "tmrw",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of tmrw's AI consultancy hero scene",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tmrw – Practical AI for Real Work",
    description:
      "tmrw is an AI systems consultancy that designs, builds, and operates production-ready AI agents for real businesses.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://tmrw.it",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: {
    "built-with": "Next.js + ChatGPT + tmrw",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E0E",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-graphite text-offwhite`} suppressHydrationWarning>
      <body className="font-sans bg-graphite text-offwhite">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <TelemetryObserver />
        <LoadingOverlay />
        <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-3">
          <HighContrastToggle />
        </div>
        {children}
        <BackToTopButton />
        <Script
          strategy="afterInteractive"
          defer
          data-domain="tmrw.it"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
