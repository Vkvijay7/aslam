import React from 'react';
import { Wrench, Layers, ShieldCheck, HardHat, Home, CheckCircle2 } from 'lucide-react';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';

export default function Services() {

  const expertise = [
    {
      num: '01 Precision',
      title: 'Engineering',
      desc: 'Structural analysis, seismic retrofitting, and high-load capacity design for industrial environments.',
      icon: <Layers className="w-8 h-8 text-evergreen" />,
      theme: 'bg-white border-evergreen text-[#120F17] rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
    },
    {
      num: '02 Vision',
      title: 'Architecture',
      desc: 'Modernistic aesthetic design integrated with functional spatial planning for residential and commercial hubs.',
      icon: <Wrench className="w-8 h-8 text-evergreen" />,
      featured: true,
      theme: 'bg-bright-gold border-evergreen text-evergreen rounded-3xl shadow-md hover:shadow-[0_20px_50px_rgba(252,215,23,0.3)]'
    },
    {
      num: '03 Strength',
      title: 'Construction',
      desc: 'End-to-end site management, procurement, and execution with a 0% failure rate policy on site safety.',
      icon: <ShieldCheck className="w-8 h-8 text-evergreen" />,
      theme: 'bg-white border-evergreen text-[#120F17] rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
    }
  ];

  return (
    <section id="services" className="scroll-mt-20">
      
      {/* 1. Expertise Overview */}
      <div className="pt-8 md:pt-section-padding-y pb-10 md:pb-16 bg-white transition-colors relative overflow-hidden border-b border-black/5">
        {/* Parallax elements */}
        <div className="absolute inset-0 blueprint-grid pointer-events-none text-evergreen opacity-[0.02]"></div>
        
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-evergreen font-nav-link text-xs uppercase tracking-widest font-semibold block mb-2">TECHNICAL PROFICIENCY</span>
              <BlurText
                text="EXPERTISE"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="font-section-heading-mobile text-3xl md:text-5xl text-[#120F17] uppercase font-extrabold leading-tight"
              />
            </div>
            <p className="font-nav-link text-nav-link text-evergreen/40 uppercase hidden md:block">
              ENGINEERING MARKERS
            </p>
          </div>

          <div className="expertise-grid grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {expertise.map((card, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.15} distance={50}>
                <div 
                  className={`expertise-card p-8 border transition-all duration-500 group relative overflow-hidden flex flex-col justify-between min-h-[320px] ${card.theme}`}
                >
                {/* Large Background Icon Watermark */}
                <div className={`absolute -right-6 -top-6 transition-opacity duration-300 pointer-events-none ${card.featured ? 'opacity-[0.15] text-evergreen' : 'opacity-[0.03] group-hover:opacity-[0.08] text-evergreen'}`}>
                  {card.title === 'Engineering' ? <Layers className="w-36 h-36" /> : card.title === 'Architecture' ? <Wrench className="w-36 h-36" /> : <ShieldCheck className="w-36 h-36" />}
                </div>

                <div>
                  <div className="mb-8">{card.icon}</div>
                  <h3 className={`font-nav-link text-2xl font-bold uppercase mb-4 ${card.featured ? 'text-evergreen' : 'text-evergreen'}`}>
                    {card.title}
                  </h3>
                  <p className={`font-paragraph text-sm leading-relaxed ${card.featured ? 'text-evergreen/80' : 'text-[#120F17]/80'}`}>
                    {card.desc}
                  </p>
                </div>

                <div className={`mt-8 pt-6 border-t flex justify-between items-center text-evergreen ${card.featured ? 'border-evergreen/20' : 'border-black/5'}`}>
                  <span className={`font-nav-link text-[10px] uppercase tracking-widest font-semibold ${card.featured ? 'opacity-80' : 'opacity-60'}`}>
                    {card.num}
                  </span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
