import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Check, Mail, Phone, MapPin } from 'lucide-react';
import { MAJOR_HUBS } from '../../data/counties';
import { useToast } from '../../context/ToastContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Adresă de email invalidă', 'Te rugăm să introduci un email valid.', 'error');
      return;
    }
    setSubscribed(true);
    showToast(
      'Abonare confirmată!',
      'Vei primi noutăți din arhitectura românească și rapoarte de prețuri.',
      'success'
    );
    setEmail('');
  };

  return (
    <footer className="bg-[#070708] border-t border-[#D4AF37]/20 text-neutral-400 relative overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      {/* Top Newsletter & Brand CTA banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Ediție Arhitectură Rezidențială 2024 / 2025
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mt-2 leading-tight">
              Construiești sau renovezi în România?
            </h3>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl">
              Primește lunar ghidul de costuri materiale pe metru pătrat, analize de Certificat de Urbanism și selecții de proiecte de la cei mai buni constructori.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introdu adresa ta de email..."
                  className="w-full pl-11 pr-32 py-3.5 rounded-full bg-[#121215] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1 hover:opacity-95 shadow transition-all"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Abonat</span>
                    </>
                  ) : (
                    <>
                      <span>Abonează-te</span>
                      <ArrowRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-[#D4AF37]/40 flex items-center justify-center bg-[#121215]">
                <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M20 75V40L50 18L80 40V75H62V52H38V75H20Z"
                    stroke="url(#ftGoldLogo)"
                    strokeWidth="8"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="ftGoldLogo" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F5E6B8" />
                      <stop offset="0.45" stopColor="#D4AF37" />
                      <stop offset="1" stopColor="#A67C2E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="font-serif text-2xl tracking-wide">
                <span className="text-white">cas</span>
                <span className="gold-gradient-text font-bold px-0.5">AI</span>
                <span className="text-neutral-200">app.ro</span>
              </div>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Platforma inteligentă de arhitectură care unește randările generative de înaltă fidelitate cu bugetarea materialelor reale în RON și piața constructorilor verificați din România.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-neutral-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                Str. Calea Victoriei 155, București, România
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                +40 21 990 4200 (L-V 09:00 - 18:00)
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                suport@casai-app.ro
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
              Platformă
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/studio" className="hover:text-[#F5E6B8] transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Studio Randare AI
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Shop Materiale & Finisaje
                </Link>
              </li>
              <li>
                <Link to="/contractors" className="hover:text-white transition-colors">
                  Marketplace Constructori
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Planuri & Abonamente
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors text-amber-300">
                  Portal Constructori & Lead-uri
                </Link>
              </li>
            </ul>
          </div>

          {/* Hubs Covered */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
              Județe & Hub-uri Active
            </h4>
            <ul className="space-y-2 text-xs">
              {MAJOR_HUBS.map((hub) => (
                <li key={hub}>
                  <Link
                    to={`/contractors?county=${encodeURIComponent(hub.split(' ')[0])}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {hub}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories & Trust */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
              Furnizori & Parteneri
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-neutral-400">Somproduct & Vivre</li>
              <li className="text-neutral-400">MatHaus & Dedeman</li>
              <li className="text-neutral-400">eMAG Home & IKEA România</li>
              <li className="text-neutral-400">VEKA & Salamander Partner</li>
              <li className="text-neutral-400">Instalatori Atestați ANRE</li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <a
                href="https://anpc.ro"
                target="_blank"
                rel="noreferrer"
                className="block text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                ANPC — Protecția Consumatorilor
              </a>
              <a
                href="https://reclamatiisal.anpc.ro"
                target="_blank"
                rel="noreferrer"
                className="block text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                SAL — Soluționarea Alternativă a Litigiilor
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} casAIapp.ro. Toate drepturile rezervate. Made with precision for Romanian Architecture.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hover:text-white cursor-pointer transition-colors">Termeni și Condiții</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Politica de Confidențialitate</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Politica Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
