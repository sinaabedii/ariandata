import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl overflow-hidden',
          {
            'bg-white dark:bg-primary-950 border border-gray-100 dark:border-primary-800/50':
              variant === 'default',
            'bg-white/70 dark:bg-primary-950/50 backdrop-blur-xl border border-white/20 dark:border-primary-700/20':
              variant === 'glass',
            'bg-gradient-to-br from-white to-gray-50 dark:from-primary-950 dark:to-primary-900 border border-gray-100 dark:border-primary-800/50':
              variant === 'gradient',
          },
          hover &&
            'transition-all duration-500 hover:shadow-2xl hover:shadow-primary-800/10 dark:hover:shadow-secondary-500/10 hover:-translate-y-2',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
