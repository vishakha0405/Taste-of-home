import type { Metadata } from "next";
import {
  Playfair_Display,
  Nunito,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Taste of Home",
  description: "Preserving recipes and memories across generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${playfair.variable} ${nunito.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}