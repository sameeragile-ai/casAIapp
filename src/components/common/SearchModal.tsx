import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ShoppingBag, HardHat, ArrowRight, Star, MapPin } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/products';
import { MOCK_CONTRACTORS } from '../../data/contractors';
import { Product, Contractor } from '../../types';
import { formatRON } from '../../utils/formatters';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'products' | 'contractors'>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const cleanQuery = query.trim().toLowerCase();

  const filteredProducts: Product[] = query
    ? MOCK_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          p.supplier.toLowerCase().includes(cleanQuery) ||
          p.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const filteredContractors: Contractor[] = query
    ? MOCK_CONTRACTORS.filter(
        (c) =>
          c.name.toLowerCase().includes(cleanQuery) ||
          c.category.toLowerCase().includes(cleanQuery) ||
          c.city.toLowerCase().includes(cleanQuery) ||
          c.county.toLowerCase().includes(cleanQuery) ||
          c.tags.some((t) => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const handleSelectProduct = (id: string) => {
    onClose();
    navigate(`/product/${id}`);
  };

  const handleSelectContractor = (id: string) => {
    onClose();
    navigate(`/contractors/${id}`);
  };

  const suggestions = [
    'Canapea modulară',
    'Pompă de căldură',
    'Tâmplărie VEKA',
    'Calacatta Gold',
    'Panouri fotovoltaice',
    'Piscină îngropată',
    'Cluj-Napoca'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0B]/85 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-3xl rounded-3xl bg-[#121215]/95 border border-[#D4AF37]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col max-h-[82vh]"
          >
            {/* Search Input Bar */}
            <div className="p-5 md:p-6 border-b border-white/10 flex items-center gap-4">
              <Search className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Caută materiale, finisaje, mobilier sau firme de construcții..."
                className="w-full bg-transparent text-lg md:text-xl text-white placeholder-neutral-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 px-6 py-2.5 bg-[#0A0A0B]/60 border-b border-white/5 text-xs">
              <span className="text-neutral-500 text-[11px] uppercase tracking-wider mr-2">Filtru:</span>
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded-full transition-all ${
                  filterType === 'all'
                    ? 'gold-gradient-bg text-black font-semibold'
                    : 'text-neutral-400 hover:text-white bg-white/5'
                }`}
              >
                Toate ({filteredProducts.length + filteredContractors.length})
              </button>
              <button
                onClick={() => setFilterType('products')}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                  filterType === 'products'
                    ? 'gold-gradient-bg text-black font-semibold'
                    : 'text-neutral-400 hover:text-white bg-white/5'
                }`}
              >
                <ShoppingBag className="w-3 h-3" /> Produse ({filteredProducts.length})
              </button>
              <button
                onClick={() => setFilterType('contractors')}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                  filterType === 'contractors'
                    ? 'gold-gradient-bg text-black font-semibold'
                    : 'text-neutral-400 hover:text-white bg-white/5'
                }`}
              >
                <HardHat className="w-3 h-3" /> Constructori ({filteredContractors.length})
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {!query && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                    Căutări populare în România
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((sug) => (
                      <button
                        key={sug}
                        onClick={() => setQuery(sug)}
                        className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#D4AF37]/15 hover:border-[#D4AF37]/40 border border-white/10 text-xs text-neutral-300 hover:text-white transition-colors"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Results */}
              {(filterType === 'all' || filterType === 'products') && filteredProducts.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg text-white mb-3 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                    Produse & Materiale ({filteredProducts.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredProducts.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => handleSelectProduct(prod.id)}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-[#17171C]/60 hover:bg-[#1E1E24] border border-white/5 hover:border-[#D4AF37]/40 cursor-pointer transition-all group"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                            {prod.supplier}
                          </span>
                          <h4 className="text-xs font-medium text-white truncate group-hover:text-[#F5E6B8] transition-colors">
                            {prod.name}
                          </h4>
                          <p className="text-xs font-semibold gold-gradient-text mt-0.5">
                            {formatRON(prod.price)}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contractors Results */}
              {(filterType === 'all' || filterType === 'contractors') && filteredContractors.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg text-white mb-3 flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-[#D4AF37]" />
                    Firme & Meseriași Verificați ({filteredContractors.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredContractors.map((cont) => (
                      <div
                        key={cont.id}
                        onClick={() => handleSelectContractor(cont.id)}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-[#17171C]/60 hover:bg-[#1E1E24] border border-white/5 hover:border-[#D4AF37]/40 cursor-pointer transition-all group"
                      >
                        <img
                          src={cont.coverImage}
                          alt={cont.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">
                              {cont.category}
                            </span>
                            <span className="flex items-center gap-0.5 text-[10px] text-[#D4AF37]">
                              <Star className="w-3 h-3 fill-current" /> {cont.rating}
                            </span>
                          </div>
                          <h4 className="text-xs font-medium text-white truncate group-hover:text-[#F5E6B8] transition-colors">
                            {cont.name}
                          </h4>
                          <p className="text-[11px] text-neutral-400 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#D4AF37]" /> {cont.city}, {cont.county}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {query && filteredProducts.length === 0 && filteredContractors.length === 0 && (
                <div className="py-12 text-center text-neutral-400">
                  <p className="font-serif text-xl text-neutral-300">Nu am găsit rezultate pentru "{query}"</p>
                  <p className="text-xs mt-1 text-neutral-500">
                    Încearcă termeni mai generali, precum "parchet", "fațadă", "Cluj", sau "pompă".
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
