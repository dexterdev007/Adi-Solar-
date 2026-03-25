import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Solar Site Visit | AdiSolar",
  description:
    "Book your free, no-obligation solar site visit today. Our certified engineer visits within 48 hours. Serving homes, offices, and industries across India.",
  alternates: {
    canonical: "https://adisolar.in/get-solar",
  },
};

export default function GetSolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
