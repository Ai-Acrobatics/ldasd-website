import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Resources | Sean Gelt - LDASD Financial, San Diego",
  description: "Educational resources, guides, and insights on retirement planning, investment management, and wealth preservation. Stay informed with LDASD Financial.",
  keywords: "financial resources, retirement planning guides, investment education, wealth management insights, LDASD Financial",
};

const resources = [
  {
    title: "Educational Guides",
    description: "In-depth guides on retirement planning, Social Security, Medicare, and more.",
    href: "/resources/guides",
    icon: "📚",
    count: "12+ Guides",
  },
  {
    title: "Blog & Insights",
    description: "Regular commentary on market trends, financial planning strategies, and timely topics.",
    href: "/resources/blog",
    icon: "✍️",
    count: "Weekly Updates",
  },
  {
    title: "FAQ",
    description: "Answers to frequently asked questions about our services and financial planning.",
    href: "/resources/faq",
    icon: "❓",
    count: "30+ Questions",
  },
];

const featuredTopics = [
  {
    title: "Retirement Income Planning",
    description: "Learn strategies for creating sustainable income throughout retirement.",
  },
  {
    title: "Social Security Optimization",
    description: "Understand how to maximize your Social Security benefits.",
  },
  {
    title: "Tax-Efficient Investing",
    description: "Discover ways to minimize taxes on your investment returns.",
  },
  {
    title: "Estate Planning Basics",
    description: "Essential information about protecting your legacy.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
            Resources
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Financial Education Center
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore our library of educational resources designed to help you make
            informed financial decisions.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="card-3d bg-white rounded-2xl p-8 group"
              >
                <span className="text-5xl mb-6 block">{resource.icon}</span>
                <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h2>
                <p className="text-foreground/70 mb-4">{resource.description}</p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold">
                  {resource.count}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Popular Topics
            </h2>
            <p className="text-lg text-foreground/70">
              Explore our most-read educational content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTopics.map((topic) => (
              <div key={topic.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-foreground mb-2">{topic.title}</h3>
                <p className="text-foreground/70 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for market insights, financial planning tips,
              and updates from LDASD Financial.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-accent text-primary font-semibold hover:bg-accent-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific financial questions
            and goals with Sean Gelt.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-primary hover:bg-accent-light transition-all"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
