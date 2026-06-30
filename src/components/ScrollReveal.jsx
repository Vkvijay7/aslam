import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable scroll-triggered reveal wrapper.
 * Wraps children in a motion.div that animates on viewport entry.
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  distance = 60,
  duration = 0.7,
  once = true,
  scale = 1,
  ...props 
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileDistance = direction === 'none' ? 0 : 15;
  const activeDistance = isMobile ? mobileDistance : distance;

  const directionMap = {
    up: { y: activeDistance, x: 0 },
    down: { y: -activeDistance, x: 0 },
    left: { x: activeDistance, y: 0 },
    right: { x: -activeDistance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...offset,
        scale: scale !== 1 ? scale : undefined,
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1,
      }}
      viewport={{ once, margin: isMobile ? '-10px' : '-80px' }}
      transition={{ 
        duration: isMobile ? 0.4 : duration, 
        delay: isMobile ? delay * 0.5 : delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
