
import React from 'react';

interface BottleLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  className?: string;
}

const BottleLogo = ({ size = 'md', animate = true, className = '' }: BottleLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-12',
    md: 'w-12 h-16',
    lg: 'w-16 h-20',
    xl: 'w-24 h-32'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${animate ? 'animate-float' : ''} ${className}`}>
      <svg
        viewBox="0 0 120 160"
        className="w-full h-full drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottle Outline */}
        <defs>
          <linearGradient id="bottleGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
          </linearGradient>
          
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(167, 243, 208)" stopOpacity="0.8" />
            <stop offset="33%" stopColor="rgb(186, 230, 253)" stopOpacity="0.7" />
            <stop offset="66%" stopColor="rgb(196, 181, 253)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(134, 239, 172)" stopOpacity="0.8" />
          </linearGradient>

          <filter id="glassEffect">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="1" dy="2" result="offset"/>
            <feFlood floodColor="rgba(167, 243, 208, 0.2)"/>
            <feComposite in2="offset" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Bottle Body */}
        <path
          d="M35 30 C35 25, 40 20, 45 20 L75 20 C80 20, 85 25, 85 30 L85 140 C85 145, 80 150, 75 150 L45 150 C40 150, 35 145, 35 140 Z"
          fill="url(#bottleGlass)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          filter="url(#glassEffect)"
        />

        {/* Bottle Neck */}
        <rect
          x="50"
          y="10"
          width="20"
          height="15"
          rx="2"
          fill="url(#bottleGlass)"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
        />

        {/* Cap */}
        <rect
          x="48"
          y="5"
          width="24"
          height="8"
          rx="4"
          fill="rgb(168, 162, 158)"
          className={animate ? 'animate-glow' : ''}
        />

        {/* Water Inside */}
        <path
          d="M40 35 L80 35 L80 140 C80 142, 78 145, 75 145 L45 145 C42 145, 40 142, 40 140 Z"
          fill="url(#waterGradient)"
          className={animate ? 'animate-scale' : ''}
        />

        {/* Cucumber Slices */}
        <g className={animate ? 'animate-subtle-bounce' : ''}>
          <circle cx="50" cy="50" r="6" fill="rgb(187, 247, 208)" fillOpacity="0.9" />
          <circle cx="50" cy="50" r="4" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="50" cy="50" r="2" fill="rgb(74, 222, 128)" fillOpacity="0.7" />
          
          <circle cx="65" cy="75" r="5" fill="rgb(187, 247, 208)" fillOpacity="0.8" />
          <circle cx="65" cy="75" r="3" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="65" cy="75" r="1.5" fill="rgb(74, 222, 128)" fillOpacity="0.7" />
        </g>

        {/* Carrot Pieces */}
        <g>
          <ellipse cx="55" cy="90" rx="3" ry="6" fill="rgb(251, 146, 60)" fillOpacity="0.9" />
          <ellipse cx="55" cy="90" rx="2" ry="4" fill="rgb(254, 215, 170)" fillOpacity="0.8" />
          
          <ellipse cx="70" cy="110" rx="2.5" ry="5" fill="rgb(251, 146, 60)" fillOpacity="0.9" />
          <ellipse cx="70" cy="110" rx="1.5" ry="3" fill="rgb(254, 215, 170)" fillOpacity="0.8" />
        </g>

        {/* Beetroot Pieces */}
        <g className={animate ? 'animate-subtle-bounce' : ''} style={{ animationDelay: '2s' }}>
          <circle cx="45" cy="70" r="4" fill="rgb(220, 38, 127)" fillOpacity="0.8" />
          <circle cx="45" cy="70" r="2.5" fill="rgb(244, 176, 176)" fillOpacity="0.7" />
          
          <circle cx="60" cy="120" r="3.5" fill="rgb(220, 38, 127)" fillOpacity="0.8" />
          <circle cx="60" cy="120" r="2" fill="rgb(244, 176, 176)" fillOpacity="0.7" />
        </g>

        {/* Lavender/Herbs */}
        <g>
          <line x1="52" y1="40" x2="52" y2="55" stroke="rgb(134, 239, 172)" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="52" cy="38" r="1" fill="rgb(196, 181, 253)" fillOpacity="0.9" />
          <circle cx="51" cy="41" r="0.8" fill="rgb(196, 181, 253)" fillOpacity="0.8" />
          <circle cx="53" cy="43" r="0.8" fill="rgb(196, 181, 253)" fillOpacity="0.8" />
          
          <line x1="68" y1="95" x2="68" y2="105" stroke="rgb(134, 239, 172)" strokeWidth="1" strokeOpacity="0.7" />
          <circle cx="68" cy="93" r="0.8" fill="rgb(196, 181, 253)" fillOpacity="0.8" />
          <circle cx="67" cy="96" r="0.6" fill="rgb(196, 181, 253)" fillOpacity="0.7" />
        </g>

        {/* Bubbles */}
        <g className={animate ? 'animate-glow' : ''}>
          <circle cx="42" cy="100" r="1.5" fill="rgba(255,255,255,0.4)" />
          <circle cx="75" cy="85" r="1" fill="rgba(255,255,255,0.3)" />
          <circle cx="58" cy="65" r="0.8" fill="rgba(255,255,255,0.5)" />
          <circle cx="48" cy="115" r="1.2" fill="rgba(255,255,255,0.4)" />
          <circle cx="72" cy="125" r="0.9" fill="rgba(255,255,255,0.3)" />
        </g>

        {/* Shine Effect */}
        <path
          d="M45 25 Q50 30, 45 45 Q50 50, 45 65 Q50 70, 45 85 Q50 90, 45 105 Q50 110, 45 125 Q50 130, 45 145"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={animate ? 'shimmer' : ''}
        />
      </svg>
    </div>
  );
};

export default BottleLogo;
