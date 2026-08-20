import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AKWAIBOM DESIGN SUMMIT 26 | Dec 2–3, 100% Free",
  description: "Join the world's leading AkwaIbom interior design summit. 90 world-class speakers, 10,000+ global design executives, 16 hours of content. 100% Online, 100% Free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}