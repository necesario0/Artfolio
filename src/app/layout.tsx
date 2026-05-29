import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Artist Portfolio | Artfolio v2",
  description: "A professional portfolio showcasing fine art and digital illustrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
