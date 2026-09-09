import React, { useState } from 'react';
import { UtensilsCrossed, Star, Check, Sparkles, ZoomIn, X, Flame } from 'lucide-react';
import { MENU_ITEMS, SAUCES_LIST } from '../data/siteData';

export default function MenuShowcase() {
  const [selectedPoster, setSelectedPoster] = useState(false);

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#EBE7DC] text-[#222B1E] border-t border-b border-[#A67C2D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222B1E] text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Handwerkliche Streetfood-Kreationen</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#222B1E]">
            UNSERE <span className="text-[#A67C2D]">LONG FRIES KREATIONEN</span>
          </h2>
          <p className="text-base sm:text-lg text-[#222B1E]/80">
            Jede Portion wird mit 30 cm frisch gepressten Longfries serviert. Knusprig, heiß und mit besten Saucen und Toppings veredelt.
          </p>
        </div>

        {/* 2-Column Showcase: Menu Poster on Left, Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Official Menu Board Poster Feature */}
          <div className="lg:col-span-5 bg-[#222B1E] text-[#F5F2E9] p-5 sm:p-6 rounded-3xl border-2 border-[#A67C2D] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#A67C2D]/30 pb-3">
              <div>
                <span className="text-[11px] font-bold text-[#FEC72E] uppercase tracking-wider block">
                  Original Foodtruck-Aushang
                </span>
                <h3 className="font-bebas text-2xl text-[#F5F2E9]">
                  Offizielle Menükarte
                </h3>
              </div>
              <button
                onClick={() => setSelectedPoster(true)}
                className="inline-flex items-center gap-1.5 bg-[#FEC72E] text-[#222B1E] font-bebas text-sm px-3 py-1.5 rounded-xl font-bold cursor-pointer hover:bg-[#E8B320] transition-colors shadow"
              >
                <ZoomIn className="w-4 h-4" />
                <span>Vergrößern</span>
              </button>
            </div>

            {/* Poster Preview Image with Click to Zoom */}
            <div 
              onClick={() => setSelectedPoster(true)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group border border-[#A67C2D]/40 bg-[#171E14]"
            >
              <img
                src="/images/frycrew-menu-poster.png"
                alt="FryCrew Offizielle Menükarte - Unsere Long Fries"
                className="w-full h-[520px] sm:h-[580px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bebas text-xl backdrop-blur-xs">
                <ZoomIn className="w-6 h-6 text-[#FEC72E]" />
                <span>Klicken zum Vergrößern</span>
              </div>
            </div>

            <div className="text-center text-xs text-[#F5F2E9]/70 pt-1">
              🔍 <em>Tipp:</em> Klicke auf die Menükarte, um alle Details in voller Auflösung zu sehen.
            </div>
          </div>

          {/* Right Column: Interactive Menu Cards */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Creations Cards */}
            {MENU_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F2E9] rounded-2xl p-5 sm:p-6 border-2 border-[#A67C2D]/30 hover:border-[#222B1E] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#222B1E] text-[#FEC72E] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-xs font-script text-[#A67C2D] font-bold text-sm">
                      {item.highlight}
                    </span>
                    <span className="text-[11px] bg-white text-[#222B1E] px-2 py-0.5 rounded font-medium border border-[#A67C2D]/20">
                      30 cm
                    </span>
                  </div>

                  <h3 className="font-bebas text-2xl sm:text-3xl text-[#222B1E] leading-tight group-hover:text-[#A67C2D] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#A67C2D] uppercase tracking-wider">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#222B1E]/80 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Toppings Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.sauces.map((s, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] bg-white px-2 py-0.5 rounded-md border border-[#A67C2D]/20 font-medium text-[#222B1E]"
                      >
                        <Check className="w-3 h-3 text-[#A67C2D]" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price Pill */}
                <div className="sm:self-center shrink-0 text-right sm:border-l sm:border-[#A67C2D]/20 sm:pl-5 pt-2 sm:pt-0">
                  <div className="font-bebas text-3xl sm:text-4xl text-[#222B1E] tracking-tight leading-none text-left sm:text-right">
                    {item.price}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-[#222B1E]/60 tracking-wider">
                    pro Portion
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Dedicated Sauces Bar Section */}
        <div className="bg-[#222B1E] text-[#F5F2E9] rounded-3xl p-6 sm:p-10 border-2 border-[#A67C2D] shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FEC72E]">
              Handgemachte Saucen-Vielfalt
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl text-[#F5F2E9]">
              UNSERE 9 FEINEN SAUCEN
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F2E9]/80">
              Ob cremig, würzig, edel oder feurig – wähle deine Lieblingssaucen zu jeder Portion Longfries:
            </p>
          </div>

          {/* Sauces Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {SAUCES_LIST.map((sauce, idx) => (
              <div
                key={idx}
                className="bg-[#283323] p-3.5 rounded-2xl border border-[#A67C2D]/30 hover:border-[#FEC72E] transition-all text-center space-y-1.5 group hover:-translate-y-0.5"
              >
                <div 
                  className="w-10 h-10 rounded-full mx-auto shadow-inner border-2 border-white/20 group-hover:scale-110 transition-transform flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: sauce.color }}
                >
                  <Sparkles className="w-4 h-4 text-white/90 drop-shadow" />
                </div>
                <div className="font-bebas text-lg text-[#F5F2E9] leading-tight">
                  {sauce.name}
                </div>
                <div className="text-[10px] text-[#FEC72E] font-medium leading-tight">
                  {sauce.flavor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Catering Request Banner */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#A67C2D]/30 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bebas text-2xl sm:text-3xl text-[#222B1E]">
              Eigene Saucen-Kreationen für dein Event?
            </h4>
            <p className="text-sm text-[#222B1E]/80 max-w-xl">
              Ob Firmen-Jubiläum, Hochzeit oder Geburtstag: Wir stellen für dein Event in Hannover gerne dein individuelles Lieblings-Topping-Sortiment zusammen!
            </p>
          </div>
          <a
            href="#booking"
            className="bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-xl px-6 py-3 rounded-xl shrink-0 font-bold transition-all shadow hover:scale-105"
          >
            Jetzt anfragen &rarr;
          </a>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal for Menu Poster */}
      {selectedPoster && (
        <div 
          onClick={() => setSelectedPoster(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full max-h-[95vh] flex flex-col items-center"
          >
            <button
              onClick={() => setSelectedPoster(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#FEC72E] p-1.5 bg-black/50 rounded-full transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src="/images/frycrew-menu-poster.png"
              alt="FryCrew Menükarte Vollansicht"
              className="w-auto h-auto max-h-[90vh] rounded-2xl shadow-2xl border-2 border-[#A67C2D] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
