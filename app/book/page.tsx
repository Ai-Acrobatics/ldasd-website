import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | Sean Gelt - LDASD Financial Services",
  description: "Schedule your complimentary 30-minute strategy session with Sean Gelt at LDASD Financial Services in San Diego. Discuss your goals and discover personalized solutions.",
};

export default function BookPage() {
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
            Free Consultation
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Book Your Strategy Session
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Take the first step toward financial clarity. Schedule a complimentary 30-minute
            consultation to discuss your goals and explore how we can help.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                What to Expect
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Personalized Assessment",
                    description: "We'll review your current financial situation and understand your unique goals and challenges.",
                  },
                  {
                    title: "Expert Insights",
                    description: "Receive preliminary recommendations tailored to your circumstances from a certified financial planner.",
                  },
                  {
                    title: "Clear Next Steps",
                    description: "Leave with actionable insights and a clear understanding of how we can help you move forward.",
                  },
                  {
                    title: "No Obligation",
                    description: "This consultation is completely complimentary with no pressure or obligation to proceed.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sean Gelt</p>
                    <p className="text-sm text-foreground/60">Founder, LDASD Financial Services</p>
                  </div>
                </div>
                <p className="text-foreground/70 italic">
                  &ldquo;I look forward to learning about your financial journey and exploring how we can
                  help you achieve peace of mind.&rdquo;
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">Schedule Your Consultation</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                    Primary Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  >
                    <option value="">Select your primary interest...</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="investment">Investment Management</option>
                    <option value="wealth">Wealth Preservation</option>
                    <option value="tax">Tax Strategies</option>
                    <option value="estate">Estate Planning</option>
                    <option value="comprehensive">Comprehensive Financial Planning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  >
                    <option value="">Select preferred time...</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 3PM)</option>
                    <option value="late-afternoon">Late Afternoon (3PM - 5PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your financial goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder="What would you like to accomplish? Any specific concerns or questions?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-8 py-4 text-lg font-semibold text-primary hover:bg-accent-light transition-all"
                >
                  Request Consultation
                </button>

                <p className="text-sm text-foreground/50 text-center">
                  By submitting this form, you agree to be contacted regarding your inquiry.
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
