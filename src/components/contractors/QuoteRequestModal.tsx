import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Calendar, Phone, Mail, User, MapPin } from 'lucide-react';
import { Contractor } from '../../types';
import { ROMANIAN_COUNTIES } from '../../data/counties';
import { useToast } from '../../context/ToastContext';

interface QuoteRequestModalProps {
  contractor: Contractor | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  contractor,
  isOpen,
  onClose
}) => {
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    county: contractor?.county || 'București',
    city: '',
    projectType: contractor?.category || 'General Contractors',
    estimatedBudget: 'Peste 50.000 RON',
    desiredStartDate: 'În următoarele 30 zile',
    description: ''
  });

  if (!contractor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      showToast('Date incomplete', 'Te rugăm să completezi numele, telefonul și emailul.', 'error');
      return;
    }

    setSubmitted(true);
    showToast(
      'Cerere transmisă cu succes!',
      `${contractor.name} a primit detaliile proiectului tău și te va contacta în max. 24 de ore.`,
      'success'
    );

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0B]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl rounded-3xl bg-[#121215] border border-[#D4AF37]/35 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.15)] overflow-hidden text-white my-8 z-10"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Cerere de Ofertă Directă
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mt-0.5">
                  {contractor.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                aria-label="Închide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full gold-gradient-bg mx-auto flex items-center justify-center text-black">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-white">Solicitare Înregistrată</h4>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  Cererea ta a fost securizată și expediată direct către echipa tehnică <strong>{contractor.name}</strong>. Vei fi contactat la numărul <strong>{formData.phone}</strong>.
                </p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#F5E6B8] inline-block">
                  Cod cerere: CAS-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                      Nume Complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="ex. Radu Popa"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                      Număr Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="ex. 0740 123 456"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                    Adresă Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ex. radu.popa@gmail.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                      Județ Șantier
                    </label>
                    <select
                      value={formData.county}
                      onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60"
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
                      Localitate
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="ex. Snagov / Florești"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                      Buget Estimat
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60"
                    >
                      <option value="Sub 25.000 RON" className="bg-[#121215]">Sub 25.000 RON</option>
                      <option value="25.000 - 50.000 RON" className="bg-[#121215]">25.000 - 50.000 RON</option>
                      <option value="50.000 - 150.000 RON" className="bg-[#121215]">50.000 - 150.000 RON</option>
                      <option value="Peste 150.000 RON" className="bg-[#121215]">Peste 150.000 RON</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                      Termen Începere
                    </label>
                    <select
                      value={formData.desiredStartDate}
                      onChange={(e) => setFormData({ ...formData, desiredStartDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60"
                    >
                      <option value="Imediat (1-2 săptămâni)" className="bg-[#121215]">Imediat (1-2 săptămâni)</option>
                      <option value="În următoarele 30 zile" className="bg-[#121215]">În următoarele 30 zile</option>
                      <option value="În primăvară" className="bg-[#121215]">În primăvară</option>
                      <option value="Doar explorare costuri" className="bg-[#121215]">Doar explorare costuri</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                    Descriere Proiect & Nevoi Speciale
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Specifică detalii despre suprafață, stadiul actual al construcției, dacă ai deja autorizație sau schițe 3D..."
                    className="w-full p-3 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]/60 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:opacity-95 transition-opacity"
                  >
                    Trimite Solicitarea Gratuit
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Datele tale sunt transmise direct constructorului fără intermediari sau spam.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
