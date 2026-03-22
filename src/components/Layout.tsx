import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Dna, Menu, X, User, Search, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    { name: 'Nutrition', path: '/nutrition' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <div className={`mx-auto transition-all duration-500 ${isScrolled ? 'max-w-[1200px] px-4' : 'max-w-[1400px] px-6'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-3 px-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20' : 'bg-transparent py-2'}`}>
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Menu className="text-secondary w-5 h-5" />
            </div>
            <span className={`text-xl font-serif italic font-bold tracking-tight ${isScrolled ? 'text-secondary' : 'text-white drop-shadow-md'}`}>
              DarviGau
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium transition-colors relative ${
                  location.pathname === item.path 
                    ? (isScrolled ? 'text-secondary font-bold' : 'text-primary font-bold drop-shadow-md') 
                    : (isScrolled ? 'text-secondary/70 hover:text-secondary' : 'text-white/90 hover:text-white drop-shadow-sm')
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-secondary hover:bg-background-light' : 'text-white hover:bg-white/10'}`}>
              <User className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-secondary hover:bg-background-light' : 'text-white hover:bg-white/10'}`}>
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-primary text-secondary px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-sm">
              <ShoppingBag className="w-4 h-4" />
              <span>Cart (0)</span>
            </button>
          </div>

          <button className={`lg:hidden p-2 rounded-full ${isScrolled ? 'text-secondary' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white shadow-2xl rounded-3xl p-6 flex flex-col gap-4 lg:hidden border border-gray-100"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-xl font-serif italic px-4 py-2 rounded-xl ${location.pathname === item.path ? 'bg-background-light text-secondary' : 'text-secondary/70'}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <button className="bg-primary text-secondary px-6 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Cart (0)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-32 pb-10 rounded-t-[3rem] mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <h2 className="text-5xl md:text-7xl font-serif italic mb-6 text-primary">DarviGau.</h2>
            <p className="text-white/70 max-w-sm text-lg font-light leading-relaxed">
              Leading the revolution in Indian dairy genetics through science, technology, and a commitment to preserving elite breeds.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="md:col-span-2 md:col-start-8"
          >
            <h4 className="text-sm font-bold mb-6 text-white">Navigation</h4>
            <ul className="space-y-4 text-white/70">
              {[
                { name: 'Services', path: '/services' },
                { name: 'Breeds', path: '/breeds' },
                { name: 'Technology', path: '/technology' },
                { name: 'Data Centre', path: '/data-centre' },
                { name: 'Process', path: '/process' }
              ].map((link, i) => (
                <motion.li key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                  <Link to={link.path} className="hover:text-primary transition-colors">{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
            className="md:col-span-3"
          >
            <h4 className="text-sm font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-white/70">
              {['info@darvigau.com', '+91 98765 43210', 'Gujarat, India'].map((text, i) => (
                <motion.li key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm"
        >
          <p>© 2026 DarviGau Genetics. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
