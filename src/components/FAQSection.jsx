import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F5F2E9] text-[#222B1E] border-t border-[#A67C2D]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222B1E] text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Häufige Fragen</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-tight text-[#222B1E]">
            FRAGEN ZUR <span className="text-[#A67C2D]">FRYCREW & DEN LONGFRIES</span>
          </h2>
          <p className="text-sm sm:text-base text-[#222B1E]/80">
            Alles Wissenswerte rund um Buchung, Technik, Zutaten und Einsatzbereiche.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#A67C2D]/30 overflow-hidden transition-all shadow-sm hover:shadow"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bebas text-xl sm:text-2xl text-[#222B1E] hover:text-[#A67C2D] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <span className="w-8 h-8 rounded-full bg-[#F5F2E9] flex items-center justify-center shrink-0 text-[#222B1E]">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#222B1E]/80 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Contact Prompt */}
        <div className="text-center mt-10 text-xs text-[#222B1E]/70">
          Deine Frage war nicht dabei? Schreib uns gern direkt über unser{' '}
          <a href="#booking" className="text-[#A67C2D] font-bold underline">
            Anfrageformular
          </a>{' '}
          oder melde dich telefonisch.
        </div>

      </div>
    </section>
  );
}
