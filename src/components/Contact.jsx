import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';

export default function Contact() {

  return (
    <section id="contact-us" className="pt-12 md:pt-16 pb-16 md:pb-24 bg-white text-[#120F17] relative overflow-hidden scroll-mt-20 border-b border-black/5">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-[0.02] text-evergreen"></div>

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        {/* Header (Full Width at the Top) */}
        <div className="space-y-4 mb-8 md:mb-12 text-center md:text-left">
          <span className="text-evergreen font-nav-link text-xs uppercase tracking-widest font-semibold block">
            CONTACT US
          </span>
          <BlurText
            text="GET IN TOUCH"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="font-section-heading-mobile lg:text-5xl text-[#120F17] uppercase font-extrabold leading-none"
          />
        </div>

        {/* Content Layout (Photo Left, Cards Right) */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Left Block (Profile Image frame - Reduced Size similar to About Us) */}
          <ScrollReveal direction="left" delay={0.1} className="w-full md:col-span-4 relative max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[240px] mx-auto">
            <div className="absolute -inset-2 md:-inset-4 border border-black/5 translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 pointer-events-none rounded-2xl md:rounded-3xl"></div>
            <div className="relative w-full h-full aspect-[3/4] overflow-hidden bg-surface-container border border-black/5 rounded-2xl md:rounded-3xl shadow-sm">
              <img 
                alt="Contact Mohamed Aslam" 
                className="w-full h-full object-cover transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqK-HJf3ak-PB41GRTq9H24Y34Ri0E8szKBPiR-oRDNSLkYYjTYlpFBFVusI6fWLb-KrNoNMVrMEiLRofbXH_QY0rB7oT4GwBle836tROptLfP2sQcoV1uZQpbDzTIvM_-A0r4AxS4ixmthEG1mdhz5WS0geY3Nd-YTxahZHGJKBqAo6fYES_gvbxGMqtUBiCxEAk4LT5k-j9hHzIVEWBLjL1biBCSQm5VNunmy5KaJyOJ1CSx2b0pL-O9LTwRSZF7oka_i9wUM0c"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </ScrollReveal>

          {/* Right Block (Cards on the Right Corner) */}
          <ScrollReveal direction="right" delay={0.2} className="w-full md:col-span-8 flex flex-col gap-6 justify-between h-auto">
            
            {/* Info & Location Badge directly above cards */}
            <div className="space-y-3 text-left">
              <p className="font-paragraph text-xs xs:text-sm md:text-base text-[#120F17]/80 leading-relaxed">
                With 7 years of dedicated experience in the industry, we specialize in comprehensive civil construction solutions. From meticulous renovations to complete full concrete work, serving Trichy and Dindigul with top-tier engineering mastery. Let's build your vision into reality.
              </p>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center gap-1.5 md:gap-2 text-[10px] xs:text-xs md:text-sm font-semibold text-evergreen/90 bg-evergreen/5 px-3 py-1 md:px-3 md:py-1.5 rounded-full w-max border border-evergreen/10">
                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-evergreen animate-pulse"></span>
                  Begampur, Madurai Road, Dindigul
                </div>
              </div>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-6 pt-4 border-t border-black/5">
              
              {/* Phone Card */}
              <div className="bg-[#F8F9FA] border border-black/5 p-3 md:p-6 rounded-xl md:rounded-3xl flex flex-col justify-between flex-1 md:flex-initial md:h-auto">
                <div>
                  <div className="p-1 bg-white border border-black/5 inline-block rounded-lg md:rounded-xl">
                    <Phone className="w-3.5 h-3.5 md:w-5 md:h-5 text-evergreen" />
                  </div>
                  <h4 className="font-nav-link text-xs xs:text-sm md:text-lg font-bold text-[#120F17] uppercase tracking-wide mt-1.5">Direct Phone</h4>
                  <p className="font-paragraph text-[10px] xs:text-xs md:text-sm text-[#120F17]/70 leading-snug mt-1.5">
                    Connect directly with our lead builder to discuss structural requirements and scheduling.
                  </p>
                </div>
                <div className="pt-2">
                  <a 
                    href="tel:+916383504911"
                    className="inline-flex items-center gap-1 px-3 py-1.5 md:px-6 md:py-3 bg-black hover:bg-evergreen text-white font-nav-link text-[10px] xs:text-xs md:text-xs uppercase font-bold rounded-lg md:rounded-full tracking-wider transition-all active:scale-95 shadow-sm w-full justify-center"
                  >
                    <Phone className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" /> Call
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#F8F9FA] border border-black/5 p-3 md:p-6 rounded-xl md:rounded-3xl flex flex-col justify-between flex-1 md:flex-initial md:h-auto">
                <div>
                  <div className="p-1 bg-white border border-black/5 inline-block rounded-lg md:rounded-xl">
                    <MessageCircle className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#25D366]" />
                  </div>
                  <h4 className="font-nav-link text-xs xs:text-sm md:text-lg font-bold text-[#120F17] uppercase tracking-wide mt-1.5">WhatsApp Chat</h4>
                  <p className="font-paragraph text-[10px] xs:text-xs md:text-sm text-[#120F17]/70 leading-snug mt-1.5">
                    Send us your blueprints, floorplans, or design references for quick consultation.
                  </p>
                </div>
                <div className="pt-2">
                  <a 
                    href="https://wa.me/916383504911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 md:px-6 md:py-3 bg-[#25D366] hover:bg-evergreen text-white font-nav-link text-[10px] xs:text-xs md:text-xs uppercase font-bold rounded-lg md:rounded-full tracking-wider transition-all active:scale-95 shadow-sm w-full justify-center"
                  >
                    <MessageCircle className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" /> Chat
                  </a>
                </div>
              </div>

            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
