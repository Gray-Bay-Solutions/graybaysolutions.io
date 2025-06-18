"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AutomatedBookingSystemCard = () => {
  const bookedDays = [4, 11, 12, 18, 25];
  const dayVariants = {
    initial: { scale: 1 },
    hover: (i: number) => ({
      scale: [1, 1.4, 1],
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };
  const glowVariants = {
    initial: { opacity: 1 },
    hover: {
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: [-1, 1, -1, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  const todayVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] relative flex-col items-center justify-center"
    >
      {/* Animated Background Glow */}
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-neutral-500/20 blur-3xl"
      />

      {/* Calendar UI Wireframe */}
      <div className="w-full h-full border border-neutral-700 rounded-xl flex flex-col bg-black/20 overflow-hidden p-2 space-y-2">
        {/* Header */}
        <div className="flex justify-between items-center px-1">
          <div className="h-3 w-16 bg-neutral-700 rounded-full" />
          <div className="flex space-x-1">
            <motion.div
              variants={arrowVariants}
              className="h-5 w-5 rounded-md bg-neutral-800 border border-neutral-700"
            />
            <motion.div
              variants={arrowVariants}
              transition={{ delay: 0.1 }}
              className="h-5 w-5 rounded-md bg-neutral-800 border border-neutral-700"
            />
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1.5 flex-1">
          {[...Array(35)].map((_, i) => {
            const isBooked = bookedDays.includes(i);
            const isToday = i === 9;
            const isFaded = i < 3 || i > 30;
            const motionProps = isToday ? { variants: todayVariants } : {};

            return (
              <motion.div
                key={i}
                {...motionProps}
                className={cn(
                  "h-full w-full rounded-md border border-neutral-700/60 flex items-center justify-center",
                  "bg-neutral-800/50",
                  isToday && "bg-blue-500/30 border-blue-500",
                  isFaded && "opacity-30"
                )}
              >
                {isBooked && (
                  <motion.div
                    variants={dayVariants}
                    custom={bookedDays.indexOf(i)}
                    className="h-1.5 w-1.5 bg-red-400 rounded-full"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
