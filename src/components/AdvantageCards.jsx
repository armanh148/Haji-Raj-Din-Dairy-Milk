import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Milk, Store, Flame } from 'lucide-react';

export function AdvantageCards() {
  const advantages = [
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />,
      title: "100% Pure & Chemical Free",
      description: "Zero synthetic thickeners, preservatives, or chemical dilution. Tested daily for natural butterfat purity."
    },
    {
      icon: <Milk className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />,
      title: "Farm Fresh Daily Supply",
      description: "Direct morning and evening supply collected from our farm and chilled to 4°C for peak nutrient density."
    },
    {
      icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />,
      title: "Pure Desi Ghee Halwajat",
      description: "Slow-simmered Multani Sohan Halwa, Gajar Halwa, and Habshi Halwa crafted strictly in pure danedar desi ghee."
    },
    {
      icon: <Store className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />,
      title: "3 Outlets in Sahiwal",
      description: "Convenient pickups at Madhali Road (New Branch!), Ghori Street, and Gujar Ahata with instant WhatsApp delivery."
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container">
        
        {/* Centered Section Header Matching Agrovia Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight">
            The Raj Din Advantage
          </h2>
          <p className="text-slate-500 text-xs sm:text-base mt-2">
            Why thousands of Sahiwal families and celebrated artists trust our dairy everyday.
          </p>
        </motion.div>

        {/* 2 Cards Per Row on Mobile, 4 Cards on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-emerald-300 shadow-xs hover:shadow-xl hover:shadow-emerald-950/10 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.12 }}
                  className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 sm:mb-5 lg:mb-6 transition-transform shadow-2xs"
                >
                  {adv.icon}
                </motion.div>

                <h3 className="text-xs sm:text-base lg:text-lg font-black text-[#0a192f] mb-1.5 sm:mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
                  {adv.title}
                </h3>

                <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-3.5 sm:mt-5 pt-2.5 sm:pt-4 border-t border-slate-100 text-[9px] sm:text-[11px] font-black text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                <span>Verified Quality</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
