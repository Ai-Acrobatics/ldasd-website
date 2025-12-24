"use client";

import Link from "next/link";
import ProductHeroCarousel from "@/components/ProductHeroCarousel";

const heroImages = [
  { src: "/images/products/trust-carousel-1.jpg", alt: "Family at Coronado Beach, San Diego" },
  { src: "/images/products/trust-carousel-2.jpg", alt: "Multi-generational family portrait, San Diego" },
  { src: "/images/products/trust-carousel-3.jpg", alt: "Parents with children at home, San Diego" },
  { src: "/images/products/trust-carousel-4.jpg", alt: "Happy couple planning their legacy, San Diego" },
];

const features = [
  "Last Will & Testament",
  "Guardianship designation for minor children",
  "Asset distribution instructions",
  "Executor appointment",
  "Digital asset instructions",
  "Attorney review included",
  "Free updates for 1 year",
  "State-specific legal compliance",
];

export default function WillPage() {
  return (
    <div className="bg-background">
      <ProductHeroCarousel images={heroImages}>
        <div className="flex flex-col items-center justify-center h-full text-center px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl max-w-4xl">
            Last Will & Testament
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl">
            Protect your children and distribute your assets with a legally binding will. The essential first step in estate planning.
          </p>
          <div className="mt-8 flex items-baseline gap-4">
            <span className="text-5xl font-bold text-secondary">$199</span>
            <span className="text-white/90">one-time fee</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
              Create Your Will
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </ProductHeroCarousel>

      <section className="py-24 bg-tan">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">What's Included</h2>
            <p className="mt-4 text-lg text-foreground/80">Everything you need to protect your family</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature} className="bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="mt-4 text-foreground font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-lg text-foreground/80">Simple process, professional results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Complete Online Questionnaire",
                time: "10-15 minutes",
                description: "Answer questions about beneficiaries, guardians, and executor. Our guided questionnaire makes it simple."
              },
              {
                step: "2",
                title: "Attorney Review",
                time: "1-2 business days",
                description: "A licensed attorney reviews your will to ensure legal compliance with your state's requirements."
              },
              {
                step: "3",
                title: "Sign with Witnesses",
                time: "At your convenience",
                description: "We provide detailed signing instructions specific to your state. Most states require 2 witnesses."
              },
              {
                step: "4",
                title: "Store Safely",
                time: "Ongoing",
                description: "Receive tips for secure storage and guidance on notifying your executor of the document's location."
              },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-secondary font-semibold mb-3">{step.time}</p>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-tan">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Expected Timeline</h2>
            <p className="mt-4 text-lg text-foreground/80">Most clients complete their will within 3-5 days</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-premium">
              <div className="space-y-6">
                {[
                  { phase: "Online questionnaire", duration: "10-15 minutes" },
                  { phase: "Attorney review", duration: "1-2 business days" },
                  { phase: "Document delivery", duration: "Same day after review" },
                  { phase: "Signing", duration: "At your convenience (requires 2 witnesses in most states)" },
                ].map((item, index) => (
                  <div key={item.phase} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{item.phase}</p>
                      <p className="text-foreground/60 text-sm">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-foreground/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">Total: 3-5 days</p>
                  <p className="text-foreground/60 mt-2">From start to signed document</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sky">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Why You Need a Will</h2>
            <p className="mt-4 text-lg text-foreground/80">The sobering reality of dying without proper planning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: "68%", description: "of Americans don't have a will", impact: "Don't let the state decide your family's future" },
              { stat: "$5K-$15K", description: "average probate cost without proper planning", impact: "Protect your family from unnecessary expenses" },
              { stat: "Courts Decide", description: "who raises your children without a will", impact: "You should choose your children's guardians" },
            ].map((stat) => (
              <div key={stat.stat} className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="text-5xl font-bold text-primary mb-3">{stat.stat}</div>
                <p className="text-lg font-semibold text-foreground mb-3">{stat.description}</p>
                <p className="text-foreground/60 text-sm">{stat.impact}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Name Guardians", description: "Designate who will care for your minor children if something happens to you. Without a will, the court decides—and they may not choose who you would have wanted." },
              { title: "Control Asset Distribution", description: "Specify exactly who gets what. Prevent family disputes and ensure your wishes are honored. Without a will, state intestacy laws determine distribution." },
              { title: "Appoint Your Executor", description: "Choose someone you trust to manage your estate and ensure your final wishes are carried out properly. Avoid costly court-appointed administrators." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Do I need a will if I don't have much?", a: "Yes! If you have minor children, a will is essential for naming guardians. Even modest estates benefit from clear distribution instructions." },
              { q: "What happens if I die without a will?", a: "The state decides who gets your assets and who cares for your children based on intestacy laws. This rarely matches what you would have wanted." },
              { q: "Can I update my will later?", a: "Absolutely. Life changes, and your will should too. We provide free updates for 1 year, and you can always revise it as needed." },
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

      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Create Your Will Today</h2>
          <p className="text-xl text-white/90 mb-10">Protect your children and ensure your wishes are honored.</p>
          <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started for $199
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
