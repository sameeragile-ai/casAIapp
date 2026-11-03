import React, { useState } from 'react';
import { INITIAL_LEADS } from '../data/leads';
import { ROMANIAN_COUNTIES } from '../data/counties';
import { Lead } from '../types';
import { formatRON } from '../utils/formatters';
import { useToast } from '../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Unlock,
  TrendingUp,
  CreditCard,
  MapPin,
  Calendar,
  Lock,
  Phone,
  CheckCircle,
  Eye,
  SlidersHorizontal,
  LayoutDashboard,
  Bell,
  Briefcase,
  X
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { showToast } = useToast();
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [selectedCounty, setSelectedCounty] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'leads' | 'stats' | 'profile'>('leads');

  // Modal for unlocking lead
  const [selectedLeadToUnlock, setSelectedLeadToUnlock] = useState<Lead | null>(null);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const filteredLeads = selectedCounty === 'all'
    ? leads
    : leads.filter((l) => l.county.toLowerCase() === selectedCounty.toLowerCase());

  const unlockedCount = leads.filter((l) => l.status === 'unlocked').length;
  const totalSpend = leads
    .filter((l) => l.status === 'unlocked')
    .reduce((acc, l) => acc + l.unlockFeeRON, 0);

  const handleUnlockLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLeadToUnlock) return;

    setIsUnlocking(true);

    setTimeout(() => {
      setLeads((prev) =>
        prev.map((l) =>
          l.id === selectedLeadToUnlock.id ? { ...l, status: 'unlocked' } : l
        )
      );
      setIsUnlocking(false);
      showToast(
        'Lead Deblocat!',
        `Numărul de contact pentru ${selectedLeadToUnlock.clientName} este acum vizibil.`,
        'success'
      );
      setSelectedLeadToUnlock(null);
    }, 1200);
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Welcome Band */}
      <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-[#17171C] via-[#121215] to-[#17171C] border border-[#D4AF37]/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
            Portal B2B Constructori & Proiectanți
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-white mt-1">
            Nordic Build Transilvania · Panou de Control
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            Lead-uri calificate din schițele clienților care au generat devize de materiale casAIapp.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Abonament Pro Activ
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Navigation (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="p-4 rounded-3xl bg-[#121215]/90 border border-white/5 space-y-2">
            <button
              onClick={() => setActiveTab('leads')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-colors ${
                activeTab === 'leads'
                  ? 'gold-gradient-bg text-black shadow-lg'
                  : 'text-neutral-300 hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Feed Lead-uri ({filteredLeads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('stats')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-colors ${
                activeTab === 'stats'
                  ? 'gold-gradient-bg text-black shadow-lg'
                  : 'text-neutral-300 hover:bg-white/5'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Performanță & Grafice</span>
            </button>
          </div>

          {/* Filter by County */}
          <div className="p-5 rounded-3xl bg-[#121215]/90 border border-white/5 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
              Filtrează după Județ
            </span>
            <select
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:border-[#D4AF37]"
            >
              <option value="all">Toate Județele ({leads.length})</option>
              {ROMANIAN_COUNTIES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Help box */}
          <div className="p-5 rounded-3xl bg-[#17171C]/50 border border-white/5 text-xs text-neutral-400 space-y-2">
            <p className="text-white font-medium">Cum funcționează deblocarea?</p>
            <p className="leading-relaxed text-[11px]">
              Fiecare lead provine de la un proprietar care a încărcat planul casei și a confirmat bugetul de materiale. Deblocarea costă între 50 și 250 RON și îți oferă numărul direct al clientului.
            </p>
          </div>
        </div>

        {/* Main Content Area (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#121215]/90 border border-white/5">
              <span className="text-[10px] uppercase text-neutral-400 block">Lead-uri Noi</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 block">
                {leads.filter((l) => l.status === 'new').length}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#121215]/90 border border-white/5">
              <span className="text-[10px] uppercase text-neutral-400 block">Lead-uri Deblocate</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text mt-1 block">
                {unlockedCount}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#121215]/90 border border-white/5">
              <span className="text-[10px] uppercase text-neutral-400 block">Rată Conversie</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 block">
                42.8%
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#121215]/90 border border-white/5">
              <span className="text-[10px] uppercase text-neutral-400 block">Investiție Totală</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F5E6B8] mt-1 block font-mono">
                {formatRON(totalSpend)}
              </span>
            </div>
          </div>

          {activeTab === 'stats' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121215]/90 border border-[#D4AF37]/25 space-y-6">
              <h3 className="font-serif text-2xl text-white">Evoluție Venituri & Contracte Semnate</h3>
              {/* Responsive SVG Chart */}
              <div className="w-full h-64 relative pt-4">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#27272A" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="600" y2="90" stroke="#27272A" strokeDasharray="4 4" />
                  <line x1="0" y1="140" x2="600" y2="140" stroke="#27272A" strokeDasharray="4 4" />
                  {/* Area fill */}
                  <polygon
                    points="0,170 100,140 200,110 300,130 400,60 500,80 600,30 600,200 0,200"
                    fill="url(#chartGrad)"
                  />
                  {/* Stroke line */}
                  <polyline
                    points="0,170 100,140 200,110 300,130 400,60 500,80 600,30"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Circles */}
                  {[
                    [100, 140],
                    [200, 110],
                    [300, 130],
                    [400, 60],
                    [500, 80],
                    [600, 30]
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="5" fill="#F5E6B8" stroke="#0A0A0B" strokeWidth="2" />
                  ))}
                </svg>
              </div>

              <div className="flex justify-between text-xs text-neutral-400 border-t border-white/5 pt-3">
                <span>Mai</span>
                <span>Iun</span>
                <span>Iul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span className="text-[#D4AF37] font-semibold">Noiembrie (Curent)</span>
              </div>
            </div>
          )}

          {/* Leads Feed List */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Se afișează cererile verificate pentru <strong>{selectedCounty === 'all' ? 'Toate Județele' : selectedCounty}</strong></span>
                <span className="text-[#D4AF37]">{filteredLeads.length} proiecte</span>
              </div>

              {filteredLeads.map((lead) => {
                const isUnlocked = lead.status === 'unlocked';
                return (
                  <div
                    key={lead.id}
                    className="p-5 sm:p-6 rounded-3xl bg-[#121215]/90 border border-white/5 hover:border-[#D4AF37]/35 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <img
                        src={lead.renderThumbnail}
                        alt="Thumbnail"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-white/10 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                            {lead.city}, Jud. {lead.county}
                          </span>
                          <span className="text-[10px] text-neutral-500">· {lead.date}</span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                          {lead.projectType}
                        </h3>

                        <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                          "{lead.notes}"
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                          <span className="text-neutral-300">
                            Suprafață: <strong className="text-white">{lead.sqm} mp</strong>
                          </span>
                          <span>·</span>
                          <span className="text-neutral-300">
                            Buget Estimat: <strong className="text-[#F5E6B8]">{formatRON(lead.budgetRON)}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Action: Phone Number or Unlock CTA */}
                    <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                      {isUnlocked ? (
                        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-right">
                          <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold block">
                            Contact Deblocat
                          </span>
                          <a
                            href={`tel:${lead.realPhone}`}
                            className="font-mono text-sm font-bold text-white hover:text-emerald-300 flex items-center justify-end gap-1.5 mt-0.5"
                          >
                            <Phone className="w-3.5 h-3.5 text-emerald-400" />
                            {lead.realPhone}
                          </a>
                        </div>
                      ) : (
                        <div className="flex flex-col items-stretch md:items-end gap-2">
                          <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                            <Lock className="w-3.5 h-3.5 text-neutral-500" />
                            <span>{lead.maskedPhone}</span>
                          </div>
                          <button
                            onClick={() => setSelectedLeadToUnlock(lead)}
                            className="px-5 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-lg hover:opacity-95 transition-all animate-shine"
                          >
                            Deblochează Lead · {formatRON(lead.unlockFeeRON)}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Mock Stripe Modal for Unlocking Lead */}
      <AnimatePresence>
        {selectedLeadToUnlock && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeadToUnlock(null)}
              className="fixed inset-0 bg-[#0A0A0B]/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md rounded-3xl bg-[#121215] border border-[#D4AF37]/35 shadow-2xl p-6 sm:p-8 space-y-6 text-white z-10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Plată Securizată Lead
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white mt-0.5">
                    Deblocare Date Contact
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedLeadToUnlock(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#17171C] border border-white/5 space-y-1.5 text-xs">
                <p className="text-white font-medium">{selectedLeadToUnlock.clientName}</p>
                <p className="text-neutral-400">
                  {selectedLeadToUnlock.projectType} ({selectedLeadToUnlock.city}, Jud. {selectedLeadToUnlock.county})
                </p>
                <div className="flex justify-between pt-2 border-t border-white/5">
                  <span className="text-neutral-400">Taxă deblocare unică:</span>
                  <span className="font-bold gold-gradient-text text-sm">
                    {formatRON(selectedLeadToUnlock.unlockFeeRON)}
                  </span>
                </div>
              </div>

              <form onSubmit={handleUnlockLead} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                    Card Salvat
                  </label>
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono flex items-center justify-between text-neutral-300">
                    <span>•••• •••• •••• 4242 (Visa)</span>
                    <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isUnlocking}
                  className="w-full py-3.5 px-6 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:opacity-95 transition-opacity disabled:opacity-50"
                >
                  {isUnlocking ? 'Se procesează plata...' : `Confirmă & Plătește ${formatRON(selectedLeadToUnlock.unlockFeeRON)}`}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
