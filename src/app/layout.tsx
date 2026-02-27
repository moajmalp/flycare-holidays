import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyContact from "@/components/StickyContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Flycare Holidays | Your Favorite Travel Partner",
    template: "%s | Flycare Holidays"
  },
  description: "Modern travel agency dedicated to crafting premium experiences and unforgettable memories around the globe. Book your dream vacation with India's most trusted travel partner.",
  keywords: ["travel agency", "holidays", "itinerary", "Kashmir", "Manali", "Vietnam", "Kerala", "Flycare"],
  openGraph: {
    title: "Flycare Holidays | Your Favorite Travel Partner",
    description: "Modern travel agency for your dream vacations. Tailored itineraries and premium service.",
    type: "website",
    locale: "en_US",
    url: "https://flycareholidays.com",
    siteName: "Flycare Holidays",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flycare Holidays",
    description: "Modern travel agency for your dream vacations.",
  },
  icons: {
    icon: "/favicon-flycare.ico",
    apple: "/logo.png",
  },
  // Performance optimizations
  metadataBase: new URL("https://flycareholidays.com"),
  alternates: {
    canonical: "/",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <StickyContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
