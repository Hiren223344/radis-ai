import React from 'react';
<<<<<<< Updated upstream
import { CheckCircle2 } from 'lucide-react';

/**
 * GlobalStatus component
 * Clones the main system status banner displaying "All Systems Operational".
 * Visual attributes: solid green background (bg-green-500), rounded-lg borders, white text, and a checkmark icon.
 */
const GlobalStatus: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div 
        className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-[#22C55E]"
        style={{
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          borderRadius: '0.5rem'
=======

const GlobalStatus = () => {
  return (
    <section className="max-w-3xl mx-auto px-0">
      <div 
        className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500" 
        style={{ 
          backgroundColor: '#22c55e', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
>>>>>>> Stashed changes
        }}
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
<<<<<<< Updated upstream
            {/* 
              Checkmark icon: Match the white color and 24px (h-6 w-6) size from computed styles.
              Using Lucide's CheckCircle2 to match the visual style of the original checkmark.
            */}
            <CheckCircle2 
              className="h-6 w-6 text-white shrink-0" 
              strokeWidth={2.5}
            />
            <p 
              className="ml-2 font-medium text-lg text-white truncate"
              style={{
                fontSize: '1.125rem', // 18px text-lg
                fontWeight: 500,
                lineHeight: '1.75rem',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif'
=======
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
>>>>>>> Stashed changes
              }}
            >
              All Systems Operational
            </p>
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
    </div>
=======
    </section>
>>>>>>> Stashed changes
  );
};

export default GlobalStatus;