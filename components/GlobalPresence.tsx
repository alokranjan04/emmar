'use client';

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'UAE', top: '45%', left: '60%' },
  { name: 'Saudi Arabia', top: '48%', left: '58%' },
  { name: 'Egypt', top: '42%', left: '54%' },
  { name: 'Turkey', top: '35%', left: '55%' },
  { name: 'India', top: '50%', left: '70%' },
];

export default function GlobalPresence() {
  return (
    <section id="global" className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4"
          >
            Global Footprint
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-3xl mx-auto"
          >
            Shaping Skylines <br className="hidden md:block" />
            <span className="italic text-gray-500">Across the World</span>
          </motion.h3>
        </div>

        <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[3/1] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-80">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="absolute flex flex-col items-center group"
              style={{ top: loc.top, left: loc.left }}
            >
              <div className="relative">
                <MapPin className="w-6 h-6 text-[#D4AF37] relative z-10" />
                <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-50" />
              </div>
              <span className="mt-2 text-xs font-semibold tracking-widest uppercase text-black bg-white/80 backdrop-blur-sm px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {loc.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
