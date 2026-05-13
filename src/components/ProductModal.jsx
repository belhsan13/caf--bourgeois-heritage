import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingCart, Truck, CheckCircle2 } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(250);
  const [orderStatus, setOrderStatus] = useState('idle');

  const totalPrice = (product.price * (quantity / 1000)).toFixed(3);

  const handleOrder = () => {
    setOrderStatus('submitting');
    setTimeout(() => setOrderStatus('success'), 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
    >
      <div className="absolute inset-0 bg-[#2A1407]/80 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="bg-[#FDFBF7] w-full max-w-2xl rounded-[3rem] overflow-hidden relative shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full hover:bg-[#2A1407]/5 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#2A1407] p-12 text-[#FDFBF7] flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8">
              {React.cloneElement(product.icon, { size: 48 })}
            </div>
            <h2 className="text-4xl font-serif mb-2" dir="rtl">{product.name}</h2>
            <p className="uppercase tracking-widest text-[10px] text-[#D4AF37] font-black">{product.nameFr}</p>
            <div className="mt-12 space-y-4 text-sm opacity-60 font-light">
              <div className="flex items-center gap-3">
                <Truck size={16} />
                <span>Livraison 7DT (Tunisie entière)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} />
                <span>Fraîchement torréfié</span>
              </div>
            </div>
          </div>

          <div className="p-12 flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-8">Détails de Commande</h3>
            
            <div className="mb-10">
              <label className="block text-xs uppercase font-bold text-[#2A1407]/40 mb-4">Choisir le Poids (g)</label>
              <div className="flex items-center justify-between bg-[#2A1407]/5 p-2 rounded-2xl">
                <button 
                  onClick={() => setQuantity(Math.max(100, quantity - 50))}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-[#D4AF37] transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="text-2xl font-serif font-bold">{quantity}g</span>
                <button 
                  onClick={() => setQuantity(quantity + 50)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-[#D4AF37] transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              <p className="text-[10px] mt-2 text-[#2A1407]/40 italic">Minimum 100g pour la livraison</p>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-xs uppercase font-bold text-[#2A1407]/40">Total Estimé</p>
                  <p className="text-3xl font-serif font-bold">{totalPrice} DT</p>
                </div>
                <p className="text-xs text-[#2A1407]/60">+ 7.000 DT Livr.</p>
              </div>

              <button 
                onClick={handleOrder}
                disabled={orderStatus !== 'idle'}
                className="w-full bg-[#2A1407] text-[#FDFBF7] py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#D4AF37] hover:text-[#2A1407] transition-all"
              >
                {orderStatus === 'idle' && (<><ShoppingCart size={18} /> Commander Maintenant</>)}
                {orderStatus === 'submitting' && "Traitement..."}
                {orderStatus === 'success' && "Succès ! Nous vous rappelons"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}