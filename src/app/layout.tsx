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
    icon: "https://blogger.googleusercontent.com/img/a/AVvXsEhOPIEDR6l5Z8hd4Mh6nMxGEqkZFAFgQXYRMqd0XJGhvlgr3Q533PzNW7Uc7DVpnfS9BYIyxWheLCWQg7YRkGCIq2C-MyEVFAyDeFQo0NpbcMKym5pkHJ9TLN8RAHczcaxpz82x9WWcakvaJjYitrVjzNohBl7HxK1_tjsMtt3LQ8LPKd7UR2YPYBkFtzk",
  },
  openGraph: {
    title: "BIDORO",
    description:
      "Discover budget-friendly deals, unique handmade goods, and second-hand treasures — all verified and trusted with secure escrow payments.",
    url: "https://bidoro.africa",
    siteName: "BIDORO",
    images: [
      {
        url: "https://blogger.googleusercontent.com/img/a/AVvXsEhOPIEDR6l5Z8hd4Mh6nMxGEqkZFAFgQXYRMqd0XJGhvlgr3Q533PzNW7Uc7DVpnfS9BYIyxWheLCWQg7YRkGCIq2C-MyEVFAyDeFQo0NpbcMKym5pkHJ9TLN8RAHczcaxpz82x9WWcakvaJjYitrVjzNohBl7HxK1_tjsMtt3LQ8LPKd7UR2YPYBkFtzk", // Replace with actual hosted image
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
    images: ["https://blogger.googleusercontent.com/img/a/AVvXsEhOPIEDR6l5Z8hd4Mh6nMxGEqkZFAFgQXYRMqd0XJGhvlgr3Q533PzNW7Uc7DVpnfS9BYIyxWheLCWQg7YRkGCIq2C-MyEVFAyDeFQo0NpbcMKym5pkHJ9TLN8RAHczcaxpz82x9WWcakvaJjYitrVjzNohBl7HxK1_tjsMtt3LQ8LPKd7UR2YPYBkFtzk"], // Same as OG image
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
