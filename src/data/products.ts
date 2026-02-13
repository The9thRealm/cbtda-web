export interface Product {
  id: string;
  name: string;
  strength: string;
  category: "Tincture" | "Cream" | "Capsule" | "Special";
  description: string;
  highlights: string[];
}

export const products: Product[] = [
  {
    id: "t750",
    name: "Pure Isolate Tincture",
    strength: "750mg",
    category: "Tincture",
    description: "THC-Free CBD infused with organic MCT oil and cannabis-derived terpenes.",
    highlights: ["All Organic MCT Base", "THC Free", "Natural Terpenes"]
  },
  {
    id: "t1500",
    name: "Pure Isolate Tincture",
    strength: "1500mg",
    category: "Tincture",
    description: "Maximum strength THC-Free CBD for enhanced wellness and recovery.",
    highlights: ["All Organic MCT Base", "Maximum Potency", "Cannabis Terpenes"]
  },
  {
    id: "c1500",
    name: "Apothecary Body Cream",
    strength: "1500mg",
    category: "Cream",
    description: "Topical relief crafted with organic ingredients and high-potency CBD.",
    highlights: ["Deep Absorption", "All Natural", "Organic Botanicals"]
  },
  {
    id: "c3000",
    name: "Apothecary Body Cream",
    strength: "3000mg",
    category: "Cream",
    description: "Our most powerful topical formula for professional-grade relief.",
    highlights: ["Intensive Strength", "Rich Texture", "Rapid Relief"]
  },
  {
    id: "cap3000",
    name: "Nano-Emulsified Capsules",
    strength: "3000mg",
    category: "Capsule",
    description: "Bioavailable nano-CBD for rapid absorption and consistent dosing.",
    highlights: ["Nano-Technology", "30 Count", "High Bioavailability"]
  }
];
