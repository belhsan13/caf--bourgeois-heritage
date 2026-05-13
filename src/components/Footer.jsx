import React from 'react';
import Logo from './Logo';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="pt-32 pb-12 px-6 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-16 mb-8" />
            <p className="max-w-md text-lg text-[#2A1407]/70 leading-relaxed font-serif italic mb-10">
              "Depuis 1924, Café Bourgeois incarne l'élégance du goût et la passion du grain. Plus qu'un café, un héritage tunisien."
            </p>
            <div className="flex gap-5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-[#2A1407]/10 flex items-center justify-center hover:bg-[#2A1407] hover:text-[#FDFBF7] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#D4AF37]">Menu</h4>
            <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-[#2A1407]/60">
              <li><a href="#" className="hover:text-[#2A1407] transition-colors">Nos Mélanges</a></li>
              <li><a href="#" className="hover:text-[#2A1407] transition-colors">Éditions Limitées</a></li>
              <li><a href="#" className="hover:text-[#2A1407] transition-colors">Abonnements</a></li>
              <li><a href="#" className="hover:text-[#2A1407] transition-colors">Coffrets Cadeaux</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#D4AF37]">Contact</h4>
            <ul className="space-y-6 text-[#2A1407]/70">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="shrink-0 text-[#D4AF37]" />
                <span className="text-sm">Avenue Habib Bourguiba, Tunis, Tunisie</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="shrink-0 text-[#D4AF37]" />
                <span className="text-sm">+216 71 000 000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="shrink-0 text-[#D4AF37]" />
                <span className="text-sm">contact@cafebourgeois.tn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2A1407]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A1407]/40">
            © 2024 Café Bourgeois. Conçu avec passion en Tunisie.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A1407]/40">
            <a href="#" className="hover:text-[#2A1407]">Confidentialité</a>
            <a href="#" className="hover:text-[#2A1407]">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}