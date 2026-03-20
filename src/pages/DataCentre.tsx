import React from 'react';
import { motion } from 'motion/react';
import { Dna, Database, ShieldCheck, Activity } from 'lucide-react';

export const DataCentre = () => {
  const records = [
    { id: "GIR-402", yield: "28L/day", genScore: "99.2", status: "Verified", lineage: "Purebred", lastUpdate: "2h ago" },
    { id: "SAH-105", yield: "24L/day", genScore: "98.5", status: "Verified", lineage: "Purebred", lastUpdate: "5h ago" },
    { id: "GIR-311", yield: "26L/day", genScore: "97.8", status: "Pending", lineage: "Cross", lastUpdate: "1d ago" },
    { id: "SAH-209", yield: "25L/day", genScore: "98.1", status: "Verified", lineage: "Purebred", lastUpdate: "2d ago" },
    { id: "GIR-501", yield: "29L/day", genScore: "99.5", status: "Verified", lineage: "Purebred", lastUpdate: "Just now" },
    { id: "GIR-502", yield: "27L/day", genScore: "98.8", status: "Verified", lineage: "Purebred", lastUpdate: "1h ago" },
    { id: "SAH-210", yield: "23L/day", genScore: "97.1", status: "Pending", lineage: "Cross", lastUpdate: "4h ago" },
  ];

  return (
    <div className="bg-[#050505] text-[#E4E3E0] min-h-screen pt-32 pb-32 font-mono selection:bg-primary selection:text-black">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 border-b border-[#E4E3E0]/20 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live Telemetry
            </p>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.85]">
              Genomic <br/> <span className="text-primary font-serif italic lowercase">Registry.</span>
            </h1>
          </motion.div>
          <div className="text-left lg:text-right text-[#E4E3E0]/50 text-xs tracking-widest uppercase space-y-2">
            <p>Node: <span className="text-primary">IND-WEST-01</span></p>
            <p>Sync Status: <span className="text-primary">Realtime</span></p>
            <p>Last Block: {new Date().getTime().toString().slice(-6)}</p>
          </div>
        </div>

        {/* Brutalist Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E3E0]/20 mb-20 border border-[#E4E3E0]/20">
          {[
            { label: "Total Records", val: "12,405", icon: Database },
            { label: "Verified Pedigrees", val: "9,802", icon: ShieldCheck },
            { label: "Genetic Sequences", val: "4,102", icon: Dna },
            { label: "Active Transfers", val: "142", icon: Activity },
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-[#050505] p-8 md:p-12 group hover:bg-primary hover:text-black transition-colors duration-300 cursor-crosshair flex flex-col justify-between min-h-[240px]"
            >
              <div className="flex justify-between items-start mb-12">
                <stat.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                <span className="text-xs opacity-50 font-sans">0{i + 1}</span>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{stat.val}</p>
                <p className="text-xs uppercase tracking-widest opacity-60">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Live Database</h2>
            <button className="text-xs uppercase tracking-widest border border-[#E4E3E0]/20 px-4 py-2 hover:bg-[#E4E3E0] hover:text-black transition-colors">
              Export CSV
            </button>
          </div>
          
          <div className="border-t border-l border-r border-[#E4E3E0]/20">
            {/* Table Header */}
            <div className="grid grid-cols-6 p-4 border-b border-[#E4E3E0]/20 text-xs uppercase tracking-widest opacity-50 bg-[#E4E3E0]/5">
              <div className="col-span-1">ID</div>
              <div className="col-span-1">Yield</div>
              <div className="col-span-1">Gen Score</div>
              <div className="col-span-1">Lineage</div>
              <div className="col-span-1">Updated</div>
              <div className="col-span-1 text-right">Status</div>
            </div>
            
            {/* Table Rows */}
            {records.map((rec, i) => (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.05) }}
                key={i} 
                className="grid grid-cols-6 p-4 border-b border-[#E4E3E0]/20 hover:bg-primary hover:text-black transition-colors duration-200 cursor-pointer text-sm md:text-base items-center group"
              >
                <div className="col-span-1 font-bold text-primary group-hover:text-black">{rec.id}</div>
                <div className="col-span-1">{rec.yield}</div>
                <div className="col-span-1 font-mono">{rec.genScore}</div>
                <div className="col-span-1 opacity-80">{rec.lineage}</div>
                <div className="col-span-1 opacity-60 text-xs">{rec.lastUpdate}</div>
                <div className="col-span-1 text-right flex justify-end">
                  <span className={`px-3 py-1 text-xs uppercase tracking-widest border ${rec.status === 'Verified' ? 'border-primary text-primary group-hover:border-black group-hover:text-black' : 'border-yellow-500 text-yellow-500 group-hover:border-black group-hover:text-black'}`}>
                    {rec.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
