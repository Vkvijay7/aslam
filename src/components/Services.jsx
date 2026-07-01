import React from 'react';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { AnimatedFolder } from './ui/3d-folder';

export default function Services() {

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

          {/* Animated 3D Folders for both Mobile and Desktop */}
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px] mx-auto">
            {portfolioData.map((folder, i) => (
              <ScrollReveal 
                key={folder.title} 
                delay={0.1 + i * 0.15} 
                distance={50}
                className="w-full max-w-[320px] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
              >
                <AnimatedFolder 
                  title={folder.title} 
                  projects={folder.projects} 
                  className="w-full" 
                />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
