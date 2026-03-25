"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  HeartHandshake,
  BadgeIndianRupee,
  Sun,
  Battery,
  Cpu,
  Activity,
  Eye,
  Headphones,
} from "lucide-react";

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="pt-16 lg:pt-20 overflow-hidden">
        {/* 1. PageHero */}
        <motion.section 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="bg-surface-dark py-16 lg:py-24 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeIn">
              <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading mb-4">
                About AdiSolar
              </h1>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.15}>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
                Bridging the gap between solar technology and the people who need it most.
              </p>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.25}>
              <div className="text-white/50 text-sm font-medium tracking-wide uppercase">
                Home <span className="mx-2 text-white/30">/</span> About Us
              </div>
            </RevealWrapper>
          </div>
        </motion.section>

        {/* 2. WhatWeDo */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <RevealWrapper variant="fadeUp">
                <SectionHeader
                  heading="Who We Are"
                  align="left"
                  className="mb-8"
                />
              </RevealWrapper>
              <div className="flex flex-col gap-6 text-text-secondary text-lg leading-relaxed">
                <RevealWrapper variant="fadeUp" delay={0.1}>
                  <p>
                    AdiSolar is a Pan India solar solutions company dedicated to making clean energy accessible for every home, business, and institution. We act as your trusted partner — handling everything from the first consultation to the final installation.
                  </p>
                </RevealWrapper>
                <RevealWrapper variant="fadeUp" delay={0.15}>
                  <p>
                    We work directly with certified solar manufacturers to bring you premium-grade equipment at competitive prices. No middlemen markups. No hidden costs. Just honest solar.
                  </p>
                </RevealWrapper>
                <RevealWrapper variant="fadeUp" delay={0.2}>
                  <p>
                    Founded in New Delhi and operating across 28 states, our team of certified engineers and sales professionals has helped 500+ customers make the switch to solar energy.
                  </p>
                </RevealWrapper>
              </div>
            </div>
            <RevealWrapper variant="fadeUp" delay={0.2} className="w-full">
              <div className="rounded-none bg-surface aspect-[4/3] relative flex items-center justify-center border border-border overflow-hidden group">
                 <Image 
                   src="/assets/about-placeholder.jpg" 
                   alt="AdiSolar engineer conducting free solar site visit assessment for a homeowner"
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-500" 
                 />
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* 3. WhyChooseUs */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="Our Edge"
                heading="Why Customers Choose AdiSolar"
                className="mb-12"
                withLine
              />
            </RevealWrapper>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Manufacturer-Direct Partnerships", desc: "We work directly with MNRE-certified manufacturers — better quality, better price." },
                { icon: BadgeIndianRupee, title: "Subsidy Assistance Included", desc: "We handle the entire PM Surya Ghar subsidy application on your behalf. You just collect the savings." },
                { icon: MapPin, title: "Pan India Coverage", desc: "Operations across 28 states. Local expertise with national reach." },
                { icon: Award, title: "Certified Technicians Only", desc: "Every installation is carried out by trained and certified solar engineers." },
                { icon: Eye, title: "Transparent Pricing", desc: "Detailed quotes before any work begins. No surprises. No hidden charges." },
                { icon: Headphones, title: "End-to-End Support", desc: "We don't disappear after installation. Ongoing monitoring, AMC, and helpdesk included." },
              ].map((item, i) => (
                <RevealWrapper staggerChild variant="scaleIn" key={i} className="h-full">
                  <Card variant="standard" className="h-full">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold font-heading text-text-primary mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                  </Card>
                </RevealWrapper>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 4. TechWeUse */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="Our Technology"
                heading="Premium Equipment, Proven Performance"
                subtext={<>We work with the best solar hardware available in India. <Link href="/all-about-solar" className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors">Learn how it all works</Link> — from panels to inverters to monitoring.</>}
                className="mb-12"
              />
            </RevealWrapper>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Sun, title: "Monocrystalline Solar Panels", spec: "High efficiency · MNRE certified · 25-year performance warranty", desc: "We use monocrystalline panels with superior light absorption, ideal for Indian rooftops where space efficiency matters." },
                { icon: Battery, title: "LiFePO4 Lithium Batteries", spec: "2,000+ charge cycles · 5-year lifespan · Maintenance-free", desc: "Lithium iron phosphate batteries provide safe, reliable backup power with longer life than traditional lead-acid batteries." },
                { icon: Cpu, title: "MPPT Charge Controllers", spec: "PWM/MPPT · >90% efficiency · Built-in protections", desc: "Advanced charge controllers maximise energy harvest from your panels and protect the battery from overcharge and discharge." },
                { icon: Activity, title: "Remote Monitoring System", spec: "Real-time alerts · App access · Centralised dashboard", desc: "Monitor your system's health, output, and savings from your phone. Our RMS sends alerts before problems become failures." },
              ].map((item, i) => (
                <RevealWrapper staggerChild variant="scaleIn" key={i} className="h-full flex flex-col">
                  <Card variant="surface" className="text-center flex flex-col items-center h-full">
                    <item.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-lg font-bold font-heading text-text-primary mb-2">{item.title}</h3>
                    <div className="text-primary text-xs font-semibold mb-3 tracking-wide">{item.spec}</div>
                    <p className="text-text-secondary text-sm flex-1">{item.desc}</p>
                  </Card>
                </RevealWrapper>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 5. OurTeam */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="The Team"
                heading="The People Behind AdiSolar"
                className="mb-12"
              />
            </RevealWrapper>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { name: "Aditya Sharma", role: "Founder & CEO", bio: "15 years in the solar industry. Passionate about making clean energy accessible for every Indian household.", img: "/assets/team/team-1.jpg" },
                 { name: "Ravi Kumar", role: "Head of Engineering", bio: "Certified solar engineer with 200+ successful installations across residential and commercial projects.", img: "/assets/team/team-2.jpg" },
                 { name: "Neha Gupta", role: "Sales & Client Relations", bio: "Helps customers understand their solar options and navigate government subsidy schemes with ease.", img: "/assets/team/team-3.jpg" },
                 { name: "Suresh Patel", role: "Operations Manager", bio: "Ensures every project is delivered on time, on spec, and with zero compromise on quality.", img: "/assets/team/team-4.jpg" },
               ].map((member, i) => (
                 <RevealWrapper staggerChild variant="scaleIn" key={i} className="h-full">
                   <Card variant="standard" className="flex flex-col items-center text-center p-6 bg-white shrink-0 h-full group">
                     <div className="relative w-24 h-24 rounded-none bg-border mb-4 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                       <Image 
                         src={member.img} 
                         alt={member.name} 
                         fill 
                         className="object-cover group-hover:scale-110 transition-transform duration-300"
                       />
                     </div>
                     <h3 className="text-lg font-bold font-heading text-text-primary">{member.name}</h3>
                     <div className="text-primary text-sm font-semibold mb-3">{member.role}</div>
                     <p className="text-text-secondary text-sm">{member.bio}</p>
                   </Card>
                 </RevealWrapper>
               ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to go solar?</h2>
            <p className="text-white/80 text-lg mb-8">Join 500+ happy customers across India. Book a free, no-obligation site visit today.</p>
            <Link
              href="/get-solar"
              className="inline-block bg-accent text-white font-bold px-10 py-4 text-lg hover:bg-accent/90 transition-colors"
            >
              Book Your Free Site Visit
            </Link>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
