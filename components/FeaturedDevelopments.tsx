'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, TrendingUp } from 'lucide-react';

const properties = [
  {
    id: 1,
    name: 'Oasis by Emaar',
    location: 'Dubailand',
    price: 'AED 1.7 Mn',
    roi: '8%',
    image: 'https://picsum.photos/seed/oasis/800/600',
  },
  {
    id: 2,
    name: 'Address Residences',
    location: 'Downtown Dubai',
    price: 'AED 3.2 Mn',
    roi: '7.5%',
    image: 'https://picsum.photos/seed/address/800/600',
  },
  {
    id: 3,
    name: 'Beachfront Villas',
    location: 'Emaar Beachfront',
    price: 'AED 5.5 Mn',
    roi: '6.5%',
    image: 'https://picsum.photos/seed/beach/800/600',
  },
];

export default function FeaturedDevelopments() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4 font-semibold"
            >
              High Intent Opportunities
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-black"
            >
              Featured Properties
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded">
                  Starting {prop.price}
                </div>
              </div>
              <div className="bg-[#FAF9F6] p-6 rounded-b-2xl border border-t-0 border-gray-100 flex-1 flex flex-col">
                <h4 className="text-2xl font-serif text-black mb-2">{prop.name}</h4>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{prop.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#D4AF37] font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  <span>Expected ROI: {prop.roi}</span>
                </div>
                <button className="mt-auto w-full py-3 border border-black text-black text-sm tracking-widest uppercase font-semibold hover:bg-black hover:text-white transition-colors rounded">
                  Request Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
