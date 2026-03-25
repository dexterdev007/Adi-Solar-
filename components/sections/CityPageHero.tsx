"use client";

import { useState } from "react";
import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";

export interface CityPageHeroProps {
  cityName: string;
  stateName: string;
  discom: string;
  avgBill: string;
  sunHours: string;
}

export function CityPageHero({
  cityName,
  stateName,
  discom,
  avgBill,
  sunHours,
}: CityPageHeroProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const trustBadges = [
    { icon: ShieldCheck, text: "Certified Technicians" },
    { icon: Clock, text: "Site Visit Within 48 Hours" },
    { icon: BadgeCheck, text: "PM Surya Ghar Subsidy Handled" },
  ];

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[680px] flex items-center bg-surface-dark bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/solar/hero-main.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Headline + trust badges + CTA */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-white text-3xl lg:text-5xl font-bold font-heading leading-tight">
            Solar Panel Installation in {cityName}
            <span className="block text-accent mt-1">Free Site Visit · AdiSolar</span>
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Serving {cityName} homeowners, businesses, and institutions.
            Certified technicians. PM Surya Ghar subsidy assistance included.
          </p>
          <p className="text-white/70 text-sm">
            {cityName} receives <strong className="text-accent">{sunHours} peak sun hours/day</strong> ·{" "}
            Average bill: <strong className="text-accent">{avgBill}/month</strong> ·{" "}
            DISCOM: {discom}
          </p>
          <div className="flex flex-col gap-3">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/90">
                <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
          <Button href="/get-solar" variant="accent" size="lg" className="mt-2">
            Book Free Site Visit in {cityName}
          </Button>
        </div>

        {/* Right: Lead capture form */}
        <div className="bg-white p-6 lg:p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary-pale flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Thank you!
              </h3>
              <p className="text-text-secondary text-sm">
                Our team will contact you within 24 hours to schedule your free
                site visit in {cityName}.
              </p>
              <a
                href="https://wa.me/918882088600"
                className="mt-4 inline-block text-primary font-semibold underline text-sm"
              >
                Or WhatsApp us now →
              </a>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold font-heading text-text-primary mb-6">
                Get a Free Site Visit in {cityName}
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormInput
                  id="city-hero-name"
                  label="Full Name"
                  placeholder="Your name"
                  required
                />
                <FormInput
                  id="city-hero-phone"
                  label="Mobile Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />
                <FormInput
                  id="city-hero-pincode"
                  label="Pincode"
                  placeholder={`${cityName} pincode`}
                  required
                />
                <FormInput
                  id="city-hero-bill"
                  label="Approx Monthly Electricity Bill (₹)"
                  type="number"
                  placeholder="e.g. 3000"
                />
                <Button type="submit" variant="accent" size="lg" className="w-full mt-2">
                  Book My Free Visit
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
