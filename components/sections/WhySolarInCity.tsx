import { Sun, Zap, IndianRupee, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface WhySolarInCityProps {
  cityName: string;
  stateName: string;
  discom: string;
  avgBill: string;
  sunHours: string;
  customNote?: string;
}

export function WhySolarInCity({
  cityName,
  stateName,
  discom,
  avgBill,
  sunHours,
  customNote,
}: WhySolarInCityProps) {
  const points = [
    {
      icon: Sun,
      text: `${cityName} receives ${sunHours} peak sun hours/day — strong solar yield year-round`,
    },
    {
      icon: Zap,
      text: `Electricity from ${discom} costs ₹7–10/unit — making solar ROI highly attractive here`,
    },
    {
      icon: IndianRupee,
      text: `PM Surya Ghar subsidy of up to ₹78,000 available to all ${cityName} homeowners`,
    },
    {
      icon: Wrench,
      text: `AdiSolar engineers are familiar with ${discom} net metering requirements and DISCOM inspection processes in ${stateName}`,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              caption={`Solar in ${cityName}`}
              heading={`Why Solar Makes Sense in ${cityName}`}
              className="text-left mb-8"
            />
            {customNote && (
              <p className="text-text-secondary text-base leading-relaxed mb-6 border-l-4 border-accent pl-4">
                {customNote}
              </p>
            )}
            <ul className="flex flex-col gap-5">
              {points.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary-pale flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <p className="text-text-secondary text-base leading-relaxed pt-2">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-pale p-8 lg:p-10 flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-heading text-text-primary">
              Ready to go solar in {cityName}?
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Our certified engineers visit {cityName} regularly. Book a free,
              no-obligation site visit and receive a detailed quote within 48 hours.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/get-solar"
                className="inline-block bg-primary text-white font-bold px-8 py-4 text-base text-center hover:bg-primary-light transition-colors"
              >
                Book Free Site Visit
              </a>
              <a
                href="tel:+918882088600"
                className="inline-block border-2 border-primary text-primary font-bold px-8 py-3 text-base text-center hover:bg-primary hover:text-white transition-colors"
              >
                Call +91 8882088600
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
