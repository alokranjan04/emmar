'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Image
          src="https://picsum.photos/seed/dubai/1920/1080"
          alt="Luxury Skyline"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Visionary <br className="hidden md:block" />
          <span className="italic text-[#D4AF37]">Living Begins</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/90 font-light tracking-wide mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover world-class communities crafted by Emaar.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-white text-sm tracking-widest uppercase hover:bg-[#B8972E] transition-colors duration-300">
            Explore Properties
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Book a Private Viewing
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-white/30 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
