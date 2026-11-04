import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { dairyInfo } from '../data/dairyData';

export function NewsletterFarmBanner() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      const url = `https://wa.me/${dairyInfo.phoneRaw}?text=Salam!%20Mera%20number%20${encodeURIComponent(phoneNumber)}%20hai,%20mujhe%20daily%20fresh%20milk%20aur%20rates%20ki%20updates%20bheinjein.`;
      window.open(url, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#0b1e14] text-white pt-16 sm:pt-20 pb-0 overflow-hidden">
      <div className="container mb-12 sm:mb-16">
        
        {/* Top Split Row: Newsletter / Subscription (Exact Agrovia Match) */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pb-12 border-b border-emerald-900/60">
          
          <div className="lg:col-span-6 space-y-2">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Get fresh updates & <br />
              <span className="text-emerald-400 font-serif italic font-normal">daily morning milk delivery</span>
            </h3>
            <p className="urdu-font text-lg text-emerald-200">
              ساہیوال میں روزانہ تازہ دودھ اور دیسی گھی کی خصوصی پیشکش
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your phone or WhatsApp number (0300...)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 bg-white/10 text-white placeholder-slate-400 border border-white/20 rounded-full px-5 py-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <button
                type="submit"
                className="bg-white hover:bg-slate-100 text-[#0b1e14] font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-lg"
              >
                <span>Subscribe on WhatsApp</span>
                <ArrowRight size={15} />
              </button>
            </form>
            {submitted && (
              <p className="text-xs text-emerald-300 mt-2 font-bold flex items-center gap-1">
                <CheckCircle2 size={14} /> Opening WhatsApp to connect your number!
              </p>
            )}
          </div>

        </div>

      </div>

      {/* Panoramic Countryside Farm Photo (Exact Agrovia Match) */}
      <div className="w-full relative h-[260px] sm:h-[380px] md:h-[460px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
          alt="Sahiwal Countryside Dairy Fields and Cattle"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e14] via-transparent to-transparent opacity-80" />
      </div>

    </section>
  );
}
