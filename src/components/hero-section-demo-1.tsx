"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/ui/bento-grid-2";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { ScrollDownIndicator } from "@/components/ui/ScrollDownIndicator";

interface HeroSectionOneProps {
  headlineStart: string;
  flipWords: string[];
  headlineEnd?: string;
  subheading: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  techLogos?: Array<{
    name: string;
    logo: string;
    width: number;
    height: number;
  }>;
}

export default function HeroSectionOne({
  headlineStart,
  flipWords,
  headlineEnd = "",
  subheading,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText = "View Our Work",
  secondaryCtaLink = "#portfolio",
  techLogos = [
    { name: "Next.js", logo: "/logos/nextjs.svg", width: 80, height: 30 },
    { name: "React", logo: "/logos/react.svg", width: 80, height: 30 },
    {
      name: "TailwindCSS",
      logo: "/logos/tailwindcss.svg",
      width: 100,
      height: 30,
    },
    { name: "Vercel", logo: "/logos/vercel.svg", width: 80, height: 25 },
    { name: "Supabase", logo: "/logos/supabase.svg", width: 80, height: 30 },
  ],
}: HeroSectionOneProps) {
  return (
    <div className="relative text-white min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* Left Column: Text Content & CTAs */}
        <div className="lg:w-1/2 lg:pr-10 xl:pr-16 text-center lg:text-left mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 px-5 py-2 rounded-full mb-6 shadow-sm text-sm">
              Introducing{" "}
              <span className="text-orange-500 dark:text-orange-400 font-bold pl-1">
                GrayBaySolutions
              </span>
            </div>
            <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 break-words text-black dark:text-white">
              {headlineStart}
              <span>
                <ContainerTextFlip
                  words={flipWords}
                  className="text-orange-500 dark:text-orange-400"
                />
              </span>
              {headlineEnd}
            </div>
            <div className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto lg:mx-0">
              {subheading}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection(primaryCtaLink)}
              className="w-full sm:w-auto bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600 px-8 py-3.5 text-base font-semibold rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
            >
              {primaryCtaText}
            </button>
            {secondaryCtaText && secondaryCtaLink && (
              <button
                onClick={() => scrollToSection(secondaryCtaLink)}
                className="w-full sm:w-auto bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:border-neutral-800 dark:hover:bg-neutral-700 px-8 py-3.5 text-base font-semibold rounded-lg shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
              >
                {secondaryCtaText}
              </button>
            )}
          </motion.div>
        </div>

        {/* Right Column: Infographic Bento Grid */}
        <motion.div
          className="lg:w-1/2 mt-40 lg:mt-0 flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <BentoGridThirdDemo />
        </motion.div>
      </div>
      <ScrollDownIndicator />
    </div>
  );
}
