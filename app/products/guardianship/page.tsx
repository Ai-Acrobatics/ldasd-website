import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardianship Designation | Protect Your Children's Future",
  description: "Name legal guardians for your minor children. The most important decision in estate planning. Included with all will and trust packages.",
};

export default function GuardianshipPage() {
  return (
    <div className="bg-background">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Guardianship Designation</h1>
            <p className="mt-6 text-xl text-white/80">
              Name who will care for your minor children if something happens to you. The most important decision you'll make as a parent.
            </p>
            <p className="mt-4 text-lg text-secondary font-semibold">Included with all Will and Trust packages</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/will" className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all">
                Create Your Will (Includes Guardianship)
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Why Guardianship Matters</h2>
            <p className="mt-4 text-lg text-foreground/70">Don't leave this critical decision to chance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { title: "You Decide, Not the Court", description: "Without a guardianship designation, a judge decides who raises your children. This could be a relative you wouldn't choose, or even foster care." },
              { title: "Name Backup Guardians", description: "Life is unpredictable. We help you name primary and alternate guardians to ensure your children are always cared for by people you trust." },
              { title: "Avoid Family Conflicts", description: "Clear guardianship instructions prevent family disputes during an already difficult time. Everyone knows your wishes." },
              { title: "Financial & Personal Care", description: "Designate who manages your children's inheritance and who provides day-to-day care. They can be the same person or different." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">What to Consider</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-2">Age & Health</h3>
              <p className="text-foreground/70">Choose guardians young enough to raise your children to adulthood and in good health.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Values & Lifestyle</h3>
              <p className="text-foreground/70">Select guardians who share your values, parenting style, and can provide a stable home.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Financial Stability</h3>
              <p className="text-foreground/70">While you can leave assets to support your children, guardians should be financially responsible.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">Consider whether you want your children to stay in the same area or if relocation is acceptable.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Willingness to Serve</h3>
              <p className="text-foreground/70">Always discuss your decision with potential guardians before naming them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Protect Your Children Today</h2>
          <p className="text-xl text-white/80 mb-10">Guardianship is included with all our will and trust packages.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/will" className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all">
              Create Will ($199)
            </Link>
            <Link href="/products/trust" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all">
              Create Trust ($599)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
