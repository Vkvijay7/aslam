"use client";

import { useRef } from "react";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const BackgroundText = ({ text, index, progress }) => {
  const localProgress = useTransform(progress, (p) => p - index);
  const opacity = useTransform(localProgress, [-0.5, 0, 0.5], [0, 1, 0]);
  const scaleY = useTransform(localProgress, [-0.5, 0, 0.5], [0, 1, 0]);
  const y = "-50%";
  const marqueeText = Array(4).fill(text).join("  •  ");

  return (
    <motion.div
      style={{ opacity, scaleY, y, x: "-50%" }}
      className="absolute top-1/2 left-1/2 overflow-hidden w-[200vw] pointer-events-none"
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex whitespace-nowrap text-[max(2.5rem,5vw)] font-black uppercase tracking-tighter mix-blend-overlay leading-none transition-colors duration-500 text-black/10 dark:text-white/10"
      >
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, progress }) => {
  const visibility = useTransform(progress, (p) => {
    return Math.abs(p - index) <= 1.0 ? "visible" : "hidden";
  });

  const cardBg = project.isDark ? 'bg-evergreen text-white' : 'bg-[#F4F7F6] text-[#120F17]';
  const tagColor = project.isDark ? 'text-bright-gold' : 'text-evergreen';
  const checkColor = project.isDark ? 'text-bright-gold' : 'text-evergreen';
  const borderCol = project.isDark ? 'border-white/10' : 'border-black/5';

  return (
    <motion.div
      style={{
        rotateX: index * 180,
        visibility
      }}
      className={`absolute inset-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[32px] border transition-colors duration-500 [backface-visibility:hidden] ${cardBg} ${borderCol} shadow-[0_20px_50px_rgba(0,0,0,0.06)] grid grid-cols-12`}
    >
      {/* Left Side: Content & Actions */}
      <div className="col-span-12 md:col-span-6 p-6 sm:p-8 md:p-12 flex flex-col justify-between h-[250px] md:h-full">
        <div>
          {/* Category Label */}
          <span className={`inline-block font-nav-link text-[10px] md:text-xs uppercase tracking-widest font-extrabold mb-2 md:mb-4 ${tagColor}`}>
            {project.category}
          </span>

          {/* Service Name */}
          <h3 className="font-nav-link text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase leading-tight tracking-tight mb-3 md:mb-6">
            {project.title}
          </h3>

          {/* Features List */}
          <ul className="space-y-2 md:space-y-4">
            {project.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-center gap-2 md:gap-3">
                <CheckCircle2 className={`w-3.5 h-3.5 md:w-5 h-5 shrink-0 ${checkColor}`} />
                <span className="font-paragraph text-xs sm:text-xs md:text-base opacity-90 leading-none">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call-to-actions */}
        <div className="pt-4 md:pt-8 flex flex-row gap-3 md:gap-4">
          <a 
            href="tel:+916383504911"
            className={`px-4 py-2.5 md:px-8 md:py-3.5 rounded-full font-nav-link text-[10px] md:text-xs uppercase font-bold tracking-wider transition-all active:scale-95 flex items-center justify-center gap-1.5 md:gap-2 shadow-sm ${
              project.isDark 
                ? 'bg-white text-evergreen hover:bg-bright-gold hover:text-evergreen' 
                : 'bg-black text-white hover:bg-evergreen'
            }`}
          >
            <Phone className="w-3 h-3 md:w-4 h-4" /> Call
          </a>

          <a 
            href="https://wa.me/916383504911"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2.5 md:px-8 md:py-3.5 rounded-full font-nav-link text-[10px] md:text-xs uppercase font-bold tracking-wider transition-all active:scale-95 flex items-center justify-center gap-1.5 md:gap-2 border ${
              project.isDark 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-black/25 text-[#120F17] hover:bg-black hover:text-white hover:border-black'
            }`}
          >
            <MessageCircle className="w-3 h-3 md:w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Right Side: Showcase Image */}
      <div className="col-span-12 md:col-span-6 relative w-full h-[230px] md:h-full overflow-hidden group">
        <img 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          src={project.image}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
      </div>
    </motion.div>
  );
};

export default function PerspectiveScrollShowcase({ projects }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const totalRotation = Math.max(0, projects.length - 1) * 180;
  const rotateX = useTransform(springProgress, [0, 1], [0, totalRotation]);

  const normalizedProgress = useTransform(springProgress, [0, 1], [0, Math.max(0, projects.length - 1)]);

  if (!projects || projects.length === 0) return null;

  const containerHeight = Math.max(projects.length * 100, 100);

  return (
    <div
      ref={containerRef}
      className="relative w-full transition-colors duration-500 bg-white"
      style={{ height: `${containerHeight}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1200px]">
        {/* Background Marquee Texts */}
        {projects.map((project, i) => (
          <BackgroundText
            key={`bg-${i}`}
            index={i}
            progress={normalizedProgress}
            text={project.bgText}
          />
        ))}

        {/* 3D Canvas */}
        <motion.div
          style={{
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[92%] max-w-5xl h-[480px] md:h-auto md:aspect-[16/9] cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={`card-${i}`}
              index={i}
              progress={normalizedProgress}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
