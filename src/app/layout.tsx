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
  title: "Cure Beyond Science | CBTDA Pure Wellness",
  description: "Premium cannabis-derived terpenes and organic CBD tinctures. High-potency, THC-free botanical intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-onyx text-silk`}
      >
        <div className="matte-overlay" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}