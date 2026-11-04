import React, { useState } from 'react';
import { branches, dairyInfo } from '../data/dairyData';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle2, Building2, Sparkles, ArrowRight } from 'lucide-react';

export function BranchLocations() {
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);

  const selectedBranch = branches.find(b => b.id === selectedBranchId) || branches[0];

  return (
    <section id="branches" className="py-16 sm:py-20 bg-[#faf8f2] border-t border-slate-200/80 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center w-full max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3 shadow-2xs">
            <Building2 size={14} className="text-emerald-700" />
            3 Convenient Locations in Sahiwal 57000
          </div>
          <h2 
            style={{ whiteSpace: 'nowrap' }} 
            className="urdu-font text-sm sm:text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 mb-2 leading-relaxed overflow-x-auto scrollbar-none py-1 block w-full text-center"
          >
            ساہیوال میں ہماری ۳ برانچز پر تشریف لائیں
          </h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Find Your Nearest Haji Raj Din Dairy Outlet
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Fresh morning & evening buffalo milk collection, traditional dahi, desi ghee sweets, and dairy ice cream available across all three branches.
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {branches.map((b) => {
            const isSelected = b.id === selectedBranchId;

            return (
              <div
                key={b.id}
                onClick={() => setSelectedBranchId(b.id)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-xl ring-2 ring-amber-400/30 -translate-y-1'
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
                    {b.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={b.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation size={13} className="text-emerald-800" />
                    <span>Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20${encodeURIComponent(b.name)}%20se%20order%20chahiye.`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 btn-whatsapp-luxury font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Branch Highlight Showcase Box */}
        <div className="bg-gradient-to-br from-[#031d10] via-[#063821] to-[#02180d] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-amber-500/30">
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

              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                {selectedBranch.name}
              </h4>
              <p className="urdu-font text-xl text-amber-300 font-bold">
                {selectedBranch.urduName}
              </p>

              <p className="text-slate-200 text-sm sm:text-base flex items-center gap-2">
                <MapPin size={17} className="text-amber-400 flex-shrink-0" />
                {selectedBranch.address}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-amber-400" /> Open: {selectedBranch.timings}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={15} className="text-amber-400" /> Call Hotline: {dairyInfo.displayPhone}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={selectedBranch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold-luxury text-sm py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation size={17} /> Open Driving Map
              </a>

              <a
                href={`tel:${dairyInfo.phoneRaw}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={17} className="text-amber-400" /> Call Branch (0300-2743860)
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
