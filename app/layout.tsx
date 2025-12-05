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
  title: "Christmas & New Year Greeting Card",
  description:
    "A magical interactive Christmas and New Year greeting card with music, snowflakes, and personalized wishes.",
  keywords: [
    "Christmas",
    "New Year",
    "greeting card",
    "holiday card",
    "interactive greeting",
    "snowflakes",
    "framer motion",
    "Next.js",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",

  metadataBase: new URL("https://christmasandnewyear.vercel.app/"),

  openGraph: {
    title: "🎄 Christmas & New Year Greeting Card 🎅",
    description:
      "Enjoy a personalized Christmas & New Year greeting card with music, animations, and festive effects!",
    url: "https://christmasandnewyear.vercel.app/",
    siteName: "Christmas Greeting",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Christmas & New Year Greeting Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "🎄 Christmas & New Year Greeting Card 🎅",
    description:
      "A festive interactive greeting card with snowflakes, music, and animations!",
    images: ["/og.png"],
    creator: "@yourhandle",
  },

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

