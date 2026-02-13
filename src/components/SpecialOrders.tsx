"use client";

import { motion } from "framer-motion";
import { Mail, Zap, Droplets } from "lucide-react";

export default function SpecialOrders() {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Special Orders */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.5em] text-gold/60">Elite Access</h2>
            <h3 className="text-4xl font-serif">Special Formulations</h3>
          </div>
          
          <div className="space-y-8">
            <div className="gold-border p-8 bg-white/[0.01] space-y-4">
              <div className="flex items-center gap-4 text-gold">
                <Droplets size={24} />
                <h4 className="text-xl font-bold uppercase tracking-widest">Full Spectrum</h4>
              </div>
              <p className="text-silk/40 font-light leading-relaxed">
                Available via special order only. Our signature terpene profile blended with complete cannabinoid synergy.
              </p>
            </div>

            <div className="gold-border p-8 bg-white/[0.01] space-y-4">
              <div className="flex items-center gap-4 text-gold">
                <Zap size={24} />
                <h4 className="text-xl font-bold uppercase tracking-widest">Bulk Edibles</h4>
              </div>
              <p className="text-silk/40 font-light leading-relaxed">
                Organic CBD Gummies. Custom concentrations and volume pricing for private labels and high-volume fulfillment.
              </p>
            </div>
          </div>

          <button className="flex items-center gap-4 text-gold font-bold uppercase tracking-[0.4em] text-xs hover:text-white transition-colors duration-500">
            Request Quote <Mail size={16} />
          </button>
        </div>

        {/* Science/Terpenes focus */}
        <div className="relative aspect-square lg:aspect-auto gold-border p-16 flex flex-col justify-center space-y-8 overflow-hidden bg-onyx">
          <h3 className="text-5xl md:text-7xl font-serif text-outline opacity-20 absolute -top-10 -right-10 select-none">TERPENES</h3>
          
          <h4 className="text-3xl font-serif leading-tight">The <span className="text-gold italic underline underline-offset-8 decoration-1 decoration-gold/30">Terpene</span> Protocol</h4>
          <p className="text-silk/60 font-light text-lg leading-loose">
            We exclusively utilize cannabis-derived natural terpenes. No synthetic additives. No artificial flavors. 
            The result is a bio-identical botanical profile that mirrors the plant's natural intelligence.
          </p>
          <div className="pt-8 grid grid-cols-2 gap-8 text-[9px] font-mono uppercase tracking-[0.3em] text-gold/40">
            <div>// NON-SYNTHETIC</div>
            <div>// TRIPLE LAB TESTED</div>
            <div>// 100% ORGANIC MCT</div>
            <div>// NANO-EMULSIFIED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
