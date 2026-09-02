import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

export function LegalModal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F5F2E9] text-[#222B1E] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col border-2 border-[#A67C2D] shadow-2xl">
        
        {/* Header */}
        <div className="bg-[#222B1E] text-[#F5F2E9] p-5 flex items-center justify-between border-b border-[#A67C2D]/30">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#FEC72E]" />
            <h3 className="font-bebas text-2xl tracking-wide text-[#F5F2E9]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#F5F2E9]/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#222B1E]/85 leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        <div className="bg-[#EBE7DC] p-4 border-t border-[#A67C2D]/20 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#222B1E] text-[#FEC72E] font-bebas text-lg px-6 py-1.5 rounded-xl cursor-pointer hover:bg-[#2D3928]"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
}

export function ImpressumContent() {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-bold text-sm text-[#222B1E]">Angaben gemäß § 5 TMG:</h4>
        <p>
          FryCrew Foodtruck Hannover<br />
          Vertreten durch die Geschäftsführung<br />
          Musterstraße 42<br />
          30159 Hannover
        </p>
      </div>
      <div>
        <h4 className="font-bold text-sm text-[#222B1E]">Kontakt:</h4>
        <p>
          Telefon: 0511 / 897 379<br />
          E-Mail: hallo@frycrew.de<br />
          Web: www.frycrew.de
        </p>
      </div>
      <div>
        <h4 className="font-bold text-sm text-[#222B1E]">Umsatzsteuer-ID:</h4>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 999 999 999 (in Gründung)</p>
      </div>
      <div>
        <h4 className="font-bold text-sm text-[#222B1E]">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h4>
        <p>
          FryCrew GbR<br />
          Musterstraße 42, 30159 Hannover
        </p>
      </div>
    </div>
  );
}

export function DatenschutzContent() {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-bold text-sm text-[#222B1E]">1. Datenschutz auf einen Blick</h4>
        <p>
          Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO).
        </p>
      </div>
      <div>
        <h4 className="font-bold text-sm text-[#222B1E]">2. Datenerfassung auf dieser Website</h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn du unser Catering-Anfrageformular ausfüllst, werden deine Angaben (Name, E-Mail, Telefonnummer, Eventadresse) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet. Eine Weitergabe an Dritte erfolgt ohne deine ausdrückliche Zustimmung nicht.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-sm text-[#222B1E]">3. Deine Rechte</h4>
        <p>
          Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
        </p>
      </div>
    </div>
  );
}
