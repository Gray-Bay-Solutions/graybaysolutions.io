"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react"; // Using lucide-react icons
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button"; // Assuming you have a shadcn/ui Button
// If you don't have a Button component, we can style a raw button or import one.

export function ThemeToggleButton() {
  const { setTheme, theme } = useTheme();

  // Ensure the component only renders on the client where `theme` is available
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    // For a button, rendering a disabled or simple placeholder might be best
    return (
      <Button variant="outline" size="icon" disabled className="w-9 h-9">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className="w-9 h-9" // Explicit size for consistency
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </Button>
  );
}

// More advanced version with a dropdown for Light, Dark, System
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"; // Assuming shadcn/ui DropdownMenu

// export function ThemeToggleDropdown() {
//   const { setTheme } = useTheme();
//   const [mounted, setMounted] = React.useState(false);
//   React.useEffect(() => setMounted(true), []);

//   if (!mounted) {
// return <Button variant="outline" size="icon" disabled className="w-9 h-9"><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon" className="w-9 h-9">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
