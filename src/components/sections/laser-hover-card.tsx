'use client';

import React, { useState } from 'react';
import { LaserFlow } from '@/components/ui/laser-flow';

export function LaserHoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  const theme = {
    color: isHovered ? '#00f2ff' : '#7000ff',
    speed: isHovered ? 1.5 : 0.3,
    density: isHovered ? 1.8 : 0.8,
  };

  return (
    <div 
      className="card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        maxWidth: '500px',
        height: '450px',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      <div 
        className="absolute inset-0 bg-black/90 dark:bg-black/95 border border-white/10 dark:border-white/20 rounded-[20px]"
        style={{
          boxShadow: isHovered 
            ? '0 0 40px rgba(0, 242, 255, 0.3), inset 0 0 60px rgba(0, 242, 255, 0.05)' 
            : '0 0 20px rgba(112, 0, 255, 0.2), inset 0 0 40px rgba(112, 0, 255, 0.03)',
          transition: 'box-shadow 0.5s ease',
        }}
      />
      
      <div className="absolute inset-0" style={{ transition: 'opacity 0.5s' }}>
        <LaserFlow 
          color={theme.color}
          flowSpeed={theme.speed}
          wispDensity={theme.density}
          wispSpeed={isHovered ? 30 : 10}
          wispIntensity={isHovered ? 10 : 4}
          fogIntensity={isHovered ? 0.7 : 0.3}
          mouseTiltStrength={0.04} 
          horizontalBeamOffset={0.1}
          verticalSizing={2.5}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
        <div 
          style={{
            transform: isHovered ? 'translateY(0) scale(1.05)' : 'translateY(10px) scale(1)',
            opacity: isHovered ? 1 : 0.8,
            transition: 'all 0.4s ease'
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-3" style={{
            textShadow: isHovered ? `0 0 20px ${theme.color}` : 'none'
          }}>
            {isHovered ? 'SYSTEM ACTIVE' : 'AI ROUTER'}
          </h3>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            High-performance routing to 300+ AI models with automatic fallback and load balancing
          </p>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/50 text-xs font-mono">
              {isHovered ? '// Connected' : '// Hover to activate'}
            </span>
            <span className="text-xs font-mono" style={{ color: theme.color }}>
              {isHovered ? 'ONLINE' : 'IDLE'}
            </span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: isHovered ? '100%' : '20%',
                background: theme.color,
                boxShadow: `0 0 10px ${theme.color}`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
