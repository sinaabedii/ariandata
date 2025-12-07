import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-0',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <span className={cn(
          'inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4',
          light 
            ? 'bg-white/10 text-white/90'
            : 'bg-primary-800/10 dark:bg-secondary-500/10 text-primary-800 dark:text-secondary-400'
        )}>
          {label}
        </span>
      )}
      <h2 className={cn(
        'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4',
        light ? 'text-white' : 'text-primary-950 dark:text-white'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-sm sm:text-base lg:text-lg',
          light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
