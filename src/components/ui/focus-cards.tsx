"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Updated Card type to include description, bio, and an optional link
export type CardType = {
  title: string;
  src: string;
  description?: string;
  bio?: string; // Added bio
  link?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType; // Use the updated CardType
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const isHovered = hovered === index;

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-auto min-h-[24rem] md:min-h-[28rem] w-full transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between", // Adjusted height and added flex
          hovered !== null && !isHovered && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          layout="fill"
          objectFit="cover"
          className={cn(
            "absolute inset-0 w-full h-full transition-transform duration-500",
            isHovered && "scale-105" // Control scale with isHovered
          )}
        />
        {/* Always visible content (Name and Role) with its own gradient background */}
        <div className="relative p-4 md:p-6 z-10 mt-auto bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          {" "}
          {/* Pushes to bottom */}
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {card.title}
          </h3>
          {card.description && (
            <p className="text-sm md:text-base text-neutral-300 line-clamp-2">
              {card.description}
            </p>
          )}
        </div>

        {/* Hover-visible content (Bio) */}
        <div
          className={cn(
            "absolute inset-0 top-0 left-0 right-0 p-4 md:p-6 bg-black/80 backdrop-blur-sm text-white transition-opacity duration-300 ease-in-out overflow-y-auto",
            isHovered ? "opacity-100 " : "opacity-0 pointer-events-none"
          )}
        >
          {card.bio && (
            <p className="text-xs md:text-sm text-neutral-200">{card.bio}</p>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  // Use the updated CardType
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto md:px-8 w-full">
      {" "}
      {/* Adjusted grid and gaps */}
      {cards.map((card, index) => (
        <Card
          key={card.title + index} // Ensure unique key if titles can repeat
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
