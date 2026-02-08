import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BananaFeet - Sustainable Shoes Made from Real Bananas",
  description: "Discover eco-friendly footwear crafted from 100% organic bananas. Comfortable, sustainable, and stylish banana shoes for conscious shoppers.",
  keywords: "banana shoes, sustainable footwear, eco-friendly shoes, organic shoes, banana leather",
  openGraph: {
    title: "BananaFeet - Sustainable Shoes Made from Real Bananas",
    description: "Discover eco-friendly footwear crafted from 100% organic bananas.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bananafeet.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
