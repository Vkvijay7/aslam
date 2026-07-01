import React from 'react';
import { Wrench, Layers, ShieldCheck, HardHat, Home, CheckCircle2 } from 'lucide-react';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { AnimatedFolder } from './ui/3d-folder';

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

  const portfolioData = [
    {
      title: "Engineering",
      projects: [
        { id: "eng1", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBM-OFA1L7E5iaG8eL_EBMZQA8xzPw6CQSXjbfzQbxEUCVHzF4yLxYruPClAiFRfeDukETVgJsr2kH6Cyeud7a3uiFkeAh1jh-O7-FUo8A4baw7I-DPd7o8sLyEWCqLsdp0J10b7L8cvIT2N25hzkhk_5wjxyDtb2qcgD4i4IPiOmkWwGGaXgwJgON04N0sXM-idHlawsLVs0Q_WNMHIkkG3Un5EvCQK2hrlmfDeqpOE5fe-MfwtqmHzTOOb9GDoKYSiSd0vo-Pb4", title: "Structural Steel Frame" },
        { id: "eng2", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPBIKEb5pKWbOguI0yP9ZifX0xLim0urwPnOKgPgwykbOebWjugI-2eqTf3nPOGqBKbL9yXjM1uji9I2qLMWCmAXHRt4wLy8qY8UZeOq9vMBg6CjqJ5tM_3VqhIf7G_1G8mGy2K7sCDw4rNj-9smEaUW6THIVBoWc41XNBq9a9DUz5lKvfjcomvW2rQKvoSIUFvy9whQHb0_yLImBcaShk9QS2JS8aELF9e_0eeIjKtXGzEQu9qs5ODwsUsyZEEfxIu9JwF5KcHyw", title: "Seismic Retrofitting" },
        { id: "eng3", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiWyeLtbXOnXTYfG1eLzmP70_AvgfrWTIJXGDPZPkXGLlxylHmVYm52BEYm2UxT9u8P5J4JEyCsuKtVYjSjLHR3OAhhrVdnR6y2ijuttt_QLEPnz4kYow0ZCQJn9gn7z_WktoZYjIW9dthyseZkocECdtaWt7Soy4GssP8jQJw6z2ba48G-tQ_ohJrnP9UZoeGnOrUiiJGrYo25TbHo3soiXwL6KzS0_NkwhR4XOXbBeX9XwuwzHLN4M82iRaCHwHBDF2pRrv3KPY", title: "High-Load Foundations" }
      ]
    },
    {
      title: "Architecture",
      projects: [
        { id: "arc1", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiWyeLtbXOnXTYfG1eLzmP70_AvgfrWTIJXGDPZPkXGLlxylHmVYm52BEYm2UxT9u8P5J4JEyCsuKtVYjSjLHR3OAhhrVdnR6y2ijuttt_QLEPnz4kYow0ZCQJn9gn7z_WktoZYjIW9dthyseZkocECdtaWt7Soy4GssP8jQJw6z2ba48G-tQ_ohJrnP9UZoeGnOrUiiJGrYo25TbHo3soiXwL6KzS0_NkwhR4XOXbBeX9XwuwzHLN4M82iRaCHwHBDF2pRrv3KPY", title: "Modernist Spatial Villa" },
        { id: "arc2", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTQ7uelJ-yXh3Iq-uCMns8TpruSH0AoYJx1yqCzOsSyPJUZ8O_aCS_P93NhpoCvrngb5YFvZThEC77P1wNvKnbS3EzXrJ7TH3xt85LW3MekBCqHbQMW9dHuCIPJmCd1TWhfDnqtCC4wIUNza7g5OwFBwdjW-T6EcOSu4CU0NP2E9Yy2MF_i8vA9BgvFaIz4D-yaZuSYhHeHQRwxV3_5iZgMLGc3e9UItvn8-vVjkZQy1yk5MfHVS-K8AkM0v41kLFLeHeCleQs39o", title: "Skyline Estates Hub" },
        { id: "arc3", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPBIKEb5pKWbOguI0yP9ZifX0xLim0urwPnOKgPgwykbOebWjugI-2eqTf3nPOGqBKbL9yXjM1uji9I2qLMWCmAXHRt4wLy8qY8UZeOq9vMBg6CjqJ5tM_3VqhIf7G_1G8mGy2K7sCDw4rNj-9smEaUW6THIVBoWc41XNBq9a9DUz5lKvfjcomvW2rQKvoSIUFvy9whQHb0_yLImBcaShk9QS2JS8aELF9e_0eeIjKtXGzEQu9qs5ODwsUsyZEEfxIu9JwF5KcHyw", title: "Corporate Headquarters" }
      ]
    },
    {
      title: "Construction",
      projects: [
        { id: "con1", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoCdncEUR5rptlDIJiZQca5M7z4juTeaZYwKhQ2PKJRu3APD2TgtOWcUHPZ2XG_kZxQNDtmtGhPxfRfKgFgbmNEhFgEfJ9mkRkut1KjdbVtygc3Q5WhAaCbpZDdr__whgUG8mSf0nY_3g5TQ3FCKprhK96McICOpH3bJQrDDEJlvzcVY2r6LeeJ66g7Ojg-RzJl73maIXEj3dQtvu8FxdbvewJZVZawwUPCRDIP9nwB7686cmBnqMXr8g_CVZeZb8BgnFTe7nG9Bc", title: "Tiling & Finishing" },
        { id: "con2", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACb0AP5m8HyQfSWAFaUOd64es3KBU3kIM9Ifig-XIEAycxCz1mFXIqHU7PyEAKLvPsAxVYNMs3b2viQVHitv4VFp-VzVURpCD2TGwNH30jLFv3OyYCv_SnNsILnvYfAqSeuLYjvDmHf3X-XBkBpTNBWR9oieqIgGIM71YI1uLTLHFmJMVSs7yZbES1sO_NZ5OL1JeGxWK2hU77a2af4jziTNRcXAAmLaWi8QxC5TdfFxx9QVH9BMatYiD1ribIPW_PbzlymsOOo3w", title: "Legacy Renovation" },
        { id: "con3", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBM-OFA1L7E5iaG8eL_EBMZQA8xzPw6CQSXjbfzQbxEUCVHzF4yLxYruPClAiFRfeDukETVgJsr2kH6Cyeud7a3uiFkeAh1jh-O7-FUo8A4baw7I-DPd7o8sLyEWCqLsdp0J10b7L8cvIT2N25hzkhk_5wjxyDtb2qcgD4i4IPiOmkWwGGaXgwJgON04N0sXM-idHlawsLVs0Q_WNMHIkkG3Un5EvCQK2hrlmfDeqpOE5fe-MfwtqmHzTOOb9GDoKYSiSd0vo-Pb4", title: "Site Execution" }
      ]
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

          {/* Desktop View: original grid cards */}
          <div className="hidden md:grid expertise-grid grid-cols-3 gap-gutter">
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

          {/* Mobile View: Animated 3D Folders */}
          <div className="flex md:hidden flex-col items-center gap-8 w-full">
            {portfolioData.map((folder) => (
              <AnimatedFolder key={folder.title} title={folder.title} projects={folder.projects} className="w-full max-w-[300px]" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
