import type { Metadata } from "next";
import { CityPageHero } from "@/components/sections/CityPageHero";
import { WhySolarInCity } from "@/components/sections/WhySolarInCity";
import { CityFAQ } from "@/components/sections/CityFAQ";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StepCard } from "@/components/ui/StepCard";
import { HomeIcon, Building2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation in Mughalsarai | AdiSolar",
  description:
    "Solar installation in Mughalsarai (Pt. Deen Dayal Upadhyaya Nagar). Residential and commercial. PUVVNL net metering handled. Free site visit.",
  alternates: { canonical: "https://adisolar.in/solar-installation-mughalsarai" },
};

const cityData = {
  cityName: "Mughalsarai",
  stateName: "Uttar Pradesh",
  discom: "PUVVNL (Purvanchal Vidyut Vitaran Nigam Limited)",
  avgBill: "₹1,200–₹4,500",
  sunHours: "5.4",
};

export default function MughalsaraiPage() {
  return (
    <main>
      <CityPageHero {...cityData} />
      <WhySolarInCity
        {...cityData}
        customNote="Mughalsarai — also known as Pt. Deen Dayal Upadhyaya Nagar (DDU Nagar) — is a major railway junction town with strong industrial and residential demand. AdiSolar has experience installing solar on railway colony housing, government quarters, and industrial establishments. Whether you know this city by its old or new name, our team serves it fully."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader caption="Our Customers" heading="Solar Solutions for Every Need in Mughalsarai" className="mb-12 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: "Residential", desc: "Homes, railway colonies, and government quarters in Mughalsarai / DDU Nagar." },
              { icon: Building2, title: "Commercial", desc: "Shops, offices, and commercial establishments near the railway hub." },
              { icon: Factory, title: "Industrial", desc: "Warehouses, small manufacturers, and industrial units." },
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
          <SectionHeader caption="How It Works" heading="Our Installation Process in Mughalsarai" className="mb-12 text-center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Free Site Visit", body: "Our engineer visits your Mughalsarai / DDU Nagar property at zero cost." },
              { step: 2, title: "Energy Evaluation", body: "We assess your consumption and roof for the right system size." },
              { step: 3, title: "Custom Design", body: "A system designed for your property and PUVVNL requirements." },
              { step: 4, title: "Professional Installation", body: "Certified technicians install your system in 1–2 days." },
              { step: 5, title: "Monitor & Support", body: "Net metering with PUVVNL and ongoing support." },
            ].map((s) => (
              <StepCard key={s.step} step={s.step} title={s.title} body={s.body} />
            ))}
          </div>
        </div>
      </section>

      <CityFAQ {...cityData} state={cityData.stateName} />

      <section className="py-16 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to go solar in Mughalsarai?</h2>
          <p className="text-white/80 mb-8">Book a free site visit. Our engineer visits within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-solar" className="bg-accent text-white font-bold px-10 py-4 hover:bg-amber-600 transition-colors">Book Free Site Visit</a>
            <a href="tel:+918882088600" className="border-2 border-white text-white font-bold px-10 py-4 hover:bg-white hover:text-primary transition-colors">Call +91 8882088600</a>
          </div>
        </div>
      </section>
    </main>
  );
}
