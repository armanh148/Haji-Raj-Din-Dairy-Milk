import React, { useState } from 'react';
import { Monitor, AlertTriangle, RefreshCw, BarChart3, Database, ShieldAlert, CheckCircle2, ArrowRight, Printer, Sparkles, Smartphone, Store } from 'lucide-react';
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
    <section id="pos-pitch" className="py-16 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
      
      {/* Decorative tech grid backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-emerald-950 mb-3 shadow-md">
            <Sparkles size={14} className="fill-emerald-950" />
            Special Pitch for Haji Raj Din Management
          </div>
          <h2 className="urdu-font text-3xl sm:text-4xl font-black text-amber-300 mb-2">
            ملٹی برانچ ویب سائٹ اور ڈیسک ٹاپ سٹاک ایکسپائری پی او ایس سسٹم
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Scale Haji Raj Din Dairy with Modern Multi-Branch Tech
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            You are spending on paid Facebook video ads and expanding to 3 Sahiwal branches. 
            Now unlock <strong>100% stock control</strong>, prevent milk spoilage, and streamline morning/evening rush billing with a dedicated Desktop POS.
          </p>
        </div>

        {/* Tab Switcher - Mobile / Tablet / Laptop Responsive */}
        <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'features'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <Monitor size={16} /> Why Haji Raj Din Needs This
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'simulator'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/50 font-black'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <Store size={16} /> Live Interactive POS Simulator
          </button>
        </div>

        {/* TAB 1: FEATURES & VALUE PROPOSITION */}
        {activeTab === 'features' && (
          <div className="space-y-8 sm:space-y-12">
            {/* The 3 Core Pain Points Solved - 2 Per Row on Mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
              
              {/* Card 1 */}
              <div className="bg-slate-800/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 border border-slate-700 hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-2.5 sm:mb-4 border border-red-500/30">
                    <AlertTriangle size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-xs sm:text-base md:text-lg font-black text-white mb-1.5 sm:mb-2 leading-snug">
                    1. Zero Milk Wastage (Expiry)
                  </h4>
                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
                    Tracks morning vs evening batches in chiller tanks. Triggers visual alerts 4 hours before turning sour so it can be converted into Khoya or Desi Ghee.
                  </p>
                </div>
                <div className="mt-3 pt-2 sm:mt-4 sm:pt-3 border-t border-slate-700/60 text-[10px] sm:text-xs font-bold text-amber-300 flex items-center gap-1">
                  ✓ Batch logs & chiller alerts
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 border border-slate-700 hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5 sm:mb-4 border border-emerald-500/30">
                    <Database size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-xs sm:text-base md:text-lg font-black text-white mb-1.5 sm:mb-2 leading-snug">
                    2. 3-Branch Inventory Sync
                  </h4>
                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
                    Syncs between Ghori St, Gujar Ahata & Madhali Rd. Know exactly how many Litres of milk and Kg of Halwa sold at each branch from your phone.
                  </p>
                </div>
                <div className="mt-3 pt-2 sm:mt-4 sm:pt-3 border-t border-slate-700/60 text-[10px] sm:text-xs font-bold text-emerald-300 flex items-center gap-1">
                  ✓ Multi-branch transfer receipts
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-span-2 lg:col-span-1 bg-slate-800/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 border border-slate-700 hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2.5 sm:mb-4 border border-amber-500/30">
                    <Smartphone size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-xs sm:text-base md:text-lg font-black text-white mb-1.5 sm:mb-2 leading-snug">
                    3. Turn Video Ads Into Orders
                  </h4>
                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
                    Turn paid Facebook video ad viewers directly into WhatsApp order customers in 1 click instead of losing leads.
                  </p>
                </div>
                <div className="mt-3 pt-2 sm:mt-4 sm:pt-3 border-t border-slate-700/60 text-[10px] sm:text-xs font-bold text-amber-300 flex items-center gap-1">
                  ✓ WhatsApp order checkout
                </div>
              </div>

            </div>

            {/* Speed & Hardware Compatibility Highlights */}
            <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 p-6 sm:p-8 rounded-3xl border border-emerald-800">
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

                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
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

                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                  <h5 className="font-bold text-amber-300 text-sm">
                    Ready to modernize Haji Raj Din Dairy?
                  </h5>
                  <p className="text-xs text-slate-400">
                    Get the Multi-Branch Website + Desktop POS bundled with complete staff training in Sahiwal.
                  </p>
                  <a
                    href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam!%20Mujhe%20Haji%20Raj%20Din%20Dairy%20k%20lye%20Multi-Branch%20Website%20aur%20Desktop%20POS%20ka%20live%20demo%20chahiye.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full btn-whatsapp text-xs sm:text-sm py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    <span>Request POS Demo on WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE LIVE POS SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="w-full bg-slate-950 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 border border-emerald-800 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Simulated Desktop POS Screen
                </span>
                <h4 className="text-xl font-black text-white flex items-center gap-2">
                  <Store size={20} className="text-emerald-400" />
                  Haji Raj Din Dairy Counter Terminal v3.2
                </h4>
              </div>

              {/* Branch selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Active Terminal:</span>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="bg-slate-900 text-white font-bold px-3 py-1.5 rounded-lg border border-slate-700 text-xs focus:ring-1 focus:ring-emerald-500"
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
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 relative">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-400">Buffalo Milk Chiller</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded">
                    4°C Optimum
                  </span>
                </div>
                <div className="text-2xl font-black text-white">
                  {simulatedStock.buffaloMilk} <span className="text-xs text-slate-400 font-normal">Litres</span>
                </div>
                <div className="mt-2 text-[11px] text-amber-300 flex items-center gap-1">
                  <Clock size={12} /> Morning Batch: 4h 15m remaining
                </div>
              </div>

              {/* Matka Dahi */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-400">Thick Dahi Counter</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded">
                    Fresh
                  </span>
                </div>
                <div className="text-2xl font-black text-white">
                  {simulatedStock.matkaDahi} <span className="text-xs text-slate-400 font-normal">Kg Available</span>
                </div>
                <div className="mt-2 text-[11px] text-emerald-400">
                  ✓ Fresh morning setting
                </div>
              </div>

              {/* Sohan Halwa Trays */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-400">Desi Ghee Halwajat</span>
                  <span className="bg-amber-500/20 text-amber-400 text-[10px] font-black px-2 py-0.5 rounded">
                    Ghori St Kitchen
                  </span>
                </div>
                <div className="text-2xl font-black text-white">
                  {simulatedStock.sohanHalwa} <span className="text-xs text-slate-400 font-normal">Kg Gift Packs</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-300">
                  Ready for customer packaging
                </div>
              </div>

            </div>

            {/* Fast Touch Billing Simulator */}
            <div className="grid lg:grid-cols-12 gap-6">
              
              {/* Left: Quick Tap Sales Counter */}
              <div className="lg:col-span-7 bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-white text-sm">
                    Rush Hour Touch Billing (1-Click)
                  </h5>
                  <span className="text-xs text-slate-400">Simulate customer checkout</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[1, 2, 5, 10].map(ltr => (
                    <button
                      key={ltr}
                      onClick={() => setNewOrderLitre(ltr)}
                      className={`p-3 rounded-xl border font-bold text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                        newOrderLitre === ltr
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750'
                      }`}
                    >
                      <span className="text-base font-black">{ltr} Litre</span>
                      <span className="text-[10px] opacity-75">Rs. {ltr * 240}</span>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Pending Counter Order:</span>
                    <span className="text-sm font-black text-amber-300">
                      {newOrderLitre} Litre Buffalo Milk = Rs. {newOrderLitre * 240}
                    </span>
                  </div>

                  <button
                    onClick={handleSimulatedSale}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                  >
                    <Printer size={14} /> Punch Bill & Print
                  </button>
                </div>
              </div>

              {/* Right: Thermal Receipt Output */}
              <div className="lg:col-span-5 bg-white text-slate-900 p-4 rounded-xl shadow-inner font-mono text-xs space-y-2">
                <div className="text-center border-b border-dashed border-slate-300 pb-2">
                  <div className="font-black text-sm">HAJI RAJ DIN DAIRY MILK</div>
                  <div className="text-[10px] text-slate-500">{selectedBranch}</div>
                  <div className="text-[10px] text-slate-500">HOTLINE: 0300-2743860</div>
                </div>

                <div className="space-y-1 py-1 border-b border-dashed border-slate-300">
                  <div className="flex justify-between font-bold">
                    <span>Recent Sales:</span>
                    <span>PKR</span>
                  </div>
                  {recentBills.map(b => (
                    <div key={b.id} className="flex justify-between text-[11px]">
                      <span>{b.items}</span>
                      <span>Rs. {b.total}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1 text-center text-[10px] text-slate-400">
                  *** THANK YOU FOR VISITING ***<br />
                  Pure Milk & Sweet Traditions
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

function Clock({ size, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 16} height={size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

