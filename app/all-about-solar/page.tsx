"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import {
  Sun,
  BatteryCharging,
  Zap,
  Home as HomeIcon,
  Cable,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Leaf,
} from "lucide-react";
import { TypeReveal } from "@/components/ui/TypeReveal";
import { WordFade } from "@/components/ui/WordFade";
import { BlurReveal } from "@/components/ui/BlurReveal";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Solar Energy Works",
  description:
    "Step-by-step explanation of how solar panels convert sunlight into electricity",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sunlight Hits Your Panels",
      text: "Photovoltaic cells absorb sunlight and convert it into DC electricity.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "DC Converts to AC",
      text: "An inverter converts DC to AC electricity used by all home appliances.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Powers Your Home",
      text: "AC electricity flows into your switchboard and powers your appliances directly.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Surplus Goes to the Grid",
      text: "Excess electricity is sent to the grid via net metering, earning bill credits.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "You Save on Every Bill",
      text: "You pay only for net grid consumption. Most customers save 60–90% from day one.",
    },
  ],
};

export default function AllAboutSolarPage() {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const } 
    }
  };

  return (
    <PageTransition>
      <SchemaMarkup schema={howToSchema} />
      <main className="pt-16 lg:pt-20 overflow-hidden">
        {/* 1. PageHero - Refined centered layout */}
        <motion.section 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="relative min-h-[60vh] flex items-center bg-surface-dark bg-cover bg-center" 
          style={{ backgroundImage: "url('/assets/solar/hero-main.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-surface-dark/90" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
            <RevealWrapper variant="fadeIn">
              <h1 className="text-white text-4xl lg:text-7xl font-bold font-heading mb-6 leading-tight max-w-4xl flex flex-col items-center">
                <TypeReveal text="Mastering Solar Energy" />
                <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ transformOrigin: "center" }}
                  className="h-1.5 w-24 bg-primary rounded-none mt-6"
                />
              </h1>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.15}>
              <div className="text-white/90 text-lg lg:text-2xl max-w-2xl mb-10 font-medium">
                <WordFade text="Your complete guide to understanding, Choosing, and Profiting from Sunshine." delay={0.4} />
              </div>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.25}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/solar-calculator" variant="accent" size="lg" className="px-8">
                  Get Savings Estimate
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg" className="text-white border-white hover:bg-white/10 px-8">
                  Learn the Tech
                </Button>
              </div>
            </RevealWrapper>
          </div>
        </motion.section>

        {/* 2. Introduction: What is Solar? (Rooftop PV Tech) */}
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper variant="slideRight">
                <div className="relative">
                  <SectionHeader
                    caption="The Fundamentals"
                    heading="What exactly is Rooftop Solar Technology?"
                    className="md:text-left text-center"
                    withLine
                  />
                  <div className="mt-8 flex flex-col gap-6 text-text-secondary text-lg leading-relaxed">
                    <p>
                      Solar Photovoltaic (PV) technology transforms sunlight directly into electricity using semiconductor materials. When sunlight hits a solar cell, it releases electrons, creating an electrical current.
                    </p>
                    <p>
                      Modern silicon-based cells are highly efficient, reliable, and designed to withstand extreme Indian weather conditions for over 25 years.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-4">
                      <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
                        <span className="text-text-primary font-bold text-2xl">25+ Yrs</span>
                        <span className="text-sm">Service Life</span>
                      </div>
                      <div className="flex flex-col gap-1 border-l-4 border-accent pl-4">
                        <span className="text-text-primary font-bold text-2xl">90%</span>
                        <span className="text-sm">Bill Reduction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
              <RevealWrapper variant="slideLeft" className="relative">
                <div className="rounded-none border-8 border-surface p-2 shadow-xl bg-white">
                  <Image
                    src="/assets/solar/rooftop-tech.png"
                    width={600}
                    height={600}
                    alt="Cross-section diagram of a silicon photovoltaic solar cell showing how sunlight creates electricity"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-surface-dark text-white text-xs text-center font-mono uppercase tracking-widest">
                    Fig 1.1: Photovoltaic Cell Cross-Section
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* 3. Comprehensive Flow: How it Works */}
        <section id="how-it-works" className="py-20 lg:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <RevealWrapper variant="fadeUp">
                <SectionHeader
                  caption="Energy Journey"
                  heading="How Sunshine Becomes Power for Your Home"
                  subtext="From your rooftop to your socket — follow the journey of every kilowatt we generate."
                  className="mb-0"
                />
              </RevealWrapper>
            </div>

            <div className="flex flex-col gap-20">
              {/* Large Central Diagram */}
              <RevealWrapper variant="scaleIn">
                <div className="relative rounded-none overflow-hidden bg-white p-4 md:p-8 shadow-2xl border border-border">
                  <Image
                    src="/assets/solar/solar-how-it-works.png"
                    width={1200}
                    height={800}
                    alt="Complete solar energy flow diagram showing sun to rooftop panels to inverter to home appliances and electricity grid"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-wider">
                    Interactive Technical Guide
                  </div>
                </div>
              </RevealWrapper>

              {/* Step Checklist */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  { title: "Absorption", desc: "Panels collect photons from direct or diffused sunlight." },
                  { title: "Conversion", desc: "Inverters transform DC current into usable AC current." },
                  { title: "Consumption", desc: "Priority is given to powering your home appliances." },
                  { title: "Storage", desc: "Surplus is stored in modern LFP batteries (Hybrid systems)." },
                  { title: "Net Metering", desc: "Excess power is fed to the grid, earning you credits. Most customers save 60–90% from day one." },
                ].map((step, i) => (
                  <RevealWrapper key={i} staggerChild variant="fadeUp">
                    <div className="flex items-start gap-4 p-4 bg-white border border-border h-full hover:border-primary transition-colors">
                      <div className="text-primary mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary text-sm mb-1">{step.title}</h4>
                        <p className="text-text-secondary text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
              </StaggerContainer>
              <RevealWrapper variant="fadeUp" delay={0.2} className="mt-8 text-center">
                <Link href="/solar-calculator" className="inline-flex items-center gap-2 text-primary font-semibold underline underline-offset-4 hover:text-primary-light transition-colors">
                  Calculate your savings with our free Solar Calculator →
                </Link>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* 4. Deep Dive: System Types */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="System Configurations"
                heading="On-Grid vs. Off-Grid vs. Hybrid"
                subtext="Choosing the right setup depends on your location, budget, and reliability needs."
                className="mb-20 text-center"
              />
            </RevealWrapper>

            <div className="flex flex-col gap-32">
              {/* On-Grid Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <RevealWrapper variant="slideRight">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-pale text-primary flex items-center justify-center rounded-none font-bold">01</div>
                      <h3 className="text-3xl font-bold text-text-primary font-heading">On-Grid Solar System</h3>
                    </div>
                    <p className="text-text-secondary text-lg">
                      The most popular choice for urban residential and commercial users. It works in sync with the utility grid, allowing you to export surplus power and earn credits.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Lowest upfront cost', 'Net Metering benefits', 'Maintenance free', 'Fastest ROI'].map((opt, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-text-primary">
                          <CheckCircle2 className="w-4 h-4 text-success" /> {opt}
                        </li>
                      ))}
                    </ul>
                    <Badge variant="surface" className="w-fit text-primary font-bold">Best for Cities & Towns</Badge>
                  </div>
                </RevealWrapper>
                <RevealWrapper variant="slideLeft">
                  <div className="bg-surface p-4 border border-border">
                    <Image
                      src="/assets/solar/system-on-grid.png"
                      width={600}
                      height={400}
                      alt="On-grid solar system diagram showing rooftop panels connected to home and electricity grid with net metering"
                      className="w-full h-auto"
                    />
                  </div>
                </RevealWrapper>
              </div>

              {/* Hybrid Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <RevealWrapper variant="slideRight" className="lg:order-2">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-light text-accent flex items-center justify-center rounded-none font-bold">02</div>
                      <h3 className="text-3xl font-bold text-text-primary font-heading">Hybrid Solar System</h3>
                    </div>
                    <p className="text-text-secondary text-lg">
                      Combining the benefits of on-grid connectivity with battery backup. This system ensures your power stays on even during grid outages, while still supporting net metering.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['24/7 Power Security', 'Smart energy management', 'Backup for critical loads', 'Optimised savings'].map((opt, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-text-primary">
                          <CheckCircle2 className="w-4 h-4 text-success" /> {opt}
                        </li>
                      ))}
                    </ul>
                    <Badge variant="accent" className="w-fit font-bold">Premium Reliability</Badge>
                  </div>
                </RevealWrapper>
                <RevealWrapper variant="slideLeft" className="lg:order-1">
                  <div className="bg-surface p-4 border border-border">
                    <Image
                      src="/assets/solar/system-hybrid.png"
                      width={600}
                      height={400}
                      alt="Hybrid solar system diagram combining grid connection and battery storage for 24/7 power security"
                      className="w-full h-auto"
                    />
                  </div>
                </RevealWrapper>
              </div>

              {/* Off-Grid Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <RevealWrapper variant="slideRight">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-dark text-white flex items-center justify-center rounded-none font-bold">03</div>
                      <h3 className="text-3xl font-bold text-text-primary font-heading">Off-Grid Solar System</h3>
                    </div>
                    <p className="text-text-secondary text-lg">
                      Complete energy independence. Designed for remote locations where grid access is unavailable or highly unreliable. Uses large battery banks to store all generated energy.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Total Independence', 'Zero grid dependency', 'Scalable battery storage', 'Energy autonomy'].map((opt, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-text-primary">
                          <CheckCircle2 className="w-4 h-4 text-success" /> {opt}
                        </li>
                      ))}
                    </ul>
                    <Badge variant="outline" className="w-fit text-text-secondary font-bold border-text-secondary">Ideal for Remote Living</Badge>
                  </div>
                </RevealWrapper>
                <RevealWrapper variant="slideLeft">
                  <div className="bg-surface p-4 border border-border">
                    <Image
                      src="/assets/solar/system-off-grid.png"
                      width={600}
                      height={400}
                      alt="Off-grid solar system diagram with battery storage for remote locations and areas with frequent power cuts"
                      className="w-full h-auto"
                    />
                  </div>
                </RevealWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Benefits Summary */}
        <section className="py-24 lg:py-32 bg-surface-dark text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            {/* Minimal pattern or grid */}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper variant="slideRight">
                <Image
                  src="/assets/solar/solar-benefits.png"
                  width={600}
                  height={600}
                  alt="Illustration showing financial savings and environmental benefits of rooftop solar installation for Indian homes"
                  className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </RevealWrapper>
              <RevealWrapper variant="slideLeft">
                <div className="flex flex-col gap-8">
                  <h2 className="text-4xl lg:text-5xl font-bold font-heading">The ROI of Switching to Solar</h2>
                  <div className="flex flex-col gap-8 mt-4">
                    {[
                      { icon: Zap, title: "Drastic Bill Cut", desc: "Reduce your monthly electricity expenditure by up to 90% from the very first billing cycle." },
                      { icon: HomeIcon, title: "Property Value", desc: "Solar-equipped properties command a higher market value and attract premium buyers." },
                      { icon: Leaf, title: "Environmental Legacy", desc: "Offset tonnes of CO2 every year. A 5kW system is equivalent to planting ~100 trees annually." },
                    ].map((ben, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          <ben.icon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h4 className="text-xl font-bold">{ben.title}</h4>
                          <p className="text-white/70 leading-relaxed font-medium">{ben.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button href="/get-solar" variant="accent" size="lg" className="w-fit mt-4">
                    Start Your Project Now
                  </Button>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* 6. MythsBusted - Refined */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="Transparency"
                heading="Solar Myths vs. Reality"
                subtext="We believe in honest technology. Let's separate facts from misconceptions."
                className="mb-16 text-center"
              />
            </RevealWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { myth: "Expensive Upfront", fact: "Subsidies + Low EMI options make it accessible for everyone today." },
                { myth: "High Maintenance", fact: "No moving parts means only occasional cleaning is required." },
                { myth: "Cloudy = No Power", fact: "Advanced MPPT inverters extract power even on overcast days." },
                { myth: "Damages Roof", fact: "Proper installation actually protects and shades your rooftop." },
                { myth: "Only for Days", fact: "Hybrid systems store energy seamlessly for nighttime consumption." },
                { myth: "Long Payback", fact: "Average Indian homes break even in just 4-6 years." },
              ].map((item, i) => (
                <RevealWrapper key={i} variant="scaleIn" delay={i * 0.05}>
                  <div className="p-6 bg-surface border border-border h-full flex flex-col gap-4 hover:shadow-lg transition-all group">
                    <div className="flex items-center gap-2 text-error h-8">
                      <XCircle className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Myth</span>
                    </div>
                    <div className="text-text-primary font-bold text-lg min-h-[3rem] line-clamp-2">"{item.myth}"</div>
                    <div className="border-t border-border pt-4 mt-auto">
                      <div className="flex items-center gap-2 text-success mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Reality</span>
                      </div>
                      <p className="text-text-secondary text-sm font-medium leading-relaxed">{item.fact}</p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GovernmentSubsidies - Detailed Table */}
        <section className="py-24 lg:py-32 bg-primary-pale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealWrapper variant="slideRight">
                <SectionHeader
                  caption="PM Surya Ghar Muft Bijli Yojana"
                  heading="Claim Up to ₹78,000 in Direct Subsidies"
                  className="md:text-left text-center"
                  withLine
                />
                <div className="mt-8 flex flex-col gap-6 text-text-secondary leading-relaxed">
                  <p className="text-lg">
                    The Government of India has launched the most aggressive solar subsidy scheme in history. Residential rooftops are now eligible for significant direct-to-bank refunds.
                  </p>
                  <div className="bg-white p-6 md:p-8 border border-primary/20 shadow-xl rounded-none">
                    <h4 className="font-bold text-text-primary mb-6 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" /> 2024 Subsidy Structure
                    </h4>
                    <div className="flex flex-col gap-4">
                      {['Up to 2 kW: ₹30,000 per kW', 'Additional kW (up to 3kW): ₹18,000 per kW', 'Max Capped Amount: ₹78,000 per home'].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                          <span className="text-sm font-bold text-text-primary">{row.split(':')[0]}</span>
                          <span className="text-sm font-bold text-primary">{row.split(':')[1]}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs italic">
                      *AdiSolar handles the complete MNRE portal registration and document submission on your behalf.
                    </p>
                    <div className="mt-6">
                      <Link href="/get-solar" className="inline-block bg-primary text-white font-bold px-6 py-3 hover:bg-primary-light transition-colors text-sm">
                        Check your eligibility — book a free site visit
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
              <RevealWrapper variant="slideLeft">
                <div className="rounded-none border-8 border-white shadow-2xl overflow-hidden group">
                  <Image
                    src="/assets/solar/subsidy-placeholder.jpg"
                    width={600}
                    height={400}
                    alt="Indian family home with rooftop solar panels and PM Surya Ghar Muft Bijli Yojana government subsidy badge"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-4 bg-accent text-white text-xs text-center font-bold uppercase tracking-widest">
                    Government Approved Installer Network
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* 8. FAQSection - Expanded */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="Knowledge Base"
                heading="Frequently Asked Questions"
                className="mb-12 text-center"
              />
            </RevealWrapper>
            <div className="flex flex-col divide-y divide-border border-y border-border">
              {[
                { q: "How much shadow-free area is needed per kW?", a: "Typically, you need about 100 sq. ft. of shadow-free rooftop area per kW of solar installation. We assess this during our free site visit." },
                { q: "Can I run heavy loads like AC during power cuts?", a: "With a Hybrid or Off-Grid system, yes. You can prioritise critical loads to ensure your AC or Geyser runs as long as the battery has sufficient charge." },
                { q: "Does rain or hail damage the panels?", a: "No. Our panels use high-grade tempered glass designed to withstand heavy rainfall, hail, and high-velocity winds prevalent in India." },
                { q: "What is Net Metering?", a: "It is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. Your bill reflects only the 'net' power consumed." },
                { q: "How do I claim the government subsidy?", a: "The subsidy is directly credited to your bank account after installation. AdiSolar manages the entire application process for you through the MNRE portal." },
                { q: "Do the panels need regular cleaning?", a: "Yes, dust can reduce efficiency by 15-20%. We recommend a simple water wash every 15 days in dusty areas to maintain peak generation." },
              ].map((faq, i) => (
                <RevealWrapper variant="fadeUp" delay={0.05 * i} key={i}>
                  <details className="group py-5">
                    <summary className="font-bold text-text-primary text-lg cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                    </summary>
                    <p className="text-text-secondary text-base mt-4 pb-2 pr-8 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                </RevealWrapper>
              ))}
            </div>
            
            <RevealWrapper variant="fadeUp" delay={0.3}>
              <div className="mt-16 p-8 bg-surface border border-border text-center flex flex-col items-center gap-6">
                <h4 className="text-2xl font-bold font-heading">Still have questions?</h4>
                <p className="text-text-secondary">Our energy experts are available for a one-on-one consultation.</p>
                <div className="flex gap-4">
                  <Button href="tel:+918882088600" variant="secondary" className="border-primary text-primary">Call +91 8882088600</Button>
                  <Button href="/get-solar" variant="primary">Book Free Site Visit</Button>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
