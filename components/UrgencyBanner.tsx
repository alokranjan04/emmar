'use client';

import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function UrgencyBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#D4AF37] text-black py-4 px-6 text-center"
    >
      <div className="flex items-center justify-center gap-3 max-w-7xl mx-auto">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="font-semibold tracking-wide uppercase text-sm md:text-base">
          Limited units available in prime locations. Secure your investment today.
        </span>
      </div>
    </motion.div>
  );
}
