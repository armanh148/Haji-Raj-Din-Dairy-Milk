import React from 'react';
import { ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function AboutFarm() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="container">
        
        {/* Top Tag & Big Statement Paragraph (Matching Agrovia Section 2) */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Our Dairy Heritage
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0a192f] leading-[1.25] tracking-tight">
            A modern pure dairy farm using traditional natural methods. We produce fresh, chemical-free buffalo & cow milk, thick matka dahi and pure desi ghee halwajat, delivered fresh to our 3 Sahiwal branches with love and responsibility.
          </h2>
        </div>

        {/* Two-Column Split Layout Matching Agrovia */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Farm Production Photo */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80"
                alt="Pure Dairy Cattle and Farm Fields in Sahiwal"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-750"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Natural Feed & Care</span>
                  <p className="font-extrabold text-sm text-[#0a192f]">100% Grass-Fed Dairy Buffalos & Cows</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-full">
                  Sahiwal Breed
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Green Stamp & Mission Paragraph */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Iconic Circular Green Organic Stamp (Exact Agrovia Match) */}
            <div className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-full border-4 border-dashed border-emerald-600 flex flex-col items-center justify-center p-2 text-center bg-emerald-50/70 shadow-sm transform -rotate-6">
                <span className="text-[9px] font-black tracking-widest text-emerald-800 uppercase">Guaranteed</span>
                <span className="text-sm font-black tracking-tight text-emerald-700 uppercase">100% PURE</span>
                <span className="text-[8px] font-bold tracking-wider text-emerald-900 uppercase">ORGANIC DAIRY</span>
              </div>

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
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>3 Branches: Madhali Rd (New), Ghori St & Gujar Ahata</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>Morning & Evening fresh supply chilled at 4°C</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>Celebrity singer Ramzan Jani approved quality</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#branches"
                className="btn-agrovia-dark text-xs uppercase tracking-wider px-6 py-3"
              >
                <span>Explore 3 Branches</span>
                <ArrowRight size={15} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

