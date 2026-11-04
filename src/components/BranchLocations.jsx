import React, { useState } from 'react';
import { branches, dairyInfo } from '../data/dairyData';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle2, Building, ExternalLink } from 'lucide-react';

export function BranchLocations() {
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);

  const selectedBranch = branches.find(b => b.id === selectedBranchId) || branches[0];

  return (
    <section id="branches" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <Building size={14} className="text-emerald-600" />
            3 Convenient Locations in Sahiwal
          </div>
          <h2 className="urdu-font text-3xl sm:text-4xl font-black text-emerald-950 mb-2">
            ساہیوال میں ہماری ۳ برانچز پر تشریف لائیں
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Find Your Nearest Haji Raj Din Dairy Outlet
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Fresh milk collection, traditional dahi, desi ghee sweets, and dairy ice cream available morning and evening across all three branches.
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {branches.map((b) => {
            const isSelected = b.id === selectedBranchId;

            return (
              <div
                key={b.id}
                onClick={() => setSelectedBranchId(b.id)}
                className={`cursor-pointer rounded-2xl p-4 sm:p-6 transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-xl ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      b.isNew 
                        ? 'bg-amber-400 text-emerald-950 font-black' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {b.badge}
                    </span>

                    <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                      <Clock size={12} /> Open Today
                    </span>
                  </div>

                  {/* Branch Title */}
                  <h4 className="text-lg font-black text-slate-900 mb-1">
                    {b.name}
                  </h4>
                  <p className="urdu-font text-sm text-emerald-800 font-bold mb-3">
                    {b.urduName}
                  </p>

                  <p className="text-xs text-slate-600 flex items-start gap-1.5 mb-4">
                    <MapPin size={15} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    {b.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={b.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors"
                  >
                    <Navigation size={13} className="text-emerald-700" />
                    <span>Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20${encodeURIComponent(b.name)}%20se%20order%20chahiye.`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageCircle size={13} />
                    <span>Order</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Branch Detailed Box */}
        <div className="bg-emerald-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-emerald-950 text-xs font-black px-3 py-1 rounded-md uppercase">
                  Active Selection
                </span>
                <span className="text-emerald-200 text-xs font-medium">
                  {selectedBranch.badge}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-black text-white">
                {selectedBranch.name}
              </h4>
              <p className="urdu-font text-lg text-amber-300 font-bold">
                {selectedBranch.urduName}
              </p>

              <p className="text-slate-200 text-sm flex items-center gap-2">
                <MapPin size={16} className="text-amber-400" />
                {selectedBranch.address}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200 pt-2">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-400" /> Timings: {selectedBranch.timings}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={14} className="text-amber-400" /> Hotline: {dairyInfo.displayPhone}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={selectedBranch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Navigation size={16} /> Open Navigation on Map
              </a>

              <a
                href={`tel:${dairyInfo.phoneRaw}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={16} className="text-amber-400" /> Call Branch (0300-2743860)
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

