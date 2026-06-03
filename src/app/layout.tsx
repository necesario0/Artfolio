import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Navbar from "@/components/Navbar";
import { adleryPro, adlerySwash, theSeasons } from "./fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "chilovesyuu",
  description: "A professional portfolio showcasing fine art and digital illustrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${adleryPro.variable} ${adlerySwash.variable} ${theSeasons.variable}`}>
        <Suspense fallback={<Navbar commissionsOpen={true} />}>
          <NavbarWrapper />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
