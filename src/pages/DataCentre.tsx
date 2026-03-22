import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dna, Database, ShieldCheck, Activity, Search, Filter, Droplets, Shield } from 'lucide-react';

const PedigreeNode: React.FC<{ cow: any, isRoot?: boolean, delay?: number }> = ({ cow, isRoot = false, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className={`relative flex flex-col items-center ${isRoot ? '' : 'mt-8'}`}
    >
      {!isRoot && (
        <div className="absolute -top-8 left-1/2 w-px h-8 bg-primary/30 -translate-x-1/2" />
      )}
      <div className={`bg-white border ${isRoot ? 'border-primary shadow-lg' : 'border-gray-200'} rounded-2xl p-6 w-72 relative z-10 hover:border-primary/50 transition-colors cursor-pointer group`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors">{cow.name}</h4>
            <p className="text-xs font-mono text-gray-500">{cow.tag}</p>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-green-50 px-2 py-1 rounded-md">{cow.breed}</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 flex items-center gap-2"><Droplets className="w-4 h-4" /> Yield</span>
            <span className="text-gray-900 font-mono">{cow.yield}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 flex items-center gap-2"><Shield className="w-4 h-4" /> Immunity</span>
            <span className="text-gray-900 font-mono">{cow.immunity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 flex items-center gap-2"><Activity className="w-4 h-4" /> Genomic Score</span>
            <span className="text-primary font-mono font-bold">{cow.score}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const DataCentre = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleTree = {
    name: "Gauri",
    tag: "IND-GIR-001",
    breed: "Elite Gir",
    yield: "22L/day",
    immunity: "High",
    score: "98/100",
    parents: [
      {
        name: "Nandini",
        tag: "IND-GIR-P01",
        breed: "Gir",
        yield: "18L/day",
        immunity: "High",
        score: "92/100",
        parents: []
      },
      {
        name: "Brahma (Bull)",
        tag: "IND-GIR-B01",
        breed: "Gir",
        yield: "N/A",
        immunity: "Very High",
        score: "96/100",
        parents: []
      }
    ]
  };
  const records = [
    { id: "GIR-402", yield: "28L/day", genScore: "99.2", status: "Verified", lineage: "Purebred", lastUpdate: "2h ago" },
    { id: "SAH-105", yield: "24L/day", genScore: "98.5", status: "Verified", lineage: "Purebred", lastUpdate: "5h ago" },
    { id: "GIR-311", yield: "26L/day", genScore: "97.8", status: "Pending", lineage: "Cross", lastUpdate: "1d ago" },
    { id: "SAH-209", yield: "25L/day", genScore: "98.1", status: "Verified", lineage: "Purebred", lastUpdate: "2d ago" },
    { id: "GIR-501", yield: "29L/day", genScore: "99.5", status: "Verified", lineage: "Purebred", lastUpdate: "Just now" },
    { id: "GIR-502", yield: "27L/day", genScore: "98.8", status: "Verified", lineage: "Purebred", lastUpdate: "1h ago" },
    { id: "SAH-210", yield: "23L/day", genScore: "97.1", status: "Pending", lineage: "Cross", lastUpdate: "4h ago" },
  ];

  const filteredRecords = records.filter(rec => 
    rec.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    rec.lineage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-background-light text-secondary min-h-screen pt-32 pb-32 selection:bg-primary selection:text-secondary">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 border-b border-gray-200 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Live Telemetry</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic leading-[0.9] tracking-tight text-secondary">
              Genomic <br/> <span className="font-display font-medium not-italic text-primary">Registry.</span>
            </h1>
          </motion.div>
          <div className="text-left lg:text-right text-secondary/70 text-xs tracking-widest uppercase space-y-2 font-mono">
            <p>Node: <span className="text-primary font-bold">IND-WEST-01</span></p>
            <p>Sync Status: <span className="text-primary font-bold">Realtime</span></p>
            <p>Last Block: {new Date().getTime().toString().slice(-6)}</p>
          </div>
        </div>

        {/* Main Content Area: Pinned Stats + Scrollable Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 relative items-start">
          
          {/* Left Column: Pinned Stats */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">System Overview</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Total Records", val: "12,405", icon: Database },
                { label: "Verified Pedigrees", val: "9,802", icon: ShieldCheck },
                { label: "Genetic Sequences", val: "4,102", icon: Dna },
                { label: "Active Transfers", val: "142", icon: Activity },
              ].map((stat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-white p-6 rounded-[2rem] border border-gray-200 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-background-light rounded-2xl text-primary group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-secondary/40 font-bold">0{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-serif text-secondary mb-1">{stat.val}</p>
                    <p className="text-xs font-medium text-secondary/60 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Search & Data Grid */}
          <div className="lg:col-span-8 space-y-8">
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40" />
                <input 
                  type="text" 
                  placeholder="Search by Cow ID or Name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full py-4 pl-14 pr-6 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary/50 transition-colors shadow-sm font-sans"
                />
              </div>
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-full py-4 px-8 hover:bg-background-light transition-colors text-secondary shadow-sm font-medium">
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* Data Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-serif italic text-secondary">Live Database</h2>
                <button className="text-sm font-medium border border-gray-200 rounded-full px-6 py-2 hover:bg-background-light transition-colors text-secondary bg-white shadow-sm">
                  Export CSV
                </button>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-6 p-6 border-b border-gray-200 text-xs uppercase tracking-widest text-secondary/60 bg-background-light/50 font-bold">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-1">Yield</div>
                  <div className="col-span-1">Gen Score</div>
                  <div className="col-span-1">Lineage</div>
                  <div className="col-span-1">Updated</div>
                  <div className="col-span-1 text-right">Status</div>
                </div>
                
                {/* Table Rows */}
                {filteredRecords.map((rec, i) => (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.05) }}
                    key={i} 
                    className="grid grid-cols-6 p-6 border-b last:border-b-0 border-gray-100 hover:bg-background-light transition-colors duration-200 cursor-pointer text-sm md:text-base items-center group"
                  >
                    <div className="col-span-1 font-bold text-primary font-mono">{rec.id}</div>
                    <div className="col-span-1 text-secondary font-medium">{rec.yield}</div>
                    <div className="col-span-1 font-mono text-secondary/80">{rec.genScore}</div>
                    <div className="col-span-1 text-secondary/70">{rec.lineage}</div>
                    <div className="col-span-1 text-secondary/50 text-xs font-mono">{rec.lastUpdate}</div>
                    <div className="col-span-1 text-right flex justify-end">
                      <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full ${rec.status === 'Verified' ? 'bg-primary/10 text-primary' : 'bg-yellow-100 text-yellow-800'}`}>
                        {rec.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>



        {/* Pedigree Tree Visualization */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-200 shadow-sm overflow-x-auto mb-32 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="min-w-[800px] flex flex-col items-center relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-background-light border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Lineage</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif italic text-secondary">
                Interactive Pedigree Tree
              </h3>
            </div>
            
            {/* Root Node */}
            <PedigreeNode cow={sampleTree} isRoot={true} delay={0.1} />
            
            {/* Connectors */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative w-[400px] h-12"
            >
              <div className="absolute top-0 left-1/2 w-px h-6 bg-primary/30 -translate-x-1/2" />
              <div className="absolute top-6 left-0 right-0 h-px bg-primary/30" />
              <div className="absolute top-6 left-0 w-px h-6 bg-primary/30" />
              <div className="absolute top-6 right-0 w-px h-6 bg-primary/30" />
            </motion.div>

            {/* Parents */}
            <div className="flex justify-center gap-24">
              {sampleTree.parents.map((parent, i) => (
                <PedigreeNode key={i} cow={parent} delay={0.4 + (i * 0.1)} />
              ))}
            </div>
          </div>
        </div>

        {/* Genomic Integration Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Technology</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-secondary mb-8">Genomic <span className="font-display font-medium not-italic text-secondary/40">Integration</span></h2>
            <p className="text-lg text-secondary/70 font-light leading-relaxed mb-10">
              Our data centre utilizes advanced genomic chips to predict milk yield and disease resistance early in a calf's life. This allows for precise selection and faster genetic progress.
            </p>
            <ul className="space-y-6">
              {[
                "Early prediction of milk yield potential",
                "Identification of disease resistance markers",
                "Integration with National Digital Livestock Mission",
                "100% verified lineage tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-secondary/80 font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden border border-gray-200 shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000" 
              alt="Genomic Testing Lab" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};
