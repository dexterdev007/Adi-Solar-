import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface CityFAQProps {
  cityName: string;
  discom: string;
  state: string;
}

export function CityFAQ({ cityName, discom, state }: CityFAQProps) {
  const faqs = [
    {
      q: `Which DISCOM handles net metering in ${cityName}?`,
      a: `${discom} handles net metering in ${cityName}. AdiSolar manages the complete application as part of your installation — no DISCOM office visits needed.`,
    },
    {
      q: `How long does installation take in ${cityName}?`,
      a: `Most residential installations in ${cityName} are done in 1–2 days. We schedule at your convenience and ensure minimum disruption to your daily routine.`,
    },
    {
      q: `Do you provide maintenance services in ${cityName}?`,
      a: `Yes — we have service coverage across ${cityName} and nearby areas. Annual Maintenance Contracts (AMC) are available for all our installations, covering cleaning, inspection, and performance monitoring.`,
    },
    {
      q: `How quickly can I get a site visit in ${cityName}?`,
      a: `We schedule site visits in ${cityName} within 24–48 hours. Book online or call +91 8882088600.`,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          caption="Common Questions"
          heading={`Solar FAQs for ${cityName}`}
          className="mb-12 text-center"
        />
        <div className="flex flex-col divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-5">
              <summary className="font-semibold text-text-primary cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
              </summary>
              <p className="text-text-secondary text-base mt-4 pb-2 pr-8 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-10 p-6 bg-primary-pale border border-primary/20 text-center">
          <p className="text-text-secondary mb-4">
            Have more questions about solar installation in {cityName}?
          </p>
          <a
            href="/get-solar"
            className="inline-block bg-primary text-white font-bold px-8 py-3 hover:bg-primary-light transition-colors text-sm"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
