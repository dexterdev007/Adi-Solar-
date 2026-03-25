import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Solar Energy Works | Solar Facts & FAQs | AdiSolar",
  description:
    "Learn how solar panels work, bust common myths, and understand government subsidies. A complete, honest guide to solar energy for Indian homes and businesses.",
  keywords:
    "how solar works India, solar panel facts, solar myths, PM Surya Ghar eligibility, solar FAQs India",
  alternates: {
    canonical: "https://adisolar.in/all-about-solar",
  },
};

export default function AllAboutSolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
