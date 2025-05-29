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
    <section
      id="portfolio"
      className="py-10 sm:py-12 md:py-20 bg-neutral-900/90 dark:bg-black/90 backdrop-blur-sm"
    >
      <HeroParallax products={products} showDefaultHeader={false} />
    </section>
  );
};

export default PortfolioSection;
