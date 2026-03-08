import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layouts/mainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx (or RootLayout)
export const metadata: Metadata = {
  title: "Norley's Authentic Columbian Street Food",
  description: "Columbian Restaurant",
  openGraph: {
    type: "website",
    url: "https://norley.karanroushan.com",
    title: "Norley's Authentic Columbian Street Food",
    description: "Order the best meals from Norley's, fast and fresh!",
    images: [
      {
        url: "/image/sitelogo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norley's – Delicious Food Delivered",
    description: "Order the best meals from Norley's, fast and fresh!",
    images: ["/image/sitelogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
