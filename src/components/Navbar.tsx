"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-gold/10 bg-onyx/90 backdrop-blur-md px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="group flex flex-col items-center">
          <span className="text-2xl font-serif tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-700">
            CURE <span className="italic">BEYOND</span> SCIENCE
          </span>
          <span className="text-[8px] font-mono font-bold tracking-[0.6em] uppercase text-gold/40 -mt-1">
            CBTDA // Pure Wellness
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.4em] text-silk/40">
          <Link href="#collection" className="hover:text-gold transition-colors">Apothecary</Link>
          <Link href="#science" className="hover:text-gold transition-colors">Science</Link>
          <Link href="#orders" className="hover:text-gold transition-colors">Custom</Link>
        </div>

        <div className="flex items-center gap-8 text-silk/60">
          <Link href="/cart" className="hover:text-gold transition-colors">
            <ShoppingBag size={20} />
          </Link>
          <button className="md:hidden hover:text-gold transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
