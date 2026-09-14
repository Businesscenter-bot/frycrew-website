import React, { useState } from 'react';
import { Calendar, Users, MapPin, Send, CheckCircle2, AlertTriangle, Sparkles, Building, Mail, Phone, Clock, FileText } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    eventType: 'Firmenfeier',
    eventDate: '',
    guestCount: '80',
    locationAddress: '',
    locationZip: '',
    locationCity: 'Hannover',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    powerAvailable: 'ja',
    notes: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if Zip Code is in Hannover Region (30xxx)
  const isHannoverRegion = formData.locationZip ? formData.locationZip.startsWith('30') : true;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const setGuestsPreset = (num) => {
    setFormData((prev) => ({ ...prev, guestCount: String(num) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/kliche@businesscenterhannover.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `🍟 Neue FryCrew Catering-Anfrage: ${formData.eventType} (${formData.guestCount} Gäste) von ${formData.fullName}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
          'Name des Kunden': formData.fullName,
          'Firma / Organisation': formData.company || 'Privatperson',
          'E-Mail-Adresse': formData.email,
          'Telefonnummer': formData.phone,
          'Art der Veranstaltung': formData.eventType,
          'Wunschdatum': formData.eventDate || 'Noch offen / flexibel',
          'Gästeanzahl': `${formData.guestCount} Personen`,
          'Veranstaltungsort': `${formData.locationAddress ? formData.locationAddress + ', ' : ''}${formData.locationZip} ${formData.locationCity}`,
          'Region-Check': formData.locationZip?.startsWith('30') ? '✓ Hannover Kerngebiet' : '⚠ Außerhalb Region Hannover (Sonderprüfung)',
          'Stromanschluss vor Ort': formData.powerAvailable,
          'Wünsche & Notizen': formData.notes || 'Keine Angabe',
        }),
      });
    } catch (err) {
      console.warn('Formular-Übermittlung:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-[#222B1E] text-[#F5F2E9] relative">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#FEC72E] blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D3928] border border-[#A67C2D]/40 text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unverbindliche Anfrage</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F5F2E9]">
            FRYCREW FÜR DEIN <span className="text-[#FEC72E]">EVENT ANFRAGEN</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5F2E9]/80 max-w-2xl mx-auto leading-relaxed">
            Teile uns die wichtigsten Eckdaten zu deiner Veranstaltung mit. Wir prüfen die Verfügbarkeit und senden dir innerhalb von 24 Stunden ein unverbindliches Angebot.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-[#1D251A] rounded-3xl p-6 sm:p-10 border-2 border-[#A67C2D] shadow-2xl">
          
          {submitted ? (
            /* Success State */
            <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 rounded-full bg-[#FEC72E] text-[#222B1E] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#FEC72E]">
                  ANFRAGE ERFOLGREICH ÜBERMITTELT!
                </h3>
                <p className="text-base text-[#F5F2E9]/90 max-w-lg mx-auto">
                  Vielen Dank, <strong>{formData.fullName}</strong>! Wir haben deine Anfrage für deine{' '}
                  <span className="text-[#FEC72E] font-semibold">{formData.eventType}</span> am{' '}
                  <span className="text-[#FEC72E] font-semibold">{formData.eventDate || 'deinem Wunschdatum'}</span> erhalten.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#283323] p-5 rounded-2xl border border-[#A67C2D]/30 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2">
                <div className="font-bebas text-lg text-[#FEC72E] border-b border-[#A67C2D]/20 pb-1">
                  Zusammenfassung deiner Daten:
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F2E9]/70">Gästezahl:</span>
                  <span className="font-bold text-[#F5F2E9]">{formData.guestCount} Personen</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F2E9]/70">Veranstaltungsort:</span>
                  <span className="font-bold text-[#F5F2E9]">{formData.locationZip} {formData.locationCity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F2E9]/70">E-Mail:</span>
                  <span className="font-bold text-[#F5F2E9]">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F5F2E9]/70">Telefon:</span>
                  <span className="font-bold text-[#F5F2E9]">{formData.phone}</span>
                </div>
                {!isHannoverRegion && formData.locationZip && (
                  <div className="p-2 bg-[#1A2217] rounded-lg text-[11px] text-[#FEC72E] mt-2 border border-[#A67C2D]/30">
                    ℹ Außerhalb Region Hannover: Wir prüfen Route & Anfahrt gesondert.
                  </div>
                )}
              </div>

              <div className="text-xs text-[#F5F2E9]/60 max-w-sm mx-auto">
                Wir melden uns schnellstmöglich bei dir zurück. Bei dringenden Fragen erreichst du uns direkt unter <strong className="text-[#F5F2E9]">+49 511 9999 5210</strong>.
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#2D3928] hover:bg-[#384632] text-[#F5F2E9] border border-[#A67C2D]/50 text-xs font-semibold px-6 py-2.5 rounded-xl cursor-pointer"
              >
                Weitere Anfrage stellen
              </button>
            </div>
          ) : (
            /* Main Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Event Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FEC72E] mb-2">
                  1. Art der gewünschten Veranstaltung *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Firmenfeier', 'Hochzeit', 'Geburtstag', 'Festival / Sonstiges'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData((p) => ({ ...p, eventType: type }))}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide text-center transition-all cursor-pointer border ${
                        formData.eventType === type
                          ? 'bg-[#FEC72E] text-[#222B1E] border-[#FEC72E] shadow-md'
                          : 'bg-[#283323] text-[#F5F2E9]/90 border-[#A67C2D]/30 hover:border-[#FEC72E]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-[#FEC72E] mb-2">
                    Datum der Veranstaltung *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] focus:outline-none focus:border-[#FEC72E] focus:ring-1 focus:ring-[#FEC72E]"
                    />
                  </div>
                  <span className="text-[11px] text-[#F5F2E9]/50 mt-1 block">
                    Gerne auch vorläufiges Datum eintragen
                  </span>
                </div>

                {/* Guest Count */}
                <div>
                  <label htmlFor="guestCount" className="block text-xs font-bold uppercase tracking-wider text-[#FEC72E] mb-2">
                    Teilnehmerzahl / Gästeanzahl *
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    min="20"
                    max="1000"
                    required
                    placeholder="z.B. 80"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] focus:outline-none focus:border-[#FEC72E] focus:ring-1 focus:ring-[#FEC72E]"
                  />
                  {/* Preset Buttons */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[10px] text-[#F5F2E9]/50 mr-1">Schnellwahl:</span>
                    {[40, 75, 120, 250].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuestsPreset(num)}
                        className="text-[10px] bg-[#283323] hover:bg-[#3A4A33] border border-[#A67C2D]/30 px-2 py-0.5 rounded text-[#FEC72E] cursor-pointer"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* 3. Location / Address (with Hannover Region Check) */}
              <div className="space-y-3 pt-2 border-t border-[#A67C2D]/20">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FEC72E]">
                  Adresse der Veranstaltung *
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-6">
                    <input
                      type="text"
                      name="locationAddress"
                      required
                      placeholder="Straße & Hausnummer"
                      value={formData.locationAddress}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      name="locationZip"
                      required
                      maxLength="5"
                      placeholder="PLZ (z.B. 30159)"
                      value={formData.locationZip}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E]"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      name="locationCity"
                      required
                      placeholder="Ort (z.B. Hannover)"
                      value={formData.locationCity}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E]"
                    />
                  </div>
                </div>

                {/* Dynamic Region Guidance Alert */}
                {formData.locationZip && (
                  <div>
                    {formData.locationZip.startsWith('30') ? (
                      <div className="p-3 bg-[#283323] border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                          <strong>Super!</strong> Deine PLZ {formData.locationZip} liegt in unserem regulären Kerngebiet (Hannover & Region).
                        </span>
                      </div>
                    ) : (
                      <div className="p-3 bg-[#2D2817] border border-[#FEC72E]/50 rounded-xl text-xs text-[#FEC72E] flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#FEC72E] shrink-0 mt-0.5" />
                        <span>
                          <strong>Hinweis:</strong> Die PLZ {formData.locationZip} liegt außerhalb unseres regulären Kerngebiets (Hannover). Eine Anfahrt ist <strong>auf gesonderte Anfrage</strong> möglich – wir prüfen die Machbarkeit und Fahrtpauschale sehr gerne für dich!
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* 4. Contact Information */}
              <div className="space-y-3 pt-2 border-t border-[#A67C2D]/20">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FEC72E]">
                  Kontaktdaten *
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Dein Vor- und Nachname *"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Firma / Organisation (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="E-Mail-Adresse *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Telefonnummer für Rückfragen *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E]"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Electricity & Additional Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#A67C2D]/20">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FEC72E] mb-2">
                    Stromanschluss vor Ort verfügbar?
                  </label>
                  <select
                    name="powerAvailable"
                    value={formData.powerAvailable}
                    onChange={handleChange}
                    className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-3 text-sm text-[#F5F2E9] focus:outline-none focus:border-[#FEC72E]"
                  >
                    <option value="ja">Ja, Starkstrom vorhanden (16A / 32A CEE)</option>
                    <option value="schuko">Ja, normaler Haushaltsstrom (230V)</option>
                    <option value="nein">Nein, wir benötigen autarke Stromversorgung</option>
                    <option value="unklar">Noch unklar / muss geprüft werden</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FEC72E] mb-2">
                    Wünsche & Besonderheiten (optional)
                  </label>
                  <textarea
                    rows="2"
                    name="notes"
                    placeholder="z.B. Zeitfenster, Topping-Wünsche, Zufahrtsbesonderheiten..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full bg-[#283323] border border-[#A67C2D]/40 rounded-xl px-4 py-2.5 text-sm text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Privacy Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    required
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-[#A67C2D] bg-[#283323] text-[#FEC72E] focus:ring-[#FEC72E]"
                  />
                  <span className="text-xs text-[#F5F2E9]/75 leading-relaxed">
                    Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet und gespeichert werden. Weitere Informationen finde ich in der Datenschutzerklärung.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-2xl py-4 rounded-2xl font-bold shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Wird gesendet...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Jetzt unverbindliche Catering-Anfrage absenden</span>
                    </>
                  )}
                </button>
                <div className="text-center text-[11px] text-[#F5F2E9]/50 mt-2">
                  🔒 100% unverbindlich · Schnelle Rückmeldung innerhalb von 24h garantiert
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
