"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconCpu,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import GeminiIcon from "../logos/GeminiIcon";
import AnthropicIcon from "../logos/AnthropicIcon";
import OpenAIIcon from "../logos/OpenAIIcon";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-neutral-700 p-2  items-center space-x-2 bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-800" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-neutral-700 p-2 items-center space-x-2 w-3/4 ml-auto bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-800" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-neutral-700 p-2 items-center space-x-2 bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-800" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-200 dark:border-neutral-700 p-2  items-center space-x-2 bg-neutral-100 dark:bg-neutral-900 w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-4 flex flex-col items-center justify-around shadow-2xl transition-shadow duration-300
                   bg-gradient-to-br from-neutral-100 to-neutral-50 border border-neutral-200 hover:shadow-purple-500/30
                   dark:from-neutral-800 dark:to-neutral-700 dark:border-neutral-600 dark:hover:shadow-purple-500/50"
      >
        <GeminiIcon className="w-12 h-12 mb-2" />
        <p className="sm:text-lg text-md text-center font-bold text-neutral-700 dark:text-neutral-200">
          Gemini
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          Latest Model: PaLM 2
        </p>
      </motion.div>
      <motion.div
        className="h-full relative z-20 w-1/3 rounded-2xl p-4 flex flex-col items-center justify-around shadow-2xl transition-shadow duration-300 
                           bg-gradient-to-br from-neutral-100 to-neutral-50 border border-neutral-200 hover:shadow-green-500/30 
                           dark:from-neutral-800 dark:to-neutral-700 dark:border-neutral-600 dark:hover:shadow-green-500/50"
      >
        <AnthropicIcon className="w-10 h-10 mb-2 text-neutral-700 dark:text-neutral-200" />
        <p className="sm:text-lg text-md text-center font-bold text-neutral-700 dark:text-neutral-200">
          Anthropic
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          Latest Model: Claude 3
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl p-4 flex flex-col items-center justify-around shadow-2xl transition-shadow duration-300 
                   bg-gradient-to-br from-neutral-100 to-neutral-50 border border-neutral-200 hover:shadow-blue-500/30 
                   dark:from-neutral-800 dark:to-neutral-700 dark:border-neutral-600 dark:hover:shadow-blue-500/50"
      >
        <OpenAIIcon className="w-12 h-12 mb-2 text-neutral-700 dark:text-neutral-200" />
        <p className="sm:text-lg text-md text-center font-bold text-neutral-700 dark:text-neutral-200">
          OpenAI
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          Latest Model: GPT-4
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-200 dark:border-neutral-700 p-2  items-start space-x-2 bg-neutral-50 dark:bg-neutral-900"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height={100}
          width={100}
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          "There are a lot of cool frameworks out there... React, Angular, Vue,
          Svelte..."
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-neutral-700 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-neutral-50 dark:bg-neutral-900"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Modern Website Development",
    description: (
      <span className="text-sm">Custom, responsive sites with great UX.</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Solutions",
    description: (
      <span className="text-sm">Smart automation & enhanced interactions.</span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SEO & Digital Marketing",
    description: (
      <span className="text-sm">Boost online presence and reach.</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Integrations",
    description: (
      <span className="text-sm">
        Integrate Gemini, Anthropic, OpenAI & more.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconCpu className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Engaging UI/UX Design",
    description: (
      <span className="text-sm">Intuitive and appealing user interfaces.</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
