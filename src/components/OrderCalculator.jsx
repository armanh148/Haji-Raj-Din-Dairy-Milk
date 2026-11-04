import React, { useState } from 'react';
import { dairyInfo, branches } from '../data/dairyData';
import { MessageCircle, ShoppingBag, Plus, Minus, MapPin, Calculator, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const defaultItems = [
  { id: 'milk', name: 'Fresh Buffalo Milk (خالص بھینس کا دودھ)', unit: 'Litre', price: 240, qty: 2 },
  { id: 'dahi', name: 'Thick Matka Dahi (گاڑھا ملائی دار دہی)', unit: 'Kg', price: 260, qty: 1 },
  { id: 'halwa', name: 'Desi Ghee Sohan Halwa (سوہن حلوہ)', unit: 'Kg', price: 1450, qty: 0 },
  { id: 'kheer', name: 'Matka Khoya Kheer (شاہی کھویا کھیر)', unit: 'Bowl', price: 320, qty: 2 },
  { id: 'kulfa', name: 'Shahi Dairy Kulfa (شاہی ڈیری قلفہ)', unit: 'Pcs', price: 150, qty: 0 },
  { id: 'ghee', name: 'Pure Desi Ghee Jar (خالص دیسی گھی)', unit: 'Kg', price: 2400, qty: 0 },
];

export function OrderCalculator() {
  const [items, setItems] = useState(defaultItems);
  const [selectedBranch, setSelectedBranch] = useState(branches[0].name);
  const [orderType, setOrderType] = useState('Home Delivery in Sahiwal');
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  // Update item quantity
  const updateQty = (id, change) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.qty + change);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalItemsCount = items.reduce((sum, item) => sum + item.qty, 0);

  // Generate formatted WhatsApp URL
  const generateWhatsAppMessage = () => {
    const selectedList = items.filter(i => i.qty > 0);

    let msg = `*Assalam-o-Alaikum! Haji Raj Din Dairy Milk Sahiwal* 🥛\n`;
    msg += `Naya Order Details:\n\n`;
    msg += `📍 *Selected Branch:* ${selectedBranch}\n`;
    msg += `📦 *Order Type:* ${orderType}\n`;

    if (customerName) msg += `👤 *Customer Name:* ${customerName}\n`;
    if (phone) msg += `📞 *Customer Phone:* ${phone}\n`;
    if (address && orderType.includes('Delivery')) msg += `🏠 *Delivery Address:* ${address}, Sahiwal\n`;

    msg += `\n*Order Items:*\n`;
    selectedList.forEach((item, index) => {
      msg += `${index + 1}. ${item.name}: ${item.qty} ${item.unit} = Rs. ${(item.qty * item.price).toLocaleString()}\n`;
    });

    msg += `\n💰 *Total Bill:* Rs. ${totalAmount.toLocaleString()}\n`;
    if (specialNote) msg += `📝 *Note:* ${specialNote}\n`;
    msg += `\nBaraye meharbani order confirm karein. Shukriya!`;

    return `https://wa.me/${dairyInfo.phoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center w-full max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3 shadow-2xs">
            <Calculator size={14} className="text-emerald-700" />
            Fast WhatsApp Order Assistant
          </div>
          <h2 
            style={{ whiteSpace: 'nowrap' }} 
            className="urdu-font text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 mb-2 leading-relaxed overflow-visible py-2 block w-full text-center"
          >
            آن لائن واٹس ایپ آرڈر اور بل کیلکولیٹر
          </h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Build Your Fresh Dairy Basket in Seconds
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select your preferred branch in Sahiwal, adjust your required quantities, and send your order directly to our official WhatsApp (<strong>0300-2743860</strong>).
          </p>
        </div>

        <div className="w-full bg-[#fbf9f3] rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/90 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left: Item Selectors */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                <h4 className="font-black text-slate-900 text-base sm:text-xl">
                  Select Products & Quantities
                </h4>
                <span className="text-xs text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full font-black border border-emerald-300">
                  {totalItemsCount} items selected
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                      item.qty > 0 
                        ? 'bg-white border-amber-500/80 shadow-md ring-1 ring-amber-400/30' 
                        : 'bg-white/70 border-slate-200 hover:bg-white'
                    }`}
                  >
                    <div className="space-y-1 pr-2">
                      <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">
                        {item.name}
                      </h5>
                      <p className="text-xs text-emerald-800 font-bold">
                        Rs. {item.price.toLocaleString()} / {item.unit}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm transition-colors"
                        disabled={item.qty === 0}
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-7 text-center font-black text-slate-900 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 rounded-xl bg-[#063821] hover:bg-[#031d10] text-amber-300 flex items-center justify-center font-bold text-sm transition-colors shadow-2xs"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Branch & Delivery Details Box */}
            <div className="lg:col-span-5 xl:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between">
              
              <div className="space-y-4">
                <h4 className="font-black text-slate-900 text-lg border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span>Branch & Checkout</span>
                </h4>

                {/* Choose Branch */}
                <div>
                  <label className="text-xs font-black text-slate-700 block mb-1.5">
                    Select Sahiwal Branch:
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full text-xs font-bold p-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    {branches.map(b => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Order Preference */}
                <div>
                  <label className="text-xs font-black text-slate-700 block mb-1.5">
                    Order Preference:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Home Delivery in Sahiwal', 'Counter Pickup'].map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setOrderType(t)}
                        className={`p-2.5 rounded-xl text-xs font-black text-center border transition-all ${
                          orderType === t
                            ? 'bg-[#063821] text-amber-300 border-[#063821] shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Details */}
                <div className="space-y-2.5 pt-1">
                  <input
                    type="text"
                    placeholder="Your Name (آپ کا نام)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />

                  {orderType.includes('Delivery') && (
                    <input
                      type="text"
                      placeholder="Delivery Address (مثال: فرید ٹاؤن، ساہیوال)"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  )}

                  <input
                    type="text"
                    placeholder="Special Instructions (e.g. Garam Doodh, Kam Meetha)"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Total Calculation & Send Order Button */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Estimated Total:</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-950">
                    Rs. {totalAmount.toLocaleString()}
                  </span>
                </div>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                    totalAmount > 0
                      ? 'btn-whatsapp-luxury cursor-pointer'
                      : 'bg-slate-200 text-slate-400 pointer-events-none'
                  }`}
                >
                  <MessageCircle size={19} />
                  <span>Send Order to 0300-2743860</span>
                </a>

                <p className="text-[11px] text-center text-slate-400 font-medium">
                  Instant confirmation from Haji Raj Din team (6:00 AM - 11:30 PM).
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
