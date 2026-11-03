import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { SearchModal } from './SearchModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { itemsCount, setIsCartOpen, lastAddedTimestamp } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener for sticky frosted glass and top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Studio AI', path: '/studio' },
    { label: 'Shop Materiale', path: '/shop' },
    { label: 'Constructori', path: '/contractors' },
    { label: 'Proiecte & Randări', path: '/#projects' },
    { label: 'Prețuri', path: '/pricing' }
  ];

  const handleLinkClick = (path: string) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.replace('/#', ''));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.replace('/#', ''));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0A0A0B]/75 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-[#D4AF37]/20'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        {/* Top Gold Scroll Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent">
          <div
            className="h-full gold-gradient-bg shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg border border-[#D4AF37]/40 flex items-center justify-center bg-[#121215]/80 group-hover:border-[#D4AF37] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                <path
                  d="M20 75V40L50 18L80 40V75H62V52H38V75H20Z"
                  stroke="url(#navGoldLogo)"
                  strokeWidth="8"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="35" r="5" fill="#D4AF37" />
                <defs>
                  <linearGradient id="navGoldLogo" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5E6B8" />
                    <stop offset="0.45" stopColor="#D4AF37" />
                    <stop offset="1" stopColor="#A67C2E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-light tracking-wide select-none">
              <span className="text-white">cas</span>
              <span className="gold-gradient-text font-bold px-0.5">AI</span>
              <span className="text-neutral-200">app.ro</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative px-4 py-2 text-xs xl:text-sm font-medium tracking-wide transition-colors ${
                    active ? 'text-[#F5E6B8]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] gold-gradient-bg shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTAs */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-neutral-300 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
              aria-label="Caută produse și firme"
              title="Caută (Cmd+K)"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Cart Trigger with Bouncing Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-neutral-300 hover:text-[#D4AF37] hover:bg-white/5 transition-all relative"
              aria-label="Deschide coșul de cumpărături"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {itemsCount > 0 && (
                <motion.span
                  key={lastAddedTimestamp || itemsCount}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ duration: 0.35 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full gold-gradient-bg text-black text-[10px] font-bold flex items-center justify-center shadow-lg border border-black"
                >
                  {itemsCount}
                </motion.span>
              )}
            </button>

            {/* For Contractors link */}
            <Link
              to="/dashboard"
              className="hidden md:inline-flex items-center text-xs tracking-wider text-neutral-400 hover:text-[#F5E6B8] transition-colors py-2 px-1"
            >
              Pentru Constructori
            </Link>

            {/* Primary CTA: Start Designing */}
            <Link
              to="/studio"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all animate-shine"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Studio AI</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl lg:hidden text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? 'Închide meniu' : 'Deschide meniu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Fullscreen Glass Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-8 bg-[#0A0A0B]/98 backdrop-blur-2xl flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                Navigație Principală
              </p>
              <div className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLinkClick(link.path);
                    }}
                    className="block w-full text-left font-serif text-3xl text-neutral-200 hover:text-[#F5E6B8] transition-colors py-1"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left font-serif text-2xl text-[#D4AF37] py-2"
                  >
                    Portal Firme & Constructori →
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Footer CTA */}
            <div className="pt-8 border-t border-white/10 space-y-3">
              <Link
                to="/studio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-full gold-gradient-bg text-black font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                <span>Începe Randarea AI</span>
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Vezi Coșul ({itemsCount} articole)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
