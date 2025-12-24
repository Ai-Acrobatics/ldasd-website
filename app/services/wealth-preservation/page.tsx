import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wealth Preservation Services | Sean Gelt - LDASD Financial, San Diego",
  description: "Protect and preserve your wealth in San Diego. Asset protection, risk mitigation, insurance analysis, and legacy planning by Sean Gelt at LDASD Financial, Inc.",
  keywords: "wealth preservation San Diego, asset protection, legacy planning, risk management, insurance analysis, LDASD Financial, fiduciary advisor",
};

const features = [
  {
    title: "Asset Protection",
    description: "Implement strategies to shield your assets from potential creditors, lawsuits, and unforeseen circumstances.",
    icon: "🛡️",
  },
  {
    title: "Risk Mitigation",
    description: "Identify and address potential risks to your wealth through comprehensive risk assessment and management.",
    icon: "⚠️",
  },
  {
    title: "Insurance Analysis",
    description: "Evaluate your insurance coverage to ensure adequate protection for life, disability, liability, and property.",
    icon: "📋",
  },
  {
    title: "Legacy Planning",
    description: "Create strategies to preserve and transfer wealth to future generations according to your wishes.",
    icon: "🏛️",
  },
  {
    title: "Business Succession",
    description: "Plan for the smooth transition of business interests to protect your life's work and your family.",
    icon: "🏢",
  },
  {
    title: "Concentrated Stock Strategies",
    description: "Manage the risks of concentrated positions while minimizing tax impact through sophisticated diversification strategies.",
    icon: "📊",
  },
];

export default function WealthPreservationPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors mb-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Services
            </Link>
            <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
              Wealth Preservation
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Protect What You&apos;ve Built
            </h1>
            <p className="text-xl text-white/80">
              Sophisticated strategies to safeguard your wealth for yourself
              and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Wealth Preservation Strategies
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive protection for your assets, your family, and your legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card-3d bg-white rounded-2xl p-8">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Preservation Matters */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Wealth Preservation Matters
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Building wealth is only half the equation. Without proper protection,
                  years of careful accumulation can be jeopardized by unforeseen events.
                </p>
                <p>
                  Our wealth preservation strategies are designed to protect your assets
                  from market volatility, liability exposure, and tax erosion—while ensuring
                  your legacy endures for generations.
                </p>
                <p>
                  We work with your legal and tax professionals to implement comprehensive
                  protection strategies tailored to your unique situation.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Key Protection Areas</h3>
              <ul className="space-y-4">
                {[
                  "Market volatility and economic downturns",
                  "Liability and legal exposure",
                  "Tax erosion and inefficient structures",
                  "Family disputes and divorce",
                  "Business risks and succession",
                  "Healthcare and long-term care costs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Protect Your Legacy Today
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a consultation to discuss how we can help protect
            your wealth for generations to come.
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
