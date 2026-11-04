import React from 'react';
import { Sparkles, Phone, MessageCircle, MapPin, CheckCircle, ShieldCheck, Heart, Award } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-emerald-950 shadow-sm">
                <Sparkles size={14} className="fill-emerald-950" />
                Now 3 Branches in Sahiwal!
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/80 text-emerald-200 border border-emerald-700">
                <ShieldCheck size={14} className="text-emerald-400" />
                100% Pure & Unadulterated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/80 text-amber-300 border border-emerald-700">
                ★ 3.8 Rated by 38+ Sahiwal Residents
              </span>
            </div>

            {/* Main Urdu & English Title */}
            <div>
              <h2 className="urdu-font text-2xl sm:text-3xl lg:text-4xl font-black text-amber-300 mb-2 leading-relaxed">
                خالص دودھ، تازہ دہی اور روایتی دیسی گھی کے حلوہ جات
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Haji Raj Din Dairy Milk <span className="text-emerald-400">Sahiwal</span>
              </h1>
            </div>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Serving the authentic purity of thick buffalo milk, naturally cultured matka dahi, royal khoya kheer, 
              pure desi ghee halwajat, and rich dairy kulfa across Sahiwal. Visit our <strong>Ghori St</strong>, 
              <strong> Gujar Ahata</strong>, or our newly opened <strong>Madhali Road Branch</strong> today!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Haji%20Raj%20Din%20Dairy%20se%20fresh%20milk%20aur%20sweets%20ka%20order%20dena%20chahta%20hoon.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-xl shadow-lg justify-center text-center"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Order (0300-2743860)</span>
              </a>

              <a
                href="tel:03002743860"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 sm:px-6 py-3.5 rounded-xl text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone size={18} className="text-amber-400" />
                <span>Call Branch Directly</span>
              </a>

              <a
                href="#branches"
                className="text-emerald-300 hover:text-white underline underline-offset-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 px-3 py-2 text-center"
              >
                <MapPin size={16} /> View 3 Locations
              </a>
            </div>

            {/* Celebrity Banner Highlight */}
            <div className="pt-2">
              <div className="bg-emerald-900/70 border border-emerald-700/80 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black flex-shrink-0">
                  <Award size={20} />
                </div>
                <div className="text-center sm:text-left text-xs sm:text-sm">
                  <span className="text-amber-300 font-bold">Celebrity Verified: </span>
                  <span className="text-slate-200">
                    Famous Singer <strong>Ramzan Jani</strong> visited Raj Din Dairy Farm & praised our authentic taste!
                  </span>
                  <a href="#celebrity" className="inline-block ml-1 text-emerald-400 font-bold hover:underline">
                    Watch Video →
                  </a>
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-emerald-800/80 text-xs sm:text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Zero Chemical / Fresh Chilled</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <span>3 Branches Across Sahiwal</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                <span>6:00 AM – 11:30 PM Everyday</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Card with Glass Style */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-800/90 to-emerald-950/90 border border-emerald-700 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* 3rd Branch Highlight Tag */}
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-amber-400 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    🎉 Grand Opening
                  </span>
                  <span className="text-xs text-emerald-300 font-semibold">
                    Madhali Road Outlet Active
                  </span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 border border-emerald-600/50 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=800&q=80"
                    alt="Fresh Pure Buffalo Milk & Dairy Products"
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div>
                      <p className="text-amber-300 text-xs font-bold urdu-font">روایتی خالص دودھ و مٹھاس</p>
                      <h4 className="text-white font-black text-lg">Pure Sahiwal Dairy Gold</h4>
                    </div>
                    <span className="bg-emerald-900/90 text-white text-xs px-2.5 py-1 rounded-lg border border-emerald-500 font-bold">
                      Direct Farm Milk
                    </span>
                  </div>
                </div>

                {/* Quick Branch Switcher / Cards */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Our 3 Active Locations</span>
                    <span className="text-amber-400 font-semibold">Sahiwal 57000</span>
                  </div>

                  {branches.map((b) => (
                    <div 
                      key={b.id} 
                      className={`p-3 rounded-xl border transition-all ${
                        b.isNew 
                          ? 'bg-amber-500/10 border-amber-400/40 text-amber-100' 
                          : 'bg-emerald-900/40 border-emerald-700/50 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin size={15} className={b.isNew ? "text-amber-400" : "text-emerald-400"} />
                          <span className="font-bold text-sm text-white">{b.name}</span>
                        </div>
                        {b.isNew && (
                          <span className="bg-amber-400 text-emerald-950 text-[10px] font-black px-2 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 mt-1 pl-6">
                        {b.address}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Call to Action in card */}
                <div className="mt-5 pt-4 border-t border-emerald-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-300 block">Questions or Bulk Orders?</span>
                    <span className="text-sm font-black text-amber-300">0300-2743860</span>
                  </div>
                  <a
                    href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam!%20Haji%20Raj%20Din%20Dairy%20Sahiwal%20se%20rabta%20kar%20raha%20hoon.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

