import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-new' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + 200; // offset
      const sections = ['home', 'about-new', 'services', 'projects', 'showcase', 'pricing', 'contact-us'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
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
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-5 md:py-8 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4 md:py-5 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center w-full">
        
        {/* Brand Logo & Name */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5 group">
          {/* House icon matching Homy brand mark */}
          <svg className="w-6 h-6 text-black fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="font-outfit text-xl font-bold uppercase tracking-tight text-black flex items-baseline gap-1.5 leading-none">
            MA Square <span className="text-black/50 text-[10px] md:text-xs font-semibold tracking-widest uppercase">CONSTRUCTION</span>
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-outfit text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                activeSection === link.href 
                  ? 'text-black' 
                  : 'text-black/50 hover:text-black'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Contact Action Button (Black Pill with white Arrow circle) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact-us"
            onClick={(e) => handleNavClick(e, '#contact-us')}
            className="bg-black hover:bg-black/90 text-white font-outfit text-xs uppercase pl-6 pr-2.5 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-3 active:scale-95 shadow-sm"
          >
            <span className="tracking-wider">CONTACT US</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black transition-transform duration-300 hover:rotate-45">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md border border-black/5 py-6 px-6 rounded-3xl flex flex-col space-y-4 shadow-xl z-40 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-outfit text-sm uppercase tracking-wider py-2 border-b border-black/5 font-semibold block ${
                activeSection === link.href 
                  ? 'text-black font-bold' 
                  : 'text-black/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-us"
            onClick={(e) => handleNavClick(e, '#contact-us')}
            className="w-full bg-black text-white text-center font-outfit text-xs uppercase pl-6 pr-3 py-3 rounded-full font-bold active:scale-95 mt-4 flex items-center justify-center gap-3"
          >
            <span>CONTACT US</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      )}
    </nav>
  );
}
