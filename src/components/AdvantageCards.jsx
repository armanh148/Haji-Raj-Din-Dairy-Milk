import React from 'react';
import { ShieldCheck, Milk, Sparkles, Heart, Store, Flame, Award } from 'lucide-react';

export function AdvantageCards() {
  const advantages = [
    {
      icon: <ShieldCheck size={26} className="text-emerald-700" />,
      title: "100% Pure & Chemical Free",
      description: "Zero synthetic thickeners, preservatives, or chemical dilution. Tested daily for natural butterfat purity."
    },
    {
      icon: <Milk size={26} className="text-emerald-700" />,
      title: "Farm Fresh Daily Supply",
      description: "Direct morning and evening supply collected from our farm and chilled to 4°C for peak nutrient density."
    },
    {
      icon: <Flame size={26} className="text-emerald-700" />,
      title: "Pure Desi Ghee Halwajat",
      description: "Slow-simmered Multani Sohan Halwa, Gajar Halwa, and Habshi Halwa crafted strictly in pure danedar desi ghee."
    },
    {
      icon: <Store size={26} className="text-emerald-700" />,
      title: "3 Outlets in Sahiwal",
      description: "Convenient pickups at Madhali Road (New Branch!), Ghori Street, and Gujar Ahata with instant WhatsApp delivery."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="container">
        
        {/* Centered Section Header Matching Agrovia Layout */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight">
            The Raj Din Advantage
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Why thousands of Sahiwal families and celebrated artists trust our dairy everyday.
          </p>
        </div>

        {/* 4 Clean Minimalist Cards Horizontal Row (Exact Agrovia Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-100 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {adv.icon}
                </div>

                <h3 className="text-lg font-black text-[#0a192f] mb-2 leading-snug">
                  {adv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-black text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                <span>Verified Quality</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
