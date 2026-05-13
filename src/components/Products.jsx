import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Coffee } from 'lucide-react';
import { products } from '../data/products';

export default function Products({ onSelectProduct }) {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#E59500] text-xs font-black uppercase tracking-[0.4em] mb-4 block"
            >
              Nos Mélanges / خلطاتنا
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#2A1407]">L'Héritage Artisanal</h2>
          </div>
          <div className="text-right flex flex-col items-end">
            <p className="text-lg text-[#2A1407]/60 italic mb-2 font-medium">
              Disponible dès 100g.
            </p>
            <p className="text-sm font-black text-[#E59500] px-4 py-1.5 bg-[#2A1407] rounded-full shadow-lg" dir="rtl">
              أختار الوزن الي تحب عليه بداية من 100 غرام
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-[3rem] border border-[#2A1407]/5 hover:border-[#E59500] hover:shadow-[0_30px_60px_-15px_rgba(229,149,0,0.2)] transition-all duration-500 flex flex-col cursor-pointer relative overflow-hidden"
              onClick={() => onSelectProduct(product)}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Coffee size={120} />
              </div>

              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF9F0] flex items-center justify-center text-[#E59500] group-hover:bg-[#2A1407] transition-colors shadow-inner">
                  {React.cloneElement(product.icon, { size: 32 })}
                </div>
                <span className="text-[10px] font-black uppercase px-4 py-1.5 bg-[#2A1407] text-[#E59500] rounded-full shadow-md">
                  {product.tag}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-serif text-[#2A1407] mb-2 leading-tight" dir="rtl">
                  {product.name}
                </h3>
                <p className="text-xs text-[#E59500] font-black uppercase tracking-widest mb-4">{product.nameFr}</p>
                <p className="text-sm text-[#2A1407]/70 leading-relaxed font-medium">
                  {product.desc}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-[#2A1407]/5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs text-[#2A1407]/40 uppercase font-black">Prix au Kilo</span>
                  <span className="text-2xl font-serif font-black text-[#2A1407]">{(product.price / 1000).toFixed(3)} DT</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2A1407] text-[#E59500] p-4 rounded-2xl group-hover:scale-110 transition-all shadow-xl"
                >
                  <ShoppingBag size={24} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}