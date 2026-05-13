import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6 bg-[#E59500]">
      {/* Heritage Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />
      
      {/* Large Decorative SVG Bloom */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="inline-block text-[#2A1407] text-xs font-black uppercase tracking-[0.4em]">
              Maison de Café depuis 1924
            </span>
            <div className="h-px w-12 bg-[#2A1407]/30" />
          </motion.div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-[#2A1407] leading-[0.85] mb-8">
            L'Excellence <br /> 
            <span className="italic font-light text-white drop-shadow-sm">Bourgeois</span>
          </h1>

          <div className="mb-10">
            <p className="text-3xl md:text-4xl font-serif text-[#2A1407] mb-4" dir="rtl">
              طعم يبان من أوّل رشفة… مرحبا بيك ☕
            </p>
            <p className="text-lg text-[#2A1407]/80 max-w-lg leading-relaxed font-medium">
              Une tradition Tunisienne sublimée par l'art de la torréfaction artisanale. Découvrez nos mélanges d'exception pour un réveil prestigieux.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#products" className="bg-[#2A1407] text-[#E59500] px-10 py-5 rounded-full flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs hover:scale-105 transition-all group shadow-2xl">
              Découvrir la Collection
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-[#2A1407] px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all">
              <MapPin size={16} />
              Nos Boutiques
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10">
            <div className="aspect-[4/5] bg-[#2A1407] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(42,20,7,0.5)] relative border-8 border-[#FFF9F0]/20">
               <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#2A1407]/80" />
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-[#FFF9F0] text-center">
                  <div className="w-24 h-1 bg-[#E59500] mb-8" />
                  <h3 className="text-6xl font-serif mb-4 leading-tight">القهوة <br/> التونسية</h3>
                  <p className="uppercase tracking-[0.5em] text-xs font-black text-[#E59500]">Héritage & Prestige</p>
               </div>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 max-w-[220px] text-[#2A1407] border-4 border-[#FFF9F0]"
          >
            <p className="text-4xl font-serif font-bold mb-1 text-[#E59500]">Zmen</p>
            <p className="text-[11px] uppercase font-black tracking-tight opacity-70 leading-tight">
              Le goût authentique de la nostalgie tunisienne
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}