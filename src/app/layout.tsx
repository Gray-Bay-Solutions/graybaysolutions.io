// No "use client" here - this is a Server Component

import type { Metadata } from "next";
// React and context imports are removed from here
import { monaSans } from "@/lib/fonts"; // Import monaSans
import "./globals.css";
// ThemeProvider and DebugFontToggle are moved to ClientSetup
import ClientSetup from "@/components/ClientSetup";
import { StagewiseToolbar } from "@stagewise/toolbar-next";

// --- Font Definitions (exported for ClientSetup) ---
// All font definitions and fontMap are removed from here

// --- Metadata (can now be exported) ---
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
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// --- Root Layout ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Default font class applied here */}
      <body className={monaSans.className}>
        <StagewiseToolbar
          config={{
            plugins: [], // Add your custom plugins here
          }}
        />
        <ClientSetup>{children}</ClientSetup>
      </body>
    </html>
  );
}

// BodyStyler, DebugFontProvider, useDebugFont are moved to ClientSetup.tsx
