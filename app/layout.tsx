import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "tmrw — Practical AI for real work",
  description: "tmrw is an AI systems consultancy helping teams design, build, and operate pragmatic AI agents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-graphite text-offwhite">
      <body className={`${inter.variable} font-sans bg-graphite text-offwhite`}>{children}</body>
    </html>
  );
}
