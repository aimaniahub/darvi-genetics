import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight, CheckCircle2, X, ChevronDown, Users, Leaf, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], [0, 300]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-32 pb-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=2000" 
          alt="Elite Gir Cow" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-background-light/90" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
            Smart Genetic Solutions <span className="italic font-light text-primary">For</span> Sustainable Dairy
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            We deliver intelligent agricultural systems that help farms grow efficiently while preserving natural resources and supporting long-term environmental balance through smart technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="bg-primary text-secondary px-8 py-4 rounded-full text-sm font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20">
              Get Started Now
            </Link>
            <Link to="/technology" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Floating Widgets */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-left flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">100+ Farmers</p>
              <p className="text-white/70 text-sm">Empowering local communities</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-left flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">95% Success</p>
              <p className="text-white/70 text-sm">In embryo transfer protocols</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-left flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">Sustainable</p>
              <p className="text-white/70 text-sm">Eco-friendly farming practices</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="bg-primary/90 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer hover:bg-primary transition-colors">
          Scroll Down <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
};

const Statement = () => {
  return (
    <section className="py-24 bg-background-light text-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">About Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.2] tracking-tight">
          <span className="font-serif italic text-secondary">Smart Farming Starts With Better Genetics.</span> When farmers miss critical insights, yields suffer and profits fall. Our platform keeps you productive, informed, and connected from embryo transfer to harvest.
        </h2>
      </div>
    </section>
  );
};

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const items = [
    { title: "Embryo Transfer", desc: "Multiply elite genetics rapidly with our advanced ETT protocols.", img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1000" },
    { title: "Semen Station", desc: "Access high-quality genetic material from top-tier pedigree bulls.", img: "https://images.unsplash.com/photo-1527153358354-fbd99c1c85a6?auto=format&fit=crop&q=80&w=1000" },
    { title: "Nutrition", desc: "Scientific feeding programs designed for maximum yield and health.", img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1000" },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 w-full mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-background-light border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Solutions</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif italic text-secondary">
                Sustainable Agriculture <br />
                <span className="font-display font-medium text-secondary/40 not-italic">Projects In Action</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-background-light transition-colors">
                <ArrowRight className="w-5 h-5 rotate-180 text-secondary" />
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-background-light transition-colors">
                <ArrowRight className="w-5 h-5 text-secondary" />
              </button>
            </div>
          </div>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] md:w-[150vw] lg:w-[100vw] px-6 gap-6">
          {items.map((item, i) => (
            <Link to="/services" key={i} className="group block relative h-[500px] w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 rounded-[2rem] overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Smart Farming</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ComparisonSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <section className="h-[100vh] w-full bg-white relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-24 left-6 md:left-24 z-20 mix-blend-difference text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">The Difference</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-serif italic">Traditional vs <br/><span className="font-display font-medium not-italic text-primary">Embryo Tech</span></h2>
      </div>

      <div 
        ref={containerRef}
        className="absolute inset-0 cursor-ew-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* Traditional Cow */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545468835-04021200982e?auto=format&fit=crop&q=80&w=2000" 
            alt="Traditional Cow" 
            className="w-full h-full object-cover grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-24 left-6 md:left-24 text-white max-w-sm">
            <h4 className="font-serif italic text-4xl mb-6 text-gray-300">Traditional</h4>
            <ul className="space-y-4 text-lg font-light opacity-80">
              <li className="flex items-center gap-4"><X className="w-6 h-6 text-red-400" /> Uncertain Genetics</li>
              <li className="flex items-center gap-4"><X className="w-6 h-6 text-red-400" /> Medium Milk Yield</li>
              <li className="flex items-center gap-4"><X className="w-6 h-6 text-red-400" /> Slow Growth Rate</li>
            </ul>
          </div>
        </div>

        {/* Embryo Cow */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=2000" 
            alt="Embryo Cow" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          <div className="absolute bottom-24 right-6 md:right-24 text-white max-w-sm text-right">
            <h4 className="font-serif italic text-4xl mb-6 text-primary">Embryo Tech</h4>
            <ul className="space-y-4 text-lg font-light opacity-90">
              <li className="flex items-center gap-4 justify-end">High Precision <CheckCircle2 className="w-6 h-6 text-primary" /></li>
              <li className="flex items-center gap-4 justify-end">Elite Milk Yield <CheckCircle2 className="w-6 h-6 text-primary" /></li>
              <li className="flex items-center gap-4 justify-end">Accelerated Growth <CheckCircle2 className="w-6 h-6 text-primary" /></li>
            </ul>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-px bg-white/50 z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary font-bold text-xs tracking-widest uppercase shadow-xl backdrop-blur-md">
            Drag
          </div>
        </div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-24 bg-background-light text-secondary">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-secondary max-w-3xl">
            Empowering Farmers With <span className="font-display font-medium not-italic text-secondary/40">Data-Driven Genetics</span>
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]"
        >
          {/* Block 1: Solid Color Stat */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-1 bg-primary rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <Activity className="w-8 h-8 text-secondary" />
            <div>
              <p className="text-5xl font-display font-bold text-secondary mb-2">3x</p>
              <p className="text-secondary/80 font-medium text-sm">Faster Genetic Gain</p>
            </div>
          </motion.div>

          {/* Block 2: Image with Text Overlay */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-2 relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <img 
              src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1000" 
              alt="Farm" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8">
              <p className="text-4xl font-display font-bold text-white mb-2">10-20</p>
              <p className="text-white/80 font-medium text-sm">Calves per Elite Cow Annually</p>
            </div>
          </motion.div>

          {/* Block 3: Solid Color Text */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-1 bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-8 h-8 text-primary" />
            <div>
              <p className="text-4xl font-display font-bold text-secondary mb-2">95%</p>
              <p className="text-secondary/60 font-medium text-sm">Success Rate in ETT</p>
            </div>
          </motion.div>

          {/* Block 4: Large Image */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-2 relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <img 
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1000" 
              alt="Farmer" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8">
              <p className="text-3xl font-serif italic text-white mb-2">Verified Pedigree</p>
              <p className="text-white/80 font-medium text-sm">Unique ID and genomic data for complete traceability.</p>
            </div>
          </motion.div>

          {/* Block 5: Solid Color Stat */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-2 bg-secondary rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <Leaf className="w-8 h-8 text-primary" />
            <div>
              <p className="text-5xl font-display font-bold text-white mb-2">-13.7%</p>
              <p className="text-white/70 font-medium text-sm">Reduction in Methane Emissions</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedCattle = () => {
  const cattle = [
    { name: "Gauri", breed: "Elite Gir", yield: "18-22L / Day", tag: "IND-GIR-001", img: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=800" },
    { name: "Surabhi", breed: "Premium Sahiwal", yield: "16-20L / Day", tag: "IND-SAH-042", img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800" },
    { name: "Nandini", breed: "Elite Gir", yield: "19-24L / Day", tag: "IND-GIR-008", img: "https://images.unsplash.com/photo-1527153358354-fbd99c1c85a6?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="py-24 bg-white text-secondary">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-background-light border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Elite Genetics</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif italic text-secondary">
              Featured <span className="font-display font-medium text-secondary/40 not-italic">Donors</span>
            </h2>
          </div>
          <Link to="/data-centre" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
            View Data Centre <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cattle.map((cow, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[450px] rounded-[2rem] overflow-hidden mb-6">
                <img src={cow.img} alt={cow.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                  <span className="text-xs font-mono text-secondary font-bold">{cow.tag}</span>
                </div>
              </div>
              <h3 className="text-3xl font-serif text-secondary mb-2">{cow.name}</h3>
              <div className="flex justify-between items-center text-secondary/70 font-light text-sm">
                <span>{cow.breed}</span>
                <span>{cow.yield}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="bg-background-light">
      <Hero />
      <Statement />
      <Projects />
      <BentoGrid />
      <ComparisonSlider />
      <FeaturedCattle />
      
      {/* Final CTA */}
      <section className="py-40 bg-secondary text-white text-center px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">Get Started</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-12 leading-[1.1]">
            Elevate Your <br/> <span className="font-display font-medium not-italic text-primary">Herd Today.</span>
          </h2>
          <Link to="/services" className="inline-flex items-center gap-4 bg-primary text-secondary px-10 py-5 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors duration-500 shadow-xl">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
