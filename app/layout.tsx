import type { Metadata } from "next";
import "./globals.css";

import { ptSans, orbitron } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Static Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSans.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
