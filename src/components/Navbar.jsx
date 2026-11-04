import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Star, Menu, X, ShoppingCart } from 'lucide-react';
import { dairyInfo, branches } from '../data/dairyData';

export function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b1e14] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-6 border-b border-emerald-900/60">
        <div className="container flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-bold text-amber-300">🌟 3rd Outlet Now Open:</span>
            <span className="text-slate-200 hidden sm:inline">Madhali Road Outlet (Near Bypass Chowk, Sahiwal)</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 text-slate-300 font-semibold text-[11px]">
            <a href={`tel:${dairyInfo.phoneRaw}`} className="hover:text-amber-300 flex items-center gap-1 transition-colors">
              <Phone size={12} className="text-emerald-400" />
              <span>0300-2743860</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-emerald-300 font-bold">100% Pure Natural Dairy</span>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container py-3.5">
          <div className="flex items-center justify-between gap-4">
          
          {/* Logo Matching Agrovia Clean Typography */}
          <a href="#" className="flex items-center gap-2.5 group text-decoration-none">
            <div className="w-10 h-10 rounded-full bg-[#0b1e14] text-white flex items-center justify-center font-black text-xl shadow-sm">
              🥛
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-[#0a192f] tracking-tight uppercase">
                Haji Raj Din
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Sahiwal 57000
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-extrabold text-xs uppercase tracking-wider text-slate-600">
            <a href="#hero" className="hover:text-emerald-800 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-emerald-800 transition-colors">
              Our Farm
            </a>
            <a href="#products" className="hover:text-emerald-800 transition-colors">
              Products
            </a>
            <a href="#branches" className="hover:text-emerald-800 transition-colors flex items-center gap-1">
              <MapPin size={13} className="text-emerald-700" /> 3 Branches
            </a>
            <a href="#celebrity" className="hover:text-emerald-800 transition-colors">
              Feedback
            </a>
            <a href="#pos-pitch" className="hover:text-emerald-800 transition-colors">
              POS System
            </a>
          </nav>

          {/* Right Action: Clean Dark Pill Button + Cart */}
          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              title="View Cart"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-700 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Desktop Order Now Button - Strictly hidden on mobile and tablet */}
            <div className="hidden lg:block">
              <a
                href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Haji%20Raj%20Din%20Dairy%20Sahiwal%20se%20order%20karna%20chahta%20hoon.`}
                target="_blank"
                rel="noreferrer"
                className="btn-agrovia-dark text-xs uppercase tracking-wider px-5 py-2.5"
              >
                <MessageCircle size={15} />
                <span>Order Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2.5 font-bold text-sm text-slate-800">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Our Farm & Heritage</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Pure Dairy Products</a>
            <a href="#branches" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">3 Sahiwal Branches</a>
            <a href="#celebrity" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Client Reviews & Ramzan Jani Video</a>
            <a href="#pos-pitch" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">Multi-Branch POS Tech</a>
            
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              {/* Order Now button prominently inside mobile nav menu */}
              <a 
                href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Haji%20Raj%20Din%20Dairy%20Sahiwal%20se%20order%20karna%20chahta%20hoon.`} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 rounded-full btn-agrovia-dark text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={16} /> Order Now on WhatsApp
              </a>

              <div className="flex gap-2">
                <a 
                  href={`tel:${dairyInfo.phoneRaw}`} 
                  className="flex-1 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone size={14} /> Call 0300-2743860
                </a>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
                  className="flex-1 py-2.5 rounded-full bg-emerald-50 text-emerald-900 font-bold text-xs text-center flex items-center justify-center gap-1.5 border border-emerald-200"
                >
                  <ShoppingCart size={14} /> View Cart ({cartCount})
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}
