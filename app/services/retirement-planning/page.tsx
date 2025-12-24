import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retirement Planning Services | Sean Gelt - LDASD Financial, San Diego",
  description: "Comprehensive retirement planning in San Diego. Social Security optimization, retirement income strategies, pension analysis, and healthcare cost planning. Schedule your free consultation with Sean Gelt.",
  keywords: "retirement planning San Diego, Social Security optimization, retirement income strategy, pension analysis, healthcare planning retirement, LDASD Financial",
};

const features = [
  {
    title: "Retirement Income Strategy",
    description: "Develop a sustainable income plan that ensures your money lasts throughout retirement, adapting to inflation and changing needs.",
    icon: "💰",
  },
  {
    title: "Social Security Optimization",
    description: "Maximize your lifetime Social Security benefits with strategic claiming decisions based on your unique circumstances.",
    icon: "📊",
  },
  {
    title: "Pension Analysis",
    description: "Evaluate pension options including lump-sum vs. annuity decisions to optimize your retirement income.",
    icon: "📈",
  },
  {
    title: "Healthcare Cost Planning",
    description: "Plan for Medicare, supplemental insurance, and long-term care costs to protect your retirement savings.",
    icon: "🏥",
  },
  {
    title: "Withdrawal Strategy",
    description: "Optimize the sequence and timing of withdrawals from various accounts to minimize taxes and maximize wealth.",
    icon: "🎯",
  },
  {
    title: "Retirement Readiness Assessment",
    description: "Comprehensive analysis of your preparedness for retirement with actionable recommendations.",
    icon: "✅",
  },
];

export default function RetirementPlanningPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]" />
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
              Retirement Planning
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Build Your Secure Retirement
            </h1>
            <p className="text-xl text-white/80">
              Create a retirement income plan that provides confidence and peace of mind.
              Our comprehensive approach addresses every aspect of your retirement journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Retirement Planning Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From income strategies to healthcare planning, we address every element
              of a successful retirement.
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

      {/* Process Section */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Retirement Planning Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", description: "Understand your goals, timeline, and current financial situation" },
              { step: "2", title: "Analysis", description: "Comprehensive review of income sources, expenses, and projections" },
              { step: "3", title: "Strategy", description: "Develop customized retirement income and investment strategies" },
              { step: "4", title: "Implementation", description: "Execute the plan with ongoing monitoring and adjustments" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-primary font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Plan Your Retirement?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss your retirement goals
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
