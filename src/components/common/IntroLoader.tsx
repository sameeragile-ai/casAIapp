import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [show, setShow] = useState<boolean>(() => {
    try {
      const alreadySeen = sessionStorage.getItem('casai_intro_seen');
      return !alreadySeen;
    } catch {
      return true;
    }
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            try {
              sessionStorage.setItem('casai_intro_seen', 'true');
            } catch (e) {
              console.warn(e);
            }
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 65);

    return () => clearInterval(interval);
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0B] text-white select-none pointer-events-auto"
        >
          {/* Subtle amber ambient glow behind logo */}
          <div className="absolute w-96 h-96 rounded-full bg-[#E8B04A]/10 filter blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Architectural Icon drawing */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6 relative"
            >
              <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
                <motion.rect
                  x="8"
                  y="8"
                  width="84"
                  height="84"
                  rx="18"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M24 72V42L50 22L76 42V72H60V52H40V72H24Z"
                  stroke="url(#goldLogoGrad)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.2, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="goldLogoGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5E6B8" />
                    <stop offset="0.45" stopColor="#D4AF37" />
                    <stop offset="1" stopColor="#A67C2E" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* casAIapp.ro Brand typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-serif tracking-wider flex items-center justify-center font-normal">
                <span className="text-white">cas</span>
                <span className="gold-gradient-text font-semibold px-0.5 animate-pulse">AI</span>
                <span className="text-white">app.ro</span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#A1A1AA] mt-2 font-light">
                Arhitectură AI · Materiale · Constructori
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="w-56 h-[2px] bg-neutral-900 rounded-full mt-10 overflow-hidden relative">
              <motion.div
                className="h-full gold-gradient-bg"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <span className="text-[10px] tracking-widest text-[#D4AF37]/70 font-mono mt-2">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
