"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceItem } from "@/types"; // Import types

// Define a type for common icon props if needed for more specific typing
// interface IconProps { ... } // MOVED TO src/types/index.ts

// Define the type for a single service item
// interface ServiceItem { ... } // MOVED TO src/types/index.ts

// Define the props for the ServicesSection component
interface ServicesSectionProps {
  services: ServiceItem[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
}) => {
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

        <ScrollArea className="w-full overflow-x-auto pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-max md:min-w-0">
            {services.map((service, i) => (
              <motion.div
                key={service.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-neutral-800/50 border-neutral-700/50 backdrop-blur-sm hover:bg-neutral-800/80 transition-colors duration-300 group">
                  <CardHeader>
                    <div className="mb-2">
                      {React.cloneElement(service.icon, {
                        size: 48,
                        className:
                          "text-orange-400 group-hover:text-orange-300 transition-colors duration-300",
                      })}
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-white group-hover:text-orange-200 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="text-orange-400 hover:text-orange-300 hover:bg-orange-950/20 p-0"
                    >
                      Learn more
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default ServicesSection;
