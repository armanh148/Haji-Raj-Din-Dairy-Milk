import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, dairyInfo } from '../data/dairyData';
import { Check, Plus, ArrowRight, MessageCircle } from 'lucide-react';

const categoryTabs = [
  { 
    id: 'fresh-milk', 
    name: 'Fresh Milk & Butter', 
    urdu: 'تازہ دودھ و مکھن',
    featuredProduct: products.find(p => p.id === 'milk-buffalo'),
  },
  { 
    id: 'yogurt', 
    name: 'Traditional Thick Dahi', 
    urdu: 'گاڑھا ملائی دار دہی',
    featuredProduct: products.find(p => p.id === 'thick-dahi'),
  },
  { 
    id: 'halwajat', 
    name: 'Pure Desi Ghee Halwajat', 
    urdu: 'دیسی گھی سوہن حلوہ',
    featuredProduct: products.find(p => p.id === 'desi-ghee-sohan'),
  },
  { 
    id: 'kheer-rabri', 
    name: 'Khoya Kheer & Rabri', 
    urdu: 'شاہی کھویا کھیر و ربڑی',
    featuredProduct: products.find(p => p.id === 'khoya-kheer'),
  },
  { 
    id: 'icecream', 
    name: 'Dairy Kulfa & Ice Cream', 
    urdu: 'شاہی ڈیری قلفہ',
    featuredProduct: products.find(p => p.id === 'dairy-kulfa'),
  },
];

export function ProductCatalog({ onAddToCart }) {
  const [activeTabId, setActiveTabId] = useState('fresh-milk');
  const [gridFilter, setGridFilter] = useState('all');
  const [addedIds, setAddedIds] = useState({});

  const activeTab = categoryTabs.find(t => t.id === activeTabId) || categoryTabs[0];
  const featured = activeTab.featuredProduct;

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const filteredProducts = gridFilter === 'all'
    ? products
    : products.filter(p => {
        if (gridFilter === 'milk') return p.category === 'fresh-milk' || p.category === 'yogurt';
        if (gridFilter === 'halwa') return p.category === 'halwajat';
        if (gridFilter === 'desserts') return p.category === 'kheer-rabri' || p.category === 'icecream';
        if (gridFilter === 'ghee') return p.category === 'butter-ghee' || p.category === 'khoya' || p.category === 'savory';
        return true;
      });

  return (
    <section id="products" className="py-16 sm:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container">
        
        {/* Section Header Matching Agrovia Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Our Pure Range
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight mb-1">
            Fresh & Pure Dairy Specialties
          </h2>
          <p 
            style={{ whiteSpace: 'nowrap' }} 
            className="urdu-font text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 block w-full text-center my-2 py-1 overflow-visible"
          >
            خالص دودھ، تازہ دہی اور لذیذ دیسی گھی سوغاتیں
          </p>
          <p className="text-slate-500 text-sm sm:text-base mt-1">
            Crafted daily with unadulterated milk and authentic desi ghee.
          </p>
        </motion.div>

        {/* 3-Column Spotlight Showcase (Exact Agrovia Layout with Motion) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#faf9f6] rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 mb-16 shadow-sm"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Category List (2 per row on mobile, 1 on desktop) */}
            <div className="lg:col-span-4">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-3">
                Select Category
              </span>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
                {categoryTabs.map((cat, idx) => {
                  const isActive = cat.id === activeTabId;
                  const isLastOdd = idx === categoryTabs.length - 1 && categoryTabs.length % 2 !== 0;

                  return (
                    <motion.button
                      key={cat.id}
                      onClick={() => setActiveTabId(cat.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full text-left p-2.5 sm:p-3.5 rounded-2xl font-black transition-all flex items-center justify-between ${
                        isLastOdd ? 'col-span-2 lg:col-span-1' : ''
                      } ${
                        isActive
                          ? 'bg-[#0b1e14] text-white shadow-lg ring-1 ring-emerald-500/30'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-2xs'
                      }`}
                    >
                      <div className="pr-1 min-w-0">
                        <span className="block truncate text-xs sm:text-sm lg:text-base font-extrabold">{cat.name}</span>
                        <span className={`block text-[11px] sm:text-xs font-bold urdu-font mt-0.5 truncate ${isActive ? 'text-emerald-300' : 'text-slate-400'}`}>
                          {cat.urdu}
                        </span>
                      </div>
                      {isActive && <ArrowRight size={16} className="text-emerald-400 shrink-0 hidden sm:block" />}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Center Column: Big Focal Showcase Image with AnimatePresence */}
            <div className="lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={featured.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl aspect-square bg-slate-100 border border-white"
                >
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-black px-3 py-1 rounded-full shadow-md">
                    {featured.tag}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Narrative Details & Direct WhatsApp CTA */}
            <div className="lg:col-span-4 space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featured.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
                      Featured Product
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0a192f] mt-1 leading-tight">
                      {featured.name}
                    </h3>
                    <p className="urdu-font text-lg text-emerald-900 font-bold">
                      {featured.urduName}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {featured.description}
                  </p>

                  <div className="pt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#0a192f]">
                      Rs. {featured.price.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{featured.unit}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Mujhe%20${encodeURIComponent(featured.name)}%20ka%20order%20karna%20hai.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-agrovia-dark text-xs uppercase tracking-wider px-6 py-3.5 text-center"
                >
                  <MessageCircle size={15} />
                  <span>Order on WhatsApp</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAdd(featured)}
                  className="bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs uppercase px-5 py-3.5 rounded-full transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus size={15} />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Responsive Mobile & Desktop 5-Card Catalog Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#0a192f]">
                Full Sahiwal Dairy Menu
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Fresh buffalo & cow milk, traditional dahi, pure desi ghee sweets, and dairy staples.
              </p>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { id: 'all', label: 'All Specialties' },
                { id: 'milk', label: 'Milk & Dahi' },
                { id: 'halwa', label: 'Desi Ghee Halwa' },
                { id: 'desserts', label: 'Kheer & Kulfa' },
                { id: 'ghee', label: 'Ghee & Staples' },
              ].map(tab => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setGridFilter(tab.id)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all ${
                    gridFilter === tab.id
                      ? 'bg-[#0b1e14] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-4.5"
          >
            <AnimatePresence>
              {filteredProducts.map((p) => {
                const isJustAdded = addedIds[p.id];

                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    key={p.id}
                    className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image with zoom on hover */}
                      <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden bg-slate-100">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-[#0b1e14]/90 text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-md backdrop-blur-xs">
                            {p.tag}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-3 sm:p-3.5 space-y-1">
                        <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base group-hover:text-emerald-800 transition-colors line-clamp-1">
                          {p.name}
                        </h5>

                        <div className="urdu-font text-emerald-800 font-bold text-xs sm:text-sm truncate leading-tight my-0.5">
                          {p.urduName}
                        </div>

                        <p className="text-slate-500 text-[10px] sm:text-xs line-clamp-2 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Bottom: Price & Button */}
                    <div className="p-2.5 sm:p-3.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-1.5 mt-auto bg-slate-50/50">
                      <div>
                        <span className="text-[10px] text-slate-400 block leading-tight">{p.unit}</span>
                        <span className="text-xs sm:text-sm md:text-base font-black text-slate-900 leading-tight">
                          Rs. {p.price.toLocaleString()}
                        </span>
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.88 }}
                        onClick={() => handleAdd(p)}
                        className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-black flex items-center justify-center gap-1 transition-all shrink-0 shadow-2xs ${
                          isJustAdded
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#0b1e14] text-white hover:bg-emerald-900'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check size={12} /> <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus size={12} /> <span>Add</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
