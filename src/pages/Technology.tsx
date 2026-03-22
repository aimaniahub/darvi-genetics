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
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Investment Returns</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-secondary">
            ROI <span className="font-display font-medium not-italic text-secondary/40">Calculator</span>
          </h2>
          <p className="text-secondary/70 mt-6 max-w-2xl mx-auto font-light text-lg">
            Estimate the financial impact of transitioning your herd to Embryo Transfer Technology.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Inputs */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 bg-background-light rounded-2xl flex items-center justify-center border border-gray-200">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-secondary">Current Herd Data</h3>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/50">Herd Size (Cows)</label>
                <span className="font-serif text-lg text-secondary">{herdSize}</span>
              </div>
              <input 
                type="range" min="1" max="100" step="1"
                value={herdSize} onChange={(e) => setHerdSize(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/50">Avg. Milk Yield (L/day)</label>
                <span className="font-serif text-lg text-secondary">{currentYield} L</span>
              </div>
              <input 
                type="range" min="5" max="25" step="1"
                value={currentYield} onChange={(e) => setCurrentYield(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-secondary/50 mb-4 block">Target Breed</label>
              <div className="grid grid-cols-2 gap-4">
                {['Gir', 'Sahiwal'].map((b) => (
                  <button
                    key={b} onClick={() => setBreed(b)}
                    className={`py-4 px-6 rounded-2xl text-sm font-medium transition-all border ${breed === b ? 'bg-primary text-white border-primary shadow-md' : 'bg-background-light border-gray-200 text-secondary hover:bg-white hover:border-gray-300'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="bg-background-light rounded-[2rem] p-10 border border-gray-200 flex flex-col justify-center">
            <h3 className="text-xl font-serif text-secondary mb-10 text-center">Projected Impact (Year 1)</h3>
            
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                <span className="text-secondary/70 text-sm font-light">Projected Elite Calves</span>
                <span className="text-4xl font-serif text-secondary">{projectedExtraCalves}</span>
              </div>
              <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                <span className="text-secondary/70 text-sm font-light">Extra Daily Milk</span>
                <span className="text-4xl font-serif text-secondary">+{dailyExtraMilk} <span className="text-xl text-secondary/50">L</span></span>
              </div>
              <div className="flex justify-between items-end pt-6">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Net ROI (Est.)</span>
                <span className="text-5xl font-serif text-primary">₹{(netFirstYearROI / 100000).toFixed(2)}L</span>
              </div>
            </div>
            
            <p className="text-xs text-secondary/50 text-center mt-10 font-light leading-relaxed">
              *Estimates based on ₹30/L milk price and standard ET protocols. Actual results may vary based on management practices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const features = [
  {
    number: "01",
    title: "The Laboratory",
    desc: "Equipped with micromanipulators, laminar flow hoods, and advanced stereomicroscopes, our lab maintains strict ISO-certified cleanroom standards to ensure zero contamination during embryo handling and grading.",
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2000",
    icon: Microscope
  },
  {
    number: "02",
    title: "Cryopreservation",
    desc: "Using programmable freezers and vitrification techniques, we plunge embryos into liquid nitrogen at -196°C. This suspends biological activity, allowing elite genetics to be stored indefinitely without degradation.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000",
    icon: Snowflake
  },
  {
    number: "03",
    title: "Genomic Testing",
    desc: "Before any donor is selected, we perform comprehensive DNA sequencing. We screen for over 50 genetic markers related to milk yield, heat tolerance, and disease resistance to guarantee superior offspring.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=2000",
    icon: Dna
  }
];

const PinnedTechSections = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] mb-32">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="relative h-[50vh] lg:h-[80vh] flex flex-col justify-center">
            {features.map((feature, index) => {
              const start = index * 0.33;
              const end = (index + 1) * 0.33;
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.05, end - 0.1, end],
                [0, 1, 1, 0]
              );
              const y = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.05, end - 0.1, end],
                [50, 0, 0, -50]
              );

              return (
                <motion.div 
                  key={index} 
                  style={{ opacity, y }} 
                  className="absolute inset-0 flex flex-col justify-center pointer-events-none"
                >
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-secondary/40 font-serif text-2xl italic">{feature.number}</span>
                    <div className="w-16 h-[1px] bg-gray-200" />
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-[1.1]">
                    {feature.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-secondary/70 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Images */}
          <div className="relative h-[50vh] lg:h-[80vh] rounded-[3rem] overflow-hidden shadow-sm border border-gray-200">
            {features.map((feature, index) => {
              const start = index * 0.33;
              const end = (index + 1) * 0.33;
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.05, end - 0.1, end],
                [0, 1, 1, 0]
              );
              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [1, 1.1]
              );

              return (
                <motion.div 
                  key={index} 
                  style={{ opacity }} 
                  className="absolute inset-0"
                >
                  <motion.img 
                    style={{ scale }}
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-light/50 via-transparent to-transparent" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export const Technology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-background-light text-secondary min-h-screen pt-32 pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Hero Section */}
        <div className="min-h-[80vh] flex flex-col justify-center relative z-10 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Our Facility</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic leading-[0.9] tracking-tight text-secondary mb-12"
          >
            Advanced <br/> <span className="font-display font-medium not-italic text-primary">Science.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary/70 font-light max-w-3xl leading-relaxed"
          >
            Where precision meets nature. Our state-of-the-art laboratories and cryopreservation facilities are designed to maximize the genetic potential of every embryo.
          </motion.p>
        </div>

        <PinnedTechSections />

        <ROICalculator />

      </div>
    </div>
  );
};
