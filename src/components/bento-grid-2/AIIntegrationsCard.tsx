"use client";
import { motion } from "framer-motion";
import React from "react";
import GeminiIcon from "../logos/GeminiIcon";
import AnthropicIcon from "../logos/AnthropicIcon";
import OpenAIIcon from "../logos/OpenAIIcon";

export const AIIntegrationsCard = () => {
  const cardContainerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: (i: number) => ({
      x: i === 0 ? -20 : i === 2 ? 20 : 0,
      rotate: i === 0 ? 5 : i === 2 ? -5 : 0,
      scale: i === 1 ? 0.95 : 1,
    }),
    hover: {
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
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

  const iconVariants = {
    hover: {
      y: -8,
      scale: 1.1,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
      },
    },
  };

  const cardContent = [
    {
      icon: <GeminiIcon className="w-12 h-12 mb-2" />,
      name: "Gemini",
      model: "Latest Model: PaLM 2",
    },
    {
      icon: (
        <AnthropicIcon className="w-10 h-10 mb-2 text-neutral-700 dark:text-neutral-200" />
      ),
      name: "Anthropic",
      model: "Latest Model: Claude 3",
    },
    {
      icon: (
        <OpenAIIcon className="w-12 h-12 mb-2 text-neutral-700 dark:text-neutral-200" />
      ),
      name: "OpenAI",
      model: "Latest Model: GPT-4",
    },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] relative flex-col items-center justify-center"
    >
      {/* Animated Background Glow */}
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-green-500/20 to-lime-500/20 blur-3xl"
      />

      <div className="w-full h-full border border-neutral-700 rounded-xl flex bg-black/20 overflow-hidden items-center justify-center p-4 relative">
        <motion.div
          variants={cardContainerVariants}
          initial="initial"
          whileHover="hover"
          className="flex flex-1 w-full h-full flex-row items-center justify-center space-x-2"
        >
          {cardContent.map((card, i) => (
            <motion.div
              key={card.name}
              custom={i}
              variants={cardVariants}
              className={`h-full relative ${
                i === 1 ? "z-20" : ""
              } w-1/3 rounded-2xl p-4 flex flex-col items-center justify-around`}
            >
              <motion.div variants={iconVariants}>{card.icon}</motion.div>
              <p className="sm:text-lg text-md text-center font-bold text-neutral-700 dark:text-neutral-200">
                {card.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {card.model}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
