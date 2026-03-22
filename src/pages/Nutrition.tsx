import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Wheat, Droplets, Activity, Leaf } from 'lucide-react';

const BeforeAfterStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      <div className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h3 className="text-2xl font-serif italic text-secondary mb-4 relative z-10">Milk Yield Increase</h3>
        <div className="flex items-baseline gap-4 relative z-10">
          <span className="text-6xl font-display font-bold text-primary">+0.27</span>
          <span className="text-xl text-secondary/50 font-light">kg / day</span>
        </div>
        <p className="text-secondary/70 mt-4 text-sm relative z-10 font-light">Average increase observed with balanced ration planning.</p>
      </div>
      <div className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <h3 className="text-2xl font-serif italic text-secondary mb-4 relative z-10">Feed Cost Reduction</h3>
        <div className="flex items-baseline gap-4 relative z-10">
          <span className="text-6xl font-display font-bold text-primary">-₹16.33</span>
          <span className="text-xl text-secondary/50 font-light">/ day</span>
        </div>
        <p className="text-secondary/70 mt-4 text-sm relative z-10 font-light">Average savings per animal through optimized feed formulation.</p>
      </div>
    </div>
  );
};

const FeedingStrategyCards = () => {
  const strategies = [
    {
      title: "Lactation",
      desc: "High energy and protein demand. Focus on quality green fodder and increased concentrate ratio to support milk synthesis without body weight loss.",
      icon: <Droplets className="w-6 h-6 text-primary" />
    },
    {
      title: "Pregnancy (Last Trimester)",
      desc: "Crucial for fetal growth and udder development. Increase dry matter intake with moderate energy. Ensure adequate mineral supplementation.",
      icon: <Activity className="w-6 h-6 text-primary" />
    },
    {
      title: "Maintenance / Dry Period",
      desc: "Lower energy requirement. Maximize dry fodder utilization. Prevent over-conditioning to avoid metabolic issues post-calving.",
      icon: <Leaf className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="mb-32">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Lifecycle Management</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif italic text-secondary">Feeding <span className="font-display font-medium not-italic text-secondary/40">Strategies</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strategies.map((strategy, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-background-light rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {strategy.icon}
            </div>
            <h3 className="text-2xl font-serif text-secondary mb-4">{strategy.title}</h3>
            <p className="text-secondary/70 font-light leading-relaxed">{strategy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Nutrition = () => {
  const [weight, setWeight] = useState(450);
  const [yieldLiters, setYieldLiters] = useState(15);
  const [fat, setFat] = useState(4.5);
  const [stage, setStage] = useState('Mid (90-180d)');

  // Simple mock calculation for demonstration
  const dryMatterIntake = ((weight * 0.025) + (yieldLiters * 0.3)).toFixed(1);
  const concentrate = (yieldLiters * 0.4).toFixed(1);
  const greenFodder = ((parseFloat(dryMatterIntake) - parseFloat(concentrate)) * 0.7 * 4).toFixed(1); // Rough estimate
  const dryFodder = ((parseFloat(dryMatterIntake) - parseFloat(concentrate)) * 0.3 * 1.1).toFixed(1);

  return (
    <div className="bg-background-light min-h-screen pt-32 pb-20 text-secondary">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Precision Feeding</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic leading-[0.9] tracking-tight text-secondary mb-8"
          >
            Nutrition <br/> <span className="font-display font-medium not-italic text-primary">Management.</span>
          </motion.h1>
          <p className="text-xl text-secondary/70 font-light max-w-2xl">
            Optimized ration planning for Gir and Sahiwal cows. Input your cow's parameters to get a scientifically balanced fodder-to-concentrate ratio.
          </p>
        </div>

        <BeforeAfterStats />

        {/* Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 relative items-start">
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-200 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-100">
              <div className="w-12 h-12 bg-background-light rounded-2xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-serif text-secondary">Ration Calculator</h2>
            </div>

            <div className="space-y-10">
              {/* Body Weight */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/60">Body Weight (kg)</label>
                  <span className="font-mono font-bold text-secondary">{weight} kg</span>
                </div>
                <input 
                  type="range" 
                  min="300" max="700" step="10"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-background-light rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Daily Milk Yield */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/60">Daily Milk Yield (Litres)</label>
                  <span className="font-mono font-bold text-secondary">{yieldLiters} L</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="40" step="1"
                  value={yieldLiters}
                  onChange={(e) => setYieldLiters(Number(e.target.value))}
                  className="w-full h-2 bg-background-light rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Milk Fat */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/60">Milk Fat %</label>
                  <span className="font-mono font-bold text-secondary">{fat}%</span>
                </div>
                <input 
                  type="range" 
                  min="3.0" max="7.0" step="0.1"
                  value={fat}
                  onChange={(e) => setFat(Number(e.target.value))}
                  className="w-full h-2 bg-background-light rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Lactation Stage */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4 block">Lactation Stage</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Early (0-90d)', 'Mid (90-180d)', 'Late (180-305d)', 'Dry Period'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStage(s)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border ${stage === s ? 'bg-primary text-secondary border-primary shadow-sm' : 'bg-white border-gray-200 text-secondary/70 hover:bg-background-light hover:border-gray-300'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Scrollable Content) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Results */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-gray-200 flex flex-col justify-center relative overflow-hidden"
            >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="text-center mb-16 relative z-10">
              <div className="w-20 h-20 bg-background-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Wheat className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Recommended Daily Ration</h3>
              <p className="text-gray-500 text-sm">Based on {weight}kg body weight and {yieldLiters}L yield</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background-light p-8 rounded-3xl text-center border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4">Total Dry Matter</p>
                <p className="text-5xl font-serif text-secondary">{dryMatterIntake} <span className="text-xl text-secondary/40 font-sans">kg</span></p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl text-center border border-primary/20 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Concentrate</p>
                <p className="text-5xl font-serif text-primary">{concentrate} <span className="text-xl text-primary/50 font-sans">kg</span></p>
              </div>
              <div className="bg-background-light p-8 rounded-3xl text-center border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-4">Green Fodder</p>
                <p className="text-5xl font-serif text-secondary">{greenFodder} <span className="text-xl text-secondary/40 font-sans">kg</span></p>
              </div>
            </div>
            
            <div className="mt-8 p-8 bg-white border border-gray-200 text-secondary/80 rounded-3xl flex items-start gap-6 shadow-sm">
              <div className="p-3 bg-primary/10 rounded-2xl shrink-0">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <p className="text-base font-light leading-relaxed">
                <strong className="font-medium text-secondary block mb-1">Pro Tip:</strong> Ensure clean drinking water is available ad libitum. A cow producing {yieldLiters}L of milk requires approximately {(yieldLiters * 3) + 40}L of water daily.
              </p>
            </div>
          </motion.div>

          <FeedingStrategyCards />

          {/* Reference Guide */}
          <div>
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Reference Guide</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic text-secondary">Fodder & <span className="font-display font-medium not-italic text-secondary/40">Feed Ingredients</span></h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              
              {/* Roughage */}
              <div className="bg-white rounded-[3rem] p-10 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-background-light rounded-2xl">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-secondary">Roughage / Fodder Types</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Green Fodder (Napier/Maize)", desc: "Base roughage — feed 25-30 kg fresh", val: "20% DM" },
                  { name: "Dry Fodder (Wheat/Paddy Straw)", desc: "Filler roughage — limit to 3-4 kg", val: "90% DM" },
                  { name: "Legume Hay (Lucerne/Berseem)", desc: "Protein-rich roughage — 3-5 kg", val: "85% DM" },
                  { name: "Silage (Maize/Sorghum)", desc: "Fermented feed — 10-15 kg fresh", val: "30% DM" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 rounded-2xl bg-background-light border border-gray-100 hover:border-primary/30 transition-colors group">
                    <div>
                      <p className="font-serif text-lg text-secondary mb-1">{item.name}</p>
                      <p className="text-sm text-secondary/60 font-light">{item.desc}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm group-hover:border-primary/30 transition-colors">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concentrates */}
            <div className="bg-white rounded-[3rem] p-10 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-background-light rounded-2xl">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-secondary">Concentrate Ingredients</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Cattle Feed (Compounded)", cp: "20-22%", tdn: "68-70%", rate: "2-3 kg base + 400g/L milk" },
                  { name: "Mustard Oil Cake", cp: "34-36%", tdn: "72%", rate: "0.5-1.5 kg/day" },
                  { name: "Cotton Seed Cake", cp: "22-24%", tdn: "65%", rate: "0.5-1 kg/day" },
                  { name: "Mineral Mixture", cp: "-", tdn: "-", rate: "30-50 g/day" },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-background-light border border-gray-100 hover:border-primary/30 transition-colors">
                    <p className="font-serif text-lg text-secondary mb-4">{item.name}</p>
                    <div className="grid grid-cols-3 gap-6 text-sm">
                      <div>
                        <span className="block text-secondary/50 uppercase tracking-widest text-xs font-bold mb-2">CP</span>
                        <span className="font-mono font-medium text-secondary/80">{item.cp}</span>
                      </div>
                      <div>
                        <span className="block text-secondary/50 uppercase tracking-widest text-xs font-bold mb-2">TDN</span>
                        <span className="font-mono font-medium text-secondary/80">{item.tdn}</span>
                      </div>
                      <div>
                        <span className="block text-secondary/50 uppercase tracking-widest text-xs font-bold mb-2">Rate</span>
                        <span className="font-mono font-medium text-secondary/80">{item.rate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};
