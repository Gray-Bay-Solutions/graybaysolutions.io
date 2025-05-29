"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import HeroSectionOne from "@/components/hero-section-demo-1";
// import { BackgroundBeams } from "@/components/ui/background-beams"; // No longer using background beams directly here
// TextGenerateEffect is not used for hero overlay anymore, but keep if needed elsewhere
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import FeaturesSectionDemo1 from "@/components/features-section-demo-1"; // Not used
// import { LayoutGrid } from "@/components/ui/layout-grid"; // Not used
import { CTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { AuroraBackground } from "@/components/ui/aurora-background";
// import { Portfolio } from "@/components/Portfolio"; // Commenting out old Portfolio component
// import { FocusCards } from "@/components/ui/focus-cards"; // No longer using FocusCards
import {
  IconHome,
  IconMessage,
  IconUser,
  IconDeviceLaptop,
  IconBriefcase,
  IconBuildingArch,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconExternalLink,
  IconPhone,
  IconMapPin,
  IconWorldWww,
  IconDeviceMobile,
  IconBulb,
} from "@tabler/icons-react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"; // Re-import BentoGrid components
import { WobbleCard } from "@/components/ui/wobble-card";
import { cn, scrollToSection } from "@/lib/utils";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TeamSection } from "@/components/sections/TeamSection"; // Import the new section
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ServicesSection } from "@/components/sections/ServicesSection"; // Import the new section
import { PortfolioSection } from "@/components/sections/PortfolioSection"; // Import the new section
import { ContactSection } from "@/components/sections/ContactSection"; // Import the new section
import { Footer } from "@/components/sections/Footer"; // Import the new Footer component
import {
  NavItem,
  ServiceItem,
  TeamMember,
  Project,
  ParallaxProduct,
} from "@/types"; // Import types

// Updated Nav Items from old Navigation component
const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "#services",
    icon: (
      <IconDeviceLaptop className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Portfolio",
    link: "#portfolio",
    icon: (
      <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Team",
    link: "#team",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

// Hero text updated to a simple string
const heroHeadline = "Digital Transformation Made Simple";
const heroSubheading =
  "We build elegant software solutions that help your business grow";
const heroCtaText = "Start Your Project";
const heroCtaLink = "#contact";
const heroSecondaryCtaText = "View Our Work";
const heroSecondaryCtaLink = "#portfolio";
const heroMainImage = "/portfolio/flowtv.png"; // Updated to a valid image from projects

// Updated Services data
const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern technologies that provide exceptional user experiences and drive conversions.",
    icon: (
      <IconDeviceLaptop
        size={48}
        className="text-orange-400 mb-4 group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "seo-dm",
    title: "SEO & Digital Marketing",
    description:
      "Strategic optimization to improve your visibility online and connect with your target audience when they need you most.",
    icon: (
      <IconBuildingArch
        size={48}
        className="text-orange-400 mb-4 group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "booking-sys",
    title: "Automated Booking Systems",
    description:
      "Streamline your appointment scheduling with intelligent booking solutions that integrate with your existing workflow.",
    icon: (
      <IconBriefcase
        size={48}
        className="text-orange-400 mb-4 group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "crm-int",
    title: "CRM Integration",
    description:
      "Connect your customer data across platforms to create unified experiences and improve operational efficiency.",
    icon: (
      <IconUser
        size={48}
        className="text-orange-400 mb-4 group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description:
      "Intelligent automation and customer service tools that learn from interactions to provide better experiences.",
    icon: (
      <IconHome
        size={48}
        className="text-orange-400 mb-4 group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.",
    icon: (
      <IconDeviceMobile
        size={48}
        className="text-orange-400 mb-4 group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "custom-solutions",
    title: "Custom Software Solutions",
    description:
      "Tailored software applications, system integrations, and automation tools designed to meet your unique business challenges and goals.",
    icon: (
      <IconBulb
        size={48}
        className="text-orange-400 mb-4 group-hover:text-white transition-colors duration-200"
      />
    ),
  },
];

// Updated Team Members data
const teamMembersData: TeamMember[] = [
  {
    name: "Bailey Rosen",
    role: "Co-Founder/CEO",
    image: "/team/bailey.jpg",
    bio: "Cornell alum focusing on frontend design, algorithms, and data analysis. Expert at creating intuitive interfaces backed by sophisticated automation. Bailey builds effective solutions that solve real business problems.",
    social: { github: "https://github.com/baileyrosen3" },
  },
  {
    name: "Grayson Crozier",
    role: "Co-Founder/CTO",
    image: "/team/gray.jpg",
    bio: "UCF graduate specializing in backend systems and architecture. With 5+ years delivering complete mobile, web, and AI solutions across diverse industries. Grayson transforms complex requirements into reliable, production-ready implementations.",
    social: {
      linkedin: "https://www.linkedin.com/in/grayson-crozier-1925411a6/",
      github: "https://github.com/grayson40",
    },
  },
  {
    name: "Hector Alvarado",
    role: "Co-Founder/PM",
    image: "/team/hector.jpg",
    bio: "With over four years of experience as a project leader, Hector is adept at forging strong client relationships and ensuring seamless project delivery. This Cornell alumnus excels at consistently delivering great results and making every client interaction a success.",
    social: { github: "https://github.com/hectora10" },
  },
  {
    name: "Marc Sapienza",
    role: "Co-Founder/Full Stack Developer",
    image: "/team/marc.jpg",
    bio: "Cornell alumn specializing in understanding client needs and full-stack development. Known for meticulous attention to detail and dedication to service, Marc cultivates strong partnerships to deliver impactful, precisely tailored technical solutions.",
    social: { github: "https://github.com/Msap96" },
  },
];

// Prepare data for FocusCards
import portfolioDataFromFile from "@/data/projects.json";

const focusCardItems = portfolioDataFromFile.map((project) => ({
  title: project.title,
  src: project.image,
  description: project.description,
  link: project.link,
}));

const portfolioData: Project[] = portfolioDataFromFile;

// Prepare data for HeroParallax
const parallaxProductsData: ParallaxProduct[] = portfolioData.map(
  (project) => ({
    title: project.title,
    link: project.link || "#",
    thumbnail: project.image,
  })
);

export default function NewLandingPage() {
  return (
    <AuroraBackground>
      <div className="relative z-10 min-h-screen flex flex-col" id="home">
        <FloatingNav navItems={navItems} className="top-5" />

        <main className="flex-grow">
          <HeroSectionOne
            headline={heroHeadline} // Now a string
            subheading={heroSubheading}
            primaryCtaText={heroCtaText}
            primaryCtaLink={heroCtaLink}
            secondaryCtaText={heroSecondaryCtaText}
            secondaryCtaLink={heroSecondaryCtaLink}
          />
          {/* Services Section - Now a separate component */}
          <ServicesSection services={servicesData} />
          {/* New Portfolio Section with HeroParallax - Now a separate component */}
          <PortfolioSection products={parallaxProductsData} />
          {/* Team Section - Now a separate component */}
          <TeamSection teamMembers={teamMembersData} />
          {/* Contact Section - Now a separate component */}
          <ContactSection />
        </main>

        {/* Footer - Now a separate component */}
        <Footer navItems={navItems} />
      </div>
    </AuroraBackground>
  );
}
