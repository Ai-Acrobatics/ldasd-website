"use client";

import Link from "next/link";
import ProductHeroCarousel from "@/components/ProductHeroCarousel";

const heroImages = [
  { src: "/images/hero/hero-couple-balboa.png", alt: "Couple at Balboa Park, San Diego" },
  { src: "/images/hero/hero-family-beach.png", alt: "Family at San Diego Beach" },
  { src: "/images/hero/hero-retirees-lajolla.png", alt: "Retirees at La Jolla, San Diego" },
  { src: "/images/hero/hero-family-home.png", alt: "Happy family at their San Diego home" },
];

const includedFeatures = [
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
];

const documents = [
  { title: "Living Trust", description: "Avoid probate, maintain privacy, and protect your assets from court proceedings." },
  { title: "Last Will & Testament", description: "Pour-over will ensures any assets not in your trust are still distributed properly." },
  { title: "Durable Power of Attorney", description: "Name someone to manage your finances if you become incapacitated." },
  { title: "Healthcare Power of Attorney", description: "Designate who makes medical decisions on your behalf if you cannot." },
  { title: "Living Will", description: "Document your end-of-life care wishes and relieve your family of difficult decisions." },
  { title: "HIPAA Authorization", description: "Ensure your designated agents can access your medical information." },
];

const benefits = [
  { title: "Best Value", description: "Save over $200 compared to purchasing documents individually. One comprehensive package at one great price." },
  { title: "Lifetime Updates", description: "Life changes. Update your documents anytime, free forever. Marriage, divorce, new children, moves - we've got you covered." },
  { title: "Complete Protection", description: "Cover every scenario: death, incapacity, medical decisions, and asset distribution. Nothing left to chance." },
  { title: "Priority Support", description: "Get faster response times and direct access to our estate planning specialists whenever you need help." },
];

export default function EstatePlanPage() {
  return (
    <div className="bg-background">
      <ProductHeroCarousel images={heroImages}>
        <div className="flex flex-col items-center justify-center h-full px-6 lg:px-12 py-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white text-sm font-semibold mb-6 shadow-lg">
            Best Value
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">Complete Estate Plan</h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl">
            Everything you need for comprehensive protection. Trust, will, powers of attorney, healthcare directives, and lifetime updates.
          </p>
          <div className="mt-8 flex items-baseline gap-4 justify-center">
            <span className="text-4xl sm:text-5xl font-bold text-secondary">$699</span>
            <span className="text-white/90">one-time fee</span>
          </div>
          <p className="mt-4 text-secondary font-semibold bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block">Save $200+ vs. individual products</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-secondary-light hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Complete Plan
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </ProductHeroCarousel>

      {/* Everything Included Section - Cards Centered */}
      <section className="py-24 bg-sky">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold tracking-wider text-sm uppercase mb-4">
              What&apos;s Included
            </span>
            <h2 className="text-4xl font-bold text-foreground">Everything Included</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">Comprehensive protection with all essential documents</p>
          </div>
          
          {/* Centered grid with proper alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {includedFeatures.map((item) => (
              <div 
                key={item.title} 
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 text-center overflow-hidden ring-1 ring-white/50"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                <div className="h-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
                <div className="p-6 -mt-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl mb-4 ring-1 ring-black/5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section - Centered with proper bullet alignment */}
      <section className="py-24 bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold tracking-wider text-sm uppercase mb-4">
              Essential Documents
            </span>
            <h2 className="text-4xl font-bold text-foreground">Complete Protection for Your Family</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">Six essential documents in one comprehensive package</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {documents.map((doc, index) => (
              <div 
                key={doc.title} 
                className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden ring-1 ring-black/5"
              >
                {/* Glass header with prism effect */}
                <div className="relative h-20 bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-cyan-500/5 to-violet-500/5 mix-blend-overlay" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-bold text-primary/60 uppercase tracking-wider">Document {index + 1}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{doc.title}</h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed pl-11">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Centered Cards */}
      <section className="py-24 bg-sky relative overflow-hidden">
        {/* Subtle prism background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-rose-500/5 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold tracking-wider text-sm uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-foreground">Why Choose the Complete Plan?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden ring-1 ring-white/50"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                <div className="relative h-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-amber-500/5 to-cyan-500/5 mix-blend-overlay" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-lg font-bold text-primary shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]" />
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
          {/* Prism effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-violet-500/5 mix-blend-overlay" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Complete Peace of Mind, One Simple Price</h2>
          <p className="text-xl text-white/90 mb-10">
            Get every document you need to protect your family and assets. Free lifetime updates included.
          </p>
          <Link 
            href="/book" 
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-secondary-light hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
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
