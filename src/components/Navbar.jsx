import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Star, Menu, X, ShoppingCart, Sparkles } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-emerald-100">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-white text-xs sm:text-sm py-1.5 px-3 sm:px-4 border-b border-emerald-800">
        <div className="container flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bg-amber-500 text-emerald-950 font-bold px-2 py-0.5 rounded text-[11px] sm:text-xs flex items-center gap-1">
              <Sparkles size={12} /> 3 Branches in Sahiwal
            </span>
            <span className="hidden md:inline text-emerald-100 text-xs sm:text-sm">
              {dairyInfo.urduSlogan}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <a 
              href={`tel:${dairyInfo.phoneRaw}`} 
              className="flex items-center gap-1 text-emerald-200 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-amber-400" />
              <span className="font-semibold">{dairyInfo.displayPhone}</span>
            </a>
            <span className="text-emerald-700">|</span>
            <a 
              href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam%20Haji%20Raj%20Din%20Dairy!%20Mujhe%20fresh%20milk%20aur%20sweets%20ki%20maloomat%20chahiye.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white font-medium transition-colors"
            >
              <MessageCircle size={13} className="text-emerald-400" />
              <span className="hidden xs:inline">WhatsApp Order</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container py-2.5 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group text-decoration-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="text-xl sm:text-2xl">🥛</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-black text-emerald-950 tracking-tight">
                  Haji Raj Din
                </span>
                <span className="text-[10px] sm:text-xs bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded border border-amber-300">
                  3.8 ★
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                <span className="font-bold text-emerald-800 urdu-font text-xs sm:text-sm">حاجی راج دین ڈیری ملک</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">Sahiwal 57000</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-semibold text-slate-700 text-sm">
            <a href="#branches" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
              <MapPin size={15} className="text-emerald-600" /> 3 Branches
            </a>
            <a href="#products" className="hover:text-emerald-700 transition-colors">
              Fresh Dairy & Halwajat
            </a>
            <a href="#celebrity" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
              <Star size={15} className="text-amber-500 fill-amber-500" /> Ramzan Jani Video
            </a>
            <a href="#pos-pitch" className="text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors">
              💼 POS & Multi-Branch Tech
            </a>
            <a href="#calculator" className="hover:text-emerald-700 transition-colors">
              Order Calculator
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Quick Cart / Order CTA */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 transition-all flex items-center gap-2"
              title="View WhatsApp Cart"
            >
              <ShoppingCart size={19} className="text-emerald-700" />
              <span className="hidden sm:inline font-bold text-xs">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Haji%20Raj%20Din%20Dairy%20Sahiwal%20se%20order%20karna%20chahta%20hoon.`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <MessageCircle size={16} />
              <span>0300-2743860</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-800 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-3 font-semibold text-slate-800 text-sm">
            <a 
              href="#branches" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-emerald-50 flex items-center gap-2"
            >
              <MapPin size={16} className="text-emerald-600" />
              3 Branches in Sahiwal (Madhali Rd, Ghori St, Gujar Ahata)
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-emerald-50"
            >
              🥛 Fresh Milk, Dahi & Desi Ghee Halwajat
            </a>
            <a 
              href="#celebrity" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-emerald-50 flex items-center gap-2"
            >
              <Star size={16} className="text-amber-500 fill-amber-500" />
              Famous Singer Ramzan Jani Video
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-emerald-50"
            >
              📱 Instant WhatsApp Order Builder
            </a>
            <a 
              href="#pos-pitch" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200"
            >
              💼 Multi-Branch Stock & Expiry POS Pitch
            </a>
            <div className="flex gap-2 pt-2">
              <a 
                href={`tel:${dairyInfo.phoneRaw}`}
                className="flex-1 py-2.5 bg-slate-900 text-white rounded-lg text-center font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone size={14} /> Call 0300-2743860
              </a>
              <a 
                href={`https://wa.me/${dairyInfo.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-emerald-600 text-white rounded-lg text-center font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

