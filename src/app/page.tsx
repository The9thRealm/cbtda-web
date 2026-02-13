import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SpecialOrders from "@/components/SpecialOrders";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-onyx">
      <Navbar />
      
      <Hero />

      <div id="collection">
        <ProductGrid />
      </div>

      <div id="science">
        <SpecialOrders />
      </div>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-gold/5 bg-onyx text-center space-y-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif gold-gradient uppercase tracking-widest">Cure Beyond Science</h2>
          <p className="text-silk/30 font-light text-sm leading-relaxed italic uppercase tracking-widest">
            The Pinnacle of Botanical Intelligence. <br />
            Forged in the intersection of nature and science.
          </p>
        </div>
        
        <div className="pt-12 border-t border-white/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono uppercase tracking-[0.4em] text-silk/20">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-gold animate-pulse rounded-full" />
            <span>&copy; 2026 CBTDA // Cure Beyond Science Wellness.</span>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-gold transition-colors">Lab Results</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}