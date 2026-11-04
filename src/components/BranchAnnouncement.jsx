import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, CheckCircle2, Navigation, MessageCircle, Store, Clock } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function BranchAnnouncement() {
  const madhaliBranch = branches.find(b => b.id === 'madhali');

  return (
    <section className="py-10 sm:py-16 bg-[#fcfbf7] border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl border border-emerald-100/80"
        >
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Urdu & English Celebratory Headline */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 bg-[#0b1e14] text-amber-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                <Sparkles size={13} className="fill-amber-300 animate-spin" />
                Grand Opening in Sahiwal!
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0a192f] tracking-tight leading-snug">
                Now Serving You at <span className="text-emerald-800 underline decoration-amber-400 underline-offset-4">Madhali Road Outlet</span>
              </h3>

              <p className="urdu-font text-sm sm:text-base md:text-xl font-bold text-emerald-950 my-1 block leading-relaxed">
                مبارک ہو ساہیوال! حاجی راج دین ڈیری کی تیسری برانچ کا شاندار افتتاح
              </p>

              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                To serve families across Sahiwal with pure farm-fresh dairy convenience, Haji Raj Din Dairy Milk has launched its 3rd branch on 
                <strong> Madhali Road (near Bypass Chowk)</strong>. Equipped with modern milk chillers, instant counter billing, and our full traditional sweet range.
              </p>

              {/* Highlights 2-per-row grid on mobile */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] sm:text-xs font-bold text-slate-800">
                {[
                  "Morning & Evening Batches",
                  "Thick Matka Dahi & Kheer",
                  "Pure Desi Ghee Sohan Halwa",
                  "Spacious Fast Pickup"
                ].map((text, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-emerald-50/70 p-2 sm:p-2.5 rounded-xl border border-emerald-200/70 flex items-center gap-1.5 shadow-2xs"
                  >
                    <CheckCircle2 size={14} className="text-emerald-700 shrink-0" />
                    <span className="truncate">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Branch Action Card with Royal Theme */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="lg:col-span-5 bg-gradient-to-br from-[#06331d] via-[#042414] to-[#02180d] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl border border-amber-500/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
                    <Store size={13} className="text-amber-400" /> 3rd Active Outlet
                  </span>
                  <span className="bg-amber-400/90 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock size={10} /> 6:00 AM - 11:30 PM
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-black text-white mb-1">
                  Madhali Road Branch
                </h4>
                <p className="urdu-font text-xs sm:text-sm text-amber-300/90 font-bold mb-3">
                  مدھالی روڈ آؤٹ لیٹ، ساہیوال
                </p>

                <p className="text-xs text-emerald-200/90 mb-5 flex items-start gap-1.5 leading-relaxed">
                  <MapPin size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Madhali Road, near Bypass Chowk, Sahiwal 57000</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-emerald-900/60">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href={madhaliBranch?.mapLink || "https://yandex.com/maps/org/haji_raj_din_dairy_milk_outlet_madhali_road_branch_/98798196591/"}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold-luxury text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md flex-1 text-center font-bold"
                >
                  <Navigation size={14} />
                  <span>Yandex / Google Map</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Madhali%20Road%20branch%20se%20order%20karna%20hai.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-luxury text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md flex-1 text-center"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Branch</span>
                </motion.a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
