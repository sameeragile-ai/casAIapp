import React from 'react';
import { Product } from '../../types';
import { formatRON } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  if (viewMode === 'list') {
    return (
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col sm:flex-row items-stretch gap-5 p-4 rounded-2xl bg-[#121215]/80 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        <div className="w-full sm:w-48 h-48 sm:h-auto rounded-xl overflow-hidden relative shrink-0">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {discountPercent > 0 && (
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md gold-gradient-bg text-black text-[10px] font-bold">
              -{discountPercent}%
            </span>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                {product.supplier}
              </span>
              <div className="flex items-center gap-1 text-xs text-neutral-300">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
                <span>{product.rating}</span>
                <span className="text-neutral-500">({product.reviewsCount})</span>
              </div>
            </div>
            <h3 className="font-serif text-lg text-white mt-1 group-hover:text-[#F5E6B8] transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl font-bold text-white">
                  {formatRON(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-neutral-500 line-through">
                    {formatRON(product.oldPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-emerald-400 font-medium">În stoc · Livrare rapidă</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-5 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 hover:opacity-95 shadow transition-all active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Adaugă în coș</span>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col rounded-2xl md:rounded-3xl bg-[#121215]/80 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden group hover:shadow-[0_15px_35px_-5px_rgba(212,175,55,0.12)] hover:-translate-y-1"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#18181C]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md gold-gradient-bg text-black text-[10px] font-bold shadow-md">
            -{discountPercent}%
          </span>
        )}

        {/* Quick Add Overlay on desktop hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
          <button
            onClick={handleAddToCart}
            className="p-2.5 rounded-full gold-gradient-bg text-black font-semibold shadow-lg hover:scale-110 active:scale-95 transition-transform"
            title="Adaugă în coș"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="uppercase tracking-wider text-[#D4AF37] font-semibold">
              {product.supplier}
            </span>
            <div className="flex items-center gap-1 text-neutral-300">
              <Star className="w-3 h-3 text-[#D4AF37] fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="font-serif text-base sm:text-lg text-white font-medium line-clamp-2 leading-snug group-hover:text-[#F5E6B8] transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-bold text-white">
                {formatRON(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-[11px] text-neutral-500 line-through">
                  {formatRON(product.oldPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-neutral-400 block">{product.category}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="sm:hidden px-3 py-1.5 rounded-full gold-gradient-bg text-black text-xs font-semibold"
          >
            + Coș
          </button>
        </div>
      </div>
    </Link>
  );
};
