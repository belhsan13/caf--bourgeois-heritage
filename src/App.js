import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import DeliveryBanner from './components/DeliveryBanner';
import Chatbot from './components/Chatbot';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [view, setView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleAddToCart = (product) => {
    const cartId = Date.now();
    setCart([...cart, { ...product, cartId }]);
    setView('cart');
    window.scrollTo(0, 0);
  };

  const handleRemoveFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const navigateToProduct = (product) => {
    setSelectedProduct(product);
    setView('product');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#2A1407] transition-colors duration-500 font-sans">
      <DeliveryBanner />
      <Navbar 
        setView={setView} 
        cartCount={cart.length} 
      />

      <main>
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <Hero />
              <Features />
              <Products onSelectProduct={navigateToProduct} />
            </motion.div>
          )}

          {view === 'product' && selectedProduct && (
            <motion.div 
              key="product"
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }}
            >
              <ProductPage 
                product={selectedProduct} 
                onBack={() => setView('home')} 
                onAddToCart={handleAddToCart} 
              />
            </motion.div>
          )}

          {view === 'cart' && (
            <motion.div 
              key="cart"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
            >
              <CartPage 
                cart={cart} 
                onBack={() => setView('home')} 
                onRemove={handleRemoveFromCart} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}