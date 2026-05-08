import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Smartphone, Layout, TrendingUp } from 'lucide-react';
import NetworkBackground from '@/components/hero/NetworkBackground';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#F5F5F5] dark:bg-[#0D1B2A]">
      <NetworkBackground />
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-[#415A77]/7 dark:bg-[#415A77]/14 blur-[130px]" />
        <div className="absolute -top-10 right-0 w-[450px] h-[450px] rounded-full bg-[#1B263B]/4 dark:bg-[#778DA9]/6 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#778DA9]/4 dark:bg-[#415A77]/6 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col mb-10 items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-[#F5F5F5]/50 dark:bg-[#1B263B]/60 backdrop-blur-sm border-[#778DA9]/30 text-[#415A77] dark:text-[#778DA9] font-medium">
              Modern Websites & Digital Presence
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0D1B2A] dark:text-white leading-[1.1] mb-6">
              Helping Businesses Build A <span className="text-[#415A77]">Strong Online Presence</span>
            </h1>
            <p className="text-lg md:text-xl text-[#415A77] dark:text-[#778DA9] mb-8 leading-relaxed max-w-2xl mx-auto">
              We create modern websites and professional social media content that help businesses look trustworthy, attract more customers, and grow online.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18 }}>
                <Button onClick={() => scrollTo('work')} variant="outline" size="lg" className="border-[#778DA9]/30 dark:border-white/20 text-[#0D1B2A] dark:text-white hover:bg-[#E0E1DD] dark:hover:bg-white/10 font-medium h-12 px-8">
                  View Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.18 }}>
                <Button onClick={() => scrollTo('contact')} size="lg" className="btn-glow bg-[#0D1B2A] dark:bg-[#415A77] text-[#F5F5F5] hover:bg-[#1B263B] dark:hover:bg-[#778DA9] font-medium h-12 px-8 shadow-lg shadow-[#0D1B2A]/20 dark:shadow-[#415A77]/30">
                  Start a Project <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} className="ml-2 inline-block"><ArrowRight className="h-4 w-4" /></motion.span>
                </Button>
              </motion.div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-[#778DA9] font-medium">
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 text-[#415A77] mr-1" /> Based in Germany</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 text-[#415A77] mr-1" /> Modern Design</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center"><CheckCircle2 className="h-4 w-4 text-[#415A77] mr-1" /> Business-Focused Approach</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-5xl mx-auto px-6 md:px-10"
        >
          {/* Browser mockup */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0E1DD] dark:border-white/10 bg-white dark:bg-[#1B263B]">
            <div className="flex items-center gap-3 px-4 h-10 bg-[#F0F0EE] dark:bg-[#0D1B2A] border-b border-[#E0E1DD] dark:border-white/10">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-2 h-5 bg-white dark:bg-[#1B263B] rounded border border-[#E0E1DD] dark:border-white/10 flex items-center px-3 gap-1.5 max-w-xs">
                <div className="w-2.5 h-2.5 rounded-full border border-[#778DA9]/40 flex-shrink-0" />
                <span className="text-[9px] text-[#778DA9] font-medium truncate">pixelstudio.de/restaurant-demo</span>
              </div>
            </div>

            <div className="flex flex-col select-none">
              <div className="h-9 bg-[#0D1B2A] flex items-center px-5 gap-4">
                <span className="text-white font-bold text-[10px] tracking-widest uppercase">Bella Roma</span>
                <div className="flex gap-4 ml-auto">
                  <span className="text-white/50 text-[8px] font-medium">Menu</span>
                  <span className="text-white/50 text-[8px] font-medium">About</span>
                  <span className="text-white/50 text-[8px] font-medium">Gallery</span>
                </div>
                <div className="px-3 h-5 bg-[#415A77] rounded text-white text-[8px] font-semibold flex items-center">Reserve</div>
              </div>

              <div className="bg-gradient-to-br from-[#1B263B] via-[#415A77] to-[#778DA9] px-6 md:px-10 py-7 flex items-center gap-8">
                <div className="flex-1 space-y-2">
                  <span className="inline-block text-[8px] font-semibold text-[#778DA9] uppercase tracking-widest">⭐ Munich's #1 Italian Restaurant</span>
                  <p className="text-white font-bold text-sm md:text-base leading-tight">Where Every Dish<br/>Tells a Story</p>
                  <p className="text-white/60 text-[9px] leading-relaxed">Authentic Italian cuisine crafted from<br/>generations of passion and heritage.</p>
                  <div className="flex gap-2.5 pt-2">
                    <div className="px-3 h-7 bg-white rounded-md text-[#0D1B2A] text-[8px] font-bold flex items-center">Reserve a Table</div>
                    <div className="px-3 h-7 border border-white/40 rounded-md text-white text-[8px] font-medium flex items-center">View Menu</div>
                  </div>
                </div>
                <div className="hidden sm:flex w-32 md:w-44 h-24 md:h-32 bg-white/10 rounded-xl border border-white/20 flex-shrink-0 relative overflow-hidden items-end">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="w-full p-3 space-y-1 bg-black/30 backdrop-blur-sm">
                    <p className="text-white font-bold text-[9px]">Osso Buco Milanese</p>
                    <p className="text-white/60 text-[8px]">Chef's signature — €28</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] dark:bg-[#0D1B2A] px-6 md:px-10 py-5 grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-2">
                  <p className="text-[9px] font-bold text-[#0D1B2A] dark:text-white uppercase tracking-wider">Why Guests Love Us</p>
                  <p className="text-[8px] text-[#415A77] dark:text-[#778DA9] leading-relaxed">From our wood-fired pizzas to hand-rolled pasta — every bite is made from scratch using imported Italian ingredients. No shortcuts. Ever.</p>
                  <div className="flex gap-3 pt-1">
                    <div className="h-14 flex-1 bg-white dark:bg-[#1B263B] rounded-xl border border-[#E0E1DD] dark:border-white/10 flex flex-col items-center justify-center gap-0.5">
                      <span className="text-[11px] font-bold text-[#0D1B2A] dark:text-white">12+</span>
                      <span className="text-[7px] text-[#778DA9]">Years of Excellence</span>
                    </div>
                    <div className="h-14 flex-1 bg-white dark:bg-[#1B263B] rounded-xl border border-[#E0E1DD] dark:border-white/10 flex flex-col items-center justify-center gap-0.5">
                      <span className="text-[11px] font-bold text-[#0D1B2A] dark:text-white">4.9★</span>
                      <span className="text-[7px] text-[#778DA9]">Google Rating</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-xl bg-gradient-to-br from-[#415A77]/20 to-[#778DA9]/10 border border-[#E0E1DD] dark:border-white/10 flex flex-col items-center justify-center gap-1 px-2 text-center">
                    <span className="text-[9px] font-bold text-[#0D1B2A] dark:text-white">Book a Table</span>
                    <span className="text-[7px] text-[#778DA9]">Open Mon–Sun · 12–23h</span>
                  </div>
                  <div className="h-6 w-full bg-[#0D1B2A] dark:bg-[#415A77] rounded-lg flex items-center justify-center">
                    <span className="text-white text-[8px] font-semibold">Reserve Now →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating phone mockup */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 right-0 md:-right-4 w-24 md:w-32 bg-[#0D1B2A] rounded-[1.4rem] border-4 border-[#0D1B2A] shadow-2xl overflow-hidden hidden sm:block z-20"
          >
            <div className="h-4 bg-[#0D1B2A] flex items-center justify-center">
              <div className="w-8 h-1.5 bg-[#1B263B] rounded-full" />
            </div>
            <div className="bg-white dark:bg-[#1B263B] rounded-b-[1rem] overflow-hidden">
              <div className="h-6 bg-[#1B263B] flex items-center px-2 gap-1">
                <div className="w-6 h-1.5 bg-white/40 rounded-full" />
              </div>
              <div className="p-2 space-y-1.5 bg-[#F5F5F5] dark:bg-[#0D1B2A]">
                <div className="h-12 rounded-lg bg-gradient-to-br from-[#415A77] to-[#778DA9]" />
                <div className="w-3/4 h-1.5 bg-[#E0E1DD] dark:bg-white/15 rounded-full" />
                <div className="w-1/2 h-1.5 bg-[#E0E1DD] dark:bg-white/15 rounded-full" />
                <div className="grid grid-cols-2 gap-1 pt-1">
                  <div className="h-8 rounded-md bg-white dark:bg-[#1B263B] border border-[#E0E1DD] dark:border-white/10" />
                  <div className="h-8 rounded-md bg-white dark:bg-[#1B263B] border border-[#E0E1DD] dark:border-white/10" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card — Mobile Ready */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -top-4 -left-2 md:-left-8 bg-white dark:bg-[#1B263B] border border-[#E0E1DD] dark:border-white/10 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 z-30"
          >
            <div className="w-9 h-9 rounded-xl bg-[#415A77]/10 dark:bg-[#415A77]/20 flex items-center justify-center text-[#415A77] flex-shrink-0">
              <Smartphone className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0D1B2A] dark:text-white leading-none mb-0.5">Mobile Ready</p>
              <p className="text-[10px] text-[#778DA9]">All screen sizes</p>
            </div>
          </motion.div>

          {/* Floating card — Star rating */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 left-2 md:-left-4 bg-white dark:bg-[#1B263B] border border-[#E0E1DD] dark:border-white/10 shadow-xl rounded-2xl px-4 py-3 z-30"
          >
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3 h-3 text-[#FEBC2E] fill-[#FEBC2E]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <p className="text-[10px] font-semibold text-[#0D1B2A] dark:text-white">5.0 Client Rating</p>
            <p className="text-[9px] text-[#778DA9]">Based in Germany</p>
          </motion.div>

          {/* Floating card — Social post */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-5 right-10 md:right-6 bg-white dark:bg-[#1B263B] border border-[#E0E1DD] dark:border-white/10 shadow-xl rounded-2xl overflow-hidden w-32 z-30 hidden md:block"
          >
            <div className="h-16 bg-gradient-to-br from-[#415A77] to-[#778DA9] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Layout className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            <div className="p-2.5 space-y-1">
              <div className="w-3/4 h-1.5 bg-[#0D1B2A]/20 dark:bg-white/20 rounded-full" />
              <div className="w-1/2 h-1.5 bg-[#E0E1DD] dark:bg-white/10 rounded-full" />
            </div>
          </motion.div>

          {/* Floating card — Growth */}
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/3 -right-3 md:-right-10 bg-white dark:bg-[#1B263B] border border-[#E0E1DD] dark:border-white/10 shadow-xl rounded-2xl px-3 py-2.5 flex items-center gap-2 z-30 hidden md:flex"
          >
            <div className="w-8 h-8 rounded-xl bg-[#1B263B]/10 dark:bg-white/10 flex items-center justify-center text-[#1B263B] dark:text-[#778DA9] flex-shrink-0">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#0D1B2A] dark:text-white leading-none mb-0.5">+120% Traffic</p>
              <p className="text-[9px] text-[#778DA9]">After launch</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
