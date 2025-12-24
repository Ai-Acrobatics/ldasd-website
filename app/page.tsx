import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "LDASD Estate Planning | Affordable Trusts & Wills for Peace of Mind",
  description: "Protect what matters most with simple, affordable estate planning. Create your living trust, will, or complete estate plan online. Attorney-backed documents starting at $199.",
  keywords: "estate planning, living trust, will, guardianship, estate plan, online trust, affordable estate planning, San Diego",
};

const stats = [
  { label: "Families Protected", value: "100K", suffix: "+" },
  { label: "States Covered", value: "50", suffix: "" },
  { label: "Customer Satisfaction", value: "4.9", suffix: "/5" },
  { label: "Starting Price", value: "$199", suffix: "" },
];

const products = [
  {
    name: "Trust",
    description: "Avoid probate and protect your assets with a comprehensive living trust. Keep your estate private and ensure your wishes are honored.",
    href: "/products/trust",
    price: "Starting at $599",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Will",
    description: "Name guardians for your children and distribute your assets with a legally binding last will and testament.",
    href: "/products/will",
    price: "Starting at $199",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    name: "Guardianship",
    description: "Designate who will care for your minor children if something happens to you. The most important decision you'll make.",
    href: "/products/guardianship",
    price: "Included with Will",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    name: "Complete Estate Plan",
    description: "Everything you need: Trust, Will, Power of Attorney, and Healthcare Directive. Complete peace of mind in one package.",
    href: "/products/estate-plan",
    price: "Starting at $699",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: "Creating our living trust was so much easier than I expected. LDASD made it simple, affordable, and gave us complete peace of mind about our family's future.",
    author: "Sarah & Michael T.",
    role: "Parents of Three",
    rating: 5,
  },
  {
    content: "After putting it off for years, we finally got our will done through LDASD. Knowing our kids are protected and our guardianship wishes are documented is priceless.",
    author: "Jennifer K.",
    role: "Single Mom",
    rating: 5,
  },
  {
    content: "The complete estate plan was exactly what we needed. Living trust, healthcare directive, power of attorney - all done in one afternoon. Worth every penny.",
    author: "Robert & Linda M.",
    role: "Retirees",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sand via-ivory to-tan">
        {/* Warm gradient orbs - smaller on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[200px] sm:w-[400px] lg:w-[600px] h-[200px] sm:h-[400px] lg:h-[600px] rounded-full bg-secondary/15 blur-[60px] sm:blur-[100px] lg:blur-[120px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-[150px] sm:w-[300px] lg:w-[500px] h-[150px] sm:h-[300px] lg:h-[500px] rounded-full bg-primary/10 blur-[40px] sm:blur-[80px] lg:blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Mobile Layout: Stacked, compact */}
          <div className="py-8 sm:py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
              
              {/* Hero Image/Carousel - Compact on mobile, shown first */}
              <div className="relative h-[220px] sm:h-[320px] lg:h-[520px] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:order-2">
                <HeroCarousel />
              </div>

              {/* Text Content */}
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left lg:order-1">
                {/* Badge - smaller on mobile */}
                <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/80 backdrop-blur-md px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-sm font-medium text-primary ring-1 ring-primary/20 shadow-glass">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-secondary"></span>
                    </span>
                    Attorney-Backed Estate Planning
                  </span>
                </div>

                {/* Headline - more compact on mobile */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                  <span className="block">Protect</span>
                  <span className="block">What Matters</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Most.
                  </span>
                </h1>

                {/* Description - shorter on mobile */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-xl leading-6 sm:leading-7 lg:leading-8 text-foreground/70 max-w-xl mx-auto lg:mx-0">
                  Simple, affordable estate planning. Create your trust, will, or complete estate plan online in minutes. <span className="hidden sm:inline">Starting at just $199.</span>
                </p>

                {/* CTA Buttons - stacked on small mobile */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link
                    href="/book"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-premium hover:shadow-premium-hover transition-all duration-300 active:scale-[0.98]"
                  >
                    <span>Create Your Estate Plan</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium text-sm sm:text-base py-2"
                  >
                    View Products & Pricing
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Link>
                </div>

                {/* Mobile-only: Price highlight */}
                <p className="mt-4 text-xs text-foreground/60 sm:hidden">
                  Starting at just $199 • Attorney-backed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade - smaller on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-20 lg:h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Indicators */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-x-8 lg:gap-x-12 gap-y-4 sm:gap-y-6 text-foreground/50">
            <span className="col-span-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-center">Trusted By</span>
            <span className="text-sm sm:text-lg font-semibold text-center">BBB A+ Rated</span>
            <span className="text-sm sm:text-lg font-semibold text-center">4.9★ Rating</span>
            <span className="text-sm sm:text-lg font-semibold text-center">100K+ Families</span>
            <span className="text-sm sm:text-lg font-semibold text-center">50 States</span>
          </div>
        </div>
      </section>

      {/* Why Estate Planning Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-tan overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-block text-secondary font-semibold tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4">
                Why Estate Planning Matters
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Have You Thought About What Happens Next?
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-foreground/70">
                Most people think estate planning is only for the wealthy. The truth? If you have loved ones,
                assets to protect, or minor children, you need an estate plan.
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-foreground/70">
                Without proper planning, the state decides what happens to your assets and who cares for your
                children. Your family faces lengthy probate, costly legal fees, and unnecessary stress during
                an already difficult time.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {["Avoid probate and keep your estate private", "Protect your children with guardianship designations", "Minimize estate taxes and preserve wealth", "Ensure your healthcare wishes are honored"].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 text-left">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors py-2"
                >
                  Learn More About Estate Planning
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/families/multi-gen.jpg"
                  alt="Multi-generational family enjoying time together"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <p className="text-lg sm:text-xl font-bold text-foreground">Your Family&apos;s Future</p>
                    <p className="text-sm sm:text-base text-foreground/70">Protected. Secured. Simplified.</p>
                  </div>
                </div>
              </div>

              {/* Floating accent elements - hidden on small mobile */}
              <div className="hidden sm:flex absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-secondary rounded-xl sm:rounded-2xl shadow-lg items-center justify-center transform rotate-12">
                <svg className="w-8 sm:w-12 h-8 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with 3D Cards */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-sky">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
            <span className="inline-block text-secondary font-semibold tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4">
              Simple, Affordable Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Choose What&apos;s Right for You
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-foreground/70 px-2">
              From basic wills to comprehensive estate plans, we have everything you need to protect your legacy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-2 ring-1 ring-black/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Mobile: Centered layout, Desktop: Flex layout */}
                  <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-3">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:scale-110 transition-all duration-300">
                      {product.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 sm:py-1.5 rounded-full">{product.price}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 text-center sm:text-left group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4 sm:mb-6 text-center sm:text-left">
                    {product.description}
                  </p>

                  <div className="inline-flex items-center justify-center sm:justify-start w-full sm:w-auto gap-2 text-secondary font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary font-semibold text-base sm:text-lg hover:text-secondary transition-colors py-2"
            >
              View Full Pricing & Comparison
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with Glass Morphism */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-sage overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-primary/10 blur-[60px] sm:blur-[100px]" />
          <div className="absolute bottom-1/4 -left-20 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full bg-secondary/10 blur-[50px] sm:blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
            <span className="inline-block text-secondary font-semibold tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4">
              Real Stories, Real Peace of Mind
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What Our Families Say
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-foreground/70 px-2">
              Join thousands of families who&apos;ve protected what matters most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white/70 sm:bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-glass ring-1 ring-white/50 hover:bg-white/80 hover:shadow-premium transition-all duration-300"
              >
                {/* Stars - Centered on mobile */}
                <div className="flex gap-1 mb-4 sm:mb-6 justify-center sm:justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-center sm:text-left">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ring-2 ring-white/50">
                    <span className="text-primary font-bold text-lg">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Lighter Gradient */}
      <section className="relative py-12 sm:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary-light rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-20 overflow-hidden shadow-premium">
            {/* Warm decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full bg-secondary/30 blur-[50px] sm:blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-[125px] sm:w-[250px] h-[125px] sm:h-[250px] rounded-full bg-white/20 blur-[40px] sm:blur-[60px]" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6">
                Ready to Protect Your Family?
              </h2>
              <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-10 px-2">
                Get started in minutes. Create your trust, will, or complete estate plan online today.
                No appointments necessary.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/book"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-premium hover:shadow-premium-hover hover:bg-secondary-light transition-all duration-300 active:scale-[0.98]"
                >
                  Start Your Estate Plan Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white ring-1 ring-white/30 hover:bg-white/30 transition-all duration-300 active:scale-[0.98]"
                >
                  View Pricing
                </Link>
              </div>

              <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/70">
                Starting at $199. 100% satisfaction guaranteed. Update anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
