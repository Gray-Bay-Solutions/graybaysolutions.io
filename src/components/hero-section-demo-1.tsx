"use client";

import { motion } from "motion/react";
import { scrollToSection } from "@/lib/utils";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

interface HeroSectionOneProps {
  headline: string;
  subheading: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  heroImageUrl?: string;
}

export default function HeroSectionOne({
  headline,
  subheading,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText = "View Our Work",
  secondaryCtaLink = "#portfolio",
  heroImageUrl = "/placeholder-hero-image.jpg",
}: HeroSectionOneProps) {
  // Prepare words for TypewriterEffect
  const headlineWords = headline.split(" ").map((word, index) => {
    if (index < 2) {
      // Assuming "Digital Transformation" are the first two words
      return { text: word, className: "text-orange-500 dark:text-orange-400" };
    }
    return { text: word }; // Default styling will be applied from TypewriterEffect or its container
  });

  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-80px)] flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-16">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>
      <div className="px-4 text-center w-full max-w-5xl">
        <TypewriterEffect
          words={headlineWords}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal sm:tracking-tight text-slate-800 dark:text-white mb-10 md:mb-12 break-words"
          cursorClassName="bg-orange-500"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: headline.replace(/ /g, "").length * 0.1 + 1,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto mt-0 max-w-xl text-center text-lg font-normal text-gray-600 md:text-xl dark:text-neutral-300 leading-relaxed mb-10 md:mb-12"
        >
          {subheading}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: headline.replace(/ /g, "").length * 0.1 + 1.3,
            ease: "easeOut",
          }}
          className="relative z-10 mt-0 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <button
            onClick={() => scrollToSection(primaryCtaLink)}
            className="w-full sm:w-auto transform rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-black"
          >
            {primaryCtaText}
          </button>
          {secondaryCtaText && secondaryCtaLink && (
            <button
              onClick={() => scrollToSection(secondaryCtaLink)}
              className="w-full sm:w-auto transform rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:ring-offset-black"
            >
              {secondaryCtaText}
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
