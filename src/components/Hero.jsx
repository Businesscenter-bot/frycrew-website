import React from 'react';
import { Calendar, ArrowRight, Sparkles, MapPin, Award, Heart } from 'lucide-react';
import FryCrewLogo from './FryCrewLogo';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative bg-[#222B1E] text-[#F5F2E9] overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#A67C2D]/30">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FEC72E] blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#A67C2D] blur-3xl"></div>
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: `radial-gradient(#FEC72E 1px, transparent 1px)`, 
            backgroundSize: '32px 32px' 
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Statements */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2D3928] border border-[#A67C2D]/50 text-[#FEC72E] text-xs font-semibold tracking-wider uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Der mobile Foodtruck in Hannover</span>
              <span className="text-[#F5F2E9]/60">·</span>
              <span className="text-[#F5F2E9]">Est. 2026</span>
            </div>

            {/* Main Headline (CI Bebas Neue) */}
            <div className="space-y-1">
              <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-[#F5F2E9]">
                EXTREM LANG. <br />
                <span className="text-[#FEC72E] drop-shadow-sm">EXTREM LECKER.</span>
              </h1>
              <p className="font-script text-2xl sm:text-3xl text-[#FEC72E]/90 pt-1">
                „So lang, dass Teilen plötzlich schwerfällt.“
              </p>
            </div>

            {/* Subparagraph */}
            <p className="text-base sm:text-lg text-[#F5F2E9]/85 max-w-2xl leading-relaxed font-light">
              Willkommen bei der <strong className="text-[#F5F2E9] font-semibold">FryCrew</strong>! Wir bringen die spektakulärsten <span className="text-[#FEC72E] font-bold">30 cm langen Pommes</span> frisch auf dein Event. Vor deinen Augen gepresst, goldbraun frittiert und mit sündig guten Toppings serviert.
            </p>

            {/* Regional Limitation Alert Banner */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#283323] border border-[#A67C2D]/40 text-sm">
              <div className="w-9 h-9 rounded-lg bg-[#FEC72E]/20 flex items-center justify-center shrink-0 text-[#FEC72E]">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#F5F2E9]/90 leading-tight">
                <strong className="text-[#FEC72E]">Einsatzgebiet:</strong> Hannover Stadt & gesamte Region Hannover. <br className="hidden sm:inline" />
                <span className="text-[#F5F2E9]/70">Entferntere Veranstaltungsorte auf individuelle Anfrage möglich.</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                onClick={onOpenBooking}
                className="bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-2xl tracking-wide px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Foodtruck anfragen</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#longfries"
                className="bg-[#2D3928] hover:bg-[#384632] border border-[#A67C2D]/60 text-[#F5F2E9] font-bebas text-2xl tracking-wide px-7 py-3.5 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2 hover:border-[#FEC72E]"
              >
                <span>Was sind Longfries?</span>
              </a>
            </div>

            {/* Trust Features Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#A67C2D]/20 text-center sm:text-left">
              <div>
                <div className="font-bebas text-2xl sm:text-3xl text-[#FEC72E]">30 cm</div>
                <div className="text-xs text-[#F5F2E9]/70">Extra lang & kross</div>
              </div>
              <div>
                <div className="font-bebas text-2xl sm:text-3xl text-[#FEC72E]">-40%</div>
                <div className="text-xs text-[#F5F2E9]/70">Weniger Fettaufnahme</div>
              </div>
              <div>
                <div className="font-bebas text-2xl sm:text-3xl text-[#FEC72E]">100%</div>
                <div className="text-xs text-[#F5F2E9]/70">Familien-Handwerk</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Master Badge */}
          <div className="lg:col-span-5 relative">
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with CI Gold/Bronze Border */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#A67C2D] shadow-2xl group bg-[#181E15]">
                <img
                  src="/images/hero-fries.jpg"
                  alt="30cm Longfries frisch frittiert mit Trüffelmayo und Parmesan"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181E15]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating 30cm Ruler Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#222B1E]/95 backdrop-blur-md border border-[#FEC72E]/60 p-3 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between text-xs text-[#FEC72E] font-bold uppercase tracking-wider mb-1">
                    <span>0 cm</span>
                    <span className="font-bebas text-base tracking-normal text-[#F5F2E9]">
                      Offizieller 30 cm Maßstab
                    </span>
                    <span>30 cm</span>
                  </div>
                  {/* Ruler Graphic */}
                  <div className="relative h-4 bg-[#181E15] rounded-md border border-[#A67C2D]/50 flex items-center px-1 overflow-hidden">
                    <div className="w-full h-1.5 bg-gradient-to-r from-[#FEC72E] via-[#FED867] to-[#FEC72E] rounded-full"></div>
                    <div className="absolute inset-0 flex justify-between px-2 items-center pointer-events-none opacity-40">
                      {[...Array(15)].map((_, i) => (
                        <span key={i} className="h-2 w-[1px] bg-[#F5F2E9]"></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Authentic Master Logo Badge */}
              <div className="absolute -top-8 -right-6 sm:-right-8 bg-[#F5F2E9] p-2 rounded-full shadow-2xl border-4 border-[#222B1E] transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <FryCrewLogo className="w-24 h-24 sm:w-28 sm:h-28" />
              </div>

              {/* Secondary floating badge */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 -left-6 bg-[#FEC72E] text-[#222B1E] px-4 py-2 rounded-xl shadow-xl font-bebas text-lg tracking-wider border-2 border-[#222B1E]">
                <Heart className="w-5 h-5 text-red-700 fill-red-700 animate-pulse" />
                <span>Familie · Pommes · Glück</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
