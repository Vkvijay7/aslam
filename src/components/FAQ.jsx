import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';

const faqData = [
  {
    question: 'What is the standard lead time for project feasibility?',
    answer: 'We typically conduct a full structural and spatial feasibility study within 7 to 14 business days, analyzing site soil mechanics, load requirements, zoning limits, and municipal clearance guidelines.'
  },
  {
    question: 'How do you manage site safety and compliance?',
    answer: 'Safety is our absolute priority. We operate under a strict 0% failure rate site safety mandate, providing daily compliance reviews, safety equipment verification, and full-time certified engineering supervision on site.'
  },
  {
    question: 'Do you handle international structural contracts?',
    answer: 'Yes. While our physical construction operations serve Trichy and Dindigul, we consult and deliver high-precision architectural and structural engineering blueprints for international clients in compliance with global standards.'
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="py-6 border-b border-black/5">
      <button 
        onClick={onClick}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <span className="font-nav-link text-lg md:text-xl font-bold text-[#120F17] group-hover:text-evergreen transition-colors">
          {question}
        </span>
        <div className="ml-4 shrink-0 bg-surface-container p-2 border border-black/5 text-evergreen rounded-full transition-transform duration-300">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-paragraph text-sm text-[#120F17]/75 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-12 md:pt-16 pb-16 md:pb-24 bg-white transition-colors scroll-mt-20 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        <ScrollReveal direction="left" delay={0.1}>
          <div className="mb-16">
          <span className="text-evergreen font-nav-link text-xs uppercase tracking-widest font-semibold block mb-2">COMMON INQUIRIES</span>
          <BlurText
            text="FAQ"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="font-section-heading-mobile text-section-heading-mobile text-[#120F17] uppercase font-extrabold"
          />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onClick={() => handleToggle(idx)}
            />
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
