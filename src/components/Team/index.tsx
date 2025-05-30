"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
  };
}

interface TeamProps {
  teamMembers: TeamMember[];
  title?: string;
  subtitle?: string;
}

export const Team: React.FC<TeamProps> = ({ teamMembers, title, subtitle }) => {
  const focusCardItems = teamMembers.map((member) => ({
    title: member.name,
    src: member.image,
    description: member.role,
    bio: member.bio,
  }));

  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      {(title || subtitle) && (
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <FocusCards cards={focusCardItems} />
    </div>
  );
};
