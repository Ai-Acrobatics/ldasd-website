"use client";

import Link from "next/link";
import Image from "next/image";
import ProductHeroCarousel from "@/components/ProductHeroCarousel";

const heroImages = [
  { src: "/images/products/trust-carousel-1.jpg", alt: "Family at Coronado Beach, San Diego" },
  { src: "/images/products/trust-carousel-2.jpg", alt: "Multi-generational family portrait, San Diego" },
  { src: "/images/products/trust-carousel-3.jpg", alt: "Parents with children at home, San Diego" },
  { src: "/images/products/trust-carousel-4.jpg", alt: "Happy couple planning their legacy, San Diego" },
];

export default function TrustPage() {
  return (
    <div className="bg-background">
      {/* Hero with Carousel */}
      <ProductHeroCarousel images={heroImages}>
        <div className="flex items-center justify-center h-full pt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary text-white text-sm font-semibold mb-6 shadow-lg">
              Most Popular
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Living Trust
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              Avoid probate, keep your estate private, and protect your assets with a comprehensive living trust.
            </p>
            <div className="mt-8 flex items-baseline justify-center gap-4">
              <span className="text-5xl font-bold text-secondary">$599</span>
              <span className="text-white/90">one-time fee</span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Create Your Trust
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Compare Plans
              </Link>
            </div>
          </div>
        </div>
      </ProductHeroCarousel>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What's Included</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Everything you need for complete estate protection
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📜", title: "Revocable Living Trust", description: "Comprehensive trust document tailored to your needs" },
              { icon: "⚖️", title: "Pour-over Will included", description: "Backup will to capture any remaining assets" },
              { icon: "🚫", title: "Avoid probate completely", description: "Transfer assets immediately without court involvement" },
              { icon: "🔒", title: "Keep estate details private", description: "Your assets and beneficiaries stay confidential" },
              { icon: "🛡️", title: "Incapacity protection", description: "Successor trustee can manage your affairs if needed" },
              { icon: "💼", title: "Asset protection strategies", description: "Safeguard your estate from creditors and lawsuits" },
              { icon: "👨‍⚖️", title: "Attorney consultation", description: "Expert legal guidance throughout the process" },
              { icon: "📋", title: "State-specific compliance", description: "Documents meet all California legal requirements" },
              { icon: "🔄", title: "Free updates for 3 years", description: "Modify your trust as your circumstances change" },
              { icon: "🏠", title: "Transfer deed assistance", description: "Help transferring real estate into your trust" },
            ].map((item) => (
              <div key={item.title} className="bg-tan rounded-3xl p-8 shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-tan">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground">Why Choose a Living Trust?</h2>
              <p className="mt-4 text-lg text-foreground/80">Key benefits that protect your family</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <Image
                src="/images/families/grandparents.jpg"
                alt="Grandparents enjoying retirement with family"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Avoid Probate",
                description: "Skip the lengthy, expensive court process. Your assets transfer immediately to your beneficiaries without court involvement or public disclosure.",
              },
              {
                title: "Privacy Protection",
                description: "Unlike wills, trusts are not public record. Keep your estate details, asset values, and beneficiaries completely private.",
              },
              {
                title: "Incapacity Planning",
                description: "If you become unable to manage your affairs, your successor trustee can step in immediately without court proceedings.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-sage">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is a living trust?",
                a: "A living trust is a legal document that holds ownership of your assets during your lifetime and distributes them to your beneficiaries after your death, without going through probate court.",
              },
              {
                q: "Do I still need a will if I have a trust?",
                a: "Yes! We include a \"pour-over\" will that captures any assets not transferred to your trust and ensures they're still distributed according to your wishes.",
              },
              {
                q: "How long does it take to create a trust?",
                a: "Most people complete their trust documents in 30-60 minutes online. Once submitted, you'll receive your attorney-reviewed documents within 2-3 business days.",
              },
              {
                q: "Can I change my trust later?",
                a: "Absolutely. This is a \"revocable\" living trust, meaning you can modify or revoke it at any time. We provide free updates for 3 years.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-foreground">
                  {faq.q}
                  <svg className="w-5 h-5 text-primary group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-foreground/80">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Trust?</h2>
          <p className="text-xl text-white/90 mb-10">
            Protect your family and avoid probate with a professional living trust.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
