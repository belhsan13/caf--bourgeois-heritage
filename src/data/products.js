import React from 'react';
import { Coffee, Sparkles, Droplets, Sun, Wind, Gem } from 'lucide-react';

export const products = [
  {
    id: 1,
    name: "القهوة العربي",
    nameFr: "Café Arbi Classique",
    desc: "L'équilibre parfait de la torréfaction traditionnelle tunisienne.",
    price: 37000,
    tag: "Héritage",
    icon: <Coffee />
  },
  {
    id: 2,
    name: "قهوة عربي بنكهة الزهر",
    nameFr: "Parfum Fleur d'Oranger",
    desc: "Infusée aux essences naturelles de fleur d'oranger de Nabeul.",
    price: 40000,
    tag: "Floral",
    icon: <Droplets />
  },
  {
    id: 3,
    name: "قهوة عربي بنكهة العطرشية",
    nameFr: "Parfum Atarshia",
    desc: "Le raffinement suprême aux notes de géranium tunisien.",
    price: 40000,
    tag: "Raffiné",
    icon: <Wind />
  },
  {
    id: 4,
    name: "قهوة عربي بالهيل",
    nameFr: "Café à la Cardamome",
    desc: "Une puissance aromatique inspirée des palais d'Orient.",
    price: 45000,
    tag: "Épice",
    icon: <Gem />
  },
  {
    id: 5,
    name: "قهوة عربي بنكهة البرتقال",
    nameFr: "Écorces d'Orange",
    desc: "Fraîcheur méditerranéenne aux zestes d'orange séchés.",
    price: 40000,
    tag: "Agrumes",
    icon: <Sun />
  },
  {
    id: 6,
    name: "قهوة زمنية ملكية",
    nameFr: "Mélange Royal Zmen",
    desc: "Le trésor : Cardamome, boutons de rose, muscade, orange et clou de girofle.",
    price: 48000,
    tag: "Signature",
    icon: <Sparkles />
  },
  {
    id: 7,
    name: "قهوة فيلتر",
    nameFr: "Café Filtre Prestige",
    desc: "Une sélection premium pour les amateurs d'extraction douce.",
    price: 37000,
    tag: "Moderne",
    icon: <Coffee />
  }
];