import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/theme';

import img1 from '@assets/image_1778239640224.png';
import img2 from '@assets/image_1778239647603.png';
import img3 from '@assets/image_1778239654275.png';
import img4 from '@assets/image_1778239661379.png';
import img5 from '@assets/image_1778239668987.png';
import img6 from '@assets/image_1778255320894.png';
import img7 from '@assets/image_1778257459210.png';

const posts = [
  { id: 1, label: 'Tech Series', title: 'MongoDB vs MySQL', img: img1 },
  { id: 2, label: 'Database Guide', title: 'When to Use MySQL', img: img2 },
  { id: 3, label: 'Database Guide', title: 'When to Use MongoDB', img: img3 },
  { id: 4, label: 'Tech Tip', title: 'Simple Rule', img: img4 },
  { id: 5, label: 'Tech Series', title: 'Choose the Right Database', img: img5 },
  { id: 6, label: 'The King Kam', title: 'Royal Car Treatment', img: img6 },
  { id: 7, label: 'Trattoria Joseppe', title: 'Pizza Gemacht für Genussmomente', img: img7 },
];

function PostCard({ post, isActive }: { post: typeof posts[0]; isActive: boolean }) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden select-none">
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
}

export default function SocialCarousel({ onViewMore }: { onViewMore?: () => void }) {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const total = posts.length;
  const safeActive = Math.min(active, total - 1);

  const prev = useCallback(() => setActive(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActive(i => (i + 1) % total), [total]);

  const getRelPos = (index: number) => {
    let rel = index - safeActive;
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

  const CARD_W = 230;
  const CARD_H = 230;

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#1B263B] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-12">

          {/* LEFT: Text + controls */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[40%] flex-shrink-0"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#415A77] dark:text-[#778DA9] bg-[#E0E1DD] dark:bg-[#415A77]/20 px-3 py-1.5 rounded-full mb-6">
              Social Media Work
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0D1B2A] dark:text-white leading-[1.12] tracking-tight mb-5">
              Content That Stops<br />
              <span className="text-[#415A77]">The Scroll</span>
            </h2>

            <p className="text-[#778DA9] text-base md:text-lg leading-relaxed mb-8 max-w-sm">
              Professional social media visuals crafted to capture attention, reflect brand identity, and drive engagement across platforms.
            </p>

            <Button
              onClick={onViewMore}
              variant="outline"
              className="border-[#0D1B2A] dark:border-white/20 text-[#0D1B2A] dark:text-white hover:bg-[#0D1B2A] dark:hover:bg-white/10 hover:text-white h-11 px-7 rounded-full font-semibold transition-all duration-200 group"
            >
              View More Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* RIGHT: Fan carousel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
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
                      <PostCard post={post} isActive={isActive} />
                      {!isActive && (
                        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'rgba(245,245,245,0.22)' }} />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="flex flex-col items-center gap-3">
                <motion.p
                  key={safeActive}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-semibold uppercase tracking-widest text-[#778DA9]"
                >
                  {posts[safeActive].label} — {posts[safeActive].title}
                </motion.p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-[#E0E1DD] dark:border-white/10 bg-[#F5F5F5] dark:bg-[#0D1B2A] text-[#415A77] dark:text-[#778DA9] flex items-center justify-center hover:bg-[#0D1B2A] dark:hover:bg-white hover:text-white dark:hover:text-[#0D1B2A] hover:border-[#0D1B2A] dark:hover:border-white transition-all duration-200 shadow-sm"
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
                        style={{
                          width: i === safeActive ? 22 : 6,
                          height: 6,
                          background: i === safeActive
                            ? (theme === 'dark' ? '#E0E1DD' : '#0D1B2A')
                            : (theme === 'dark' ? 'rgba(255,255,255,0.15)' : '#E0E1DD'),
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-[#E0E1DD] dark:border-white/10 bg-[#F5F5F5] dark:bg-[#0D1B2A] text-[#415A77] dark:text-[#778DA9] flex items-center justify-center hover:bg-[#0D1B2A] dark:hover:bg-white hover:text-white dark:hover:text-[#0D1B2A] hover:border-[#0D1B2A] dark:hover:border-white transition-all duration-200 shadow-sm"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
