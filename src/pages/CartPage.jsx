import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Trash2, Truck, CheckCircle, CreditCard } from 'lucide-react';

export default function CartPage({ cart, onBack, onRemove }) {
  const [isOrdered, setIsOrdered] = useState(false);
  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);
  const deliveryFee = cart.length > 0 ? 7.000 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    setIsOrdered(true);
  };

  if (isOrdered) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md bg-white dark:bg-white/5 p-12 rounded-[3rem] border border-[#D4AF37]/20 shadow-2xl"
        >
          <div className="w-24 h-24 bg-[#D4AF37] text-[#2A1407] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-4xl font-serif mb-4 text-[#2A1407] dark:text-[#FDFBF7]">Merci pour votre commande !</h1>
          <p className="text-[#2A1407]/60 dark:text-[#FDFBF7]/60 mb-10 leading-relaxed font-light">
            Votre commande a été transmise à nos maîtres torréfacteurs. Nous vous contacterons par téléphone sous peu pour confirmer la livraison.
          </p>
          <button 
            onClick={onBack}
            className="w-full py-5 bg-[#2A1407] dark:bg-[#D4AF37] text-[#FDFBF7] dark:text-[#2A1407] rounded-2xl font-black uppercase tracking-widest text-xs transition-transform hover:scale-[1.02] shadow-xl"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold mb-12 hover:text-[#D4AF37] transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Continuer mes achats
        </button>

        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-12 gap-4">
           <h1 className="text-5xl md:text-7xl font-serif dark:text-[#FDFBF7]">Votre Panier</h1>
           <p className="text-sm font-bold text-[#D4AF37] tracking-widest uppercase">{cart.length} Articles Sélectionnés</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="p-20 bg-[#2A1407]/5 dark:bg-white/5 border-2 border-dashed border-[#2A1407]/10 dark:border-white/10 rounded-[3rem] text-center"
                >
                  <ShoppingBag size={48} className="mx-auto mb-6 opacity-20" />
                  <p className="text-xl font-serif opacity-40">Votre panier est vide</p>
                  <button 
                    onClick={onBack}
                    className="mt-8 text-xs uppercase tracking-widest font-bold text-[#D4AF37] underline decoration-2 underline-offset-8 hover:text-[#2A1407] dark:hover:text-[#FDFBF7] transition-colors"
                  >
                    Découvrir nos cafés
                  </button>
                </motion.div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.cartId}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-[#2A1407]/5 dark:border-white/5 flex flex-col sm:flex-row items-center gap-8 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="w-32 h-32 bg-[#2A1407] rounded-3xl flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/20 transition-transform group-hover:scale-105">
                      {item.icon}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-serif mb-2 dark:text-[#FDFBF7]">{item.nameFr}</h3>
                      <p className="text-sm opacity-50 font-bold uppercase tracking-[0.2em]" dir="rtl">{item.name}</p>
                      <p className="mt-2 text-xs font-black text-[#D4AF37] uppercase tracking-widest">Quantité: {item.weight}g</p>
                    </div>
                    <div className="text-center sm:text-right flex flex-col items-center sm:items-end">
                      <p className="text-2xl font-serif font-bold mb-4 dark:text-[#FDFBF7]">{item.totalPrice} DT</p>
                      <button 
                        onClick={() => onRemove(item.cartId)}
                        className="p-4 text-red-500/40 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#2A1407] dark:bg-[#1A0D05] p-10 rounded-[3rem] text-[#FDFBF7] sticky top-32 border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <CreditCard size={150} />
              </div>
              <h2 className="text-3xl font-serif mb-10">Récapitulatif</h2>
              
              <div className="space-y-6 mb-10 text-sm opacity-80 font-light">
                <div className="flex justify-between items-center">
                  <span>Sous-total</span>
                  <span className="font-bold text-lg">{subtotal.toFixed(3)} DT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-3">
                    <Truck size={18} className="text-[#D4AF37]" /> Frais de Livraison
                  </span>
                  <span className="font-bold text-lg">{deliveryFee.toFixed(3)} DT</span>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10 mb-12">
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase font-bold tracking-[0.3em] opacity-60">Total Final</span>
                  <span className="text-5xl font-serif font-bold text-[#D4AF37]">{total.toFixed(3)} <span className="text-xl">DT</span></span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-6 bg-[#D4AF37] text-[#2A1407] rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-95 transition-all disabled:opacity-30 disabled:hover:scale-100 shadow-xl"
              >
                <CheckCircle size={20} />
                Finaliser la Commande
              </button>
              
              <div className="mt-8 flex flex-col items-center gap-2 opacity-50">
                <p className="text-[10px] text-center uppercase tracking-widest font-black">
                  Paiement à la livraison
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}