import { motion } from 'framer-motion';
import { Layout, Smartphone, TrendingUp, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ServicesSection() {
  return (
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
  );
}
