import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Check, Shield, Star, Info } from "lucide-react";
import Link from "next/link";

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-onyx text-silk selection:bg-gold selection:text-onyx">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Product Image Stage */}
        <div className="aspect-square bg-white/[0.02] border border-gold/10 flex items-center justify-center p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-[15vw] font-serif text-outline opacity-5 absolute -bottom-10 -right-10 select-none">
            {product.strength.replace('mg', '')}
          </h2>
          <div className="relative z-10 text-center space-y-4">
             <div className="w-48 h-48 rounded-full border border-gold/20 flex items-center justify-center mx-auto">
                <span className="font-mono text-xs text-gold uppercase tracking-widest">{product.category}</span>
             </div>
             <p className="font-serif text-2xl text-silk/40 italic">Pure Form</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-10">
          <div className="space-y-4 border-b border-gold/10 pb-8">
            <span className="text-gold font-mono text-xs uppercase tracking-[0.4em]">
              CBTDA // Apothecary
            </span>
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-white/90">
              {product.name}
            </h1>
            <p className="text-2xl font-light text-gold/80 font-mono">
              {product.strength}
            </p>
          </div>

          <p className="text-lg font-light text-silk/70 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold/60 mb-4">
              Clinical Profile
            </h3>
            {product.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01]">
                <Check size={16} className="text-gold" />
                <span className="text-sm text-silk/80 uppercase tracking-wide">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 space-y-6">
            <button className="w-full py-5 bg-gold text-onyx font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 text-sm">
              Add to Regimen
            </button>
            
            <p className="text-[10px] text-center font-mono text-silk/30 uppercase tracking-widest">
              Verified by Third-Party Laboratory Analysis
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
