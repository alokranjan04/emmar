'use client';

import { motion } from 'motion/react';
import { Percent, TrendingUp, Award, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Percent,
    title: '0% Property Tax',
    description: 'Maximize your returns with zero property or capital gains tax in Dubai.',
  },
  {
    icon: TrendingUp,
    title: 'High Rental Yield (6–10%)',
    description: 'Enjoy some of the highest rental yields globally compared to major cities.',
  },
  {
    icon: Award,
    title: 'Golden Visa Opportunity',
    description: 'Secure long-term residency for you and your family with property investment.',
  },
  {
    icon: Shield,
    title: 'Stable Economy',
    description: 'Invest in a safe, secure, and rapidly growing global business hub.',
  },
];

export default function WhyInvest() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4 font-semibold"
          >
            Key Conversion Driver
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-black"
          >
            Why Invest in Dubai?
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#FAF9F6] rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h4 className="text-xl font-serif text-black mb-3">{benefit.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
