import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, CheckCircle2, Check, ExternalLink, 
  Shield, TrendingUp, Smartphone, MessageSquare, 
  Utensils, Scissors, Stethoscope, ShoppingBag, MapPin, Building,
  Layout, Rocket
} from 'lucide-react';
import NetworkBackground from '@/components/hero/NetworkBackground';
import SocialCarousel from '@/components/SocialCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
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
    <div className="min-h-screen bg-[#F5F5F5] text-[#0D1B2A] font-sans">
      {/* 1. Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F5F5]/95 backdrop-blur shadow-sm border-b border-[#E0E1DD]'
            : 'bg-[#F5F5F5]/80 backdrop-blur border-b border-transparent'
        }`}
      >
        {/* Desktop bar */}
        <div className="container mx-auto px-6 h-16 hidden md:grid md:grid-cols-3 items-center">
          {/* Logo — left */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 font-bold text-lg text-[#0D1B2A] tracking-tight w-fit"
            data-testid="logo-desktop"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] text-[#F5F5F5] flex items-center justify-center font-bold text-sm">
              P
            </div>
            PixelStudio
          </button>

          {/* Nav links — center */}
          <nav className="flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                data-testid={`nav-${link.id}`}
                className="px-3 py-1.5 text-sm font-medium text-[#415A77] rounded-md transition-all duration-150 hover:text-[#0D1B2A] hover:bg-[#E0E1DD]/60"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA — right */}
          <div className="flex justify-end">
            <Button
              onClick={() => scrollTo('contact')}
              data-testid="button-letstalk-desktop"
              className="bg-[#0D1B2A] text-[#F5F5F5] hover:bg-[#1B263B] rounded-lg px-5 h-9 text-sm font-semibold shadow-sm"
            >
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Mobile bar */}
        <div className="md:hidden flex items-center justify-between px-4 h-14">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-bold text-base text-[#0D1B2A]"
            data-testid="logo-mobile"
          >
            <div className="w-7 h-7 rounded-md bg-[#0D1B2A] text-[#F5F5F5] flex items-center justify-center text-xs font-bold">
              P
            </div>
            PixelStudio
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="button-mobile-menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[#0D1B2A] hover:bg-[#E0E1DD]/70 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile dropdown — top to bottom */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden border-t border-[#E0E1DD] bg-[#F5F5F5]"
            >
              <nav className="px-4 pt-3 pb-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                    onClick={() => scrollTo(link.id)}
                    data-testid={`nav-mobile-${link.id}`}
                    className="w-full text-left px-3 py-3 text-base font-medium text-[#415A77] rounded-lg hover:text-[#0D1B2A] hover:bg-[#E0E1DD]/60 transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <div className="mt-3 pt-3 border-t border-[#E0E1DD]">
                  <Button
                    onClick={() => scrollTo('contact')}
                    data-testid="button-letstalk-mobile"
                    className="w-full bg-[#0D1B2A] text-[#F5F5F5] hover:bg-[#1B263B] h-11 text-sm font-semibold rounded-lg"
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
        <section id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#F5F5F5]">
          <NetworkBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col mb-10 items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-[#F5F5F5]/50 backdrop-blur-sm border-[#778DA9]/30 text-[#415A77] font-medium">
                  Modern Websites & Digital Presence
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0D1B2A] leading-[1.1] mb-6">
                  Helping Businesses Build A <span className="text-[#415A77]">Strong Online Presence</span>
                </h1>
                <p className="text-lg md:text-xl text-[#415A77] mb-8 leading-relaxed max-w-2xl mx-auto">
                  We create modern websites and professional social media content that help businesses look trustworthy, attract more customers, and grow online.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                  <Button onClick={() => scrollTo('work')} variant="outline" size="lg" className="border-[#778DA9]/30 text-[#0D1B2A] hover:bg-[#E0E1DD] font-medium h-12 px-8">
                    View Work
                  </Button>
                  <Button onClick={() => scrollTo('contact')} size="lg" className="bg-[#0D1B2A] text-[#F5F5F5] hover:bg-[#1B263B] font-medium h-12 px-8">
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              {/* ── Browser window mockup ── */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0E1DD] bg-white">

                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 h-10 bg-[#F0F0EE] border-b border-[#E0E1DD]">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-2 h-5 bg-white rounded border border-[#E0E1DD] flex items-center px-3 gap-1.5 max-w-xs">
                    <div className="w-2.5 h-2.5 rounded-full border border-[#778DA9]/40 flex-shrink-0" />
                    <span className="text-[9px] text-[#778DA9] font-medium truncate">pixelstudio.de/restaurant-demo</span>
                  </div>
                </div>

                {/* ── Simulated website inside the browser ── */}
                <div className="flex flex-col select-none">

                  {/* Website Navbar */}
                  <div className="h-9 bg-[#0D1B2A] flex items-center px-5 gap-4">
                    <div className="w-16 h-2.5 bg-white/30 rounded-full" />
                    <div className="flex gap-3 ml-auto">
                      <div className="w-8 h-1.5 bg-white/20 rounded-full" />
                      <div className="w-8 h-1.5 bg-white/20 rounded-full" />
                      <div className="w-8 h-1.5 bg-white/20 rounded-full" />
                    </div>
                    <div className="w-14 h-5 bg-[#415A77] rounded flex items-center justify-center">
                      <div className="w-8 h-1.5 bg-white/80 rounded-full" />
                    </div>
                  </div>

                  {/* Website Hero — rich gradient */}
                  <div className="bg-gradient-to-br from-[#1B263B] via-[#415A77] to-[#778DA9] px-6 md:px-10 py-7 flex items-center gap-8">
                    <div className="flex-1 space-y-2.5">
                      <div className="w-24 h-3 bg-[#778DA9]/50 rounded-full" />
                      <div className="w-4/5 h-5 bg-white/80 rounded-md" />
                      <div className="w-3/5 h-5 bg-white/50 rounded-md" />
                      <div className="space-y-1.5 pt-1">
                        <div className="w-full h-2 bg-white/15 rounded-full" />
                        <div className="w-5/6 h-2 bg-white/15 rounded-full" />
                      </div>
                      <div className="flex gap-2.5 pt-2">
                        <div className="w-20 h-7 bg-white rounded-md" />
                        <div className="w-20 h-7 border border-white/40 rounded-md" />
                      </div>
                    </div>
                    {/* Right image block */}
                    <div className="hidden sm:block w-32 md:w-44 h-24 md:h-32 bg-white/10 rounded-xl border border-white/20 flex-shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 space-y-1.5">
                        <div className="w-3/4 h-2 bg-white/30 rounded-full" />
                        <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Website content area */}
                  <div className="bg-[#F5F5F5] px-6 md:px-10 py-5 grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-3">
                      <div className="w-1/3 h-3 bg-[#0D1B2A]/25 rounded-full" />
                      <div className="w-full h-2 bg-[#E0E1DD] rounded-full" />
                      <div className="w-5/6 h-2 bg-[#E0E1DD] rounded-full" />
                      <div className="w-4/6 h-2 bg-[#E0E1DD] rounded-full" />
                      <div className="flex gap-3 pt-1">
                        <div className="h-14 flex-1 bg-white rounded-xl border border-[#E0E1DD]" />
                        <div className="h-14 flex-1 bg-white rounded-xl border border-[#E0E1DD]" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-20 rounded-xl bg-gradient-to-br from-[#415A77]/20 to-[#778DA9]/10 border border-[#E0E1DD]" />
                      <div className="h-6 w-full bg-[#0D1B2A] rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating phone mockup (bottom-right) ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 right-0 md:-right-4 w-24 md:w-32 bg-[#0D1B2A] rounded-[1.4rem] border-4 border-[#0D1B2A] shadow-2xl overflow-hidden hidden sm:block z-20"
              >
                {/* Phone notch */}
                <div className="h-4 bg-[#0D1B2A] flex items-center justify-center">
                  <div className="w-8 h-1.5 bg-[#1B263B] rounded-full" />
                </div>
                {/* Phone screen */}
                <div className="bg-white rounded-b-[1rem] overflow-hidden">
                  <div className="h-6 bg-[#1B263B] flex items-center px-2 gap-1">
                    <div className="w-6 h-1.5 bg-white/40 rounded-full" />
                  </div>
                  <div className="p-2 space-y-1.5 bg-[#F5F5F5]">
                    <div className="h-12 rounded-lg bg-gradient-to-br from-[#415A77] to-[#778DA9]" />
                    <div className="w-3/4 h-1.5 bg-[#E0E1DD] rounded-full" />
                    <div className="w-1/2 h-1.5 bg-[#E0E1DD] rounded-full" />
                    <div className="grid grid-cols-2 gap-1 pt-1">
                      <div className="h-8 rounded-md bg-white border border-[#E0E1DD]" />
                      <div className="h-8 rounded-md bg-white border border-[#E0E1DD]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating accent cards ── */}

              {/* Top-left: Responsive badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-4 -left-2 md:-left-8 bg-white border border-[#E0E1DD] shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 z-30"
              >
                <div className="w-9 h-9 rounded-xl bg-[#415A77]/10 flex items-center justify-center text-[#415A77] flex-shrink-0">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0D1B2A] leading-none mb-0.5">Mobile Ready</p>
                  <p className="text-[10px] text-[#778DA9]">All screen sizes</p>
                </div>
              </motion.div>

              {/* Bottom-left: Star rating */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 left-2 md:-left-4 bg-white border border-[#E0E1DD] shadow-xl rounded-2xl px-4 py-3 z-30"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-[#FEBC2E] fill-[#FEBC2E]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[10px] font-semibold text-[#0D1B2A]">5.0 Client Rating</p>
                <p className="text-[9px] text-[#778DA9]">Based in Germany</p>
              </motion.div>

              {/* Top-right: Social post preview */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-5 right-10 md:right-6 bg-white border border-[#E0E1DD] shadow-xl rounded-2xl overflow-hidden w-32 z-30 hidden md:block"
              >
                <div className="h-16 bg-gradient-to-br from-[#415A77] to-[#778DA9] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Layout className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-2.5 space-y-1">
                  <div className="w-3/4 h-1.5 bg-[#0D1B2A]/20 rounded-full" />
                  <div className="w-1/2 h-1.5 bg-[#E0E1DD] rounded-full" />
                </div>
              </motion.div>

              {/* Right-side: Growth indicator */}
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/3 -right-3 md:-right-10 bg-white border border-[#E0E1DD] shadow-xl rounded-2xl px-3 py-2.5 flex items-center gap-2 z-30 hidden md:flex"
              >
                <div className="w-8 h-8 rounded-xl bg-[#1B263B]/10 flex items-center justify-center text-[#1B263B] flex-shrink-0">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0D1B2A] leading-none mb-0.5">+120% Traffic</p>
                  <p className="text-[9px] text-[#778DA9]">After launch</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. Trust Bar */}
        <section className="py-12 bg-white border-y border-[#E0E1DD]">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-semibold text-[#778DA9] uppercase tracking-wider mb-8">
              Trusted by businesses across Germany
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity">
                <Utensils className="h-8 w-8 text-[#415A77]" />
                <span className="text-xs font-medium text-[#1B263B]">Restaurant</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity">
                <Scissors className="h-8 w-8 text-[#415A77]" />
                <span className="text-xs font-medium text-[#1B263B]">Barber & Salon</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity">
                <Stethoscope className="h-8 w-8 text-[#415A77]" />
                <span className="text-xs font-medium text-[#1B263B]">Medical Clinic</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity">
                <ShoppingBag className="h-8 w-8 text-[#415A77]" />
                <span className="text-xs font-medium text-[#1B263B]">E-Commerce</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity">
                <MapPin className="h-8 w-8 text-[#415A77]" />
                <span className="text-xs font-medium text-[#1B263B]">Local Services</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity">
                <Building className="h-8 w-8 text-[#415A77]" />
                <span className="text-xs font-medium text-[#1B263B]">Real Estate</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Services Section (Bento Grid) */}
        <section id="services" className="py-24 bg-[#F5F5F5]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 bg-white border-[#E0E1DD] text-[#415A77]">Services</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] mb-4 tracking-tight">What We Do</h2>
              <p className="text-lg text-[#778DA9]">
                Simple, modern, and business-focused digital solutions for growing brands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Row 1: Card A - Website Development */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-3xl overflow-hidden bg-white shadow-sm border border-[#E0E1DD] flex flex-col h-full"
              >
                {/* Top Half: Visual */}
                <div className="h-64 bg-gradient-to-br from-[#1B263B] to-[#415A77] p-6 relative overflow-hidden flex items-end justify-center">
                  <div className="w-[80%] h-[90%] bg-white rounded-t-xl shadow-lg border border-white/10 flex flex-col overflow-hidden">
                    <div className="h-6 border-b border-[#E0E1DD] flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#E0E1DD]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#E0E1DD]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#E0E1DD]"></div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex justify-between">
                        <div className="w-16 h-3 bg-[#E0E1DD] rounded"></div>
                        <div className="flex gap-2">
                          <div className="w-8 h-2 bg-[#E0E1DD] rounded"></div>
                          <div className="w-8 h-2 bg-[#E0E1DD] rounded"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-[#F5F5F5] rounded-lg"></div>
                      <div className="flex gap-2">
                        <div className="h-16 flex-1 bg-[#F5F5F5] rounded-lg"></div>
                        <div className="h-16 flex-1 bg-[#F5F5F5] rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bottom Half: Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#415A77]/10 flex items-center justify-center text-[#415A77] mb-6">
                    <Layout className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1B2A] mb-3">Website Development</h3>
                  <p className="text-[#778DA9] mb-6 flex-1">
                    Modern responsive websites designed to help businesses build trust, improve visibility, and convert visitors into customers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Responsive Design', 'SEO Basics', 'Fast Performance'].map(pill => (
                      <span key={pill} className="text-xs font-medium bg-[#F5F5F5] text-[#1B263B] px-3 py-1.5 rounded-full border border-[#E0E1DD]">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Row 1: Card B - Social Media Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl overflow-hidden bg-white shadow-sm border border-[#E0E1DD] flex flex-col h-full"
              >
                {/* Top Half: Visual */}
                <div className="h-64 bg-gradient-to-br from-[#415A77] to-[#778DA9] p-6 relative overflow-hidden flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 w-[70%]">
                    <div className="aspect-square bg-white rounded-lg shadow-md"></div>
                    <div className="aspect-square bg-white/50 rounded-lg shadow-md border border-white/20"></div>
                    <div className="aspect-square bg-white rounded-lg shadow-md"></div>
                    <div className="aspect-square bg-white/50 rounded-lg shadow-md border border-white/20"></div>
                    <div className="aspect-square bg-white rounded-lg shadow-md"></div>
                    <div className="aspect-square bg-white/50 rounded-lg shadow-md border border-white/20"></div>
                  </div>
                </div>
                {/* Bottom Half: Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#415A77]/10 flex items-center justify-center text-[#415A77] mb-6">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1B2A] mb-3">Social Media Content</h3>
                  <p className="text-[#778DA9] mb-6 flex-1">
                    Professional social media visuals that keep your brand consistent and visually strong across platforms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Post Design', 'Story Design', 'Brand Consistency'].map(pill => (
                      <span key={pill} className="text-xs font-medium bg-[#F5F5F5] text-[#1B263B] px-3 py-1.5 rounded-full border border-[#E0E1DD]">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Row 2: Full-width Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 rounded-3xl overflow-hidden bg-white shadow-sm border border-[#E0E1DD] flex flex-col md:flex-row h-full"
              >
                {/* Left Side: Dark Analytics Panel */}
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
                {/* Right Side: Content */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#F5F5F5]">
                  <h3 className="text-3xl font-bold text-[#0D1B2A] mb-8">Built for Conversion</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#E0E1DD]">
                        <TrendingUp className="h-5 w-5 text-[#415A77]" />
                      </div>
                      <div>
                        <h5 className="font-bold text-[#0D1B2A]">Performance Tracking</h5>
                        <p className="text-sm text-[#778DA9] mt-1">Websites built with analytics in mind from day one.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#E0E1DD]">
                        <Rocket className="h-5 w-5 text-[#415A77]" />
                      </div>
                      <div>
                        <h5 className="font-bold text-[#0D1B2A]">Fast Loading Speeds</h5>
                        <p className="text-sm text-[#778DA9] mt-1">Optimized assets and code for maximum performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. "Super Power" Statement Section (Why Choose Us) */}
        <section className="py-24 bg-[#E0E1DD]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] leading-[1.1] tracking-tight">
                  Modern Design<br/>With A Business<br/>Mindset.
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
                    className="flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#415A77] mb-4 shadow-sm">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{item.title}</h3>
                    <p className="text-[#415A77] text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Portfolio Section */}
        <section id="work" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 max-w-6xl mx-auto">
              <div className="max-w-2xl">
                <Badge variant="outline" className="mb-4 bg-[#F5F5F5] border-[#E0E1DD] text-[#415A77]">Selected Work</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] mb-4 tracking-tight">Recent Projects</h2>
                <p className="text-lg text-[#778DA9]">
                  A selection of modern website and branding concepts created for businesses.
                </p>
              </div>
              <Button variant="outline" className="border-[#E0E1DD] text-[#0D1B2A] hover:bg-[#F5F5F5] w-full md:w-auto">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 gap-8 max-w-6xl mx-auto space-y-8">
              {[
                { title: 'Barber Website', desc: 'Modern landing page with integrated booking system.', category: 'Website', color: 'from-[#1B263B] to-[#415A77]', height: 'h-72' },
                { title: 'Restaurant Landing Page', desc: 'Appetizing visual design showcasing menu and location.', category: 'Website', color: 'from-[#415A77] to-[#778DA9]', height: 'h-96' },
                { title: 'Medical Clinic Website', desc: 'Trust-building professional layout with patient forms.', category: 'Website', color: 'from-[#778DA9] to-[#E0E1DD]', height: 'h-80' },
                { title: 'Social Media Branding Pack', desc: 'Cohesive visual templates for Instagram and Facebook.', category: 'Branding', color: 'from-[#0D1B2A] to-[#1B263B]', height: 'h-72' }
              ].map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 2) * 0.2 }}
                  className="group cursor-pointer break-inside-avoid"
                >
                  <Card className="overflow-hidden border border-[#E0E1DD] bg-white hover:shadow-xl transition-all duration-500 rounded-2xl flex flex-col">
                    <div className={`${project.height} w-full bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700`}>
                      <div className="absolute inset-0 bg-[#0D1B2A]/5 mix-blend-overlay"></div>
                      
                      {/* CSS Wireframe Overlay */}
                      <div className="absolute inset-4 md:inset-8 border border-white/20 rounded-xl overflow-hidden flex flex-col backdrop-blur-sm bg-white/5">
                        <div className="h-8 border-b border-white/20 flex items-center px-4">
                          <div className="w-12 h-2 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="flex-1 p-4 md:p-6 space-y-4">
                          <div className="w-3/4 h-6 bg-white/20 rounded-md"></div>
                          <div className="w-1/2 h-4 bg-white/10 rounded-md"></div>
                          <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="h-20 bg-white/10 rounded-lg"></div>
                            <div className="h-20 bg-white/10 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8">
                      <Badge variant="secondary" className="mb-4 bg-[#F5F5F5] text-[#415A77] hover:bg-[#E0E1DD] font-medium">{project.category}</Badge>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A] mb-3 flex items-center justify-between group-hover:text-[#415A77] transition-colors">
                        {project.title}
                        <ExternalLink className="h-5 w-5 text-[#778DA9] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" />
                      </h3>
                      <p className="text-[#778DA9] leading-relaxed">{project.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6b. Social Media Showcase */}
        <SocialCarousel onViewMore={() => scrollTo('work')} />

        {/* 7. Process Section (Horizontal Timeline) */}
        <section id="process" className="py-24 bg-[#F5F5F5]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Badge variant="outline" className="mb-4 bg-white border-[#E0E1DD] text-[#415A77]">Our Process</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] mb-4 tracking-tight">How We Work</h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Connecting Line (hidden on mobile) */}
              <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#778DA9]/30"></div>

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
                    <div className="bg-[#F5F5F5] px-4 py-2 mb-2">
                      <span className="text-6xl md:text-7xl font-bold text-[#0D1B2A]/5">{step.num}</span>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-[#1B263B] border-4 border-[#F5F5F5] absolute top-[52px] hidden md:block"></div>
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 mt-4 md:mt-8">{step.title}</h3>
                    <p className="text-[#778DA9] text-sm max-w-[200px]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Pricing Section */}
        <section id="pricing" className="py-24 bg-white border-t border-[#E0E1DD]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 bg-[#F5F5F5] border-[#E0E1DD] text-[#415A77]">Pricing</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] mb-4 tracking-tight">Flexible Solutions For Growing Businesses</h2>
              <p className="text-lg text-[#778DA9]">
                Transparent pricing designed for businesses that want a professional online presence without unnecessary complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
              {/* Starter */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Card className="h-full border border-[#E0E1DD] bg-white flex flex-col rounded-3xl shadow-sm">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Starter Website</h3>
                    <p className="text-sm text-[#778DA9] mb-6">Small businesses & personal brands</p>
                    <div className="mb-6">
                      <span className="text-sm text-[#778DA9]">Starting from</span>
                      <div className="text-4xl font-bold text-[#0D1B2A] tracking-tight">€499</div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {['Modern Landing Page', 'Mobile Responsive', 'Contact Form', 'Basic SEO'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-[#0D1B2A]">
                          <Check className="h-5 w-5 text-[#415A77] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#F5F5F5] text-[#0D1B2A] hover:bg-[#E0E1DD] border border-[#E0E1DD]">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Business - Popular */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card className="h-full border-none bg-[#0D1B2A] shadow-2xl relative flex flex-col rounded-3xl transform md:-translate-y-4">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#415A77] text-white hover:bg-[#415A77]">Most Popular</Badge>
                  <CardContent className="p-8 flex-1 flex flex-col text-white">
                    <h3 className="text-xl font-bold mb-2 mt-2">Business Website</h3>
                    <p className="text-sm text-[#778DA9] mb-6">Growing businesses</p>
                    <div className="mb-6">
                      <span className="text-sm text-[#778DA9]">Starting from</span>
                      <div className="text-4xl font-bold tracking-tight">€999</div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {['Multi-Page Website', 'Premium UI Design', 'Mobile Responsive', 'SEO Basics', 'Booking System', 'Google Maps'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                          <Check className="h-5 w-5 text-[#415A77] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-white text-[#0D1B2A] hover:bg-[#F5F5F5]">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* E-Commerce */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Card className="h-full border border-[#E0E1DD] bg-white flex flex-col rounded-3xl shadow-sm">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">E-Commerce</h3>
                    <p className="text-sm text-[#778DA9] mb-6">Online stores</p>
                    <div className="mb-6">
                      <span className="text-sm text-[#778DA9]">Starting from</span>
                      <div className="text-4xl font-bold text-[#0D1B2A] tracking-tight">€1,999</div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {['Online Store Setup', 'Payment Integration', 'Product Management', 'Advanced SEO'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-[#0D1B2A]">
                          <Check className="h-5 w-5 text-[#415A77] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#F5F5F5] text-[#0D1B2A] hover:bg-[#E0E1DD] border border-[#E0E1DD]">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 9. Final CTA & Footer */}
        <section id="contact" className="py-24 bg-[#1B263B]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your business online?</h2>
              <p className="text-xl text-[#778DA9] mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you build a professional digital presence that attracts more customers.
              </p>
              <Button size="lg" className="bg-white text-[#0D1B2A] hover:bg-[#F5F5F5] h-14 px-8 text-lg rounded-xl">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D1B2A] py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tight">
              <div className="w-8 h-8 rounded bg-[#415A77] text-white flex items-center justify-center">
                P
              </div>
              PixelStudio
            </div>
            <p className="text-[#778DA9] text-sm">
              © {new Date().getFullYear()} PixelStudio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
