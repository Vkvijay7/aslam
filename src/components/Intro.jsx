import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
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

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // On mobile: text stays centered and fades out, scaling down slightly, translating down (parallax)
  // On desktop: original behavior (moves up, scales down)
  const textY = useTransform(
    smoothProgress, 
    [0, 0.8], 
    [0, isDesktop ? -150 : -80]
  );
  const textScale = useTransform(
    smoothProgress, 
    [0, 0.8], 
    [1.0, isDesktop ? 0.88 : 0.95]
  );

  // HOUSE: starts pushed down, rises to 0 — SAME pattern as desktop
  const houseY = useTransform(
    smoothProgress, 
    [0, 0.85], 
    [isDesktop ? 220 : 60, isDesktop ? 0 : -40]
  );
  
  const houseScale = useTransform(
    smoothProgress, 
    [0, 0.85], 
    [isDesktop ? 0.95 : 0.93, isDesktop ? 1.15 : 1.06]
  );



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
      className="relative h-[105vh] lg:h-[145vh] w-full bg-white text-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        


        {/* z-10: Text — moves UP fast, slides behind house */}
        <motion.div 
          style={{ 
            y: textY, 
            scale: textScale,
            opacity: 1,
            visibility: 'visible',
            pointerEvents: 'auto'
          }}
          className="absolute z-10 left-0 right-0 top-[26%] xs:top-[28%] md:top-[14%] lg:top-[12%] flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto space-y-3 md:space-y-6 pointer-events-auto"
        >
          {/* Text container: stays 100% opaque on mobile and slides behind the z-20 house */}
          {/* Glassmorphic Badge */}
          <div className="flex items-center gap-1.5 md:gap-2 bg-white/40 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold text-black shadow-sm font-outfit">
            <div className="flex -space-x-1.5">
              <img className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" alt="User 1" />
              <img className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="User 2" />
              <img className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64" alt="User 3" />
            </div>
            <span className="tracking-wide">150+ Premium Builds Completed</span>
          </div>

          <h1 className="relative font-outfit text-4xl sm:text-4xl md:text-6xl lg:text-[76px] font-black uppercase tracking-tight text-black leading-[1.05] inline-block mx-auto">
            {/* Show vertical bar on desktop only */}
            <span className="hidden lg:block absolute -left-2 md:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 w-[1.5px] h-[75%] bg-black/40"></span>
            MA SQUARE <span className="text-black/40">CONSTRUCTION</span>
          </h1>

          <p className="font-outfit text-xs md:text-base text-black/60 max-w-xl md:max-w-2xl leading-relaxed">
            Explore premium architectural designs and custom builds in Trichy &amp; Dindigul, engineered for durability, comfort, and timeless value.
          </p>

          <div className="flex flex-row gap-2 md:gap-4 pt-1 md:pt-2 items-center justify-center">
            {/* Explore Button */}
            {!isDesktop ? (
              <button 
                onClick={handleScrollToNext}
                className="bg-[#120F17] hover:bg-[#120F17]/90 text-white font-outfit text-[11px] uppercase pl-5 pr-1.5 py-1.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2.5 active:scale-95 shadow-md animate-none"
              >
                <span className="tracking-wider">Explore Projects</span>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ) : (
              <button 
                onClick={handleScrollToNext}
                className="bg-black hover:bg-black/90 text-white font-outfit text-[10px] md:text-xs uppercase pl-5 pr-2 py-2 md:pl-7 md:pr-2.5 md:py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 md:gap-3 active:scale-95 shadow-md"
              >
                <span className="tracking-wider">Explore</span>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-black">
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
              </button>
            )}

            {/* Book Call Button */}
            {!isDesktop ? (
              <a 
                href="tel:+916383504911"
                className="bg-white/25 hover:bg-white/40 border border-black/15 backdrop-blur-sm text-black font-outfit text-[11px] uppercase px-6 py-3.5 rounded-[14px] font-bold transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                Book Call
              </a>
            ) : (
              <a 
                href="tel:+916383504911"
                className="bg-white/40 hover:bg-white/60 border border-black/10 backdrop-blur-sm text-black font-outfit text-[10px] md:text-xs uppercase px-5 py-3.5 md:px-8 md:py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                Book Call
              </a>
            )}
          </div>
        </motion.div>

        {/* z-20: House — single img, swaps src, same animation as desktop */}
        <motion.div
          style={{ 
            y: houseY,
            scale: houseScale,
            willChange: 'transform',
          }}
          className="absolute z-20 bottom-[3%] xs:bottom-[5%] md:bottom-0 left-0 right-0 w-full flex justify-center pointer-events-none origin-bottom"
        >
          {!isDesktop ? (
            <img 
              src={houseMobileImage}
              alt="Premium House Showcase"
              className="w-full h-auto object-contain pointer-events-auto mx-auto"
            />
          ) : (
            <img 
              src={houseImage}
              alt="Premium House Showcase"
              className="w-full lg:w-[85%] h-auto max-h-[70vh] object-contain mx-auto pointer-events-auto"
            />
          )}
        </motion.div>

        {/* White fog at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[12vh] bg-gradient-to-t from-white via-white/70 to-transparent z-[25] pointer-events-none" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none hidden md:block">
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
