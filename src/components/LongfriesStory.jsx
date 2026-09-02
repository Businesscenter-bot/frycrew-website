import React, { useState } from 'react';
import { Sparkles, Flame, Clock, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function LongfriesStory() {
  const [activeComparison, setActiveComparison] = useState('phone');

  const comparisons = [
    {
      id: 'standard',
      name: 'Standard Pommes',
      lengthCm: 7,
      widthPercent: '23%',
      desc: 'Kurz, bricht schnell ab, kühlt schnell aus.',
    },
    {
      id: 'phone',
      name: 'Modernes Smartphone',
      lengthCm: 15,
      widthPercent: '50%',
      desc: 'Mehr als doppelt so lang wie dein Handy!',
    },
    {
      id: 'bottle',
      name: '0,5l Flasche',
      lengthCm: 24,
      widthPercent: '80%',
      desc: 'Selbst eine große Glasflasche wird überragt.',
    },
    {
      id: 'frycrew',
      name: 'FryCrew 30cm Longfries',
      lengthCm: 30,
      widthPercent: '100%',
      desc: 'Die Königsklasse: Spektakuläre 30 cm purer Kartoffelgenuss.',
      isHighlight: true,
    },
  ];

  return (
    <section id="longfries" className="py-16 lg:py-24 bg-[#F5F2E9] text-[#222B1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222B1E] text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Das Produkt-Erlebnis</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#222B1E]">
            WAS SIND EIGENTLICH <span className="text-[#A67C2D]">LONGFRIES?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#222B1E]/80 leading-relaxed">
            Pommes kennt jeder – aber hast du schon mal eine <strong className="text-[#222B1E]">30 Zentimeter lange Fritten-Sensation</strong> probiert? Bei der FryCrew machen wir aus einem einfachen Snack ein unvergessliches Manufaktur-Erlebnis.
          </p>
        </div>

        {/* 4-Step Craft Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#A67C2D]/20 hover:border-[#FEC72E] transition-all duration-200 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#222B1E] text-[#FEC72E] font-bebas text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              01
            </div>
            <h3 className="font-bebas text-2xl text-[#222B1E] mb-2">
              93% Reiner Kartoffelteig
            </h3>
            <p className="text-sm text-[#222B1E]/75 leading-relaxed">
              Die Basis ist ein feiner Teig aus getrockneten Qualitätskartoffeln – frei von künstlichen Geschmacksverstärkern, Farbstoffen oder Konservierungsstoffen.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#A67C2D]/20 hover:border-[#FEC72E] transition-all duration-200 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#222B1E] text-[#FEC72E] font-bebas text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              02
            </div>
            <h3 className="font-bebas text-2xl text-[#222B1E] mb-2">
              Live in 30 cm gepresst
            </h3>
            <p className="text-sm text-[#222B1E]/75 leading-relaxed">
              Mit unserer speziellen Gastro-Presse formen wir jede Portion live vor deinen Augen auf exakt 30 cm Länge – länger, als jede natürliche Kartoffel gewachsen ist!
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#A67C2D]/20 hover:border-[#FEC72E] transition-all duration-200 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#222B1E] text-[#FEC72E] font-bebas text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              03
            </div>
            <h3 className="font-bebas text-2xl text-[#222B1E] mb-2">
              120s Knusper-Garantie
            </h3>
            <p className="text-sm text-[#222B1E]/75 leading-relaxed">
              In genau 120 Sekunden bei 175°C backen die Fries goldbraun aus. Das Ergebnis: Ein unfassbar krosser Biss außen und ein samtig-zarter Kern innen.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#A67C2D]/20 hover:border-[#FEC72E] transition-all duration-200 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#222B1E] text-[#FEC72E] font-bebas text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              04
            </div>
            <h3 className="font-bebas text-2xl text-[#222B1E] mb-2">
              ca. 40% Weniger Fett
            </h3>
            <p className="text-sm text-[#222B1E]/75 leading-relaxed">
              Durch die dichte Teigoberfläche nehmen unsere Longfries bis zu 40% weniger Frittierfett auf als gewöhnliche Pommes. Leicht, bekömmlich & maximal knusprig.
            </p>
          </div>

        </div>

        {/* Interactive 30cm Visual Comparison Section */}
        <div className="bg-[#222B1E] text-[#F5F2E9] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#A67C2D] relative overflow-hidden">
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs uppercase tracking-widest text-[#FEC72E] font-bold">
                Der direkte Größenvergleich
              </span>
              <h3 className="font-bebas text-3xl sm:text-5xl text-[#F5F2E9]">
                WIE LANG SIND 30 ZENTIMETER WIRKLICH?
              </h3>
              <p className="text-sm sm:text-base text-[#F5F2E9]/80">
                Sieh selbst, wie spektakulär unsere Longfries im Vergleich zu gewöhnlichen Alltagsgegenständen sind.
              </p>
            </div>

            {/* Comparison Visual Bars */}
            <div className="space-y-6 pt-4">
              {comparisons.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className={item.isHighlight ? "text-[#FEC72E] font-bold text-base flex items-center gap-1.5" : "text-[#F5F2E9]/80"}>
                      {item.name}
                      {item.isHighlight && <span className="bg-[#FEC72E] text-[#222B1E] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">Hero</span>}
                    </span>
                    <span className={item.isHighlight ? "font-bebas text-xl text-[#FEC72E]" : "font-mono text-sm text-[#F5F2E9]/60"}>
                      {item.lengthCm} cm
                    </span>
                  </div>

                  {/* Progress / Length Bar */}
                  <div className="h-7 w-full bg-[#181E15] rounded-xl p-1 border border-[#A67C2D]/30 flex items-center overflow-hidden">
                    <div
                      className={`h-full rounded-lg transition-all duration-700 flex items-center justify-end px-2 ${
                        item.isHighlight
                          ? 'bg-gradient-to-r from-[#C7973D] via-[#FEC72E] to-[#FED867] shadow-lg shadow-[#FEC72E]/20 text-[#222B1E] font-bebas text-sm font-bold'
                          : 'bg-[#3A4734] text-[#F5F2E9]/60 text-xs'
                      }`}
                      style={{ width: item.widthPercent }}
                    >
                      {item.isHighlight && '30 CM'}
                    </div>
                  </div>
                  <p className="text-xs text-[#F5F2E9]/60 pl-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Fun Quote Box */}
            <div className="mt-10 p-4 rounded-xl bg-[#283323] border border-[#A67C2D]/40 text-center">
              <p className="font-script text-2xl text-[#FEC72E]">
                „Pommes, die man nicht einfach nur isst – sondern über die man spricht!“
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
