import { motion } from 'framer-motion';
import { Utensils, Scissors, Stethoscope, ShoppingBag, MapPin, Building } from 'lucide-react';

const industries = [
  { Icon: Utensils, label: 'Restaurant' },
  { Icon: Scissors, label: 'Barber & Salon' },
  { Icon: Stethoscope, label: 'Medical Clinic' },
  { Icon: ShoppingBag, label: 'E-Commerce' },
  { Icon: MapPin, label: 'Local Services' },
  { Icon: Building, label: 'Real Estate' },
];

export default function TrustBar() {
  return (
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
          {industries.map(({ Icon, label }) => (
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
  );
}
