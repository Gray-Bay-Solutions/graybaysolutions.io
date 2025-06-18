import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[16rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "group/bento relative flex flex-col justify-start space-y-3 overflow-hidden rounded-2xl",
        "bg-neutral-900 border border-neutral-800",
        "p-4 md:p-5",
        "shadow-md hover:shadow-lg",
        "transition-all duration-300 ease-in-out",
        "hover:bg-neutral-800/80 hover:border-neutral-700",
        className
      )}
    >
      {isMounted && header && (
        <div className="flex-grow flex items-center justify-center mb-2">
          {header}
        </div>
      )}

      {isMounted && (icon || title || description) && (
        <div className="transition-all duration-200 flex-grow flex flex-col justify-start">
          {icon && (
            <div className="mb-2 text-neutral-400 group-hover/bento:text-orange-400 transition-colors duration-300">
              {icon}
            </div>
          )}
          {title && (
            <div className="mb-1 font-sans text-base md:text-lg font-semibold text-neutral-100 group-hover/bento:text-white transition-colors duration-300">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans text-sm text-neutral-400 group-hover/bento:text-neutral-300 transition-colors duration-300 leading-snug flex-grow">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
