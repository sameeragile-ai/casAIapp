import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_CONTRACTORS } from '../data/contractors';
import { formatRON } from '../utils/formatters';
import { QuoteRequestModal } from '../components/contractors/QuoteRequestModal';
import {
  Star,
  ShieldCheck,
  MapPin,
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  ArrowLeft,
  Award,
  Sparkles
} from 'lucide-react';

export const ContractorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const contractor =
    MOCK_CONTRACTORS.find((c) => c.id === id) || MOCK_CONTRACTORS[0];

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedPortfolioImage, setSelectedPortfolioImage] = useState<string>(
    contractor.portfolio[0] || contractor.coverImage
  );

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
          <span>Înapoi la Constructori</span>
        </button>
      </div>

      {/* Hero Cover Card */}
      <div className="relative rounded-3xl overflow-hidden bg-[#121215] border border-[#D4AF37]/35 shadow-2xl mb-10">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={contractor.coverImage}
            alt={contractor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent" />
        </div>

        <div className="relative -mt-16 sm:-mt-20 px-6 sm:px-10 pb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex items-end gap-5">
            <img
              src={contractor.logo}
              alt={contractor.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-xl bg-black"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {contractor.category}
                </span>
                {contractor.verified && (
                  <span className="px-2.5 py-0.5 rounded-full gold-gradient-bg text-black text-[10px] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> VERIFICAT
                  </span>
                )}
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl text-white font-medium">
                {contractor.name}
              </h1>
              <p className="text-xs text-neutral-400 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                {contractor.city}, Județul {contractor.county}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:opacity-95 transition-all animate-shine"
          >
            Cere Ofertă Tehnică
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 divide-x divide-white/10 bg-[#0E0E12] text-center py-4">
          <div>
            <span className="text-[10px] uppercase text-neutral-500 block">Rating Clienți</span>
            <div className="flex items-center justify-center gap-1 text-sm font-bold text-white mt-0.5">
              <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
              <span>{contractor.rating}</span>
              <span className="text-xs text-neutral-500">({contractor.reviewsCount})</span>
            </div>
          </div>
          <div>
            <span className="text-[10px] uppercase text-neutral-500 block">Experiență</span>
            <span className="text-sm font-bold text-white mt-0.5 block">
              {contractor.yearsInBusiness} Ani pe Piață
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-neutral-500 block">Proiecte Finalizate</span>
            <span className="text-sm font-bold text-white mt-0.5 block">
              {contractor.completedProjects}+ Lucrări
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-neutral-500 block">Tarif Orientativ</span>
            <span className="text-sm font-bold gold-gradient-text mt-0.5 block">
              de la {formatRON(contractor.startingPriceRON)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Description & Portfolio (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* About */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121215]/90 border border-white/5 space-y-4">
            <h2 className="font-serif text-2xl text-white">Despre Companie</h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {contractor.description}
            </p>

            {/* Badges / Certifications */}
            {contractor.partnerBadges && contractor.partnerBadges.length > 0 && (
              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-2">
                  Atestate & Parteneriate Oficiale
                </span>
                <div className="flex flex-wrap gap-2">
                  {contractor.partnerBadges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-[#D4AF37]/30 text-xs text-[#F5E6B8] flex items-center gap-1.5"
                    >
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Portfolio Showcase */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121215]/90 border border-white/5 space-y-4">
            <h2 className="font-serif text-2xl text-white">Galerie Proiecte Realizate</h2>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={selectedPortfolioImage}
                alt="Lucrare executată"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {contractor.portfolio.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPortfolioImage(img)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                    selectedPortfolioImage === img
                      ? 'border-[#D4AF37] scale-105'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Customer Reviews */}
          {contractor.reviews && contractor.reviews.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121215]/90 border border-white/5 space-y-4">
              <h2 className="font-serif text-2xl text-white">Recenzii Verificate</h2>
              <div className="space-y-4">
                {contractor.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-[#17171C]/70 border border-white/5 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-semibold text-white">{rev.author}</h4>
                        <p className="text-[10px] text-neutral-400">
                          {rev.city} · {rev.projectType}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-neutral-300 italic">"{rev.comment}"</p>
                    <span className="text-[10px] text-neutral-500 block">{rev.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Services & Direct Contact (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Services List */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121215]/90 border border-[#D4AF37]/30 shadow-xl space-y-4">
            <h3 className="font-serif text-2xl text-white">Servicii Oferite</h3>
            <div className="space-y-2.5">
              {contractor.services.map((srv, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:opacity-95"
              >
                Solicită Ofertă Personalizată
              </button>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="p-6 rounded-3xl bg-[#121215]/90 border border-white/5 space-y-3 text-xs">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Contact Direct
            </h4>
            <div className="space-y-2 text-neutral-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                {contractor.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                {contractor.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                {contractor.city}, Jud. {contractor.county}
              </p>
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestModal
        contractor={contractor}
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
};
