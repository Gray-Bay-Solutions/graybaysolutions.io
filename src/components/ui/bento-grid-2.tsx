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
  IconCalendarEvent,
  IconUsersGroup,
  IconDeviceMobile,
  IconSettingsCog,
  IconChartLine,
  IconTargetArrow,
  IconUsers,
  IconSearch,
  IconPercentage,
  IconArrowUpRight,
  IconTrendingUp,
  IconChartInfographic,
  IconAnalyze,
  IconHeart,
} from "@tabler/icons-react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import Image from "next/image";
import GeminiIcon from "../logos/GeminiIcon";
import AnthropicIcon from "../logos/AnthropicIcon";
import OpenAIIcon from "../logos/OpenAIIcon";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
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
  const [currentPage, setCurrentPage] = React.useState(0);

  const browserVariants = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  // Cycle through pages
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const pages = [
    // Page 1 - Landing Page (Hero & Features)
    {
      header: "w-1/2",
      content: (
        <div className="h-full flex flex-col space-y-1">
          {/* Hero Section */}
          <div className="h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 p-1.5 flex flex-col justify-center items-center h-full space-y-1">
              <motion.div
                className="w-5 h-5 bg-white/90 rounded-lg shadow-lg flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md"></div>
              </motion.div>
              <div className="w-10 h-1 bg-white/80 rounded-full"></div>
              <div className="w-8 h-0.5 bg-white/60 rounded-full"></div>
              {/* CTA Buttons */}
              <div className="flex space-x-1 mt-1.5">
                <div className="px-1.5 py-0.5 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                </div>
                <div className="px-1.5 py-0.5 bg-white/20 border border-white/30 rounded-md backdrop-blur-sm">
                  <div className="w-2.5 h-0.5 bg-white/80 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-1 h-6">
            {[
              { color: "emerald", icon: "🚀" },
              { color: "blue", icon: "⚡" },
              { color: "purple", icon: "✨" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-neutral-800 rounded-md p-1 shadow-sm border border-neutral-200 dark:border-neutral-700 flex flex-col items-center justify-center space-y-0.5"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`w-2.5 h-2.5 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-md shadow-sm flex items-center justify-center text-xs`}
                >
                  {feature.icon}
                </div>
                <div className="w-5 h-0.5 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    // Page 2 - Reviews Page (Testimonials & Ratings)
    {
      header: "w-1/3",
      content: (
        <div className="h-full flex flex-col space-y-1">
          {/* Overall Rating Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-1 shadow-lg flex items-center justify-center space-x-1.5 h-6">
            <motion.div
              className="text-base"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ⭐
            </motion.div>
            <div className="flex space-x-px">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 h-0.5 bg-white rounded-full shadow-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                />
              ))}
            </div>
            <div
              className="w-3 h-1 bg-white/90 rounded-full flex items-center justify-center font-bold text-xs"
              style={{ fontSize: "0.4rem" }}
            >
              4.9
            </div>
          </div>
          {/* Review Cards */}
          <div className="flex-1 space-y-1 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-neutral-800 rounded-md p-1 shadow-sm border border-neutral-200 dark:border-neutral-700 space-y-0.5 h-[calc((100%-0.5rem)/3)]"
              >
                <div className="flex items-center space-x-1">
                  <div
                    className={`w-1.5 h-1.5 bg-gradient-to-br from-${["pink", "blue", "green"][i]}-400 to-${["pink", "blue", "green"][i]}-600 rounded-full shadow-sm border-px border-white dark:border-neutral-700 flex items-center justify-center`}
                  >
                    <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  </div>
                  <div className="flex space-x-px">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className={`w-0.5 h-0.5 ${j < 5 - i * 0 ? "bg-yellow-400" : "bg-neutral-300 dark:bg-neutral-600"} rounded-sm`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700 rounded-sm"></div>
                  <div className="w-4/5 h-0.5 bg-neutral-200 dark:bg-neutral-700 rounded-sm"></div>
                  <div className="w-3/5 h-0.5 bg-neutral-200 dark:bg-neutral-700 rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Page 3 - Contact Page (Form & Info)
    {
      header: "w-2/5",
      content: (
        <div className="h-full flex space-x-1">
          {/* Contact Form */}
          <div className="flex-1 bg-white dark:bg-neutral-800 rounded-lg p-1.5 shadow-lg border border-neutral-200 dark:border-neutral-700 flex flex-col">
            <div className="w-5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-1"></div>
            {/* Form Fields */}
            <div className="flex-1 space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-0.5">
                  <div
                    className={`w-${["3", "4", "5"][i]} h-0.5 bg-neutral-400 dark:bg-neutral-600 rounded`}
                  ></div>
                  <div className="h-1 bg-neutral-100 dark:bg-neutral-700 rounded-sm border border-neutral-200 dark:border-neutral-600 p-0.5 flex items-center">
                    <motion.div
                      className="w-px h-0.5 bg-blue-500"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Submit Button */}
            <motion.div
              className="w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md flex items-center justify-center mt-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2.5 h-0.5 bg-white/90 rounded-sm"></div>
            </motion.div>
          </div>
          {/* Contact Info Cards */}
          <div className="w-1/3 space-y-1 flex flex-col">
            {[
              { icon: "📍", color: "red" },
              { icon: "📞", color: "green" },
              { icon: "✉️", color: "blue" },
            ].map((contact, i) => (
              <div
                key={i}
                className="flex-1 bg-white dark:bg-neutral-800 rounded-lg p-1 shadow-md border border-neutral-200 dark:border-neutral-700 flex items-center space-x-1"
              >
                <div
                  className={`w-1.5 h-1.5 bg-gradient-to-br from-${contact.color}-400 to-${contact.color}-600 rounded-md shadow-sm flex items-center justify-center text-xs`}
                >
                  {contact.icon}
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="w-full h-0.5 bg-neutral-300 dark:bg-neutral-600 rounded-sm"></div>
                  <div className="w-3/4 h-0.5 bg-neutral-200 dark:bg-neutral-700 rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Page 4 - Services Cards (Grid Layout)
    {
      header: "w-1/2",
      content: (
        <div className="grid grid-cols-2 gap-1 h-full">
          {[
            { icon: "🌐", color: "blue" },
            { icon: "📱", color: "purple" },
            { icon: "🎨", color: "pink" },
            { icon: "⚡", color: "yellow" },
          ].map((service, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 rounded-lg p-1.5 shadow-lg relative overflow-hidden group cursor-pointer flex flex-col items-center justify-center`}
              whileHover={{ scale: 1.05, rotateY: 3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center justify-center space-y-0.5">
                <motion.div
                  className="text-xl"
                  animate={{ y: [0, -1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {service.icon}
                </motion.div>
                <div className="w-3 h-0.5 bg-white/80 rounded-full"></div>
                <div className="w-2.5 h-0.5 bg-white/60 rounded-full"></div>
                {/* Service Features */}
                <div className="flex space-x-px mt-0.5">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="w-0.5 h-0.5 bg-white/70 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    // Page 5 - Pricing Plans (Cards Layout)
    {
      header: "w-2/3",
      content: (
        <div className="flex space-x-1 h-full">
          {[
            { name: "Basic", color: "gray", popular: false },
            { name: "Pro", color: "blue", popular: true },
            { name: "Enterprise", color: "purple", popular: false },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className={`flex-1 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border ${plan.popular ? `border-${plan.color}-500` : "border-neutral-200 dark:border-neutral-700"} p-1 relative overflow-hidden flex flex-col`}
              whileHover={{ scale: 1.02, y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {plan.popular && (
                <div
                  className={`absolute -top-px left-1/2 transform -translate-x-1/2 px-1 py-px bg-${plan.color}-500 text-white rounded-b text-xs shadow-md`}
                >
                  <div className="w-5 h-0.5 bg-white/90 rounded-sm"></div>
                </div>
              )}
              <div className="flex flex-col h-full space-y-1 mt-0.5 pt-0.5">
                {/* Plan Name */}
                <div
                  className={`w-3 h-0.5 bg-${plan.color}-500 rounded mx-auto`}
                ></div>
                {/* Price */}
                <div className="flex items-center justify-center space-x-0.5">
                  <div className="text-xs" style={{ fontSize: "0.4rem" }}>
                    $
                  </div>
                  <div
                    className={`w-2.5 h-1.5 bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 rounded-sm flex items-center justify-center text-white font-semibold text-xs`}
                    style={{ fontSize: "0.4rem" }}
                  >
                    {["9", "29", "99"][i]}
                  </div>
                </div>
                {/* Features */}
                <div className="flex-1 space-y-0.5">
                  {[...Array(3)].map(
                    (
                      _,
                      j // Reduced to 3 features to save space
                    ) => (
                      <div key={j} className="flex items-center space-x-0.5">
                        <div
                          className={`w-0.5 h-0.5 ${j < [1, 3, 3][i] ? "bg-green-500" : "bg-neutral-300 dark:bg-neutral-600"} rounded-full`}
                        ></div>
                        <div
                          className={`flex-1 h-0.5 ${j < [1, 3, 3][i] ? "bg-neutral-400" : "bg-neutral-200 dark:bg-neutral-700"} rounded-sm`}
                        ></div>
                      </div>
                    )
                  )}
                </div>
                {/* CTA Button */}
                <motion.div
                  className={`w-full h-1 ${plan.popular ? `bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600` : "bg-neutral-200 dark:bg-neutral-700"} rounded-md flex items-center justify-center cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`w-3 h-0.5 ${plan.popular ? "bg-white/90" : "bg-neutral-500"} rounded-sm`}
                  ></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col p-4"
    >
      {/* Browser Window */}
      <motion.div
        variants={browserVariants}
        className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden flex-1"
      >
        {/* Browser Header */}
        <div className="flex items-center space-x-2 p-2 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="flex-1 mx-2 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ width: ["0%", "100%"] }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 1.7,
              }}
            />
          </div>
        </div>

        {/* Website Content */}
        <div className="p-3 h-full relative">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full"
          >
            {/* Page Header */}
            <div
              className={`h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded ${pages[currentPage].header} mb-1.5`}
            ></div>

            {/* Page Content */}
            <div className="h-30">{pages[currentPage].content}</div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
// SkeletonTwo was associated with the deleted "AI-Powered Solutions"
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
// SkeletonFive was associated with the deleted "Engaging UI/UX Design"
const SkeletonSix = () => {
  const variants = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={variants}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col items-center justify-center space-y-2 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900"
    >
      <IconCalendarEvent className="w-12 h-12 text-neutral-500" />
      <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
        Automated Event Scheduling
      </p>
    </motion.div>
  );
};

const SkeletonSeven = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 items-center justify-around rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
      <div className="flex flex-col items-center space-y-1">
        <IconUsersGroup className="w-8 h-8 text-blue-500" />
        <div className="h-2 w-10 rounded-full bg-blue-200 dark:bg-blue-800" />
      </div>
      <div className="flex flex-col items-center space-y-1">
        <IconUsersGroup className="w-8 h-8 text-green-500" />
        <div className="h-2 w-12 rounded-full bg-green-200 dark:bg-green-800" />
      </div>
      <div className="flex flex-col items-center space-y-1">
        <IconUsersGroup className="w-8 h-8 text-red-500" />
        <div className="h-2 w-8 rounded-full bg-red-200 dark:bg-red-800" />
      </div>
    </div>
  );
};

const SkeletonEight = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4,
      },
    },
  };
  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 items-center justify-center rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-2 p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 w-full"
      >
        <IconDeviceMobile className="w-6 h-6 text-purple-500 shrink-0" />
        <div className="w-full bg-gray-200 h-3 rounded-full dark:bg-neutral-700" />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-2 p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 w-4/5"
      >
        <IconDeviceMobile className="w-6 h-6 text-indigo-500 shrink-0" />
        <div className="w-full bg-gray-200 h-3 rounded-full dark:bg-neutral-700" />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-2 p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 w-3/5"
      >
        <IconDeviceMobile className="w-6 h-6 text-pink-500 shrink-0" />
        <div className="w-full bg-gray-200 h-3 rounded-full dark:bg-neutral-700" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonNine = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col items-center justify-center rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      <IconSettingsCog className="w-16 h-16 text-neutral-400 dark:text-neutral-600 absolute -bottom-4 -right-4 opacity-30 animate-spin [animation-duration:10s]" />
      <div className="w-3/4 h-3 bg-gray-200 dark:bg-neutral-700 rounded-full mb-2"></div>
      <div className="w-full h-3 bg-gray-200 dark:bg-neutral-700 rounded-full mb-2"></div>
      <div className="w-1/2 h-3 bg-gray-200 dark:bg-neutral-700 rounded-full"></div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 absolute bottom-2 left-2">
        Custom Logic
      </p>
    </div>
  );
};

const SkeletonTen = () => {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1, duration: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const AnimatedCircularProgress = ({
    percentage,
    strokeColor,
    icon: IconComponent,
    label,
  }: {
    percentage: number;
    strokeColor: string;
    icon?: React.ElementType;
    label?: string;
  }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center space-y-1"
      >
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-neutral-200 dark:text-neutral-700"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
            <motion.circle
              className={strokeColor}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={shouldReduceMotion ? 0 : offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
              initial={
                !shouldReduceMotion
                  ? { strokeDashoffset: circumference }
                  : false
              }
              animate={
                !shouldReduceMotion ? { strokeDashoffset: offset } : false
              }
              transition={
                !shouldReduceMotion
                  ? { duration: 1.2, ease: "circOut", delay: 0.3 }
                  : { duration: 0 }
              }
            />
          </svg>
          {IconComponent && (
            <div className="absolute inset-0 flex items-center justify-center">
              <IconComponent
                size={28}
                className="text-neutral-600 dark:text-neutral-300"
              />
            </div>
          )}
        </div>
        {label && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            {label}
          </p>
        )}
        <motion.p
          className="text-lg font-semibold text-neutral-700 dark:text-neutral-200"
          initial={!shouldReduceMotion ? { opacity: 0 } : false}
          animate={!shouldReduceMotion ? { opacity: 1 } : false}
          transition={
            !shouldReduceMotion
              ? { delay: 0.8, duration: 0.5 }
              : { duration: 0 }
          }
        >
          {percentage}%
        </motion.p>
      </motion.div>
    );
  };

  const MetricPod = ({
    icon: IconComponent,
    label,
    value,
    unit,
    valueColor,
  }: {
    icon: React.ElementType;
    label: string;
    value: string | number;
    unit?: string;
    valueColor?: string;
  }) => (
    <motion.div
      variants={itemVariants}
      className="p-3 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg shadow-md flex flex-col items-center text-center"
    >
      <IconComponent
        size={24}
        className="mb-1.5 text-blue-500 dark:text-blue-400"
      />
      <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-0.5">
        {label}
      </p>
      <p
        className={`text-md font-bold ${valueColor || "text-neutral-700 dark:text-neutral-200"}`}
      >
        {value}
        {unit}
      </p>
    </motion.div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col w-full h-full p-5 dark:bg-slate-800 bg-slate-100 rounded-lg shadow-lg justify-between items-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      ></div>

      <motion.p
        variants={itemVariants}
        className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-3 z-10"
      >
        Digital Performance Overview
      </motion.p>

      <div className="z-10 flex justify-center w-full mb-4">
        <AnimatedCircularProgress
          percentage={shouldReduceMotion ? 78 : 0}
          strokeColor="text-green-500 dark:text-green-400"
          icon={IconTrendingUp}
        />
      </div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-3 gap-3 w-full z-10"
      >
        <MetricPod
          icon={IconSearch}
          label="Visibility"
          value={shouldReduceMotion ? "+25" : "0"}
          unit="%"
          valueColor="text-blue-600 dark:text-blue-400"
        />
        <MetricPod
          icon={IconHeart}
          label="Engagement"
          value={shouldReduceMotion ? "4.8" : "0"}
          unit="%"
          valueColor="text-pink-600 dark:text-pink-400"
        />
        <MetricPod
          icon={IconArrowUpRight}
          label="Leads"
          value={shouldReduceMotion ? "+120" : "0"}
          valueColor="text-teal-600 dark:text-teal-400"
        />
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
    className: "md:col-span-1 md:row-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mobile App Development",
    description: (
      <span className="text-sm">Engaging iOS & Android applications.</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconDeviceMobile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SEO & Digital Marketing",
    description: (
      <span className="text-sm">Boost online presence and reach.</span>
    ),
    header: <SkeletonTen />,
    className: "md:col-span-1 md:row-span-2",
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
    className: "md:col-span-2 md:row-span-1",
    icon: <IconCpu className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Booking Systems",
    description: (
      <span className="text-sm">
        Streamline scheduling & client experience.
      </span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CRM Integration",
    description: (
      <span className="text-sm">Unify customer data for efficiency.</span>
    ),
    header: <SkeletonSeven />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconUsersGroup className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Custom Software Solutions",
    description: (
      <span className="text-sm">
        Tailored applications for unique business needs.
      </span>
    ),
    header: <SkeletonNine />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconSettingsCog className="h-4 w-4 text-neutral-500" />,
  },
];
