import React from 'react';

const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
<<<<<<< Updated upstream
            {/* Checkmark SVG Icon */}
=======
            {/* Checkmark SVG Icon based on the visual layout */}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <p className="ml-2 font-medium text-lg text-white truncate">
=======
            <p className="ml-2 font-medium text-lg text-white truncate text-status-banner">
>>>>>>> Stashed changes
              All Systems Operational
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallStatus;
