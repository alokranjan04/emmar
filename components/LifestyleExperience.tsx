'use client';

import { motion } from 'motion/react';
import { Anchor, Cpu, ShoppingBag, TreePine, Flag } from 'lucide-react';

const features = [
  {
    icon: Anchor,
    title: 'Waterfront Living',
    description: 'Wake up to breathtaking views of the Arabian Gulf and pristine private beaches.',
  },
  {
    icon: Cpu,
    title: 'Smart Home Technology',
    description: 'Seamlessly integrated smart systems for ultimate comfort and security.',
  },
  {
    icon: ShoppingBag,
    title: 'Luxury Retail & Dining',
    description: 'World-class shopping and Michelin-starred restaurants at your doorstep.',
  },
  {
    icon: TreePine,
    title: 'Parks & Green Communities',
    description: 'Expansive parks, jogging tracks, and lush landscapes for a balanced lifestyle.',
  },
  {
    icon: Flag,
    title: 'Golf & Leisure Facilities',
    description: 'Championship golf courses and premium leisure clubs for residents.',
  },
];

export default function LifestyleExperience() {
  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4"
          >
            The Emaar Lifestyle
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-3xl mx-auto"
          >
            Elevating the Standard of <span className="italic text-gray-500">Luxury Living</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors duration-500">
                <feature.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl text-black mb-4">{feature.title}</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
