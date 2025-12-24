"use client";

import Link from "next/link";
import ProductHeroCarousel from "@/components/ProductHeroCarousel";

const heroImages = [
  { src: "/images/products/trust-carousel-1.jpg", alt: "Family at Coronado Beach, San Diego" },
  { src: "/images/products/trust-carousel-2.jpg", alt: "Multi-generational family portrait, San Diego" },
  { src: "/images/products/trust-carousel-3.jpg", alt: "Parents with children at home, San Diego" },
  { src: "/images/products/trust-carousel-4.jpg", alt: "Happy couple planning their legacy, San Diego" },
];

export default function EstatePlanPage() {
  return (
    <div className="bg-background">
      <ProductHeroCarousel images={heroImages}>
        <span className="inline-block px-4 py-1 rounded-full bg-secondary text-white text-sm font-semibold mb-6 shadow-lg">
          Best Value
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Complete Estate Plan</h1>
        <p className="mt-6 text-xl text-white/90">
          Everything you need for comprehensive protection. Trust, will, powers of attorney, healthcare directives, and lifetime updates.
        </p>
        <div className="mt-8 flex items-baseline gap-4">
          <span className="text-5xl font-bold text-secondary">$699</span>
          <span className="text-white/90">one-time fee</span>
        </div>
        <p className="mt-4 text-secondary font-semibold bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full inline-block">Save $200+ vs. individual products</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Complete Plan
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </ProductHeroCarousel>

      <section className="py-24 bg-sky">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Everything Included</h2>
            <p className="mt-4 text-lg text-foreground/80">Comprehensive protection with all essential documents</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📜", title: "Living Trust & Pour-over Will", description: "Avoid probate and protect your assets" },
              { icon: "⚖️", title: "Durable Power of Attorney", description: "Financial decision-making authority" },
              { icon: "🏥", title: "Healthcare Power of Attorney", description: "Medical decision-making authority" },
              { icon: "💝", title: "Living Will / Healthcare Directive", description: "End-of-life care wishes documented" },
              { icon: "🔒", title: "HIPAA Authorization", description: "Medical information access granted" },
              { icon: "👶", title: "Guardianship Designation", description: "Minor children protection specified" },
              { icon: "💻", title: "Digital Asset Management", description: "Online accounts and assets covered" },
              { icon: "🏠", title: "Trust Funding Guidance", description: "Step-by-step asset transfer help" },
              { icon: "👨‍⚖️", title: "Attorney Consultation", description: "Expert legal review included" },
              { icon: "⭐", title: "Priority Support", description: "Faster response times guaranteed" },
              { icon: "🔄", title: "Free Unlimited Updates for Life", description: "Change anytime, no extra fees" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 text-center overflow-hidden">
                <div className="h-24 bg-gradient-to-br from-primary/15 to-secondary/15" />
                <div className="p-6">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Complete Protection for Your Family</h2>
            <p className="mt-4 text-lg text-foreground/80">Six essential documents in one comprehensive package</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Living Trust", description: "Avoid probate, maintain privacy, and protect your assets from court proceedings." },
              { title: "Last Will & Testament", description: "Pour-over will ensures any assets not in your trust are still distributed properly." },
              { title: "Durable Power of Attorney", description: "Name someone to manage your finances if you become incapacitated." },
              { title: "Healthcare Power of Attorney", description: "Designate who makes medical decisions on your behalf if you cannot." },
              { title: "Living Will", description: "Document your end-of-life care wishes and relieve your family of difficult decisions." },
              { title: "HIPAA Authorization", description: "Ensure your designated agents can access your medical information." },
            ].map((doc) => (
              <div key={doc.title} className="bg-white rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="h-24 bg-gradient-to-br from-primary/15 to-secondary/15" />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{doc.title}</h3>
                  <p className="text-foreground/80">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sky">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">Why Choose the Complete Plan?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-primary/15 to-secondary/15" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Best Value</h3>
                <p className="text-foreground/80 mb-4">Save over $200 compared to purchasing documents individually. One comprehensive package at one great price.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-primary/15 to-secondary/15" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Lifetime Updates</h3>
                <p className="text-foreground/80 mb-4">Life changes. Update your documents anytime, free forever. Marriage, divorce, new children, moves - we've got you covered.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-primary/15 to-secondary/15" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Complete Protection</h3>
                <p className="text-foreground/80 mb-4">Cover every scenario: death, incapacity, medical decisions, and asset distribution. Nothing left to chance.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-primary/15 to-secondary/15" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Priority Support</h3>
                <p className="text-foreground/80 mb-4">Get faster response times and direct access to our estate planning specialists whenever you need help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Complete Peace of Mind, One Simple Price</h2>
          <p className="text-xl text-white/90 mb-10">
            Get every document you need to protect your family and assets. Free lifetime updates included.
          </p>
          <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started for $699
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
