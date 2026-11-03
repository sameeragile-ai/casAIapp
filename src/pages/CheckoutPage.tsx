import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatRON } from '../utils/formatters';
import { ROMANIAN_COUNTIES } from '../data/counties';
import { useToast } from '../context/ToastContext';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  CheckCircle2,
  ArrowRight,
  Truck,
  Building2,
  ArrowLeft,
  ShoppingBag
} from 'lucide-react';
import { motion } from 'framer-motion';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, deliveryFee, vatAmount, total, clearCart } = useCart();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    county: 'București',
    city: '',
    address: '',
    postalCode: '',
    notes: '',
    billingType: 'individual' as 'individual' | 'company',
    companyName: '',
    companyCUI: ''
  });

  const [cardData, setCardData] = useState({
    cardNumber: '4242 •••• •••• 4242',
    cardHolder: 'MIHAI POPESCU',
    expiry: '12/28',
    cvc: '884'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [completedOrderId, setCompletedOrderId] = useState('');

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="pt-36 pb-24 max-w-md mx-auto px-4 text-center">
        <ShoppingBag className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
        <h2 className="font-serif text-2xl text-white">Nu ai produse în coș</h2>
        <p className="text-xs text-neutral-400 mt-2">
          Adaugă materiale sau finisaje înainte de a accesa pagina de finalizare.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block px-6 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase"
        >
          Mergi la Magazin
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email || !formData.address || !formData.city) {
      showToast('Formular incomplet', 'Te rugăm să completezi toate câmpurile obligatorii de livrare.', 'error');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `CAS-RO-${Math.floor(10000 + Math.random() * 90000)}`;
      setCompletedOrderId(orderId);
      setIsProcessing(false);
      setOrderComplete(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F5E6B8', '#A67C2E', '#ffffff']
        });
      } catch (err) {
        console.warn(err);
      }

      clearCart();
      showToast('Comandă confirmată!', `Comanda ta ${orderId} a fost trimisă spre procesare.`, 'success', 5000);
    }, 1800);
  };

  if (orderComplete) {
    return (
      <div className="pt-36 pb-28 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-8 sm:p-12 rounded-3xl bg-[#121215] border border-[#D4AF37]/40 shadow-[0_20px_60px_-10px_rgba(212,175,55,0.2)] text-white space-y-6"
        >
          <div className="w-20 h-20 rounded-full gold-gradient-bg mx-auto flex items-center justify-center text-black shadow-xl">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Plată Procesată cu Succes · 3D Secure
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-white">
              Mulțumim pentru Comandă!
            </h1>
            <p className="text-sm text-neutral-300">
              Confirmarea comenzii și factura fiscală au fost trimise la <strong>{formData.email}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#17171C] border border-white/10 text-left space-y-2 text-xs">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-neutral-400">Număr Comandă:</span>
              <span className="font-mono font-bold text-[#F5E6B8]">{completedOrderId}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-neutral-400">Destinatar:</span>
              <span className="text-white font-medium">{formData.fullName} ({formData.phone})</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-neutral-400">Adresă Livrare:</span>
              <span className="text-white font-medium text-right">
                {formData.address}, {formData.city}, Jud. {formData.county}
              </span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-neutral-400">Total Încasat:</span>
              <span className="font-serif text-lg font-bold gold-gradient-text">
                {formatRON(total)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/studio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-lg hover:opacity-95"
            >
              Înapoi în Studio AI
            </Link>
            <Link
              to="/contractors"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase"
            >
              Găsește Constructori
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
          <span>Înapoi la Coș</span>
        </Link>
      </div>

      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Securizat SSL 256-bit
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-white mt-1">
          Finalizare Comandă & Detalii Șantier
        </h1>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Delivery details & Card (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Customer Contact */}
          <div className="p-6 rounded-3xl bg-[#121215]/90 border border-white/10 shadow-xl space-y-4">
            <h2 className="font-serif text-xl text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full gold-gradient-bg text-black text-xs font-bold flex items-center justify-center">
                1
              </span>
              Date de Contact & Facturare
            </h2>

            {/* PF / PJ Toggle */}
            <div className="flex gap-4 border-b border-white/5 pb-4 text-xs">
              <label className="flex items-center gap-2 text-neutral-300 cursor-pointer">
                <input
                  type="radio"
                  name="billingType"
                  checked={formData.billingType === 'individual'}
                  onChange={() => setFormData({ ...formData, billingType: 'individual' })}
                  className="accent-[#D4AF37]"
                />
                <span>Persoană Fizică</span>
              </label>
              <label className="flex items-center gap-2 text-neutral-300 cursor-pointer">
                <input
                  type="radio"
                  name="billingType"
                  checked={formData.billingType === 'company'}
                  onChange={() => setFormData({ ...formData, billingType: 'company' })}
                  className="accent-[#D4AF37]"
                />
                <span>Persoană Juridică (Firmă SRL / PFA)</span>
              </label>
            </div>

            {formData.billingType === 'company' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-black/40 border border-[#D4AF37]/30">
                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">Nume Companie *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="ex. ArhiCon Design SRL"
                    className="w-full p-2.5 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">Cod Fiscal (CUI) *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyCUI}
                    onChange={(e) => setFormData({ ...formData, companyCUI: e.target.value })}
                    placeholder="ex. RO 34189021"
                    className="w-full p-2.5 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                  Nume & Prenume *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Mihai Popescu"
                  className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                  Telefon Mobil *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0742 819 402"
                  className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                Adresă de Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="mihai.popescu@gmail.com"
                className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Step 2: Shipping Destination */}
          <div className="p-6 rounded-3xl bg-[#121215]/90 border border-white/10 shadow-xl space-y-4">
            <h2 className="font-serif text-xl text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full gold-gradient-bg text-black text-xs font-bold flex items-center justify-center">
                2
              </span>
              Locație Livrare & Șantier
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                  Județ *
                </label>
                <select
                  value={formData.county}
                  onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:border-[#D4AF37]"
                >
                  {ROMANIAN_COUNTIES.map((c) => (
                    <option key={c.name} value={c.name} className="bg-[#121215]">
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                  Localitate / Oraș *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="ex. Cluj-Napoca / Voluntari"
                  className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                Adresă Șantier / Stradă și Număr *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Str. Calea Florești nr. 45, bloc/parcelă..."
                className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                Instrucțiuni Acces Camion Șantier (Opțional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="ex. Drum de acces pietruit, necesar macara pentru descărcare paleți klinker..."
                className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-xs text-white resize-none"
              />
            </div>
          </div>

          {/* Step 3: Mock Stripe Payment Form */}
          <div className="p-6 rounded-3xl bg-[#121215]/90 border border-[#D4AF37]/35 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full gold-gradient-bg text-black text-xs font-bold flex items-center justify-center">
                  3
                </span>
                Plată Securizată Card (Mock Stripe)
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <Lock className="w-3.5 h-3.5" />
                <span>256-bit Encriptat</span>
              </div>
            </div>

            {/* Visual Card Mock */}
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#1E1E24] via-[#141418] to-[#27272F] border border-white/15 space-y-4 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  casAIapp Pay · Visa / Mastercard
                </span>
                <CreditCard className="w-5 h-5 text-neutral-400" />
              </div>

              <div>
                <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                  Număr Card
                </label>
                <input
                  type="text"
                  value={cardData.cardNumber}
                  onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-sm tracking-wider"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                    Expiră (LL/AA)
                  </label>
                  <input
                    type="text"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                    CVC / CVV
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    value={cardData.cvc}
                    onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Place Order (5 cols) */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-3xl bg-[#121215]/95 border border-[#D4AF37]/35 shadow-2xl space-y-6 sticky top-28">
            <h2 className="font-serif text-2xl text-white">Articole Comandate</h2>

            {/* Mini preview items */}
            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3 text-xs">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-white truncate font-medium">{product.name}</p>
                    <p className="text-[11px] text-neutral-400">
                      {quantity} × {formatRON(product.price)}
                    </p>
                  </div>
                  <span className="font-semibold text-white font-mono">
                    {formatRON(product.price * quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal</span>
                <span className="text-white font-mono">{formatRON(subtotal)}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Transport</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-400 font-semibold">GRATUIT</span>
                  ) : (
                    <span className="text-white font-mono">{formatRON(deliveryFee)}</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between text-neutral-500 text-[11px]">
                <span>TVA 19%</span>
                <span className="font-mono">{formatRON(vatAmount)}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                <span className="font-serif text-lg text-white">Total de Plată:</span>
                <span className="font-serif text-3xl font-bold gold-gradient-text font-mono">
                  {formatRON(total)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_30px_rgba(212,175,55,0.4)] hover:opacity-95 transition-all active:scale-[0.99] disabled:opacity-50 animate-shine"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Procesare Plată 3D Secure...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Plătește {formatRON(total)}</span>
                </>
              )}
            </button>

            <div className="text-[11px] text-neutral-400 text-center space-y-1">
              <p className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                Protecție cumpărător asigurată conform legislației României & UE.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
