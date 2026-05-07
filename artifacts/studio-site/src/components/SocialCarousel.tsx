import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    label: 'Restaurant',
    title: 'Grand Opening',
    bg: 'from-[#0D1B2A] to-[#1B263B]',
    accent: '#415A77',
    light: '#778DA9',
    type: 'event',
  },
  {
    id: 2,
    label: 'Barber Shop',
    title: 'Premium Cuts',
    bg: 'from-[#1B263B] to-[#415A77]',
    accent: '#778DA9',
    light: '#E0E1DD',
    type: 'promo',
  },
  {
    id: 3,
    label: 'Medical Clinic',
    title: 'Your Health First',
    bg: 'from-[#415A77] to-[#778DA9]',
    accent: '#E0E1DD',
    light: '#F5F5F5',
    type: 'quote',
  },
  {
    id: 4,
    label: 'Real Estate',
    title: 'Dream Property',
    bg: 'from-[#0D1B2A] to-[#415A77]',
    accent: '#778DA9',
    light: '#E0E1DD',
    type: 'listing',
  },
  {
    id: 5,
    label: 'Beauty Salon',
    title: 'Look & Feel',
    bg: 'from-[#1B263B] via-[#415A77] to-[#778DA9]',
    accent: '#E0E1DD',
    light: '#F5F5F5',
    type: 'branding',
  },
  {
    id: 6,
    label: 'E-Commerce',
    title: 'Summer Sale',
    bg: 'from-[#415A77] to-[#0D1B2A]',
    accent: '#778DA9',
    light: '#E0E1DD',
    type: 'sale',
  },
];

function PostCard({ post }: { post: typeof posts[0] }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${post.bg} relative overflow-hidden select-none`}>

      {/* Background texture dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top bar — profile + label */}
      <div className="absolute top-0 inset-x-0 flex items-center gap-2.5 px-4 pt-4">
        <div className="w-7 h-7 rounded-full border-2 border-white/30 flex-shrink-0" style={{ background: post.accent }} />
        <div className="space-y-1">
          <div className="w-20 h-1.5 rounded-full bg-white/50" />
          <div className="w-12 h-1 rounded-full bg-white/25" />
        </div>
        <div className="ml-auto">
          <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
            <div className="w-3 h-0.5 bg-white/60" />
          </div>
        </div>
      </div>

      {/* Main visual content by type */}
      {post.type === 'event' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 pt-10">
          <div className="w-12 h-12 rounded-2xl border-2 border-white/25 flex items-center justify-center mb-1">
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-white/70 rounded" />
              <div className="w-5 h-0.5 bg-white/70 rounded" />
              <div className="w-3 h-0.5 bg-white/70 rounded" />
            </div>
          </div>
          <div className="w-3/4 h-2 rounded-full bg-white/30" />
          <div className="w-24 h-8 rounded-xl" style={{ background: post.accent }} />
          <div className="space-y-1.5 w-full mt-2">
            <div className="w-full h-1.5 rounded-full bg-white/15" />
            <div className="w-5/6 h-1.5 rounded-full bg-white/15 mx-auto" />
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
            <div className="w-3/4 h-4 rounded-md bg-white/70" />
            <div className="w-1/2 h-3 rounded-md bg-white/40" />
            <div className="flex gap-2 pt-2">
              <div className="flex-1 h-8 rounded-xl" style={{ background: post.accent }} />
              <div className="w-8 h-8 rounded-xl border border-white/30" />
            </div>
          </div>
        </div>
      )}

      {post.type === 'quote' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-4 pt-8">
          <div className="text-5xl font-serif leading-none" style={{ color: post.accent, opacity: 0.6 }}>"</div>
          <div className="space-y-2 text-center">
            <div className="w-full h-2.5 rounded-full bg-white/60" />
            <div className="w-5/6 h-2.5 rounded-full bg-white/50 mx-auto" />
            <div className="w-4/6 h-2.5 rounded-full bg-white/40 mx-auto" />
          </div>
          <div className="w-16 h-0.5 rounded-full bg-white/30 my-1" />
          <div className="space-y-1.5 text-center">
            <div className="w-20 h-1.5 rounded-full bg-white/40 mx-auto" />
            <div className="w-14 h-1 rounded-full bg-white/20 mx-auto" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            <div className="flex gap-1">
              {[1,2,3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border border-white/30" style={{ background: `${post.accent}${i === 1 ? 'aa' : '40'}` }} />
              ))}
            </div>
            <div className="w-16 h-6 rounded-full border border-white/30" />
          </div>
        </div>
      )}

      {post.type === 'listing' && (
        <div className="absolute inset-0 flex flex-col pt-12">
          <div className="flex-1 mx-4 rounded-2xl border border-white/20 overflow-hidden" style={{ background: `${post.accent}30` }}>
            <div className="h-1/2 relative overflow-hidden" style={{ background: `${post.accent}50` }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl border-2 border-white/20" style={{ background: post.accent }} />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="w-3/4 h-2 rounded-full bg-white/50" />
              <div className="w-1/2 h-1.5 rounded-full bg-white/30" />
              <div className="flex gap-2 pt-1">
                <div className="w-12 h-1 rounded-full bg-white/25" />
                <div className="w-8 h-1 rounded-full bg-white/25" />
              </div>
            </div>
          </div>
          <div className="px-4 pb-6 pt-3 flex gap-2">
            <div className="flex-1 h-8 rounded-xl" style={{ background: post.accent }} />
            <div className="w-20 h-8 rounded-xl border border-white/25" />
          </div>
        </div>
      )}

      {post.type === 'branding' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-8 px-5">
          <div className="grid grid-cols-3 gap-2 w-full">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-square rounded-xl border border-white/20"
                style={{ background: i % 3 === 0 ? `${post.accent}` : i % 3 === 1 ? `${post.accent}50` : `${post.accent}20` }} />
            ))}
          </div>
          <div className="space-y-1.5 text-center w-full mt-2">
            <div className="w-1/2 h-2.5 rounded-full bg-white/60 mx-auto" />
            <div className="w-3/4 h-1.5 rounded-full bg-white/30 mx-auto" />
          </div>
        </div>
      )}

      {post.type === 'sale' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 pt-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-white/25" style={{ background: `${post.accent}60` }}>
            <div className="space-y-1 text-center">
              <div className="w-8 h-2 rounded bg-white/80 mx-auto" />
              <div className="w-6 h-1.5 rounded bg-white/50 mx-auto" />
            </div>
          </div>
          <div className="w-full space-y-2 mt-1">
            <div className="w-full h-5 rounded-xl" style={{ background: `${post.accent}70` }} />
            <div className="w-5/6 h-3 rounded-xl bg-white/20 mx-auto" />
          </div>
          <div className="flex gap-2 w-full">
            {[1,2,3].map(i => (
              <div key={i} className="flex-1 h-12 rounded-xl border border-white/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full" style={{ background: `${post.accent}${i === 2 ? 'ff' : '60'}` }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom label */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-4 pb-4">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-white/50">{post.label}</span>
        <div className="flex gap-1">
          <div className="w-3.5 h-3.5 rounded-sm bg-white/20" />
          <div className="w-3.5 h-3.5 rounded-sm bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export default function SocialCarousel({ onViewMore }: { onViewMore?: () => void }) {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);
  const dragX = useMotionValue(0);
  const total = posts.length;

  const prev = useCallback(() => setActive(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActive(i => (i + 1) % total), [total]);

  const getPosition = (index: number) => {
    let rel = index - active;
    if (rel > total / 2) rel -= total;
    if (rel < -total / 2) rel += total;
    return rel;
  };

  const handleDragStart = (_: any, info: any) => {
    setDragging(true);
    dragStart.current = info.point.x;
  };

  const handleDragEnd = (_: any, info: any) => {
    setDragging(false);
    const delta = info.point.x - dragStart.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
  };

  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#415A77] bg-[#E0E1DD] px-3 py-1.5 rounded-full mb-5">
            Social Media Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] leading-tight tracking-tight mb-4">
            Content That Stops<br />
            <span className="text-[#415A77]">The Scroll</span>
          </h2>
          <p className="text-[#778DA9] text-lg leading-relaxed max-w-xl">
            Professional social media visuals crafted to capture attention, reflect brand identity, and drive engagement across platforms.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">

          {/* Track */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: 'min(70vw, 520px)' }}
          >
            <AnimatePresence initial={false}>
              {posts.map((post, index) => {
                const pos = getPosition(index);
                const isActive = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;
                const isVisible = Math.abs(pos) <= 2;

                if (!isVisible) return null;

                const cardW = isActive ? 'min(56vw, 320px)' : 'min(40vw, 230px)';
                const cardH = isActive ? 'min(70vw, 400px)' : 'min(50vw, 287px)';

                return (
                  <motion.div
                    key={post.id}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    animate={{
                      x: `calc(${pos} * min(45vw, 260px))`,
                      scale: isActive ? 1 : isAdjacent ? 0.88 : 0.76,
                      opacity: isActive ? 1 : isAdjacent ? 0.65 : 0.3,
                      zIndex: isActive ? 30 : isAdjacent ? 20 : 10,
                      rotateY: pos * -3,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                    onClick={() => !dragging && pos !== 0 && (pos < 0 ? prev() : next())}
                    className="absolute rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
                    style={{
                      width: cardW,
                      height: cardH,
                      boxShadow: isActive
                        ? '0 25px 60px rgba(13,27,42,0.22), 0 8px 20px rgba(13,27,42,0.12)'
                        : '0 10px 30px rgba(13,27,42,0.10)',
                    }}
                  >
                    <PostCard post={post} />

                    {/* Overlay for non-active cards */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-[#F5F5F5]/30 rounded-2xl pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[#E0E1DD] bg-white text-[#415A77] flex items-center justify-center transition-all hover:bg-[#0D1B2A] hover:text-white hover:border-[#0D1B2A] shadow-sm"
              aria-label="Previous post"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {posts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? 24 : 6,
                    height: 6,
                    background: i === active ? '#0D1B2A' : '#E0E1DD',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[#E0E1DD] bg-white text-[#415A77] flex items-center justify-center transition-all hover:bg-[#0D1B2A] hover:text-white hover:border-[#0D1B2A] shadow-sm"
              aria-label="Next post"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Post label below */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center mt-5"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#778DA9]">
              {posts[active].label} — {posts[active].title}
            </span>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Button
            onClick={onViewMore}
            variant="outline"
            className="border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white transition-all duration-300 h-12 px-8 rounded-full font-semibold group"
          >
            View More Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
