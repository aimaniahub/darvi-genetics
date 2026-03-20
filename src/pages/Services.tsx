import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      id: "01",
      title: "Embryo Transfer",
      subtitle: "The core of genetic multiplication.",
      desc: "Our Embryo Transfer Technology (ETT) allows a single elite cow to produce dozens of calves per year. We handle donor selection, superovulation, non-surgical flushing, and transfer to recipient surrogates with a 95% success rate.",
      img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: "02",
      title: "Semen Station",
      subtitle: "Elite pedigree, preserved.",
      desc: "Access high-quality, sex-sorted and conventional semen from the top 1% of Gir and Sahiwal bulls. Our state-of-the-art freezing and storage protocols ensure maximum motility and conception rates.",
      img: "https://images.unsplash.com/photo-1527153358354-fbd99c1c85a6?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: "03",
      title: "Nutrition",
      subtitle: "Fueling genetic potential.",
      desc: "Genetics set the ceiling; nutrition determines if you reach it. We provide custom ration formulation, transition cow management, and seasonal fodder planning to maximize milk yield and reproductive health.",
      img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <div className="bg-[#050505] text-white">
      <div className="h-screen flex flex-col justify-center px-6 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[10vw] font-display font-bold uppercase tracking-tighter leading-[0.85]"
        >
          Our <br/> <span className="text-primary font-serif italic lowercase">Expertise.</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex items-center gap-4 text-white/50"
        >
          <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
          <span className="uppercase tracking-widest text-sm font-bold">Scroll to explore</span>
        </motion.div>
      </div>

      {services.map((service, i) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"]
        });

        const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
        const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

        return (
          <section key={service.id} ref={ref} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
              <img 
                src={service.img} 
                alt={service.title}
                className="w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
            </motion.div>

            {/* Content */}
            <motion.div 
              style={{ opacity }}
              className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-20 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-12"
            >
              <div className="w-full md:w-1/2">
                <span className="text-primary font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6 block">{service.id}</span>
                <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
                  {service.title}
                </h2>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 border-l-0 md:border-l border-white/20">
                <h3 className="text-3xl md:text-4xl font-serif italic text-primary mb-6">{service.subtitle}</h3>
                <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* Key Benefits Section */}
      <section className="py-32 bg-[#050505] relative z-10 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-20">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              The <span className="text-primary italic font-serif lowercase">Advantage.</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Why our approach to dairy genetics delivers unmatched results for farmers and breeders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Rapid Multiplication", desc: "Achieve in one year what takes a decade through natural breeding." },
              { title: "Disease Resistance", desc: "Sourced from elite Gir and Sahiwal lines known for robust immunity." },
              { title: "Guaranteed Purity", desc: "100% DNA-verified lineage with comprehensive genomic scoring." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 border border-white/10 hover:border-primary/50 transition-colors group bg-white/5"
              >
                <div className="text-primary font-mono text-sm mb-8">0{i + 1}</div>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
