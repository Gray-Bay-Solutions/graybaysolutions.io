"use client";
import { motion } from "framer-motion";
import { IconSettingsCog } from "@tabler/icons-react";
import React from "react";

export const CustomSoftwareSolutionsCard = () => {
  const nodeVariants = (delay: number) => ({
    initial: {
      scale: 1,
      opacity: 0.7,
    },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: {
        delay,
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  });

  const pathVariants = (delay: number) => ({
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    hover: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  });

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] relative flex-col items-center justify-center"
    >
      {/* Static Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 blur-3xl" />

      {/* Abstract node diagram */}
      <div className="w-full h-full border border-neutral-700 rounded-xl flex flex-col bg-black/20 overflow-hidden items-center justify-center p-4 relative">
        <IconSettingsCog className="absolute w-10 h-10 text-neutral-800 -bottom-2 -right-2 opacity-50" />
        <svg
          width="60%"
          height="60%"
          viewBox="0 0 100 80"
          className="overflow-visible"
        >
          {/* Nodes */}
          <motion.circle
            cx="15"
            cy="40"
            r="6"
            fill="rgba(167, 139, 250, 0.8)"
            variants={nodeVariants(0)}
          />
          <motion.circle
            cx="50"
            cy="20"
            r="6"
            fill="rgba(167, 139, 250, 0.8)"
            variants={nodeVariants(0.2)}
          />
          <motion.circle
            cx="50"
            cy="60"
            r="6"
            fill="rgba(167, 139, 250, 0.8)"
            variants={nodeVariants(0.2)}
          />
          <motion.circle
            cx="85"
            cy="40"
            r="6"
            fill="rgba(167, 139, 250, 0.8)"
            variants={nodeVariants(0.4)}
          />

          {/* Connectors */}
          <motion.path
            d="M 21 40 C 35 40, 35 20, 44 20"
            stroke="rgba(167, 139, 250, 0.5)"
            strokeWidth="1.5"
            fill="none"
            variants={pathVariants(0.1)}
          />
          <motion.path
            d="M 21 40 C 35 40, 35 60, 44 60"
            stroke="rgba(167, 139, 250, 0.5)"
            strokeWidth="1.5"
            fill="none"
            variants={pathVariants(0.1)}
          />
          <motion.path
            d="M 56 20 C 65 20, 65 40, 79 40"
            stroke="rgba(167, 139, 250, 0.5)"
            strokeWidth="1.5"
            fill="none"
            variants={pathVariants(0.3)}
          />
          <motion.path
            d="M 56 60 C 65 60, 65 40, 79 40"
            stroke="rgba(167, 139, 250, 0.5)"
            strokeWidth="1.5"
            fill="none"
            variants={pathVariants(0.3)}
          />
        </svg>
      </div>
    </motion.div>
  );
};
