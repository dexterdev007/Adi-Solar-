import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All About Solar", href: "/all-about-solar" },
  { label: "Solar Calculator", href: "/solar-calculator" },
  { label: "Blog", href: "/blog" },
  { label: "Get Solar", href: "/get-solar" },
];

const SERVICES = [
  "Residential Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Solar Street Lights",
  "Maintenance & AMC",
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Col 1: Logo + Tagline */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <a
              href="/"
              className="flex items-center gap-2"
              aria-label="AdiSolar home"
            >
              <Image 
                src="/assets/logo.png" 
                alt="AdiSolar Logo" 
                width={140} 
                height={35} 
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Powering India, one rooftop at a time. We are your trusted partner for clean, reliable solar energy solutions.
            </p>
            <a
              href="https://wa.me/918882088600"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-white transition-colors mt-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest">
              Services
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {SERVICES.map((service) => (
                <li key={service} className="text-white/60 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href="tel:+918882088600"
                  className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors"
                  aria-label="Call +91 8882088600"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  +91 8882088600
                </a>
              </li>
              <li>
                <a
                  href="mailto:adisolar@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-accent text-sm transition-colors"
                  aria-label="Email adisolar@gmail.com"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  adisolar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                New Delhi (Pan India Service)
              </li>
            </ul>
          </div>

          {/* Col 5: Cities We Serve */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest">
              Cities We Serve
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-white/40 text-xs mb-1">North</p>
                <div className="flex flex-wrap gap-2">
                  {["Dehradun", "Lucknow", "Gorakhpur", "Varanasi"].map((city) => (
                    <a
                      key={city}
                      href={`/solar-installation-${city.toLowerCase()}`}
                      className="text-white/60 hover:text-accent text-xs transition-colors"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">East</p>
                <div className="flex flex-wrap gap-2">
                  {["Begusarai", "Bhagalpur", "Ranchi", "Bhubaneswar"].map((city) => (
                    <a
                      key={city}
                      href={`/solar-installation-${city.toLowerCase()}`}
                      className="text-white/60 hover:text-accent text-xs transition-colors"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Northeast</p>
                <div className="flex flex-wrap gap-2">
                  {["Guwahati", "Silchar", "Tinsukia"].map((city) => (
                    <a
                      key={city}
                      href={`/solar-installation-${city.toLowerCase()}`}
                      className="text-white/60 hover:text-accent text-xs transition-colors"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">West</p>
                <div className="flex flex-wrap gap-2">
                  {["Ahmedabad"].map((city) => (
                    <a
                      key={city}
                      href={`/solar-installation-${city.toLowerCase()}`}
                      className="text-white/60 hover:text-accent text-xs transition-colors"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 6: From the Blog */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest">
              From the Blog
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              <li>
                <a
                  href="/blog/solar-panel-cost-india-2026"
                  className="text-white/60 hover:text-accent text-sm transition-colors line-clamp-2"
                >
                  Solar Panel Cost 2026
                </a>
              </li>
              <li>
                <a
                  href="/blog/pm-surya-ghar-subsidy-guide"
                  className="text-white/60 hover:text-accent text-sm transition-colors line-clamp-2"
                >
                  PM Surya Ghar Guide
                </a>
              </li>
              <li>
                <a
                  href="/blog/solar-installation-process-india"
                  className="text-white/60 hover:text-accent text-sm transition-colors line-clamp-2"
                >
                  Installation Process
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-sm">
          <p>© 2026 AdiSolar. All rights reserved.</p>
          <p>Designed with ☀️ in India</p>
        </div>
      </div>
    </footer>
  );
}
