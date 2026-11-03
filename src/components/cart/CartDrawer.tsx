import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatRON } from '../../utils/formatters';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
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

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleViewShop = () => {
    setIsCartOpen(false);
    navigate('/shop');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-[#0D0D0F] border-l border-[#D4AF37]/20 text-white flex flex-col shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30">
                    <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl tracking-wide text-white">Coșul Tău</h2>
                    <p className="text-xs text-neutral-400">
                      {itemsCount} {itemsCount === 1 ? 'articol' : 'articole'} selectate
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {cartItems.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-neutral-400 hover:text-rose-400 transition-colors"
                      title="Golește coșul"
                    >
                      Golește
                    </button>
                  )}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    aria-label="Închide"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Free delivery tracker */}
              <div className="bg-[#141417] px-6 py-3 border-b border-white/5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {remainingForFreeDelivery === 0 ? (
                      <span className="text-emerald-400 font-medium">Livrare Gratuită aplicată!</span>
                    ) : (
                      <span>
                        Adaugă încă <strong className="text-white">{formatRON(remainingForFreeDelivery)}</strong> pentru livrare gratuită
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] text-neutral-400">{Math.round(progressToFreeDelivery)}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full gold-gradient-bg"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressToFreeDelivery}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <ShoppingBag className="w-9 h-9 text-neutral-600" />
                    </div>
                    <p className="font-serif text-xl text-neutral-300">Coșul tău este gol</p>
                    <p className="text-xs text-neutral-500 max-w-xs mt-1 mb-6">
                      Explorează finisajele de lux și materialele selectate pentru proiectul tău rezidențial.
                    </p>
                    <button
                      onClick={handleViewShop}
                      className="px-6 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase hover:opacity-95 shadow-lg"
                    >
                      Descoperă Magazinul
                    </button>
                  </div>
                ) : (
                  cartItems.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3 rounded-2xl bg-[#141417]/80 border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                              {product.supplier}
                            </span>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-neutral-500 hover:text-rose-400 transition-colors p-0.5"
                              title="Șterge"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <h4 className="text-xs font-medium text-white line-clamp-1 mt-0.5">
                            {product.name}
                          </h4>
                          <p className="text-xs font-semibold gold-gradient-text mt-1">
                            {formatRON(product.price)}
                          </p>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                          <div className="flex items-center gap-2 bg-[#0A0A0B] border border-white/10 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white"
                              aria-label="Scade cantitate"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-medium w-5 text-center text-white">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white"
                              aria-label="Crește cantitate"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-xs font-semibold text-neutral-200">
                            {formatRON(product.price * quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#121215] space-y-3">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-neutral-400">
                      <span>Subtotal produse</span>
                      <span className="font-medium text-white">{formatRON(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Transport securizat</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span className="text-emerald-400 font-medium">GRATUIT</span>
                        ) : (
                          formatRON(deliveryFee)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-500 text-[11px]">
                      <span>TVA 19% (inclus)</span>
                      <span>{formatRON(vatAmount)}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                    <span className="font-serif text-base text-neutral-200">Total de Plată</span>
                    <span className="font-serif text-2xl font-bold gold-gradient-text">
                      {formatRON(total)}
                    </span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 px-6 rounded-full gold-gradient-bg text-black font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-95 shadow-xl transition-all group"
                  >
                    <span>Finalizează Comanda</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Plată Securizată 3D Secure
                    </span>
                    <span>·</span>
                    <span>Retur 14 zile</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
