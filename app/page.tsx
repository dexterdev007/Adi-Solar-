"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormInput } from "@/components/ui/FormInput";
import { StepCard } from "@/components/ui/StepCard";
import { Badge } from "@/components/ui/Badge";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { MorphingHeadline } from "@/components/ui/MorphingHeadline";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import {
  Sun,
  Zap,
  Calendar,
  IndianRupee,
  Leaf,
  Home as HomeIcon,
  Building2,
  Factory,
  ChevronDown,
  Wrench,
  Star,
  TrendingUp,
  TreePine,
  Unplug,
} from "lucide-react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AdiSolar",
  description: "Pan India solar panel installation and services company",
  url: "https://adisolar.in",
  telephone: "+91-8882088600",
  email: "adisolar@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6139",
    longitude: "77.2090",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  priceRange: "₹₹",
  openingHours: "Mo-Sa 09:00-18:00",
  sameAs: ["https://wa.me/918882088600"],
  serviceType: [
    "Residential Solar Installation",
    "Commercial Solar Installation",
    "Industrial Solar Installation",
    "Solar Maintenance and AMC",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a solar installation cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3 kW residential solar system costs ₹1,20,000–₹1,80,000 after government subsidy. The PM Surya Ghar Muft Bijli Yojana provides up to ₹78,000 in central subsidy for eligible homeowners. AdiSolar provides free site visits and transparent quotes with no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a government subsidy for solar in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under PM Surya Ghar Muft Bijli Yojana, Indian homeowners can receive up to ₹78,000 — ₹30,000 per kW for the first 2 kW and ₹18,000 per kW for the next 1 kW. AdiSolar handles the complete application on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "How long does solar panel installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard residential installation takes 1–2 days. Commercial projects take 3–7 days. AdiSolar schedules at your convenience with minimal disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Do solar panels work on cloudy days in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Solar panels work on diffused daylight at 10–25% of rated output on cloudy days. India's 4–5 daily peak sun hours ensure excellent year-round performance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the payback period for solar in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average payback period is 4–6 years. With PM Surya Ghar subsidy, many customers achieve payback in under 4 years. After payback, electricity is essentially free for 20+ more years.",
      },
    },
    {
      "@type": "Question",
      name: "What is net metering and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Net metering allows your meter to run backwards when solar panels generate more than you consume. Surplus units are credited to your account. AdiSolar handles the net metering application with your local DISCOM.",
      },
    },
  ],
};

export default function Home() {
  return (
    <PageTransition>
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-16 lg:pt-20 overflow-hidden">
        {/* 1. HeroSection */}
        <motion.section
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-surface-dark bg-cover bg-center" style={{ backgroundImage: "url('/assets/solar/hero-main.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6">
              <motion.h1
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-white text-4xl lg:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                India's Sunshine, Your Savings.<br /> Go Solar with AdiSolar
              </motion.h1>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-white/80 text-lg lg:text-xl max-w-xl">
                <span>Pan India solar installation. </span>
                <MorphingHeadline
                  phrases={[
                    "For your home.",
                    "For your office.",
                    "For your factory."
                  ]}
                  className="text-accent inline-block"
                />
              </motion.div>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <Button href="/all-about-solar" variant="accent" size="lg">
                  Learn How Solar Works
                </Button>
              </motion.div>
            </div>

            {/* Right: Lead Form Card */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white/95 backdrop-blur rounded-none shadow-xl p-6 lg:p-8 border border-white/20 w-full max-w-md mx-auto lg:ml-auto text-center lg:text-left">
              <h2 className="text-2xl font-bold text-text-primary font-heading mb-6 text-left">
                Get a Free Site Visit
              </h2>
              <form 
                className="flex flex-col gap-4 text-left"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                  const originalText = submitBtn.innerText;
                  submitBtn.innerText = "Submitting...";
                  submitBtn.disabled = true;

                  const data = {
                    name: (form.elements.namedItem('name') as HTMLInputElement).value,
                    phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
                    message: `Pincode: ${(form.elements.namedItem('pincode') as HTMLInputElement).value} | Bill: ${(form.elements.namedItem('bill') as HTMLInputElement).value}`,
                    source: 'frontend_hero',
                  };

                  try {
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });
                    if (res.ok) {
                      form.reset();
                      alert("✓ Thank you! We'll contact you shortly to schedule your free site visit.");
                    } else {
                      alert("❌ Error submitting form. Please try again or call us.");
                    }
                  } catch (err) {
                    alert("❌ Error submitting form. Please check your connection.");
                  } finally {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                  }
                }}
              >
                <FormInput id="hero-name" name="name" label="Full Name" placeholder="John Doe" required />
                <FormInput id="hero-mobile" name="phone" label="Mobile Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
                <FormInput id="hero-pincode" name="pincode" label="Pincode" placeholder="110001" required />
                <FormInput id="hero-bill" name="bill" label="Approx Monthly Electricity Bill (₹)" type="number" placeholder="5000" />
                <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
                  Book My Free Visit
                </Button>
              </form>
              <p className="text-xs text-text-tertiary mt-4">
                Free visit · No commitment · Pan India service
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 2. WhySolarStrip */}
        <section className="py-12 bg-primary-pale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest text-center mb-8">
                Why Solar?
              </h2>
            </RevealWrapper>
            <InfiniteMarquee speed={30} className="w-full">
              {[
                { icon: Sun, title: "Save Up to 90%", desc: "Cut your electricity bill dramatically" },
                { icon: Zap, title: "Power Independence", desc: "No more cuts or outages" },
                { icon: Calendar, title: "25-Year Panel Life", desc: "Built to last, built to perform" },
                { icon: IndianRupee, title: "Govt. Subsidies", desc: "Up to ₹78,000 subsidy available" },
                { icon: Leaf, title: "Zero Emissions", desc: "Clean energy, clean conscience" },
                { icon: Wrench, title: "Minimal Maintenance", desc: "Set it up, then forget about it" },
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-72">
                  <div className="bg-white rounded-none p-6 shadow-sm flex flex-col items-center text-center gap-3 border border-border hover:shadow-md transition-shadow h-full min-h-[160px]">
                    <item.icon className="w-8 h-8 text-accent mb-1" />
                    <span className="text-text-primary font-bold text-lg leading-tight">{item.title}</span>
                    <span className="text-text-secondary text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </InfiniteMarquee>
          </div>
        </section>

        {/* 3. ROI & Impact Scorecard */}
        <section className="py-16 md:py-24 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                {
                  icon: IndianRupee,
                  title: "The Zero Bill Goal",
                  desc: "Precision-engineered systems designed to significantly reduce or eliminate your monthly electricity bill."
                },
                {
                  icon: TrendingUp,
                  title: "Property Appreciation",
                  desc: "Instantly increase your real estate value by up to 4-6% by transforming your roof into a power-generating asset."
                },
                {
                  icon: TreePine,
                  title: "Carbon Footprint Hub",
                  desc: "Every installation effectively offsets tonnes of CO2 emissions for decades—comparable to planting a mini-forest."
                },
                {
                  icon: Unplug,
                  title: "Energy Self-Reliance",
                  desc: "Gain total independence from grid fluctuations and eliminate dependency on noisy, polluting diesel generators."
                }
              ].map((item, i) => (
                <RevealWrapper key={i} variant="fadeUp" delay={i * 0.1}>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
                    <div className="w-14 h-14 rounded-none bg-accent-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-text-primary font-heading uppercase tracking-tight">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WhoWeServe */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="Our Clients"
                heading="Solar Solutions for Every Need"
                subtext="Whether you're a homeowner, a business owner, or running a large institution — we have a system for you."
                className="mb-12"
                withLine
              />
            </RevealWrapper>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealWrapper staggerChild variant="scaleIn">
                <Card variant="standard" className="flex flex-col items-center text-center relative overflow-hidden h-full group !p-0">
                  <div className="w-full h-48 overflow-hidden relative">
                    <img src="/assets/solar/residential.png" alt="Solar panels installed on rooftop of residential home in India" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                    <Badge variant="accent" className="absolute top-4 right-4">Most Popular</Badge>
                  </div>
                  <div className="p-6 lg:p-8 pt-4">
                    <div className="mb-4">
                      <HomeIcon className="w-10 h-10 text-primary mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-text-primary">Residential</h3>
                    <p className="text-text-secondary">Homes, villas, apartments, and housing societies. Reduce your family's electricity bill and add value to your property.</p>
                  </div>
                </Card>
              </RevealWrapper>
              <RevealWrapper staggerChild variant="scaleIn">
                <Card variant="standard" className="flex flex-col items-center text-center h-full group !p-0 overflow-hidden">
                  <div className="w-full h-48 overflow-hidden relative">
                    <img src="/assets/solar/commercial.png" alt="Commercial solar installation on office building rooftop in India" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-6 lg:p-8 pt-4">
                    <div className="mb-4">
                      <Building2 className="w-10 h-10 text-primary mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-text-primary">Commercial</h3>
                    <p className="text-text-secondary">Offices, retail outlets, warehouses, and hotels. Cut operational costs and demonstrate your commitment to sustainability.</p>
                  </div>
                </Card>
              </RevealWrapper>
              <RevealWrapper staggerChild variant="scaleIn">
                <Card variant="standard" className="flex flex-col items-center text-center h-full group !p-0 overflow-hidden">
                  <div className="w-full h-48 overflow-hidden relative">
                    <img src="/assets/solar/industrial.png" alt="Large-scale industrial and institutional solar panel installation on factory roof" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-6 lg:p-8 pt-4">
                    <div className="mb-4">
                      <Factory className="w-10 h-10 text-primary mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-text-primary">Industrial & Institutional</h3>
                    <p className="text-text-secondary">Factories, schools, colleges, and hospitals. Large-scale solar designed for high-consumption facilities.</p>
                  </div>
                </Card>
              </RevealWrapper>
            </StaggerContainer>
          </div>
        </section>

        {/* 5. OurProcess */}
        <section className="py-20 lg:py-28 bg-white text-center md:text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="How It Works"
                heading="Simple. Transparent. End-to-End."
                subtext="We handle everything — from your first question to your last kilowatt."
                className="mb-16"
                withLine
              />
            </RevealWrapper>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8 relative items-start">
              <div className="hidden md:block absolute top-[20px] left-0 w-full h-0.5 bg-border -z-10" />
              <RevealWrapper staggerChild variant="scaleIn"><StepCard step={1} title="Free Site Visit" body="Our expert visits your location at zero cost. We assess your roof, orientation, shading, and electricity usage." image="/assets/solar/step-visit.png" /></RevealWrapper>
              <RevealWrapper staggerChild variant="scaleIn"><StepCard step={2} title="Energy Evaluation" body="We analyse your consumption patterns and calculate the exact system size that maximises your savings." image="/assets/solar/step-eval.png" /></RevealWrapper>
              <RevealWrapper staggerChild variant="scaleIn"><StepCard step={3} title="Custom System Design" body="Every installation is designed for your specific property — no off-the-shelf solutions, no guesswork." image="/assets/solar/step-design.png" /></RevealWrapper>
              <RevealWrapper staggerChild variant="scaleIn"><StepCard step={4} title="Professional Installation" body="Our certified technicians install your system safely and efficiently, typically in 1–3 days." image="/assets/solar/step-install.png" /></RevealWrapper>
              <RevealWrapper staggerChild variant="scaleIn"><StepCard step={5} title="Monitor & Support" body="Post-installation, we monitor your system's performance and provide ongoing maintenance and technical support." image="/assets/solar/step-support.png" /></RevealWrapper>
            </StaggerContainer>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="What Our Customers Say"
                heading="Real People. Real Savings."
                className="mb-12"
              />
            </RevealWrapper>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Rajesh Sharma", role: "Homeowner", location: "Delhi", quote: "AdiSolar made the entire process effortless. From the site visit to installation, everything was handled professionally." },
                { name: "Priya Mehta", role: "Business Owner", location: "Gurugram", quote: "Our office electricity bill dropped by 70% in the first month. The team was knowledgeable and delivered on time." },
                { name: "Vikram Singh", role: "Factory Owner", location: "Noida", quote: "We installed a 50kW system for our factory. AdiSolar handled everything including the subsidy paperwork. Highly recommended." },
              ].map((t, i) => (
                <RevealWrapper staggerChild variant="scaleIn" key={i}>
                  <Card variant="standard" className="flex flex-col h-full items-start">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <div className="flex-1 text-text-secondary mb-6 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</div>
                    <div className="mt-auto border-t border-border pt-4 w-full border-dashed">
                      <div className="font-bold text-text-primary">{t.name}</div>
                      <div className="text-sm text-text-tertiary">{t.role}, {t.location}</div>
                    </div>
                  </Card>
                </RevealWrapper>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 7. FAQSection */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="Questions"
                heading="Frequently Asked Questions"
                className="mb-12"
              />
            </RevealWrapper>
            <div className="flex flex-col divide-y divide-border border-y border-border">
              {([
                {
                  q: "How much does a solar installation cost?",
                  a: <>The cost depends on your electricity consumption and roof area. On average, a 3 kW residential system costs ₹1.5–2 lakh. <Link href="/solar-calculator" className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors">Use our Solar Calculator</Link> for a personalised estimate.</>,
                },
                {
                  q: "Is my roof suitable for solar?",
                  a: <>Most rooftops in India are suitable. Our team does a free site visit and feasibility check before any commitment.</>,
                },
                {
                  q: "How long does installation take?",
                  a: <>A standard residential installation takes 1–3 days. Commercial projects may take longer depending on size.</>,
                },
                {
                  q: "What happens on cloudy days?",
                  a: <>Solar panels work on diffused sunlight too — they continue generating power, just at slightly reduced output. Batteries or grid connectivity ensure uninterrupted supply.</>,
                },
                {
                  q: "Are there government subsidies?",
                  a: <>Yes. The Government of India offers PM Surya Ghar Muft Bijli Yojana — up to ₹78,000 subsidy for residential rooftop solar. <Link href="/get-solar" className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors">Book a free site visit</Link> and we&apos;ll handle the entire application for you.</>,
                },
                {
                  q: "What after-sales support do you provide?",
                  a: <>We offer monitoring, maintenance, and technical support post-installation. Your system health is our responsibility.</>,
                },
              ] as { q: string; a: React.ReactNode }[]).map((faq, i) => (
                <RevealWrapper variant="fadeUp" delay={0.05 * i} key={i}>
                  <details className="group py-4">
                    <summary className="font-semibold text-text-primary cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                    </summary>
                    <p className="text-text-secondary text-base mt-4 pb-2 pr-8">{faq.a}</p>
                  </details>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* 8. ContactStrip */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/assets/solar/contact-bg.png" alt="Solar farm at sunset with rows of photovoltaic panels generating clean energy" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <RevealWrapper variant="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white max-w-2xl">
                Ready to make the switch? Let&apos;s talk.
              </h2>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.1}>
              <div className="text-white text-2xl md:text-3xl font-bold mt-2">
                Call us at <a href="tel:+918882088600" className="text-accent hover:text-white transition-colors border-b-2 border-accent/30 hover:border-white">+91 8882088600</a>
              </div>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.2}>
              <Button href="/get-solar" variant="accent" size="lg" className="mt-6 px-12 py-6 text-lg">
                Get Your Free Site Visit
              </Button>
            </RevealWrapper>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
