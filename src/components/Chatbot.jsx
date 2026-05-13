import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Coffee, User, Phone, ShoppingBag, CheckCircle2, ChevronLeft, Scale, Truck, Calculator } from 'lucide-react';
import { clsx } from 'clsx';
import { products } from '../data/products';

const WEIGHT_OPTIONS = [100, 250, 500, 1000, 2000];
const DELIVERY_FEE = 7.000;

export default function Chatbot({ isOpen, setIsOpen }) {
  const [step, setStep] = useState('welcome');
  const [formData, setFormData] = useState({
    nom: '',
    tel: '',
    produitId: null,
    poids: 250
  });
  const [messages, setMessages] = useState([
    { id: 1, text: "Asslema! Bienvenue chez Café Bourgeois. Comment puis-je vous aider ?", sender: 'bot' },
    { id: 2, text: "مرحبا بيك! تحب تعمل طلبية (Passer une commande) ؟", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = (text, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text, sender: 'bot' }]);
      setIsTyping(false);
    }, delay);
  };

  const startOrdering = () => {
    setMessages(prev => [...prev, { id: Date.now(), text: "Passer une commande", sender: 'user' }]);
    setStep('collect_name');
    addBotMessage("Parfait ! Quel est votre Nom et Prénom ?");
    addBotMessage("اعطينا اسمك و لقبك عيشك");
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.nameInput.value;
    if (!nameInput) return;

    setFormData(prev => ({ ...prev, nom: nameInput }));
    setMessages(prev => [...prev, { id: Date.now(), text: nameInput, sender: 'user' }]);
    
    setStep('collect_phone');
    addBotMessage(`Enchanté ${nameInput.split(' ')[0]} ! Quel est votre numéro de téléphone ?`);
    addBotMessage("رقم الهاتف متاعك باش نكلموك");
    e.target.reset();
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const telInput = e.target.telInput.value;
    if (!telInput) return;

    setFormData(prev => ({ ...prev, tel: telInput }));
    setMessages(prev => [...prev, { id: Date.now(), text: telInput, sender: 'user' }]);

    setStep('collect_product');
    addBotMessage("Quel mélange préférez-vous ?");
    addBotMessage("أختار القهوة الي تحب عليها");
    e.target.reset();
  };

  const selectProduct = (prod) => {
    setFormData(prev => ({ ...prev, produitId: prod.id }));
    setMessages(prev => [...prev, { id: Date.now(), text: `${prod.nameFr}`, sender: 'user' }]);
    
    setStep('collect_weight');
    addBotMessage("Quelle quantité souhaitez-vous ? (en grammes)");
    addBotMessage("قداش تحب من غرام ؟");
  };

  const selectWeight = (grams) => {
    const selectedProduct = products.find(p => p.id === formData.produitId);
    const price = (selectedProduct.price * (grams / 1000)).toFixed(3);
    const total = (parseFloat(price) + DELIVERY_FEE).toFixed(3);

    setFormData(prev => ({ ...prev, poids: grams }));
    setMessages(prev => [...prev, { id: Date.now(), text: `${grams}g`, sender: 'user' }]);
    
    setStep('summary');
    addBotMessage(`Calcul du prix en cours...`);
    setTimeout(() => {
      addBotMessage(`Voici le résumé : ${selectedProduct.nameFr} (${grams}g). Prix: ${price} DT + 7 DT livraison = ${total} DT total.`);
      addBotMessage("هل تؤكد الطلبية ؟ (Confirmez-vous ?)");
    }, 1000);
  };

  const confirmOrder = () => {
    setMessages(prev => [...prev, { id: Date.now(), text: "Oui, je confirme", sender: 'user' }]);
    setStep('finished');
    addBotMessage("C'est parfait ! Votre commande est enregistrée.");
    addBotMessage("سيتم الاتصال بك في أقرب وقت لتأكيد الطلبية. شكراً لثقتكم ☕");
  };

  const selectedProductData = products.find(p => p.id === formData.produitId);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={clsx(
              "bg-white dark:bg-[#0C0603] flex flex-col overflow-hidden shadow-2xl border border-[#2A1407]/10 dark:border-[#D4AF37]/20",
              "fixed inset-0 sm:static sm:w-[420px] sm:h-[700px] sm:rounded-[2.5rem]"
            )}
          >
            {/* Header */}
            <div className="bg-[#2A1407] p-6 text-[#FDFBF7] flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsOpen(false)} className="sm:hidden p-2 -ml-2 hover:bg-white/10 rounded-full"><ChevronLeft size={24} /></button>
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#2A1407] border-2 border-[#FDFBF7]">
                    <Coffee size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2A1407] rounded-full animate-pulse"></span>
                </div>
                <div>
                  <p className="font-serif text-base sm:text-lg leading-tight">Service Client</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Bourgeois Prestige</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hidden sm:block p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FDFBF7] dark:bg-[#0C0603] scrollbar-hide">
              {messages.map(msg => (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={msg.id} className={clsx("flex", msg.sender === 'user' ? 'justify-end' : 'justify-start')}>
                  <div className={clsx(
                    "max-w-[85%] p-4 rounded-2xl text-sm shadow-sm",
                    msg.sender === 'user' 
                      ? 'bg-[#2A1407] dark:bg-[#D4AF37] text-[#D4AF37] dark:text-[#2A1407] rounded-tr-none' 
                      : 'bg-white dark:bg-white/5 text-[#2A1407] dark:text-[#FDFBF7] border border-[#2A1407]/5 dark:border-[#D4AF37]/10 rounded-tl-none'
                  )}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-white/5 border border-[#2A1407]/5 dark:border-[#D4AF37]/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    {[0, 1, 2].map(i => <motion.span key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />)}
                  </div>
                </div>
              )}

              {/* Interaction UI */}
              <AnimatePresence mode="wait">
                {step === 'welcome' && !isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4 flex flex-col gap-3">
                    <button onClick={startOrdering} className="w-full py-4 bg-[#D4AF37] text-[#2A1407] rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
                      <ShoppingBag size={18} /> Passer une Commande
                    </button>
                  </motion.div>
                )}

                {step === 'collect_product' && !isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-2 pt-4">
                    <p className="text-[10px] uppercase font-bold text-[#D4AF37] mb-2">Nos Mélanges :</p>
                    {products.map(p => (
                      <button key={p.id} onClick={() => selectProduct(p)} className="text-left p-4 rounded-2xl border border-[#2A1407]/5 dark:border-[#D4AF37]/10 hover:bg-[#2A1407] hover:text-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-[#2A1407] transition-all bg-white dark:bg-white/5 shadow-sm flex justify-between items-center group">
                        <span className="text-sm font-serif">{p.name}</span>
                        <span className="text-[10px] opacity-60 group-hover:opacity-100 uppercase tracking-tighter">{p.nameFr}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {step === 'collect_weight' && !isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-3 pt-4">
                    <p className="col-span-2 text-[10px] uppercase font-bold text-[#D4AF37] mb-2">Quantité (Min 100g) :</p>
                    {WEIGHT_OPTIONS.map(g => (
                      <button key={g} onClick={() => selectWeight(g)} className="p-4 rounded-2xl border border-[#2A1407]/5 dark:border-[#D4AF37]/10 bg-white dark:bg-white/5 hover:bg-[#2A1407] hover:text-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-[#2A1407] transition-all flex flex-col items-center gap-1">
                        <span className="font-bold">{g < 1000 ? `${g}g` : `${g/1000}kg`}</span>
                        <span className="text-[9px] opacity-50 uppercase">Sélectionner</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {step === 'summary' && !isTyping && (
                   <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="pt-4">
                      <div className="bg-[#2A1407] text-[#FDFBF7] p-6 rounded-[2rem] border border-[#D4AF37]/30 shadow-xl">
                        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                           <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center text-[#2A1407]">
                              <Calculator size={24} />
                           </div>
                           <div>
                              <p className="text-[10px] uppercase font-bold text-[#D4AF37]">Total Commande</p>
                              <p className="text-2xl font-serif">{((selectedProductData.price * formData.poids / 1000) + DELIVERY_FEE).toFixed(3)} DT</p>
                           </div>
                        </div>
                        <button onClick={confirmOrder} className="w-full py-4 bg-[#D4AF37] text-[#2A1407] rounded-xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform">Confirmer & Commander</button>
                      </div>
                   </motion.div>
                )}

                {step === 'finished' && !isTyping && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#D4AF37]/10 p-6 rounded-[2rem] border border-[#D4AF37]/20 text-center">
                    <CheckCircle2 size={40} className="text-[#D4AF37] mx-auto mb-4" />
                    <h4 className="font-serif text-[#2A1407] dark:text-[#D4AF37] text-lg mb-2">Succès</h4>
                    <p className="text-xs text-[#2A1407]/60 dark:text-white/60">On vous appelle sur {formData.tel}!</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={chatEndRef} />
            </div>

            {/* Input Layer */}
            <div className="p-4 sm:p-6 bg-white dark:bg-[#1A0D05] border-t border-[#2A1407]/5 dark:border-[#D4AF37]/10">
              {['collect_name', 'collect_phone'].includes(step) && (
                <form onSubmit={step === 'collect_name' ? handleInfoSubmit : handlePhoneSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    {step === 'collect_name' ? <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" size={16} /> : <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" size={16} />}
                    <input 
                      autoFocus
                      name={step === 'collect_name' ? "nameInput" : "telInput"}
                      type={step === 'collect_phone' ? "tel" : "text"}
                      placeholder={step === 'collect_name' ? "Nom & Prénom..." : "Téléphone (8 chiffres)..."}
                      className="w-full bg-[#FDFBF7] dark:bg-black/20 dark:text-white rounded-xl pl-11 pr-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <button type="submit" className="p-4 bg-[#2A1407] dark:bg-[#D4AF37] text-[#D4AF37] dark:text-[#2A1407] rounded-xl"><Send size={20} /></button>
                </form>
              )}

              {['welcome', 'collect_product', 'collect_weight', 'summary', 'finished'].includes(step) && (
                <div className="text-center py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#2A1407]/30 dark:text-white/20 font-bold">
                    Paiement à la livraison • Café Bourgeois
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2A1407] dark:bg-[#D4AF37] text-[#D4AF37] dark:text-[#2A1407] rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-[#0C0603] relative group transition-colors"
      >
        {isOpen ? <X size={28} /> : (
          <>
            <MessageCircle size={28} />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#0C0603]">1</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
