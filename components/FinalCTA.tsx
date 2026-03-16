'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full opacity-40">
        <Image
          src="https://picsum.photos/seed/luxury/1920/1080"
          alt="Luxury Property"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
        >
          Start Your <span className="italic text-[#D4AF37]">Luxury Living</span> Journey Today
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Connect with our property advisors to explore exclusive opportunities and find your perfect home.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-white text-sm tracking-widest uppercase hover:bg-[#B8972E] transition-colors duration-300">
            Speak with an Advisor
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Schedule a Visit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
