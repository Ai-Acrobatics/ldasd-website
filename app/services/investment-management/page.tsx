import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Management Services | Sean Gelt - LDASD Financial, San Diego",
  description: "Professional investment management in San Diego. Portfolio construction, risk management, tax-efficient investing, and regular rebalancing. Fiduciary wealth management by Sean Gelt.",
  keywords: "investment management San Diego, portfolio management, risk management, tax-efficient investing, wealth management, LDASD Financial, fiduciary advisor",
};

const features = [
  {
    title: "Portfolio Construction",
    description: "Build diversified portfolios tailored to your risk tolerance, time horizon, and financial goals using evidence-based strategies.",
    icon: "📊",
  },
  {
    title: "Risk Management",
    description: "Implement sophisticated risk management techniques to protect your wealth while pursuing appropriate returns.",
    icon: "🛡️",
  },
  {
    title: "Tax-Efficient Investing",
    description: "Maximize after-tax returns through strategic asset location, tax-loss harvesting, and thoughtful investment selection.",
    icon: "💰",
  },
  {
    title: "Regular Rebalancing",
    description: "Maintain your target allocation through disciplined rebalancing to manage risk and capture opportunities.",
    icon: "⚖️",
  },
  {
    title: "Performance Monitoring",
    description: "Continuous monitoring of portfolio performance with transparent reporting and regular reviews.",
    icon: "📈",
  },
  {
    title: "Investment Research",
    description: "Access institutional-quality research and analysis to inform investment decisions.",
    icon: "🔍",
  },
];

const principles = [
  {
    title: "Evidence-Based Approach",
    description: "Our investment philosophy is grounded in academic research and proven investment principles, not speculation or market timing.",
  },
  {
    title: "Long-Term Focus",
    description: "We maintain discipline during market volatility, focusing on long-term wealth accumulation rather than short-term noise.",
  },
  {
    title: "Cost Consciousness",
    description: "We minimize investment costs through low-cost funds and efficient trading, because every dollar saved is a dollar earned.",
  },
  {
    title: "Fiduciary Duty",
    description: "As fiduciaries, we always act in your best interest, with complete transparency about fees and investment decisions.",
  },
];

export default function InvestmentManagementPage() {
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
              Investment Management
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Grow Your Wealth with Confidence
            </h1>
            <p className="text-xl text-white/80">
              Professional investment management focused on long-term wealth accumulation,
              risk management, and tax efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Investment Management Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Disciplined, evidence-based investment management designed to help
              you achieve your financial goals.
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

      {/* Investment Philosophy */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Investment Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                <p className="text-foreground/70">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Invest with Confidence?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a consultation to discuss your investment goals and learn
            how our disciplined approach can help you build wealth.
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
