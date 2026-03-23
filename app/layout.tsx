import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Yang's Notes",
  description: "Founder of DumplingAI. Content about AI, dev workflows, growth, and startups.",
  keywords: ["AI", "development", "startups", "growth", "workflows"],
  authors: [{ name: "Yang" }],
  creator: "Yang",
  openGraph: {
    title: "Yang's Notes",
    description: "Founder of DumplingAI. Content about AI, dev workflows, growth, and startups.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yang's Notes",
    description: "Founder of DumplingAI. Content about AI, dev workflows, growth, and startups.",
    creator: "@yangpten",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
