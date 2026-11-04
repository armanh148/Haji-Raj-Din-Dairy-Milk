import React, { useState } from 'react';
import { products } from '../data/dairyData';
import { ShoppingBag, Check, Plus, Sparkles, Filter } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Specialties', urdu: 'تمام مصنوعات' },
  { id: 'fresh-milk', name: 'Fresh Milk & Butter', urdu: 'تازہ دودھ و مکھن' },
  { id: 'yogurt', name: 'Rich Dahi', urdu: 'گاڑھا دہی' },
  { id: 'halwajat', name: 'Pure Desi Ghee Halwajat', urdu: 'دیسی گھی حلوہ جات' },
  { id: 'kheer-rabri', name: 'Khoya Kheer & Rabri', urdu: 'کھویا کھیر و ربڑی' },
  { id: 'icecream', name: 'Dairy Kulfa & Ice Cream', urdu: 'ڈیری آئس کریم و قلفہ' },
];

export function ProductCatalog({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedIds, setAddedIds] = useState({});

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <Sparkles size={14} className="text-emerald-600" />
            100% Pure Sahiwal Dairy Tradition
          </div>
          <h2 className="urdu-font text-3xl sm:text-4xl font-black text-emerald-950 mb-2">
            خالص دودھ، تازہ دہی اور لذیذ دیسی گھی سوغاتیں
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Pure Dairy Products & Sweet Specialties
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Delivering daily from our farm to our 3 Sahiwal branches: Ghori St, Gujar Ahata & Madhali Road. 
            All products are 100% natural, hygienic, and free from artificial thickeners or chemicals.
          </p>
        </div>

        {/* Categories Bar - Responsive Horizontal Touch Scroll */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 -mx-2 px-2 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-xs opacity-80 urdu-font hidden md:inline">({cat.urdu})</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid - 2 Per Row on Mobile, Responsive across all devices */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 sm:gap-4 md:gap-6">
          {filteredProducts.map((p) => {
            const isJustAdded = addedIds[p.id];

            return (
              <div 
                key={p.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-28 sm:h-36 md:h-44 lg:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5">
                      <span className="bg-emerald-900/90 text-amber-300 text-[9px] sm:text-[11px] font-black px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md backdrop-blur-sm shadow-sm">
                        {p.tag}
                      </span>
                    </div>
                    {p.fat && (
                      <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5">
                        <span className="bg-white/95 text-slate-800 text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-slate-200">
                          {p.fat}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-2.5 sm:p-4 space-y-1 sm:space-y-2">
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1">
                        {p.name}
                      </h4>
                    </div>

                    <div className="urdu-font text-emerald-800 font-bold text-xs sm:text-sm truncate">
                      {p.urduName}
                    </div>

                    <p className="text-slate-600 text-[10px] sm:text-xs line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="pt-0.5 flex items-center justify-between text-[10px] sm:text-xs text-slate-500">
                      <span className="text-emerald-700 font-medium truncate">✓ {p.freshness}</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom / Price & CTA */}
                <div className="p-2.5 sm:p-4 pt-1.5 sm:pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-2 mt-auto">
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight">{p.unit}</span>
                    <span className="text-sm sm:text-base md:text-lg font-black text-slate-900 leading-tight">
                      Rs. {p.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(p)}
                    className={`w-full sm:w-auto px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-700 hover:text-white'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check size={13} /> <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus size={13} /> <span>Add</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bulk Catering Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 text-xs font-black uppercase tracking-wider">
              Special Catering & Wedding Orders
            </span>
            <h4 className="text-xl sm:text-2xl font-black">
              Shadi, Khatam & Event Sweet Packs (دیسی گھی حلوہ جات اور کھیر)
            </h4>
            <p className="text-slate-300 text-sm max-w-xl">
              We provide pure desi ghee halwa gift packaging, authentic matka kheer boxes, and bulk morning buffalo milk delivery across Sahiwal.
            </p>
          </div>

          <a
            href="https://wa.me/923002743860?text=Salam!%20Mujhe%20shadi/event%20k%20lye%20bulk%20halwa%20aur%20dairy%20order%20chahiye."
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp text-sm font-bold px-6 py-3 rounded-xl whitespace-nowrap shadow-md"
          >
            Inquire Bulk WhatsApp: 0300-2743860
          </a>
        </div>

      </div>
    </section>
  );
}

