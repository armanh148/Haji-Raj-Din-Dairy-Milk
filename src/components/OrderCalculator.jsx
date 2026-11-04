import React, { useState, useEffect } from 'react';
import { dairyInfo, branches } from '../data/dairyData';
import { MessageCircle, ShoppingBag, Trash2, Plus, Minus, CheckCircle, MapPin, Calculator, Sparkles } from 'lucide-react';

const defaultItems = [
  { id: 'milk', name: 'Fresh Buffalo Milk (خالص بھینس کا دودھ)', unit: 'Litre', price: 240, qty: 2 },
  { id: 'dahi', name: 'Thick Matka Dahi (گاڑھا ملائی دار دہی)', unit: 'Kg', price: 260, qty: 1 },
  { id: 'halwa', name: 'Desi Ghee Sohan Halwa (سوہن حلوہ)', unit: 'Kg', price: 1450, qty: 0 },
  { id: 'kheer', name: 'Matka Khoya Kheer (شاہی کھویا کھیر)', unit: 'Bowl', price: 320, qty: 2 },
  { id: 'kulfa', name: 'Shahi Dairy Kulfa (شاہی ڈیری قلفہ)', unit: 'Pcs', price: 150, qty: 0 },
  { id: 'ghee', name: 'Pure Desi Ghee Jar (خالص دیسی گھی)', unit: 'Kg', price: 2400, qty: 0 },
];

export function OrderCalculator({ cartItems, onUpdateCart }) {
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
    <section id="calculator" className="py-16 bg-white border-t border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <Calculator size={14} className="text-emerald-600" />
            Fast WhatsApp Order Assistant
          </div>
          <h2 className="urdu-font text-3xl sm:text-4xl font-black text-emerald-950 mb-2">
            آن لائن واٹس ایپ آرڈر اور بل کیلکولیٹر
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Build Your Fresh Dairy Order in Seconds
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select your preferred branch in Sahiwal, adjust your required quantities, and send your order directly to our official WhatsApp (<strong>0300-2743860</strong>).
          </p>
        </div>

        <div className="w-full bg-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left: Item Selectors */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4">
              <h4 className="font-black text-slate-900 text-base sm:text-lg flex items-center justify-between">
                <span>Select Products & Quantities</span>
                <span className="text-xs text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full font-bold">
                  {totalItemsCount} items selected
                </span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      item.qty > 0 
                        ? 'bg-white border-emerald-500 shadow-sm' 
                        : 'bg-white/60 border-slate-200'
                    }`}
                  >
                    <div className="space-y-0.5 pr-2">
                      <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                      <p className="text-xs text-slate-500">
                        Rs. {item.price.toLocaleString()} / {item.unit}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm transition-colors"
                        disabled={item.qty === 0}
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-8 text-center font-black text-slate-900 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center font-bold text-sm transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Branch & Delivery Details */}
            <div className="lg:col-span-5 xl:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              
              <div className="space-y-4">
                <h4 className="font-black text-slate-900 text-base border-b border-slate-100 pb-2">
                  Order & Branch Details
                </h4>

                {/* Choose Branch */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Select Sahiwal Branch:
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    {branches.map(b => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Order Type */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Order Preference:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Home Delivery in Sahiwal', 'Counter Pickup'].map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setOrderType(t)}
                        className={`p-2 rounded-xl text-xs font-bold text-center border transition-all ${
                          orderType === t
                            ? 'bg-emerald-800 text-white border-emerald-800'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Details */}
                <div className="space-y-2 pt-1">
                  <input
                    type="text"
                    placeholder="Your Name (آپ کا نام)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />

                  {orderType.includes('Delivery') && (
                    <input
                      type="text"
                      placeholder="Delivery Address (مثال: فرید ٹاؤن، ساہیوال)"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  )}

                  <input
                    type="text"
                    placeholder="Instructions (e.g. Garam Doodh, Kam Meetha)"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Total Calculation & Send Order Button */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs font-semibold">Estimated Total:</span>
                  <span className="text-2xl font-black text-emerald-950">
                    Rs. {totalAmount.toLocaleString()}
                  </span>
                </div>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                    totalAmount > 0
                      ? 'btn-whatsapp'
                      : 'bg-slate-300 text-slate-500 pointer-events-none'
                  }`}
                >
                  <MessageCircle size={18} />
                  <span>Send Order to WhatsApp (0300 2743860)</span>
                </a>

                <p className="text-[11px] text-center text-slate-400">
                  Instant response from Haji Raj Din Dairy team during 06:00 AM - 11:30 PM.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

