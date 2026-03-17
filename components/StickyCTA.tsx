'use client';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { PhoneCall } from 'lucide-react';

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <button className="flex items-center gap-2 bg-[#D4AF37] text-white px-6 py-4 rounded-full shadow-lg font-bold tracking-wide uppercase text-sm">
        <PhoneCall className="w-5 h-5" />
        Get Callback in 30s
      </button>
    </motion.div>
  );
}
