import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: <Award />,
    title: "Torréfaction Artisanale",
    desc: "Un savoir-faire centenaire transmis de génération en génération pour une cuisson parfaite."
  },
  {
    icon: <ShieldCheck />,
    title: "Qualité Supérieure",
    desc: "Chaque lot de grains subit 5 tests de qualité rigoureux avant d'être conditionné."
  },
  {
    icon: <Heart />,
    title: "Engagement Local",
    desc: "Fiers de nos racines tunisiennes, nous soutenons l'économie locale et durable."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 border-y border-[#2A1407]/5 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FDFBF7] border border-[#2A1407]/5 mb-8 text-[#2A1407] group-hover:bg-[#D4AF37] group-hover:text-[#2A1407] group-hover:scale-110 transition-all duration-500 shadow-sm">
                {React.cloneElement(f.icon, { size: 32, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-serif text-[#2A1407] mb-4">{f.title}</h3>
              <p className="text-[#2A1407]/60 leading-relaxed font-light px-4">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}