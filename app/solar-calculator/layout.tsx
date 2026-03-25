import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Savings Calculator India | How Much Will You Save?",
  description:
    "Calculate your exact monthly savings, recommended system size, and installation cost based on your electricity bill. Free, instant, no signup required.",
  keywords:
    "solar savings calculator India, solar panel cost calculator, rooftop solar ROI India",
  alternates: {
    canonical: "https://adisolar.in/solar-calculator",
  },
};

export default function SolarCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
