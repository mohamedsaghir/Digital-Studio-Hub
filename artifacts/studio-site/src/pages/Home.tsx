import React from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight, CheckCircle2, Check, ExternalLink } from 'lucide-react';
import NetworkBackground from '@/components/hero/NetworkBackground';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Process', id: 'process' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* 1. Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center">
              P
            </div>
            PixelStudio
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-secondary transition-colors hover:text-primary"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => scrollTo('contact')} className="bg-primary text-primary-foreground hover:bg-primary/90 ml-4">
              Let's Talk
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <button 
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className="text-lg font-medium text-left text-secondary transition-colors hover:text-primary py-2"
                  >
                    {link.name}
                  </button>
                ))}
                <Separator className="my-4" />
                <Button onClick={() => scrollTo('contact')} className="w-full bg-primary text-primary-foreground">
                  Let's Talk
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="relative min-h-[90vh] flex items-center pt-16 md:pt-0 overflow-hidden bg-background">
          <NetworkBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <Badge variant="outline" className="mb-6 py-1.5 px-4 bg-background/50 backdrop-blur-sm border-border text-secondary font-medium">
                  Modern Websites & Digital Presence
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight mb-6">
                  Helping Businesses Build A <span className="text-secondary">Strong Online Presence</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  We create modern websites and professional social media content that help businesses look trustworthy, attract more customers, and grow online.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button onClick={() => scrollTo('work')} variant="outline" size="lg" className="border-border text-primary hover:bg-muted font-medium h-12 px-8">
                    View Work
                  </Button>
                  <Button onClick={() => scrollTo('contact')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8">
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  <span>Based in Germany</span>
                  <span className="mx-1">•</span>
                  <span>Modern Design</span>
                  <span className="mx-1">•</span>
                  <span>Business-Focused Approach</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:block relative h-[600px] w-full"
              >
                {/* Stylized Mockup Display */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[580px] bg-card rounded-[2.5rem] border-8 border-primary shadow-2xl overflow-hidden relative z-10">
                  {/* Phone notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-primary rounded-b-xl w-32 mx-auto z-20"></div>
                  {/* Screen Content */}
                  <div className="w-full h-full bg-background flex flex-col">
                    <div className="h-48 bg-muted w-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10" />
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="h-6 w-3/4 bg-border/20 rounded"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-border/10 rounded"></div>
                        <div className="h-4 w-5/6 bg-border/10 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-4">
                        <div className="h-24 bg-card border rounded-lg"></div>
                        <div className="h-24 bg-card border rounded-lg"></div>
                      </div>
                      <div className="h-10 w-full bg-primary rounded-md mt-4"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-20 right-4 bg-background border border-border shadow-lg rounded-xl p-3 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm text-primary">Responsive Design</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-32 left-4 bg-background border border-border shadow-lg rounded-xl p-3 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm text-primary">Modern Branding</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-16 right-0 bg-background border border-border shadow-lg rounded-xl p-3 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm text-primary">Social Media Content</span>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-40 left-0 bg-background border border-border shadow-lg rounded-xl p-3 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm text-primary">Fast & Professional</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Badge variant="outline" className="mb-4 bg-background/50 border-border text-secondary">Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground">
                Simple, modern, and business-focused digital solutions for growing brands.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-border bg-background hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Website Development</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Modern responsive websites designed to help businesses build trust, improve visibility, and convert visitors into customers.
                    </p>
                    <ul className="space-y-3">
                      {['Responsive Design', 'Landing Pages', 'Business Websites', 'SEO Basics', 'Contact Forms', 'Booking Systems', 'Fast Performance'].map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-medium text-primary">
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-border bg-background hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m9 16 3-3 3 3"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Social Media Content</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Professional social media visuals that keep your brand consistent and visually strong across platforms.
                    </p>
                    <ul className="space-y-3">
                      {['Post Design', 'Story Design', 'Branding Consistency', 'Professional Visuals', 'Content Support'].map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-medium text-primary">
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Badge variant="outline" className="mb-4 bg-background border-border text-secondary">Why Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Modern Design With A Business Mindset</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Professional Look', desc: 'Build trust with clean and premium digital presence.', icon: 'shield' },
                { title: 'Business Focused', desc: 'We focus on helping businesses grow, not just creating visuals.', icon: 'trending-up' },
                { title: 'Responsive Experience', desc: 'Websites optimized for desktop, tablet, and mobile devices.', icon: 'smartphone' },
                { title: 'Clear Communication', desc: 'Simple process, fast communication, and reliable delivery.', icon: 'message-square' }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border bg-card/50 hover:bg-card transition-colors duration-300 border-none shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Portfolio Section */}
        <section id="work" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
            >
              <div className="max-w-2xl">
                <Badge variant="outline" className="mb-4 bg-background/50 border-border text-secondary">Selected Work</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Recent Projects</h2>
                <p className="text-lg text-muted-foreground">
                  A selection of modern website and branding concepts created for businesses.
                </p>
              </div>
              <Button variant="outline" className="border-border text-primary hover:bg-muted w-full md:w-auto">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Barber Website', desc: 'Modern landing page with integrated booking system.', category: 'Website', color: 'from-[#1B263B] to-[#415A77]' },
                { title: 'Restaurant Landing Page', desc: 'Appetizing visual design showcasing menu and location.', category: 'Website', color: 'from-[#415A77] to-[#778DA9]' },
                { title: 'Medical Clinic Website', desc: 'Trust-building professional layout with patient forms.', category: 'Website', color: 'from-[#778DA9] to-[#E0E1DD]' },
                { title: 'Social Media Branding Pack', desc: 'Cohesive visual templates for Instagram and Facebook.', category: 'Branding', color: 'from-[#0D1B2A] to-[#1B263B]' }
              ].map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-border bg-background hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className={`h-64 w-full bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-background/10 mix-blend-overlay"></div>
                      {/* Abstract pattern overlay */}
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3 bg-card text-secondary hover:bg-card">{project.category}</Badge>
                      <h3 className="text-xl font-bold text-primary mb-2 flex items-center justify-between">
                        {project.title}
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground">{project.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pricing Section */}
        <section id="pricing" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Badge variant="outline" className="mb-4 bg-background border-border text-secondary">Pricing</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flexible Solutions For Growing Businesses</h2>
              <p className="text-lg text-muted-foreground">
                Transparent pricing designed for businesses that want a professional online presence without unnecessary complexity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Card className="h-full border-border bg-card/50 flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-2">Starter Website</h3>
                    <p className="text-sm text-muted-foreground mb-6">Small businesses & personal brands</p>
                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-3xl font-bold text-primary">€499</div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {['Modern Landing Page', 'Mobile Responsive Design', 'Contact Form', 'Basic SEO', 'WhatsApp Integration', 'Fast Performance'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-primary">
                          <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground" variant="default">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Business - Popular */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card className="h-full border-secondary bg-background shadow-lg relative flex flex-col transform md:-translate-y-4">
                  <div className="absolute top-0 inset-x-0 h-1 bg-secondary rounded-t-xl"></div>
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-primary-foreground">Most Popular</Badge>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-2 mt-2">Business Website</h3>
                    <p className="text-sm text-muted-foreground mb-6">Growing businesses</p>
                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-3xl font-bold text-primary">€999</div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {['Multi-Page Website', 'Premium UI Design', 'Mobile Responsive', 'SEO Basics', 'Booking / Contact System', 'Google Maps Integration', 'Social Media Integration'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm font-medium text-primary">
                          <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground" variant="default">Start Your Project</Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Package */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <Card className="h-full border-border bg-card/50 flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-2">Website + Content</h3>
                    <p className="text-sm text-muted-foreground mb-6">Complete digital presence</p>
                    <div className="mb-6">
                      <span className="text-sm text-transparent select-none">Pricing</span>
                      <div className="text-3xl font-bold text-primary">Custom Pricing</div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {['Website Design & Development', 'Social Media Post Design', 'Story Design', 'Branding Consistency', 'Content Support'].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-primary">
                          <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-border text-primary hover:bg-muted">Contact Us</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Flexible Payments Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="outline" className="mb-4 border-primary-foreground/20 text-primary-foreground/80">Flexible Payment Options</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Digital Solutions With Flexible Payments</h2>
              <p className="text-primary-foreground/70">
                We offer installment options for selected projects to help businesses launch professionally without large upfront costs.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: '2 Payments', desc: '50% before project start, 50% after completion' },
                { title: 'Monthly Installments', desc: 'Available for selected projects and larger packages' },
                { title: 'Ongoing Support', desc: 'Optional monthly support for updates, content, and maintenance' }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center"
                >
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Process Section */}
        <section id="process" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <Badge variant="outline" className="mb-4 bg-background border-border text-secondary">Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple & Clear Process</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Desktop connecting line */}
                <div className="hidden lg:block absolute top-8 left-12 right-12 h-[2px] bg-border/30 -z-10"></div>
                
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your business, goals, and audience.' },
                  { step: '02', title: 'Design', desc: 'Creating a modern and professional visual direction.' },
                  { step: '03', title: 'Development', desc: 'Building a responsive and high-quality digital experience.' },
                  { step: '04', title: 'Launch', desc: 'Delivering and helping your business go live confidently.' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-card border-4 border-background flex items-center justify-center text-xl font-bold text-secondary shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Final CTA Section */}
        <section id="contact" className="py-24 bg-accent relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Let's Build Your Digital Presence
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
                Whether you need a modern website or professional social media content, we help your business look professional online.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto h-14 px-8 text-base font-semibold">
                  Start a Project
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto h-14 px-8 text-base font-semibold">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="bg-background border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-primary tracking-tight">
                <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center">
                  P
                </div>
                PixelStudio
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Modern websites and digital content for businesses that want to grow online.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-primary mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => scrollTo(link.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={() => scrollTo('contact')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-primary mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">hello@pixelstudio.com</li>
                <li className="hover:text-primary cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Instagram</li>
                <li className="mt-4 text-primary font-medium">Germany</li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-border/50 mb-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            © 2026 PixelStudio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
