import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialties from './components/Specialties';
import Projects from './components/Projects';

import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

export default function App() {
  useEffect(() => {
    // Force light mode on HTML element for Homy visual look
    const root = document.documentElement;
    root.classList.add('light');
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');

    // Initialize Lenis smooth scroll on all devices
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-color-text transition-colors duration-500">
      <Navbar />
      <main>
        <Intro />
        <Hero />

        {/* Scrolling Ticker — Construction keywords */}
        <div className="hidden md:block bg-evergreen py-4 border-y border-evergreen-dark/20">
          <Marquee 
            items={['ENGINEERING', 'ARCHITECTURE', 'CONSTRUCTION', 'RENOVATION', 'INTERIOR DESIGN', 'STRUCTURAL INTEGRITY', 'PRECISION BUILDS', 'QUALITY ASSURED']}
            speed={35}
            separator="◆"
            className="font-outfit text-sm font-bold text-white/70 tracking-[0.3em] uppercase"
          />
        </div>

        <Services />
        <Specialties />
        <Projects />

        {/* Scrolling Ticker — Brand & services */}
        <div className="bg-bright-gold py-4 border-y border-black/5">
          <Marquee 
            items={['MA SQUARE CONSTRUCTION', 'TRICHY & DINDIGUL', '150+ PROJECTS', '7+ YEARS', 'PREMIUM BUILDS', 'ZERO DEFECT POLICY', 'TRUSTED BUILDERS']}
            speed={40}
            separator="✦"
            reverse
            className="font-outfit text-sm font-bold text-evergreen/80 tracking-[0.3em] uppercase"
          />
        </div>


        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

