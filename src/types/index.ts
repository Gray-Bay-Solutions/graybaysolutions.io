import React from "react";

// From page.tsx and Footer.tsx (and potentially FloatingNav.tsx)
export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactElement;
}

// From page.tsx and ServicesSection.tsx
// Specific IconProps for ServiceItem.icon
export interface IconProps {
  size?: number;
  className?: string;
}
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement<IconProps>;
}

// From page.tsx and TeamSection.tsx
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
  };
}

// From page.tsx (related to portfolioDataFromFile which is used by HeroParallax)
export interface Project {
  id?: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category?: string;
  tags?: string[];
  industry?: string;
  outcomes?: string[];
}

// From page.tsx and PortfolioSection.tsx (used by HeroParallax)
export interface ParallaxProduct {
  title: string;
  link: string;
  thumbnail: string;
}
