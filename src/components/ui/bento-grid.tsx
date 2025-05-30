import { cn } from "@/lib/utils";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 md:auto-rows-[14rem] md:grid-cols-3",
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
  return (
    <div
      className={cn(
        "group/bento relative flex flex-col justify-start space-y-3 overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-950 p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:shadow-2xl",
        className
      )}
    >
      {header && (
        <div className="flex-grow flex items-center justify-center mb-2">
          {header}
        </div>
      )}

      <div className="transition-all duration-200">
        {icon && <div className="mb-1">{icon}</div>}
        {title && (
          <div className="mb-1 font-sans text-base font-semibold text-neutral-800 dark:text-neutral-50">
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300/80 leading-snug">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
