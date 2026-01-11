import React from 'react';
import { Check } from 'lucide-react';

/**
 * OverallStatus Component
 * 
 * Clones the primary status banner displaying "All Systems Operational".
 * Visual attributes:
 * - Rounded green background (#22c55e)
 * - White text
 * - Checkmark icon (lucide-react Check used for accuracy and reliability)
 * - Subtle status-banner shadow (0 10px 15px -3px rgba(0, 0, 0, 0.1))
 * - Medium font weight (500)
 * - Responsive padding and font size
 */
const OverallStatus: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {/* 
          Main status container 
          - p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500 matches original exactly 
          - bg-green-500 is #22c55e in the design system
      */}
      <div 
        className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500" 
        style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            {/* 
                Icon Container
                The original HTML uses an SVG with h-6 w-6 and text-white.
                Lucide Check is the closest semantic and visual match.
            */}
            <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full border-2 border-white">
              <Check className="h-4 w-4 text-white stroke-[3px]" aria-hidden="true" />
            </div>
            
            {/* 
                Status Text
                - ml-2 font-medium text-lg text-white truncate
                - font-family inherited from globals.css Inter/Sans
            */}
            <p className="ml-2 font-medium text-lg text-white truncate leading-normal">
              All Systems Operational
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallStatus;