'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function LifestyleExperience() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4 font-semibold">
              The Emaar Lifestyle
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Wake up to skyline views. <br />
              <span className="italic text-white/70">Live where the world vacations.</span>
            </h3>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-10">
              Experience the pinnacle of luxury living. From pristine waterfront communities and championship golf courses to the world's most iconic shopping destinations, an Emaar home is your gateway to an extraordinary life.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                'Waterfront Living',
                'Golf Communities',
                'Luxury Malls',
                'Smart Homes'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-sm tracking-wider uppercase">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="https://picsum.photos/seed/luxuryhome/800/1000"
              alt="Luxury Lifestyle"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
