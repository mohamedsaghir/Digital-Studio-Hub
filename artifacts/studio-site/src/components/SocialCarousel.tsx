import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  { id: 1, label: 'Restaurant', title: 'Grand Opening', bg: 'from-[#0D1B2A] to-[#1B263B]', accent: '#415A77', type: 'event' },
  { id: 2, label: 'Barber Shop', title: 'Premium Cuts', bg: 'from-[#1B263B] to-[#415A77]', accent: '#778DA9', type: 'promo' },
  { id: 3, label: 'Medical Clinic', title: 'Your Health First', bg: 'from-[#415A77] to-[#778DA9]', accent: '#E0E1DD', type: 'quote' },
  { id: 4, label: 'Real Estate', title: 'Dream Property', bg: 'from-[#0D1B2A] to-[#415A77]', accent: '#778DA9', type: 'listing' },
  { id: 5, label: 'Beauty Salon', title: 'Look & Feel', bg: 'from-[#1B263B] via-[#415A77] to-[#778DA9]', accent: '#E0E1DD', type: 'branding' },
  { id: 6, label: 'E-Commerce', title: 'Summer Sale', bg: 'from-[#415A77] to-[#0D1B2A]', accent: '#778DA9', type: 'sale' },
];

function PostCard({ post }: { post: typeof posts[0] }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${post.bg} relative overflow-hidden select-none rounded-2xl`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }} />

      {/* Profile row */}
      <div className="absolute top-0 inset-x-0 flex items-center gap-2.5 px-4 pt-4">
        <div className="w-7 h-7 rounded-full border-2 border-white/30 flex-shrink-0" style={{ background: post.accent }} />
        <div className="space-y-1">
          <div className="w-20 h-1.5 rounded-full bg-white/50" />
          <div className="w-12 h-1 rounded-full bg-white/25" />
        </div>
        <div className="ml-auto w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
          <div className="w-3 h-0.5 bg-white/60" />
        </div>
      </div>

      {post.type === 'event' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 pt-10">
          <div className="w-12 h-12 rounded-2xl border-2 border-white/25 flex items-center justify-center mb-1">
            <div className="space-y-1"><div className="w-5 h-0.5 bg-white/70 rounded" /><div className="w-5 h-0.5 bg-white/70 rounded" /><div className="w-3 h-0.5 bg-white/70 rounded" /></div>
          </div>
          <div className="w-3/4 h-2 rounded-full bg-white/30" />
          <div className="w-24 h-8 rounded-xl" style={{ background: post.accent }} />
          <div className="space-y-1.5 w-full mt-2">
            <div className="w-full h-1.5 rounded-full bg-white/15" /><div className="w-5/6 h-1.5 rounded-full bg-white/15 mx-auto" />
          </div>
          <div className="w-20 h-6 rounded-lg border border-white/30 mt-1" />
        </div>
      )}
      {post.type === 'promo' && (
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-10 pt-12">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-4 border-white/20 flex items-center justify-center" style={{ background: `${post.accent}40` }}>
              <div className="w-16 h-16 rounded-full" style={{ background: post.accent }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-3/4 h-4 rounded-md bg-white/70" /><div className="w-1/2 h-3 rounded-md bg-white/40" />
            <div className="flex gap-2 pt-2"><div className="flex-1 h-8 rounded-xl" style={{ background: post.accent }} /><div className="w-8 h-8 rounded-xl border border-white/30" /></div>
          </div>
        </div>
      )}
      {post.type === 'quote' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-4 pt-8">
          <div className="text-5xl font-serif leading-none" style={{ color: post.accent, opacity: 0.6 }}>"</div>
          <div className="space-y-2 text-center">
            <div className="w-full h-2.5 rounded-full bg-white/60" /><div className="w-5/6 h-2.5 rounded-full bg-white/50 mx-auto" /><div className="w-4/6 h-2.5 rounded-full bg-white/40 mx-auto" />
          </div>
          <div className="w-16 h-0.5 rounded-full bg-white/30 my-1" />
          <div className="space-y-1.5 text-center"><div className="w-20 h-1.5 rounded-full bg-white/40 mx-auto" /><div className="w-14 h-1 rounded-full bg-white/20 mx-auto" /></div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            <div className="flex gap-1">{[1,2,3].map(i=><div key={i} className="w-5 h-5 rounded-full border border-white/30" style={{background:`${post.accent}${i===1?'aa':'40'}`}}/>)}</div>
            <div className="w-16 h-6 rounded-full border border-white/30" />
          </div>
        </div>
      )}
      {post.type === 'listing' && (
        <div className="absolute inset-0 flex flex-col pt-12">
          <div className="flex-1 mx-4 rounded-2xl border border-white/20 overflow-hidden" style={{ background: `${post.accent}30` }}>
            <div className="h-1/2 relative" style={{ background: `${post.accent}50` }}>
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 rounded-xl border-2 border-white/20" style={{ background: post.accent }} /></div>
            </div>
            <div className="p-4 space-y-2"><div className="w-3/4 h-2 rounded-full bg-white/50" /><div className="w-1/2 h-1.5 rounded-full bg-white/30" /></div>
          </div>
          <div className="px-4 pb-6 pt-3 flex gap-2"><div className="flex-1 h-8 rounded-xl" style={{ background: post.accent }} /><div className="w-20 h-8 rounded-xl border border-white/25" /></div>
        </div>
      )}
      {post.type === 'branding' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-8 px-5">
          <div className="grid grid-cols-3 gap-2 w-full">
            {[1,2,3,4,5,6].map(i=><div key={i} className="aspect-square rounded-xl border border-white/20" style={{background:i%3===0?post.accent:i%3===1?`${post.accent}50`:`${post.accent}20`}}/>)}
          </div>
          <div className="space-y-1.5 text-center w-full mt-2"><div className="w-1/2 h-2.5 rounded-full bg-white/60 mx-auto" /><div className="w-3/4 h-1.5 rounded-full bg-white/30 mx-auto" /></div>
        </div>
      )}
      {post.type === 'sale' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 pt-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-white/25" style={{ background: `${post.accent}60` }}>
            <div className="space-y-1 text-center"><div className="w-8 h-2 rounded bg-white/80 mx-auto" /><div className="w-6 h-1.5 rounded bg-white/50 mx-auto" /></div>
          </div>
          <div className="w-full space-y-2 mt-1"><div className="w-full h-5 rounded-xl" style={{ background: `${post.accent}70` }} /><div className="w-5/6 h-3 rounded-xl bg-white/20 mx-auto" /></div>
          <div className="flex gap-2 w-full">{[1,2,3].map(i=><div key={i} className="flex-1 h-12 rounded-xl border border-white/20 flex items-center justify-center"><div className="w-6 h-6 rounded-full" style={{background:`${post.accent}${i===2?'ff':'60'}`}}/></div>)}</div>
        </div>
      )}

      {/* Bottom label */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-4 pb-4">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-white/50">{post.label}</span>
        <div className="flex gap-1"><div className="w-3.5 h-3.5 rounded-sm bg-white/20" /><div className="w-3.5 h-3.5 rounded-sm bg-white/20" /></div>
      </div>
    </div>
  );
}

export default function SocialCarousel({ onViewMore }: { onViewMore?: () => void }) {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = posts.length;

  const prev = useCallback(() => setActive(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActive(i => (i + 1) % total), [total]);

  const getRelPos = (index: number) => {
    let rel = index - active;
    if (rel > total / 2) rel -= total;
    if (rel < -total / 2) rel += total;
    return rel;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    setDragging(false);
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 40) { if (delta < 0) next(); else prev(); }
  };

  // Card dimensions — 4:5 ratio
  const CARD_W = 220;
  const CARD_H = Math.round(CARD_W * 5 / 4); // 275

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ── Two-column grid ── */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-12">

          {/* ── LEFT: Text + controls ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[40%] flex-shrink-0"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#415A77] bg-[#E0E1DD] px-3 py-1.5 rounded-full mb-6">
              Social Media Work
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0D1B2A] leading-[1.12] tracking-tight mb-5">
              Content That Stops<br />
              <span className="text-[#415A77]">The Scroll</span>
            </h2>

            <p className="text-[#778DA9] text-base md:text-lg leading-relaxed mb-8 max-w-sm">
              Professional social media visuals crafted to capture attention, reflect brand identity, and drive engagement across platforms.
            </p>

            <Button
              onClick={onViewMore}
              variant="outline"
              className="border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white h-11 px-7 rounded-full font-semibold transition-all duration-200 group"
            >
              View More Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* ── RIGHT: Fan carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 flex items-center justify-center"
          >
            {/* Container sized to hold fan spread */}
            <div
              className="relative"
              style={{ width: CARD_W * 3.2, height: CARD_H * 1.18 }}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
            >
              {posts.map((post, index) => {
                const rel = getRelPos(index);
                const abs = Math.abs(rel);
                if (abs > 2) return null;

                const isActive = rel === 0;

                // Fan layout params
                const xOffset = rel * (CARD_W * 0.72);
                const rotate = rel * 6;
                const scale = isActive ? 1 : abs === 1 ? 0.88 : 0.76;
                const opacity = isActive ? 1 : abs === 1 ? 0.70 : 0.35;
                const zIndex = 30 - abs * 10;
                const yOffset = abs === 0 ? 0 : abs === 1 ? 16 : 30;

                return (
                  <motion.div
                    key={post.id}
                    animate={{ x: xOffset, y: yOffset, rotate, scale, opacity, zIndex }}
                    transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                    onClick={() => { if (!dragging && rel !== 0) { rel < 0 ? prev() : next(); } }}
                    className="absolute cursor-grab active:cursor-grabbing"
                    style={{
                      width: CARD_W,
                      height: CARD_H,
                      left: '50%',
                      top: '50%',
                      marginLeft: -CARD_W / 2,
                      marginTop: -CARD_H / 2,
                      borderRadius: 16,
                      boxShadow: isActive
                        ? '0 24px 56px rgba(13,27,42,0.24), 0 6px 16px rgba(13,27,42,0.14)'
                        : '0 8px 24px rgba(13,27,42,0.10)',
                    }}
                  >
                    <PostCard post={post} />
                    {!isActive && (
                      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'rgba(245,245,245,0.25)' }} />
                    )}
                  </motion.div>
                );
              })}
            </div>
            {/* Slide label */}
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs font-semibold uppercase tracking-widest text-[#778DA9] text-center mt-6 mb-4"
            >
              {posts[active].label} — {posts[active].title}
            </motion.p>

            {/* Prev / dots / next — centred under the fan */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E0E1DD] bg-white text-[#415A77] flex items-center justify-center hover:bg-[#0D1B2A] hover:text-white hover:border-[#0D1B2A] transition-all duration-200 shadow-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Slide ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{ width: i === active ? 22 : 6, height: 6, background: i === active ? '#0D1B2A' : '#E0E1DD' }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E0E1DD] bg-white text-[#415A77] flex items-center justify-center hover:bg-[#0D1B2A] hover:text-white hover:border-[#0D1B2A] transition-all duration-200 shadow-sm"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
