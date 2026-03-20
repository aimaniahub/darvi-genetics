import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Dna, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Breeds', path: '/breeds' },
    { name: 'Technology', path: '/technology' },
    { name: 'Data Centre', path: '/data-centre' },
    { name: 'Process', path: '/process' },
    { name: 'Comparison', path: '/comparison' },
    { name: 'Nutrition', path: '/nutrition' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
            <Dna className="text-[#050505] w-5 h-5 transition-colors" />
          </div>
          <span className="text-2xl font-serif italic font-bold tracking-tight text-white">
            DarviGau
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors relative ${location.pathname === item.path ? 'text-primary' : 'text-white/60 hover:text-white'}`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div layoutId="underline" className="absolute -bottom-2 left-0 w-full h-px bg-primary" />
              )}
            </Link>
          ))}
          <button className="bg-white text-[#050505] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all">
            Get in Touch
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] shadow-2xl p-6 flex flex-col gap-6 md:hidden border-t border-white/5"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-2xl font-serif italic ${location.pathname === item.path ? 'text-primary' : 'text-white/80'}`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-white text-[#050505] px-6 py-4 rounded-full text-sm font-bold uppercase tracking-widest mt-4">
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-5">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">DarviGau.</h2>
            <p className="text-white/50 max-w-sm text-lg font-light leading-relaxed">
              Leading the revolution in Indian dairy genetics through science, technology, and a commitment to preserving elite breeds.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4 text-lg font-light">
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/breeds" className="hover:text-primary transition-colors">Breeds</Link></li>
              <li><Link to="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/data-centre" className="hover:text-primary transition-colors">Data Centre</Link></li>
              <li><Link to="/process" className="hover:text-primary transition-colors">Process</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Contact</h4>
            <ul className="space-y-4 text-lg font-light text-white/80">
              <li>info@darvigau.com</li>
              <li>+91 98765 43210</li>
              <li>Gujarat, India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 DarviGau Genetics.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-[#050505] bg-[#050505]">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
