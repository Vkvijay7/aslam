import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowDown, HardHat, Building2, Users, ShieldCheck } from 'lucide-react';
import BlurText from './BlurText';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className="relative -mt-[50px] sm:-mt-[80px] lg:mt-0 lg:min-h-screen flex items-start lg:items-center pt-[10px] pb-4 md:pb-10 lg:pb-0 overflow-hidden bg-white rounded-none shadow-[0_-15px_30px_rgba(0,0,0,0.03)] border-t border-black/5 transition-colors duration-500"
      id="about-new"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none text-evergreen opacity-[0.02] transition-colors duration-500"></div>

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-6 items-start relative z-10">

        {/* Block 1: Content Area (Header, Title, Paragraph on the Left Side) */}
        <div className="col-span-8 md:col-span-7 lg:col-span-8 z-10">
          <div className="space-y-4 sm:space-y-6 lg:pr-8">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-evergreen font-nav-link text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold block"
            >
              ABOUT US
            </motion.span>

            <BlurText
              text={"TURNING VISION\nINTO REALITY"}
              delay={150}
              animateBy="words"
              direction="bottom"
              className="font-hero-heading text-base xs:text-xl sm:text-4xl md:text-5xl lg:text-[72px] text-[#120F17] uppercase leading-none font-extrabold tracking-tighter"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="font-paragraph text-xs xs:text-sm sm:text-lg md:text-xl text-[#120F17]/85 max-w-2xl leading-relaxed"
            >
              With 7 years of dedicated experience in the industry, we specialize in comprehensive civil construction solutions. From meticulous renovations to complete full concrete work, we deliver excellence at every stage. Proudly serving Trichy and Dindigul with top-tier construction services.
            </motion.p>

            {/* Stats Cards & Buttons (Flows naturally right below paragraph) */}
            <div className="flex flex-col gap-4 sm:gap-6 w-full mt-4 sm:mt-6 md:mt-8">
              {/* Stat Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-4 gap-1 xs:gap-1.5 sm:gap-4 w-full md:max-w-[480px] lg:max-w-[560px]"
              >
                {[
                  { value: '7+', label: 'Years Experience', icon: HardHat },
                  { value: '150+', label: 'Projects Built', icon: Building2 },
                  { value: '50+', label: 'Expert Team', icon: Users },
                  { value: '100%', label: 'Quality Assured', icon: ShieldCheck },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative aspect-square bg-evergreen p-2 xs:p-2.5 sm:p-4 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                    style={{ borderRadius: '12px' }}
                  >
                    <span className="font-outfit text-xs xs:text-sm sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight block leading-none">
                      {stat.value}
                    </span>
                    <div className="border-t border-white/15 pt-1 sm:pt-3 mt-auto flex items-end justify-between w-full">
                      <span className="font-outfit text-[7px] xs:text-[8px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-bright-gold font-extrabold leading-tight max-w-[95%]">
                        {stat.label}
                      </span>
                      <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white/25 group-hover:text-bright-gold transition-colors duration-300 flex-shrink-0 ml-1 hidden xs:block" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Call Action Buttons */}
              <div className="flex flex-row gap-2 sm:gap-4 w-full md:max-w-[480px] lg:max-w-[560px]">
                <a
                  href="tel:+916383504911"
                  className="flex-1 bg-black hover:bg-evergreen text-white font-nav-link text-[9px] sm:text-xs uppercase py-2.5 sm:py-3.5 rounded-full font-bold flex items-center justify-center gap-1 active:scale-95 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> CALL
                </a>
                <a
                  href="https://wa.me/916383504911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-black/25 text-[#120F17] hover:bg-black hover:text-white hover:border-black font-nav-link text-[9px] sm:text-xs uppercase py-2.5 sm:py-3.5 rounded-full font-bold flex items-center justify-center gap-1 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> WHATSAPP
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Block 2: Profile Image Area (Right Side - always side by side) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="col-span-4 md:col-span-5 lg:col-span-4 relative group w-full ml-auto"
        >
          {/* Main profile image container */}
          <div className="relative overflow-hidden aspect-[0.80] bg-surface-container border border-black/5 rounded-2xl sm:rounded-3xl shadow-sm">
            <img
              alt="Mohamed Aslam"
              className="w-full h-full object-cover transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBevvhpw8Sg-p0v7isT6oIEq7XqnMg-vitmej4NnNbq6ESaYonO8lj6CYfRImgIlq08_MzORLQ-wPqQ6edTpiajb6O0EzyrbipSa0_nTT2zk3g1_kfXS64hvL3XdNi1vhJU9MJaP8M-SRVt5pDZ9KKe0xFtdHXrYwkjzYlbBZMi0jMCdDepeqnxrMxLOSfft6H9rUyXFgGd95uLBHntdr-mVWJlATtGtaAf7mHp5kks_sgtGDynUHjAarMf9tndytpz_O8CHkKmI3k"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Founder Name & Title */}
          <div className="flex flex-col mt-2 sm:mt-4 text-left">
            <span className="font-section-label text-[8px] sm:text-xs uppercase tracking-widest text-evergreen font-bold">FOUNDER &amp; CEO</span>
            <h2 className="font-nav-link text-xs sm:text-2xl font-bold uppercase text-[#120F17] mt-0.5 sm:mt-1">
              Mohamed Aslam
            </h2>
          </div>
        </motion.div>

      </div>

      {/* Floating scroll indicator */}
      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#120F17]/50 hover:text-evergreen transition-colors duration-300 hidden lg:flex flex-col items-center gap-2 text-xs uppercase tracking-widest font-semibold"
      >
        <span>Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </header>
  );
}
