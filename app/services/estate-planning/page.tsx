import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Planning Services | Sean Gelt - LDASD Financial, San Diego",
  description: "Comprehensive estate planning in San Diego. Estate plan review, trust strategies, beneficiary optimization, and wealth transfer planning. Protect your legacy with Sean Gelt at LDASD Financial.",
  keywords: "estate planning San Diego, trust strategies, wealth transfer, beneficiary planning, legacy planning, LDASD Financial, fiduciary advisor",
};

const features = [
  {
    title: "Estate Plan Review",
    description: "Comprehensive review of existing estate documents to ensure they align with your current wishes and circumstances.",
    icon: "📋",
  },
  {
    title: "Trust Strategies",
    description: "Evaluate and implement trust structures to protect assets, minimize taxes, and control wealth distribution.",
    icon: "🏛️",
  },
  {
    title: "Beneficiary Optimization",
    description: "Review and optimize beneficiary designations across all accounts to ensure proper wealth transfer.",
    icon: "👥",
  },
  {
    title: "Wealth Transfer",
    description: "Develop strategies for efficient wealth transfer to heirs, minimizing estate taxes and maximizing your legacy.",
    icon: "🎁",
  },
  {
    title: "Charitable Legacy",
    description: "Create lasting impact through charitable giving strategies that align with your values and optimize tax benefits.",
    icon: "❤️",
  },
  {
    title: "Family Governance",
    description: "Establish frameworks for family decision-making and wealth stewardship across generations.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const trustTypes = [
  {
    name: "Revocable Living Trusts",
    description: "Avoid probate and maintain control during your lifetime with flexibility to modify as circumstances change.",
  },
  {
    name: "Irrevocable Trusts",
    description: "Remove assets from your estate for tax purposes while providing for beneficiaries according to your terms.",
  },
  {
    name: "Charitable Trusts",
    description: "Support causes you care about while receiving tax benefits and potentially income during your lifetime.",
  },
  {
    name: "Special Needs Trusts",
    description: "Provide for loved ones with disabilities without jeopardizing their eligibility for government benefits.",
  },
];

export default function EstatePlanningPage() {
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
              Estate Planning
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Protect Your Legacy
            </h1>
            <p className="text-xl text-white/80">
              Ensure your legacy endures with comprehensive estate planning
              that protects your family and honors your wishes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Estate Planning Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive estate planning to protect your assets and provide for your loved ones.
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

      {/* Trust Types */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trust Strategies
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We help you understand and implement the right trust structures
              for your unique situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trustTypes.map((trust) => (
              <div key={trust.name} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">{trust.name}</h3>
                <p className="text-foreground/70">{trust.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordination */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Coordinated Estate Planning
              </h2>
              <p className="text-foreground/70 mb-4">
                Estate planning requires coordination between financial planning,
                legal documents, and tax strategies. We work closely with your
                attorney and CPA to ensure all elements work together seamlessly.
              </p>
              <p className="text-foreground/70 mb-6">
                Our role is to help you understand your options, coordinate with
                your legal team, and ensure your financial plan aligns with your
                estate planning goals.
              </p>
              <ul className="space-y-3">
                {[
                  "Review and optimize beneficiary designations",
                  "Coordinate retirement account distribution strategies",
                  "Align investment management with estate goals",
                  "Integrate tax planning with wealth transfer strategies",
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
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Important Note
              </h3>
              <p className="text-foreground/70">
                Estate planning involves legal documents that must be prepared by
                a qualified attorney. We do not practice law or provide legal advice.
                Our role is to coordinate financial planning with your estate plan
                and help you understand how different strategies may impact your
                overall financial picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Secure Your Family&apos;s Future
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a consultation to discuss your estate planning needs
            and how we can help protect your legacy.
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
