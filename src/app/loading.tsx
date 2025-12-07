export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary-800/20 dark:border-secondary-500/20" />
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-800 dark:border-t-secondary-500 animate-spin" />
          {/* Inner dot */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-800 to-secondary-600 animate-pulse" />
        </div>
        
        {/* Text */}
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
