import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { clsx } from 'clsx';

export default function Navbar({ setView, cartCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled 
          ? "bg-[#FFF9F0]/95 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <button 
            className="md:hidden text-[#2A1407]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-black text-[#2A1407]">
            <button onClick={() => setView('home')} className="hover:text-[#E59500] transition-colors">Accueil</button>
            <a href="#products" className="hover:text-[#E59500] transition-colors">Mélanges</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => setView('home')}>
          <Logo className={clsx("transition-all duration-500", isScrolled ? "h-12" : "h-16")} />
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => setView('cart')}
            className="relative p-3 rounded-full bg-[#2A1407] text-[#E59500] hover:scale-110 transition-all shadow-md"
          >
            <ShoppingBag size={20} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E59500] text-[#2A1407] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FFF9F0]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}