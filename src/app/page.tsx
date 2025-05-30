"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import HeroSectionOne from "@/components/hero-section-demo-1";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconDeviceLaptop,
  IconBriefcase,
  IconBuildingArch,
  IconDeviceMobile,
  IconBulb,
  IconSparkles,
} from "@tabler/icons-react";
import React from "react";
import { TeamSection } from "@/components/sections/TeamSection"; // Import the new section
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

// Hero text updated for FlipWords
const heroHeadlineStart = "Digital Transformation Made ";
const heroFlipWords = ["Simple", "Smart", "Seamless"];
const heroHeadlineEnd = ""; // No text after the flipping word in this case
const heroSubheading =
  "We build elegant software solutions that help your business grow";
const heroCtaText = "Start Your Project";
const heroCtaLink = "#contact";
const heroSecondaryCtaText = "View Our Work";
const heroSecondaryCtaLink = "#portfolio";
// const heroMainImage = "/portfolio/flowtv.png"; // No longer directly used by HeroSectionOne in this new layout

// Tech Logos for Hero Section (ensure these paths are correct and files exist in public/logos/)
const heroTechLogos = [
  { name: "Next.js", logo: "/logos/nextjs.svg", width: 80, height: 30 },
  { name: "React", logo: "/logos/react.svg", width: 70, height: 25 }, // Adjusted React logo size slightly
  {
    name: "TailwindCSS",
    logo: "/logos/tailwindcss.svg",
    width: 100,
    height: 20,
  }, // Adjusted Tailwind logo size
  { name: "Vercel", logo: "/logos/vercel.svg", width: 70, height: 25 },
  { name: "Supabase", logo: "/logos/supabase.svg", width: 90, height: 25 }, // Adjusted Supabase logo size
  // Add Framer Motion if you have its logo and want to include it, like in the example
  // { name: "Framer Motion", logo: "/logos/framer.svg", width: 70, height: 25 },
];

// Updated Services data with concise descriptions for Bento Grid
const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Modern, responsive sites that drive conversions.", // Made concise
    icon: <IconDeviceLaptop size={64} className="text-orange-400" />,
  },
  {
    id: "seo-dm",
    title: "SEO & Digital Marketing",
    description: "Boost online visibility and connect with your audience.", // Made concise
    icon: <IconBuildingArch size={64} className="text-orange-400" />,
  },
  {
    id: "booking-sys",
    title: "Automated Booking Systems",
    description: "Streamline scheduling, save time, enhance client experience.", // Made concise
    icon: <IconBriefcase size={64} className="text-orange-400" />,
  },
  {
    id: "crm-int",
    title: "CRM Integration",
    description: "Unified customer data for improved operational efficiency.", // Made concise
    icon: <IconUser size={64} className="text-orange-400" />,
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description: "Intelligent automation for superior customer experiences.", // Made concise
    icon: <IconBulb size={64} className="text-orange-400" />, // Changed icon to IconBulb for AI
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development",
    description: "Seamless iOS & Android apps that engage users.", // Made concise
    icon: <IconDeviceMobile size={64} className="text-orange-400" />,
  },
  {
    id: "custom-solutions",
    title: "Custom Software Solutions",
    description: "Tailored applications for unique business challenges.", // Made concise
    icon: <IconSparkles size={64} className="text-orange-400" />, // Changed icon to IconSparkles
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
      <div className="relative min-h-screen flex flex-col w-full" id="home">
        <FloatingNav navItems={navItems} className="top-5" />

        <main className="flex-grow">
          <HeroSectionOne
            headlineStart={heroHeadlineStart}
            flipWords={heroFlipWords}
            headlineEnd={heroHeadlineEnd}
            subheading={heroSubheading}
            primaryCtaText={heroCtaText}
            primaryCtaLink={heroCtaLink}
            secondaryCtaText={heroSecondaryCtaText}
            secondaryCtaLink={heroSecondaryCtaLink}
            techLogos={heroTechLogos}
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
