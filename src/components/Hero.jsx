import React from 'react';
import { Sparkles, Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Award, Star, ArrowRight, Clock } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#031d10] via-[#06331d] to-[#042414] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-amber-500/10">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d99a26_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High-Impact Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-950/40">
                <Sparkles size={13} className="fill-slate-950" />
                Now 3 Outlets in Sahiwal!
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-200 border border-emerald-500/30 backdrop-blur-sm">
                <ShieldCheck size={14} className="text-emerald-400" />
                100% Pure & Unadulterated
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                <Star size={13} className="fill-amber-400 text-amber-400" /> 3.8 ★ (38+ Reviews)
              </span>
            </div>

            {/* Main Urdu & English Titles */}
            <div className="space-y-2">
              <div className="inline-block">
                <p className="urdu-font text-2xl sm:text-3xl lg:text-4xl font-black text-amber-300 leading-relaxed drop-shadow-sm">
                  خالص دودھ، تازہ دہی اور روایتی دیسی گھی کے حلوہ جات
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Haji Raj Din Dairy Milk <span className="gold-gradient-text">Sahiwal</span>
              </h1>
            </div>

            {/* Brand Story Paragraph */}
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal opacity-95">
              Sahiwal's household destination for organic farm-fresh buffalo milk, naturally cultured sweet matka dahi, 
              authentic desi ghee sohan halwa, and royal dairy ice creams. Now serving you with <strong>3 convenient branches</strong> at 
              <strong className="text-amber-300"> Madhali Road</strong>, <strong className="text-amber-300">Ghori Street</strong>, and <strong className="text-amber-300">Gujar Ahata</strong>!
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Haji%20Raj%20Din%20Dairy%20se%20fresh%20milk%20aur%20sweets%20ka%20order%20dena%20chahta%20hoon.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-luxury text-sm sm:text-base px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 text-center group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp Order (0300-2743860)</span>
              </a>

              <a
                href="tel:03002743860"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone size={17} className="text-amber-400" />
                <span>Call Branch Directly</span>
              </a>

              <a
                href="#products"
                className="text-amber-300 hover:text-white underline underline-offset-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 px-3 py-2 text-center transition-colors"
              >
                <span>View Pure Menu</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Celebrity Visit Ribbon */}
            <div className="pt-2">
              <div className="bg-emerald-950/70 border border-amber-500/30 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center gap-3 backdrop-blur-md shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black flex-shrink-0 shadow-md">
                  <Award size={22} />
                </div>
                <div className="text-center sm:text-left text-xs sm:text-sm">
                  <span className="text-amber-300 font-bold">Celebrity Verified: </span>
                  <span className="text-slate-200">
                    Famous Singer <strong>Ramzan Jani</strong> visited Raj Din Dairy Farm & praised our authentic taste!
                  </span>
                  <a href="#celebrity" className="inline-block ml-1 text-emerald-400 font-bold hover:text-amber-300 underline">
                    Watch Video →
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Metrics Pill Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-emerald-800/80 text-xs sm:text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Zero Chemicals / Pure Chilled</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span>3 Branches Across Sahiwal</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span>06:00 AM – 11:30 PM Open</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card with Royal Glassmorphism Style */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#063b22]/90 via-[#042817]/90 to-[#02180d]/95 border border-amber-500/30 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl">
                
                {/* 3rd Branch Celebration Header */}
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles size={12} /> Grand Opening
                  </span>
                  <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                    <MapPin size={13} /> Madhali Rd Outlet Active
                  </span>
                </div>

                {/* Hero Showcase Photo */}
                <div className="relative rounded-2xl overflow-hidden mb-4 border border-emerald-600/40 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=800&q=80"
                    alt="Fresh Pure Buffalo Milk & Dairy Products"
                    className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02180d] via-transparent to-transparent opacity-85" />
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div>
                      <p className="text-amber-300 text-xs font-bold urdu-font">روایتی خالص دودھ و مٹھاس</p>
                      <h4 className="text-white font-black text-base sm:text-lg">Fresh Morning & Evening Supply</h4>
                    </div>
                    <span className="bg-[#031d10]/90 text-amber-300 text-[10px] sm:text-xs px-2.5 py-1 rounded-lg border border-amber-500/40 font-bold backdrop-blur-sm">
                      Farm Direct
                    </span>
                  </div>
                </div>

                {/* 3 Active Sahiwal Branches Cards */}
                <div className="space-y-2">
                  <div className="text-[11px] font-black text-amber-300/90 uppercase tracking-wider flex items-center justify-between">
                    <span>Active Branches in Sahiwal</span>
                    <span className="text-emerald-300 font-semibold">Timings: 6 AM - 11:30 PM</span>
                  </div>

                  {branches.map((b) => (
                    <div 
                      key={b.id} 
                      className={`p-2.5 sm:p-3 rounded-xl border transition-all ${
                        b.isNew 
                          ? 'bg-amber-400/10 border-amber-400/40 text-amber-100 shadow-sm' 
                          : 'bg-white/5 border-emerald-700/40 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className={b.isNew ? "text-amber-400" : "text-emerald-400"} />
                          <span className="font-bold text-xs sm:text-sm text-white">{b.name}</span>
                        </div>
                        {b.isNew && (
                          <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5 pl-5 leading-tight truncate">
                        {b.address}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Card Footer Callout */}
                <div className="mt-4 pt-3.5 border-t border-emerald-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-300 block">Instant Helpline & Orders:</span>
                    <span className="text-sm font-black text-amber-300">0300-2743860</span>
                  </div>
                  <a
                    href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam!%20Haji%20Raj%20Din%20Dairy%20Sahiwal%20se%20rabta%20kar%20raha%20hoon.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-luxury text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <MessageCircle size={14} /> WhatsApp
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
