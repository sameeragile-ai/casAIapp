import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  Sparkles,
  Layers,
  FileText,
  Sliders,
  Check,
  ShoppingBag,
  HardHat,
  RefreshCw,
  Plus,
  Trash2,
  Info,
  ArrowRight,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatRON } from '../utils/formatters';
import { MOCK_PRODUCTS } from '../data/products';
import { TaggedHotspot, UrbanismCertData } from '../types';
import { useNavigate } from 'react-router-dom';

const STYLES = [
  {
    id: 'modern-luxury',
    name: 'Modern Luxury',
    desc: 'Marmură, sticlă, lumini arhitecturale liniare și contraste dramatice.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'minimal-japandi',
    name: 'Minimal Japandi',
    desc: 'Lemn natur deschis, microciment, texturi wabi-sabi și calm organic.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    desc: 'Lumină naturală abundentă, lână bouclé, parchet stejar și tonuri calde.',
    image: 'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'industrial',
    name: 'Industrial Brutalist',
    desc: 'Beton aparent, structuri metalice antracit și plafoane înalte cu scafe.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean Resort',
    desc: 'Piatră calcaroasă albă, pergole bioclimatice, piscine azurii și măslini.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
  }
];

const TRANSFORMATION_TYPES = [
  'Exterior Rezidențial',
  'Interior Living & Dining',
  'Master Bathroom & Spa',
  'Finisaje Tehnice & Tavane',
  'Peisagistică & Piscină'
];

const PROMPT_CHIPS = [
  'Șemineu automatizat pe peleți în colț',
  'Panouri solare fotovoltaice pe acoperiș',
  'Pompă de căldură aer-apă split',
  'Plafon gips-carton cu scafă LED perimetrală',
  'Cadă freestanding compozit mineral',
  'Pardoseală continuă din microciment',
  'Piscină îngropată 8×4m cu terasă'
];

export const StudioPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Studio State
  const [uploadedImage, setUploadedImage] = useState<string | null>(
    'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=1200&q=80'
  );
  const [selectedStyle, setSelectedStyle] = useState('modern-luxury');
  const [transformationType, setTransformationType] = useState('Exterior Rezidențial');
  const [selectedChips, setSelectedChips] = useState<string[]>([
    'Panouri solare fotovoltaice pe acoperiș',
    'Pompă de căldură aer-apă split'
  ]);

  // Dimension inputs (meters)
  const [dimensions, setDimensions] = useState({
    length: 12.5,
    width: 9.8,
    height: 3.2
  });

  // Certificat de Urbanism OCR state
  const [certUploaded, setCertUploaded] = useState(false);
  const [certData, setCertData] = useState<UrbanismCertData | null>(null);
  const [isAnalyzingCert, setIsAnalyzingCert] = useState(false);

  // Generation Loader & Results
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [hasResult, setHasResult] = useState(true); // Initial sample state ready, re-generable

  const fileInputRef = useRef<HTMLInputElement>(null);
  const certInputRef = useRef<HTMLInputElement>(null);

  // Calculated areas
  const floorArea = Number((dimensions.length * dimensions.width).toFixed(1));
  const ceilingArea = floorArea;
  const wallArea = Number(
    (2 * (dimensions.length + dimensions.width) * dimensions.height).toFixed(1)
  );

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        showToast('Imagine încărcată', 'Schița a fost analizată cu succes.', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsAnalyzingCert(true);
      showToast('Scanare Certificat', 'Extragere parametri urbanistici (OCR)...', 'info', 2000);
      setTimeout(() => {
        setCertUploaded(true);
        setCertData({
          certificateNumber: 'CU-2024-8841/B',
          cadastralCode: '219402',
          zone: 'L1a — Locuințe individuale și colective mici',
          potMax: '35%',
          cutMax: '0.9',
          rhMax: 'P+1E+M (Înălțime max. 10.5m)',
          maxHeightM: 10.5,
          retractions: 'Min. 3m față de limitele laterale, 5m față de aliniament',
          utilitiesAvailable: ['Curent Trifazat', 'Gaze Naturale', 'Canalizare', 'Fibră Optică']
        });
        setIsAnalyzingCert(false);
        showToast('OCR Completat', 'POT, CUT și regim de înălțime extrase.', 'success');
      }, 1600);
    }
  };

  const handleStartGeneration = () => {
    setIsGenerating(true);
    setGenerationStep(0);
    setHasResult(false);

    const steps = [
      'Analiză geometrie și unghiuri perspectivă...',
      'Construire Depth Map & Rețea Wireframe 3D...',
      'Aplicare modele ControlNet Arhitectural...',
      'Randare fotorealistă materiale & iluminare...',
      'Mapare bugete materiale reale din România...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setGenerationStep(currentStep);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setHasResult(true);
          showToast(
            'Randare generată cu succes!',
            'Materialele au fost identificate și bugetate în RON.',
            'success'
          );
        }, 1000);
      }
    }, 1300);
  };

  // Hotspots and budget items for current result
  const resultTaggedHotspots: TaggedHotspot[] = [
    {
      id: 'spot-1',
      productId: 'prod-8',
      name: 'Cărămidă Klinker Fațadă Antracit',
      price: 185,
      supplier: 'MatHaus',
      xPercent: 35,
      yPercent: 48
    },
    {
      id: 'spot-2',
      productId: 'prod-9',
      name: 'Tablă Fălțuită RetrOpan Titan-Zinc',
      price: 94,
      supplier: 'MatHaus',
      xPercent: 68,
      yPercent: 18
    },
    {
      id: 'spot-3',
      productId: 'prod-18',
      name: 'Pompă de Căldură Aer-Apă Split 16kW A+++',
      price: 28900,
      supplier: 'Dedeman',
      xPercent: 86,
      yPercent: 78
    },
    {
      id: 'spot-4',
      productId: 'prod-23',
      name: 'Kit Panouri Fotovoltaice 10kW Hibrid',
      price: 44900,
      supplier: 'Dedeman',
      xPercent: 52,
      yPercent: 15
    }
  ];

  const budgetTableItems = [
    {
      item: 'Cărămidă Klinker Fațadă Antracit (mp)',
      supplier: 'MatHaus',
      qty: 180,
      unitPrice: 185,
      total: 33300,
      product: MOCK_PRODUCTS.find((p) => p.id === 'prod-8')
    },
    {
      item: 'Tablă Fălțuită Titan-Zinc RetrOpan (mp)',
      supplier: 'MatHaus',
      qty: 210,
      unitPrice: 94,
      total: 19740,
      product: MOCK_PRODUCTS.find((p) => p.id === 'prod-9')
    },
    {
      item: 'Vată Bazaltică Rockwool 150mm (pachete)',
      supplier: 'MatHaus',
      qty: 150,
      unitPrice: 118,
      total: 17700,
      product: MOCK_PRODUCTS.find((p) => p.id === 'prod-12')
    },
    {
      item: 'Pompă de Căldură Aer-Apă 16kW A+++',
      supplier: 'Dedeman',
      qty: 1,
      unitPrice: 28900,
      total: 28900,
      product: MOCK_PRODUCTS.find((p) => p.id === 'prod-18')
    },
    {
      item: 'Kit Panouri Fotovoltaice 10kW + Baterie',
      supplier: 'Dedeman',
      qty: 1,
      unitPrice: 44900,
      total: 44900,
      product: MOCK_PRODUCTS.find((p) => p.id === 'prod-23')
    }
  ];

  const grandTotalBudget = budgetTableItems.reduce((acc, curr) => acc + curr.total, 0);

  const handleAddAllToCart = () => {
    budgetTableItems.forEach((b) => {
      if (b.product) {
        addToCart(b.product, Math.min(b.qty, 5));
      }
    });
    showToast('Toate materialele adăugate!', 'Au fost adăugate în coș pentru comandă.', 'success');
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Studio Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          AI Architecture & Material Engine
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white mt-2">
          Studio Generativ de Randare
        </h1>
        <p className="text-sm text-neutral-400 mt-2">
          Încarcă o schiță, configurează volumetria și primește pe loc randarea fotorealistă corelată cu bugetul de materiale din România.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: CONTROLS & UPLOADS (5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Box 1: Image Upload */}
          <div className="p-6 rounded-3xl bg-[#121215]/85 border border-[#D4AF37]/25 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#D4AF37]" />
                1. Schiță sau Poză de Bază
              </span>
              {uploadedImage && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs text-[#D4AF37] hover:underline"
                >
                  Schimbă
                </button>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />

            {uploadedImage ? (
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group">
                <img
                  src={uploadedImage}
                  alt="Schiță încărcată"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 rounded-full gold-gradient-bg text-black text-xs font-semibold shadow-lg"
                  >
                    Înlocuiește imaginea
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-2xl p-8 text-center cursor-pointer bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 mx-auto flex items-center justify-center text-[#D4AF37] mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-white">
                  Apasă sau trage fișierul aici
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  JPG, PNG, Schiță CAD, foto telefon mobil (max. 20MB)
                </p>
              </div>
            )}
          </div>

          {/* Box 2: Dimensions & Live Areas */}
          <div className="p-6 rounded-3xl bg-[#121215]/85 border border-[#D4AF37]/25 shadow-xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              2. Dimensiuni Spațiu (Metri)
            </span>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Lungime (L)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={dimensions.length}
                    onChange={(e) =>
                      setDimensions({ ...dimensions, length: parseFloat(e.target.value) || 0 })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-[#17171C] border border-white/10 text-white text-sm focus:border-[#D4AF37]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">m</span>
                </div>
              </div>

              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Lățime (l)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={dimensions.width}
                    onChange={(e) =>
                      setDimensions({ ...dimensions, width: parseFloat(e.target.value) || 0 })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-[#17171C] border border-white/10 text-white text-sm focus:border-[#D4AF37]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">m</span>
                </div>
              </div>

              <div>
                <label className="text-[11px] text-neutral-400 block mb-1">Înălțime (H)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={dimensions.height}
                    onChange={(e) =>
                      setDimensions({ ...dimensions, height: parseFloat(e.target.value) || 0 })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-[#17171C] border border-white/10 text-white text-sm focus:border-[#D4AF37]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">m</span>
                </div>
              </div>
            </div>

            {/* Live Calculated Badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
              <div className="p-2 rounded-xl bg-black/40">
                <span className="text-[10px] text-neutral-400 uppercase block">Arie Pardoseală</span>
                <span className="text-xs font-bold text-white">{floorArea} mp</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40">
                <span className="text-[10px] text-neutral-400 uppercase block">Arie Pereți</span>
                <span className="text-xs font-bold text-white">{wallArea} mp</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40">
                <span className="text-[10px] text-neutral-400 uppercase block">Arie Tavan</span>
                <span className="text-xs font-bold text-white">{ceilingArea} mp</span>
              </div>
            </div>
          </div>

          {/* Box 3: Style Selector & Transformation Type */}
          <div className="p-6 rounded-3xl bg-[#121215]/85 border border-[#D4AF37]/25 shadow-xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#D4AF37]" />
              3. Tip & Stil Arhitectural
            </span>

            <div>
              <label className="text-[11px] text-neutral-400 block mb-1.5">Tip Spațiu</label>
              <select
                value={transformationType}
                onChange={(e) => setTransformationType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#17171C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              >
                {TRANSFORMATION_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-[#121215]">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-[11px] text-neutral-400 block">Alege Stilul</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {STYLES.map((style) => {
                  const isSelected = selectedStyle === style.id;
                  return (
                    <div
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'border-white/5 bg-[#17171C]/60 hover:border-white/20'
                      }`}
                    >
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-10 h-10 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className={`text-xs font-semibold ${isSelected ? 'text-[#F5E6B8]' : 'text-white'}`}>
                          {style.name}
                        </p>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Box 4: Optional Inpainting Prompt Chips */}
          <div className="p-6 rounded-3xl bg-[#121215]/85 border border-[#D4AF37]/25 shadow-xl space-y-3">
            <span className="text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              4. Elemente & Echipamente (Chips Opționale)
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {PROMPT_CHIPS.map((chip) => {
                const active = selectedChips.includes(chip);
                return (
                  <button
                    key={chip}
                    onClick={() => toggleChip(chip)}
                    className={`px-3 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
                      active
                        ? 'gold-gradient-bg text-black font-semibold shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                    }`}
                  >
                    <span>{chip}</span>
                    {active ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Box 5: Optional Certificat de Urbanism OCR Box */}
          <div className="p-6 rounded-3xl bg-[#121215]/85 border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                Certificat de Urbanism (OCR Opțional)
              </span>
              <input
                ref={certInputRef}
                type="file"
                accept=".pdf,image/*"
                className="hidden"
                onChange={handleCertUpload}
              />
              <button
                onClick={() => certInputRef.current?.click()}
                disabled={isAnalyzingCert}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-[#F5E6B8] transition-colors"
              >
                {isAnalyzingCert ? 'Scanare...' : certUploaded ? 'Schimbă Fișier' : 'Încarcă PDF'}
              </button>
            </div>

            {certData && (
              <div className="p-3.5 rounded-2xl bg-black/60 border border-[#D4AF37]/30 text-xs space-y-2 mt-2">
                <div className="flex justify-between text-neutral-400">
                  <span>Număr Certificat:</span>
                  <span className="text-white font-mono">{certData.certificateNumber}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 py-1 border-y border-white/10 text-center">
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase">POT Max</span>
                    <span className="font-bold text-[#F5E6B8]">{certData.potMax}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase">CUT Max</span>
                    <span className="font-bold text-[#F5E6B8]">{certData.cutMax}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase">Înălțime Max</span>
                    <span className="font-bold text-[#F5E6B8]">{certData.maxHeightM}m</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 leading-tight">
                  {certData.retractions}
                </p>
              </div>
            )}
          </div>

          {/* Action CTA: Generate Button */}
          <button
            onClick={handleStartGeneration}
            disabled={isGenerating}
            className="w-full py-4 px-6 rounded-full gold-gradient-bg text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.6)] hover:scale-[1.01] transition-all animate-shine disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-black" />
                <span>Se randează...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-black" />
                <span>Generează Randarea AI (8 sec)</span>
              </>
            )}
          </button>
        </div>

        {/* RIGHT COLUMN: RENDER CANVAS & ITEMISED BUDGET (7 COLS) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Canvas Area */}
          <div className="relative rounded-3xl bg-[#121215] border border-[#D4AF37]/35 p-4 sm:p-6 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-center">
            {isGenerating ? (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
                {/* Gold Progress Ring */}
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#27272A"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#ringGold)"
                      strokeWidth="6"
                      strokeDasharray="251.2"
                      strokeDashoffset="251.2"
                      strokeLinecap="round"
                      fill="transparent"
                      animate={{
                        strokeDashoffset: [251.2, 50, 0]
                      }}
                      transition={{ duration: 6, ease: 'easeInOut' }}
                    />
                    <defs>
                      <linearGradient id="ringGold" x1="0" y1="0" x2="100" y2="100">
                        <stop stopColor="#F5E6B8" />
                        <stop offset="0.5" stopColor="#D4AF37" />
                        <stop offset="1" stopColor="#A67C2E" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Sparkles className="absolute w-8 h-8 text-[#D4AF37] animate-pulse" />
                </div>

                <div className="space-y-2 max-w-sm">
                  <h3 className="font-serif text-2xl text-white">Generare în curs...</h3>
                  <p className="text-xs text-[#F5E6B8] font-mono tracking-wide">
                    {[
                      'Analiză geometrie și unghiuri perspectivă...',
                      'Construire Depth Map & Rețea Wireframe 3D...',
                      'Aplicare modele ControlNet Arhitectural...',
                      'Randare fotorealistă materiale & iluminare...',
                      'Mapare bugete materiale reale din România...'
                    ][generationStep]}
                  </p>
                </div>
              </div>
            ) : hasResult ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                      Randare Finalizată · 8.4s
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400">
                    Stil: <strong className="text-white">{selectedStyle}</strong>
                  </span>
                </div>

                {/* Before/After with pulsing hot spots */}
                <BeforeAfterSlider
                  beforeImage={uploadedImage || 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=1200&q=80'}
                  afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  beforeLabel="SCHIȚĂ / STADIU BRUT"
                  afterLabel="REZULTAT FOTOREALIST casAIapp"
                  aspectRatio="aspect-[16/10]"
                  taggedHotspots={resultTaggedHotspots}
                />

                <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 px-1">
                  <span>Trage glisorul pentru a analiza textura cărămizii și a acoperișului.</span>
                  <span className="text-[#D4AF37] font-medium">Apasă pe punctele aurii pentru detalii</span>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center text-neutral-500">
                Apasă "Generează Randarea AI" pentru a procesa schița.
              </div>
            )}
          </div>

          {/* Itemised Budget Table */}
          {hasResult && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-3xl bg-[#121215]/90 border border-[#D4AF37]/30 shadow-2xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Buget Materiale Reale
                  </span>
                  <h3 className="font-serif text-2xl text-white">Deviz Estimativ de Achiziție</h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddAllToCart}
                    className="px-4 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg hover:opacity-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Adaugă tot în coș</span>
                  </button>

                  <button
                    onClick={() => navigate('/contractors')}
                    className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                  >
                    <HardHat className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Cere Oferte Constructori</span>
                  </button>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-white/10 text-neutral-400 uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="pb-3 font-semibold">Material / Echipament</th>
                      <th className="pb-3 font-semibold">Furnizor</th>
                      <th className="pb-3 font-semibold text-center">Cant.</th>
                      <th className="pb-3 font-semibold text-right">Preț Unitar</th>
                      <th className="pb-3 font-semibold text-right">Subtotal</th>
                      <th className="pb-3 font-semibold text-center">Acțiune</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-neutral-300">
                    {budgetTableItems.map((item, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 pr-3 font-medium text-white">{item.item}</td>
                        <td className="py-3 pr-3">
                          <span className="px-2 py-0.5 rounded-md bg-white/5 text-[#D4AF37] font-semibold text-[10px]">
                            {item.supplier}
                          </span>
                        </td>
                        <td className="py-3 pr-3 text-center font-mono">{item.qty}</td>
                        <td className="py-3 pr-3 text-right text-neutral-400 font-mono">
                          {formatRON(item.unitPrice)}
                        </td>
                        <td className="py-3 pr-3 text-right font-semibold text-[#F5E6B8] font-mono">
                          {formatRON(item.total)}
                        </td>
                        <td className="py-3 text-center">
                          <button
                            onClick={() => {
                              if (item.product) {
                                addToCart(item.product, 1);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-[#D4AF37] hover:text-black transition-colors"
                            title="Adaugă articol"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total & Guarantees */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Prețuri actualizate zilnic din cataloagele partenerilor oficiali.</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm uppercase text-neutral-400">Total Deviz:</span>
                  <span className="font-serif text-3xl font-bold gold-gradient-text">
                    {formatRON(grandTotalBudget)}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
