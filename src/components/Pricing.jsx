import React, { useState } from 'react';
import { Check, Info, Phone, MessageCircle } from 'lucide-react';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {


  const plans = [
    {
      title: 'Basic',
      price: 2299,
      features: [
        'Core Structural Work',
        'Standard Finishing',
        'Basic Consultation',
        'Standard Structural Materials'
      ],
      theme: 'bg-white border-evergreen text-[#120F17] rounded-3xl',
      btnTheme: 'bg-black text-white hover:bg-evergreen rounded-full shadow-sm',
      popular: false
    },
    {
      title: 'Premium',
      price: 2449,
      features: [
        'Bespoke Custom Build',
        'Luxury Imported Materials',
        'Full Smart Home Integration',
        'Lifetime Maintenance Support',
        'Dedicated Project Engineer'
      ],
      theme: 'bg-evergreen border-evergreen text-white shadow-2xl relative lg:scale-105 z-10 rounded-3xl',
      btnTheme: 'bg-white text-evergreen hover:bg-bright-gold hover:text-evergreen rounded-full font-bold shadow-sm',
      popular: true
    },
    {
      title: 'Elite',
      price: null,
      features: [
        'Fully Customized Design',
        'Tailored Material Selection',
        'Flexible Timeline & Budget',
        'Personal Project Manager',
        'End-to-End Supervision'
      ],
      theme: 'bg-white border-evergreen text-[#120F17] rounded-3xl',
      btnTheme: 'bg-black text-white hover:bg-evergreen rounded-full shadow-sm',
      popular: false
    }
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="pricing" className="pt-12 md:pt-16 pb-16 md:pb-24 bg-white transition-colors scroll-mt-20 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="mb-16">
          <ScrollReveal direction="left" delay={0.1}>
            <span className="text-evergreen font-nav-link text-xs uppercase tracking-widest font-semibold block mb-2">BUDGET ESTIMATOR</span>
            <BlurText
              text="PRICING PLANS"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="font-section-heading-mobile md:text-5xl text-[#120F17] uppercase font-extrabold"
            />
          </ScrollReveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-4 md:gap-8 justify-center items-stretch pt-4">
          {plans.map((plan, idx) => {
            return (
              <ScrollReveal 
                key={idx} 
                delay={0.15 + idx * 0.1} 
                distance={50}
                className="w-[calc(50%-8px)] md:w-full col-span-1 md:col-span-1"
              >
                <div 
                  className={`border p-4 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-xl relative h-full w-full ${plan.theme}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-bright-gold text-evergreen font-nav-link text-[7px] xs:text-[8px] md:text-[9px] uppercase px-2 py-0.5 md:px-4 md:py-2 font-bold tracking-widest shadow-md rounded-bl-lg rounded-tr-3xl">
                      POPULAR
                    </div>
                  )}

                  <div className="space-y-4 md:space-y-6">
                    <h3 className="font-nav-link text-xs xs:text-sm md:text-xl font-bold uppercase tracking-wider text-center md:text-left">
                      {plan.title}
                    </h3>
                    
                    <div className="text-center md:text-left">
                      {plan.price ? (
                        <>
                          <div className="text-sm xs:text-base md:text-4xl font-extrabold leading-none tracking-tight font-display mb-0.5 md:mb-1">
                            ₹{plan.price.toLocaleString('en-IN')}
                          </div>
                          <span className="text-[8px] xs:text-[9px] md:text-sm font-normal font-paragraph opacity-60 block md:inline">
                            / sqft
                          </span>
                        </>
                      ) : (
                        <div className="text-sm xs:text-base md:text-4xl font-extrabold leading-none tracking-tight font-display mb-0.5 md:mb-1">
                          Custom
                        </div>
                      )}
                    </div>

                    <div className={`h-[1px] w-full ${plan.popular ? 'bg-white/10' : 'bg-black/5'}`}></div>

                    <ul className="space-y-2 md:space-y-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5 md:gap-3">
                          <Check className={`w-3 h-3 md:w-5 md:h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-bright-gold' : 'text-evergreen'}`} />
                          <span className="font-paragraph text-[9px] xs:text-[10px] md:text-sm opacity-80 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons — Call & WhatsApp */}
                  <div className="pt-4 md:pt-8 space-y-2 flex flex-col">
                    <a 
                      href="tel:+916383504911"
                      className={`w-full font-nav-link text-[9px] xs:text-[10px] md:text-xs uppercase py-2 md:py-4 transition-all active:scale-95 font-bold flex items-center justify-center gap-1.5 rounded-full ${plan.btnTheme}`}
                    >
                      <Phone className="w-3 h-3 md:w-4 md:h-4" /> <span className="inline font-nav-link uppercase">Call Now</span>
                    </a>
                    <a 
                      href="https://wa.me/916383504911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full font-nav-link text-[9px] xs:text-[10px] md:text-xs uppercase py-2 md:py-4 transition-all active:scale-95 font-bold flex items-center justify-center gap-1.5 border rounded-full ${
                        plan.popular 
                          ? 'border-white/20 text-white hover:bg-white/10' 
                          : 'border-black/10 text-[#120F17] hover:bg-black hover:text-white hover:border-black'
                      }`}
                    >
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4" /> <span className="inline font-nav-link uppercase">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
