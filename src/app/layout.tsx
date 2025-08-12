import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIDORO",
  description:
    "Discover budget-friendly deals, unique handmade goods, and second-hand treasures — all verified and trusted with secure escrow payments.",
  icons: {
    icon: "/assets/BIDORO-icon-img.jpg",
  },
  openGraph: {
    title: "BIDORO",
    description:
      "Discover budget-friendly deals, unique handmade goods, and second-hand treasures — all verified and trusted with secure escrow payments.",
    url: "https://your-domain.com",
    siteName: "BIDORO",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: "BIDORO Marketplace Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIDORO",
    description:
      "Discover budget-friendly deals, unique handmade goods, and second-hand treasures — all verified and trusted with secure escrow payments.",
    images: ["https://your-domain.com/og-image.jpg"], // Same as OG image
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
