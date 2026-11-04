import React from 'react';
import { Sparkles, MapPin, CheckCircle, Navigation, Phone, MessageCircle } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function BranchAnnouncement() {
  const madhaliBranch = branches.find(b => b.id === 'madhali');

  return (
    <section className="py-8 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-900 border-y border-amber-300">
      <div className="container">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-xl border border-amber-200">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Urdu & English Celebratory Headline */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 bg-emerald-900 text-amber-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Sparkles size={14} />
                Now Open in Sahiwal!
              </div>

              <h3 className="urdu-font text-2xl sm:text-3xl font-black text-emerald-950">
                مبارک ہو ساہیوال! حاجی راج دین ڈیری کی تیسری برانچ کا شاندار افتتاح
              </h3>

              <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                Welcome to Our 3rd Branch on <span className="text-emerald-800">Madhali Road Outlet</span>
              </h4>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                To serve our loyal customers across Sahiwal with greater convenience, Haji Raj Din Dairy Milk has expanded with our brand new 3rd outlet. 
                Equipped with state-of-the-art milk chillers, instant counter billing, hygienic packaging, and our complete range of pure buffalo milk, 
                rich dahi, desi ghee sohan halwa, and dairy ice creams.
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-bold text-emerald-900">
                <span className="bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                  <CheckCircle size={13} className="text-emerald-600" /> Morning & Evening Fresh Milk
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                  <CheckCircle size={13} className="text-emerald-600" /> Matka Dahi & Khoya Kheer
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                  <CheckCircle size={13} className="text-emerald-600" /> Pure Desi Ghee Halwajat
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                  <CheckCircle size={13} className="text-emerald-600" /> Easy Parking & Quick Pickup
                </span>
              </div>
            </div>

            {/* Right Column: Branch Action Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-xl p-5 shadow-lg border border-emerald-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Branch Information
                </span>
                <span className="bg-emerald-700 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  Open 06:00 AM - 11:30 PM
                </span>
              </div>

              <h5 className="text-lg font-black text-white mb-1">
                Madhali Road Branch, Sahiwal
              </h5>
              <p className="text-xs text-emerald-200 mb-4 flex items-start gap-1.5">
                <MapPin size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                Madhali Road, near Bypass Chowk, Sahiwal 57000
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={madhaliBranch?.mapLink || "https://yandex.com/maps/org/haji_raj_din_dairy_milk_outlet_madhali_road_branch_/98798196591/"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Navigation size={14} /> Open in Yandex / Maps
                </a>

                <a
                  href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Madhali%20Road%20branch%20se%20order%20chahiye.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
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

