import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Solar Energy Blog | Guides for Indian Homeowners | AdiSolar",
  description:
    "Expert solar energy guides for Indian homes and businesses. Costs, subsidies, installation, savings — all explained honestly.",
  alternates: {
    canonical: "https://adisolar.in/blog",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            AdiSolar Journal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Solar Energy Blog — Guides, Tips & News
          </h1>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Practical advice for Indian homeowners and businesses making the switch to
            solar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                <span>{formatDate(post.date)}</span>
                <span className="h-1 w-1 rounded-full bg-text-tertiary" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight text-text-primary">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 flex-1 text-base leading-7 text-text-secondary">{post.excerpt}</p>
              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                >
                  Read the guide
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
