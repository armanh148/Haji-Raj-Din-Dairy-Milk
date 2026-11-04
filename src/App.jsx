import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BranchAnnouncement } from './components/BranchAnnouncement';
import { ProductCatalog } from './components/ProductCatalog';
import { CelebritySpotlight } from './components/CelebritySpotlight';
import { BranchLocations } from './components/BranchLocations';
import { OrderCalculator } from './components/OrderCalculator';
import { PosPitchSection } from './components/PosPitchSection';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { Phone, MessageCircle } from 'lucide-react';
import { dairyInfo } from './data/dairyData';

export function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <BranchAnnouncement />
        <ProductCatalog onAddToCart={handleAddToCart} />
        <CelebritySpotlight />
        <BranchLocations />
        <OrderCalculator cartItems={cartItems} onUpdateCart={setCartItems} />
        <PosPitchSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Buttons for Instant WhatsApp & Phone on Mobile */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam%20Haji%20Raj%20Din%20Dairy!%20Mujhe%20fresh%20milk%20aur%20sweets%20ka%20order%20karna%20hai.`}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] hover:bg-[#1eb956] text-white p-3.5 sm:px-5 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm transform hover:scale-105 transition-all"
          title="WhatsApp Order: 0300-2743860"
        >
          <MessageCircle size={22} />
          <span className="hidden sm:inline">Order WhatsApp</span>
        </a>

        <a
          href={`tel:${dairyInfo.phoneRaw}`}
          className="bg-emerald-950 hover:bg-emerald-900 text-white p-3.5 sm:px-4 sm:py-2.5 rounded-full shadow-xl flex items-center gap-2 font-semibold text-xs border border-emerald-700/80 transition-all"
          title="Call: 0300-2743860"
        >
          <Phone size={17} className="text-amber-400" />
          <span className="hidden sm:inline">0300-2743860</span>
        </a>
      </div>
    </div>
  );
}

export default App;

