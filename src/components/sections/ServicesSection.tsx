"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BentoGridThirdDemo } from "../bento-grid-2";

export const ServicesSection: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <section id="services" className="pt-20 sm:pt-24 md:pt-28">
      <div className="sm:pt-40 md:pt-44 lg:pt-48 container w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-orange-400 border-orange-400/30"
          >
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            We deliver cutting-edge digital solutions tailored to your business
            needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <BentoGridThirdDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
