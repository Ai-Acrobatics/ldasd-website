import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Serve | Sean Gelt - LDASD Financial, San Diego",
  description: "LDASD Financial serves retirees, pre-retirees, business owners, and high-net-worth families in San Diego. Personalized wealth management by Sean Gelt.",
  keywords: "wealth management San Diego, high net worth financial advisor, retiree financial planning, business owner financial planning, LDASD Financial",
};

const clientTypes = [
  {
    title: "Retirees & Pre-Retirees",
    description: "Individuals within 10 years of retirement or already retired who need comprehensive income planning, Social Security optimization, and wealth preservation strategies.",
    needs: [
      "Retirement income planning",
      "Social Security optimization",
      "Medicare and healthcare planning",
      "Required Minimum Distribution strategies",
      "Legacy and estate planning",
    ],
    icon: "🏖️",
  },
  {
    title: "Business Owners & Executives",
    description: "Entrepreneurs and corporate leaders with complex compensation, equity positions, and business succession needs requiring sophisticated planning.",
    needs: [
      "Executive compensation planning",
      "Stock option and equity strategies",
      "Business succession planning",
      "Key person insurance",
      "Retirement plan design",
    ],
    icon: "💼",
  },
  {
    title: "High-Net-Worth Families",
    description: "Affluent families seeking comprehensive wealth management, multi-generational planning, and coordinated advice across all aspects of their financial lives.",
    needs: [
      "Comprehensive wealth management",
      "Multi-generational planning",
      "Trust and estate strategies",
      "Philanthropic planning",
      "Family governance",
    ],
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Professionals & Physicians",
    description: "Doctors, attorneys, and other professionals with high incomes, demanding careers, and unique planning challenges who need efficient, proactive advice.",
    needs: [
      "Tax-efficient wealth accumulation",
      "Student loan strategies",
      "Disability and liability protection",
      "Practice transition planning",
      "Work-life balance optimization",
    ],
    icon: "⚕️",
  },
];

export default function WhoWeServePage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
            Who We Serve
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Our Ideal Clients
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We specialize in serving successful individuals and families who value
            personalized, fiduciary advice and seek a true partner in their financial journey.
          </p>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {clientTypes.map((client, index) => (
              <div
                key={client.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-6xl mb-6 block">{client.icon}</span>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{client.title}</h2>
                  <p className="text-lg text-foreground/70 mb-6">{client.description}</p>
                  <h3 className="font-semibold text-foreground mb-4">Common Needs:</h3>
                  <ul className="space-y-3">
                    {client.needs.map((need) => (
                      <li key={need} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground/70">{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                    <span className="text-9xl opacity-30">{client.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum Requirements */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Engagement Minimums
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              To provide the level of personalized service our clients deserve,
              we typically work with clients who meet the following criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <p className="text-accent text-5xl font-bold mb-2">$500K+</p>
              <p className="text-foreground font-semibold mb-2">Investable Assets</p>
              <p className="text-foreground/70 text-sm">
                For comprehensive wealth management and investment advisory services
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <p className="text-accent text-5xl font-bold mb-2">$250K+</p>
              <p className="text-foreground font-semibold mb-2">Financial Planning</p>
              <p className="text-foreground/70 text-sm">
                For standalone financial planning engagements
              </p>
            </div>
          </div>

          <p className="text-center text-foreground/60 mt-8 text-sm">
            Not sure if we&apos;re the right fit? Schedule a consultation and we&apos;ll discuss your situation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Is LDASD Financial Right for You?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss your situation
            and see if we&apos;re the right fit.
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
