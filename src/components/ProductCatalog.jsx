import React, { useState } from 'react';
import { products } from '../data/dairyData';
import { Check, Plus, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

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
    <section id="products" className="py-16 sm:py-20 bg-[#faf8f2] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-100/80 text-emerald-900 border border-emerald-300/60 mb-3 shadow-2xs">
            <Sparkles size={13} className="text-emerald-700" />
            100% Pure Sahiwal Dairy Tradition
          </div>
          <h2 className="urdu-font text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 mb-2 leading-relaxed">
            خالص دودھ، تازہ دہی اور لذیذ دیسی گھی سوغاتیں
          </h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Artisanal Dairy Products & Royal Confectionery
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Directly from our farm chillers to our 3 Sahiwal branches: <strong>Madhali Rd</strong>, <strong>Ghori St</strong> & <strong>Gujar Ahata</strong>. 
            Prepared daily without chemical thickeners or synthetic fats.
          </p>
        </div>

        {/* Categories Bar - Responsive Horizontal Touch Scroll with Luxury Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 -mx-2 px-2 sm:mx-0 sm:px-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 shadow-2xs ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#063821] to-[#042414] text-amber-300 border border-amber-500/50 shadow-md shadow-emerald-950/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-xs opacity-75 urdu-font hidden md:inline">({cat.urdu})</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid - 2 Per Row on Mobile, Responsive Multi-Column on Wider Screens */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-5 lg:gap-6">
          {filteredProducts.map((p) => {
            const isJustAdded = addedIds[p.id];

            return (
              <div 
                key={p.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Product Image with Gradient Vignette */}
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Tag Top Left */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-[#031d10]/90 text-amber-300 text-[9px] sm:text-[11px] font-black px-2 py-0.5 sm:py-1 rounded-lg backdrop-blur-md shadow-sm border border-amber-400/30">
                        {p.tag}
                      </span>
                    </div>

                    {/* Fat / Quality Badge Top Right */}
                    {p.fat && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-white/95 text-slate-800 text-[8px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-md shadow-sm border border-slate-200">
                          {p.fat}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Text Details */}
                  <div className="p-3 sm:p-4 space-y-1 sm:space-y-1.5">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base group-hover:text-emerald-800 transition-colors leading-snug line-clamp-1">
                      {p.name}
                    </h4>

                    <div className="urdu-font text-amber-700 font-bold text-xs sm:text-sm truncate leading-tight">
                      {p.urduName}
                    </div>

                    <p className="text-slate-500 text-[10px] sm:text-xs line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="pt-0.5 flex items-center justify-between text-[10px] sm:text-xs text-emerald-800 font-semibold">
                      <span className="truncate">✓ {p.freshness}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Add to Cart */}
                <div className="p-3 sm:p-4 pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-2 mt-auto bg-slate-50/60">
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight">{p.unit}</span>
                    <span className="text-sm sm:text-base md:text-lg font-black text-emerald-950 leading-tight">
                      Rs. {p.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(p)}
                    className={`w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-black flex items-center justify-center gap-1 transition-all shadow-2xs ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#063821] text-amber-300 hover:bg-[#031d10] active:scale-95'
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

        {/* Bulk Catering Banner with Royal Wedding Vibe */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#031d10] via-[#063821] to-[#031d10] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left z-10">
            <span className="bg-amber-400/20 text-amber-300 text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-amber-400/30">
              Special Catering & Wedding Orders
            </span>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
              Shadi, Khatam & Event Sweet Packs (دیسی گھی سوغاتیں)
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              We provide pure desi ghee halwa gift packaging, authentic matka kheer boxes, and bulk morning buffalo milk delivery across Sahiwal.
            </p>
          </div>

          <a
            href="https://wa.me/923002743860?text=Salam!%20Mujhe%20shadi/event%20k%20lye%20bulk%20halwa%20aur%20dairy%20order%20chahiye."
            target="_blank"
            rel="noreferrer"
            className="btn-gold-luxury text-xs sm:text-sm px-6 py-3.5 rounded-2xl whitespace-nowrap shadow-xl z-10 flex items-center gap-2"
          >
            <span>Inquire Bulk on WhatsApp</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
