import type { Metadata } from "next";
import { CityPageHero } from "@/components/sections/CityPageHero";
import { WhySolarInCity } from "@/components/sections/WhySolarInCity";
import { CityFAQ } from "@/components/sections/CityFAQ";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StepCard } from "@/components/ui/StepCard";
import { HomeIcon, Building2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation in Silchar | AdiSolar",
  description:
    "Solar installation in Silchar, Assam. Homes, businesses, and institutions. APDCL net metering. Frequent power cuts — solar ensures energy independence. Free site visit.",
  alternates: { canonical: "https://adisolar.in/solar-installation-silchar" },
};

const cityData = {
  cityName: "Silchar",
  stateName: "Assam",
  discom: "APDCL (Assam Power Distribution Company Limited)",
  avgBill: "₹1,200–₹4,500",
  sunHours: "4.7",
};

export default function SilcharPage() {
  return (
    <main>
      <CityPageHero {...cityData} />
      <WhySolarInCity
        {...cityData}
        customNote="Silchar has one of the most unreliable grid supplies in India — power cuts of 8–12 hours daily are common. Solar + battery backup is not optional, it's essential. AdiSolar specializes in hybrid systems for Northeast India where energy independence, not cost savings, is the primary driver."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader caption="Our Customers" heading="Solar Solutions for Every Need in Silchar" className="mb-12 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: "Residential", desc: "Homes and apartments — escape frequent power cuts with backup." },
              { icon: Building2, title: "Commercial", desc: "Offices, shops, and commercial establishments needing reliability." },
              { icon: Factory, title: "Institutional", desc: "Schools, colleges, hospitals, and critical facilities." },
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
          <SectionHeader caption="How It Works" heading="Our Installation Process in Silchar" className="mb-12 text-center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Free Site Visit", body: "Our engineer visits your Silchar property at zero cost." },
              { step: 2, title: "Energy Evaluation", body: "We size hybrid system with battery backup for your needs." },
              { step: 3, title: "Custom Design", body: "Hybrid solar system designed for Silchar's power cuts." },
              { step: 4, title: "Professional Installation", body: "Certified technicians install in 1–2 days." },
              { step: 5, title: "Monitor & Support", body: "24/7 monitoring and AMC support for your system." },
            ].map((s) => (
              <StepCard key={s.step} step={s.step} title={s.title} body={s.body} />
            ))}
          </div>
        </div>
      </section>

      <CityFAQ {...cityData} state={cityData.stateName} />

      <section className="py-16 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Stop Depending on the Unreliable Grid in Silchar</h2>
          <p className="text-white/80 mb-8">Hybrid solar with battery backup. Book a free site visit within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-solar" className="bg-accent text-white font-bold px-10 py-4 hover:bg-amber-600 transition-colors">Book Free Site Visit</a>
            <a href="tel:+918882088600" className="border-2 border-white text-white font-bold px-10 py-4 hover:bg-white hover:text-primary transition-colors">Call +91 8882088600</a>
          </div>
        </div>
      </section>
    </main>
  );
}
