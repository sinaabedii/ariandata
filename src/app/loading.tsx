export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background-light via-secondary-50/30 to-primary-50 dark:from-background-dark dark:via-primary-950 dark:to-background-dark">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-800/20 to-secondary-500/20 blur-xl animate-pulse" />
          
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary-500" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-cyan" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '2s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-800" />
          </div>
          
          {/* Center logo */}
          <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary-800 to-secondary-600 flex items-center justify-center shadow-2xl shadow-primary-800/30">
            <span className="text-2xl font-bold text-white">A</span>
          </div>
        </div>
        
        {/* Brand name */}
        <h2 className="text-xl font-bold text-primary-950 dark:text-white mb-2">
          Arian Data
        </h2>
        
        {/* Loading bar */}
        <div className="w-48 h-1 mx-auto rounded-full bg-gray-200 dark:bg-primary-800 overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-primary-800 via-secondary-500 to-accent-cyan rounded-full animate-loading-bar" />
        </div>
        
        {/* Text */}
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Loading amazing things...
        </p>
      </div>
    </div>
  );
}
