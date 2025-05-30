"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/ui/bento-grid-2";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "./ui/container-text-flip";

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
            <div className="inline-block bg-gray-800/70 backdrop-blur-sm text-sm text-gray-200 px-4 py-1.5 rounded-full mb-6 shadow-md">
              Introducing GrayBay Solutions
            </div>
            <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 break-words">
              {headlineStart}
              <ContainerTextFlip
                words={flipWords}
                className="text-orange-500 dark:text-orange-400"
              />
              {headlineEnd}
            </div>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              {subheading}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection(primaryCtaLink)}
              className="w-full sm:w-auto bg-white text-black px-8 py-3.5 text-base font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              {primaryCtaText}
            </button>
            {secondaryCtaText && secondaryCtaLink && (
              <button
                onClick={() => scrollToSection(secondaryCtaLink)}
                className="w-full sm:w-auto bg-neutral-800/80 hover:bg-neutral-700/90 backdrop-blur-sm text-white px-8 py-3.5 text-base font-semibold rounded-lg border border-neutral-700 shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                {secondaryCtaText}
              </button>
            )}
          </motion.div>
        </div>

        {/* Right Column: Infographic Bento Grid */}
        <motion.div
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <BentoGridThirdDemo />
        </motion.div>
      </div>

      {/* Bottom Row: Technology Logos */}
      <motion.div
        className="relative z-10 w-full max-w-screen-xl mx-auto mt-20 lg:mt-28 flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-10 md:gap-x-12 gap-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      >
        {techLogos.map((tech) => (
          <div
            key={tech.name}
            className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 transform hover:scale-105 duration-300"
            title={tech.name}
          >
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={tech.width}
              height={tech.height}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
