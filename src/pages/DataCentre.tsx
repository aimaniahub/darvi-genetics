import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dna, Database, ShieldCheck, Activity, Search, Filter, Droplets, Shield } from 'lucide-react';

const PedigreeNode: React.FC<{ cow: any, isRoot?: boolean }> = ({ cow, isRoot = false }) => {
  return (
    <div className={`relative flex flex-col items-center ${isRoot ? '' : 'mt-8'}`}>
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
    </div>
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
    <div className="bg-white text-gray-900 min-h-screen pt-32 pb-32 font-mono selection:bg-primary selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 border-b border-gray-200 pb-12">
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
          <div className="text-left lg:text-right text-gray-500 text-xs tracking-widest uppercase space-y-2">
            <p>Node: <span className="text-primary">IND-WEST-01</span></p>
            <p>Sync Status: <span className="text-primary">Realtime</span></p>
            <p>Last Block: {new Date().getTime().toString().slice(-6)}</p>
          </div>
        </div>

        {/* Brutalist Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 mb-20 border border-gray-200">
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
              className="bg-white p-8 md:p-12 group hover:bg-primary hover:text-white transition-colors duration-300 cursor-crosshair flex flex-col justify-between min-h-[240px]"
            >
              <div className="flex justify-between items-start mb-12">
                <stat.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                <span className="text-xs opacity-50 font-sans text-gray-500 group-hover:text-white">0{i + 1}</span>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-gray-900 group-hover:text-white">{stat.val}</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-white">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by Cow ID or Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/50 transition-colors shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-2xl py-4 px-8 hover:bg-gray-50 transition-colors text-gray-700 shadow-sm">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Data Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-32"
        >
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Live Database</h2>
            <button className="text-xs uppercase tracking-widest border border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition-colors text-gray-600">
              Export CSV
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-6 p-4 border-b border-gray-200 text-xs uppercase tracking-widest text-gray-500 bg-gray-50">
              <div className="col-span-1 font-semibold">ID</div>
              <div className="col-span-1 font-semibold">Yield</div>
              <div className="col-span-1 font-semibold">Gen Score</div>
              <div className="col-span-1 font-semibold">Lineage</div>
              <div className="col-span-1 font-semibold">Updated</div>
              <div className="col-span-1 text-right font-semibold">Status</div>
            </div>
            
            {/* Table Rows */}
            {filteredRecords.map((rec, i) => (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.05) }}
                key={i} 
                className="grid grid-cols-6 p-4 border-b last:border-b-0 border-gray-100 hover:bg-green-50 transition-colors duration-200 cursor-pointer text-sm md:text-base items-center group bg-white"
              >
                <div className="col-span-1 font-bold text-primary">{rec.id}</div>
                <div className="col-span-1 text-gray-700">{rec.yield}</div>
                <div className="col-span-1 font-mono text-gray-700">{rec.genScore}</div>
                <div className="col-span-1 text-gray-600">{rec.lineage}</div>
                <div className="col-span-1 text-gray-500 text-xs">{rec.lastUpdate}</div>
                <div className="col-span-1 text-right flex justify-end">
                  <span className={`px-3 py-1 text-xs uppercase tracking-widest border rounded-full font-semibold ${rec.status === 'Verified' ? 'border-green-200 text-green-700 bg-green-50' : 'border-yellow-200 text-yellow-700 bg-yellow-50'}`}>
                    {rec.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Pedigree Tree Visualization */}
        <div className="bg-green-50 rounded-[40px] p-8 md:p-16 border border-green-100 shadow-xl overflow-x-auto">
          <div className="min-w-[800px] flex flex-col items-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-12 uppercase tracking-widest text-center w-full border-b border-green-200 pb-6">
              Interactive Pedigree Tree
            </h3>
            
            {/* Root Node */}
            <PedigreeNode cow={sampleTree} isRoot={true} />
            
            {/* Connectors */}
            <div className="relative w-[400px] h-8">
              <div className="absolute top-0 left-1/2 w-px h-4 bg-primary/30 -translate-x-1/2" />
              <div className="absolute top-4 left-0 right-0 h-px bg-primary/30" />
              <div className="absolute top-4 left-0 w-px h-4 bg-primary/30" />
              <div className="absolute top-4 right-0 w-px h-4 bg-primary/30" />
            </div>

            {/* Parents */}
            <div className="flex justify-center gap-24">
              {sampleTree.parents.map((parent, i) => (
                <PedigreeNode key={i} cow={parent} />
              ))}
            </div>
          </div>
        </div>

        {/* Genomic Integration Info */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6 uppercase tracking-tighter">Genomic Integration</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Our data centre utilizes advanced genomic chips to predict milk yield and disease resistance early in a calf's life. This allows for precise selection and faster genetic progress.
            </p>
            <ul className="space-y-4">
              {[
                "Early prediction of milk yield potential",
                "Identification of disease resistance markers",
                "Integration with National Digital Livestock Mission",
                "100% verified lineage tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-[32px] overflow-hidden border border-gray-200 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000" 
              alt="Genomic Testing Lab" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};
