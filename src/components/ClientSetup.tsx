"use client";

import React, { useEffect, ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { monaSans } from "@/lib/fonts"; // Import only monaSans

// --- Main Client Setup Component ---
interface ClientSetupProps {
  children: ReactNode;
}

const ClientSetup: React.FC<ClientSetupProps> = ({ children }) => {
  // Apply Mona Sans font on initial load
  useEffect(() => {
    // Ensure the html tag has the variable for potential CSS variable usage
    if (
      monaSans.className &&
      !document.documentElement.classList.contains(monaSans.className)
    ) {
      document.documentElement.classList.add(monaSans.className);
    }
    // Ensure the body tag has the className for direct styling
    if (
      monaSans.className &&
      !document.body.classList.contains(monaSans.className)
    ) {
      document.body.classList.add(monaSans.className);
    }
    // Set the generic CSS variable for consistent font usage via Tailwind or custom CSS
    document.documentElement.style.setProperty(
      "--font-current-theme",
      `var(${monaSans.style.fontFamily})`
    );
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      {/* DebugFontToggle is removed */}
    </ThemeProvider>
  );
};

export default ClientSetup;
