import React, { useState, useEffect, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/shop/ProductCard';
import { ProductCategory, Supplier } from '../types';
import { Search, SlidersHorizontal, LayoutGrid, List, Sparkles, X, ArrowUpDown } from 'lucide-react';
import { formatRON } from '../utils/formatters';

const CATEGORIES: ProductCategory[] = [
  'Furniture',
  'Lighting',
  'Building Materials',
  'Drywall & Insulation',
  'Flooring',
  'Bathroom & Spa',
  'Appliances',
  'Outdoor & Pool',
  'Smart Home'
];

const SUPPLIERS: Supplier[] = [
  'Somproduct',
  'Vivre',
  'MatHaus',
  'Dedeman',
  'eMAG Home',
  'IKEA România'
];

export const ShopPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupplier, setSelectedSupplier] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number>(100000);
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);

  // 600ms skeleton shimmer on mount as specified in requirements
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesSupplier =
        selectedSupplier === 'all' || product.supplier === selectedSupplier;

      const matchesPrice = product.price <= priceRange;

      return matchesSearch && matchesCategory && matchesSupplier && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount; // popular
    });
  }, [searchQuery, selectedCategory, selectedSupplier, priceRange, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSupplier('all');
    setPriceRange(100000);
    setSortBy('popular');
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Furnizori Oficiali & Stocuri Reale
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white mt-2">
          Shop Materiale & Mobilier
        </h1>
        <p className="text-sm text-neutral-400 mt-2">
          Finisaje arhitecturale, pompe de căldură, tâmplărie și canapele modulare de la Dedeman, MatHaus, Somproduct și IKEA România.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Filters Sidebar (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="p-6 rounded-3xl bg-[#121215]/85 border border-[#D4AF37]/20 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
                Filtrează Catalogul
              </span>
              {(selectedCategory !== 'all' ||
                selectedSupplier !== 'all' ||
                searchQuery ||
                priceRange < 100000) && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Resetează
                </button>
              )}
            </div>

            {/* Search within shop */}
            <div>
              <label className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1.5">
                Căutare Rapidă
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Caută în catalog..."
                  className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-2">
                Categorii de Produse
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    selectedCategory === 'all'
                      ? 'gold-gradient-bg text-black font-semibold'
                      : 'text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  <span>Toate Categoriile</span>
                  <span className="text-[10px] opacity-75">{MOCK_PRODUCTS.length}</span>
                </button>
                {CATEGORIES.map((cat) => {
                  const count = MOCK_PRODUCTS.filter((p) => p.category === cat).length;
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
                      <span>{cat}</span>
                      <span className="text-[10px] opacity-75">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Supplier Filter */}
            <div>
              <label className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-2">
                Furnizor Partener
              </label>
              <select
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="all">Toți Furnizorii</option>
                {SUPPLIERS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <label className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Preț Maxim
                </label>
                <span className="text-white font-semibold font-mono">
                  {formatRON(priceRange)}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="100000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>50 RON</span>
                <span>100.000 RON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid / List Area (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {/* Top Bar: Sort & View Mode */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#121215]/80 border border-white/5">
            <span className="text-xs text-neutral-400">
              Afișare <strong className="text-white">{filteredProducts.length}</strong> produse
            </span>

            <div className="flex items-center gap-3">
              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#17171C] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="popular">Cele mai populare</option>
                  <option value="price-asc">Preț: Crescător</option>
                  <option value="price-desc">Preț: Descrescător</option>
                  <option value="rating">Cele mai apreciate</option>
                </select>
              </div>

              {/* Grid / List toggle */}
              <div className="flex items-center bg-[#17171C] border border-white/10 rounded-xl p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'gold-gradient-bg text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  aria-label="Vizualizare Grid"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'gold-gradient-bg text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  aria-label="Vizualizare Listă"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Skeleton Loaders (600ms on first load) */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-[#141418] border border-white/5 overflow-hidden animate-pulse h-96 flex flex-col justify-between p-5"
                >
                  <div className="w-full h-48 bg-white/5 rounded-2xl" />
                  <div className="space-y-3 pt-4">
                    <div className="w-24 h-3 bg-white/5 rounded" />
                    <div className="w-3/4 h-5 bg-white/5 rounded" />
                    <div className="w-1/2 h-4 bg-white/5 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-[#121215]/50 border border-white/5">
              <p className="font-serif text-2xl text-white">Niciun produs nu corespunde filtrelor</p>
              <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto">
                Încearcă să resetezi categoria sau să extinzi plaja de preț pentru a vizualiza stocurile disponibile.
              </p>
              <button
                onClick={resetFilters}
                className="mt-5 px-6 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase"
              >
                Resetează Filtrele
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
