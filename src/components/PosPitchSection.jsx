import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, AlertTriangle, Database, Smartphone, Printer, Sparkles, Store, CheckCircle2, ArrowRight } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function PosPitchSection() {
  const [activeTab, setActiveTab] = useState('features');
  
  // Interactive POS Simulator State
  const [selectedBranch, setSelectedBranch] = useState('Madhali Road Outlet');
  const [simulatedStock, setSimulatedStock] = useState({
    buffaloMilk: 180, // Litres
    matkaDahi: 45,    // Kg
    sohanHalwa: 28,   // Kg
  });
  const [recentBills, setRecentBills] = useState([
    { id: 'REC-1042', time: '11:42 AM', items: '2L Buffalo Milk + 1Kg Dahi', total: 740 },
    { id: 'REC-1041', time: '11:35 AM', items: '1Kg Desi Ghee Sohan Halwa', total: 1450 }
  ]);
  const [newOrderLitre, setNewOrderLitre] = useState(2);

  const handleSimulatedSale = () => {
    if (simulatedStock.buffaloMilk >= newOrderLitre) {
      setSimulatedStock(prev => ({
        ...prev,
        buffaloMilk: prev.buffaloMilk - newOrderLitre
      }));
      const newRec = {
        id: `REC-${Math.floor(1000 + Math.random() * 9000)}`,
        time: 'Just now',
        items: `${newOrderLitre}L Fresh Buffalo Milk`,
        total: newOrderLitre * 240
      };
      setRecentBills([newRec, ...recentBills.slice(0, 3)]);
    }
  };

  return (
    <section id="pos-pitch" className="py-16 sm:py-20 bg-gradient-to-b from-[#02180d] via-[#052b19] to-[#01120a] text-white relative overflow-hidden">
      
      {/* Decorative tech grid backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 mb-3 shadow-md">
            <Sparkles size={14} className="fill-slate-950 animate-spin" />
            Special Pitch for Haji Raj Din Management
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Scale Haji Raj Din Dairy with Modern Multi-Branch Tech
          </h2>
          <p 
            style={{ whiteSpace: 'nowrap' }} 
            className="urdu-font text-xs sm:text-base md:text-xl lg:text-2xl font-black text-amber-300 my-2 py-1 block w-full text-center"
          >
            ملٹی برانچ ویب سائٹ اور ڈیسک ٹاپ سٹاک ایکسپائری پی او ایس سسٹم
          </p>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            You are spending on paid Facebook video ads and expanding to 3 Sahiwal branches. 
            Now unlock <strong>100% stock control</strong>, prevent milk spoilage, and streamline morning/evening rush billing with a dedicated Desktop POS.
          </p>
        </motion.div>

        {/* Tab Switcher - Mobile / Tablet / Laptop Responsive with Motion */}
        <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-12">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('features')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === 'features'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-xl shadow-emerald-950/60 border border-emerald-400/40'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Monitor size={16} /> Why Haji Raj Din Needs This
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('simulator')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === 'simulator'
                ? 'btn-gold-luxury text-slate-950 shadow-xl'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Store size={16} /> Live Interactive POS Terminal Simulator
          </motion.button>
        </div>

        {/* TAB 1: FEATURES & VALUE PROPOSITION */}
        <AnimatePresence mode="wait">
          {activeTab === 'features' && (
            <motion.div 
              key="features"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8 sm:space-y-12"
            >
              {/* The 3 Core Pain Points Solved - 2 Per Row on Mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
                
                {/* Card 1 */}
                <motion.div 
                  whileHover={{ y: -6, borderColor: 'rgba(251, 191, 36, 0.6)' }}
                  className="bg-[#031d10]/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-emerald-500/20 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-3 sm:mb-4 border border-red-500/30">
                      <AlertTriangle size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-xs sm:text-base md:text-lg font-black text-white mb-1.5 sm:mb-2 leading-snug">
                      1. Zero Milk Wastage (Expiry)
                    </h4>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
                      Tracks morning vs evening batches in chiller tanks. Triggers visual alerts 4 hours before turning sour so it can be converted into Khoya or Desi Ghee.
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2.5 sm:mt-4 sm:pt-3 border-t border-emerald-900/80 text-[10px] sm:text-xs font-bold text-amber-300 flex items-center gap-1">
                    ✓ Batch logs & chiller alerts
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  whileHover={{ y: -6, borderColor: 'rgba(52, 211, 153, 0.6)' }}
                  className="bg-[#031d10]/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-emerald-500/20 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-3 sm:mb-4 border border-emerald-500/30">
                      <Database size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-xs sm:text-base md:text-lg font-black text-white mb-1.5 sm:mb-2 leading-snug">
                      2. 3-Branch Inventory Sync
                    </h4>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
                      Syncs between Ghori St, Gujar Ahata & Madhali Rd. Know exactly how many Litres of milk and Kg of Halwa sold at each branch from your phone.
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2.5 sm:mt-4 sm:pt-3 border-t border-emerald-900/80 text-[10px] sm:text-xs font-bold text-emerald-300 flex items-center gap-1">
                    ✓ Multi-branch transfer receipts
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  whileHover={{ y: -6, borderColor: 'rgba(251, 191, 36, 0.6)' }}
                  className="col-span-2 lg:col-span-1 bg-[#031d10]/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-emerald-500/20 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-3 sm:mb-4 border border-amber-500/30">
                      <Smartphone size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-xs sm:text-base md:text-lg font-black text-white mb-1.5 sm:mb-2 leading-snug">
                      3. Turn Video Ads Into Orders
                    </h4>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
                      Turn paid Facebook video ad viewers directly into WhatsApp order customers in 1 click instead of losing leads.
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2.5 sm:mt-4 sm:pt-3 border-t border-emerald-900/80 text-[10px] sm:text-xs font-bold text-amber-300 flex items-center gap-1">
                    ✓ WhatsApp order checkout
                  </div>
                </motion.div>

              </div>

              {/* Speed & Hardware Compatibility Highlights */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-[#031d10] via-[#052b19] to-[#031d10] p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-500/30 shadow-2xl"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                      Designed Specifically For Pakistani Dairy Outlets
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black text-white">
                      Lightning Fast Touchscreen Counter POS
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Counter staff during morning 7 AM & evening 8 PM rushes have zero time for complicated software. 
                      Our desktop POS features giant one-tap icons for (1L Milk, 2L Milk, 1Kg Dahi, Half Kg Halwa), 
                      instant weighing-scale integration, and Urdu thermal printing.
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-200 pt-2 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span>Works 100% Offline (No Internet Needed)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span>Connects to USB / Bluetooth Thermal Printer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span>Digital Weighing Scale Integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span>Daily Cash Register & Shift Closing Report</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#02180d] p-6 sm:p-8 rounded-3xl border border-amber-500/30 text-center space-y-4 shadow-xl">
                    <h5 className="font-black text-amber-300 text-base">
                      Ready to modernize Haji Raj Din Dairy?
                    </h5>
                    <p className="text-xs text-slate-300">
                      Get the Multi-Branch Website + Desktop POS bundled with complete staff training in Sahiwal.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam!%20Mujhe%20Haji%20Raj%20Din%20Dairy%20k%20lye%20Multi-Branch%20Website%20aur%20Desktop%20POS%20ka%20live%20demo%20chahiye.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full btn-whatsapp-luxury text-xs sm:text-sm py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Request POS Demo on WhatsApp</span>
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}

          {/* TAB 2: INTERACTIVE LIVE POS SIMULATOR */}
          {activeTab === 'simulator' && (
            <motion.div 
              key="simulator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full bg-[#02180d] rounded-3xl p-5 sm:p-8 lg:p-10 border border-amber-500/30 shadow-2xl"
            >
              <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-emerald-800/80 gap-4">
                <div>
                  <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest block">
                    Simulated Desktop POS Screen
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Store size={22} className="text-emerald-400" />
                    Haji Raj Din Dairy Counter Terminal v3.2
                  </h4>
                </div>

                {/* Branch selector */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Active Terminal:</span>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="bg-[#031d10] text-amber-300 font-bold px-3 py-1.5 rounded-xl border border-amber-500/30 text-xs focus:ring-1 focus:ring-amber-500"
                  >
                    {branches.map(b => (
                      <option key={b.id} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Simulated Chiller & Stock Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                
                {/* Buffalo Milk Chiller */}
                <div className="bg-[#031d10] p-4 rounded-2xl border border-emerald-500/30 relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400 font-medium">Buffalo Milk Chiller</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded">
                      4°C Optimum
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {simulatedStock.buffaloMilk} <span className="text-xs text-slate-400 font-normal">Litres</span>
                  </div>
                  <div className="mt-2 text-[11px] text-amber-300 font-semibold">
                    ⏱️ Morning Batch: 4h 15m remaining
                  </div>
                </div>

                {/* Matka Dahi */}
                <div className="bg-[#031d10] p-4 rounded-2xl border border-emerald-500/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400 font-medium">Thick Dahi Counter</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded">
                      Fresh
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {simulatedStock.matkaDahi} <span className="text-xs text-slate-400 font-normal">Kg Available</span>
                  </div>
                  <div className="mt-2 text-[11px] text-emerald-400 font-semibold">
                    ✓ Fresh morning setting
                  </div>
                </div>

                {/* Sohan Halwa Trays */}
                <div className="bg-[#031d10] p-4 rounded-2xl border border-emerald-500/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400 font-medium">Desi Ghee Halwajat</span>
                    <span className="bg-amber-500/20 text-amber-400 text-[10px] font-black px-2 py-0.5 rounded">
                      Ghori St Kitchen
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    {simulatedStock.sohanHalwa} <span className="text-xs text-slate-400 font-normal">Kg Gift Packs</span>
                  </div>
                  <div className="mt-2 text-[11px] text-slate-300 font-semibold">
                    Ready for customer packaging
                  </div>
                </div>

              </div>

              {/* Fast Touch Billing Simulator */}
              <div className="grid lg:grid-cols-12 gap-6">
                
                {/* Left: Quick Tap Sales Counter */}
                <div className="lg:col-span-7 bg-[#031d10] p-5 sm:p-6 rounded-2xl border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-black text-white text-sm">
                      Rush Hour Touch Billing (1-Click)
                    </h5>
                    <span className="text-xs text-slate-400">Simulate customer checkout</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[1, 2, 5, 10].map(ltr => (
                      <motion.button
                        key={ltr}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setNewOrderLitre(ltr)}
                        className={`p-3 rounded-xl border font-bold text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                          newOrderLitre === ltr
                            ? 'btn-gold-luxury border-amber-400 shadow-md'
                            : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-base font-black">{ltr} Litre</span>
                        <span className="text-[10px] opacity-80">Rs. {ltr * 240}</span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="p-3.5 bg-[#02180d] rounded-xl border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Pending Counter Order:</span>
                      <span className="text-sm font-black text-amber-300">
                        {newOrderLitre} Litre Buffalo Milk = Rs. {newOrderLitre * 240}
                      </span>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      onClick={handleSimulatedSale}
                      className="btn-gold-luxury text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                    >
                      <Printer size={15} /> Punch Bill & Print
                    </motion.button>
                  </div>
                </div>

                {/* Right: Thermal Receipt Output */}
                <div className="lg:col-span-5 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl shadow-xl font-mono text-xs space-y-2 border border-slate-200">
                  <div className="text-center border-b border-dashed border-slate-400 pb-2">
                    <div className="font-black text-sm tracking-tight">HAJI RAJ DIN DAIRY MILK</div>
                    <div className="text-[10px] text-slate-600 font-bold">{selectedBranch}</div>
                    <div className="text-[10px] text-slate-600">HOTLINE: 0300-2743860</div>
                  </div>

                  <div className="space-y-1.5 py-2 border-b border-dashed border-slate-400">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Recent Sales:</span>
                      <span>PKR</span>
                    </div>
                    {recentBills.map(b => (
                      <div key={b.id} className="flex justify-between text-[11px] text-slate-700">
                        <span>{b.items}</span>
                        <span className="font-bold">Rs. {b.total}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-center text-[10px] text-slate-500 font-semibold">
                    *** THANK YOU FOR VISITING ***<br />
                    Pure Milk & Sweet Traditions Sahiwal
                  </div>
                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
