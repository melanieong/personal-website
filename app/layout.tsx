import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SiteMotion } from "@/components/site-motion";

export const metadata: Metadata = {
  title: "Melanie Ong | Accountant and Artist",
  description:
    "I’m a builder first and foremost. I am detail oriented and love working with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><a className="skip-link" href="#main">Skip to content</a><SiteMotion />{children}</body>
    </html>
  );
}