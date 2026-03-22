import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

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
      <div className="w-full md:w-3/5 h-[60vh] md:h-[90vh] relative overflow-hidden rounded-[3rem] shadow-sm">
        <motion.div style={{ y: yImg }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover opacity-80 transition-all duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-background-light opacity-60" />
        </motion.div>
      </div>
      
      {/* Text Container */}
      <motion.div 
        style={{ y: yText, opacity }}
        className={`w-full md:w-2/5 relative z-10 ${isLeft ? 'text-left' : 'text-right'}`}
      >
        <h2 className="text-[15vw] md:text-[10vw] font-serif italic text-secondary leading-none mb-8 -ml-4 md:-ml-8">{title}</h2>
        <p className="text-xl md:text-2xl font-light text-secondary/70 mb-16 leading-relaxed">
          {desc}
        </p>
        
        <div className={`flex flex-col gap-12 ${isLeft ? 'border-l pl-8' : 'border-r pr-8 items-end'} border-gray-200`}>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/50 block mb-2">Average Yield</span>
            <span className="font-serif text-3xl text-secondary">{yieldAmount}</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/50 block mb-2">Key Trait</span>
            <span className="font-serif text-3xl text-secondary">{trait}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const Breeds = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-background-light text-secondary min-h-screen pt-40 pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-40"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Our Breeds</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic leading-[0.9] tracking-tight text-secondary">
            Elite <br/> <span className="font-display font-medium not-italic text-primary">Genetics.</span>
          </h1>
        </motion.div>

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
        <div className="relative min-h-screen flex items-center mb-32">
          <BreedSection 
            title="Sahiwal."
            desc="Exceptional heat tolerance and efficient production. Our Sahiwal genetics ensure profitability in challenging climates."
            img="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=2000"
            yield="22-28 Liters/Day"
            trait="Heat Tolerance"
            align="right"
          />
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mt-32 mb-32 border-t border-gray-200 pt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Breed Comparison</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-secondary">
              Gir vs <span className="font-display font-medium not-italic text-secondary/40">Sahiwal</span>
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-3 p-8 border-b border-gray-200 bg-background-light text-xs uppercase tracking-widest font-bold text-secondary/60">
              <div>Feature</div>
              <div className="text-center text-primary">Gir</div>
              <div className="text-center text-primary">Sahiwal</div>
            </div>
            {[
              { feature: "Origin", gir: "Gujarat, India", sah: "Punjab, Pakistan/India" },
              { feature: "Milk Yield (Elite)", gir: "18-25 Liters/Day", sah: "16-22 Liters/Day" },
              { feature: "Fat Content", gir: "4.5% - 5.0%", sah: "4.5% - 5.2%" },
              { feature: "Heat Tolerance", gir: "High", sah: "Exceptionally High" },
              { feature: "Disease Resistance", gir: "Excellent (Tick resistant)", sah: "Very Good" },
              { feature: "Temperament", gir: "Docile & Friendly", sah: "Lethargic & Calm" },
              { feature: "Physical Trait", gir: "Prominent forehead, long ears", sah: "Reddish brown, heavy dewlap" }
            ].map((row, i) => (
              <motion.div 
                key={i} 
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="grid grid-cols-3 p-8 border-b border-gray-100 hover:bg-background-light transition-colors text-sm md:text-base"
              >
                <div className="font-serif text-lg text-secondary">{row.feature}</div>
                <div className="text-center text-secondary/70 font-light">{row.gir}</div>
                <div className="text-center text-secondary/70 font-light">{row.sah}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
