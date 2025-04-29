import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gray Bay Solutions | Digital Business Solutions",
  description: "Your premier partner in navigating the digital landscape...",
  openGraph: {
    title: "Gray Bay Solutions | Digital Business Solutions",
    description: "Your premier partner in navigating the digital landscape...",
    url: "https://www.volaresolutions.tech",
    siteName: "Gray Bay Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
