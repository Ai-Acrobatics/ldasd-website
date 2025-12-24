import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Optimization Strategies | Sean Gelt - LDASD Financial, San Diego",
  description: "Proactive tax planning and optimization in San Diego. Tax-loss harvesting, Roth conversions, tax-efficient withdrawals, and charitable giving strategies. Maximize after-tax returns with Sean Gelt.",
  keywords: "tax planning San Diego, tax-loss harvesting, Roth conversion, tax-efficient investing, charitable giving strategies, LDASD Financial",
};

const features = [
  {
    title: "Tax-Loss Harvesting",
    description: "Strategically realize losses to offset gains and reduce your tax burden while maintaining your investment strategy.",
    icon: "📉",
  },
  {
    title: "Roth Conversions",
    description: "Evaluate and execute Roth conversion strategies to optimize your long-term tax situation and create tax-free income.",
    icon: "🔄",
  },
  {
    title: "Tax-Efficient Withdrawals",
    description: "Develop withdrawal strategies that minimize taxes throughout retirement by coordinating across account types.",
    icon: "💵",
  },
  {
    title: "Charitable Giving Strategies",
    description: "Maximize the impact of your charitable giving while optimizing tax benefits through donor-advised funds and qualified charitable distributions.",
    icon: "❤️",
  },
  {
    title: "Asset Location",
    description: "Place investments in the most tax-efficient account types to maximize after-tax returns over time.",
    icon: "📍",
  },
  {
    title: "Capital Gains Management",
    description: "Strategically manage the timing and character of capital gains to minimize tax impact.",
    icon: "📊",
  },
];

const strategies = [
  {
    title: "Before Retirement",
    items: [
      "Maximize tax-advantaged contributions",
      "Strategic Roth conversions in low-income years",
      "Tax-loss harvesting opportunities",
      "Asset location optimization",
    ],
  },
  {
    title: "During Retirement",
    items: [
      "Tax-efficient withdrawal sequencing",
      "Social Security timing optimization",
      "Required Minimum Distribution planning",
      "Qualified Charitable Distributions",
    ],
  },
  {
    title: "Wealth Transfer",
    items: [
      "Stepped-up basis strategies",
      "Charitable remainder trusts",
      "Strategic gifting approaches",
      "Estate tax minimization",
    ],
  },
];

export default function TaxStrategiesPage() {
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
              Tax Strategies
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Keep More of What You Earn
            </h1>
            <p className="text-xl text-white/80">
              Proactive tax planning strategies designed to minimize your tax burden
              and maximize your after-tax wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tax Optimization Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proactive tax management is essential to preserving and growing your wealth.
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

      {/* Lifecycle Strategies */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tax Strategies Throughout Your Life
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">{strategy.title}</h3>
                <ul className="space-y-3">
                  {strategy.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Saving on Taxes Today
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a consultation to discuss tax-saving strategies
            tailored to your situation.
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
