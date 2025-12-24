import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Estate Plan | Get Started with LDASD",
  description: "Get started creating your trust, will, or complete estate plan in minutes. Choose your product and start protecting your family today.",
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
          <span className="inline-block text-secondary font-semibold tracking-wider text-sm uppercase mb-4">
            Get Started
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Create Your Estate Plan
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose the product that's right for you and get started in minutes. No appointments necessary.
            Attorney-backed documents starting at just $199.
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
                How It Works
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Choose Your Product",
                    description: "Select from Will ($199), Trust ($599), or Complete Estate Plan ($699) based on your needs.",
                  },
                  {
                    title: "Answer Simple Questions",
                    description: "Our guided questionnaire walks you through every detail in plain English. No legal jargon.",
                  },
                  {
                    title: "Review & Customize",
                    description: "Preview your documents and make any changes before finalizing. Everything is customizable.",
                  },
                  {
                    title: "Attorney Review",
                    description: "Licensed attorneys in your state review all documents to ensure legal compliance.",
                  },
                  {
                    title: "Download & Sign",
                    description: "Receive your completed, notarization-ready documents within 2-3 business days.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-secondary/10 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">100% Satisfaction Guaranteed</h3>
                <p className="text-foreground/70">
                  Not happy with your documents? We offer a 60-day money-back guarantee, no questions asked.
                </p>
              </div>
            </div>

            {/* Product Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">Select Your Product</h2>
              <div className="space-y-4 mb-8">
                {[
                  { name: "Will", price: "$199", description: "Perfect for naming guardians and distributing assets" },
                  { name: "Living Trust", price: "$599", description: "Avoid probate and keep your estate private", popular: true },
                  { name: "Complete Estate Plan", price: "$699", description: "Everything you need for comprehensive protection" },
                ].map((product) => (
                  <label key={product.name} className="relative flex items-start p-4 border-2 border-foreground/10 rounded-lg cursor-pointer hover:border-secondary/50 transition-colors">
                    <input type="radio" name="product" className="mt-1 accent-secondary" />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{product.name}</p>
                          <p className="text-sm text-foreground/70">{product.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary">{product.price}</p>
                          {product.popular && (
                            <span className="text-xs text-secondary font-semibold">Most Popular</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
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
                  <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                    State of Residence *
                  </label>
                  <select
                    id="state"
                    name="state"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  >
                    <option value="">Select your state...</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    <option value="NY">New York</option>
                    <option value="other">Other State</option>
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="spouse"
                    name="spouse"
                    className="mt-1 accent-secondary"
                  />
                  <label htmlFor="spouse" className="text-sm text-foreground/70">
                    I want to add my spouse/partner (+$100)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white hover:bg-accent transition-all"
                >
                  Start Your Estate Plan
                </button>

                <p className="text-sm text-foreground/50 text-center">
                  Secure checkout. 60-day money-back guarantee. Your information is encrypted and secure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
