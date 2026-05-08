import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import NewsletterForm from "@/components/shared/NewsletterForm";

interface FooterProps {
  scrollTo: (id: string) => void;
}

const companyLinks = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "Our Work", id: "work" },
  { label: "Pricing", id: "pricing" },
  { label: "Process", id: "process" },
];

const serviceLinks = [
  "Website Development",
  "Social Media Content",
  "Brand Identity",
  "SEO Basics",
  "Performance Tracking",
];

const socialLinks = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
];

export default function Footer({ scrollTo }: FooterProps) {
  return (
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
                Monthly insights on web design, social media, and digital
                marketing. No spam, unsubscribe anytime.
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
              <div className="w-8 h-8 rounded-lg bg-[#415A77] text-white flex items-center justify-center text-sm font-bold">
                P
              </div>
              PixelStudio
            </div>
            <p className="text-[#778DA9] text-sm leading-relaxed mb-6 max-w-[220px]">
              Modern websites and social media content for businesses that want
              to stand out online.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, label }) => (
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
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, id }) => (
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
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-[#778DA9] text-sm hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+4915112345678"
                  className="flex items-center gap-3 text-[#778DA9] text-sm hover:text-white transition-colors duration-150 group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-[#415A77] group-hover:border-[#415A77] transition-all duration-200 flex-shrink-0">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  +49 176 2213 6498
                </a>
              </li>
              <li>
                <a
                  href="mailto:hallo@pixelstudio.de"
                  className="flex items-center gap-3 text-[#778DA9] text-sm hover:text-white transition-colors duration-150 group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-[#415A77] group-hover:border-[#415A77] transition-all duration-200 flex-shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  hallo@pixelstudio.de
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=München,Deutschland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#778DA9] text-sm hover:text-white transition-colors duration-150 group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-[#415A77] group-hover:border-[#415A77] transition-all duration-200 flex-shrink-0">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  München, Deutschland
                </a>
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
            {["Privacy Policy", "Terms of Use", "Imprint"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[#778DA9] text-xs hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
