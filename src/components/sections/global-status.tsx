import React from 'react';

const GlobalStatus = () => {
  return (
    <section className="max-w-3xl mx-auto px-0">
      <div 
        className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500" 
        style={{ 
          backgroundColor: '#22c55e', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
        }}
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            {/* Using a Lucide-like checkmark SVG as per common UI patterns for status pages */}
            <svg 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <p 
              className="ml-2 font-medium text-lg text-white truncate" 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.125rem', 
                fontWeight: 500 
              }}
            >
              All Systems Operational
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< Updated upstream
export default GlobalStatus;
=======
export default GlobalStatus;
>>>>>>> Stashed changes
