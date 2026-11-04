import React from 'react';
import { dairyInfo, branches } from '../data/dairyData';
import { Phone, MessageCircle, MapPin, Star, Clock, ThumbsUp, Navigation } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#02140a] text-white pt-16 pb-8 border-t border-amber-500/20">
      <div className="container">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-emerald-900/60">
          
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-bold text-2xl shadow-md">
                🥛
              </div>
              <div>
                <h4 className="font-black text-xl text-white">Haji Raj Din</h4>
                <p className="urdu-font text-xs text-amber-300 font-bold">حاجی راج دین ڈیری ملک</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Serving the families of Sahiwal with untainted dairy purity, farm-fresh milk, thick cultured dahi, pure desi ghee sohan halwa, and authentic dairy ice cream across 3 active branches.
            </p>

            <div className="flex items-center gap-2">
              <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-xl border border-amber-400/30 flex items-center gap-1.5">
                <Star size={13} className="fill-amber-400 text-amber-400" /> 3.8 ★ (38+ Verified Local Reviews)
              </span>
            </div>
          </div>

          {/* Column 2: Our 3 Branches */}
          <div className="space-y-3">
            <h5 className="font-black text-white text-sm uppercase tracking-wider text-amber-400">
              Our 3 Sahiwal Branches
            </h5>

            <div className="space-y-2.5 text-xs text-slate-300">
              {branches.map(b => (
                <div key={b.id} className="p-3 rounded-xl bg-white/5 border border-emerald-800/60">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{b.name}</span>
                    {b.isNew && (
                      <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full font-black">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">{b.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Timings */}
          <div className="space-y-3">
            <h5 className="font-black text-white text-sm uppercase tracking-wider text-amber-400">
              Orders & Helpline
            </h5>

            <div className="space-y-2 text-xs text-slate-300">
              <a 
                href={`tel:${dairyInfo.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-amber-300 transition-colors p-2.5 rounded-xl bg-white/5 border border-emerald-800/60 font-semibold"
              >
                <Phone size={15} className="text-amber-400" />
                <span>Call Hotline: <strong className="text-white">0300-2743860</strong></span>
              </a>

              <a 
                href={`https://wa.me/${dairyInfo.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-300 transition-colors p-2.5 rounded-xl bg-white/5 border border-emerald-800/60 font-semibold"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>WhatsApp: <strong className="text-white">+92 300 2743860</strong></span>
              </a>

              <div className="p-2.5 rounded-xl bg-white/5 border border-emerald-800/60 text-[11px]">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-0.5">
                  <Clock size={13} /> Daily Timings:
                </div>
                <span>06:00 AM – 11:30 PM (All 7 Days)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social & Links */}
          <div className="space-y-3">
            <h5 className="font-black text-white text-sm uppercase tracking-wider text-amber-400">
              Online Profiles & Maps
            </h5>

            <p className="text-xs text-slate-300">
              Connect with our official Facebook community or find driving directions on Yandex Maps:
            </p>

            <div className="flex flex-col gap-2.5 pt-1 text-xs">
              <a
                href={dairyInfo.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <ThumbsUp size={14} /> Visit Facebook Page
              </a>

              <a
                href={dairyInfo.yandexUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold-luxury text-slate-950 font-black p-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Navigation size={14} /> Open Yandex Maps Profile
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} Haji Raj Din Dairy Milk Sahiwal 57000. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Modern Pure Dairy & Multi-Branch Technology</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
