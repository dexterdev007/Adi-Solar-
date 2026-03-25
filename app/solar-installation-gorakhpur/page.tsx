import type { Metadata } from "next";
import { CityPageHero } from "@/components/sections/CityPageHero";
import { WhySolarInCity } from "@/components/sections/WhySolarInCity";
import { CityFAQ } from "@/components/sections/CityFAQ";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StepCard } from "@/components/ui/StepCard";
import { HomeIcon, Building2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation in Gorakhpur | AdiSolar",
  description:
    "Trusted solar installation in Gorakhpur. Residential and commercial. PUVVNL net metering handled. PM Surya Ghar subsidy. Free site visit.",
  alternates: { canonical: "https://adisolar.in/solar-installation-gorakhpur" },
};

const cityData = {
  cityName: "Gorakhpur",
  stateName: "Uttar Pradesh",
  discom: "PUVVNL (Purvanchal Vidyut Vitaran Nigam Limited)",
  avgBill: "₹1,500–₹5,000",
  sunHours: "5.2",
};

export default function GorakhpurPage() {
  return (
    <main>
      <CityPageHero {...cityData} />
      <WhySolarInCity
        {...cityData}
        customNote="Gorakhpur experiences frequent power cuts and high grid dependence. Solar gives you energy independence — your home stays powered even when the grid goes down. With a hybrid system and battery backup, you're completely protected from outages."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader caption="Our Customers" heading="Solar Solutions for Every Need in Gorakhpur" className="mb-12 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: "Residential", desc: "Homes and apartments in Gorakhpur — protect against power cuts." },
              { icon: Building2, title: "Commercial", desc: "Offices, shops, and commercial establishments." },
              { icon: Factory, title: "Industrial & Institutional", desc: "Factories, schools, colleges, and hospitals." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} variant="surface" className="flex flex-col items-center text-center gap-4 p-8">
                <Icon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold font-heading text-text-primary">{title}</h3>
                <p className="text-text-secondary text-sm">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader caption="How It Works" heading="Our Installation Process in Gorakhpur" className="mb-12 text-center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Free Site Visit", body: "Our engineer visits your Gorakhpur property at zero cost." },
              { step: 2, title: "Energy Evaluation", body: "We size the perfect system for your consumption and backup needs." },
              { step: 3, title: "Custom Design", body: "On-grid or hybrid system designed for your PUVVNL connection." },
              { step: 4, title: "Professional Installation", body: "Certified technicians install your system in 1–2 days." },
              { step: 5, title: "Monitor & Support", body: "Net metering filing with PUVVNL and ongoing support." },
            ].map((s) => (
              <StepCard key={s.step} step={s.step} title={s.title} body={s.body} />
            ))}
          </div>
        </div>
      </section>

      <CityFAQ {...cityData} state={cityData.stateName} />

      <section className="py-16 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to go solar in Gorakhpur?</h2>
          <p className="text-white/80 mb-8">Stop depending on the grid. Our engineer will visit within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-solar" className="bg-accent text-white font-bold px-10 py-4 hover:bg-amber-600 transition-colors">Book Free Site Visit</a>
            <a href="tel:+918882088600" className="border-2 border-white text-white font-bold px-10 py-4 hover:bg-white hover:text-primary transition-colors">Call +91 8882088600</a>
          </div>
        </div>
      </section>
    </main>
  );
}
