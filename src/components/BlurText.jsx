import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const lines = useMemo(() => text.split('\n'), [text]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  // Precompute the elements and their global indices to render safely
  const lineData = useMemo(() => {
    let currentGlobalIndex = 0;
    return lines.map((line) => {
      const elements = animateBy === 'words' ? line.split(' ') : line.split('');
      const mappedElements = elements.map((segment) => {
        const idx = currentGlobalIndex;
        currentGlobalIndex++;
        return { segment, globalIndex: idx };
      });
      return { line, elements: mappedElements };
    });
  }, [lines, animateBy]);

  const totalElements = useMemo(() => {
    return lineData.reduce((acc, currentLine) => acc + currentLine.elements.length, 0);
  }, [lineData]);

  return (
    <span ref={ref} className={className} style={{ display: 'block' }}>
      {lineData.map((lineObj, lineIdx) => (
        <span key={lineIdx} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {lineObj.elements.map(({ segment, globalIndex }, index) => {
            const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

            const spanTransition = {
              duration: totalDuration,
              times,
              delay: (globalIndex * delay) / 1000
            };
            spanTransition.ease = easing;

            return (
              <motion.span
                className="inline-block will-change-[transform,filter,opacity]"
                key={index}
                initial={fromSnapshot}
                animate={inView ? animateKeyframes : fromSnapshot}
                transition={spanTransition}
                onAnimationComplete={globalIndex === totalElements - 1 ? onAnimationComplete : undefined}
              >
                {segment === ' ' ? '\u00A0' : segment}
                {animateBy === 'words' && index < lineObj.elements.length - 1 && '\u00A0'}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

export default BlurText;
