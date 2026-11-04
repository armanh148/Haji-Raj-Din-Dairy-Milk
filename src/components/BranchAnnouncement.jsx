import React from 'react';
import { Sparkles, MapPin, CheckCircle2, Navigation, Phone, MessageCircle, PartyPopper } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function BranchAnnouncement() {
  const madhaliBranch = branches.find(b => b.id === 'madhali');

  return (
    <section className="py-8 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-900 shadow-inner border-y border-amber-300 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#925807_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl border border-white/60">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Urdu & English Celebratory Headline */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#042414] text-amber-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                <Sparkles size={13} className="fill-amber-300" />
                Grand Opening in Sahiwal!
              </div>

              <h3 
                style={{ whiteSpace: 'nowrap' }} 
                className="urdu-font text-xs sm:text-lg md:text-2xl font-black text-emerald-950 leading-relaxed overflow-x-auto scrollbar-none block"
              >
                مبارک ہو ساہیوال! حاجی راج دین ڈیری کی تیسری برانچ کا شاندار افتتاح
              </h3>

              <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Now Serving You at <span className="text-emerald-800 underline decoration-amber-500 underline-offset-4">Madhali Road Outlet</span>
              </h4>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                To serve families across Sahiwal with pure farm-fresh dairy convenience, Haji Raj Din Dairy Milk has launched its 3rd branch on 
                <strong> Madhali Road (near Bypass Chowk)</strong>. Equipped with modern milk chillers, instant counter billing, and our full traditional sweet range.
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-bold text-emerald-950">
                <span className="bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 size={14} className="text-emerald-700" /> Morning & Evening Fresh Batches
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 size={14} className="text-emerald-700" /> Thick Matka Dahi & Khoya Kheer
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 size={14} className="text-emerald-700" /> Pure Desi Ghee Sohan Halwa
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 size={14} className="text-emerald-700" /> Spacious Parking & Fast Counter
                </span>
              </div>
            </div>

            {/* Right Column: Branch Action Card with Royal Theme */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#06331d] to-[#02180d] text-white rounded-2xl p-5 sm:p-6 shadow-xl border border-amber-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={12} /> Newly Opened Outlet
                </span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">
                  6:00 AM - 11:30 PM
                </span>
              </div>

              <h5 className="text-lg sm:text-xl font-black text-white mb-1">
                Madhali Road Branch, Sahiwal
              </h5>
              <p className="text-xs text-emerald-200/90 mb-4 flex items-start gap-1.5">
                <MapPin size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                Madhali Road, near Bypass Chowk, Sahiwal 57000
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={madhaliBranch?.mapLink || "https://yandex.com/maps/org/haji_raj_din_dairy_milk_outlet_madhali_road_branch_/98798196591/"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-gold-luxury text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Navigation size={14} /> Open Maps Navigation
                </a>

                <a
                  href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Madhali%20Road%20branch%20se%20order%20chahiye.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-whatsapp-luxury text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={14} /> WhatsApp 0300-2743860
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
