import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data/products';
import { formatRON } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/shop/ProductCard';
import {
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Plus,
  Minus,
  ArrowLeft,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const product = MOCK_PRODUCTS.find((p) => p.id === id) || MOCK_PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copiat!', 'Adresa produsului a fost copiată în clipboard.', 'info');
    }
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back link */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
          <span>Înapoi la Catalog</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Gallery (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#18181C] border border-[#D4AF37]/25 shadow-2xl">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full gold-gradient-bg text-black text-xs font-bold shadow-lg">
                Reducere -{discountPercent}%
              </span>
            )}
            <button
              onClick={handleShare}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-[#D4AF37] transition-colors"
              title="Distribuie"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImage === img
                      ? 'border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Specs & Purchasing (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Furnizor Oficial: {product.supplier}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
                <span className="font-semibold text-white">{product.rating}</span>
                <span className="text-neutral-500">({product.reviewsCount} evaluări)</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-white mt-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-xs text-neutral-500 mt-1">Cod SKU: {product.sku}</p>
          </div>

          {/* Price & Stock */}
          <div className="p-5 rounded-2xl bg-[#141418] border border-white/5 flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text">
                  {formatRON(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-neutral-500 line-through">
                    {formatRON(product.oldPrice)}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">Preț include TVA 19%</p>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              În Stoc la Depozit
            </span>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <div className="flex items-center justify-between bg-[#141418] border border-white/10 rounded-full px-3 py-1.5 sm:w-36">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 text-neutral-400 hover:text-white"
                aria-label="Scade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-semibold text-white text-sm font-mono">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 text-neutral-400 hover:text-white"
                aria-label="Crește"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 py-4 px-8 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:opacity-95 transition-all active:scale-[0.99] animate-shine"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>Adaugă în coș — {formatRON(product.price * quantity)}</span>
            </button>
          </div>

          {/* Delivery & Assurance info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5 text-xs text-neutral-400">
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Livrare gratuită la comenzi &gt; 2.000 RON</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Garanție producător 2-10 ani</span>
            </div>
            <div className="flex items-center gap-2.5">
              <RotateCcw className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Retur fără complicații 14 zile</span>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <h3 className="font-serif text-xl text-white">Specificații Tehnice</h3>
            <div className="rounded-2xl bg-[#141418] border border-white/5 overflow-hidden divide-y divide-white/5 text-xs">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between p-3.5">
                  <span className="text-neutral-400">{key}</span>
                  <span className="text-white font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Recomandate pentru Proiectul Tău
            </h2>
            <Link to="/shop" className="text-xs text-[#F5E6B8] hover:underline">
              Vezi Toate →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
