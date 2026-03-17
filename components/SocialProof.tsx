'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '85,000+', label: 'Projects Delivered' },
  { value: '12+', label: 'Global Presence (Countries)' },
  { value: '98%', label: 'Customer Satisfaction' },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4"
            >
              <div className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-2">{stat.value}</div>
              <div className="text-xs tracking-widest uppercase text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="px-4 flex flex-col items-center justify-center"
          >
            <div className="text-xs tracking-widest uppercase text-gray-500 font-medium mb-2">Creators of</div>
            <div className="font-serif text-xl text-black">Burj Khalifa & Dubai Mall</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
