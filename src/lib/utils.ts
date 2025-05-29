import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
  const element = document.getElementById(
    id.startsWith("#") ? id.substring(1) : id
  );
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns the top of the element to the top of the scrollable parent
      // inline: "nearest", // Use if horizontal scrolling is also a concern
    });
  }
};
