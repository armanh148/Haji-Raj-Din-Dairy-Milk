import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, MapPin, ShoppingBag } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [selectedBranch, setSelectedBranch] = useState(branches[0].name);
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppSend = () => {
    let msg = `*Assalam-o-Alaikum! Haji Raj Din Dairy Milk Sahiwal* 🥛\n`;
    msg += `Website Cart Order:\n\n`;
    msg += `📍 *Branch:* ${selectedBranch}\n`;
    if (customerName) msg += `👤 *Customer Name:* ${customerName}\n`;
    if (address) msg += `🏠 *Address:* ${address}, Sahiwal\n`;

    msg += `\n*Selected Items:*\n`;
    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} (${item.urduName}): ${item.quantity}x @ Rs. ${item.price} = Rs. ${(item.quantity * item.price).toLocaleString()}\n`;
    });

    msg += `\n💰 *Total Amount:* Rs. ${totalAmount.toLocaleString()}\n`;
    msg += `Baraye meharbani confirmation send farmayein. Shukriya!`;

    const url = `https://wa.me/${dairyInfo.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-full sm:max-w-md bg-white min-h-screen shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-500/20 flex items-center justify-between bg-[#031d10] text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-amber-400" />
            <h3 className="font-black text-base">Your Dairy Order Basket</h3>
            <span className="btn-gold-luxury text-slate-950 text-xs px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <span className="text-5xl block">🥛</span>
              <p className="text-base font-bold text-slate-700">Your basket is currently empty.</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Explore our fresh buffalo milk, thick matka dahi, and pure desi ghee halwa above and click "Add".
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="p-3 rounded-2xl border border-slate-200/90 bg-[#faf8f2] flex items-center justify-between gap-3 shadow-2xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">
                      {item.name}
                    </h5>
                    <p className="urdu-font text-amber-700 text-xs font-bold truncate leading-tight">
                      {item.urduName}
                    </p>
                    <p className="text-xs text-emerald-800 font-bold">
                      Rs. {item.price.toLocaleString()} {item.unit ? `(${item.unit})` : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-bold text-xs hover:bg-slate-100"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center font-black text-xs text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-7 h-7 rounded-lg bg-[#063821] text-amber-300 flex items-center justify-center font-bold text-xs hover:bg-[#031d10]"
                    >
                      <Plus size={12} />
                    </button>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="w-7 h-7 ml-1 rounded-lg text-red-500 hover:bg-red-50 flex items-center justify-center"
                      title="Remove"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Branch & Contact Info */}
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <div>
                  <label className="text-xs font-black text-slate-700 block mb-1">
                    Select Sahiwal Branch:
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white"
                  >
                    {branches.map(b => (
                      <option key={b.id} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Your Name (آپ کا نام)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
                />

                <input
                  type="text"
                  placeholder="Address in Sahiwal (Optional for Delivery)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer / Send */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-[#faf8f2] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Order Subtotal:</span>
              <span className="text-2xl font-black text-emerald-950">
                Rs. {totalAmount.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleWhatsAppSend}
              className="w-full btn-whatsapp-luxury py-3.5 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl"
            >
              <MessageCircle size={18} />
              <span>Send Order to 0300-2743860</span>
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-xs text-slate-400 hover:text-red-500 font-bold text-center"
            >
              Clear Basket
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
