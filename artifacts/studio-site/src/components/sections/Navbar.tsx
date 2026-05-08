import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/theme';

interface NavbarProps {
  scrollTo: (id: string) => void;
}

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Work', id: 'work' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Process', id: 'process' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ scrollTo }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F5F5]/95 dark:bg-[#0D1B2A]/95 backdrop-blur shadow-sm border-b border-[#E0E1DD] dark:border-white/10'
          : 'bg-[#F5F5F5]/80 dark:bg-[#0D1B2A]/80 backdrop-blur border-b border-transparent'
      }`}
    >
      {/* Desktop bar */}
      <div className="container mx-auto px-6 h-16 hidden md:grid md:grid-cols-3 items-center">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 font-bold text-lg text-[#0D1B2A] dark:text-white tracking-tight w-fit"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] dark:bg-[#415A77] text-[#F5F5F5] flex items-center justify-center font-bold text-sm">
            P
          </div>
          PixelStudio
        </button>

        <nav className="flex items-center justify-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="px-3 py-1.5 text-sm font-medium text-[#415A77] dark:text-[#778DA9] rounded-md transition-all duration-150 hover:text-[#0D1B2A] dark:hover:text-white hover:bg-[#E0E1DD]/60 dark:hover:bg-white/8"
            >
              {link.name}
            </button>
          ))}
        </nav>

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
          onClick={() => handleNavClick('home')}
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
                  onClick={() => handleNavClick(link.id)}
                  className="w-full text-left px-3 py-3 text-base font-medium text-[#415A77] dark:text-[#778DA9] rounded-lg hover:text-[#0D1B2A] dark:hover:text-white hover:bg-[#E0E1DD]/60 dark:hover:bg-white/8 transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="mt-3 pt-3 border-t border-[#E0E1DD] dark:border-white/10">
                <Button
                  onClick={() => handleNavClick('contact')}
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
  );
}
