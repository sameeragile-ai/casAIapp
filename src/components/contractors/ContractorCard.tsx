import React, { useState } from 'react';
import { Contractor } from '../../types';
import { formatRON } from '../../utils/formatters';
import { Star, ShieldCheck, MapPin, Award, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuoteRequestModal } from './QuoteRequestModal';

interface ContractorCardProps {
  contractor: Contractor;
}

export const ContractorCard: React.FC<ContractorCardProps> = ({ contractor }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col rounded-2xl md:rounded-3xl bg-[#121215]/85 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden group hover:shadow-[0_15px_35px_-5px_rgba(212,175,55,0.12)] hover:-translate-y-1">
        {/* Cover Image & Badges */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#18181C]">
          <img
            src={contractor.coverImage}
            alt={contractor.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-black/30" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-amber-300 font-semibold border border-white/10">
              {contractor.category}
            </span>

            {contractor.verified && (
              <span className="px-2.5 py-1 rounded-full gold-gradient-bg text-black text-[10px] font-bold flex items-center gap-1 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                VERIFICAT
              </span>
            )}
          </div>

          {/* Location on bottom of image */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-neutral-300 font-medium bg-[#0A0A0B]/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{contractor.city}, Jud. {contractor.county}</span>
          </div>
        </div>

        {/* Contractor Details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 text-xs text-white">
                <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
                <span className="font-semibold">{contractor.rating}</span>
                <span className="text-neutral-500">({contractor.reviewsCount} recenzii)</span>
              </div>
              <span className="text-[11px] text-neutral-400">
                {contractor.yearsInBusiness} ani experiență
              </span>
            </div>

            <h3 className="font-serif text-lg sm:text-xl text-white font-medium mt-1.5 group-hover:text-[#F5E6B8] transition-colors line-clamp-1">
              {contractor.name}
            </h3>

            <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
              {contractor.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {contractor.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & Actions */}
          <div className="pt-3 border-t border-white/5">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-[11px] text-neutral-400">Tarif orientativ</span>
              <span className="text-sm font-semibold text-[#F5E6B8]">
                de la {formatRON(contractor.startingPriceRON)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="py-2.5 px-3 rounded-xl gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase text-center hover:opacity-95 shadow transition-opacity"
              >
                Cere Ofertă
              </button>
              <Link
                to={`/contractors/${contractor.id}`}
                className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-1"
              >
                <span>Profil</span>
                <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestModal
        contractor={contractor}
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};
