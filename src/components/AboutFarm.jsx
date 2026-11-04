import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function AboutFarm() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container">
        
        {/* Top Tag & Big Statement Paragraph (Matching Agrovia Section 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Our Dairy Heritage
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0a192f] leading-[1.25] tracking-tight">
            A modern pure dairy farm using traditional natural methods. We produce fresh, chemical-free buffalo & cow milk, thick matka dahi and pure desi ghee halwajat, delivered fresh to our 3 Sahiwal branches with love and responsibility.
          </h2>
        </motion.div>

        {/* Two-Column Split Layout Matching Agrovia */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Farm Production Photo with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80"
                alt="Pure Dairy Cattle and Farm Fields in Sahiwal"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <motion.div 
                whileHover={{ y: -4 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Natural Feed & Care</span>
                  <p className="font-extrabold text-sm text-[#0a192f]">100% Grass-Fed Dairy Buffalos & Cows</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-full">
                  Sahiwal Breed
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Organic Green Stamp & Mission Paragraph with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* The Iconic Circular Green Organic Stamp (Exact Agrovia Match with Gentle Spin) */}
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ rotate: [-6, 0, -6] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                whileHover={{ rotate: 12, scale: 1.05 }}
                className="w-28 h-28 rounded-full border-4 border-dashed border-emerald-600 flex flex-col items-center justify-center p-2 text-center bg-emerald-50/70 shadow-sm cursor-pointer"
              >
                <span className="text-[9px] font-black tracking-widest text-emerald-800 uppercase">Guaranteed</span>
                <span className="text-sm font-black tracking-tight text-emerald-700 uppercase">100% PURE</span>
                <span className="text-[8px] font-bold tracking-wider text-emerald-900 uppercase">ORGANIC DAIRY</span>
              </motion.div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">Sahiwal Tradition</span>
                <h4 className="text-lg font-black text-[#0a192f]">Pure Taste, No Adulteration</h4>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For generations, our family-owned dairy farm has prioritized authentic purity over industrial shortcuts. 
              Our milk is never treated with preservatives, chemical thickeners, or artificial skimming. What you get 
              is the true, rich sweetness of pure Punjab dairy.
            </p>

            <div className="space-y-2 text-xs sm:text-sm font-bold text-slate-700">
              {[
                "3 Branches: Madhali Rd (New), Ghori St & Gujar Ahata",
                "Morning & Evening fresh supply chilled at 4°C",
                "Celebrity singer Ramzan Jani approved quality"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#branches"
                className="btn-agrovia-dark text-xs uppercase tracking-wider px-6 py-3"
              >
                <span>Explore 3 Branches</span>
                <ArrowRight size={15} />
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
