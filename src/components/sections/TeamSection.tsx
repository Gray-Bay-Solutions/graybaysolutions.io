"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Team } from "@/components/Team"; // Assuming Team component is in this path
import { TeamMember } from "@/types"; // Import type

// Define the type for a single team member (should match what Team component expects)
// This might need to be imported or aligned if Team component exports its own prop types
// interface TeamMember { ... } // MOVED TO src/types/index.ts

// Define the props for the TeamSection component
interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  return (
    <section id="team" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center mb-10 sm:mb-12"
      >
        <Badge
          variant="outline"
          className="mb-4 text-orange-400 border-orange-400/30"
        >
          Our Team
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Meet Our Experts
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          The talented individuals behind our successful digital solutions
        </p>
      </motion.div>
      <Team teamMembers={teamMembers} />
    </section>
  );
};

export default TeamSection;
