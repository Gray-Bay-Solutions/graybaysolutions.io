"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { scrollToSection } from "@/lib/utils"; // Assuming this path is correct
import { NavItem } from "@/types"; // Import type

// Define the type for a navigation item (should match what's in page.tsx)
// interface NavItem { ... } // MOVED TO src/types/index.ts

// Define the props for the Footer component
interface FooterProps {
  navItems: NavItem[];
}

export const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer className="py-10 sm:py-12 bg-neutral-900/90 dark:bg-black/90 backdrop-blur-sm border-t border-neutral-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Graybay Solutions
            </h3>
            <p className="text-neutral-400 mb-4">
              Building elegant software solutions that help your business grow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-neutral-400 hover:text-orange-400 transition-colors duration-200"
                    onClick={(e) => {
                      if (item.link.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(item.link);
                      }
                      // If it's an absolute link like "/", let the default behavior occur
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-400">
              {/* TODO: Replace with actual contact details or make dynamic */}
              <li>info@graybaysolutions.io</li>
              {/* TODO: Add AI phone number bot */}
              {/* <li>(786) 470-0520</li> */}
              <li>Indialantic, FL</li>
            </ul>
          </div>
        </div>
        <Separator className="bg-neutral-800/50 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} Graybay Solutions. All rights
            reserved.
          </p>
          <p className="text-neutral-500 mt-2 md:mt-0">
            Built with passion and modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
