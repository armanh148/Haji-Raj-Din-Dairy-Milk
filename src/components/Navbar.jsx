import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Star, Menu, X, ShoppingCart, Sparkles, ChevronRight, Award } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#06331d]/95 backdrop-blur-md text-white border-b border-amber-500/20 shadow-lg">
      {/* Top Banner Ribbon */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-xs font-bold py-1.5 px-3 sm:px-6">
        <div className="container flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-950 text-amber-300 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Sparkles size={11} className="fill-amber-300" /> 3 Branches in Sahiwal
            </span>
            <span className="hidden sm:inline font-semibold text-slate-950 text-xs">
              {dairyInfo.urduSlogan}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a 
              href={`tel:${dairyInfo.phoneRaw}`} 
              className="flex items-center gap-1 font-extrabold hover:text-emerald-950 transition-colors"
            >
              <Phone size={12} className="text-emerald-950" />
              <span>{dairyInfo.displayPhone}</span>
            </a>
            <span className="text-amber-800 font-bold">•</span>
            <a 
              href={`https://wa.me/${dairyInfo.phoneRaw}?text=Salam%20Haji%20Raj%20Din%20Dairy!%20Mujhe%20fresh%20milk%20aur%20sweets%20ki%20maloomat%20chahiye.`}
              target="_blank"
              rel="noreferrer"
              className="hidden xs:inline-flex items-center gap-1 bg-emerald-950/15 hover:bg-emerald-950/30 px-2 py-0.5 rounded-md font-bold transition-colors"
            >
              <MessageCircle size={12} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="container py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Royal Brand Logo */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none flex-shrink-0">
            <div className="relative">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-md shadow-amber-900/30 group-hover:rotate-3 transition-transform">
                <div className="w-full h-full bg-[#031d10] rounded-[14px] flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl filter drop-shadow">🥛</span>
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-3 h-3 rounded-full border-2 border-[#06331d]" title="Branches Active Now" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none group-hover:text-amber-300 transition-colors">
                  Haji Raj Din
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-black px-1.5 py-0.5 rounded border border-amber-400/30">
                  3.8 ★
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs mt-1">
                <span className="font-bold text-amber-300 urdu-font text-sm leading-none">حاجی راج دین ڈیری ملک</span>
                <span className="text-emerald-400/60">•</span>
                <span className="text-emerald-200/80 text-[11px] font-medium">Sahiwal 57000</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-semibold text-sm">
            <a href="#branches" className="text-emerald-100 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <MapPin size={15} className="text-amber-400" /> 3 Branches
            </a>
            <a href="#products" className="text-emerald-100 hover:text-amber-300 transition-colors">
              Fresh Milk & Halwajat
            </a>
            <a href="#celebrity" className="text-emerald-100 hover:text-amber-300 transition-colors flex items-center gap-1">
              <Star size={15} className="text-amber-400 fill-amber-400" /> Ramzan Jani Video
            </a>
            <a href="#calculator" className="text-emerald-100 hover:text-amber-300 transition-colors">
              WhatsApp Order
            </a>
            <a 
              href="#pos-pitch" 
              className="bg-amber-400/15 text-amber-300 hover:bg-amber-400/25 px-3 py-1.5 rounded-full border border-amber-400/30 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Sparkles size={13} className="text-amber-400" />
              <span>Multi-Branch POS Tech</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* View Cart Pill */}
            <button
              onClick={onOpenCart}
              className="relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all flex items-center gap-2 group"
              title="View WhatsApp Cart"
            >
              <ShoppingCart size={18} className="text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-bold text-xs">Cart</span>
              {cartCount > 0 ? (
                <span className="bg-amber-400 text-slate-950 text-xs font-black px-1.5 py-0.5 rounded-full animate-bounce">
                  {cartCount}
                </span>
              ) : (
                <span className="text-emerald-300/70 text-xs font-medium hidden sm:inline">0</span>
              )}
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Haji%20Raj%20Din%20Dairy%20Sahiwal%20se%20order%20karna%20chahta%20hoon.`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 btn-whatsapp-luxury px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm"
            >
              <MessageCircle size={17} />
              <span>0300-2743860</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 text-emerald-200 hover:text-white hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with High Polish */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-emerald-800/80 space-y-2 text-sm font-semibold animate-fadeIn">
            <a 
              href="#branches" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 flex items-center justify-between text-emerald-100"
            >
              <span className="flex items-center gap-2.5">
                <MapPin size={17} className="text-amber-400" />
                <span>Our 3 Branches (Madhali Rd, Ghori St, Gujar Ahata)</span>
              </span>
              <ChevronRight size={16} className="text-emerald-400" />
            </a>

            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 flex items-center justify-between text-emerald-100"
            >
              <span className="flex items-center gap-2.5">
                <span>🥛</span>
                <span>Fresh Milk, Dahi & Desi Ghee Halwajat</span>
              </span>
              <ChevronRight size={16} className="text-emerald-400" />
            </a>

            <a 
              href="#celebrity" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 flex items-center justify-between text-emerald-100"
            >
              <span className="flex items-center gap-2.5">
                <Star size={17} className="text-amber-400 fill-amber-400" />
                <span>Ramzan Jani Video & 6 Customer Reviews</span>
              </span>
              <ChevronRight size={16} className="text-emerald-400" />
            </a>

            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 flex items-center justify-between text-emerald-100"
            >
              <span className="flex items-center gap-2.5">
                <span>📱</span>
                <span>Instant WhatsApp Order Builder</span>
              </span>
              <ChevronRight size={16} className="text-emerald-400" />
            </a>

            <a 
              href="#pos-pitch" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-between text-amber-300"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles size={17} className="text-amber-400" />
                <span>Multi-Branch Stock & Expiry POS Pitch</span>
              </span>
              <ChevronRight size={16} className="text-amber-400" />
            </a>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a 
                href={`tel:${dairyInfo.phoneRaw}`}
                className="py-3 px-3 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15"
              >
                <Phone size={14} className="text-amber-400" /> 0300-2743860
              </a>
              <a 
                href={`https://wa.me/${dairyInfo.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-xl btn-whatsapp-luxury font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
