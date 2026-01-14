'use client';

import React, { useState } from 'react';
import { LaserFlow } from '@/components/ui/laser-flow';

export function LaserHoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic settings based on hover state
  const theme = {
    color: isHovered ? '#00f2ff' : '#7000ff', // Cyan on hover, Deep Purple idle
    speed: isHovered ? 1.5 : 0.3,             // Faster "code" flow
    density: isHovered ? 1.8 : 0.8,           // More "data" streaks
    glow: isHovered ? '0 0 30px rgba(0, 242, 255, 0.4)' : '0 0 10px rgba(112, 0, 255, 0.2)',
    border: isHovered ? '1px solid rgba(0, 242, 255, 0.6)' : '1px solid rgba(112, 0, 255, 0.3)'
  };

  return (
    <div 
      className="card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '350px',
        height: '450px',
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: '#020005',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: theme.glow,
        border: theme.border,
        margin: '50px auto'
      }}
    >
      {/* 1. Background Laser Animation */}
      <div style={{ position: 'absolute', inset: 0, opacity: isHovered ? 1 : 0.6, transition: 'opacity 0.5s' }}>
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

      {/* 2. Content Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px',
        background: 'linear-gradient(to top, rgba(2,0,5,0.9) 0%, transparent 60%)',
        pointerEvents: 'none'
      }}>
        <div style={{
          transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
          opacity: isHovered ? 1 : 0.8,
          transition: 'all 0.4s ease'
        }}>
          <h3 style={{ 
            color: 'white', 
            fontSize: '1.5rem', 
            margin: '0 0 10px 0',
            textShadow: isHovered ? `0 0 15px ${theme.color}` : 'none' 
          }}>
            {isHovered ? 'SYSTEM ONLINE' : 'SYSTEM IDLE'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.4' }}>
            High-energy laser flow with real-time GLSL shader interaction.
          </p>
          
          {/* Subtle "Loading" bar that fills on hover */}
          <div style={{ 
            width: '100%', 
            height: '2px', 
            background: 'rgba(255,255,255,0.1)', 
            marginTop: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: isHovered ? '100%' : '10%',
              background: theme.color,
              transition: 'all 1.5s ease',
              boxShadow: `0 0 10px ${theme.color}`
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
