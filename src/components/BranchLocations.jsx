import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { branches, dairyInfo } from '../data/dairyData';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle2, Building2, Sparkles, ArrowRight } from 'lucide-react';

export function BranchLocations() {
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);

  const selectedBranch = branches.find(b => b.id === selectedBranchId) || branches[0];

  return (
    <section id="branches" className="py-16 sm:py-20 bg-[#faf8f2] border-t border-slate-200/80 relative overflow-hidden">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-5xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3 shadow-2xs">
            <Building2 size={14} className="text-emerald-700" />
            3 Convenient Locations in Sahiwal 57000
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Find Your Nearest Haji Raj Din Dairy Outlet
          </h2>
          <p 
            style={{ whiteSpace: 'nowrap' }} 
            className="urdu-font text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 my-2 py-1 block w-full text-center"
          >
            ساہیوال میں ہماری ۳ برانچز پر تشریف لائیں
          </p>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Fresh morning & evening buffalo milk collection, traditional dahi, desi ghee sweets, and dairy ice cream available across all three branches.
          </p>
        </motion.div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {branches.map((b, idx) => {
            const isSelected = b.id === selectedBranchId;

            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedBranchId(b.id)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-xl ring-2 ring-amber-400/30'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Status */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-[11px] font-black px-3 py-1 rounded-full ${
                      b.isNew 
                        ? 'btn-gold-luxury text-slate-950 shadow-sm' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {b.badge}
                    </span>

                    <span className="text-xs text-emerald-800 font-bold flex items-center gap-1">
                      <Clock size={12} className="text-emerald-700" /> Open Today
                    </span>
                  </div>

                  {/* Branch Title */}
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1">
                    {b.name}
                  </h4>
                  <p className="urdu-font text-sm text-amber-700 font-bold mb-3">
                    {b.urduName}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 flex items-start gap-1.5 mb-4 leading-relaxed">
                    <MapPin size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6 pt-3.5 border-t border-slate-100">
                    {b.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={b.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation size={13} className="text-emerald-800" />
                    <span>Directions</span>
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20${encodeURIComponent(b.name)}%20se%20order%20chahiye.`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 btn-whatsapp-luxury font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Selected Branch Highlight Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedBranch.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-gradient-to-br from-[#031d10] via-[#063821] to-[#02180d] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-amber-500/30"
          >
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="btn-gold-luxury text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Active Outlet Focus
                  </span>
                  <span className="text-emerald-200 text-xs font-semibold">
                    {selectedBranch.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedBranch.name}
                </h3>
                <p className="urdu-font text-lg text-amber-300 font-bold">
                  {selectedBranch.urduName}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm">
                  {selectedBranch.address} — Open daily: <strong>{selectedBranch.timings}</strong>
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  {selectedBranch.features.map((f, i) => (
                    <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-slate-200 border border-white/10">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={selectedBranch.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold-luxury text-xs py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-center shadow-lg"
                >
                  <Navigation size={16} />
                  <span>Open Route in Map</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam!%20${encodeURIComponent(selectedBranch.name)}%20ki%20timing%20aur%20rates%20maloom%20karne%20hain.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-luxury font-bold text-xs py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-center shadow-lg"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </motion.a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
