import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Planning Services | Sean Gelt - LDASD Financial Services",
  description: "Comprehensive wealth management, retirement planning, investment management, tax optimization, and estate planning services in San Diego. Fiduciary financial advisors dedicated to your success.",
};

const services = [
  {
    name: "Retirement Planning",
    description: "Build a secure, confident retirement with personalized income strategies, Social Security optimization, and comprehensive retirement readiness assessments. We help you create a sustainable retirement income plan that adjusts to life's changes.",
    href: "/services/retirement-planning",
    features: ["Retirement income strategy", "Social Security optimization", "Pension analysis", "Healthcare cost planning"],
    icon: "🎯",
  },
  {
    name: "Investment Management",
    description: "Grow your wealth with disciplined portfolio management, diversification strategies, and ongoing rebalancing. Our evidence-based investment approach focuses on long-term wealth accumulation while managing risk.",
    href: "/services/investment-management",
    features: ["Portfolio construction", "Risk management", "Tax-efficient investing", "Regular rebalancing"],
    icon: "📈",
  },
  {
    name: "Wealth Preservation",
    description: "Protect what you've built with sophisticated risk management, asset protection strategies, and wealth transfer planning. We help you safeguard your legacy for future generations.",
    href: "/services/wealth-preservation",
    features: ["Asset protection", "Risk mitigation", "Insurance analysis", "Legacy planning"],
    icon: "🛡️",
  },
  {
    name: "Tax Optimization",
    description: "Minimize your tax burden with proactive tax-loss harvesting, Roth conversion strategies, and tax-efficient investment placement. Keep more of what you earn through strategic tax planning.",
    href: "/services/tax-strategies",
    features: ["Tax-loss harvesting", "Roth conversions", "Tax-efficient withdrawals", "Charitable giving strategies"],
    icon: "💰",
  },
  {
    name: "Estate Planning",
    description: "Ensure your legacy endures with comprehensive estate plans, trust strategies, and succession planning. We work with your legal team to create a plan that protects your family and honors your wishes.",
    href: "/services/estate-planning",
    features: ["Estate plan review", "Trust strategies", "Beneficiary optimization", "Wealth transfer"],
    icon: "🏛️",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
            Comprehensive Financial Solutions
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From retirement planning to estate preservation, we offer a complete suite
            of fiduciary financial services designed to help you achieve financial peace of mind.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-4xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground/80">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    Learn More About {service.name}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                    <span className="text-8xl opacity-50">{service.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss your financial goals
            and learn how we can help you achieve them.
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
