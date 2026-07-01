import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import BlurText from './BlurText';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export default function Specialties() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const servicesList = [
    {
      title: 'Structural Skeleton & Foundations',
      category: 'Labour & Engineering',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBM-OFA1L7E5iaG8eL_EBMZQA8xzPw6CQSXjbfzQbxEUCVHzF4yLxYruPClAiFRfeDukETVgJsr2kH6Cyeud7a3uiFkeAh1jh-O7-FUo8A4baw7I-DPd7o8sLyEWCqLsdp0J10b7L8cvIT2N25hzkhk_5wjxyDtb2qcgD4i4IPiOmkWwGGaXgwJgON04N0sXM-idHlawsLVs0Q_WNMHIkkG3Un5EvCQK2hrlmfDeqpOE5fe-MfwtqmHzTOOb9GDoKYSiSd0vo-Pb4',
      features: [
        'Reinforced concrete framework',
        'Structural steel layout engineering',
        'Certified soil & load supervision'
      ],
      isDark: true
    },
    {
      title: 'Modern elevation & Façade Architecture',
      category: 'Elevation Works',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiWyeLtbXOnXTYfG1eLzmP70_AvgfrWTIJXGDPZPkXGLlxylHmVYm52BEYm2UxT9u8P5J4JEyCsuKtVYjSjLHR3OAhhrVdnR6y2ijuttt_QLEPnz4kYow0ZCQJn9gn7z_WktoZYjIW9dthyseZkocECdtaWt7Soy4GssP8jQJw6z2ba48G-tQ_ohJrnP9UZoeGnOrUiiJGrYo25TbHo3soiXwL6KzS0_NkwhR4XOXbBeX9XwuwzHLN4M82iRaCHwHBDF2pRrv3KPY',
      features: [
        'Stone & composite wood cladding',
        'Structural glass & glazing details',
        'Aesthetic accent exterior lighting'
      ],
      isDark: false
    },
    {
      title: 'Luxury Marble & Tiling Services',
      category: 'Tile Installations',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp_5FlGPaOLJDOzG6NXO8Yt4Im2--Hn_f0u3Z_OTekYWqHGcTvddx600-cbn5tzWehL1lXjRPeuVh-bqbR33OFOYbh43UsJc9SNN2Tv-o91NsuoqnPGJDeRf82xWhFtSVkDLg5APAv2pxiKGsYcK55G_TrEjL7BBamFXnBAis-oYGuz3Kj-dgNkxhg3n2eVvuLNzXRECjSO-r9MqW3zYboBzxWE0eNRG0IHfDrndaOfQIvUZUIDGRnkIBkwHX9uK-VPJDZLDfh1q0',
      features: [
        'Premium Italian marble installation',
        'Vitrified & ceramic tile layouts',
        'Flawless level & grout alignment'
      ],
      isDark: true
    },
    {
      title: 'Premium Interior & Exterior Painting',
      category: 'Decorative Finishes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYCv5eVLEMrjgrFq5DkczVphNwMLYRvxVA-EdOnqkQoN6trIRWmuaL11ZwQSnaa0DYMctH-bq3aQf-1_VwJeQxMmoSMcW5Ab8x3CYA5LsijiOytAE2kZMdQqtnH4KcXdv4vWysUqB0Pk2GWay9vqK5ENRbOxXEgjqFtAV2bMA7RO5jjVitVexuCS7rks95-3-sswTuCw3x_Ad0GWtTblWoP_mo8S6LzLhxX4E27vz2a2TXk1puP-PyIknIqpRjQYVwdpnKvYXRKmU',
      features: [
        'Weatherproof external coatings',
        'Premium matte & gloss emulsions',
        'Waterproofing compound injection'
      ],
      isDark: false
    },
    {
      title: 'Bespoke Interior Carpentry & Woodwork',
      category: 'Interior Execution',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB7m-JXMfnvvea0xka8yGfX4ERTP7FudBJcNMhExUBgFYK57Z22uVqor2yfvrxVVo9UmUm6Yjf1jDAjd5e80tMwdWO3i-pnioKbFZ9f5fD8fLv6IiejP5lQCeo4fPDKspQmpBPR5qFVtJjW1CPRg8bbhVMnX8bQ3L_YFs4VsseVjSqbzcX2zCyzaHHKwB7_db3vyIOQLpQa4nx8_iq0I7dvF49uNDtHuY4V4wWB9mTRJnniWnO_cjl2wjlS-t0gU6JUlYEbr8fitY',
      features: [
        'Custom modular kitchen fit-outs',
        'Architectural gypsum false ceilings',
        'Integrated wardrobe & closet storage'
      ],
      isDark: true
    },
    {
      title: 'Bespoke Home & Office Renovations',
      category: 'Remodeling & Consulting',
      image: '/renovation_showcase.png',
      features: [
        'Turnkey restoration of old layouts',
        'Electrical & plumbing modernization',
        'Space planning & optimization'
      ],
      isDark: false
    }
  ];

  return (
    <section className="pt-10 pb-24 md:pt-16 md:pb-24 bg-white transition-colors overflow-visible scroll-mt-20 border-b border-black/5" id="specialties">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-evergreen font-nav-link text-xs uppercase tracking-widest font-semibold block mb-2">
            VISUAL SHOWCASE
          </span>
          <BlurText
            text="SERVICES"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="font-section-heading-mobile text-3xl md:text-5xl text-evergreen uppercase font-extrabold leading-tight"
          />
        </div>

        {/* Scrollable / Stacking Cards Container */}
        <div className="relative">
          {isMobile ? (
            /* Mobile View: Natural, static vertical scrolling list with 0% shaking */
            <div className="flex flex-col gap-6 w-full max-w-[600px] mx-auto">
              {servicesList.map((service, index) => {
                const cardBg = service.isDark ? 'bg-evergreen text-white' : 'bg-[#F4F7F6] text-[#120F17]';
                const tagColor = service.isDark ? 'text-bright-gold' : 'text-evergreen';
                const checkColor = service.isDark ? 'text-bright-gold' : 'text-evergreen';
                const borderCol = service.isDark ? 'border-white/10' : 'border-black/5';

                return (
                  <div 
                    key={index} 
                    className={`w-full rounded-[24px] ${cardBg} border ${borderCol} shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col`}
                  >
                    {/* Content Area */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Category Label */}
                        <span className={`inline-block font-nav-link text-[10px] sm:text-xs uppercase tracking-widest font-extrabold mb-2 sm:mb-4 ${tagColor}`}>
                          {service.category}
                        </span>

                        {/* Service Title */}
                        <h3 className="font-nav-link text-base sm:text-lg font-bold uppercase leading-tight tracking-tight mb-3 sm:mb-6">
                          {service.title}
                        </h3>

                        {/* Features List */}
                        <ul className="space-y-2">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2">
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${checkColor}`} />
                              <span className="font-paragraph text-xs opacity-90 leading-none">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Call-to-actions */}
                      <div className="pt-6 flex flex-row gap-3">
                        <a 
                          href="tel:+916383504911"
                          className={`px-4 py-2.5 rounded-full font-nav-link text-[10px] uppercase font-bold tracking-wider transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm ${
                            service.isDark 
                              ? 'bg-white text-evergreen hover:bg-bright-gold hover:text-evergreen' 
                              : 'bg-black text-white hover:bg-evergreen'
                          }`}
                        >
                          <Phone className="w-3 h-3" /> Call
                        </a>

                        <a 
                          href="https://wa.me/916383504911"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2.5 rounded-full font-nav-link text-[10px] uppercase font-bold tracking-wider transition-all active:scale-95 flex items-center justify-center gap-1.5 border ${
                            service.isDark 
                              ? 'border-white/20 text-white hover:bg-white/10' 
                              : 'border-black/25 text-[#120F17] hover:bg-black hover:text-white hover:border-black'
                          }`}
                        >
                          <MessageCircle className="w-3 h-3" /> WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative w-full h-[220px] overflow-hidden group">
                      <img 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        src={service.image}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Desktop View: Interactive ScrollStack with original animations */
            <ScrollStack
              useWindowScroll={true}
              itemDistance={240}
              itemScale={0.02}
              itemStackDistance={30}
              stackPosition="130px"
              scaleEndPosition="60px"
              baseScale={0.9}
              rotationAmount={0}
              blurAmount={0}
            >
              {servicesList.map((service, index) => {
                const cardBg = service.isDark ? 'bg-evergreen text-white' : 'bg-[#F4F7F6] text-[#120F17]';
                const tagColor = service.isDark ? 'text-bright-gold' : 'text-evergreen';
                const checkColor = service.isDark ? 'text-bright-gold' : 'text-evergreen';
                const borderCol = service.isDark ? 'border-white/10' : 'border-black/5';

                return (
                  <ScrollStackItem 
                    key={index} 
                    itemClassName={`w-full max-w-[1000px] mx-auto h-[450px] rounded-[32px] ${cardBg} border ${borderCol} shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden grid grid-cols-12`}
                  >
                    {/* Left Side: Content & Actions */}
                    <div className="col-span-12 md:col-span-6 p-12 flex flex-col justify-between h-full">
                      <div>
                        {/* Category Label */}
                        <span className={`inline-block font-nav-link text-xs uppercase tracking-widest font-extrabold mb-4 ${tagColor}`}>
                          {service.category}
                        </span>

                        {/* Service Name */}
                        <h3 className="font-nav-link text-2xl lg:text-3xl font-bold uppercase leading-tight tracking-tight mb-6">
                          {service.title}
                        </h3>

                        {/* Features List */}
                        <ul className="space-y-4">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-3">
                              <CheckCircle2 className={`w-5 h-5 shrink-0 ${checkColor}`} />
                              <span className="font-paragraph text-base opacity-90 leading-none">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Call-to-actions */}
                      <div className="pt-8 flex flex-row gap-4">
                        <a 
                          href="tel:+916383504911"
                          className={`px-8 py-3.5 rounded-full font-nav-link text-xs uppercase font-bold tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm ${
                            service.isDark 
                              ? 'bg-white text-evergreen hover:bg-bright-gold hover:text-evergreen' 
                              : 'bg-black text-white hover:bg-evergreen'
                          }`}
                        >
                          <Phone className="w-4 h-4" /> Call
                        </a>

                        <a 
                          href="https://wa.me/916383504911"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-8 py-3.5 rounded-full font-nav-link text-xs uppercase font-bold tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2 border ${
                            service.isDark 
                              ? 'border-white/20 text-white hover:bg-white/10' 
                              : 'border-black/25 text-[#120F17] hover:bg-black hover:text-white hover:border-black'
                          }`}
                        >
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Right Side: Showcase Image */}
                    <div className="col-span-12 md:col-span-6 relative w-full h-full overflow-hidden group">
                      <img 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        src={service.image}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                  </ScrollStackItem>
                );
              })}
            </ScrollStack>
          )}
        </div>

        {/* Spacer to prevent clashing with next section */}
        <div className="h-[80px] md:h-[120px]" />

      </div>
    </section>
  );
}
