import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'The King Kam',
    desc: 'High-impact car detailing website with bold visual identity, WhatsApp booking integration, and a strong German-market presence.',
    category: 'Website',
    url: 'https://www.thekingkam.de/',
    image: '/work-kingkam.png',
    height: 'h-56',
    tag: 'Auto Detailing · Bad Pyrmont',
  },
  {
    title: 'Iqraa Cloud',
    desc: "Syria's first digital library platform — a full Arabic e-commerce experience with 10,000+ books, user accounts, and a clean RTL storefront.",
    category: 'Web App',
    url: 'https://iqraa.cloud/',
    image: '/work-iqraa.png',
    height: 'h-56',
    tag: 'E-Library · Arabic Platform',
  },
  {
    title: 'Ahmad Saghir',
    desc: 'Sleek developer portfolio showcasing skills, projects, and client reviews — built for maximum credibility and conversion.',
    category: 'Portfolio',
    url: 'https://ahmadsaghir.de/',
    image: '/work-ahmad.png',
    height: 'h-56',
    tag: 'Portfolio · Web Developer',
  },
];

export default function PortfolioSection() {
  return (
    <section id="work" className="relative overflow-hidden py-24 bg-white dark:bg-[#0D1B2A]">
      <motion.div animate={{ x: [0,-20,0], y: [0,-28,0] }} transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 2 }} className="absolute -top-48 -left-48 w-[520px] h-[520px] rounded-full bg-[#415A77]/5 dark:bg-[#415A77]/9 blur-[110px] pointer-events-none" />
      <motion.div animate={{ x: [0,28,0], y: [0,20,0] }} transition={{ repeat: Infinity, duration: 24, ease: 'easeInOut', delay: 7 }} className="absolute -bottom-48 -right-48 w-[440px] h-[440px] rounded-full bg-[#778DA9]/4 dark:bg-[#778DA9]/7 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 max-w-6xl mx-auto">
          <Badge variant="outline" className="mb-4 bg-[#F5F5F5] dark:bg-[#1B263B] border-[#E0E1DD] dark:border-white/10 text-[#415A77] dark:text-[#778DA9]">Selected Work</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4 tracking-tight">Recent Projects</h2>
          <p className="text-lg text-[#778DA9]">
            A selection of modern website and branding concepts created for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
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
  );
}
