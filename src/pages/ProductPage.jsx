import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingBag, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import Pattern from '../components/Pattern';

export default function ProductPage({ product, onBack, onAddToCart }) {
  const [quantity, setQuantity] = useState(250);
  const totalPrice = (product.price * (quantity / 1000)).toFixed(3);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative bg-[#FFF9F0]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <Pattern />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-black mb-12 hover:text-[#E59500] transition-colors group text-[#2A1407]"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour à la boutique
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square bg-[#2A1407] rounded-[4rem] overflow-hidden flex items-center justify-center relative shadow-2xl border-8 border-white">
              <div className="absolute inset-0 opacity-5">
                <Pattern />
              </div>
              <div className="text-[#E59500] scale-[4]">
                {React.cloneElement(product.icon, { size: 64 })}
              </div>
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end text-white">
                 <div className="text-left">
                   <p className="text-xs uppercase tracking-widest text-[#E59500] font-black mb-2">Signature Series</p>
                   <p className="text-3xl font-serif">{product.nameFr}</p>
                 </div>
                 <div className="w-14 h-14 rounded-full bg-[#E59500] flex items-center justify-center shadow-lg">
                    <ShieldCheck size={24} className="text-[#2A1407]" />
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-[#E59500] text-xs font-black uppercase tracking-[0.4em] mb-4">Collection Héritage</span>
            <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight text-[#2A1407]" dir="rtl">{product.name}</h1>
            <p className="text-xl text-[#2A1407]/70 mb-10 leading-relaxed font-medium">
              {product.desc} Torréfié à la main pour un arôme puissant et authentique. Un prestige tunisien.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-12">
              {[ 
                { icon: <Truck size={18} />, label: "Livr. 7DT" },
                { icon: <ShieldCheck size={18} />, label: "Premium" },
                { icon: <RefreshCcw size={18} />, label: "Frais" }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-3xl bg-white flex flex-col items-center gap-2 border border-[#E59500]/20 shadow-sm">
                  <span className="text-[#E59500]">{item.icon}</span>
                  <span className="text-[10px] uppercase font-black tracking-tighter text-[#2A1407]">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs uppercase font-black text-[#2A1407]/40 tracking-widest">Choisir la quantité (Grames)</label>
                <span className="text-[10px] text-[#2A1407] font-black px-3 py-1 bg-[#E59500] rounded-full shadow-md">Min. 100g</span>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-[2rem] border-2 border-[#2A1407]/5 shadow-inner">
                <button 
                  onClick={() => setQuantity(Math.max(100, quantity - 50))}
                  className="w-14 h-14 flex items-center justify-center bg-[#2A1407] text-[#E59500] rounded-2xl hover:scale-105 transition-all shadow-md"
                >
                  <Minus size={24} />
                </button>
                <div className="text-center">
                  <span className="text-5xl font-serif font-black text-[#2A1407]">{quantity}</span>
                  <span className="text-lg ml-2 text-[#E59500] uppercase font-black">g</span>
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 50)}
                  className="w-14 h-14 flex items-center justify-center bg-[#2A1407] text-[#E59500] rounded-2xl hover:scale-105 transition-all shadow-md"
                >
                  <Plus size={24} />
                </button>
              </div>
            </div>

            <div className="mt-auto flex items-end justify-between pt-10 border-t border-[#2A1407]/10">
              <div>
                <p className="text-xs uppercase font-black text-[#2A1407]/40 mb-1">Total Commande</p>
                <p className="text-5xl font-serif font-black text-[#2A1407]">{totalPrice} <span className="text-2xl text-[#E59500]">DT</span></p>
              </div>
              <button 
                onClick={() => onAddToCart({ ...product, weight: quantity, totalPrice })}
                className="bg-[#2A1407] text-[#E59500] px-12 py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(42,20,7,0.4)]"
              >
                <ShoppingBag size={24} />
                Ajouter au Panier
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}