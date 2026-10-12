import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}