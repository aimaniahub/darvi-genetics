import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const Breeds = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-[#050505] text-[#E4E3E0] min-h-screen pt-40 pb-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[10vw] font-display font-bold uppercase tracking-tighter leading-[0.85] mb-40"
        >
          Elite <br/> <span className="text-primary font-serif italic lowercase">Genetics.</span>
        </motion.h1>

        {/* Gir Section */}
        <div className="relative mb-64 min-h-screen flex items-center">
          <BreedSection 
            title="Gir."
            desc="Known for their high milk yield and strong immunity, our Gir embryos are sourced from the top 1% of the breed in Western India."
            img="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=2000"
            yield="25-30 Liters/Day"
            trait="Disease Resistance"
            align="left"
          />
        </div>

        {/* Sahiwal Section */}
        <div className="relative min-h-screen flex items-center">
          <BreedSection 
            title="Sahiwal."
            desc="Exceptional heat tolerance and efficient production. Our Sahiwal genetics ensure profitability in challenging climates."
            img="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=2000"
            yield="22-28 Liters/Day"
            trait="Heat Tolerance"
            align="right"
          />
        </div>
      </div>
    </div>
  );
};

const BreedSection = ({ title, desc, img, yield: yieldAmount, trait, align }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isLeft = align === 'left';

  return (
    <section ref={ref} className={`w-full flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}>
      
      {/* Image Container */}
      <div className="w-full md:w-3/5 h-[60vh] md:h-[90vh] relative overflow-hidden">
        <motion.div style={{ y: yImg }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
        </motion.div>
      </div>
      
      {/* Text Container */}
      <motion.div 
        style={{ y: yText, opacity }}
        className={`w-full md:w-2/5 relative z-10 ${isLeft ? 'text-left' : 'text-right'}`}
      >
        <h2 className="text-[15vw] md:text-[10vw] font-serif italic text-primary leading-none mb-8 -ml-4 md:-ml-8">{title}</h2>
        <p className="text-xl md:text-3xl font-light text-[#E4E3E0]/80 mb-16 leading-relaxed">
          {desc}
        </p>
        
        <div className={`flex flex-col gap-12 ${isLeft ? 'border-l-2 pl-8' : 'border-r-2 pr-8 items-end'} border-primary/30`}>
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Average Yield</span>
            <span className="text-4xl md:text-5xl font-display tracking-tighter">{yieldAmount}</span>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Key Trait</span>
            <span className="text-4xl md:text-5xl font-display tracking-tighter">{trait}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
