import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Layers,
  ShoppingBag,
  HardHat,
  Cpu,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Clock,
  Eye
} from 'lucide-react';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { ProductCard } from '../components/shop/ProductCard';
import { ContractorCard } from '../components/contractors/ContractorCard';
import { MOCK_PROJECTS } from '../data/projects';
import { MOCK_PRODUCTS } from '../data/products';
import { MOCK_CONTRACTORS } from '../data/contractors';
import { formatRON } from '../utils/formatters';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Exterior');
  const [animatedStats, setAnimatedStats] = useState({
    renders: 0,
    firms: 0,
    budgetSaved: 0,
    satisfaction: 0
  });

  useEffect(() => {
    // Animate stats counter
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        renders: Math.round(12400 * progress),
        firms: Math.round(180 * progress),
        budgetSaved: Math.round(35 * progress),
        satisfaction: Number((4.9 * progress).toFixed(1))
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          renders: 12400,
          firms: 180,
          budgetSaved: 35,
          satisfaction: 4.9
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const heroProject = MOCK_PROJECTS[0]; // Villa exterior
  const activeTransformation =
    MOCK_PROJECTS.find((p) => p.category === activeTab) || MOCK_PROJECTS[0];

  const featuredProducts = MOCK_PRODUCTS.filter((p) => p.featured).slice(0, 4);
  const featuredContractors = MOCK_CONTRACTORS.slice(0, 3);

  const testimonials = [
    {
      author: 'Arh. Mircea Ionescu',
      role: 'Birou Individual Arhitectură, București',
      quote:
        'casAIapp.ro a redus timpul nostru de prezentare de la 5 zile de randare tradițională la doar câteva secunde. Clienții noștri adoră faptul că primesc pe loc și bugetul de materiale.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      author: 'Andreea & Dan Costea',
      role: 'Proprietari Vilă, Cluj-Napoca (Făget)',
      quote:
        'Am încărcat o simplă schiță desenată pe șervețel la o cafea. În 8 secunde am văzut fațada cu cărămidă klinker și am găsit direct echipa de constructori din Cluj care a executat-o.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      author: 'Bogdan Teodorescu',
      role: 'Dezvoltator Imobiliar, Timișoara',
      quote:
        'Estimarea materialelor cu prețuri reale în RON direct de la MatHaus și Dedeman ne scutește de săptămâni de calcule în tabele Excel. Absolut revoluționar.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="relative pt-24 md:pt-28 overflow-hidden">
      {/* SECTION 1: HERO VIEWPORT */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pt-14 lg:pb-32">
        {/* Ambient Amber Glow behind headline */}
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-[#E8B04A]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171C]/90 border border-[#D4AF37]/30 text-[11px] tracking-[0.25em] uppercase text-[#F5E6B8] shadow-lg backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full gold-gradient-bg animate-pulse" />
              <span>AI ARCHITECTURE STUDIO · ROMÂNIA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-white font-normal"
            >
              From Sketch to Stunning — in{' '}
              <span className="gold-gradient-text italic font-medium">Seconds.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl"
            >
              Transformă schițele de mână sau pozele de șantier în randări arhitecturale fotorealiste. Obține instant lista completă de materiale cu prețuri în RON și conectează-te cu constructori români atestați.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/studio"
                className="px-8 py-4 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all animate-shine"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Începe Randarea AI</span>
              </Link>
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-md transition-all hover:border-[#D4AF37]/50"
              >
                <Eye className="w-4 h-4 text-[#D4AF37]" />
                <span>Explorează Proiecte</span>
              </a>
            </motion.div>

            {/* Trust Proof Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0A0A0B] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0A0A0B] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="User"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0A0A0B] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="User"
                />
                <div className="h-8 w-8 rounded-full bg-[#1E1E24] ring-2 ring-[#0A0A0B] flex items-center justify-center text-[10px] text-[#D4AF37] font-bold">
                  +12k
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-semibold text-white ml-1">4.9 / 5</span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  12.400+ randări generate în România
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Interactive Before/After with Floating Glass Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* The main slider */}
            <BeforeAfterSlider
              beforeImage={heroProject.beforeImage}
              afterImage={heroProject.afterImage}
              beforeLabel="STRUCTURĂ BRUTĂ"
              afterLabel="RANDARE casAIapp · VILĂ CLUJ"
              aspectRatio="aspect-[16/11]"
              taggedHotspots={heroProject.taggedProducts}
            />

            {/* Floating Glass Chip 1: Render Time */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-3 sm:-left-6 p-3 rounded-2xl bg-[#0D0D10]/90 backdrop-blur-xl border border-[#D4AF37]/35 shadow-2xl flex items-center gap-3 z-30 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl gold-gradient-bg flex items-center justify-center text-black">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">Timp de Randare</p>
                <p className="text-xs font-bold text-white">8.4 secunde</p>
              </div>
            </motion.div>

            {/* Floating Glass Chip 2: Real Budget */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 right-2 sm:right-4 p-3.5 rounded-2xl bg-[#0D0D10]/90 backdrop-blur-xl border border-[#D4AF37]/35 shadow-2xl flex items-center gap-3 z-30 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">Buget Materiale</p>
                <p className="text-xs font-bold gold-gradient-text">{formatRON(186500)}</p>
              </div>
            </motion.div>

            {/* Floating Glass Chip 3: Local Contractors */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 p-3 rounded-2xl bg-[#0D0D10]/90 backdrop-blur-xl border border-white/10 shadow-2xl items-center gap-2.5 z-30 pointer-events-none"
            >
              <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                <HardHat className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] font-medium text-white">
                3 Constructori în zonă
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STATS BAND WITH ANIMATED COUNTERS */}
      <section className="border-y border-white/10 bg-[#0E0E11]/80 backdrop-blur-xl py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="px-4">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text block">
                {animatedStats.renders.toLocaleString()}+
              </span>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                Randări AI Generate
              </p>
            </div>
            <div className="px-4 pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                {animatedStats.firms}+
              </span>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                Constructori & Specialiști
              </p>
            </div>
            <div className="px-4 pt-4 lg:pt-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text block">
                -{animatedStats.budgetSaved}%
              </span>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                Economie Medie la Materiale
              </p>
            </div>
            <div className="px-4 pt-4 lg:pt-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                {animatedStats.satisfaction} ★
              </span>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
                Scor Recenzii Clienți
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS (4 NUMBERED EDITORIAL STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Flux Inteligent de Lucru
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
            De la Schiță la Cheie în 4 Pași
          </h2>
          <p className="text-sm text-neutral-400 mt-3">
            O experiență completă care elimină necunoscutele de cost și erorile de execuție din construcții.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Încarcă Schița sau Poza',
              desc: 'Desenează pe hârtie sau fotografiază camera/șantierul actual de pe telefon. Poți încărca și Certificatul de Urbanism.',
              icon: Layers
            },
            {
              step: '02',
              title: 'Specifică Dimensiuni & Stil',
              desc: 'Setează lungimea, lățimea și înălțimea spațiului. Alege între Modern Luxury, Scandinavian, Japandi sau Industrial.',
              icon: Cpu
            },
            {
              step: '03',
              title: 'Generare Randare AI',
              desc: 'Motorul avansat aplică geometria exactă, materialele fotoreale și iluminarea naturală din orientarea geografică.',
              icon: Sparkles
            },
            {
              step: '04',
              title: 'Cumpără & Angajează',
              desc: 'Fiecare element din imagine este corelat cu stocuri reale Dedeman, MatHaus sau Somproduct și meșteri locali.',
              icon: HardHat
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 sm:p-8 rounded-3xl bg-[#121215]/80 border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-neutral-600 group-hover:text-[#D4AF37] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:gold-gradient-bg group-hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-xl text-white mb-2 group-hover:text-[#F5E6B8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: TRANSFORMATION SHOWCASE WITH TABS */}
      <section id="projects" className="bg-[#0A0A0C] border-t border-white/10 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Portofoliu Transformări
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
                Trage glisorul pentru a compara
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {[
                'Exterior',
                'Interior',
                'Spa & Bathroom',
                'Construction Finish',
                'Landscaping & Pools'
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? 'gold-gradient-bg text-black font-semibold shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Active Transformation Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111114]/80 p-5 sm:p-8 rounded-3xl border border-[#D4AF37]/25 shadow-2xl">
            {/* Left 7 cols: Slider */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={activeTransformation.beforeImage}
                afterImage={activeTransformation.afterImage}
                beforeLabel="STADIU INIȚIAL"
                afterLabel={`AI RENDER · ${activeTransformation.style.toUpperCase()}`}
                aspectRatio="aspect-[16/10]"
                taggedHotspots={activeTransformation.taggedProducts}
              />
            </div>

            {/* Right 5 cols: Details & Tagged items */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {activeTransformation.location}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  {activeTransformation.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {activeTransformation.description}
                </p>
              </div>

              {/* Key Specs Row */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center">
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 block">Suprafață</span>
                  <span className="text-sm font-semibold text-white">{activeTransformation.areaSqm} mp</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 block">Durată</span>
                  <span className="text-sm font-semibold text-white">{activeTransformation.durationWeeks} săpt.</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 block">Buget Total</span>
                  <span className="text-sm font-semibold text-[#F5E6B8]">{formatRON(activeTransformation.budgetRON)}</span>
                </div>
              </div>

              {/* Tagged Products Preview */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Materiale Etichetate în Scenă
                </h4>
                <div className="space-y-2">
                  {activeTransformation.taggedProducts.map((spot) => (
                    <div
                      key={spot.id}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-colors text-xs"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="text-[10px] text-[#D4AF37] font-semibold uppercase">{spot.supplier}</span>
                        <p className="text-white truncate font-medium">{spot.name}</p>
                      </div>
                      <span className="font-semibold text-[#F5E6B8] shrink-0">
                        {formatRON(spot.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/studio"
                  className="flex-1 py-3 px-4 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase text-center shadow-lg hover:opacity-95 transition-opacity"
                >
                  Generează pe Proiectul Tău
                </Link>
                {activeTransformation.contractorId && (
                  <Link
                    to={`/contractors/${activeTransformation.contractorId}`}
                    className="py-3 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase text-center transition-colors"
                  >
                    Vezi Constructor
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED MATERIALS & FINISHES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Materiale Reale & Bugetare
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
              Selecție Finisaje Premium
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5E6B8] hover:text-white transition-colors"
          >
            <span>Vezi Catalogul Complet (24+ produse)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 6: TOP CONTRACTORS PREVIEW */}
      <section className="bg-[#0D0D10] border-t border-white/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                B2B Contractor Network
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
                Constructori Atestați în România
              </h2>
            </div>
            <Link
              to="/contractors"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5E6B8] hover:text-white transition-colors"
            >
              <span>Explorează Toate Firmele (18+ verificate)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContractors.map((contractor) => (
              <ContractorCard key={contractor.id} contractor={contractor} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Experiențe Reale
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
            Ce Spun Arhitecții & Proprietarii
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#121215]/80 border border-white/5 hover:border-[#D4AF37]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-light italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/30"
                />
                <div>
                  <h4 className="text-xs font-semibold text-white">{t.author}</h4>
                  <p className="text-[11px] text-neutral-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: LARGE ARCHITECTURAL CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#17171B] via-[#121215] to-[#0E0E11] border border-[#D4AF37]/30 p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Architecture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Lansează Proiectul Tău
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Ești gata să transformi ideea în realitate?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Încarcă schița casei sau pozele de renovare. Studio-ul nostru AI calculează instant necesarul de materiale și îți pune la dispoziție constructorii validați din județul tău.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/studio"
                className="px-8 py-3.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-xl hover:opacity-95 transition-opacity"
              >
                <Sparkles className="w-4 h-4" />
                <span>Deschide Studio AI</span>
              </Link>
              <Link
                to="/pricing"
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase transition-colors"
              >
                Vezi Pachete & Prețuri
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
