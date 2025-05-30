"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ParallaxProduct } from "@/types";

// Define the type for a single product for HeroParallax
// interface ParallaxProduct { ... } // MOVED TO src/types/index.ts

// Define the props for the PortfolioSection component
interface PortfolioSectionProps {
  products: ParallaxProduct[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  products,
}) => {
  return (
    <section id="portfolio" className="pt-12 sm:pt-16 md:pt-20 w-full">
      <HeroParallax products={products} />
    </section>
  );
};

export default PortfolioSection;
