"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export const HeroParallax = ({
  products,
  showDefaultHeader = true,
  sectionTitle,
  className,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  showDefaultHeader?: boolean;
  sectionTitle?: string;
  className?: string;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateYforCards = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-350, 100]),
    springConfig
  );
  const cardsOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.05, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className={cn(
        "h-[220vh] overflow-hidden antialiased relative flex flex-col [perspective:600px] [transform-style:preserve-3d]",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center mb-12 mt-32"
      >
        <Badge
          variant="outline"
          className="mb-4 text-orange-400 border-orange-400/30"
        >
          Our Work
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Recent Projects
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Explore our portfolio of successful digital transformations
        </p>
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY: translateYforCards,
          opacity: cardsOpacity,
        }}
        className="relative z-10"
      >
        <motion.div className="flex flex-col sm:flex-row-reverse items-center sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row items-center sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row-reverse items-center sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-10 md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-full max-w-xs sm:max-w-none sm:h-96 sm:w-[26rem] md:w-[30rem] relative shrink-0 mb-4 sm:mb-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
