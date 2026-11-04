import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { branches, dairyInfo } from '../data/dairyData';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle2, Building2, ChevronLeft, ChevronRight, Store, Sparkles } from 'lucide-react';

export function BranchLocations() {
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);
  const [mobileIndex, setMobileIndex] = useState(0);

  const selectedBranch = branches.find(b => b.id === selectedBranchId) || branches[0];

  const handlePrevMobile = () => {
    const nextIdx = (mobileIndex - 1 + branches.length) % branches.length;
    setMobileIndex(nextIdx);
    setSelectedBranchId(branches[nextIdx].id);
  };

  const handleNextMobile = () => {
    const nextIdx = (mobileIndex + 1) % branches.length;
    setMobileIndex(nextIdx);
    setSelectedBranchId(branches[nextIdx].id);
  };

  const currentMobileBranch = branches[mobileIndex];

  return (
    <section id="branches" className="py-16 sm:py-20 bg-[#faf8f2] border-t border-slate-200/80 relative overflow-hidden">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12"
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

        {/* MOBILE CAROUSEL VIEW (Visible on mobile, hidden on tablet & desktop) */}
        <div className="block md:hidden mb-8">
          {/* Mobile Quick Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-2xl mb-4">
            {branches.map((b, idx) => {
              const isActive = idx === mobileIndex;
              return (
                <button
                  key={b.id}
                  onClick={() => {
                    setMobileIndex(idx);
                    setSelectedBranchId(b.id);
                  }}
                  className={`flex-1 py-2 px-1 rounded-xl text-center text-xs font-black transition-all ${
                    isActive
                      ? 'bg-white text-emerald-950 shadow-sm ring-1 ring-emerald-500/30'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="block truncate text-[11px]">{b.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Carousel Card with AnimatePresence */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMobileBranch.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-400 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Status */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-[11px] font-black px-3 py-1 rounded-full ${
                      currentMobileBranch.isNew 
                        ? 'btn-gold-luxury text-slate-950 shadow-sm' 
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      {currentMobileBranch.badge}
                    </span>

                    <span className="text-xs text-emerald-800 font-bold flex items-center gap-1">
                      <Clock size={12} className="text-emerald-700" /> Open Today
                    </span>
                  </div>

                  {/* Branch Title */}
                  <h4 className="text-lg font-black text-slate-900 mb-0.5">
                    {currentMobileBranch.name}
                  </h4>
                  <p className="urdu-font text-sm text-amber-700 font-bold mb-3">
                    {currentMobileBranch.urduName}
                  </p>

                  <p className="text-xs text-slate-600 flex items-start gap-1.5 mb-4 leading-relaxed">
                    <MapPin size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span>{currentMobileBranch.address}</span>
                  </p>

                  {/* Key Features (2-per-row grid on mobile) */}
                  <div className="grid grid-cols-2 gap-2 mb-5 pt-3.5 border-t border-slate-100">
                    {currentMobileBranch.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 bg-slate-50 border border-slate-100 p-1.5 rounded-lg">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={currentMobileBranch.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation size={13} className="text-emerald-800" />
                    <span>Directions</span>
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20${encodeURIComponent(currentMobileBranch.name)}%20se%20order%20chahiye.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 btn-whatsapp-luxury font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Arrows & Dots */}
            <div className="flex items-center justify-between mt-4 px-1">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handlePrevMobile}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 text-slate-800 flex items-center justify-center active:scale-95 transition-all"
                aria-label="Previous Branch"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex items-center gap-1.5">
                {branches.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setMobileIndex(i);
                      setSelectedBranchId(b.id);
                    }}
                    className={`transition-all rounded-full ${
                      mobileIndex === i
                        ? 'w-7 h-2.5 bg-emerald-700'
                        : 'w-2.5 h-2.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleNextMobile}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 text-slate-800 flex items-center justify-center active:scale-95 transition-all"
                aria-label="Next Branch"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* DESKTOP 3-COLUMN GRID VIEW (Hidden on mobile, visible md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
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
            className="relative overflow-hidden bg-gradient-to-br from-[#062c1a] via-[#041f12] to-[#02140b] text-white rounded-3xl p-5 sm:p-7 lg:p-9 shadow-2xl border-2 border-amber-400/35"
          >
            {/* Ambient luxury glows */}
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                {/* Header Badge & Timings */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-800/60">
                  <div className="flex items-center gap-2">
                    <span className="btn-gold-luxury text-slate-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                      <Store size={13} className="text-slate-950" />
                      Active Outlet Focus
                    </span>
                    <span className="text-[11px] font-bold text-amber-300 bg-white/5 border border-amber-400/25 px-2.5 py-0.5 rounded-full">
                      {selectedBranch.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                    <Clock size={12} className="text-amber-400" />
                    <span>Open Daily: {selectedBranch.timings}</span>
                  </div>
                </div>

                {/* Branch Names */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {selectedBranch.name}
                </h3>
                <p className="urdu-font text-base sm:text-xl text-amber-300 font-bold block my-1">
                  {selectedBranch.urduName}
                </p>

                {/* Address Bar */}
                <div className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>{selectedBranch.address}</span>
                </div>

                {/* Key Features (Clean 2-Column Grid) */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {selectedBranch.features.map((f, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-1.5 sm:gap-2 bg-emerald-950/70 border border-emerald-500/25 px-2.5 py-2 rounded-xl text-[11px] sm:text-xs text-emerald-100 font-medium shadow-2xs"
                    >
                      <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Column */}
              <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 pt-2 lg:pt-0">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  href={selectedBranch.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold-luxury text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-center shadow-lg"
                >
                  <Navigation size={15} />
                  <span>Open Route in Map</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam!%20${encodeURIComponent(selectedBranch.name)}%20ki%20timing%20aur%20rates%20maloom%20karne%20hain.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-luxury font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-center shadow-lg"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                <p className="text-[11px] text-center text-emerald-200/70 mt-1">
                  Direct helpline: <strong>{dairyInfo.phone}</strong>
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
