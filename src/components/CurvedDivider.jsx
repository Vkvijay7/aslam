import React from 'react';

/**
 * CurvedDivider — Renders a smooth curved SVG shape between two sections.
 * 
 * Props:
 *  - topColor: fill color of the top section (the curve shape)
 *  - bottomColor: background color below the curve (optional, defaults to transparent)
 *  - direction: 'down' (curve goes downward into next section) or 'up' (curve comes from bottom)
 *  - height: height of the curve in px (default 80)
 *  - className: additional CSS classes
 *  - flip: boolean — horizontally flip the curve for visual variety
 */
export default function CurvedDivider({ 
  topColor = '#FFFFFF', 
  direction = 'down', 
  height = 80, 
  className = '',
  flip = false
}) {
  if (direction === 'down') {
    // Convex curve going downward — the topColor fills the curved shape
    return (
      <div 
        className={`w-full overflow-hidden pointer-events-none leading-[0] ${className}`}
        style={{ 
          marginTop: `-1px`,
          transform: flip ? 'scaleX(-1)' : 'none'
        }}
      >
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full block"
          style={{ height: `${height}px` }}
          preserveAspectRatio="none"
        >
          <path 
            d="M0 0H1440V40C1200 100 960 120 720 120C480 120 240 100 0 40V0Z" 
            fill={topColor}
          />
        </svg>
      </div>
    );
  }

  // Concave curve going upward — the topColor fills the curved shape from below
  return (
    <div 
      className={`w-full overflow-hidden pointer-events-none leading-[0] ${className}`}
      style={{ 
        marginBottom: `-1px`,
        transform: flip ? 'scaleX(-1)' : 'none'
      }}
    >
      <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full block"
        style={{ height: `${height}px` }}
        preserveAspectRatio="none"
      >
        <path 
          d="M0 120L0 80C240 20 480 0 720 0C960 0 1200 20 1440 80L1440 120H0Z" 
          fill={topColor}
        />
      </svg>
    </div>
  );
}
