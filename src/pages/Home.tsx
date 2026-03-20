import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], [0, 400]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-end pb-20">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 origin-bottom">
        <img 
          src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=2000" 
          alt="Elite Gir Cow" 
          className="w-full h-full object-cover object-center opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-6 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-[14vw] md:text-[10vw] font-display font-bold leading-[0.85] tracking-tighter text-[#E4E3E0] uppercase mb-8">
            Genetic <br />
            <span className="text-primary italic font-serif lowercase pr-4">preservation.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <p className="text-xl md:text-3xl text-[#E4E3E0]/80 font-light max-w-2xl leading-relaxed">
              Empowering Indian dairy farmers with scientifically advanced embryo technology using elite Gir and Sahiwal breeds.
            </p>
            <Link to="/services" className="w-20 h-20 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-colors duration-500 group shrink-0">
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MassiveList = () => {
  const items = [
    { title: "Embryo Transfer", desc: "Multiply elite genetics rapidly with our advanced ETT protocols.", img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1000" },
    { title: "Semen Station", desc: "Access high-quality genetic material from top-tier pedigree bulls.", img: "https://images.unsplash.com/photo-1527153358354-fbd99c1c85a6?auto=format&fit=crop&q=80&w=1000" },
    { title: "Nutrition", desc: "Scientific feeding programs designed for maximum yield and health.", img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1000" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="py-32 bg-[#050505] text-[#E4E3E0] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="mb-32">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-primary" /> Our Expertise
          </p>
          <h2 className="text-6xl md:text-8xl font-serif italic text-[#E4E3E0]">Advanced Solutions.</h2>
        </div>

        <div className="border-t border-[#E4E3E0]/10">
          {items.map((item, i) => (
            <Link 
              to="/services"
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block border-b border-[#E4E3E0]/10 py-16 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] -z-10" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10 group-hover:text-black transition-colors duration-500">
                <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">{item.title}</h3>
                <p className="max-w-md text-xl font-light opacity-60 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                <ArrowRight className="w-12 h-12 -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal (Follows Cursor) */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[450px] h-[600px] z-50 hidden lg:block overflow-hidden shadow-2xl"
        style={{ 
          x: smoothX, 
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {items.map((item, i) => (
          <img 
            key={i}
            src={item.img}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}
            referrerPolicy="no-referrer"
          />
        ))}
      </motion.div>
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
    <section className="h-[120vh] w-full bg-[#050505] relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-20 left-6 md:left-20 z-20 mix-blend-difference text-white">
        <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">The Difference</h2>
        <p className="font-serif italic text-3xl opacity-80 mt-4">Traditional vs Embryo</p>
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
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-20 left-6 md:left-20 text-white max-w-sm">
            <h4 className="font-bold text-4xl mb-6 uppercase tracking-widest text-[#E4E3E0]/50">Traditional</h4>
            <ul className="space-y-4 text-lg font-light opacity-80">
              <li className="flex items-center gap-4"><X className="w-6 h-6 text-red-500" /> Uncertain Genetics</li>
              <li className="flex items-center gap-4"><X className="w-6 h-6 text-red-500" /> Medium Milk Yield</li>
              <li className="flex items-center gap-4"><X className="w-6 h-6 text-red-500" /> Slow Growth Rate</li>
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
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          <div className="absolute bottom-20 right-6 md:right-20 text-white max-w-sm text-right">
            <h4 className="font-bold text-4xl mb-6 uppercase tracking-widest text-primary">Embryo Tech</h4>
            <ul className="space-y-4 text-lg font-light opacity-90">
              <li className="flex items-center gap-4 justify-end">High Precision <CheckCircle2 className="w-6 h-6 text-primary" /></li>
              <li className="flex items-center gap-4 justify-end">Elite Milk Yield <CheckCircle2 className="w-6 h-6 text-primary" /></li>
              <li className="flex items-center gap-4 justify-end">Accelerated Growth <CheckCircle2 className="w-6 h-6 text-primary" /></li>
            </ul>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-px bg-primary z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(168,213,186,0.5)]">
            Drag
          </div>
        </div>
      </div>
    </section>
  );
};

const BigNumbers = () => {
  return (
    <section className="py-40 bg-[#050505] text-[#E4E3E0]">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E4E3E0]/10">
          {[
            { num: "3x", label: "Genetic Gain", desc: "Faster improvement than natural service" },
            { num: "2x", label: "Milk Yield", desc: "Potential increase in daily production" },
            { num: "100%", label: "Accuracy", desc: "Verified DNA-based lineage tracking" }
          ].map((stat, i) => (
            <div key={i} className="pt-16 md:pt-0 md:px-16 first:md:pl-0 last:md:pr-0 flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", delay: i * 0.1, stiffness: 100, damping: 20 }}
                className="text-8xl md:text-[10rem] font-display font-bold text-[#E4E3E0] tracking-tighter mb-8 leading-none"
              >
                {stat.num}
              </motion.div>
              <h3 className="text-3xl font-serif italic text-primary mb-6">{stat.label}</h3>
              <p className="text-[#E4E3E0]/50 font-light text-xl max-w-xs">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="bg-[#050505]">
      <Hero />
      <MassiveList />
      <ComparisonSlider />
      <BigNumbers />
      
      {/* Final CTA */}
      <section className="py-40 bg-primary text-black text-center px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <h2 className="text-7xl md:text-[10rem] font-display font-bold uppercase tracking-tighter mb-16 leading-[0.85]">
            Elevate Your <br/> <span className="font-serif italic lowercase">Herd.</span>
          </h2>
          <Link to="/services" className="inline-flex items-center gap-6 bg-black text-primary px-16 py-8 rounded-full text-2xl font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-500">
            Start Now <ArrowRight className="w-8 h-8" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
