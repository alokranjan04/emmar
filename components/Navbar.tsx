'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Communities', href: '#communities' },
    { name: 'Lifestyle', href: '#lifestyle' },
    { name: 'Invest', href: '#invest' },
    { name: 'Global', href: '#global' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className={`font-serif text-2xl tracking-widest uppercase ${isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'}`}>
            EMAAR
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-[#D4AF37] ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className={`px-6 py-2.5 text-sm tracking-widest uppercase border transition-all duration-300 ${
            isScrolled 
              ? 'border-black text-black hover:bg-black hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}>
            Enquire
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-white flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-widest uppercase text-black hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-8 px-8 py-4 text-sm tracking-widest uppercase border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                Enquire Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
