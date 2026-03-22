import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const steps = [
  {
    id: "01",
    title: "Donor Selection & Prep",
    desc: "We select top 1% elite Gir and Sahiwal dams based on genomic testing, pedigree records, and physical conformation. The donor is prepared with a high-nutrition diet.",
    img: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "02",
    title: "Superovulation",
    desc: "A precise hormone therapy protocol (FSH) is administered to the donor cow to stimulate the ovaries to release multiple eggs during a single estrus cycle.",
    img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "03",
    title: "Artificial Insemination",
    desc: "The donor is inseminated using sex-sorted or conventional semen from highly proven, progeny-tested bulls to ensure superior genetic combinations.",
    img: "https://images.unsplash.com/photo-1527153358354-fbd99c1c85a6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "04",
    title: "Embryo Flushing",
    desc: "Seven days post-insemination, embryos are safely and non-surgically recovered (flushed) from the donor cow's uterus using a specialized catheter and fluid.",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "05",
    title: "Evaluation & Grading",
    desc: "Embryos are isolated under a microscope, washed, and rigorously graded by our embryologists. Only Grade 1 and Grade 2 embryos are selected for transfer.",
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "06",
    title: "Transfer or Freezing",
    desc: "Fresh embryos are immediately transferred into synchronized recipient (surrogate) cows. Surplus high-quality embryos are cryopreserved in liquid nitrogen for future use.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200"
  }
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background-light min-h-screen text-secondary">
      <div className="h-screen flex flex-col justify-center px-6 md:px-20 max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Our Process</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic leading-[0.9] tracking-tight text-secondary">
            The MOET <br />
            <span className="font-display font-medium not-italic text-primary">Protocol.</span>
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl text-secondary/70 max-w-3xl font-light leading-relaxed"
        >
          A complete walkthrough of the Multiple Ovulation and Embryo Transfer protocol used for elite breed multiplication at our facility.
        </motion.p>
      </div>

      {/* Pinned Scroll Section */}
      <div ref={containerRef} className="relative h-[700vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-background-light">
          
          {/* Background Images Sliding Panels */}
          {steps.map((step, i) => {
            const stepStart = i / steps.length;
            
            const y = useTransform(
              smoothProgress,
              [Math.max(0, stepStart - 0.05), stepStart],
              ["100%", "0%"]
            );

            const isFirst = i === 0;

            return (
              <motion.div 
                key={`bg-${step.id}`}
                style={{ y: isFirst ? "0%" : y, zIndex: i }}
                className="absolute inset-0"
              >
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="w-full h-full object-cover opacity-30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-background-light/30" />
              </motion.div>
            );
          })}

          {/* Foreground Content */}
          <div className="absolute inset-0 z-50 flex items-center">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 w-full">
              <div className="relative h-[50vh] w-full md:w-1/2">
                {steps.map((step, i) => {
                  const stepStart = i / steps.length;
                  const stepEnd = (i + 1) / steps.length;
                  
                  const isFirst = i === 0;
                  
                  const opacity = useTransform(
                    smoothProgress,
                    isFirst 
                      ? [0, stepEnd - 0.05, stepEnd] 
                      : [Math.max(0, stepStart - 0.05), stepStart, stepEnd - 0.05, stepEnd],
                    isFirst 
                      ? [1, 1, 0] 
                      : [0, 1, 1, 0]
                  );
                  
                  const y = useTransform(
                    smoothProgress,
                    isFirst 
                      ? [0, stepEnd - 0.05, stepEnd] 
                      : [Math.max(0, stepStart - 0.05), stepStart, stepEnd - 0.05, stepEnd],
                    isFirst 
                      ? [0, 0, -100] 
                      : [100, 0, 0, -100]
                  );

                  return (
                    <motion.div 
                      key={`content-${step.id}`}
                      style={{ opacity, y, pointerEvents: 'none' }}
                      className="absolute inset-0 flex flex-col justify-center"
                    >
                      <div className="flex items-baseline gap-6 mb-6">
                        <span className="text-primary font-serif italic text-6xl md:text-8xl drop-shadow-sm">{step.id}</span>
                        <div className="h-[1px] w-20 bg-primary/30" />
                      </div>
                      <h2 className="text-5xl md:text-7xl font-serif text-secondary mb-8 leading-[0.9] drop-shadow-sm">
                        {step.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-secondary/70 font-light leading-relaxed max-w-xl drop-shadow-sm">
                        {step.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="absolute bottom-12 left-6 md:left-20 right-6 md:right-20 z-50 flex items-center gap-6">
            <span className="text-secondary/50 font-mono text-sm">01</span>
            <div className="flex-1 h-[1px] bg-gray-200 relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-primary origin-left"
                style={{ scaleX: smoothProgress, right: 0 }}
              />
            </div>
            <span className="text-secondary/50 font-mono text-sm">06</span>
          </div>
        </div>
      </div>

      {/* Outro Section */}
      <div className="min-h-screen flex items-center justify-center px-6 md:px-20 py-32 relative z-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-background-light border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Outcome</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-secondary mb-8"
            >
              The <span className="text-primary italic font-serif">Result.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary/70 font-light leading-relaxed mb-12"
            >
              Through the MOET protocol, a single elite Gir or Sahiwal cow can produce 10-20 superior calves in a single year, accelerating genetic progress by decades and transforming the dairy landscape.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-background-light p-8 rounded-[2rem] border border-gray-100">
                <p className="text-5xl font-serif text-primary mb-2">10x</p>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/50">Multiplication Rate</p>
              </div>
              <div className="bg-background-light p-8 rounded-[2rem] border border-gray-100">
                <p className="text-5xl font-serif text-primary mb-2">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/50">Verified Genetics</p>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1200" 
              alt="Calves" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
