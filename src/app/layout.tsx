import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Allura,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";
import ToastProvider from "@/components/providers/ToastProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Taste of Home",
  description: "Preserving recipes and memories across generations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${allura.variable} ${cormorant.variable} font-inter`}
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}