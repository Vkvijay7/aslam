import React, { useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Modern Villa',
    category: 'Residential',
    desc: 'Luxury residential project in Dindigul.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiWyeLtbXOnXTYfG1eLzmP70_AvgfrWTIJXGDPZPkXGLlxylHmVYm52BEYm2UxT9u8P5J4JEyCsuKtVYjSjLHR3OAhhrVdnR6y2ijuttt_QLEPnz4kYow0ZCQJn9gn7z_WktoZYjIW9dthyseZkocECdtaWt7Soy4GssP8jQJw6z2ba48G-tQ_ohJrnP9UZoeGnOrUiiJGrYo25TbHo3soiXwL6KzS0_NkwhR4XOXbBeX9XwuwzHLN4M82iRaCHwHBDF2pRrv3KPY',
    bgColor: '#FFFFFF',
    textColor: '#093D30',
    gridColor: 'rgba(9, 61, 48, 0.06)'
  },
  {
    id: 2,
    title: 'Corporate HQ',
    category: 'Corporate',
    desc: 'High-end office interior construction.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPBIKEb5pKWbOguI0yP9ZifX0xLim0urwPnOKgPgwykbOebWjugI-2eqTf3nPOGqBKbL9yXjM1uji9I2qLMWCmAXHRt4wLy8qY8UZeOq9vMBg6CjqJ5tM_3VqhIf7G_1G8mGy2K7sCDw4rNj-9smEaUW6THIVBoWc41XNBq9a9DUz5lKvfjcomvW2rQKvoSIUFvy9whQHb0_yLImBcaShk9QS2JS8aELF9e_0eeIjKtXGzEQu9qs5ODwsUsyZEEfxIu9JwF5KcHyw',
    bgColor: '#093D30',
    textColor: '#FFFFFF',
    gridColor: 'rgba(255, 255, 255, 0.08)'
  },
  {
    id: 3,
    title: 'Industrial Hub',
    category: 'Industrial',
    desc: 'Precision structural steel framework.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBM-OFA1L7E5iaG8eL_EBMZQA8xzPw6CQSXjbfzQbxEUCVHzF4yLxYruPClAiFRfeDukETVgJsr2kH6Cyeud7a3uiFkeAh1jh-O7-FUo8A4baw7I-DPd7o8sLyEWCqLsdp0J10b7L8cvIT2N25hzkhk_5wjxyDtb2qcgD4i4IPiOmkWwGGaXgwJgON04N0sXM-idHlawsLVs0Q_WNMHIkkG3Un5EvCQK2hrlmfDeqpOE5fe-MfwtqmHzTOOb9GDoKYSiSd0vo-Pb4',
    bgColor: '#FCD717',
    textColor: '#093D30',
    gridColor: 'rgba(9, 61, 48, 0.12)'
  },
  {
    id: 4,
    title: 'Premium Renovation',
    category: 'Renovations',
    desc: 'Sophisticated interior tiling and finishing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoCdncEUR5rptlDIJiZQca5M7z4juTeaZYwKhQ2PKJRu3APD2TgtOWcUHPZ2XG_kZxQNDtmtGhPxfRfKgFgbmNEhFgEfJ9mkRkut1KjdbVtygc3Q5WhAaCbpZDdr__whgUG8mSf0nY_3g5TQ3FCKprhK96McICOpH3bJQrDDEJlvzcVY2r6LeeJ66g7Ojg-RzJl73maIXEj3dQtvu8FxdbvewJZVZawwUPCRDIP9nwB7686cmBnqMXr8g_CVZeZb8BgnFTe7nG9Bc',
    bgColor: '#F2F3F2',
    textColor: '#120F17',
    gridColor: 'rgba(0, 0, 0, 0.08)'
  },
  {
    id: 5,
    title: 'Skyline Estates',
    category: 'Residential',
    desc: 'Premium multi-family modern residential block.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTQ7uelJ-yXh3Iq-uCMns8TpruSH0AoYJx1yqCzOsSyPJUZ8O_aCS_P93NhpoCvrngb5YFvZThEC77P1wNvKnbS3EzXrJ7TH3xt85LW3MekBCqHbQMW9dHuCIPJmCd1TWhfDnqtCC4wIUNza7g5OwFBwdjW-T6EcOSu4CU0NP2E9Yy2MF_i8vA9BgvFaIz4D-yaZuSYhHeHQRwxV3_5iZgMLGc3e9UItvn8-vVjkZQy1yk5MfHVS-K8AkM0v41kLFLeHeCleQs39o',
    bgColor: '#093D30',
    textColor: '#FCD717',
    gridColor: 'rgba(252, 215, 23, 0.12)'
  },
  {
    id: 6,
    title: 'Legacy Renovation',
    category: 'Renovations',
    desc: 'Historical and luxury interior finishes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACb0AP5m8HyQfSWAFaUOd64es3KBU3kIM9Ifig-XIEAycxCz1mFXIqHU7PyEAKLvPsAxVYNMs3b2viQVHitv4VFp-VzVURpCD2TGwNH30jLFv3OyYCv_SnNsILnvYfAqSeuLYjvDmHf3X-XBkBpTNBWR9oieqIgGIM71YI1uLTLHFmJMVSs7yZbES1sO_NZ5OL1JeGxWK2hU77a2af4jziTNRcXAAmLaWi8QxC5TdfFxx9QVH9BMatYiD1ribIPW_PbzlymsOOo3w',
    bgColor: '#FFFFFF',
    textColor: '#120F17',
    gridColor: 'rgba(0, 0, 0, 0.08)'
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      projectsData.length - 1,
      Math.floor(latest * projectsData.length)
    );
    setActiveIndex(index);
  });

  const activeProject = projectsData[activeIndex];

  const dynamicStyles = {
    backgroundColor: activeProject.bgColor,
    color: activeProject.textColor,
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  const gridPatternStyle = {
    backgroundImage: `
      linear-gradient(to right, ${activeProject.gridColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${activeProject.gridColor} 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
    transition: 'background-image 0.7s ease',
  };

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="relative h-[450vh] w-full"
    >
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center" 
        style={dynamicStyles}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-[1440px] mx-auto relative">
          
          {/* Left Column: Text Content, Pagination & Button */}
          <div className="relative flex flex-col justify-between p-6 md:p-16 min-h-[50vh] md:h-full md:border-r border-black/10 pt-[110px] pb-8 md:pt-[150px] md:pb-16">
            
            {/* Header & Pagination Grouped in normal flow to prevent overlap */}
            <div className="flex flex-col mb-4 md:mb-8">
              <span className="font-nav-link text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold block mb-1">
                PROJECTS
              </span>
              <h2 className="font-nav-link text-lg md:text-3xl font-extrabold uppercase leading-tight mb-3">
                FEATURED WORKS
              </h2>
              
              {/* Pagination Bars */}
              <div className="flex space-x-1.5 md:space-x-2">
                {projectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const el = containerRef.current;
                      if (el) {
                        const rect = el.getBoundingClientRect();
                        const elementTop = rect.top + window.scrollY;
                        const stepHeight = rect.height / projectsData.length;
                        window.scrollTo({
                          top: elementTop + stepHeight * index + 10,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'w-10 md:w-12 bg-current' : 'w-5 md:w-6 opacity-30 bg-current'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Active Content Frame */}
            <div className="relative flex-1 flex flex-col justify-center min-h-[240px] md:min-h-0">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
                >
                  <span className="font-nav-link text-[9px] md:text-[11px] uppercase tracking-widest font-extrabold opacity-60">
                    {project.category}
                  </span>
                  <h3 className="font-nav-link text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mt-1 md:mt-2 leading-none">
                    {project.title}
                  </h3>
                  <p className="font-paragraph mt-2 md:mt-6 text-xs xs:text-sm md:text-lg max-w-md opacity-80 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Get Started / Book Call Button */}
                  <div className="mt-4 md:mt-8">
                    <a
                      href="tel:+916383504911"
                      className="inline-flex px-6 py-2.5 md:px-10 md:py-4 bg-black hover:bg-evergreen text-white font-nav-link text-[9px] md:text-xs uppercase font-bold rounded-full tracking-wider transition-all items-center gap-2 active:scale-95 shadow-md"
                    >
                      <Phone className="w-3.5 h-3.5" /> Book Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Content with Grid Background */}
          <div className="flex items-center justify-center p-4 md:p-8 pt-2 md:pt-[132px] pb-4 md:pb-16 h-[48vh] md:h-full" style={gridPatternStyle}>
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-black/5">
              <div 
                className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${activeIndex * 100}%)` }}
              >
                {projectsData.map((project, index) => (
                  <div key={index} className="w-full h-full relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = `https://placehold.co/800x1200/e2e8f0/4a5568?text=Image+Not+Found`; 
                      }}
                    />
                    {/* Hover Link to detail */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-auto">
                      <a 
                        href="tel:+916383504911"
                        className="bg-white text-evergreen p-4 shadow-xl active:scale-95 transition-transform rounded-full"
                      >
                        <ArrowUpRight className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
