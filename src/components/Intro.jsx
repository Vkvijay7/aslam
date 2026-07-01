import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import houseImage from '../assets/intro.png';
import houseMobileImage from '../assets/intro-mobile.png';

export default function Intro() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ─── TEXT PARALLAX ───
  // Text moves UP and scales down as you scroll, sliding behind the z-20 house.
  // We keep desktop values strictly untouched, while optimizing mobile progress range and spacing.
  const desktopTextY = useTransform(smoothProgress, [0, 0.8], [0, -150]);
  const desktopTextScale = useTransform(smoothProgress, [0, 0.8], [1.0, 0.88]);

  const mobileTextY = useTransform(smoothProgress, [0, 0.8], [0, -40]);
  const mobileTextScale = useTransform(smoothProgress, [0, 0.8], [1.0, 0.95]);

  const textY = isMobile ? mobileTextY : desktopTextY;
  const textScale = isMobile ? mobileTextScale : desktopTextScale;

  // ─── HOUSE PARALLAX ───
  // House starts pushed down, rises up and scales up as you scroll.
  // We keep desktop values strictly untouched, while optimizing mobile progress range and spacing.
  const desktopHouseY = useTransform(smoothProgress, [0, 0.85], [220, 0]);
  const desktopHouseScale = useTransform(smoothProgress, [0, 0.85], [0.95, 1.15]);

  const mobileHouseY = useTransform(smoothProgress, [0, 0.85], [240, -100]);
  const mobileHouseScale = useTransform(smoothProgress, [0, 0.85], [0.95, 1.20]);

  const houseY = isMobile ? mobileHouseY : desktopHouseY;
  const houseScale = isMobile ? mobileHouseScale : desktopHouseScale;

  const handleScrollToNext = () => {
    const el = document.getElementById('about-new');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full bg-white text-black"
      style={{ height: '145vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">

        {/* ════════════════════════════════════════════════════════════
            z-10: TEXT CONTENT — moves UP, slides behind the house
            ════════════════════════════════════════════════════════════ */}
        <motion.div 
          className="absolute z-10 left-0 right-0 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pointer-events-auto"
          style={{
            y: textY,
            scale: textScale,
            opacity: 1,
            visibility: 'visible',
            pointerEvents: 'auto',
            top: '12%',
            gap: '24px',
          }}
        >
          {/* ── Glassmorphic Badge ── */}
          <div 
            className="flex items-center bg-white/40 border border-white/20 backdrop-blur-md rounded-full font-semibold text-black shadow-sm font-outfit"
            style={{
              gap: '8px',
              padding: '6px 16px',
              fontSize: '12px',
            }}
          >
            <div className="flex -space-x-1.5">
              <img 
                className="rounded-full border border-white object-cover w-6 h-6" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" 
                alt="User 1" 
              />
              <img 
                className="rounded-full border border-white object-cover w-6 h-6" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" 
                alt="User 2" 
              />
              <img 
                className="rounded-full border border-white object-cover w-6 h-6" 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64" 
                alt="User 3" 
              />
            </div>
            <span className="tracking-wide">150+ Premium Builds Completed</span>
          </div>

          {/* ── Main Heading ── */}
          <h1 
            className="relative font-outfit font-black uppercase tracking-tight text-black leading-[1.05] inline-block mx-auto text-[clamp(32px,8vw,76px)]"
          >
            {/* Vertical bar */}
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-[1.5px] h-[75%] bg-black/40" />
            MA SQUARE <span className="text-black/40">CONSTRUCTION</span>
          </h1>

          {/* ── Description Paragraph ── */}
          <p 
            className="font-outfit text-black/60 leading-relaxed"
            style={{ 
              fontSize: '16px',
              maxWidth: '672px',
            }}
          >
            Explore premium architectural designs and custom builds in Trichy &amp; Dindigul, engineered for durability, comfort, and timeless value.
          </p>

          {/* ── Action Buttons ── */}
          <div 
            className="flex flex-row items-center justify-center"
            style={{ 
              gap: '16px',
              paddingTop: '8px',
            }}
          >
            {/* Explore Button */}
            <button 
              onClick={handleScrollToNext}
              className="bg-black hover:bg-black/90 text-white font-outfit uppercase rounded-full font-bold transition-all duration-300 flex items-center active:scale-95 shadow-md"
              style={{
                fontSize: '12px',
                paddingLeft: '28px',
                paddingRight: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
                gap: '12px',
              }}
            >
              <span className="tracking-wider">Explore</span>
              <div 
                className="bg-white rounded-full flex items-center justify-center text-black w-8 h-8"
              >
                <ArrowUpRight style={{ width: '16px', height: '16px' }} />
              </div>
            </button>

            {/* Book Call Button */}
            <a 
              href="tel:+916383504911"
              className="backdrop-blur-sm text-black font-outfit uppercase font-bold transition-all duration-300 flex items-center justify-center shadow-sm rounded-full"
              style={{
                fontSize: '12px',
                padding: '16px 32px',
                backgroundColor: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              Book Call
            </a>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════
            z-20: HOUSE IMAGE — rises up from below, scales up.
            Text slides BEHIND this (z-10 < z-20).
            Uses mobile-optimized image on small screens for better fit.
            ════════════════════════════════════════════════════════════ */}
        <motion.div
          className="absolute z-20 left-0 right-0 w-full flex justify-center pointer-events-none origin-bottom"
          style={{
            y: houseY,
            scale: houseScale,
            willChange: 'transform',
            bottom: '0%',
          }}
        >
          <img 
            src={isMobile ? houseMobileImage : houseImage}
            alt="Premium House Showcase"
            className="h-auto object-contain mx-auto pointer-events-auto"
            style={{
              width: isMobile ? '100%' : '85%',
              maxHeight: '70vh',
            }}
          />
        </motion.div>

        {/* ── White Fog at Bottom (sits above house at z-25) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[12vh] bg-gradient-to-t from-white via-white/70 to-transparent z-[25] pointer-events-none" />

        {/* ── Scroll Indicator ── */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
          <button 
            onClick={handleScrollToNext}
            className="flex flex-col items-center gap-1.5 text-black/40 hover:text-black transition-colors pointer-events-auto"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold font-outfit">Scroll Down</span>
            <span className="material-symbols-outlined animate-bounce">expand_more</span>
          </button>
        </div>

      </div>
    </section>
  );
}
