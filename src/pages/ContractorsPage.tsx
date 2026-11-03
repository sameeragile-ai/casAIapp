import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_CONTRACTORS } from '../data/contractors';
import { ROMANIAN_COUNTIES } from '../data/counties';
import { ContractorCategory } from '../types';
import { ContractorCard } from '../components/contractors/ContractorCard';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  HardHat,
  ShieldCheck,
  X,
  Award
} from 'lucide-react';

const CONTRACTOR_CATEGORIES: ContractorCategory[] = [
  'General Contractors',
  'Interior Designers',
  'PVC Windows',
  'Gate Automation & Rollers',
  'Electricians',
  'Plumbers',
  'Solar Installers',
  'HVAC & Heat Pumps',
  'Landscaping & Nursery',
  'Drywall & Finishing',
  'Epoxy Flooring',
  'Septic Systems'
];

export const ContractorsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCounty = searchParams.get('county') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCounty, setSelectedCounty] = useState<string>(initialCounty);
  const [onlyVerified, setOnlyVerified] = useState(false);

  const filteredContractors = useMemo(() => {
    return MOCK_CONTRACTORS.filter((contractor) => {
      const matchesSearch =
        contractor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contractor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contractor.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contractor.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || contractor.category === selectedCategory;

      const matchesCounty =
        selectedCounty === 'all' || contractor.county.toLowerCase() === selectedCounty.toLowerCase();

      const matchesVerified = !onlyVerified || contractor.verified;

      return matchesSearch && matchesCategory && matchesCounty && matchesVerified;
    });
  }, [searchQuery, selectedCategory, selectedCounty, onlyVerified]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedCounty('all');
    setOnlyVerified(false);
    setSearchParams({});
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Rețeaua Oficială de Meșteri & Birouri Tehnice
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white mt-2">
          Marketplace Constructori Verificați
        </h1>
        <p className="text-sm text-neutral-400 mt-2">
          Găsește constructori generali, electricieni ANRE, instalatori pompe de căldură și parteneri oficiali VEKA pentru șantierul tău.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Filters Sidebar (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="p-6 rounded-3xl bg-[#121215]/85 border border-[#D4AF37]/25 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
                Filtrează Echipele
              </span>
              {(selectedCategory !== 'all' ||
                selectedCounty !== 'all' ||
                searchQuery ||
                onlyVerified) && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Resetează
                </button>
              )}
            </div>

            {/* Search */}
            <div>
              <label className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1.5">
                Căutare Nume sau Serviciu
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ex. VEKA, pompe căldură..."
                  className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* County Filter (Județ) */}
            <div>
              <label className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1.5">
                Județ Șantier
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <select
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="all">Toată România (41 Județe + Buc)</option>
                  {ROMANIAN_COUNTIES.map((c) => (
                    <option key={c.name} value={c.name}>
                      Jud. {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Specialization Category */}
            <div>
              <label className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-2">
                Specializare Tehnică
              </label>
              <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    selectedCategory === 'all'
                      ? 'gold-gradient-bg text-black font-semibold'
                      : 'text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  <span>Toate Specializările</span>
                  <span className="text-[10px] opacity-75">{MOCK_CONTRACTORS.length}</span>
                </button>
                {CONTRACTOR_CATEGORIES.map((cat) => {
                  const count = MOCK_CONTRACTORS.filter((c) => c.category === cat).length;
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'gold-gradient-bg text-black font-semibold'
                          : 'text-neutral-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate pr-1">{cat}</span>
                      <span className="text-[10px] opacity-75 shrink-0">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Verified Only Toggle */}
            <div className="pt-2 border-t border-white/5">
              <label className="flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyVerified}
                  onChange={(e) => setOnlyVerified(e.target.checked)}
                  className="rounded accent-[#D4AF37] w-4 h-4"
                />
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Doar Echipe Verificate casAIapp
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Contractor Cards Grid (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          <div className="p-4 rounded-2xl bg-[#121215]/80 border border-white/5 flex items-center justify-between text-xs text-neutral-400">
            <span>
              Afișare <strong className="text-white">{filteredContractors.length}</strong> firme și echipe active
            </span>
            <div className="flex items-center gap-1 text-[11px] text-amber-300 font-medium">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              Toți constructorii au portofoliu verificat pe teren
            </div>
          </div>

          {filteredContractors.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-[#121215]/50 border border-white/5">
              <p className="font-serif text-2xl text-white">Nu am găsit echipe pentru filtrele selectate</p>
              <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto">
                Încearcă să selectezi "Toată România" sau o categorie tehnică mai largă.
              </p>
              <button
                onClick={resetFilters}
                className="mt-5 px-6 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase"
              >
                Resetează Filtrele
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredContractors.map((contractor) => (
                <ContractorCard key={contractor.id} contractor={contractor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
