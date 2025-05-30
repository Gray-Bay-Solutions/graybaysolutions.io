"use client";

import { motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

export const ScrollDownIndicator = () => {
  return (
    <motion.div
      animate={{
        y: ["0%", "20%", "0%"],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
    >
      <IconChevronDown className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
    </motion.div>
  );
};
