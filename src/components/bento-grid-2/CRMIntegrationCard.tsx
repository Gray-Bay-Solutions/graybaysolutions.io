"use client";
import { motion } from "framer-motion";
import React from "react";

export const CRMIntegrationCard = () => {
  const backCard = {
    initial: {
      rotate: -8,
      x: 0,
      y: 0,
    },
    hover: {
      rotate: -12,
      x: -35,
      y: 5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const middleCard = {
    initial: {
      rotate: 4,
      x: 0,
      y: 0,
    },
    hover: {
      rotate: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const frontCard = {
    initial: {
      rotate: 10,
      x: 0,
      y: 0,
    },
    hover: {
      rotate: 12,
      x: 35,
      y: 5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] relative flex-col items-center justify-center"
    >
      {/* Static Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 blur-3xl" />

      {/* CRM UI Wireframe - a stack of customer profiles */}
      <div className="w-full h-full border border-neutral-700 rounded-xl flex bg-black/20 overflow-hidden items-center justify-center p-4">
        <div className="relative h-32 w-48">
          {/* Card 1 (Back) */}
          <motion.div
            variants={backCard}
            className="absolute top-0 left-8 w-36 h-24 rounded-lg bg-neutral-800 border border-neutral-700 shadow-md"
          />

          {/* Card 2 (Middle) */}
          <motion.div
            variants={middleCard}
            className="absolute top-2 left-6 w-36 h-24 rounded-lg bg-neutral-800/80 border border-neutral-700/80 shadow-md"
          />

          {/* Card 3 (Front) */}
          <motion.div
            variants={frontCard}
            className="absolute top-4 left-4 w-36 h-24 rounded-lg bg-neutral-800/60 border border-neutral-700/60 shadow-md p-3 space-y-2"
          >
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-purple-400/50" />
              <div className="h-2.5 w-full bg-neutral-700 rounded-full" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-full bg-neutral-700 rounded-full" />
              <div className="h-2 w-4/5 bg-neutral-700 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
