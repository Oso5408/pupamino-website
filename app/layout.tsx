import type { Metadata } from "next";
import { Lexend, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Pupamino - The New Standard for Pet Care",
  description: "Elevated pet grooming products made with natural ingredients, thoughtful formulations, and superior performance. Because our pets deserve elevated care, with no compromises.",
  keywords: ["pet care", "dog grooming", "natural pet products", "pet shampoo", "dog wash"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lexend.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
