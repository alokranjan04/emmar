'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const metrics = [
  { label: 'Global Developments', value: 12, suffix: '+' },
  { label: 'Countries Present', value: 10, suffix: '' },
  { label: 'High ROI Opportunities', value: 8, suffix: '%' },
  { label: 'Award-Winning Projects', value: 50, suffix: '+' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#D4AF37]">
      {count}{suffix}
    </span>
  );
}

export default function InvestorValue() {
  return (
    <section id="invest" className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/architecture/1920/1080')] bg-cover bg-center mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4">Why Invest with Emaar</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              A Legacy of <br className="hidden md:block" />
              <span className="italic text-gray-400">Excellence</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-white/70 font-light leading-relaxed">
              Investing in Emaar means investing in a proven track record of architectural brilliance, premium lifestyle, and consistent high returns on investment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-white/20 pt-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-4"
            >
              <Counter value={metric.value} suffix={metric.suffix} />
              <p className="text-sm tracking-widest uppercase text-white/60">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
