import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, HelpCircle, ShieldCheck, ArrowRight, HardHat, Building } from 'lucide-react';
import { formatRON } from '../utils/formatters';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [userRole, setUserRole] = useState<'homeowner' | 'contractor'>('homeowner');
  const { showToast } = useToast();

  const handleSelectPlan = (planName: string, price: number) => {
    showToast(
      'Abonament selectat!',
      `Ai ales planul ${planName} (${formatRON(price)}). Te redirecționăm către Studio AI.`,
      'success'
    );
  };

  const homeownerPlans = [
    {
      name: 'Free / Debut',
      desc: 'Perfect pentru explorarea primelor idei de compartimentare și design.',
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        '3 Randări AI fotorealiste / lună',
        'Rezoluție standard HD (1080p)',
        'Acces la catalogul general de materiale',
        'Vizualizare meșteri & birouri de proiectare',
        'Estimare sumară de cost'
      ],
      popular: false,
      cta: 'Începe Gratuit'
    },
    {
      name: 'Pro Rezidențial',
      desc: 'Pentru proprietari care construiesc sau renovează o casă de la zero.',
      priceMonthly: 49,
      priceYearly: 39,
      features: [
        'Randări AI nelimitate cu ControlNet',
        'Rezoluție Ultra 4K & mod noapte / zi',
        'Deviz itemizat cu stocuri reale Dedeman & MatHaus',
        'Analiză OCR Certificat de Urbanism (POT / CUT)',
        'Contact direct gratuit cu meșteri verificați',
        'Garanție de conformitate materiale'
      ],
      popular: true,
      cta: 'Activează Pro'
    },
    {
      name: 'Studio Arhitectură',
      desc: 'Pentru arhitecți independenți, designeri de interior și birouri de proiectare.',
      priceMonthly: 149,
      priceYearly: 119,
      features: [
        'Toate facilitățile Pro incluse',
        'Export dosar tehnic complet PDF / CAD',
        'Export planșe de prezentare clienți fără watermark',
        'Generare automată tablou de tâmplărie VEKA',
        'Asistență prioritară WhatsApp & telefon',
        'Conturi multiple pentru echipă (până la 5 utilizatori)'
      ],
      popular: false,
      cta: 'Alege Studio'
    }
  ];

  const contractorPlans = [
    {
      name: 'Pay-Per-Lead',
      desc: 'Fără abonament lunar. Plătești doar când găsești un proiect care ți se potrivește.',
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        'Acces gratuit la feed-ul de proiecte din județul tău',
        'Vizualizare schiță și estimare buget',
        'Deblocare date client: 50 – 250 RON / lead',
        'Fără comisioane la contractul semnat',
        'Plată instantă securizată cu cardul'
      ],
      popular: false,
      cta: 'Înscrie Firma'
    },
    {
      name: 'Partener Acreditat',
      desc: 'Pentru firme de construcții și instalatori care doresc flux constant de clienți.',
      priceMonthly: 390,
      priceYearly: 310,
      features: [
        'Insignă de verificare oficială "VERIFICAT casAIapp"',
        'Reducere 25% la deblocarea oricărui lead',
        'Prioritate la alocarea clienților din județ',
        'Profil extins cu galerie portofoliu 4K',
        'Notificări instant pe WhatsApp la fiecare cerere nouă',
        'Suport dedicat de marketing'
      ],
      popular: true,
      cta: 'Devino Partener'
    }
  ];

  const faqs = [
    {
      q: 'Cum sunt calculate prețurile materialelor în devizul casAIapp?',
      a: 'Prețurile sunt preluate zilnic prin parteneriate directe cu marii distribuitori din România (MatHaus, Dedeman, Somproduct, Vivre, IKEA). Calculul ține cont de suprafețele reale (mp de pereți, pardoseli, tavane) introduse de tine în Studio.'
    },
    {
      q: 'Pot schimba finisajele generate de inteligența artificială?',
      a: 'Da! Fiecare randare are puncte active de selecție. Poți înlocui cărămida klinker cu tencuială decorativă sau parchetul chevron cu microciment, iar devizul total se actualizează automat în timp real.'
    },
    {
      q: 'Constructorii de pe platformă sunt licențiați?',
      a: 'Absolut. Echipele din Marketplace sunt verificate pe teren, au cod fiscal valid și, acolo unde este cazul, atestate profesionale (ANRE pentru electricieni, autorizații ISC pentru diriginți de șantier, certificări oficiale VEKA sau Schüco).'
    },
    {
      q: 'Ce înseamnă analiza Certificatului de Urbanism (OCR)?',
      a: 'Încarci PDF-ul primit de la primărie, iar algoritmul nostru extrage automat procentul de ocupare a terenului (POT), coeficientul de utilizare (CUT), regimul maxim de înălțime și retragerile obligatorii, prevenind randarea unui volum ilegal.'
    }
  ];

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Transparență Totală
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white mt-2">
          Planuri Simple, Fără Costuri Ascunse
        </h1>
        <p className="text-sm text-neutral-400 mt-3">
          Alege pachetul adaptat fie că ești proprietar în căutarea casei de vis sau firmă de construcții în căutare de proiecte profitabile.
        </p>

        {/* Homeowner vs Contractor toggle */}
        <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#141418] border border-white/10">
          <button
            onClick={() => setUserRole('homeowner')}
            className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
              userRole === 'homeowner'
                ? 'gold-gradient-bg text-black shadow-lg'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Pentru Proprietari
          </button>
          <button
            onClick={() => setUserRole('contractor')}
            className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
              userRole === 'contractor'
                ? 'gold-gradient-bg text-black shadow-lg'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Pentru Constructori & Firme
          </button>
        </div>

        {/* Monthly vs Yearly toggle */}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs">
          <span className={billingCycle === 'monthly' ? 'text-white font-medium' : 'text-neutral-500'}>
            Facturare Lunară
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-12 h-6 rounded-full bg-[#1E1E24] p-1 border border-white/10 relative transition-colors"
          >
            <div
              className={`w-4 h-4 rounded-full gold-gradient-bg transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={billingCycle === 'yearly' ? 'text-white font-medium' : 'text-neutral-500'}>
            Facturare Anuală{' '}
            <span className="text-[10px] text-emerald-400 font-bold ml-1 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
              -20% Reducere
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div
        className={`grid gap-8 items-stretch mb-20 ${
          userRole === 'homeowner'
            ? 'grid-cols-1 md:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
        }`}
      >
        {(userRole === 'homeowner' ? homeownerPlans : contractorPlans).map((plan) => {
          const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
          return (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#18181F] to-[#121215] border-2 border-[#D4AF37] shadow-[0_15px_45px_rgba(212,175,55,0.18)] scale-[1.02]'
                  : 'bg-[#121215]/80 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gold-gradient-bg text-black text-[10px] font-bold tracking-widest uppercase shadow-md">
                  Cel mai popular
                </div>
              )}

              <div>
                <h3 className="font-serif text-2xl text-white">{plan.name}</h3>
                <p className="text-xs text-neutral-400 mt-2 min-h-10 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="my-6 pt-4 border-t border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-white font-mono">
                      {price === 0 ? '0' : price}
                    </span>
                    <span className="text-sm font-semibold text-neutral-300">
                      RON {price > 0 && <span className="text-neutral-500 font-normal">/ lună</span>}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && price > 0 && (
                    <span className="text-[11px] text-emerald-400 block mt-1">
                      Facturat anual ({formatRON(price * 12)} / an)
                    </span>
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    Ce este inclus:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectPlan(plan.name, price)}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs tracking-wider uppercase transition-all ${
                    plan.popular
                      ? 'gold-gradient-bg text-black shadow-lg hover:opacity-95'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto pt-16 border-t border-white/10">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Întrebări Frecvente
          </span>
          <h2 className="font-serif text-3xl text-white mt-1">Ai Întrebări?</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121215]/80 border border-white/5 space-y-2"
            >
              <h3 className="font-serif text-lg text-white font-medium flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
