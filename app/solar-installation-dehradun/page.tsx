import type { Metadata } from "next";
import { CityPageHero } from "@/components/sections/CityPageHero";
import { WhySolarInCity } from "@/components/sections/WhySolarInCity";
import { CityFAQ } from "@/components/sections/CityFAQ";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StepCard } from "@/components/ui/StepCard";
import { HomeIcon, Building2, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panel Installation in Dehradun | Free Site Visit | AdiSolar",
  description:
    "Certified solar installation in Dehradun. UPCL net metering handled. PM Surya Ghar subsidy assistance included. Free site visit within 48 hours.",
  alternates: { canonical: "https://adisolar.in/solar-installation-dehradun" },
};

const cityData = {
  cityName: "Dehradun",
  stateName: "Uttarakhand",
  discom: "UPCL (Uttarakhand Power Corporation Limited)",
  avgBill: "₹1,500–₹5,000",
  sunHours: "5.0",
};

export default function DehradunPage() {
  return (
    <main>
      <CityPageHero {...cityData} />

      <WhySolarInCity
        {...cityData}
        customNote="Dehradun has a large base of government employees, defence personnel, and retirees — homeowners with stable income and long time horizons. Solar delivers long-term, inflation-proof savings with a hassle-free installation process tailored for your schedule."
      />

      {/* Who We Serve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="Our Customers"
            heading="Solar Solutions for Every Need in Dehradun"
            className="mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: "Residential", desc: "Homes, villas, apartments, and housing societies across Dehradun." },
              { icon: Building2, title: "Commercial", desc: "Offices, hotels, retail outlets, and warehouses in Dehradun." },
              { icon: Factory, title: "Industrial & Institutional", desc: "Schools, colleges, government buildings, and factories." },
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

      {/* Our Process */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="How It Works"
            heading="Our Installation Process in Dehradun"
            className="mb-12 text-center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Free Site Visit", body: "Our engineer visits your Dehradun property at zero cost to assess suitability." },
              { step: 2, title: "Energy Evaluation", body: "We assess your consumption, roof, and orientation to size the perfect system." },
              { step: 3, title: "Custom Design", body: "A system designed specifically for your property and UPCL requirements." },
              { step: 4, title: "Professional Installation", body: "Certified technicians install your system in 1–2 days." },
              { step: 5, title: "Monitor & Support", body: "Ongoing monitoring, net metering filing with UPCL, and after-sales support." },
            ].map((s) => (
              <StepCard key={s.step} step={s.step} title={s.title} body={s.body} />
            ))}
          </div>
        </div>
      </section>

      <CityFAQ {...cityData} state={cityData.stateName} />

      {/* Contact Strip */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to go solar in Dehradun?</h2>
          <p className="text-white/80 mb-8">Call us or book online. Our engineer will visit within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-solar" className="bg-accent text-white font-bold px-10 py-4 hover:bg-amber-600 transition-colors">Book Free Site Visit</a>
            <a href="tel:+918882088600" className="border-2 border-white text-white font-bold px-10 py-4 hover:bg-white hover:text-primary transition-colors">Call +91 8882088600</a>
          </div>
        </div>
      </section>
    </main>
  );
}
