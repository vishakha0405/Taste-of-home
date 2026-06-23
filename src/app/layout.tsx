import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Taste of Home",
    template: "%s | Taste of Home",
  },
  description: "Preserve family recipes and memories forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
>
  <body
    className={`${playfair.variable} ${poppins.variable}`}
  >
    {children}
  </body>
</html>
  );
}
