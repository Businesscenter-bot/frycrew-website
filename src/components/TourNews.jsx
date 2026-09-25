import React, { useState, useMemo } from 'react';
import { Calendar, MapPin, Clock, Tag, Newspaper, ArrowUpRight, Bell, Sparkles, CheckCircle2 } from 'lucide-react';
import { TOUR_EVENTS, NEWS_ITEMS } from '../data/siteData';

const GERMAN_MONTHS = {
  jan: 0, feb: 1, mär: 2, mrz: 2, apr: 3, mai: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, okt: 9, nov: 10, dez: 11
};

function parseGermanDateRange(str) {
  if (!str) return null;
  const parts = str.trim().split(/\s+/);
  if (parts.length < 3) return null;
  const year = parseInt(parts[parts.length - 1], 10);
  const monthStr = parts[parts.length - 2].toLowerCase().replace('.', '');
  const month = GERMAN_MONTHS[monthStr] !== undefined ? GERMAN_MONTHS[monthStr] : 0;
  
  const dayMatches = parts[0].match(/\d+/g);
  if (!dayMatches || dayMatches.length === 0) return null;
  
  const startDay = parseInt(dayMatches[0], 10);
  const endDay = parseInt(dayMatches[dayMatches.length - 1], 10);
  
  const startDate = new Date(year, month, startDay, 0, 0, 0);
  const endDate = new Date(year, month, endDay, 23, 59, 59, 999);
  
  return { startDate, endDate };
}

export default function TourNews() {
  const [activeTab, setActiveTab] = useState('tour'); // 'tour' | 'news'
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  // Dynamically filter out past events and sort chronologically (nearest upcoming first)
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return TOUR_EVENTS
      .map((event) => {
        let start = event.startDate ? new Date(event.startDate + 'T00:00:00') : null;
        let end = event.endDate ? new Date(event.endDate + 'T23:59:59') : null;

        if (!start || !end) {
          const parsed = parseGermanDateRange(event.date);
          if (parsed) {
            start = start || parsed.startDate;
            end = end || parsed.endDate;
          }
        }
        return { ...event, _start: start, _end: end };
      })
      .filter((event) => {
        if (!event._end) return true;
        return event._end >= today; // Only active & upcoming events
      })
      .sort((a, b) => {
        const timeA = a._start ? a._start.getTime() : 0;
        const timeB = b._start ? b._start.getTime() : 0;
        return timeA - timeB; // Ascending: Nearest upcoming event first
      });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="tour-news" className="py-16 lg:py-24 bg-[#EBE7DC] text-[#222B1E] border-t border-b border-[#A67C2D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222B1E] text-[#FEC72E] text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Live vor Ort & Aktuelles</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#222B1E]">
            TOURDATEN & <span className="text-[#A67C2D]">AKTUELLE NEWS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#222B1E]/80">
            Hier erfährst du immer tagesaktuell, wo der FryCrew-Truck als Nächstes in Hannover hält und welche Neuigkeiten es gibt.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#222B1E] text-sm mt-4 shadow-md">
            <button
              onClick={() => setActiveTab('tour')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bebas text-lg tracking-wider transition-all cursor-pointer ${
                activeTab === 'tour'
                  ? 'bg-[#FEC72E] text-[#222B1E] shadow'
                  : 'text-[#F5F2E9] hover:text-[#FEC72E]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Öffentliche Tourdaten ({upcomingEvents.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bebas text-lg tracking-wider transition-all cursor-pointer ${
                activeTab === 'news'
                  ? 'bg-[#FEC72E] text-[#222B1E] shadow'
                  : 'text-[#F5F2E9] hover:text-[#FEC72E]'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>News & Storys ({NEWS_ITEMS.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Tour Dates */}
        {activeTab === 'tour' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => {
                const isNext = index === 0;
                return (
                  <div
                    key={event.id}
                    className={`bg-white rounded-2xl p-6 border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md ${
                      isNext
                        ? 'border-2 border-[#FEC72E] ring-2 ring-[#FEC72E]/20 bg-linear-to-r from-amber-50/40 via-white to-white'
                        : 'border-[#A67C2D]/30 hover:border-[#222B1E]'
                    }`}
                  >
                    {/* Date Badge */}
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center shrink-0 border ${
                        isNext 
                          ? 'bg-[#222B1E] text-[#FEC72E] border-[#FEC72E] shadow-md' 
                          : 'bg-[#222B1E] text-[#F5F2E9] border-[#A67C2D]/40'
                      }`}>
                        <span className="text-[11px] uppercase font-bold text-[#FEC72E]">
                          {event.date.split(' ')[1]}
                        </span>
                        <span className="font-bebas text-3xl leading-none text-white">
                          {event.date.split(' ')[0]}
                        </span>
                        <span className="text-[10px] text-[#F5F2E9]/60">
                          {event.date.split(' ')[2]}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {isNext && (
                            <span className="text-xs bg-[#FEC72E] text-[#222B1E] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                              <Sparkles className="w-3 h-3" /> Nächster Halt
                            </span>
                          )}
                          <span className="text-xs bg-[#222B1E]/5 text-[#222B1E] font-semibold px-2.5 py-0.5 rounded-full">
                            {event.type}
                          </span>
                          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                            ✓ {event.status}
                          </span>
                        </div>
                        <h3 className="font-bebas text-2xl text-[#222B1E]">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-[#222B1E]/75">
                          <span className="flex items-center gap-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#A67C2D]" />
                            {event.location} ({event.city})
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#A67C2D]" />
                            {event.time}
                          </span>
                        </div>
                        <p className="text-xs text-[#222B1E]/70 pt-1">
                          {event.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Action */}
                    <div className="md:self-center shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
                      <a
                        href="#booking"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A67C2D] hover:text-[#222B1E] hover:underline"
                      >
                        <span>Für eigenes Event buchen</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              /* Fallback if all tour dates are completed */
              <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#A67C2D]/30 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#F5F2E9] text-[#A67C2D] flex items-center justify-center mx-auto border border-[#A67C2D]/30">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-bebas text-3xl text-[#222B1E]">
                  NEUE TOURDATEN IN VORBEREITUNG!
                </h3>
                <p className="text-sm text-[#222B1E]/80 max-w-md mx-auto leading-relaxed">
                  Aktuell sind alle bisherigen Tourdaten absolviert. Die nächsten Haltestellen für Hannover und die Region werden in Kürze bekanntgegeben!
                </p>
                <div className="pt-2">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-xl px-6 py-2.5 rounded-xl font-bold shadow transition-all hover:scale-105"
                  >
                    <span>Foodtruck für dein privates Event anfragen</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            )}

            {/* Note about private events */}
            <div className="p-4 rounded-xl bg-[#F5F2E9] border border-[#A67C2D]/30 text-xs text-center text-[#222B1E]/70">
              🔒 <em>Hinweis:</em> Private Firmenfeiern, Geburtstage und Hochzeiten werden aus Datenschutzgründen nicht öffentlich aufgeführt.
            </div>
          </div>
        )}

        {/* Tab 2: News Articles */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {NEWS_ITEMS.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-[#A67C2D]/30 hover:border-[#222B1E] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#222B1E]/60 mb-2">
                    <span className="bg-[#222B1E] text-[#FEC72E] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-bebas text-2xl text-[#222B1E] leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#222B1E]/80 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  <p className="text-xs text-[#222B1E]/65 bg-[#F5F2E9] p-3 rounded-lg border border-[#A67C2D]/20 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between text-xs">
                  <span className="text-[#A67C2D] font-bold">FryCrew Hannover</span>
                  <a href="#booking" className="text-[#222B1E] hover:underline font-semibold flex items-center gap-1">
                    Anfrage stellen &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter / Ping Box */}
        <div className="mt-14 max-w-2xl mx-auto bg-[#222B1E] text-[#F5F2E9] rounded-2xl p-6 sm:p-8 border border-[#A67C2D] text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#FEC72E] text-[#222B1E] flex items-center justify-center mx-auto mb-2">
            <Bell className="w-5 h-5" />
          </div>
          <h3 className="font-bebas text-2xl text-[#F5F2E9]">
            KEINEN STANDORT IN HANNOVER VERPASSEN
          </h3>
          <p className="text-xs sm:text-sm text-[#F5F2E9]/80 max-w-lg mx-auto">
            Trage dich in unseren kostenlosen Hannover-Tour-Ticker ein. Wir informieren dich einmal im Monat über neue Termine und geheime Speisen-Specials.
          </p>

          {subscribed ? (
            <div className="p-3 bg-[#2D3928] border border-[#FEC72E] rounded-xl text-xs text-[#FEC72E] font-bold">
              ✓ Vielen Dank! Du bist jetzt für den FryCrew Hannover Tour-Ticker eingetragen.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Deine E-Mail-Adresse..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#181E15] border border-[#A67C2D]/60 rounded-xl px-4 py-2.5 text-xs text-[#F5F2E9] placeholder-gray-400 focus:outline-none focus:border-[#FEC72E] flex-1"
              />
              <button
                type="submit"
                className="bg-[#FEC72E] hover:bg-[#E8B320] text-[#222B1E] font-bebas text-lg px-5 py-2.5 rounded-xl font-bold cursor-pointer transition-colors shrink-0"
              >
                Eintragen
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
