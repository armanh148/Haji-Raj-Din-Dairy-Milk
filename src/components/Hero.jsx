import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, MessageCircle, Phone, Star } from 'lucide-react';
import { dairyInfo } from '../data/dairyData';

export function Hero() {
  return (
    <section id="hero" className="pt-6 sm:pt-10 pb-14 sm:pb-20 bg-white overflow-hidden">
      <div className="container">
        
        {/* Top Header Row Matching Agrovia Layout with Motion */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-end mb-8 sm:mb-12">
          
          {/* Left: Pill & Big Editorial Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-3"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              100% Pure Sahiwal Dairy Tradition
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0a192f] tracking-tight leading-[1.05]">
              From Raj Din Farms <br />
              <span className="text-emerald-900 font-serif italic font-normal">to Your Table</span>
            </h1>

            <p 
              style={{ whiteSpace: 'nowrap' }} 
              className="urdu-font text-base sm:text-lg md:text-xl text-emerald-900 font-bold pt-1 overflow-visible py-1 block"
            >
              خالص دودھ، تازہ دہی اور روایتی دیسی گھی حلوہ جات
            </p>
          </motion.div>

          {/* Right: Narrative Paragraph & Clean Dark Button */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5 lg:pl-6"
          >
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We collect fresh, non-adulterated buffalo & cow milk daily from our dairy farm to our 
              <strong> 3 Sahiwal branches</strong> (Madhali Rd, Ghori St & Gujar Ahata). Zero chemical additives, 
              chilled to perfection, and delivered with unconditional trust.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Haji%20Raj%20Din%20Dairy%20se%20fresh%20milk%20aur%20sweets%20ka%20order%20karna%20chahta%20hoon.`}
                target="_blank"
                rel="noreferrer"
                className="btn-agrovia-dark text-xs uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-emerald-950/20"
              >
                <span>Order Pure Dairy</span>
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.97 }}
                href="#about"
                className="text-xs uppercase font-extrabold text-slate-800 hover:text-emerald-800 px-4 py-3 flex items-center gap-1.5 transition-colors"
              >
                <span>Our Farm Story</span>
                <ArrowRight size={14} />
              </motion.a>
            </div>

            {/* Social Trust Proof */}
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-500 font-medium">
              <div className="flex -space-x-1.5">
                {['🐄', '🥛', '🌿', '🍯'].map((emoji, i) => (
                  <span key={i} className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-xs shadow-2xs">
                    {emoji}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-950">100% Purity Certified</span>
                <span className="text-slate-300">•</span>
                <span>3 Outlets in Sahiwal</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Center Big Hero Image with Floating Metric Cards (Exact Agrovia Layout) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-slate-900 shadow-2xl border border-slate-100 group"
        >
          
          {/* Main Visual Image with Slow Hover Scale */}
          <img
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=85"
            alt="Raj Din Dairy Farms and Pure Milk Production"
            className="w-full h-[360px] sm:h-[460px] md:h-[560px] lg:h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          {/* Floating Card Left (Sinusoidal Motion) */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] sm:max-w-[220px]"
          >
            <span className="text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-wider block">
              Daily Farm Supply
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0a192f] mt-0.5">
              2,400 <span className="text-xs sm:text-sm font-bold text-slate-500">Litres</span>
            </div>
            <p className="text-[11px] text-emerald-800 font-bold mt-1">
              ✓ Buffalo & Cow Milk Chilled
            </p>
          </motion.div>

          {/* Floating Card Right (Sinusoidal Motion Delayed) */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-6 right-4 sm:top-10 sm:right-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 text-right max-w-[190px] sm:max-w-[210px]"
          >
            <span className="text-[10px] sm:text-xs font-black uppercase text-slate-400 tracking-wider block">
              Purity Guarantee
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 mt-0.5">
              100%
            </div>
            <p className="text-[11px] text-slate-600 font-bold mt-1">
              ★ Zero Chemicals / Natural
            </p>
          </motion.div>

          {/* Bottom Floating Branch Badge in Center */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-6 right-4 sm:bottom-10 sm:right-10 hidden md:flex items-center gap-2 bg-[#0b1e14]/90 backdrop-blur-md text-white px-4 py-2.5 rounded-full border border-white/20 text-xs font-bold shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Now 3 Branches in Sahiwal (Madhali Rd Outlet Active)</span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
