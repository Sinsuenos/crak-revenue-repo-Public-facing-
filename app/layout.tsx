import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cantina Virtual — Offers",
  description: "Public directory of available offers.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
