"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";
import { FormLabel } from "@/components/ui/FormInput";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import {
  IndianRupee,
  Activity,
  Zap,
  Clock,
  ArrowRight,
} from "lucide-react";
import { calculateSolar, formatIndianNumber, type SolarCalculatorResult } from "@/lib/solarCalculator";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AdiSolar Solar Savings Calculator",
  description:
    "Calculate monthly solar savings, system size, and installation cost from your electricity bill",
  url: "https://adisolar.in/solar-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

export default function SolarCalculatorPage() {
  const [billAmount, setBillAmount] = useState<number>(3000);
  const [results, setResults] = useState<SolarCalculatorResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateSolar({ monthlyBill: billAmount });
    setResults(result);
    setHasCalculated(true);
  };

  const handleBillChange = (value: number) => {
    // Clamp values as per instructions
    const clampedValue = Math.min(50000, Math.max(0, value));
    setBillAmount(clampedValue);
    // Reset results if input changes to avoid confusion
    if (hasCalculated) setHasCalculated(false);
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const } 
    }
  };

  const isButtonDisabled = billAmount <= 0;

  return (
    <PageTransition>
      <SchemaMarkup schema={appSchema} />
      <main className="pt-16 lg:pt-20 overflow-hidden">
        {/* 1. PageHero */}
        <motion.section 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="bg-surface-dark py-16 lg:py-24 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealWrapper variant="fadeIn">
              <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading mb-4 flex flex-col items-center">
                How Much Can You Save with Solar?
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
                Enter your monthly electricity bill and get an instant personalised estimate.
              </p>
            </RevealWrapper>
          </div>
        </motion.section>

        {/* 2. CalculatorSection */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-none shadow-lg border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              
              {/* LEFT: Input Area */}
              <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center">
                <RevealWrapper variant="fadeUp">
                  <h2 className="text-2xl font-bold font-heading text-text-primary mb-8">
                    Calculate Your Savings
                  </h2>
                </RevealWrapper>
                <RevealWrapper variant="fadeUp" delay={0.1}>
                  <form onSubmit={handleCalculate} className="flex flex-col gap-8">
                    <div>
                      <FormLabel htmlFor="calc-bill">Your Monthly Electricity Bill</FormLabel>
                      <p className="text-sm text-text-tertiary mb-3 mt-1">Enter the total amount you pay, including all charges</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="relative flex-1">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary font-bold">₹</span>
                          <input
                            id="calc-bill"
                            type="number"
                            value={billAmount || ""}
                            onChange={(e) => {
                              const val = e.target.value === "" ? 0 : parseInt(e.target.value);
                              if (!isNaN(val)) handleBillChange(val);
                            }}
                            className="w-full pl-8 pr-4 py-3 rounded-none border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-primary text-lg font-mono font-medium"
                          />
                        </div>
                      </div>
                      
                      {/* Range Slider */}
                      <div className="mt-8">
                        <input
                          type="range"
                          min={500}
                          max={50000}
                          step={100}
                          value={Math.max(500, billAmount)}
                          onChange={(e) => handleBillChange(Number(e.target.value))}
                          className="w-full h-2 bg-border rounded-none appearance-none cursor-pointer accent-primary"
                          aria-label="Monthly Bill Range"
                        />
                        <div className="flex justify-between text-xs text-text-tertiary mt-2 font-medium">
                          <span>₹500</span>
                          <span>₹50,000</span>
                        </div>
                      </div>

                      {billAmount <= 0 && (
                        <p className="text-accent text-xs mt-3 font-medium">Please enter your monthly bill amount</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full mt-4 group"
                      disabled={isButtonDisabled}
                    >
                      Calculate My Savings
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </RevealWrapper>
              </div>

              {/* RIGHT: Results Area */}
              <div className="p-8 lg:p-12 bg-surface text-center lg:text-left flex flex-col justify-center">
                <h3 className="text-xl font-bold font-heading text-text-primary mb-8 text-center">
                  Your Estimated Results
                </h3>
                
                <AnimatePresence mode="wait">
                  {hasCalculated && results ? (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Monthly Savings (Green Highlight) */}
                        <RevealWrapper staggerChild variant="scaleIn" className="h-full">
                          <div className="h-full bg-primary-pale border border-primary/20 rounded-none p-6 flex flex-col items-center sm:items-start group hover:bg-white transition-colors">
                            <IndianRupee className="w-8 h-8 text-primary mb-3" />
                            <div className="font-mono text-2xl lg:text-3xl font-bold text-primary mb-1">
                              ₹{formatIndianNumber(results.monthlySavings)}
                            </div>
                            <div className="text-sm font-medium text-text-secondary text-center sm:text-left">Monthly Savings (₹ / month)</div>
                          </div>
                        </RevealWrapper>

                        {/* System Size */}
                        <RevealWrapper staggerChild variant="scaleIn" className="h-full">
                          <div className="h-full bg-white border border-border rounded-none p-6 flex flex-col items-center sm:items-start shadow-sm hover:shadow-md transition-shadow group">
                            <Zap className="w-8 h-8 text-accent mb-3" />
                            <div className="font-mono text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                              {results.systemSizeKw} kW
                            </div>
                            <div className="text-sm font-medium text-text-secondary text-center sm:text-left">Recommended System (kW)</div>
                          </div>
                        </RevealWrapper>

                        {/* Install Cost */}
                        <RevealWrapper staggerChild variant="scaleIn" className="h-full">
                          <div className="h-full bg-white border border-border rounded-none p-6 flex flex-col items-center sm:items-start shadow-sm hover:shadow-md transition-shadow group">
                            <Activity className="w-8 h-8 text-text-secondary mb-3" />
                            <div className="font-mono text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                              ₹{formatIndianNumber(results.installationCost)}
                            </div>
                            <div className="text-sm font-medium text-text-secondary text-center sm:text-left">Est. Install Cost (₹ approx)</div>
                          </div>
                        </RevealWrapper>

                        {/* Payback */}
                        <RevealWrapper staggerChild variant="scaleIn" className="h-full">
                          <div className="h-full bg-white border border-border rounded-none p-6 flex flex-col items-center sm:items-start shadow-sm hover:shadow-md transition-shadow group">
                            <Clock className="w-8 h-8 text-text-secondary mb-3" />
                            <div className="font-mono text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                              {results.paybackYears} yrs
                            </div>
                            <div className="text-sm font-medium text-text-secondary text-center sm:text-left">Payback Period (years)</div>
                          </div>
                        </RevealWrapper>

                      </StaggerContainer>
                    </motion.div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-40">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-32 bg-white border border-border border-dashed rounded-none flex items-center justify-center">
                          <span className="text-text-tertiary text-2xl font-bold">—</span>
                        </div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
                
                <p className="text-xs text-text-tertiary mt-8 text-center max-w-sm mx-auto">
                  Estimates are indicative. Actual savings depend on your location, roof area, panel orientation, and consumption patterns. Book a free site visit for an accurate quote.{" "}
                  <Link href="/all-about-solar" className="underline hover:text-primary transition-colors">Learn more about how solar works.</Link>
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. CalculatorCTA */}
        <section className="py-16 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <RevealWrapper variant="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
                Want an exact number for your property?
              </h2>
            </RevealWrapper>
            <RevealWrapper variant="fadeUp" delay={0.1}>
              <Button href="/get-solar" variant="accent" size="lg" className="mt-4">
                Book Free Site Visit
              </Button>
            </RevealWrapper>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
