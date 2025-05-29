"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

// Card type as defined by Aceternity UI for this component
export type CardType = {
  id: string; // Added id for keying
  src: string; // Expecting an image URL for the card background
  title: string;
  category: string; // We can use service title or a generic category
  content: React.ReactNode; // For service description and potentially icon
  icon?: React.ReactNode; // Optional: if you want to pass icons separately to the modal
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 16 : 16;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    // Ensure window is defined (for SSR compatibility)
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full group">
        <div
          className="flex w-full overflow-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-12"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "flex flex-row items-stretch justify-start gap-4 pl-4",
              "mx-auto max-w-full"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.15 * index,
                    ease: "easeOut",
                  },
                }}
                key={item.key || `carousel-item-${index}`}
                className="last:pr-[5%] md:last:pr-[10%] flex-shrink-0 h-auto"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-2 right-0 mb-2 mr-2 lg:mb-4 lg:mr-4 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="relative z-40 flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700/90 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <IconArrowNarrowLeft className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
          <button
            className="relative z-40 flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700/90 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <IconArrowNarrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () =>
    handleClose()
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (typeof onCardClose === "function") {
      onCardClose(index);
    }
  };

  const layoutIdBase = `card-${card.id || card.title}-${index}`;

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[200] h-screen overflow-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/85 backdrop-blur-lg"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              ref={containerRef}
              layoutId={layout ? `${layoutIdBase}-modal` : undefined}
              className="relative z-[210] mx-auto h-fit max-h-[90vh] w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl bg-neutral-900 p-6 md:p-8 shadow-2xl overflow-y-auto flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <motion.p
                    layoutId={
                      layout ? `${layoutIdBase}-category-modal` : undefined
                    }
                    className="text-sm font-medium text-orange-400 mb-1"
                  >
                    {card.category}
                  </motion.p>
                  <motion.h2
                    layoutId={
                      layout ? `${layoutIdBase}-title-modal` : undefined
                    }
                    className="text-2xl md:text-3xl font-semibold text-neutral-100"
                  >
                    {card.title}
                  </motion.h2>
                </div>
                <button
                  className="ml-auto flex-shrink-0 h-8 w-8 items-center justify-center rounded-full bg-neutral-700/80 hover:bg-neutral-600/90 transition-colors text-neutral-300 hover:text-white"
                  onClick={handleClose}
                  aria-label="Close modal"
                >
                  <IconX className="h-5 w-5" />
                </button>
              </div>

              <div className="py-6 text-neutral-300 leading-relaxed text-sm md:text-base flex-grow overflow-y-auto styled-scrollbar">
                {card.icon && (
                  <div className="mb-6 flex justify-center text-orange-400">
                    {card.icon}
                  </div>
                )}
                <div className="prose prose-sm md:prose-base prose-invert max-w-none">
                  {typeof card.content === "string" ? (
                    <p>{card.content}</p>
                  ) : (
                    card.content
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? layoutIdBase : undefined}
        onClick={handleOpen}
        className={cn(
          "relative z-10 flex flex-col items-start justify-end overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group",
          "h-72 w-52 md:h-[22rem] md:w-64 bg-neutral-800 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        )}
      >
        <div className="absolute inset-0 z-20">
          <BlurImage
            src={card.src}
            alt={card.title || "Service background"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-30 h-full bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
        <div className="relative z-40 p-4 md:p-5 w-full mt-auto">
          <motion.p
            layoutId={layout ? `${layoutIdBase}-category` : undefined}
            className="text-left font-sans text-xs font-medium text-orange-300/90 md:text-sm uppercase tracking-wider"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `${layoutIdBase}-title` : undefined}
            className="mt-1 max-w-xs text-left font-sans text-base md:text-lg font-semibold [text-wrap:balance] text-white"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({ className, alt, ...rest }: NextImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <NextImage
      className={cn(
        "transition-all duration-500 ease-in-out",
        isLoading
          ? "opacity-50 blur-md scale-105"
          : "opacity-100 blur-0 scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      onError={() => {
        setLoading(false);
        // console.error("Error loading image:", alt);
      }}
      alt={alt || "Background image"}
      {...rest}
    />
  );
};
