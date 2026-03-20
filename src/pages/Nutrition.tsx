import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Wheat, Droplets, Activity, Leaf } from 'lucide-react';

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
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 text-[#E4E3E0]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Precision Feeding</p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter mb-6 uppercase"
          >
            Nutrition Management
          </motion.h1>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            Optimized ration planning for Gir and Sahiwal cows. Input your cow's parameters to get a scientifically balanced fodder-to-concentrate ratio.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 bg-[#0a0a0a] rounded-[40px] p-8 shadow-2xl border border-white/5"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-white">Ration Calculator</h2>
            </div>

            <div className="space-y-8">
              {/* Body Weight */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Body Weight (kg)</label>
                  <span className="font-mono font-bold text-white">{weight} kg</span>
                </div>
                <input 
                  type="range" 
                  min="300" max="700" step="10"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Daily Milk Yield */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Daily Milk Yield (Litres)</label>
                  <span className="font-mono font-bold text-white">{yieldLiters} L</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="40" step="1"
                  value={yieldLiters}
                  onChange={(e) => setYieldLiters(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Milk Fat */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Milk Fat %</label>
                  <span className="font-mono font-bold text-white">{fat}%</span>
                </div>
                <input 
                  type="range" 
                  min="3.0" max="7.0" step="0.1"
                  value={fat}
                  onChange={(e) => setFat(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Lactation Stage */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">Lactation Stage</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Early (0-90d)', 'Mid (90-180d)', 'Late (180-305d)', 'Dry Period'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStage(s)}
                      className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all border ${stage === s ? 'bg-primary text-black border-primary shadow-lg' : 'bg-transparent border-white/10 text-white/60 hover:bg-white/5 hover:border-white/20'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-7 bg-[#0a0a0a] rounded-[40px] p-8 md:p-12 shadow-2xl border border-white/5 flex flex-col justify-center"
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                <Wheat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Recommended Daily Ration</h3>
              <p className="text-white/40 text-sm">Based on {weight}kg body weight and {yieldLiters}L yield</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#111] p-6 rounded-3xl text-center border border-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Total Dry Matter</p>
                <p className="text-4xl font-display font-bold text-white">{dryMatterIntake} <span className="text-lg text-white/40">kg</span></p>
              </div>
              <div className="bg-primary/10 p-6 rounded-3xl text-center border border-primary/20">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-2">Concentrate</p>
                <p className="text-4xl font-display font-bold text-primary">{concentrate} <span className="text-lg text-primary/50">kg</span></p>
              </div>
              <div className="bg-[#111] p-6 rounded-3xl text-center border border-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Green Fodder</p>
                <p className="text-4xl font-display font-bold text-white">{greenFodder} <span className="text-lg text-white/40">kg</span></p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#111] border border-white/10 text-white rounded-3xl flex items-start gap-4">
              <Activity className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm font-light leading-relaxed opacity-90">
                <strong className="font-bold text-primary">Pro Tip:</strong> Ensure clean drinking water is available ad libitum. A cow producing {yieldLiters}L of milk requires approximately {(yieldLiters * 3) + 40}L of water daily.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Reference Guide */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Reference Guide</p>
          <h2 className="text-3xl font-display font-bold text-white mb-10 uppercase tracking-tighter">Fodder & Feed Ingredients</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Roughage */}
            <div className="bg-[#0a0a0a] rounded-[32px] p-8 border border-white/5 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Leaf className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-white">Roughage / Fodder Types</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Green Fodder (Napier/Maize)", desc: "Base roughage — feed 25-30 kg fresh", val: "20% DM" },
                  { name: "Dry Fodder (Wheat/Paddy Straw)", desc: "Filler roughage — limit to 3-4 kg", val: "90% DM" },
                  { name: "Legume Hay (Lucerne/Berseem)", desc: "Protein-rich roughage — 3-5 kg", val: "85% DM" },
                  { name: "Silage (Maize/Sorghum)", desc: "Fermented feed — 10-15 kg fresh", val: "30% DM" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-[#111] border border-white/5 hover:border-primary/30 transition-colors">
                    <div>
                      <p className="font-bold text-white text-sm">{item.name}</p>
                      <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concentrates */}
            <div className="bg-[#0a0a0a] rounded-[32px] p-8 border border-white/5 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Droplets className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-white">Concentrate Ingredients</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Cattle Feed (Compounded)", cp: "20-22%", tdn: "68-70%", rate: "2-3 kg base + 400g/L milk" },
                  { name: "Mustard Oil Cake", cp: "34-36%", tdn: "72%", rate: "0.5-1.5 kg/day" },
                  { name: "Cotton Seed Cake", cp: "22-24%", tdn: "65%", rate: "0.5-1 kg/day" },
                  { name: "Mineral Mixture", cp: "-", tdn: "-", rate: "30-50 g/day" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#111] border border-white/5 hover:border-primary/30 transition-colors">
                    <p className="font-bold text-white text-sm mb-3">{item.name}</p>
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="block text-white/40 uppercase tracking-widest mb-1">CP</span>
                        <span className="font-mono font-semibold text-white/80">{item.cp}</span>
                      </div>
                      <div>
                        <span className="block text-white/40 uppercase tracking-widest mb-1">TDN</span>
                        <span className="font-mono font-semibold text-white/80">{item.tdn}</span>
                      </div>
                      <div>
                        <span className="block text-white/40 uppercase tracking-widest mb-1">Rate</span>
                        <span className="font-mono font-semibold text-white/80">{item.rate}</span>
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
  );
};
