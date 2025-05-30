"use client";

import React, { useState, useEffect, useId, useRef, useCallback } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const textRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const updateWidthForWord = useCallback(() => {
    if (textRef.current && words.length > 0 && words[currentWordIndex]) {
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    } else {
      setWidth(undefined);
    }
  }, [currentWordIndex, words]);

  useEffect(() => {
    if (hasMounted) {
      updateWidthForWord();
    }
  }, [hasMounted, currentWordIndex, updateWidthForWord]);

  useEffect(() => {
    if (!hasMounted || words.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [hasMounted, words.length, interval]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width: hasMounted ? width : undefined }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db] dark:shadow-[inset_0_-1px_#404040,inset_0_0_0_1px_#404040,_0_4px_8px_#262626]",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words.length > 0 &&
            words[currentWordIndex] &&
            words[currentWordIndex].split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: index * 0.02,
                }}
              >
                {letter}
              </motion.span>
            ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
