import React, { useState, useEffect } from 'react';
import { celebrityVisit, customerReviews, dairyInfo } from '../data/dairyData';
import { Star, Play, CheckCircle2, ExternalLink, ThumbsUp, Video, Award, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export function CelebritySpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = customerReviews.length;

  // Auto-scroll loop every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  // Helper to get visible review indices in circular loop
  const getVisibleReview = (offset) => {
    return customerReviews[(currentIndex + offset) % totalReviews];
  };

  return (
    <section id="celebrity" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 mb-3 shadow-2xs">
            <Award size={14} className="text-amber-600" />
            Celebrity Endorsement & Sahiwal Trust
          </div>
          <h2 className="urdu-font text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 mb-2 leading-relaxed">
            مشہور گلوکار رمضان جانی کا راج دین ڈیری فارم کا دورہ
          </h2>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Celebrated by Renowned Artists & Cherished by Sahiwal
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            From legendary Pakistani folk artists to thousands of Sahiwal households, Haji Raj Din Dairy is loved for untainted purity and authentic Punjabi taste.
          </p>
        </div>

        {/* Celebrity Featured Cinema Video Card */}
        <div className="bg-gradient-to-br from-[#02180d] via-[#052b19] to-[#01120a] text-white rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 mb-16">
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Left: Video Preview Graphic / Player Style */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full flex items-center justify-center bg-black/40 p-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80"
                alt="Ramzan Jani visit at Haji Raj Din Dairy"
                className="absolute inset-0 w-full h-full object-cover opacity-40 filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02180d] via-[#02180d]/50 to-transparent" />

              {/* Pulsing Play Button & Video Metadata */}
              <div className="relative z-10 text-center space-y-4 max-w-md">
                <a
                  href={celebrityVisit.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-18 h-18 sm:w-22 sm:h-22 rounded-full btn-gold-luxury mx-auto flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all cursor-pointer group"
                >
                  <Play size={30} className="fill-[#031d10] ml-1 group-hover:scale-105 transition-transform" />
                </a>

                <div>
                  <span className="inline-block bg-red-600 text-white text-[10px] sm:text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider mb-2 shadow-sm">
                    Viral Facebook Video
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-white">
                    Famous Singer Ramzan Jani at Raj Din Dairy Farm
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    "Visited Raj Din Dairy Farm & loved the authentic taste of pure milk & sweets!"
                  </p>
                </div>

                <a
                  href={celebrityVisit.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold bg-white/15 hover:bg-white/25 text-white px-4 py-2.5 rounded-xl backdrop-blur-md transition-all border border-white/20"
                >
                  <Video size={14} className="text-amber-400" /> Watch Full Video on Facebook <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right: Celebrity Quote & Official Details */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-400/20 text-amber-300 text-xs font-black px-3.5 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                    <Sparkles size={12} /> VIP Celebrity Review
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-2xl sm:text-3xl font-black text-white">
                    {celebrityVisit.celebrityName}
                  </h4>
                  <p className="text-xs text-amber-300/90 font-bold uppercase tracking-wider">
                    {celebrityVisit.celebrityRole}
                  </p>
                </div>

                {/* Urdu Quote with Calligraphy Styling */}
                <blockquote className="bg-[#031d10]/80 p-4 sm:p-5 rounded-2xl border-r-4 border-amber-400 text-right shadow-inner">
                  <p className="urdu-font text-base sm:text-xl text-amber-200 leading-relaxed font-bold">
                    "{celebrityVisit.urduComment}"
                  </p>
                </blockquote>

                {/* English translation */}
                <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed">
                  "{celebrityVisit.comment}"
                </p>
              </div>

              {/* Social proofs & Official Facebook Page Link */}
              <div className="pt-4 border-t border-emerald-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="bg-[#031d10] px-3.5 py-1.5 rounded-xl border border-amber-500/30">
                    <span className="text-slate-300 block text-[10px]">Local Rating</span>
                    <span className="font-black text-amber-400 text-sm">3.8 ★ (38+ Reviews)</span>
                  </div>
                  <div className="bg-[#031d10] px-3.5 py-1.5 rounded-xl border border-amber-500/30">
                    <span className="text-slate-300 block text-[10px]">Official Presence</span>
                    <span className="font-bold text-white text-xs">Facebook & Yandex</span>
                  </div>
                </div>

                <a
                  href={dairyInfo.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <ThumbsUp size={14} /> Facebook Page
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* Customer Reviews Auto-Looping Carousel (6 Verified Reviews) */}
        {/* ======================================================== */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Section Sub-header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                  Verified Customer Feedback ({totalReviews} Reviews in Loop)
                </h4>
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                  Auto-Loop Active
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Real feedback from Sahiwal residents across Madhali Rd, Ghori St & Gujar Ahata branches
              </p>
            </div>

            {/* Carousel Navigation Arrows & Yandex link */}
            <div className="flex items-center gap-2.5">
              <a 
                href={dairyInfo.yandexUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex text-xs font-bold text-emerald-700 hover:underline items-center gap-1 mr-2"
              >
                View on Yandex <ExternalLink size={12} />
              </a>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#063821] hover:text-amber-300 text-slate-700 flex items-center justify-center transition-all shadow-md border border-slate-200"
                title="Previous Review"
              >
                <ChevronLeft size={19} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#063821] hover:text-amber-300 text-slate-700 flex items-center justify-center transition-all shadow-md border border-slate-200"
                title="Next Review"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          {/* Cards Display with Responsive Loop Slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[0, 1, 2].map((slotOffset) => {
              const review = getVisibleReview(slotOffset);
              const isHiddenOnTablet = slotOffset === 2 ? 'hidden lg:flex' : 'flex';
              const isHiddenOnMobile = slotOffset === 1 ? 'hidden md:flex' : '';

              return (
                <div
                  key={`${review.id}-${currentIndex}-${slotOffset}`}
                  className={`${isHiddenOnTablet} ${isHiddenOnMobile} bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex-col justify-between hover:border-amber-400 group relative`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-bold">{review.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div>
                      <span className="font-black text-sm text-slate-900 block">{review.name}</span>
                      <span className="text-[11px] text-emerald-800 font-bold">{review.branch}</span>
                    </div>
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {customerReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full ${
                  currentIndex === idx
                    ? 'w-7 h-2.5 bg-[#063821]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
            Auto-sliding every 3 seconds • Hover or touch to pause
          </p>

        </div>

      </div>
    </section>
  );
}
