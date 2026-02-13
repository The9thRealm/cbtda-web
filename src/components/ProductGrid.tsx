"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Check } from "lucide-react";
import Link from "next/link";

export default function ProductGrid() {
  return (
    <section className="py-32 px-6 bg-onyx">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-[0.5em] text-gold/60">Professional Range</h2>
          <h3 className="text-4xl font-serif">Curated Formulations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="gold-border p-10 bg-white/[0.02] flex flex-col justify-between group relative"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-gold uppercase tracking-widest border-b border-gold/20 pb-1">
                    {product.category}
                  </span>
                  <span className="text-2xl font-black text-white/90">{product.strength}</span>
                </div>
                
                <div className="space-y-2">
                  <Link href={`/product/${product.id}`}>
                    <h4 className="text-2xl font-serif tracking-tight group-hover:text-gold transition-colors duration-500 cursor-pointer">
                      {product.name}
                    </h4>
                  </Link>
                  <p className="text-silk/40 text-sm font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  {product.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-silk/60">
                      <Check size={12} className="text-gold" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 w-full grid grid-cols-2 gap-4">
                <Link href={`/product/${product.id}`} className="w-full">
                   <button className="w-full py-4 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-onyx transition-all duration-500">
                     Details
                   </button>
                </Link>
                <Link href="#orders" className="w-full">
                   <button className="w-full py-4 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-onyx transition-all duration-500">
                     Inquire
                   </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
