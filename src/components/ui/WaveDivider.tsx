'use client';

import { cn } from '@/lib/utils';

interface WaveDividerProps {
  variant?: 'wave' | 'curve' | 'tilt' | 'blob';
  flip?: boolean;
  className?: string;
  fillClassName?: string;
}

export default function WaveDivider({
  variant = 'wave',
  flip = false,
  className,
  fillClassName = 'fill-white dark:fill-primary-950',
}: WaveDividerProps) {
  const waves = {
    wave: (
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn('w-full h-16 sm:h-20 lg:h-24', flip && 'rotate-180', className)}
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          className={fillClassName}
        />
      </svg>
    ),
    curve: (
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn('w-full h-16 sm:h-20 lg:h-28', flip && 'rotate-180', className)}
      >
        <path
          d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z"
          className={fillClassName}
        />
      </svg>
    ),
    tilt: (
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn('w-full h-12 sm:h-16 lg:h-20', flip && 'rotate-180', className)}
      >
        <path
          d="M0,0 L1440,80 L1440,120 L0,120 Z"
          className={fillClassName}
        />
      </svg>
    ),
    blob: (
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className={cn('w-full h-20 sm:h-28 lg:h-36', flip && 'rotate-180', className)}
      >
        <path
          d="M0,100 C200,150 400,50 600,100 C800,150 1000,50 1200,100 C1350,140 1400,80 1440,100 L1440,150 L0,150 Z"
          className={fillClassName}
        />
      </svg>
    ),
  };

  return <div className="w-full overflow-hidden leading-none">{waves[variant]}</div>;
}
