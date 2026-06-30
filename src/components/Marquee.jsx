import React from 'react';
import { motion } from 'framer-motion';

/**
 * Infinite scrolling marquee/ticker component.
 * Creates an animated text band for visual interest between sections.
 */
export default function Marquee({ 
  items = [], 
  speed = 30, 
  className = '',
  separator = '✦',
  reverse = false 
}) {
  const content = items.join(` ${separator} `) + ` ${separator} `;
  // Duplicate for seamless loop
  const fullContent = content + content;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <span className="inline-block pr-2">{fullContent}</span>
        <span className="inline-block pr-2">{fullContent}</span>
      </motion.div>
    </div>
  );
}
