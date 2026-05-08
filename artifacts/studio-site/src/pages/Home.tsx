import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion';
import {
  Menu, X, ArrowRight, CheckCircle2, Check, ExternalLink,
  Shield, TrendingUp, Smartphone, MessageSquare,
  Utensils, Scissors, Stethoscope, ShoppingBag, MapPin, Building,
  Layout, Rocket, Mail, Phone, Instagram, Facebook, Linkedin, Twitter, Send,
  Moon, Sun
} from 'lucide-react';
import NetworkBackground from '@/components/hero/NetworkBackground';
import SocialCarousel from '@/components/SocialCarousel';
import { useTheme } from '@/contexts/theme';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

function AnimatedCounter({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) { setCount(to); return; }
    const duration = 1600;
    const startTime = performance.now();
    const raf = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, to, prefersReducedMotion]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); }
  };

  return sent ? (
    <div className="flex items-center gap-3 text-white">
      <CheckCircle2 className="h-5 w-5 text-[#778DA9] flex-shrink-0" />
      <span className="text-sm">Thanks! You'll hear from us soon.</span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1 flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 h-12 focus-within:border-[#778DA9] transition-colors">
        <Mail className="h-4 w-4 text-[#778DA9] flex-shrink-0" />
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-transparent flex-1 text-sm text-white placeholder-[#778DA9] outline-none"
        />
      </div>
      <button
        type="submit"
        className="h-12 px-6 rounded-xl bg-[#415A77] text-white text-sm font-semibold hover:bg-[#778DA9] transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
      >
        Subscribe <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-[#E0E1DD] font-sans transition-colors duration-300">

      {/* 1. Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F5F5]/95 dark:bg-[#0D1B2A]/95 backdrop-blur shadow-sm border-b border-[#E0E1DD] dark:border-white/10'
            : 'bg-[#F5F5F5]/80 dark:bg-[#0D1B2A]/80 backdrop-blur border-b border-transparent'
        }`}
      >
        {/* Desktop bar */}
        <div className="container mx-auto px-6 h-16 hidden md:grid md:grid-cols-3 items-center">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 font-bold text-lg text-[#0D1B2A] dark:text-white tracking-tight w-fit"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] dark:bg-[#415A77] text-[#F5F5F5] flex items-center justify-center font-bold text-sm">
              P
            </div>
            PixelStudio
          </button>

          {/* Nav links */}
          <nav className="flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-1.5 text-sm font-medium text-[#415A77] dark:text-[#778DA9] rounded-md transition-all duration-150 hover:text-[#0D1B2A] dark:hover:text-white hover:bg-[#E0E1DD]/60 dark:hover:bg-white/8"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA + theme toggle */}
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#415A77] dark:text-[#778DA9] hover:text-[#0D1B2A] dark:hover:text-white hover:bg-[#E0E1DD]/60 dark:hover:bg-white/8 transition-all duration-150"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button
              onClick={() => scrollTo('contact')}
              className="btn-glow bg-[#0D1B2A] dark:bg-[#415A77] text-[#F5F5F5] hover:bg-[#1B263B] dark:hover:bg-[#778DA9] rounded-lg px-5 h-9 text-sm font-semibold shadow-sm"
            >
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Mobile bar */}
        <div className="md:hidden flex items-center justify-between px-4 h-14">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-bold text-base text-[#0D1B2A] dark:text-white"
          >
            <div className="w-7 h-7 rounded-md bg-[#0D1B2A] dark:bg-[#415A77] text-[#F5F5F5] flex items-center justify-center text-xs font-bold">
              P
            </div>
            PixelStudio
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#415A77] dark:text-[#778DA9] hover:bg-[#E0E1DD]/70 dark:hover:bg-white/8 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#0D1B2A] dark:text-white hover:bg-[#E0E1DD]/70 dark:hover:bg-white/8 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden border-t border-[#E0E1DD] dark:border-white/10 bg-[#F5F5F5] dark:bg-[#0D1B2A]"
            >
              <nav className="px-4 pt-3 pb-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left px-3 py-3 text-base font-medium text-[#415A77] dark:text-[#778DA9] rounded-lg hover:text-[#0D1B2A] dark:hover:text-white hover:bg-[#E0E1DD]/60 dark:hover:bg-white/8 transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <div className="mt-3 pt-3 border-t border-[#E0E1DD] dark:border-white/10">
                  <Button
                    onClick={() => scrollTo('contact')}
                    className="w-full bg-[#0D1B2A] dark:bg-[#415A77] text-[#F5F5F5] hover:bg-[#1B263B] dark:hover:bg-[#778DA9] h-11 text-sm font-semibold rounded-lg"
                  >
                    Let's Talk
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#F5F5F5] dark:bg-[#0D1B2A]">
          <NetworkBackground />
          {/* Hero ambient glow — radial light behind headline */}
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
                  {/* Mockup navbar */}
                  <div className="h-9 bg-[#0D1B2A] flex items-center px-5 gap-4">
                    <span className="text-white font-bold text-[10px] tracking-widest uppercase">Bella Roma</span>
                    <div className="flex gap-4 ml-auto">
                      <span className="text-white/50 text-[8px] font-medium">Menu</span>
                      <span className="text-white/50 text-[8px] font-medium">About</span>
                      <span className="text-white/50 text-[8px] font-medium">Gallery</span>
                    </div>
                    <div className="px-3 h-5 bg-[#415A77] rounded text-white text-[8px] font-semibold flex items-center">Reserve</div>
                  </div>

                  {/* Mockup hero */}
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

                  {/* Mockup content section */}
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

        {/* 3. Trust Bar */}
        <section className="py-12 bg-white dark:bg-[#1B263B] border-y border-[#E0E1DD] dark:border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-sm font-semibold text-[#778DA9] uppercase tracking-wider mb-8"
            >
              Trusted by businesses across Germany
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70"
            >
              {[
                { Icon: Utensils, label: 'Restaurant' },
                { Icon: Scissors, label: 'Barber & Salon' },
                { Icon: Stethoscope, label: 'Medical Clinic' },
                { Icon: ShoppingBag, label: 'E-Commerce' },
                { Icon: MapPin, label: 'Local Services' },
                { Icon: Building, label: 'Real Estate' },
              ].map(({ Icon, label }) => (
                <motion.div
                  key={label}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="flex flex-col items-center gap-2 group cursor-default transition-opacity"
                >
                  <Icon className="h-8 w-8 text-[#415A77]" />
                  <span className="text-xs font-medium text-[#1B263B] dark:text-[#E0E1DD]">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* 4. Services Section */}
        <section id="services" className="relative overflow-hidden py-24 bg-[#F5F5F5] dark:bg-[#0D1B2A]">
          <motion.div animate={{ x: [0,25,0], y: [0,-20,0] }} transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }} className="absolute -top-48 -right-48 w-[560px] h-[560px] rounded-full bg-[#415A77]/6 dark:bg-[#415A77]/11 blur-[110px] pointer-events-none" />
          <motion.div animate={{ x: [0,-20,0], y: [0,25,0] }} transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut', delay: 5 }} className="absolute -bottom-48 -left-48 w-[480px] h-[480px] rounded-full bg-[#778DA9]/5 dark:bg-[#778DA9]/8 blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 bg-white dark:bg-[#1B263B] border-[#E0E1DD] dark:border-white/10 text-[#415A77] dark:text-[#778DA9]">Services</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4 tracking-tight">What We Do</h2>
              <p className="text-lg text-[#778DA9]">
                Simple, modern, and business-focused digital solutions for growing brands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Card A — Website Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                className="card-glow rounded-3xl overflow-hidden bg-white dark:bg-[#1B263B] shadow-sm hover:shadow-xl dark:hover:shadow-[#415A77]/10 border border-[#E0E1DD] dark:border-white/10 flex flex-col h-full transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-[#1B263B] to-[#415A77] p-6 relative overflow-hidden flex items-end justify-center">
                  <div className="w-[80%] h-[90%] bg-white dark:bg-[#0D1B2A] rounded-t-xl shadow-lg border border-white/10 flex flex-col overflow-hidden">
                    <div className="h-6 border-b border-[#E0E1DD] dark:border-white/10 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#E0E1DD]" />
                      <div className="w-2 h-2 rounded-full bg-[#E0E1DD]" />
                      <div className="w-2 h-2 rounded-full bg-[#E0E1DD]" />
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex justify-between">
                        <div className="w-16 h-3 bg-[#E0E1DD] rounded" />
                        <div className="flex gap-2">
                          <div className="w-8 h-2 bg-[#E0E1DD] rounded" />
                          <div className="w-8 h-2 bg-[#E0E1DD] rounded" />
                        </div>
                      </div>
                      <div className="h-20 bg-[#F5F5F5] dark:bg-[#415A77]/20 rounded-lg" />
                      <div className="flex gap-2">
                        <div className="h-16 flex-1 bg-[#F5F5F5] dark:bg-[#415A77]/20 rounded-lg" />
                        <div className="h-16 flex-1 bg-[#F5F5F5] dark:bg-[#415A77]/20 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#415A77]/10 dark:bg-[#415A77]/20 flex items-center justify-center text-[#415A77] mb-6">
                    <Layout className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-3">Website Development</h3>
                  <p className="text-[#778DA9] mb-6 flex-1">
                    Modern responsive websites designed to help businesses build trust, improve visibility, and convert visitors into customers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Responsive Design', 'SEO Basics', 'Fast Performance'].map(pill => (
                      <span key={pill} className="text-xs font-medium bg-[#F5F5F5] dark:bg-[#0D1B2A] text-[#1B263B] dark:text-[#E0E1DD] px-3 py-1.5 rounded-full border border-[#E0E1DD] dark:border-white/10">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card B — Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                className="card-glow rounded-3xl overflow-hidden bg-white dark:bg-[#1B263B] shadow-sm hover:shadow-xl dark:hover:shadow-[#415A77]/10 border border-[#E0E1DD] dark:border-white/10 flex flex-col h-full transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-[#415A77] to-[#778DA9] p-6 relative overflow-hidden flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 w-[70%]">
                    <div className="aspect-square bg-white rounded-lg shadow-md" />
                    <div className="aspect-square bg-white/50 rounded-lg shadow-md border border-white/20" />
                    <div className="aspect-square bg-white rounded-lg shadow-md" />
                    <div className="aspect-square bg-white/50 rounded-lg shadow-md border border-white/20" />
                    <div className="aspect-square bg-white rounded-lg shadow-md" />
                    <div className="aspect-square bg-white/50 rounded-lg shadow-md border border-white/20" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#415A77]/10 dark:bg-[#415A77]/20 flex items-center justify-center text-[#415A77] mb-6">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1B2A] dark:text-white mb-3">Social Media Content</h3>
                  <p className="text-[#778DA9] mb-6 flex-1">
                    Professional social media visuals that keep your brand consistent and visually strong across platforms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Post Design', 'Story Design', 'Brand Consistency'].map(pill => (
                      <span key={pill} className="text-xs font-medium bg-[#F5F5F5] dark:bg-[#0D1B2A] text-[#1B263B] dark:text-[#E0E1DD] px-3 py-1.5 rounded-full border border-[#E0E1DD] dark:border-white/10">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Full-width Card — Data-Driven */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 rounded-3xl overflow-hidden bg-white dark:bg-[#1B263B] shadow-sm border border-[#E0E1DD] dark:border-white/10 flex flex-col md:flex-row h-full"
              >
                <div className="md:w-1/2 bg-[#0D1B2A] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                  <h4 className="text-white font-bold text-xl mb-8 relative z-10">Data-Driven Growth</h4>
                  <div className="absolute inset-0 pt-32 px-8 flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <path d="M0 200 L0 150 Q100 120 200 160 T400 80 L400 200 Z" fill="rgba(65, 90, 119, 0.3)" />
                      <path d="M0 150 Q100 120 200 160 T400 80" fill="none" stroke="#778DA9" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="100" cy="135" r="6" fill="#F5F5F5" stroke="#0D1B2A" strokeWidth="3" />
                      <circle cx="200" cy="160" r="6" fill="#F5F5F5" stroke="#0D1B2A" strokeWidth="3" />
                      <circle cx="300" cy="120" r="6" fill="#F5F5F5" stroke="#0D1B2A" strokeWidth="3" />
                      <circle cx="400" cy="80" r="6" fill="#F5F5F5" stroke="#0D1B2A" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#F5F5F5] dark:bg-[#1B263B]">
                  <h3 className="text-3xl font-bold text-[#0D1B2A] dark:text-white mb-8">Built for Conversion</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0D1B2A] shadow-sm flex items-center justify-center shrink-0 border border-[#E0E1DD] dark:border-white/10">
                        <TrendingUp className="h-5 w-5 text-[#415A77]" />
                      </div>
                      <div>
                        <h5 className="font-bold text-[#0D1B2A] dark:text-white">Performance Tracking</h5>
                        <p className="text-sm text-[#778DA9] mt-1">Websites built with analytics in mind from day one.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0D1B2A] shadow-sm flex items-center justify-center shrink-0 border border-[#E0E1DD] dark:border-white/10">
                        <Rocket className="h-5 w-5 text-[#415A77]" />
                      </div>
                      <div>
                        <h5 className="font-bold text-[#0D1B2A] dark:text-white">Fast Loading Speeds</h5>
                        <p className="text-sm text-[#778DA9] mt-1">Optimized assets and code for maximum performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us */}
        <section className="relative overflow-hidden py-24 bg-[#0D1B2A] dark:bg-[#070D15]">
          {/* top highlight line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#415A77]/50 to-transparent pointer-events-none" />
          {/* bottom highlight line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#415A77]/30 to-transparent pointer-events-none" />
          {/* center spotlight */}
          <motion.div animate={{ opacity: [0.5, 0.85, 0.5] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-[#415A77]/10 blur-[130px] pointer-events-none" />
          <motion.div animate={{ x: [0,40,0], y: [0,30,0] }} transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut', delay: 4 }} className="absolute -bottom-24 -right-24 w-[450px] h-[450px] rounded-full bg-[#778DA9]/8 blur-[100px] pointer-events-none" />
          <motion.div animate={{ x: [0,-30,0], y: [0,-20,0] }} transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 9 }} className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-[#1B263B]/70 blur-[80px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  Modern Design<br />With A Business<br />
                  <span className="text-[#778DA9]">Mindset.</span>
                </h2>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Professional Look', desc: 'Build trust with clean and premium digital presence.', icon: Shield },
                  { title: 'Business Focused', desc: 'We focus on helping businesses grow, not just creating visuals.', icon: TrendingUp },
                  { title: 'Responsive Experience', desc: 'Websites optimized for desktop, tablet, and mobile devices.', icon: Smartphone },
                  { title: 'Clear Communication', desc: 'Simple process, fast communication, and reliable delivery.', icon: MessageSquare }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    className="flex flex-col p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/4 transition-colors duration-300 cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ duration: 0.2 }}
                      className="w-12 h-12 rounded-xl bg-[#1B263B] border border-white/10 flex items-center justify-center text-[#778DA9] mb-4"
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#778DA9] text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Portfolio Section */}
        <section id="work" className="relative overflow-hidden py-24 bg-white dark:bg-[#0D1B2A]">
          <motion.div animate={{ x: [0,-20,0], y: [0,-28,0] }} transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 2 }} className="absolute -top-48 -left-48 w-[520px] h-[520px] rounded-full bg-[#415A77]/5 dark:bg-[#415A77]/9 blur-[110px] pointer-events-none" />
          <motion.div animate={{ x: [0,28,0], y: [0,20,0] }} transition={{ repeat: Infinity, duration: 24, ease: 'easeInOut', delay: 7 }} className="absolute -bottom-48 -right-48 w-[440px] h-[440px] rounded-full bg-[#778DA9]/4 dark:bg-[#778DA9]/7 blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 max-w-6xl mx-auto">
              <div className="max-w-2xl">
                <Badge variant="outline" className="mb-4 bg-[#F5F5F5] dark:bg-[#1B263B] border-[#E0E1DD] dark:border-white/10 text-[#415A77] dark:text-[#778DA9]">Selected Work</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4 tracking-tight">Recent Projects</h2>
                <p className="text-lg text-[#778DA9]">
                  A selection of modern website and branding concepts created for businesses.
                </p>
              </div>
              <Button variant="outline" className="border-[#E0E1DD] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-white/8 w-full md:w-auto">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="columns-1 md:columns-2 gap-8 max-w-6xl mx-auto space-y-8">
              {[
                {
                  title: 'The King Kam',
                  desc: 'High-impact car detailing website with bold visual identity, WhatsApp booking integration, and a strong German-market presence.',
                  category: 'Website',
                  url: 'https://www.thekingkam.de/',
                  image: '/work-kingkam.png',
                  height: 'h-72',
                  tag: 'Auto Detailing · Bad Pyrmont'
                },
                {
                  title: 'Iqraa Cloud',
                  desc: "Syria's first digital library platform — a full Arabic e-commerce experience with 10,000+ books, user accounts, and a clean RTL storefront.",
                  category: 'Web App',
                  url: 'https://iqraa.cloud/',
                  image: '/work-iqraa.png',
                  height: 'h-96',
                  tag: 'E-Library · Arabic Platform'
                },
                {
                  title: 'Ahmad Saghir',
                  desc: 'Sleek developer portfolio showcasing skills, projects, and client reviews — built for maximum credibility and conversion.',
                  category: 'Portfolio',
                  url: 'https://ahmadsaghir.de/',
                  image: '/work-ahmad.png',
                  height: 'h-80',
                  tag: 'Portfolio · Web Developer'
                },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 2) * 0.2 }}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                  className="group cursor-pointer break-inside-avoid"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="card-glow overflow-hidden border border-[#E0E1DD] dark:border-white/10 bg-white dark:bg-[#1B263B] hover:shadow-2xl hover:shadow-[#415A77]/10 transition-shadow duration-500 rounded-2xl flex flex-col">
                      <div className={`${project.height} w-full relative overflow-hidden`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                            <ExternalLink className="h-3.5 w-3.5 text-[#0D1B2A]" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary" className="bg-[#F5F5F5] dark:bg-[#0D1B2A] text-[#415A77] dark:text-[#778DA9] hover:bg-[#E0E1DD] font-medium">{project.category}</Badge>
                          <span className="text-xs text-[#778DA9]">{project.tag}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A] dark:text-white mb-3 flex items-center justify-between group-hover:text-[#415A77] transition-colors">
                          {project.title}
                          <ExternalLink className="h-5 w-5 text-[#778DA9] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300 flex-shrink-0" />
                        </h3>
                        <p className="text-[#778DA9] leading-relaxed">{project.desc}</p>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6b. Social Media Showcase */}
        <SocialCarousel onViewMore={() => scrollTo('work')} />

        {/* 7. Process Section */}
        <section id="process" className="relative overflow-hidden py-24 bg-[#F5F5F5] dark:bg-[#0D1B2A]">
          <motion.div animate={{ x: [0,22,0], y: [0,-16,0] }} transition={{ repeat: Infinity, duration: 19, ease: 'easeInOut' }} className="absolute top-1/2 -translate-y-1/2 -right-48 w-[420px] h-[420px] rounded-full bg-[#415A77]/5 dark:bg-[#415A77]/8 blur-[100px] pointer-events-none" />
          <motion.div animate={{ x: [0,-18,0], y: [0,22,0] }} transition={{ repeat: Infinity, duration: 23, ease: 'easeInOut', delay: 6 }} className="absolute top-1/2 -translate-y-1/2 -left-48 w-[360px] h-[360px] rounded-full bg-[#778DA9]/4 dark:bg-[#778DA9]/6 blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Badge variant="outline" className="mb-4 bg-white dark:bg-[#1B263B] border-[#E0E1DD] dark:border-white/10 text-[#415A77] dark:text-[#778DA9]">Our Process</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4 tracking-tight">How We Work</h2>
            </div>
            <div className="relative max-w-6xl mx-auto">
              <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#778DA9]/30" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                {[
                  { num: '01', title: 'Discovery', desc: 'Understanding your business goals and target audience.' },
                  { num: '02', title: 'Strategy & Design', desc: 'Creating visual concepts and planning the structure.' },
                  { num: '03', title: 'Development', desc: 'Building the website with modern, fast technologies.' },
                  { num: '04', title: 'Launch', desc: 'Final testing and going live to the world.' }
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="bg-[#F5F5F5] dark:bg-[#0D1B2A] px-4 py-2 mb-2">
                      <span className="text-6xl md:text-7xl font-bold text-[#0D1B2A]/5 dark:text-white/5">{step.num}</span>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-[#1B263B] dark:bg-[#415A77] border-4 border-[#F5F5F5] dark:border-[#0D1B2A] absolute top-[52px] hidden md:block" />
                    <h3 className="text-xl font-bold text-[#0D1B2A] dark:text-white mb-3 mt-4 md:mt-8">{step.title}</h3>
                    <p className="text-[#778DA9] text-sm max-w-[200px]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Pricing Section */}
        <section id="pricing" className="relative overflow-hidden py-24 bg-white dark:bg-[#1B263B] border-t border-[#E0E1DD] dark:border-white/10">
          <motion.div animate={{ scale: [1,1.12,1], opacity: [0.25,0.45,0.25] }} transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-[#415A77]/6 dark:bg-[#415A77]/12 blur-[130px] pointer-events-none" />
          <motion.div animate={{ x: [0,-28,0], y: [0,18,0] }} transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut', delay: 4 }} className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[#778DA9]/5 dark:bg-[#778DA9]/9 blur-[100px] pointer-events-none" />
          <motion.div animate={{ x: [0,22,0], y: [0,-16,0] }} transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 8 }} className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full bg-[#415A77]/4 dark:bg-[#415A77]/8 blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 bg-[#F5F5F5] dark:bg-[#0D1B2A] border-[#E0E1DD] dark:border-white/10 text-[#415A77] dark:text-[#778DA9]">Pricing</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4 tracking-tight">Flexible Solutions For Growing Businesses</h2>
              <p className="text-lg text-[#778DA9]">
                Transparent pricing designed for businesses that want a professional online presence without unnecessary complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
              {/* Starter */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}>
                <Card className="card-glow h-full border border-[#E0E1DD] dark:border-white/10 bg-white dark:bg-[#0D1B2A] flex flex-col rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0D1B2A] dark:text-white mb-2">Starter Website</h3>
                    <p className="text-sm text-[#778DA9] mb-6">Small businesses & personal brands</p>
                    <div className="mb-6">
                      <span className="text-sm text-[#778DA9]">Starting from</span>
                      <div className="text-4xl font-bold text-[#0D1B2A] dark:text-white tracking-tight">€499</div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {['Modern Landing Page', 'Mobile Responsive', 'Contact Form', 'Basic SEO'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-[#0D1B2A] dark:text-[#E0E1DD]">
                          <Check className="h-5 w-5 text-[#415A77] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#F5F5F5] dark:bg-[#1B263B] text-[#0D1B2A] dark:text-white hover:bg-[#E0E1DD] dark:hover:bg-[#415A77]/30 border border-[#E0E1DD] dark:border-white/10">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Business — Popular */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -8, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}>
                <Card className="card-glow h-full border-none bg-[#0D1B2A] dark:bg-[#415A77] shadow-2xl hover:shadow-[#415A77]/40 relative flex flex-col rounded-3xl transform md:-translate-y-4 transition-shadow duration-300">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#415A77] dark:bg-white dark:text-[#0D1B2A] text-white hover:bg-[#415A77]">Most Popular</Badge>
                  <CardContent className="p-8 flex-1 flex flex-col text-white">
                    <h3 className="text-xl font-bold mb-2 mt-2">Business Website</h3>
                    <p className="text-sm text-[#778DA9] dark:text-white/70 mb-6">Growing businesses</p>
                    <div className="mb-6">
                      <span className="text-sm text-[#778DA9] dark:text-white/70">Starting from</span>
                      <div className="text-4xl font-bold tracking-tight">€999</div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {['Multi-Page Website', 'Premium UI Design', 'Mobile Responsive', 'SEO Basics', 'Booking System', 'Google Maps'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                          <Check className="h-5 w-5 text-[#778DA9] dark:text-white flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-white dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1B263B]">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* E-Commerce */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}>
                <Card className="card-glow h-full border border-[#E0E1DD] dark:border-white/10 bg-white dark:bg-[#0D1B2A] flex flex-col rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0D1B2A] dark:text-white mb-2">E-Commerce</h3>
                    <p className="text-sm text-[#778DA9] mb-6">Online stores</p>
                    <div className="mb-6">
                      <span className="text-sm text-[#778DA9]">Starting from</span>
                      <div className="text-4xl font-bold text-[#0D1B2A] dark:text-white tracking-tight">€1,999</div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {['Online Store Setup', 'Payment Integration', 'Product Management', 'Advanced SEO'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-[#0D1B2A] dark:text-[#E0E1DD]">
                          <Check className="h-5 w-5 text-[#415A77] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#F5F5F5] dark:bg-[#1B263B] text-[#0D1B2A] dark:text-white hover:bg-[#E0E1DD] dark:hover:bg-[#415A77]/30 border border-[#E0E1DD] dark:border-white/10">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 9. Final CTA */}
        <section id="contact" className="py-24 bg-[#1B263B] relative overflow-hidden">
          {/* Decorative background orbs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#415A77] blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#778DA9] blur-[120px] pointer-events-none"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your business online?</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-[#778DA9] mb-10 max-w-2xl mx-auto"
              >
                Let's discuss how we can help you build a professional digital presence that attracts more customers.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Button size="lg" className="bg-white text-[#0D1B2A] hover:bg-[#F5F5F5] h-14 px-10 text-lg rounded-xl shadow-2xl shadow-black/30 font-semibold group">
                  Contact Us Today
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="ml-2 inline-block"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D1B2A]">

        {/* Newsletter banner */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl py-14">
            <div className="rounded-2xl bg-[#1B263B] px-8 md:px-14 py-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2">
                  Get tips on growing your business online
                </h3>
                <p className="text-[#778DA9] text-sm">
                  Monthly insights on web design, social media, and digital marketing. No spam, unsubscribe anytime.
                </p>
              </div>
              <div className="flex-1 max-w-md w-full">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Col 1 — Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-lg text-white tracking-tight mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#415A77] text-white flex items-center justify-center text-sm font-bold">P</div>
                PixelStudio
              </div>
              <p className="text-[#778DA9] text-sm leading-relaxed mb-6 max-w-[220px]">
                Modern websites and social media content for businesses that want to stand out online.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Twitter, label: 'Twitter' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-[#778DA9] hover:text-white hover:bg-[#415A77] hover:border-[#415A77] transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Company */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'Services', id: 'services' },
                  { label: 'Our Work', id: 'work' },
                  { label: 'Pricing', id: 'pricing' },
                  { label: 'Process', id: 'process' },
                ].map(({ label, id }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-[#778DA9] text-sm hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Services</h4>
              <ul className="space-y-3">
                {['Website Development', 'Social Media Content', 'Brand Identity', 'SEO Basics', 'Performance Tracking'].map(label => (
                  <li key={label}>
                    <a href="#" className="text-[#778DA9] text-sm hover:text-white transition-colors duration-150">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+4915112345678" className="flex items-center gap-3 text-[#778DA9] text-sm hover:text-white transition-colors duration-150 group">
                    <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-[#415A77] group-hover:border-[#415A77] transition-all duration-200 flex-shrink-0">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    +49 151 1234 5678
                  </a>
                </li>
                <li>
                  <a href="mailto:hallo@pixelstudio.de" className="flex items-center gap-3 text-[#778DA9] text-sm hover:text-white transition-colors duration-150 group">
                    <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-[#415A77] group-hover:border-[#415A77] transition-all duration-200 flex-shrink-0">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    hallo@pixelstudio.de
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-[#778DA9] text-sm">
                    <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    München, Deutschland
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#778DA9] text-xs">
              © {new Date().getFullYear()} PixelStudio. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms of Use', 'Imprint'].map(label => (
                <a key={label} href="#" className="text-[#778DA9] text-xs hover:text-white transition-colors duration-150">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}
