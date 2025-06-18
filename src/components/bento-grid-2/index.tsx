"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconCpu,
  IconCalendarEvent,
  IconUsersGroup,
  IconDeviceMobile,
  IconSettingsCog,
  IconTargetArrow,
  IconSearch,
} from "@tabler/icons-react";
import { ModernWebsiteDevelopmentCard } from "./ModernWebsiteDevelopmentCard";
import { MobileAppDevelopmentCard } from "./MobileAppDevelopmentCard";
import { SEOCard } from "./SEOCard";
import { AIIntegrationsCard } from "./AIIntegrationsCard";
import { DigitalMarketingCard } from "./DigitalMarketingCard";
import { AutomatedBookingSystemCard } from "./AutomatedBookingSystemCard";
import { CRMIntegrationCard } from "./CRMIntegrationCard";
import { CustomSoftwareSolutionsCard } from "./CustomSoftwareSolutionsCard";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Modern Website Development",
    description: (
      <span className="text-sm">Custom, responsive sites with great UX.</span>
    ),
    header: <ModernWebsiteDevelopmentCard />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mobile App Development",
    description: (
      <span className="text-sm">Engaging iOS & Android applications.</span>
    ),
    header: <MobileAppDevelopmentCard />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconDeviceMobile className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Search Engine Optimization",
    description: (
      <span className="text-sm">
        Improve visibility and rank higher on search engines.
      </span>
    ),
    header: <SEOCard />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconSearch className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Integrations",
    description: (
      <span className="text-sm">
        Integrate Gemini, Anthropic, OpenAI & more.
      </span>
    ),
    header: <AIIntegrationsCard />,
    className: "md:col-span-2 md:row-span-1",
    icon: <IconCpu className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Digital Marketing",
    description: (
      <span className="text-sm">
        Engage your audience with targeted campaigns.
      </span>
    ),
    header: <DigitalMarketingCard />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconTargetArrow className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Booking Systems",
    description: (
      <span className="text-sm">
        Streamline scheduling & client experience.
      </span>
    ),
    header: <AutomatedBookingSystemCard />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CRM Integration",
    description: (
      <span className="text-sm">Unify customer data for efficiency.</span>
    ),
    header: <CRMIntegrationCard />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconUsersGroup className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Custom Software Solutions",
    description: (
      <span className="text-sm">
        Tailored applications for unique business needs.
      </span>
    ),
    header: <CustomSoftwareSolutionsCard />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconSettingsCog className="h-4 w-4 text-neutral-500" />,
  },
];
