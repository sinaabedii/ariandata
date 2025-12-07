import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-800/50 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gradient-to-r from-primary-800 to-secondary-700 text-white shadow-lg shadow-primary-800/25 hover:shadow-xl hover:shadow-primary-800/30 hover:scale-105':
              variant === 'primary',
            'border-2 border-primary-800 dark:border-secondary-400 text-primary-800 dark:text-secondary-400 hover:bg-primary-800 hover:text-white dark:hover:bg-secondary-400 dark:hover:text-primary-950':
              variant === 'secondary',
            'text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-secondary-400 hover:bg-gray-100 dark:hover:bg-primary-900':
              variant === 'ghost',
            'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-800 dark:hover:border-secondary-400 hover:text-primary-800 dark:hover:text-secondary-400':
              variant === 'outline',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
