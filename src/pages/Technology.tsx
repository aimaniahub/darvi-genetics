import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Microscope, Snowflake, Dna, Activity, Calculator } from 'lucide-react';

const ROICalculator = () => {
  const [herdSize, setHerdSize] = useState(10);
  const [currentYield, setCurrentYield] = useState(12);
  const [breed, setBreed] = useState('Gir');

  // Simple mock calculation logic based on PRD
  const extraYieldPerCow = 8; // Assuming ET cows give 8L more on average
  const milkPrice = 30; // ₹30/litre
  const etCostPerPregnancy = 15000; // Mock cost
  
  const projectedExtraCalves = Math.floor(herdSize * 0.8); // 80% success rate assumption for simple math
  const dailyExtraMilk = projectedExtraCalves * extraYieldPerCow;
  const annualExtraRevenue = dailyExtraMilk * 300 * milkPrice; // 300 lactation days
  const totalETCost = herdSize * etCostPerPregnancy;
  const netFirstYearROI = annualExtraRevenue - totalETCost;

  return (
    <section className="py-32 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-primary" /> Investment Returns
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
            ROI <span className="font-serif italic text-primary lowercase">Calculator</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto font-light">
            Estimate the financial impact of transitioning your herd to Embryo Transfer Technology.
          </p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-green-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Inputs */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Current Herd Data</h3>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Herd Size (Cows)</label>
                <span className="font-mono font-bold text-gray-900">{herdSize}</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1"
                value={herdSize} onChange={(e) => setHerdSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Avg. Milk Yield (L/day)</label>
                <span className="font-mono font-bold text-gray-900">{currentYield} L</span>
              </div>
              <input 
                type="range" min="5" max="25" step="1"
                value={currentYield} onChange={(e) => setCurrentYield(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 block">Target Breed</label>
              <div className="grid grid-cols-2 gap-3">
                {['Gir', 'Sahiwal'].map((b) => (
                  <button
                    key={b} onClick={() => setBreed(b)}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all border ${breed === b ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-200'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Projected Impact (Year 1)</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-green-200 pb-4">
                <span className="text-gray-600 text-sm">Projected Elite Calves</span>
                <span className="text-3xl font-display font-bold text-gray-900">{projectedExtraCalves}</span>
              </div>
              <div className="flex justify-between items-end border-b border-green-200 pb-4">
                <span className="text-gray-600 text-sm">Extra Daily Milk</span>
                <span className="text-3xl font-display font-bold text-gray-900">+{dailyExtraMilk} <span className="text-lg text-gray-500">L</span></span>
              </div>
              <div className="flex justify-between items-end pt-4">
                <span className="text-primary text-sm font-bold uppercase tracking-widest">Net ROI (Est.)</span>
                <span className="text-4xl font-display font-bold text-primary">₹{(netFirstYearROI / 100000).toFixed(2)}L</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-8 font-light">
              *Estimates based on ₹30/L milk price and standard ET protocols. Actual results may vary based on management practices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Technology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-white text-gray-900 min-h-screen pt-32 pb-32 overflow-hidden">
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
            className="text-xl md:text-3xl text-gray-600 font-light max-w-3xl leading-relaxed"
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

        <ROICalculator />

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
    <section ref={ref} className={`py-32 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 border-t border-gray-200`}>
      
      {/* Text Content */}
      <motion.div style={{ opacity }} className="w-full lg:w-1/2 relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <span className="text-primary font-mono text-xl">{number}</span>
          <div className="w-12 h-[1px] bg-primary/50" />
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.9] text-gray-900">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
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
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>
      </div>

    </section>
  );
};
