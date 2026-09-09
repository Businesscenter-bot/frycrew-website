import React from 'react';
import { Heart, Users, Sparkles, Truck, CheckCircle } from 'lucide-react';
import FryCrewLogo from './FryCrewLogo';

export default function AboutUs() {
  const brandValues = [
    { title: 'Familie & Nähe', desc: 'Als echter Familienbetrieb stehen wir selbst am Truck und servieren mit Herzblut.' },
    { title: 'Echtes Handwerk', desc: 'Keine aufgewärmte Tiefkühlware. Jede Longfry wird frisch aus Teig gepresst.' },
    { title: 'Höchste Qualität', desc: 'Sorgfältig ausgewählte Zutaten, saubere Zubereitung und beste Saucen.' },
    { title: 'Purer Genuss', desc: '30 Zentimeter Freude, die man gerne teilt – oder doch lieber ganz alleine verputzt.' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#222B1E] text-[#F5F2E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D3928] border border-[#A67C2D]/40 text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Über die FryCrew</span>
            </div>

            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#F5F2E9] leading-tight">
              STREETFOOD MIT <br />
              <span className="text-[#FEC72E]">MANUFAKTUR-CHARAKTER</span>
            </h2>

            <p className="font-script text-2xl text-[#FEC72E]">
              „Familie. Pommes. Glück.“
            </p>

            <p className="text-base sm:text-lg text-[#F5F2E9]/85 leading-relaxed font-light">
              Die <strong className="text-[#F5F2E9] font-semibold">FryCrew</strong> verbindet ehrliche Familiennähe mit einem Produktversprechen, das man so in Hannover noch nicht gesehen hat. Wir wollten keinen beliebigen Imbiss, sondern einen mobilen Genussort schaffen, der begeistert.
            </p>

            <p className="text-sm sm:text-base text-[#F5F2E9]/80 leading-relaxed">
              Bei uns gibt es keine Massenabfertigung aus der Tüte. Wenn du zu unserem Truck kommst, riechst du den frischen Kartoffelteig, siehst die goldbraunen 30cm Riesen im Sieb tanzen und wirst mit einem echten Lächeln begrüßt.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#A67C2D]/30">
              {brandValues.map((v, idx) => (
                <div key={idx} className="bg-[#283323] p-4 rounded-xl border border-[#A67C2D]/20 space-y-1">
                  <div className="flex items-center gap-2 text-[#FEC72E] font-bold text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FEC72E]" />
                    <span>{v.title}</span>
                  </div>
                  <p className="text-xs text-[#F5F2E9]/70 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Hannover Badge */}
            <div className="pt-2 text-xs text-[#F5F2E9]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FEC72E] animate-ping"></span>
              <span>Heimathafen: Hannover · Bereit für Stadt & Region</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Real Foodtruck & Prep */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Real Foodtruck Photo Showcase */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#FEC72E] shadow-2xl group bg-[#1A2217]">
              <img
                src="/images/frycrew-truck-real.jpg"
                alt="Der echte FryCrew Foodtruck im Einsatz mit Roll-Ups und Holz-Deko in Hannover"
                className="w-full h-72 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#222B1E]/90 backdrop-blur-xs text-[#FEC72E] border border-[#A67C2D]/40 px-3 py-1.5 rounded-xl text-xs font-bold font-bebas tracking-wide flex items-center gap-1.5 shadow">
                <span className="w-2 h-2 rounded-full bg-[#FEC72E] animate-pulse"></span>
                <span>Original FryCrew Foodtruck</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-[#222B1E]/90 backdrop-blur-xs text-[#F5F2E9] border border-[#A67C2D]/40 px-3 py-1 rounded-xl text-[11px] font-medium shadow">
                📍 Hannover & Region
              </div>
            </div>

            {/* Bottom Row: Prep Action & Guarantee Banner */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border-2 border-[#A67C2D]/40 shadow-lg group bg-[#1A2217]">
                <img
                  src="/images/prep-action.jpg"
                  alt="Frisch zubereitete 30cm Pommes werden veredelt"
                  className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="bg-[#283323] p-4 rounded-2xl border border-[#A67C2D]/30 flex flex-col justify-center text-center space-y-1 shadow-lg">
                <FryCrewLogo className="w-12 h-12 mx-auto mb-1 ring-1 ring-[#FEC72E]" />
                <div className="font-bebas text-lg sm:text-xl text-[#F5F2E9] leading-tight">
                  EXTREM LANG. EXTREM LECKER.
                </div>
                <div className="text-[10px] text-[#FEC72E] uppercase font-bold tracking-wider">
                  100% Streetfood-Leidenschaft
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
