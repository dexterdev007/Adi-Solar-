import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AdiSolar | Pan India Solar Installation Company",
  description:
    "AdiSolar bridges the gap between solar manufacturers and Indian homeowners, businesses, and institutions. 500+ happy customers. Certified engineers. Pan India.",
  alternates: {
    canonical: "https://adisolar.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
