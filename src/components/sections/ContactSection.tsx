"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-28 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 text-orange-400 border-orange-400/30"
          >
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s discuss how we can help you
            achieve your goals
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-neutral-800/50 border-neutral-700/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
