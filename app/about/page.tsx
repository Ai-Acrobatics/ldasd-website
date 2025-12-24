import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sean Gelt | LDASD Financial Services",
  description: "Meet Sean Gelt, founder of LDASD Financial Services in San Diego. Fiduciary wealth management and financial planning with decades of experience.",
};

const values = [
  {
    title: "Fiduciary Commitment",
    description: "We are legally and ethically bound to act in your best interest, always putting your needs ahead of our own.",
  },
  {
    title: "Personalized Approach",
    description: "Every client receives a customized financial plan tailored to their unique situation, goals, and values.",
  },
  {
    title: "Transparent Communication",
    description: "Clear, honest communication about fees, strategies, and expectations—no hidden agendas or conflicts of interest.",
  },
  {
    title: "Long-term Partnership",
    description: "We build lasting relationships, walking alongside you through every stage of your financial journey.",
  },
];

const timeline = [
  { year: "1999", event: "Began career in financial services" },
  { year: "2005", event: "Earned Certified Financial Planner™ designation" },
  { year: "2010", event: "Founded LDASD Financial Services" },
  { year: "2015", event: "Reached $250M in assets under management" },
  { year: "2020", event: "Expanded to serve 1,000+ families" },
  { year: "2024", event: "Surpassed $500M in assets under management" },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Your Trusted Financial Partner
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            For over 25 years, we&apos;ve helped families and business owners achieve financial
            peace of mind through personalized, fiduciary advice.
          </p>
        </div>
      </section>

      {/* Meet Sean */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
                Meet Your Advisor
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                Sean Gelt
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                As founder of LDASD Financial Services, Sean brings decades of experience helping
                high-net-worth individuals and families navigate complex financial decisions with
                confidence and clarity.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Based in San Diego, Sean holds himself to the highest ethical standards as a fiduciary advisor.
                His comprehensive approach addresses every aspect of your financial life—from retirement income
                planning and investment management to tax optimization and estate planning.
              </p>
              <p className="text-lg text-foreground/70 mb-6">
                Sean believes that true financial planning is about more than just numbers. It&apos;s about
                understanding your values, your goals, and what matters most to you—then building a
                strategy that brings those aspirations to life.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {["Wealth Management", "Retirement Planning", "San Diego Based", "Fiduciary"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden">
                <div className="text-center text-white/50">
                  <svg className="w-40 h-40 mx-auto opacity-30" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-xl font-medium mt-4">Sean Gelt</p>
                  <p className="text-sm opacity-60">Founder, LDASD Financial</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-primary font-bold text-2xl text-center leading-tight">LDASD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Guiding Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              25+ Years of Excellence
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-accent font-bold text-xl">{item.year}</span>
                    <p className="text-foreground/70 mt-1">{item.event}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We&apos;d love to learn about your financial goals and explore how we can help
            you achieve them.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-primary hover:bg-accent-light transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
