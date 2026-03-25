"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormInput, FormTextarea, FormSelect } from "@/components/ui/FormInput";
import { StepCard } from "@/components/ui/StepCard";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { CheckCircle2, MessageCircle, Check } from "lucide-react";

export default function GetSolarPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const } 
    }
  };

  return (
    <PageTransition>
      <main className="pt-16 lg:pt-20 overflow-hidden">
        {/* 1. PageHero */}
        <motion.section 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="bg-surface-dark py-16 lg:py-24 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeIn">
              <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading mb-4 leading-tight flex flex-col items-center">
                Start Your Solar Journey Today
                <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ transformOrigin: "center" }}
                  className="h-1 w-16 bg-primary rounded-none mt-5 mx-auto"
                />
              </h1>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.15}>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Fill in the form below. Our expert will call you within 24 hours to schedule your free, no-obligation site visit.
              </p>
            </RevealWrapper>
          </div>
        </motion.section>

        {/* 2. GetSolarForm */}
        <section className="py-20 lg:py-28 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-surface-dark/5" />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealWrapper variant="fadeUp">
              <Card variant="standard" className="shadow-xl border-white/20 p-8 lg:p-12 bg-white">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-bold font-heading text-text-primary mb-8 text-center">
                      Book Your Free Site Visit
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <FormInput id="name" label="Full Name" placeholder="e.g. Rahul Sharma" required />
                      <FormInput id="phone" label="Phone Number" type="tel" placeholder="e.g. +91 98765 43210" required />
                      
                      <FormTextarea id="address" label="Full Address" placeholder="House/Flat no., Street, City, State, Pincode" required rows={3} />
                      
                      <FormSelect
                        id="property"
                        label="Property Type"
                        required
                        placeholder="Select Property Type"
                        options={[
                          { value: "residential", label: "Residential" },
                          { value: "commercial", label: "Commercial" },
                          { value: "industrial", label: "Industrial" },
                          { value: "institutional", label: "Institutional" },
                        ]}
                      />
                      
                      <FormInput id="bill" label="Monthly Electricity Bill (₹)" type="number" placeholder="Optional — helps us size your system" />
                      
                      <FormTextarea id="notes" label="Additional Notes" placeholder="Any special requirements, questions, or details about your property" rows={3} />

                      <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
                        Book My Free Site Visit
                      </Button>
                      <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-medium text-text-secondary">
                        <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success" /> Free visit, no commitment</div>
                        <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success" /> Response within 24 hours</div>
                        <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success" /> Pan India service</div>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center py-8 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]">
                    <div className="w-20 h-20 bg-primary-pale rounded-none flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold font-heading text-text-primary mb-4">
                      We've Received Your Request! 🎉
                    </h2>
                    <p className="text-text-secondary text-lg mb-8 max-w-sm mx-auto leading-relaxed">
                      Our team will call you within 24 hours to schedule your free site visit. You can also WhatsApp us directly at{" "}
                      <Link href="tel:+918882088600" className="font-semibold text-primary underline">+91 8882088600</Link> for a faster response.
                    </p>
                    <Button href="https://wa.me/918882088600" variant="primary" size="lg" className="w-full group">
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      WhatsApp Us Now
                    </Button>
                  </div>
                )}
              </Card>
            </RevealWrapper>
          </div>
        </section>

        {/* 3. DetailedProcess */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <RevealWrapper variant="fadeUp">
              <SectionHeader
                caption="What Happens Next"
                heading="Your Journey to Solar — Step by Step"
                className="mb-16"
              />
            </RevealWrapper>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8 relative items-start">
               <div className="hidden md:block absolute top-[20px] left-0 w-full h-0.5 bg-border -z-10" />
               <RevealWrapper staggerChild variant="scaleIn">
                 <StepCard
                   step={1}
                   title="Free Site Visit"
                   body="One of our certified solar engineers visits your property at a time that suits you — completely free of charge. We inspect your roof structure, orientation, shading patterns, and existing electrical setup to determine the best solution."
                 />
               </RevealWrapper>
               <RevealWrapper staggerChild variant="scaleIn">
                 <StepCard
                   step={2}
                   title="Energy Evaluation & Proposal"
                   body="We analyse 3–6 months of your electricity bills to understand your consumption patterns. You receive a detailed proposal within 48 hours — showing the recommended system size, estimated savings, and complete cost breakdown."
                 />
               </RevealWrapper>
               <RevealWrapper staggerChild variant="scaleIn">
                 <StepCard
                   step={3}
                   title="Custom System Design"
                   body="Our engineers design a system built specifically for your property — not a generic package. We account for your roof angle, local solar irradiance data, and future consumption needs to maximise your return on investment."
                 />
               </RevealWrapper>
               <RevealWrapper staggerChild variant="scaleIn">
                 <StepCard
                   step={4}
                   title="Professional Installation"
                   body="Our certified technicians install your system using premium-grade equipment. Most residential installations are completed in 1–2 days with minimal disruption to your daily routine. All work is insured and warranted."
                 />
               </RevealWrapper>
               <RevealWrapper staggerChild variant="scaleIn">
                 <StepCard
                   step={5}
                   title="Monitoring, Maintenance & Support"
                   body="After installation, we set up your remote monitoring app so you can track your system's output and savings in real time. Our support team is available for any technical queries, and we offer annual maintenance contracts (AMC) for complete peace of mind."
                 />
               </RevealWrapper>
            </StaggerContainer>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
