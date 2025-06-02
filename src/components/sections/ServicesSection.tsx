"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceItem } from "@/types"; // Import types
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"; // Added import
import { cn } from "@/lib/utils"; // Added import for cn
import dynamic from "next/dynamic"; // Import dynamic
import { BentoGridThirdDemo } from "../ui/bento-grid-2";

// Dynamically import Lottie component with SSR turned off
const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  // You can add a loading component here if needed
  // loading: () => <p>Loading animation...</p>
});

// Placeholder Lottie animation data - REPLACE with your actual animation data or URL
const placeholderLottieAnimation = null; // Set to null as the previous URL was invalid

// Define the props for the ServicesSection component
interface ServicesSectionProps {
  services: ServiceItem[];
}

const itemClassNames = [
  "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2", // Item 0: Website Development
  "md:col-span-1 lg:col-span-1", // Item 1: SEO
  "md:col-span-1 lg:col-span-1", // Item 2: Automated Booking
  "md:col-span-2 lg:col-span-1", // Item 3: CRM Integration
  "md:col-span-1 lg:col-span-1", // Item 4: AI-Powered Solutions
  "md:col-span-1 lg:col-span-1", // Item 5: Mobile App Development
  "md:col-span-2 lg:col-span-1", // Item 6: Custom Software Solutions
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="services" className="pt-20 sm:pt-24 md:pt-28">
      <div className="sm:pt-40 md:pt-44 lg:pt-48 container w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-orange-400 border-orange-400/30"
          >
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            We deliver cutting-edge digital solutions tailored to your business
            needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <BentoGridThirdDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
