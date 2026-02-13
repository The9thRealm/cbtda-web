"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="matte-overlay" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 space-y-8"
      >
        <div className="flex items-center justify-center gap-3 text-gold tracking-[0.5em] uppercase text-[10px] font-bold">
          <ShieldCheck size={14} />
          <span>THC-Free Purity</span>
          <Sparkles size={14} />
        </div>

        <h1 className="text-6xl md:text-9xl font-serif tracking-tight leading-none">
          The Gold <br /> 
          <span className="gold-gradient italic">Standard</span>
        </h1>

        <p className="max-w-2xl mx-auto text-silk/60 font-light text-lg md:text-xl leading-relaxed">
          Premium Cannabis-Derived Terpenes. All-Natural Organic MCT Base. 
          Uncompromising wellness forged in the intersection of nature and science.
        </p>

        <div className="pt-12">
          <Link href="#collection">
            <button className="px-12 py-4 bg-gold text-onyx font-bold uppercase tracking-[0.3em] text-xs hover:bg-gold-light transition-all duration-500 rounded-sm cursor-pointer">
              View The Collection
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
