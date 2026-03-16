'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <span className="font-serif text-3xl tracking-widest uppercase text-white">
                EMAAR
              </span>
            </Link>
            <p className="text-white/60 font-light leading-relaxed max-w-md mb-8">
              Subscribe to our newsletter to receive the latest updates on new launches, exclusive offers, and community news.
            </p>
            <form className="flex max-w-md border-b border-white/30 pb-2 focus-within:border-[#D4AF37] transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder:text-white/40"
              />
              <button type="submit" className="text-[#D4AF37] hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Communities', 'Investor Relations', 'Careers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-white mb-8">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>800 EMAAR (36227)</li>
              <li>+971 4 366 1688</li>
              <li>customercare@emaar.ae</li>
              <li className="pt-4">
                Downtown Dubai<br />
                P.O. Box 9440<br />
                Dubai, UAE
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span>&copy; {new Date().getFullYear()} Emaar Properties PJSC. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
