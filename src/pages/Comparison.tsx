import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, X, TrendingUp, ShieldCheck, Milk, Zap, Dna } from 'lucide-react';

export const Comparison = () => {
  const traits = [
    { name: "Milk Yield (per lactation)", trad: "1,200 - 2,000 L", et: "3,500 - 6,000 L", gain: "3x higher" },
    { name: "Milk Fat Content", trad: "3.5 - 4.0%", et: "4.5 - 5.5%", gain: "+1.5%" },
    { name: "Genetic Merit (EBV)", trad: "Unknown / Unverified", et: "Verified 3-gen pedigree", gain: "Proven" },
    { name: "Disease Resistance", trad: "Variable, untested", et: "Screened & selected", gain: "Biosecure" },
    { name: "Calving Interval", trad: "18 - 24 months", et: "12 - 14 months", gain: "-6 months" },
    { name: "A2 Milk Guarantee", trad: "Not guaranteed", et: "100% A2 beta-casein", gain: "Guaranteed" },
    { name: "Heat Tolerance", trad: "Moderate", et: "Superior (selected trait)", gain: "Optimized" },
    { name: "Reproductive Efficiency", trad: "1 calf/year (natural)", et: "10-15 embryos/flush", gain: "10x output" },
    { name: "Lifetime Profitability", trad: "₹2 - 4 Lakh", et: "₹8 - 15 Lakh", gain: "3-4x ROI" },
    { name: "Breed Improvement Speed", trad: "25+ years per generation", et: "5-7 years", gain: "5x faster" },
  ];

  const reasons = [
    {
      title: "Superior Genetics, Every Calf",
      desc: "Embryo calves inherit 100% of the elite donor dam's genetics — not a random mix. Every calf born is from a proven, high-merit mother and a genetically tested sire.",
      icon: Dna
    },
    {
      title: "Higher Milk Income from Day 1",
      desc: "Embryo-bred Gir cows produce 3,500–6,000 litres per lactation vs 1,200–2,000L from traditionally bred cows. That's 3x more milk revenue per animal.",
      icon: Milk
    },
    {
      title: "Premium A2 Milk Market",
      desc: "Every embryo calf from verified Gir/Sahiwal donors produces pure A2 milk — commanding ₹80-120/litre premium pricing compared to ₹30-40/L for regular milk.",
      icon: ShieldCheck
    },
    {
      title: "Faster Herd Transformation",
      desc: "Replace your entire herd's genetic potential in 5–7 years instead of 25+ years. One elite donor can create 40–60 high-merit calves in her lifetime through ET.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-background-light min-h-screen pt-40 pb-32 text-secondary">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">The Difference</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary mb-8 leading-[1.1]"
          >
            Traditional vs. Embryo — <br />
            <span className="font-serif italic text-primary">Why ET Wins</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl text-secondary/70 font-light leading-relaxed max-w-3xl"
          >
            The difference isn't just in numbers — it's in genetic certainty. Embryo transfer creates predictable, high-performance progeny from scientifically selected parents.
          </motion.p>
        </div>

        {/* Split Image Comparison */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] overflow-hidden shadow-sm flex flex-col md:flex-row h-[600px] mb-32 border border-gray-200"
        >
          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-background-light rounded-full flex items-center justify-center text-secondary font-serif italic shadow-lg border border-gray-200 text-2xl">
            vs
          </div>

          {/* Left: Traditional */}
          <div className="w-full md:w-1/2 h-full relative group">
            <img 
              src="https://images.unsplash.com/photo-1545468835-04021200982e?auto=format&fit=crop&q=80&w=1200" 
              alt="Traditional Cow" 
              className="w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">Traditional Breeding</p>
              <h3 className="text-4xl font-serif mb-3">Conventional</h3>
              <p className="text-white/80 font-light text-lg">Unverified genetics, low yield, slow improvement</p>
            </div>
          </div>

          {/* Right: ET Bred */}
          <div className="w-full md:w-1/2 h-full relative group">
            <img 
              src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=1200" 
              alt="ET Bred Cow" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Embryo Transfer</p>
              <h3 className="text-4xl font-serif mb-3">ET-Bred Elite</h3>
              <p className="text-white/90 font-light text-lg">Verified pedigree, 3x yield, proven genetics</p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[3rem] shadow-sm p-8 md:p-16 mb-32 border border-gray-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200 text-xs font-bold uppercase tracking-widest text-secondary/50">
                  <th className="py-6 px-4 w-1/4">Trait</th>
                  <th className="py-6 px-4 w-1/4 text-red-500/80"><span className="flex items-center gap-2"><X className="w-4 h-4"/> Traditional</span></th>
                  <th className="py-6 px-4 w-1/4 text-secondary"><span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Embryo (ET)</span></th>
                  <th className="py-6 px-4 w-1/4 text-secondary/50"><span className="flex items-center gap-2"><TrendingUp className="w-4 h-4"/> Gain</span></th>
                </tr>
              </thead>
              <tbody>
                {traits.map((trait, i) => (
                  <motion.tr 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="border-b border-gray-100 hover:bg-background-light transition-colors"
                  >
                    <td className="py-6 px-4 font-serif text-lg text-secondary">{trait.name}</td>
                    <td className="py-6 px-4 text-secondary/60 font-light text-sm">{trait.trad}</td>
                    <td className="py-6 px-4 text-secondary font-medium text-sm">{trait.et}</td>
                    <td className="py-6 px-4">
                      <span className="inline-block px-4 py-1.5 bg-background-light text-secondary text-xs font-bold uppercase tracking-widest rounded-full border border-gray-200">
                        {trait.gain}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Why Farmers Are Switching */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-secondary mb-6"
            >
              Why Farmers Are Switching
            </motion.h2>
            <p className="text-secondary/70 text-lg font-light leading-relaxed mb-8">
              Discover the transformative benefits of Embryo Transfer Technology and why it's the future of dairy farming.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-8 group"
                >
                  <div className="shrink-0 w-16 h-16 bg-background-light rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-primary/30 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-secondary mb-4">{reason.title}</h3>
                    <p className="text-secondary/70 text-lg font-light leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
