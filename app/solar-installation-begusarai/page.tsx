import type { Metadata } from "next";
import { CityPageHero } from "@/components/sections/CityPageHero";
import { WhySolarInCity } from "@/components/sections/WhySolarInCity";
import { CityFAQ } from "@/components/sections/CityFAQ";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StepCard } from "@/components/ui/StepCard";
import { HomeIcon, Building2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation in Begusarai | AdiSolar",
  description:
    "Reliable solar installation in Begusarai, Bihar. Residential and industrial solutions. NBPDCL net metering. Govt. subsidy handled. Free site visit.",
  alternates: { canonical: "https://adisolar.in/solar-installation-begusarai" },
};

const cityData = {
  cityName: "Begusarai",
  stateName: "Bihar",
  discom: "NBPDCL (North Bihar Power Distribution Company Limited)",
  avgBill: "₹1,200–₹4,000",
  sunHours: "5.0",
};

export default function BegusaraiPage() {
  return (
    <main>
      <CityPageHero {...cityData} />
      <WhySolarInCity
        {...cityData}
        customNote="Begusarai — with its significant industrial presence including HPCL refinery and related businesses — has high electricity consumption and frequent power cuts. Solar gives residential homeowners and industrial clients true energy independence. Stop depending on an unreliable grid and generate your own power."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader caption="Our Customers" heading="Solar Solutions for Every Need in Begusarai" className="mb-12 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: "Residential", desc: "Homes and apartments in Begusarai — reduce bills and end power cuts." },
              { icon: Building2, title: "Commercial", desc: "Shops, offices, and commercial establishments." },
              { icon: Factory, title: "Industrial", desc: "Factories, warehouses, and industrial units including refinery supply chains." },
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
          <SectionHeader caption="How It Works" heading="Our Installation Process in Begusarai" className="mb-12 text-center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Free Site Visit", body: "Our engineer visits your Begusarai property at zero cost." },
              { step: 2, title: "Energy Evaluation", body: "We assess your consumption, backup needs, and roof." },
              { step: 3, title: "Custom Design", body: "On-grid or hybrid system designed for your NBPDCL connection." },
              { step: 4, title: "Professional Installation", body: "Certified technicians install your system in 1–2 days." },
              { step: 5, title: "Monitor & Support", body: "Net metering with NBPDCL and ongoing support." },
            ].map((s) => (
              <StepCard key={s.step} step={s.step} title={s.title} body={s.body} />
            ))}
          </div>
        </div>
      </section>

      <CityFAQ {...cityData} state={cityData.stateName} />

      <section className="py-16 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to go solar in Begusarai?</h2>
          <p className="text-white/80 mb-8">End power cuts. Our engineer visits within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-solar" className="bg-accent text-white font-bold px-10 py-4 hover:bg-amber-600 transition-colors">Book Free Site Visit</a>
            <a href="tel:+918882088600" className="border-2 border-white text-white font-bold px-10 py-4 hover:bg-white hover:text-primary transition-colors">Call +91 8882088600</a>
          </div>
        </div>
      </section>
    </main>
  );
}
