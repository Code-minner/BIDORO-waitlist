// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bidoro",
  description: "E-commerce and bidding platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 🔹 Navbar can go here */}
        {children}
        {/* 🔹 Footer can go here */}
      </body>
    </html>
  );
}
