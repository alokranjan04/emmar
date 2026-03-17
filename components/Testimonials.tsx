'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh K.',
    role: 'Investor from Mumbai',
    quote: 'The ROI on my Downtown Dubai property exceeded expectations. Emaar made the entire process seamless for an international buyer.',
  },
  {
    name: 'Sarah M.',
    role: 'Homeowner from London',
    quote: 'Moving to an Emaar community was the best decision. The lifestyle, amenities, and security are unmatched globally.',
  },
  {
    name: 'Amit P.',
    role: 'Investor from Delhi',
    quote: 'Securing the Golden Visa through my property investment was incredibly smooth. The capital appreciation has been fantastic.',
  }
];

export default function Testimonials() {
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
            Success Stories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-black"
          >
            Trusted by Global Investors
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <h4 className="font-semibold text-black">{testimonial.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
