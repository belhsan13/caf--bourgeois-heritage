import React from 'react';
import { Truck } from 'lucide-react';

export default function DeliveryBanner() {
  return (
    <div className="bg-[#D4AF37] text-[#2A1407] py-2 px-4 text-center relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
        <Truck size={14} />
        <span className="hidden md:inline">Toute la Tunisie : 7DT seulement • Livraison à domicile</span>
        <span className="md:hidden">Livraison 7DT : Toute la Tunisie</span>
        <span className="mx-2">|</span>
        <span dir="rtl">توصيل كامل ولايات الجمهورية 7dt لباب دارك</span>
      </div>
    </div>
  );
}