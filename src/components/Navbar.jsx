import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, PhoneCall, MapPin, Sparkles } from 'lucide-react';
import FryCrewLogo from './FryCrewLogo';

export default function Navbar({ onOpenBooking, onOpenImpressum, onOpenDatenschutz }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Was sind Longfries?', href: '#longfries' },
    { label: 'Menü & Toppings', href: '#menu' },
    { label: 'Über uns', href: '#about' },
    { label: 'Catering buchen', href: '#catering' },
    { label: 'Tourdaten & News', href: '#tour-news' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Banner for Region Announcement */}
      <div className="bg-[#222B1E] border-b border-[#A67C2D]/30 text-[#F5F2E9] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#FEC72E] text-[#222B1E] font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
              <MapPin className="w-3 h-3" /> Region Hannover
            </span>
            <span className="hidden sm:inline text-[#F5F2E9]/90">
              Unterwegs in Hannover & Umland · Entferntere Events gerne auf Anfrage!
            </span>
            <span className="sm:hidden text-[#F5F2E9]/90 text-[11px]">
              Foodtruck für Hannover & Region
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-[#FEC72E]">
              <Sparkles className="w-3.5 h-3.5" /> 30cm handwerklich kross
            </span>
            <a
              href="#booking"
              className="text-[#FEC72E] hover:underline font-semibold flex items-center gap-1"
            >
              Jetzt Termin für 2026/2027 sichern &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#222B1E]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-[#A67C2D]/20'
            : 'bg-[#222B1E] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <FryCrewLogo className="w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105" showClaim={false} />
            <div className="flex flex-col">
              <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-[#F5F2E9] leading-none group-hover:text-[#FEC72E] transition-colors">
                FRYCREW
              </span>
              <span className="text-[10px] tracking-widest text-[#FEC72E] font-semibold uppercase -mt-0.5">
                30cm Longfries · Hannover
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#F5F2E9]/90 hover:text-[#FEC72E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FEC72E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#booking"
              onClick={onOpenBooking}
              className="bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-lg px-5 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Event anfragen</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            className="lg:hidden text-[#F5F2E9] p-2 rounded-lg hover:bg-[#2D3928] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FEC72E]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1D251A] border-t border-[#A67C2D]/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#F5F2E9] hover:bg-[#283323] hover:text-[#FEC72E] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#A67C2D]/20 flex flex-col gap-2">
              <a
                href="#booking"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-center text-xl py-3 rounded-lg shadow font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Jetzt Catering anfragen</span>
              </a>
              <div className="text-center text-xs text-[#F5F2E9]/70 pt-1">
                📍 Hannover & Region · Tel: 0511 / 897-FRY
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
