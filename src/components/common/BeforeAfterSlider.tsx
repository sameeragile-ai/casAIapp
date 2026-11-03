import React, { useState, useRef, useCallback, useEffect } from 'react';
import { TaggedHotspot } from '../../types';
import { ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';
import { formatRON } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { MOCK_PRODUCTS } from '../../data/products';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string; // e.g. "aspect-[16/10]" or "aspect-[4/3]"
  className?: string;
  taggedHotspots?: TaggedHotspot[];
  onHotspotClick?: (hotspot: TaggedHotspot) => void;
  showHotspots?: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'STADIU BRUT',
  afterLabel = 'RANDARE casAIapp',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  taggedHotspots = [],
  showHotspots = true
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<TaggedHotspot | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  const handleAddHotspotToCart = (hotspot: TaggedHotspot, e: React.MouseEvent) => {
    e.stopPropagation();
    const matchedProduct = MOCK_PRODUCTS.find((p) => p.id === hotspot.productId);
    if (matchedProduct) {
      addToCart(matchedProduct, 1);
    }
    setActiveHotspot(null);
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative select-none overflow-hidden rounded-2xl md:rounded-3xl border border-[#D4AF37]/25 shadow-2xl group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 ${aspectRatio} ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Background (After image - full render) */}
      <img
        src={afterImage}
        alt="After AI Transformation"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        onError={(e) => {
          (e.target as HTMLElement).style.display = 'none';
        }}
      />

      {/* Foreground clipped (Before image - raw/initial) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Transformation"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            height: '100%'
          }}
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* Gold hairline divider & handle */}
      <div
        className="absolute top-0 bottom-0 z-20 cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Hairline */}
        <div className="w-[2px] h-full bg-gradient-to-b from-[#F5E6B8] via-[#D4AF37] to-[#A67C2E] shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

        {/* Central Circular Drag Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(212,175,55,0.6)] border border-white/40 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
          <div className="flex items-center gap-0.5 text-black">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Badges / Labels */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-[#0A0A0B]/80 backdrop-blur-md text-neutral-300 border border-white/10 shadow-lg">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <span className="px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-[#0A0A0B]/80 backdrop-blur-md text-[#F5E6B8] border border-[#D4AF37]/30 shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          {afterLabel}
        </span>
      </div>

      {/* Tagged Hotspots (pulsing gold dots on the after side) */}
      {showHotspots &&
        taggedHotspots.map((spot) => {
          const isVisible = spot.xPercent > sliderPosition;
          if (!isVisible) return null;

          return (
            <div
              key={spot.id}
              className="absolute z-20 group/spot"
              style={{
                left: `${spot.xPercent}%`,
                top: `${spot.yPercent}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(activeHotspot?.id === spot.id ? null : spot);
              }}
            >
              {/* Pulsing ring */}
              <div className="relative cursor-pointer">
                <span className="absolute -inset-2 rounded-full bg-[#D4AF37]/30 animate-ping" />
                <div className="w-6 h-6 rounded-full gold-gradient-bg flex items-center justify-center shadow-lg border border-white/60 hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-black" />
                </div>
              </div>

              {/* Popover Card */}
              {activeHotspot?.id === spot.id && (
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 rounded-xl bg-[#121214]/95 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl z-30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {spot.supplier}
                  </p>
                  <p className="text-xs font-medium text-white line-clamp-2 mt-0.5">
                    {spot.name}
                  </p>
                  <p className="text-sm font-semibold gold-gradient-text mt-1">
                    {formatRON(spot.price)}
                  </p>
                  <button
                    onClick={(e) => handleAddHotspotToCart(spot, e)}
                    className="mt-2.5 w-full py-1.5 px-3 rounded-lg gold-gradient-bg text-black font-semibold text-xs flex items-center justify-center gap-1.5 hover:opacity-95 shadow transition-opacity"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Adaugă în coș
                  </button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};
