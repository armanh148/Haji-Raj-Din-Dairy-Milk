import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { celebrityVisit, customerReviews, dairyInfo } from '../data/dairyData';
import { Star, Play, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export function CelebritySpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = customerReviews.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const getVisibleReview = (offset) => {
    return customerReviews[(currentIndex + offset) % totalReviews];
  };

  return (
    <section id="celebrity" className="py-16 sm:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container">
        
        {/* Section Header Matching Agrovia Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 mb-3">
            <Star size={13} className="fill-amber-400 text-amber-500" />
            <span>3.8 ★ (38+ Verified Reviews) • Sahiwal Tradition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight">
            Trusted by Sahiwal Families & Artists
          </h2>
          <p 
            style={{ whiteSpace: 'nowrap' }} 
            className="urdu-font text-base sm:text-xl md:text-2xl font-black text-emerald-950 my-2 py-1 block w-full text-center"
          >
            گاہکوں کا اٹوٹ اعتماد اور ساہیوال کی مستند پہچان
          </p>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Authentic customer experiences from daily fresh milk pickups and pure desi ghee halwa gift boxes across our 3 branches.
          </p>
        </motion.div>

        {/* 3 Clean Client Feedback Cards (Exact Agrovia Match with Auto-Loop) */}
        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((slotOffset) => {
              const review = getVisibleReview(slotOffset);
              const isHiddenOnTablet = slotOffset === 2 ? 'hidden lg:flex' : 'flex';
              const isHiddenOnMobile = slotOffset === 1 ? 'hidden md:flex' : '';

              return (
                <motion.div
                  key={`${review.id}-${currentIndex}-${slotOffset}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: slotOffset * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08)" }}
                  className={`${isHiddenOnTablet} ${isHiddenOnMobile} bg-white p-7 rounded-3xl border border-slate-200 shadow-xs transition-all duration-300 flex-col justify-between`}
                >
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400" />
                      ))}
                    </div>

                    {/* Satisfaction score badge (matching Agrovia card top) */}
                    <div className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>100% Customer Satisfaction</span>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Customer author footer */}
                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0b1e14] text-white flex items-center justify-center font-black text-xs shadow-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs sm:text-sm text-[#0a192f] leading-snug">
                        {review.name}
                      </h4>
                      <span className="text-[11px] text-emerald-800 font-bold block">
                        {review.branch}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0b1e14] hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-2xs"
              title="Previous"
            >
              <ChevronLeft size={18} />
            </motion.button>
            
            <div className="flex items-center gap-1.5">
              {customerReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all rounded-full ${
                    currentIndex === idx ? 'w-6 h-2 bg-[#0b1e14]' : 'w-2 h-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0b1e14] hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-2xs"
              title="Next"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Famous Singer Ramzan Jani Video Feature Card with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#faf9f6] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video bg-black shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80"
                alt="Singer Ramzan Jani visit"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <a
                href={celebrityVisit.videoLink}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Rippling Pulse Behind Play Button */}
                <span className="absolute w-20 h-20 rounded-full bg-white/30 animate-ping" />
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl relative z-10"
                >
                  <Play size={24} className="fill-slate-900 ml-1 text-slate-900" />
                </motion.div>
              </a>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                <span>VIP Celebrity Endorsement</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0a192f]">
                {celebrityVisit.celebrityName} — {celebrityVisit.celebrityRole}
              </h3>

              <blockquote className="border-l-4 border-emerald-700 pl-4 py-1">
                <p className="urdu-font text-base sm:text-lg text-emerald-950 font-bold leading-relaxed">
                  "{celebrityVisit.urduComment}"
                </p>
                <p className="text-slate-600 text-xs sm:text-sm italic mt-1">
                  "{celebrityVisit.comment}"
                </p>
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={celebrityVisit.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-agrovia-dark text-xs uppercase tracking-wider px-5 py-2.5 shadow-md"
                >
                  <span>Watch Facebook Video</span>
                  <Play size={13} className="fill-white" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={`https://wa.me/${dairyInfo.phoneRaw}?text=Assalam-o-Alaikum!%20Ramzan%20Jani%20wala%20doodh%20aur%20sohan%20halwa%20order%20karna%20hai.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-luxury text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Order Same Quality</span>
                </motion.a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
