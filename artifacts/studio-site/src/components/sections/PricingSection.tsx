import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  return (
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
  );
}
