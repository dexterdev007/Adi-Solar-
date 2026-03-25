import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import {
  blogFaqs,
  blogFeaturedImages,
  blogPosts,
  getBlogPostBySlug,
} from "@/lib/blogData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | AdiSolar",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    keywords: post.keywords,
    alternates: {
      canonical: `https://adisolar.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      type: "article",
      url: `https://adisolar.in/blog/${post.slug}`,
      images: [blogFeaturedImages[post.slug] ?? "/assets/solar/hero-placeholder.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const faqs = blogFaqs[post.slug] ?? [];
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AdiSolar",
      url: "https://adisolar.in",
    },
    image: `https://adisolar.in${blogFeaturedImages[post.slug] ?? "/assets/solar/hero-placeholder.jpg"}`,
    mainEntityOfPage: `https://adisolar.in/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <SchemaMarkup schema={articleSchema} />
      {faqSchema ? <SchemaMarkup schema={faqSchema} /> : null}

      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-text-secondary">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="transition-colors hover:text-primary">
              Blog
            </Link>
            <span className="mx-2">›</span>
            <span className="text-text-primary">{post.title}</span>
          </nav>

          <header className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-text-tertiary" />
              <span>{post.readTime}</span>
              <span className="h-1 w-1 rounded-full bg-text-tertiary" />
              <span>{post.author}</span>
            </div>
          </header>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-surface">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={blogFeaturedImages[post.slug] ?? "/assets/solar/hero-placeholder.jpg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <section className="mt-12 rounded-3xl border border-border bg-primary-pale p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Author
              </p>
              <h2 className="mt-2 text-2xl font-bold text-text-primary">
                Written by {post.author}, AdiSolar
              </h2>
              <p className="mt-3 text-base leading-7 text-text-secondary">
                {post.author} works with the AdiSolar team to turn subsidy rules, pricing, and
                rooftop design decisions into practical guidance for Indian homes and businesses.
              </p>
            </section>

            <section className="mt-8 rounded-3xl bg-primary px-8 py-9 text-white">
              <h2 className="text-2xl font-bold">Ready to go solar? Book your free site visit</h2>
              <p className="mt-3 max-w-2xl text-white/85">
                Get a rooftop assessment, system recommendation, and honest pricing based on your
                actual roof and monthly consumption.
              </p>
              <Link
                href="/get-solar"
                className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Book your free site visit
              </Link>
            </section>
          </div>

          <section className="mx-auto mt-16 max-w-5xl border-t border-border pt-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Continue Reading
                </p>
                <h2 className="mt-2 text-3xl font-bold text-text-primary">Related posts</h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-primary hover:text-primary-light">
                View all posts
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="text-sm text-text-secondary">
                    {formatDate(relatedPost.date)} · {relatedPost.readTime}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-text-primary">
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light"
                  >
                    Read this next
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
