import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your business goals and target audience.' },
  { num: '02', title: 'Strategy & Design', desc: 'Creating visual concepts and planning the structure.' },
  { num: '03', title: 'Development', desc: 'Building the website with modern, fast technologies.' },
  { num: '04', title: 'Launch', desc: 'Final testing and going live to the world.' },
];

export default function ProcessSection() {
  return (
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
            {steps.map((step, i) => (
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
  );
}
