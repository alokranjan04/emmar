'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    property: 'Downtown Dubai',
    quote: 'Investing in Emaar was the best decision I made. The quality of the build and the community lifestyle are unparalleled.',
    image: 'https://picsum.photos/seed/sarah/200/200',
  },
  {
    id: 2,
    name: 'Mohammed Al-Fayed',
    property: 'Dubai Hills Estate',
    quote: 'The attention to detail in every aspect of the community is astonishing. It truly feels like a city within a city.',
    image: 'https://picsum.photos/seed/mohammed/200/200',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    property: 'Emaar Beachfront',
    quote: 'Waking up to the sound of the waves and having private beach access is a dream come true. Exceptional service.',
    image: 'https://picsum.photos/seed/elena/200/200',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4"
          >
            Client Experiences
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-3xl mx-auto"
          >
            Stories of <span className="italic text-gray-500">Visionary Living</span>
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-[#FAF9F6] shadow-xl">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left relative">
              <Quote className="absolute -top-8 -left-8 w-16 h-16 text-[#D4AF37]/20 rotate-180" />
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-8 relative z-10">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <div>
                <h4 className="text-sm tracking-widest uppercase text-black font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500 mt-1">{testimonials[currentIndex].property}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center md:justify-end gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
