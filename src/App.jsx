import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LongfriesStory from './components/LongfriesStory';
import MenuShowcase from './components/MenuShowcase';
import AboutUs from './components/AboutUs';
import CateringEvents from './components/CateringEvents';
import TourNews from './components/TourNews';
import BookingForm from './components/BookingForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { LegalModal, ImpressumContent, DatenschutzContent } from './components/LegalModals';

export default function App() {
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2E9] text-[#222B1E] selection:bg-[#FEC72E] selection:text-[#222B1E]">
      {/* Navigation */}
      <Navbar
        onOpenBooking={scrollToBooking}
        onOpenImpressum={() => setImpressumOpen(true)}
        onOpenDatenschutz={() => setDatenschutzOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero onOpenBooking={scrollToBooking} />
        <LongfriesStory />
        <MenuShowcase />
        <AboutUs />
        <CateringEvents onOpenBooking={scrollToBooking} />
        <TourNews />
        <BookingForm />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenImpressum={() => setImpressumOpen(true)}
        onOpenDatenschutz={() => setDatenschutzOpen(true)}
      />

      {/* Legal Modals */}
      <LegalModal
        title="Impressum"
        isOpen={impressumOpen}
        onClose={() => setImpressumOpen(false)}
      >
        <ImpressumContent />
      </LegalModal>

      <LegalModal
        title="Datenschutzerklärung"
        isOpen={datenschutzOpen}
        onClose={() => setDatenschutzOpen(false)}
      >
        <DatenschutzContent />
      </LegalModal>
    </div>
  );
}
