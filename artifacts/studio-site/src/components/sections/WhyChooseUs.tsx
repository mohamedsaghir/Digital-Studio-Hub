import { motion } from 'framer-motion';
import { Shield, TrendingUp, Smartphone, MessageSquare } from 'lucide-react';

const features = [
  { title: 'Professional Look', desc: 'Build trust with clean and premium digital presence.', icon: Shield },
  { title: 'Business Focused', desc: 'We focus on helping businesses grow, not just creating visuals.', icon: TrendingUp },
  { title: 'Responsive Experience', desc: 'Websites optimized for desktop, tablet, and mobile devices.', icon: Smartphone },
  { title: 'Clear Communication', desc: 'Simple process, fast communication, and reliable delivery.', icon: MessageSquare },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0D1B2A] dark:bg-[#070D15]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#415A77]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#415A77]/30 to-transparent pointer-events-none" />
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
            {features.map((item, i) => (
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
  );
}
