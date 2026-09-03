import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

export function LegalModal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F5F2E9] text-[#222B1E] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col border-2 border-[#A67C2D] shadow-2xl">
        
        {/* Header */}
        <div className="bg-[#222B1E] text-[#F5F2E9] p-5 sm:p-6 flex items-center justify-between border-b border-[#A67C2D]/30 shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-[#FEC72E]" />
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-[#F5F2E9]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#F5F2E9]/70 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#222B1E]/85 leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        <div className="bg-[#EBE7DC] p-4 border-t border-[#A67C2D]/20 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-[#222B1E] text-[#FEC72E] hover:bg-[#2D3928] font-bebas text-lg px-6 py-2 rounded-xl cursor-pointer transition-colors shadow"
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
    <div className="space-y-6">
      <div>
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">Angaben gemäß § 5 TMG</h4>
        <p className="font-semibold text-[#222B1E]">Frycrew</p>
        <p>Inhaber: Gunnar Kliche</p>
        <p>Kampsriede 6a</p>
        <p>30659 Hannover</p>
      </div>

      <div className="pt-2 border-t border-[#A67C2D]/20">
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">Kontakt</h4>
        <p><strong>Telefon:</strong> +49 511 9999 5210</p>
        <p><strong>E-Mail:</strong> info@businesscenterhannover.de / hallo@frycrew.de</p>
        <p><strong>Website:</strong> https://frycrew.de</p>
      </div>

      <div className="pt-2 border-t border-[#A67C2D]/20">
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">Umsatzsteuer-Identifikationsnummer</h4>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
        <p className="font-mono font-semibold text-[#222B1E]">DE 267 843 061</p>
      </div>

      <div className="pt-2 border-t border-[#A67C2D]/20">
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV / § 18 Abs. 2 MStV</h4>
        <p>Gunnar Kliche</p>
        <p>Kampsriede 6a</p>
        <p>30659 Hannover</p>
      </div>

      <div className="pt-2 border-t border-[#A67C2D]/20 space-y-3">
        <h4 className="font-bebas text-2xl text-[#222B1E]">Allgemeine Hinweise & Haftungsausschluss</h4>
        
        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Haftung für Inhalte</h5>
          <p className="mt-1">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachten oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Haftung für Links</h5>
          <p className="mt-1">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Urheberrecht</h5>
          <p className="mt-1">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
          </p>
        </div>
      </div>
    </div>
  );
}

export function DatenschutzContent() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">1. Datenschutz auf einen Blick</h4>
        <h5 className="font-bold text-xs uppercase text-[#A67C2D] mb-1">Allgemeine Hinweise</h5>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
      </div>

      <div className="space-y-2">
        <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Datenerfassung auf unserer Website</h5>
        <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung bzw. dem Impressum entnehmen.
        </p>
        <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Catering-Anfrageformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>
        <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Bearbeitung Ihrer Catering-Anfragen oder zur statistischen Analyse verwendet werden.
        </p>
        <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
      </div>

      <div className="pt-2 border-t border-[#A67C2D]/20">
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">2. Hosting & Content Delivery Networks (CDN)</h4>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln.
        </p>
        <p className="mt-2">
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </div>

      <div className="pt-2 border-t border-[#A67C2D]/20 space-y-3">
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h4>
        
        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Hinweis zur verantwortlichen Stelle</h5>
          <p className="mt-1">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <div className="bg-white p-3 rounded-xl border border-[#A67C2D]/30 mt-2 font-medium">
            <p className="font-bold text-[#222B1E]">Frycrew</p>
            <p>Inhaber: Gunnar Kliche</p>
            <p>Kampsriede 6a</p>
            <p>30659 Hannover</p>
            <p className="mt-1">Telefon: +49 511 9999 5210</p>
            <p>E-Mail: info@businesscenterhannover.de / hallo@frycrew.de</p>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h5>
          <p className="mt-1">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h5>
          <p className="mt-1">
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. WIDERSPRECHEN SIE, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h5>
          <p className="mt-1">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde für Niedersachsen ist der Landesbeauftragte für den Datenschutz Niedersachsen.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Recht auf Datenübertragbarkeit & Auskunft, Löschung und Berichtigung</h5>
          <p className="mt-1">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">SSL- bzw. TLS-Verschlüsselung</h5>
          <p className="mt-1">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Catering-Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-[#A67C2D]/20 space-y-3">
        <h4 className="font-bebas text-2xl text-[#222B1E] mb-2">4. Datenerfassung auf dieser Website</h4>
        
        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Anfrageformular / Catering-Buchung</h5>
          <p className="mt-1">
            Wenn Sie uns per Kontakt- oder Cateringformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (wie Name, Datum, Personenzahl, Adresse des Events, Telefonnummer und E-Mail) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-1">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase text-[#A67C2D]">Anfrage per E-Mail oder Telefon</h5>
          <p className="mt-1">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </div>
      </div>
    </div>
  );
}
