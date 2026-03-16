'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const developments = [
  {
    id: 1,
    title: 'Downtown Dubai',
    location: 'Dubai, UAE',
    description: 'The Centre of Now, home to Burj Khalifa and The Dubai Mall.',
    image: 'https://picsum.photos/seed/downtown/800/1000',
  },
  {
    id: 2,
    title: 'Dubai Hills Estate',
    location: 'Dubai, UAE',
    description: 'A city within a city, featuring an 18-hole championship golf course.',
    image: 'https://picsum.photos/seed/hills/800/1000',
  },
  {
    id: 3,
    title: 'Emaar Beachfront',
    location: 'Dubai Harbour',
    description: 'Private beach living with panoramic views of the Arabian Gulf.',
    image: 'https://picsum.photos/seed/beach/800/1000',
  },
  {
    id: 4,
    title: 'Arabian Ranches',
    location: 'Dubai, UAE',
    description: 'A premium desert-themed community with world-class amenities.',
    image: 'https://picsum.photos/seed/ranches/800/1000',
  },
];

export default function FeaturedDevelopments() {
  return (
    <section id="communities" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4">Flagship Communities</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              Featured <br className="hidden md:block" />
              <span className="italic text-gray-500">Developments</span>
            </h3>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-sm tracking-widest uppercase text-black hover:text-[#D4AF37] transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {developments.map((dev, index) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-gray-100">
                <Image
                  src={dev.image}
                  alt={dev.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-3">{dev.location}</p>
                <h4 className="font-serif text-3xl md:text-4xl text-white mb-4">{dev.title}</h4>
                <p className="text-white/80 text-sm md:text-base font-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dev.description}
                </p>
                <div className="flex items-center gap-3 text-white text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  View Project <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
