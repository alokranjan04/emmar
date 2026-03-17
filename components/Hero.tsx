'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck, Trophy, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://picsum.photos/seed/dubainight/1920/1080"
          alt="Dubai Skyline at Night"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Own a Luxury Home in Dubai <br />
            <span className="text-[#D4AF37] italic">— Starting AED 1.7 Mn</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light mb-10"
          >
            High ROI. Tax-free investment. World-class lifestyle.
          </motion.p>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
          >
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-sm font-medium">Trusted by 100,000+ investors</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-sm font-medium">Dubai's leading developer</span>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-sm font-medium">20+ global awards</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-[#D4AF37] text-white text-sm tracking-widest uppercase font-semibold hover:bg-[#B8972E] transition-colors rounded">
              Get Investment Details
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white text-sm tracking-widest uppercase font-semibold hover:bg-white hover:text-black transition-colors rounded">
              View Available Units
            </button>
          </motion.div>
        </div>

        {/* Right Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-md ml-auto w-full"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif text-white mb-2">Register Your Interest</h3>
            <p className="text-white/70 text-sm">Get priority access to premium units and exclusive offers.</p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors rounded"
                required
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone Number (e.g. +91 ...)" 
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors rounded"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-[#D4AF37] text-white text-sm tracking-widest uppercase font-bold hover:bg-[#B8972E] transition-colors rounded mt-4 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              Get Instant Callback
            </button>
            <p className="text-xs text-center text-white/50 mt-4">
              Your information is secure. We respect your privacy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
