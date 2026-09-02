import React, { useState } from 'react';
import { Briefcase, Heart, Cake, PartyPopper, Check, AlertCircle, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { HANNOVER_REGIONS } from '../data/siteData';

export default function CateringEvents({ onOpenBooking }) {
  const [guestCount, setGuestCount] = useState(80);

  const eventTypes = [
    {
      icon: Briefcase,
      title: 'Firmenfeiern & Teamevents',
      desc: 'Ob Sommerfest auf dem Firmengelände, Weihnachtsfeier, Jubiläum oder Afterwork: 30cm Pommes begeistern Mitarbeiter und Kunden gleichermaßen.',
      benefits: ['Schnelle Ausgabe ohne Schlangen', 'Rechnung mit MwSt.', 'Individuelles Menü-Branding'],
    },
    {
      icon: Heart,
      title: 'Hochzeiten & Polterabende',
      desc: 'Der ultimative Mitternachtssnack! Wenn die Party auf dem Höhepunkt ist, rollt der Foodtruck vor und serviert heiße, knusprige 30cm Fries.',
      benefits: ['Unvergesslicher Überraschungs-Effekt', 'Gourmet-Toppings (z.B. Trüffel)', 'Kein Geschirr-Aufwand'],
    },
    {
      icon: Cake,
      title: 'Geburtstage & Private Partys',
      desc: 'Runder Geburtstag oder Gartenparty? Mach dein Fest zum Streetfood-Erlebnis und genieße deine eigene Feier völlig stressfrei.',
      benefits: ['Ab ca. 35-40 Personen buchbar', 'Kinder & Erwachsene begeistert', 'Komplett autark möglich'],
    },
    {
      icon: PartyPopper,
      title: 'Festivals, Sport & Streetfood',
      desc: 'Wir haben Erfahrung auf großen Events mit tausenden Besuchern. Zuverlässig, schnell, professionell und immer mit bester Laune.',
      benefits: ['Bis zu 250+ Portionen pro Stunde', 'Höchste Hygienestandards', 'Professionelle Event-Crew'],
    },
  ];

  return (
    <section id="catering" className="py-16 lg:py-24 bg-[#F5F2E9] text-[#222B1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222B1E] text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exklusives Foodtruck-Catering</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#222B1E]">
            FRYCREW FÜR DEIN EVENT <span className="text-[#A67C2D]">BUCHEN</span>
          </h2>
          <p className="text-base sm:text-lg text-[#222B1E]/80 leading-relaxed">
            Mache deine Veranstaltung zum kulinarischen Highlight. Ob 40 oder 500 Gäste: Wir bringen den Duft frischer Kartoffeln und die längsten Pommes Hannovers direkt zu deiner Location.
          </p>
        </div>

        {/* 4 Event Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventTypes.map((evt, idx) => {
            const IconComponent = evt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-[#A67C2D]/25 hover:border-[#222B1E] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#222B1E] text-[#FEC72E] flex items-center justify-center mb-4 shadow">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bebas text-2xl text-[#222B1E] mb-2 leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#222B1E]/75 leading-relaxed mb-4">
                    {evt.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-gray-100">
                  {evt.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#222B1E]/80">
                      <Check className="w-3.5 h-3.5 text-[#A67C2D] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* IMPORTANT Regional Limitation Banner */}
        <div className="bg-[#222B1E] text-[#F5F2E9] rounded-3xl p-6 sm:p-10 border-2 border-[#FEC72E] shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FEC72E] text-[#222B1E] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Wichtiger Hinweis zum Einsatzgebiet</span>
              </div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-[#F5F2E9] tracking-wide">
                WIR SIND IN HANNOVER & DER REGION HANNOVER ZUHAUSE!
              </h3>
              <p className="text-sm sm:text-base text-[#F5F2E9]/85 leading-relaxed">
                Unser Foodtruck rollt regulär durch alle Stadtteile der <strong>Landeshauptstadt Hannover</strong> sowie die gesamte <strong>Region Hannover</strong> (z.B. Garbsen, Langenhagen, Laatzen, Lehrte, Burgdorf, Wunstorf, Neustadt, Ronnenberg uvm.).
              </p>
              
              {/* Outside Hannover Notice Box */}
              <div className="p-4 rounded-xl bg-[#2D3928] border border-[#A67C2D]/50 text-xs sm:text-sm text-[#F5F2E9]/90 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#FEC72E]">
                  <AlertCircle className="w-4 h-4" />
                  <span>Events außerhalb der Region Hannover:</span>
                </div>
                <p>
                  Du planst eine Feier in Braunschweig, Hildesheim, Celle, Hameln oder weiter entfernt? <br className="hidden sm:inline" />
                  Dies ist <strong>nur auf individuelle Sonderanfrage</strong> und nach vorheriger Absprache der Fahrstrecke & Mindestabnahme möglich.
                </p>
              </div>

              {/* Region Pill Cloud */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#FEC72E] font-bold block mb-2">
                  Reguläres Einsatzgebiet:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {HANNOVER_REGIONS.map((reg, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#1A2217] border border-[#A67C2D]/30 px-2.5 py-1 rounded-md text-[#F5F2E9]/90"
                    >
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick Inquiry Callout */}
            <div className="lg:col-span-4 bg-[#283323] p-6 rounded-2xl border border-[#A67C2D]/40 text-center space-y-4">
              <div className="font-bebas text-2xl text-[#FEC72E]">
                Dein Wunschtermin noch frei?
              </div>
              <p className="text-xs text-[#F5F2E9]/75">
                Besonders die Wochenenden in der Sommer- und Herbstsaison sind schnell vergeben. Frag jetzt unverbindlich an!
              </p>
              <a
                href="#booking"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-xl py-3 px-6 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105"
              >
                <span>Termin anfragen</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-[11px] text-[#F5F2E9]/50">
                Kostenlos & 100% unverbindlich
              </p>
            </div>

          </div>
        </div>

        {/* Interactive Event Estimator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#A67C2D]/30 shadow-xl max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase font-bold text-[#A67C2D] tracking-widest">
              Interaktiver Catering-Rechner
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl text-[#222B1E]">
              WIE VIELE GÄSTE ERWARTEST DU?
            </h3>
            <p className="text-xs sm:text-sm text-[#222B1E]/75">
              Verschiebe den Regler, um die optimale Portionsmenge und empfohlene Catering-Dauer zu sehen:
            </p>
          </div>

          <div className="space-y-6 max-w-xl mx-auto">
            {/* Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center font-bebas text-2xl text-[#222B1E]">
                <span>Gästeanzahl:</span>
                <span className="text-3xl text-[#A67C2D] bg-[#F5F2E9] px-4 py-1 rounded-xl border border-[#A67C2D]/30">
                  {guestCount} Gäste
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="400"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-3 bg-[#EBE7DC] rounded-lg appearance-none cursor-pointer accent-[#FEC72E]"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-semibold">
                <span>30 (Min. Feier)</span>
                <span>100</span>
                <span>200</span>
                <span>300</span>
                <span>400+ (Großevent)</span>
              </div>
            </div>

            {/* Calculated Output Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-center">
              <div className="bg-[#F5F2E9] p-4 rounded-xl border border-[#A67C2D]/20">
                <div className="text-xs text-[#222B1E]/70 font-medium">Empfohlene Portionen</div>
                <div className="font-bebas text-3xl text-[#222B1E] mt-1">
                  ca. {Math.round(guestCount * 1.15)}
                </div>
                <div className="text-[10px] text-[#222B1E]/50">inkl. Nachschlag-Reserve</div>
              </div>

              <div className="bg-[#F5F2E9] p-4 rounded-xl border border-[#A67C2D]/20">
                <div className="text-xs text-[#222B1E]/70 font-medium">Empfohlene Dauer</div>
                <div className="font-bebas text-3xl text-[#222B1E] mt-1">
                  {guestCount < 70 ? 'ca. 2 Std.' : guestCount < 180 ? 'ca. 3 Std.' : '3 - 5 Std.'}
                </div>
                <div className="text-[10px] text-[#222B1E]/50">Live-Ausgabe vor Ort</div>
              </div>

              <div className="bg-[#F5F2E9] p-4 rounded-xl border border-[#A67C2D]/20">
                <div className="text-xs text-[#222B1E]/70 font-medium">Topping-Vielfalt</div>
                <div className="font-bebas text-3xl text-[#222B1E] mt-1">
                  {guestCount < 60 ? '3 Sorten' : '4-6 Sorten'}
                </div>
                <div className="text-[10px] text-[#222B1E]/50">nach deiner Wahl</div>
              </div>
            </div>

            <div className="text-center pt-2">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#A67C2D] hover:text-[#222B1E] hover:underline"
              >
                Diese {guestCount} Personen jetzt im Anfrageformular übernehmen &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
