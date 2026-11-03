import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatRON } from '../utils/formatters';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  ArrowLeft
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    vatAmount,
    total,
    itemsCount
  } = useCart();

  const navigate = useNavigate();
  const freeDeliveryThreshold = 2000;
  const progressToFreeDelivery = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

  if (cartItems.length === 0) {
    return (
      <div className="pt-36 pb-24 max-w-4xl mx-auto px-4 text-center">
        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-neutral-600" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-white">Coșul tău de cumpărături este gol</h1>
        <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto">
          Nu ai adăugat încă materiale sau produse de amenajare. Explorează catalogul nostru sau folosește AI Studio pentru a genera un deviz automat.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/shop"
            className="px-8 py-3.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:opacity-95"
          >
            Explorează Magazinul
          </Link>
          <Link
            to="/studio"
            className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase"
          >
            Deschide Studio AI
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Revizuire Comandă
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-white mt-1">
            Coșul Tău ({itemsCount} articole)
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="text-xs text-neutral-400 hover:text-rose-400 transition-colors self-start sm:self-auto"
        >
          Golește tot coșul
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Items Table/List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Free Delivery Bar */}
          <div className="p-4 rounded-2xl bg-[#141418] border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#D4AF37]" />
              <p className="text-xs text-neutral-300">
                {remainingForFreeDelivery === 0 ? (
                  <span className="text-emerald-400 font-semibold">
                    Beneficiezi de Livrare Gratuită prin transport securizat!
                  </span>
                ) : (
                  <span>
                    Mai adaugă produse de <strong className="text-white">{formatRON(remainingForFreeDelivery)}</strong> pentru Livrare Gratuită.
                  </span>
                )}
              </p>
            </div>
            <span className="text-xs font-mono text-[#D4AF37]">{Math.round(progressToFreeDelivery)}%</span>
          </div>

          <div className="space-y-3">
            {cartItems.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#121215]/90 border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                      {product.supplier}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-sm font-medium text-white hover:text-[#F5E6B8] transition-colors block truncate"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-neutral-400 mt-0.5">{product.category}</p>
                    <p className="text-xs font-semibold gold-gradient-text mt-1 sm:hidden">
                      {formatRON(product.price)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <span className="text-sm font-semibold text-white hidden sm:block font-mono">
                    {formatRON(product.price)}
                  </span>

                  {/* Quantity Control */}
                  <div className="flex items-center bg-[#17171C] border border-white/10 rounded-full px-2 py-1">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-1 text-neutral-400 hover:text-white"
                      aria-label="Scade"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-xs font-mono font-semibold text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-1 text-neutral-400 hover:text-white"
                      aria-label="Crește"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <span className="text-sm font-bold text-[#F5E6B8] min-w-24 text-right font-mono">
                    {formatRON(product.price * quantity)}
                  </span>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-2 text-neutral-500 hover:text-rose-400 transition-colors"
                    title="Șterge"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => navigate('/shop')}
              className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
              <span>Continuă Cumpărăturile</span>
            </button>
          </div>
        </div>

        {/* Order Summary Card (4 cols) */}
        <div className="lg:col-span-4">
          <div className="p-6 rounded-3xl bg-[#121215]/95 border border-[#D4AF37]/30 shadow-2xl space-y-6 sticky top-28">
            <h2 className="font-serif text-2xl text-white">Sumar Comandă</h2>

            <div className="space-y-3 text-xs border-b border-white/10 pb-4">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal ({itemsCount} articole)</span>
                <span className="text-white font-mono">{formatRON(subtotal)}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Cost Transport</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-400 font-semibold">GRATUIT</span>
                  ) : (
                    <span className="text-white font-mono">{formatRON(deliveryFee)}</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between text-neutral-500 text-[11px]">
                <span>TVA 19% inclusă</span>
                <span className="font-mono">{formatRON(vatAmount)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline">
              <span className="font-serif text-lg text-white">Total Final:</span>
              <span className="font-serif text-3xl font-bold gold-gradient-text font-mono">
                {formatRON(total)}
              </span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-4 px-6 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:opacity-95 transition-all group animate-shine"
            >
              <span>Continuă spre Checkout</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="space-y-2 text-[11px] text-neutral-400 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Factură fiscală emisă automat pe PJ sau PF</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Descărcare cu macara asigurată la șantier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
