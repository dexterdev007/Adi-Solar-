import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adisolar.in";

  const corePages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/all-about-solar`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/solar-calculator`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/get-solar`,
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
  ];

  const cityPages = [
    "dehradun",
    "lucknow",
    "gorakhpur",
    "varanasi",
    "allahabad",
    "mughalsarai",
    "begusarai",
    "bhagalpur",
    "ranchi",
    "bhubaneswar",
    "guwahati",
    "silchar",
    "tinsukia",
    "ahmedabad",
  ].map((city) => ({
    url: `${baseUrl}/solar-installation-${city}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = [
    "solar-panel-cost-india-2026",
    "pm-surya-ghar-subsidy-guide",
    "on-grid-vs-off-grid-solar-india",
    "how-many-solar-panels-for-home-india",
    "solar-installation-process-india",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const blogIndex = {
    url: `${baseUrl}/blog`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  };

  return [...corePages, blogIndex, ...cityPages, ...blogPages].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}
