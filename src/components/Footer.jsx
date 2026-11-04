import React from 'react';
import { dairyInfo, branches } from '../data/dairyData';
import { Phone, MessageCircle, MapPin, Star, ThumbsUp, Navigation } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b1e14] text-white pt-16 pb-8 overflow-hidden relative border-t border-emerald-900/60">
      <div className="container relative z-10">
        
        {/* Main Footer Links Columns Matching Agrovia Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-14 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Column 1: Company / About */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h5 className="font-black text-white uppercase tracking-wider text-xs">
              Haji Raj Din Dairy
            </h5>
            <p className="text-slate-300 text-xs leading-relaxed">
              Serving Sahiwal with authentic farm-fresh buffalo & cow milk, traditional dahi, pure desi ghee sohan halwa, and dairy ice cream across 3 branches.
            </p>
            <div className="text-xs font-bold text-emerald-400">
              3.8 ★ (38+ Verified Local Reviews)
            </div>
          </div>

          {/* Column 2: Branches */}
          <div className="space-y-2.5">
            <h5 className="font-black text-white uppercase tracking-wider text-xs">
              Our 3 Branches
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="font-bold text-emerald-300">• Madhali Road (New 3rd Outlet)</li>
              <li>• Ghori Street Branch</li>
              <li>• Gujar Ahata Branch</li>
              <li className="text-slate-400">Postal: Sahiwal 57000</li>
            </ul>
          </div>

          {/* Column 3: Fresh Products */}
          <div className="space-y-2.5">
            <h5 className="font-black text-white uppercase tracking-wider text-xs">
              Pure Dairy Products
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>Farm Fresh Buffalo Milk</li>
              <li>Pure Cow Milk (A2 Light)</li>
              <li>Thick Matka Dahi</li>
              <li>Pure Desi Ghee Sohan Halwa</li>
              <li>Matka Khoya Kheer & Kulfa</li>
            </ul>
          </div>

          {/* Column 4: Orders & Helpline */}
          <div className="space-y-2.5">
            <h5 className="font-black text-white uppercase tracking-wider text-xs">
              Helpline & Orders
            </h5>
            <div className="space-y-2 text-xs text-slate-300">
              <p>Hotline: <strong>0300-2743860</strong></p>
              <p>WhatsApp: <strong>+92 300 2743860</strong></p>
              <p className="text-emerald-300">Open Daily: 06:00 AM – 11:30 PM</p>
            </div>
          </div>

          {/* Column 5: Social Profiles */}
          <div className="space-y-2.5">
            <h5 className="font-black text-white uppercase tracking-wider text-xs">
              Online Profiles
            </h5>
            <div className="space-y-2 text-xs">
              <a 
                href={dairyInfo.facebookUrl} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 text-slate-300 transition-colors"
              >
                <ThumbsUp size={13} /> Facebook Official
              </a>
              <a 
                href={dairyInfo.yandexUrl} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 text-slate-300 transition-colors"
              >
                <Navigation size={13} /> Yandex Maps Profile
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Small Credits */}
        <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} Haji Raj Din Dairy Milk Sahiwal 57000. All Rights Reserved.
          </div>
          <div className="text-slate-400">
            Farm to Table Organic Dairy • Designed for Multi-Branch Growth
          </div>
        </div>

      </div>

      {/* Giant Agrovia-Style Watermark Wordmark Across Bottom (Exact Agrovia Match) */}
      <div className="w-full text-center overflow-hidden pt-4 -mb-4 select-none pointer-events-none">
        <span className="giant-watermark block uppercase">
          HAJI RAJ DIN
        </span>
      </div>

    </footer>
  );
}
