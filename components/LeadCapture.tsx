'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function LeadCapture() {
  return (
    <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Image
          src="https://picsum.photos/seed/dubaimarina/1920/1080"
          alt="Dubai Marina"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20">
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl mb-4"
            >
              Take the Next Step
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              Tell us what you're looking for, and our luxury property advisors will curate the best options for you.
            </motion.p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-white/70 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#D4AF37] outline-none rounded" required />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-white/70 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#D4AF37] outline-none rounded" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-white/70 mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#D4AF37] outline-none rounded appearance-none">
                  <option value="" className="text-black">Select Budget</option>
                  <option value="1.7-3" className="text-black">AED 1.7M - 3M</option>
                  <option value="3-5" className="text-black">AED 3M - 5M</option>
                  <option value="5+" className="text-black">AED 5M+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-white/70 mb-2">Investment Intent</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#D4AF37] outline-none rounded appearance-none">
                  <option value="" className="text-black">Select Intent</option>
                  <option value="investment" className="text-black">Pure Investment (ROI)</option>
                  <option value="residence" className="text-black">Personal Residence</option>
                  <option value="holiday" className="text-black">Holiday Home</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-[#D4AF37] text-white text-sm tracking-widest uppercase font-bold hover:bg-[#B8972E] transition-colors rounded mt-4">
              Request Personalized Portfolio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
