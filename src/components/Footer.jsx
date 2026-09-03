import React from 'react';
import { MapPin, Phone, Mail, Heart, ArrowUp } from 'lucide-react';
import FryCrewLogo from './FryCrewLogo';

export default function Footer({ onOpenImpressum, onOpenDatenschutz }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171E14] text-[#F5F2E9] border-t-2 border-[#A67C2D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#A67C2D]/30">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <FryCrewLogo className="w-20 h-20 sm:w-24 sm:h-24 ring-2 ring-[#FEC72E] shadow-xl" />
              <div>
                <span className="font-bebas text-3xl sm:text-4xl tracking-wider text-[#F5F2E9] block leading-none">
                  FRYCREW
                </span>
                <span className="text-xs text-[#FEC72E] font-bold uppercase tracking-widest">
                  Long Fries · Est. 2026
                </span>
              </div>
            </div>

            <p className="font-bebas text-2xl text-[#FEC72E]">
              EXTREM LANG. EXTREM LECKER.
            </p>

            <p className="text-xs sm:text-sm text-[#F5F2E9]/75 max-w-sm leading-relaxed">
              Streetfood mit Manufaktur-Charakter. Dein Foodtruck für spektakuläre 30cm Pommes in Hannover und der gesamten Region Hannover.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#283323] border border-[#A67C2D]/40 flex items-center justify-center text-[#FEC72E] hover:bg-[#FEC72E] hover:text-[#222B1E] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#283323] border border-[#A67C2D]/40 flex items-center justify-center text-[#FEC72E] hover:bg-[#FEC72E] hover:text-[#222B1E] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bebas text-xl text-[#FEC72E] tracking-wider">
              ÜBERSICHT
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F5F2E9]/80">
              <li>
                <a href="#longfries" className="hover:text-[#FEC72E] transition-colors">
                  Was sind Longfries?
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FEC72E] transition-colors">
                  Toppings & Saucen
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FEC72E] transition-colors">
                  Über die FryCrew
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-[#FEC72E] transition-colors">
                  Catering für Veranstaltungen
                </a>
              </li>
              <li>
                <a href="#tour-news" className="hover:text-[#FEC72E] transition-colors">
                  Tourdaten & News
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#FEC72E] transition-colors">
                  Unverbindlich anfragen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Regional Hub */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bebas text-xl text-[#FEC72E] tracking-wider">
              KONTAKT & HEIMATHAFEN
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F5F2E9]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FEC72E] shrink-0 mt-0.5" />
                <span>
                  <strong>Hannover & Region Hannover</strong><br />
                  (Entferntere Events auf Anfrage)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FEC72E] shrink-0" />
                <span>0511 / 897-FRY (0511 / 897 379)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FEC72E] shrink-0" />
                <span>hallo@frycrew.de</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-[#222B1E] rounded-xl border border-[#A67C2D]/30 text-xs text-[#F5F2E9]/70">
              ⚡ <strong>Antwortgarantie:</strong> Wir beantworten deine Catering-Anfrage werktags innerhalb von 24 Stunden!
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F2E9]/60">
          <div>
            &copy; {new Date().getFullYear()} FryCrew. Alle Rechte vorbehalten. Handwerklich zubereitet in Hannover.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenImpressum}
              className="hover:text-[#FEC72E] transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={onOpenDatenschutz}
              className="hover:text-[#FEC72E] transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#FEC72E] transition-colors cursor-pointer p-1"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Nach oben</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
