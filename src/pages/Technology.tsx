import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Microscope, Snowflake, Dna, Activity } from 'lucide-react';

export const Technology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-[#050505] text-[#E4E3E0] min-h-screen pt-32 pb-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Hero Section */}
        <div className="min-h-[80vh] flex flex-col justify-center relative z-10 mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-primary" /> Our Facility
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[12vw] md:text-[9vw] font-display font-bold uppercase tracking-tighter leading-[0.85] mb-12"
          >
            Advanced <br/> <span className="text-primary font-serif italic lowercase">Science.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl text-[#E4E3E0]/60 font-light max-w-3xl leading-relaxed"
          >
            Where precision meets nature. Our state-of-the-art laboratories and cryopreservation facilities are designed to maximize the genetic potential of every embryo.
          </motion.p>
        </div>

        {/* Feature 1: The Lab */}
        <TechSection 
          number="01"
          title="The Laboratory"
          desc="Equipped with micromanipulators, laminar flow hoods, and advanced stereomicroscopes, our lab maintains strict ISO-certified cleanroom standards to ensure zero contamination during embryo handling and grading."
          img="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2000"
          icon={Microscope}
        />

        {/* Feature 2: Cryopreservation */}
        <TechSection 
          number="02"
          title="Cryopreservation"
          desc="Using programmable freezers and vitrification techniques, we plunge embryos into liquid nitrogen at -196°C. This suspends biological activity, allowing elite genetics to be stored indefinitely without degradation."
          img="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000"
          icon={Snowflake}
          reverse
        />

        {/* Feature 3: Genomic Testing */}
        <TechSection 
          number="03"
          title="Genomic Testing"
          desc="Before any donor is selected, we perform comprehensive DNA sequencing. We screen for over 50 genetic markers related to milk yield, heat tolerance, and disease resistance to guarantee superior offspring."
          img="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=2000"
          icon={Dna}
        />

      </div>
    </div>
  );
};

const TechSection = ({ number, title, desc, img, icon: Icon, reverse = false }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={`py-32 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 border-t border-[#E4E3E0]/10`}>
      
      {/* Text Content */}
      <motion.div style={{ opacity }} className="w-full lg:w-1/2 relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-primary font-mono text-xl">{number}</span>
          <div className="w-12 h-[1px] bg-primary/50" />
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-[#E4E3E0]/70 font-light leading-relaxed">
          {desc}
        </p>
      </motion.div>

      {/* Image Parallax */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative overflow-hidden rounded-sm">
        <motion.div style={{ y: yImg }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </motion.div>
      </div>

    </section>
  );
};
