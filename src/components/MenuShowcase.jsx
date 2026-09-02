import React, { useState } from 'react';
import { UtensilsCrossed, Star, Check, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/siteData';

export default function MenuShowcase() {
  const [filter, setFilter] = useState('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'veg') return item.tags.some((t) => t.toLowerCase().includes('vegetarisch'));
    if (filter === 'sweet') return item.tags.some((t) => t.toLowerCase().includes('süß'));
    if (filter === 'highlight') return item.badge.includes('Favorit') || item.badge.includes('Bestseller');
    return true;
  });

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#EBE7DC] text-[#222B1E] border-t border-b border-[#A67C2D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222B1E] text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Kreative Toppings & Saucen</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#222B1E]">
            UNSERE <span className="text-[#A67C2D]">FRYCREW KREATIONEN</span>
          </h2>
          <p className="text-base sm:text-lg text-[#222B1E]/80">
            Jede Portion wird mit 30 cm frisch gebackenen Longfries serviert. Wähle deinen Favoriten oder stelle für dein Catering ein individuelles Menü zusammen.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Alle Sorten' },
              { id: 'highlight', label: '⭐ Bestseller & Favoriten' },
              { id: 'veg', label: '🌱 Vegetarisch' },
              { id: 'sweet', label: '🍨 Süßes Dessert' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  filter === btn.id
                    ? 'bg-[#222B1E] text-[#FEC72E] shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#222B1E] border border-[#A67C2D]/30'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F2E9] rounded-2xl p-6 border-2 border-[#A67C2D]/30 hover:border-[#FEC72E] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Badge & Highlight */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-[#222B1E] text-[#FEC72E] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-xs font-script text-[#A67C2D] font-bold text-base">
                    {item.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bebas text-3xl text-[#222B1E] leading-tight group-hover:text-[#A67C2D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[#A67C2D] mb-3">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#222B1E]/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Saucen & Toppings List */}
                <div className="space-y-1.5 pt-2 border-t border-[#A67C2D]/20">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#222B1E]/60">
                    Toppings & Finish:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.sauces.map((sauce, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs bg-white px-2.5 py-1 rounded-md border border-[#A67C2D]/20 font-medium text-[#222B1E]"
                      >
                        <Check className="w-3 h-3 text-[#A67C2D]" />
                        {sauce}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tags */}
              <div className="mt-6 pt-3 border-t border-[#A67C2D]/20 flex items-center justify-between text-xs text-[#222B1E]/70">
                <div className="flex items-center gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-[#222B1E]/5 px-2 py-0.5 rounded text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-bebas text-lg text-[#222B1E]">30 cm</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Catering Request Banner */}
        <div className="mt-12 bg-[#222B1E] text-[#F5F2E9] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#A67C2D]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bebas text-2xl sm:text-3xl text-[#FEC72E]">
              Eigene Saucen-Kreationen für dein Event?
            </h4>
            <p className="text-sm text-[#F5F2E9]/80 max-w-xl">
              Ob Firmen-Farben, spezielle vegetarische/vegane Menüs oder individuelle Topping-Bars: Wir passen unsere Speisekarte flexibel an deine Veranstaltung in Hannover an!
            </p>
          </div>
          <a
            href="#booking"
            className="bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-xl px-6 py-2.5 rounded-xl shrink-0 font-bold transition-all shadow hover:scale-105"
          >
            Jetzt anfragen &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
