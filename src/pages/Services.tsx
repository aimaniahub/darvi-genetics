import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Embryo Transfer",
    subtitle: "The core of genetic multiplication.",
    desc: "Our Embryo Transfer Technology (ETT) allows a single elite cow to produce dozens of calves per year. We handle donor selection, superovulation, non-surgical flushing, and transfer to recipient surrogates with a 30-50% field pregnancy rate (matching NDDB standards).",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "02",
    title: "Semen Station",
    subtitle: "Elite pedigree, preserved.",
    desc: "Access high-quality, sex-sorted and conventional semen from the top 1% of Gir and Sahiwal bulls. Our state-of-the-art freezing and storage protocols ensure maximum motility and conception rates, backed by genomic selection.",
    img: "https://images.unsplash.com/photo-1527153358354-fbd99c1c85a6?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "03",
    title: "Nutrition",
    subtitle: "Fueling genetic potential.",
    desc: "Genetics set the ceiling; nutrition determines if you reach it. We provide custom ration formulation, transition cow management, and seasonal fodder planning to maximize milk yield and reproductive health. Expect up to +0.27 kg milk/day and lower feed costs.",
    img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=2000"
  }
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust the transform based on the number of cards. 
  // 3 cards -> we want to scroll enough to see the last one.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-secondary">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw]">
          {services.map((service, i) => (
            <div key={service.id} className="w-screen h-screen flex items-center justify-center p-6 md:p-20 relative">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-[1400px] w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                <div className="w-full md:w-1/2">
                  <span className="text-primary font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6 block opacity-50">{service.id}</span>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight mb-6 leading-[1.1] text-white">
                    {service.title}
                  </h2>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 border-l-0 md:border-l border-white/20 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[3rem]">
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-6">{service.subtitle}</h3>
                  <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">
                    {service.desc}
                  </p>
                  <button className="mt-8 flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                    Explore Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <div className="bg-background-light text-secondary">
      <div className="h-[80vh] flex flex-col justify-center px-6 md:px-20 max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">Our Services</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic leading-[0.9] tracking-tight text-secondary">
            Our <br/> <span className="font-display font-medium not-italic text-primary">Expertise.</span>
          </h1>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex items-center gap-4 text-secondary/60"
        >
          <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
          <span className="uppercase tracking-widest text-xs font-bold">Scroll to explore</span>
        </motion.div>
      </div>

      <HorizontalScrollCarousel />

      {/* Key Benefits Section */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 bg-background-light border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">The Advantage</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic text-secondary mb-6">
              Why Our <span className="font-display font-medium not-italic text-secondary/40">Approach Works</span>
            </h2>
            <p className="text-xl text-secondary/70 max-w-2xl font-light">
              Delivering unmatched results for farmers and breeders through scientific precision and elite genetics.
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
                className="p-10 rounded-[2rem] border border-gray-200 hover:border-primary/50 transition-colors group bg-background-light shadow-sm hover:shadow-md"
              >
                <div className="text-primary font-mono text-sm mb-8 font-bold">0{i + 1}</div>
                <h3 className="text-3xl font-serif text-secondary mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-secondary/70 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
