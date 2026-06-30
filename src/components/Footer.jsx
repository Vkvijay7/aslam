import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
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
    <footer className="bg-surface-container border-t border-black/5 transition-colors">
      <div className="flex flex-col w-full px-margin-mobile md:px-margin-desktop py-12 md:py-16 max-w-[1280px] mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <h2 className="font-hero-heading text-3xl uppercase text-evergreen transition-colors tracking-tight font-extrabold">
              MA SQUARE
            </h2>
            <p className="font-paragraph text-sm text-[#120F17]/75 max-w-sm leading-relaxed">
              Building the foundations of tomorrow with the engineering mastery of today. Certified, uncompromising, and professional.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-nav-link text-evergreen uppercase text-xs tracking-widest font-bold">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about-new' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Pricing', id: 'pricing' },
              ].map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="font-paragraph text-xs text-[#120F17]/65 hover:text-evergreen transition-colors inline-block w-max"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-nav-link text-evergreen uppercase text-xs tracking-widest font-bold">
              Our Services
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                'Foundation & Structural',
                'Elevation & Façade Works',
                'Marble & Tile Installation',
                'Custom Woodwork & Carpentry',
                'Turnkey Renovations',
              ].map((service) => (
                <a 
                  key={service} 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="font-paragraph text-xs text-[#120F17]/65 hover:text-evergreen transition-colors inline-block w-max"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-nav-link text-evergreen uppercase text-xs tracking-widest font-bold">
              Contact Us
            </h4>
            <div className="space-y-3 font-paragraph text-xs text-[#120F17]/65 leading-relaxed">
              <p>
                Begampur, Madurai Road,<br/>
                Dindigul.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <a 
                  href="tel:+916383504911"
                  className="flex items-center gap-1.5 hover:text-evergreen transition-colors font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-evergreen" /> +91 6383504911
                </a>
                <a 
                  href="https://wa.me/916383504911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-evergreen transition-colors text-[#25D366] font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-6">
          <p className="font-paragraph text-[10px] text-[#120F17]/50 tracking-widest uppercase font-semibold text-center md:text-left">
            © 2024 MA SQUARE CONSTRUCTION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a 
                key={link} 
                href="#" 
                onClick={(e) => e.preventDefault()}
                className="font-paragraph text-[10px] text-[#120F17]/50 hover:text-evergreen transition-colors uppercase tracking-widest font-semibold"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
