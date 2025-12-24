import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LDASD Financial Services | Sean Gelt - San Diego Wealth Management & Retirement Planning",
  description: "Expert retirement planning, investment management, and wealth preservation services in San Diego. Sean Gelt provides personalized fiduciary financial strategies. Schedule your free consultation today.",
  keywords: "San Diego wealth management, retirement planning, investment advisor, financial planning, estate planning, tax strategies, fiduciary advisor, LDASD, Sean Gelt",
};

const stats = [
  { label: "Years of Expertise", value: "25+", suffix: "" },
  { label: "Assets Under Management", value: "$500", suffix: "M+" },
  { label: "Client Satisfaction Rate", value: "98", suffix: "%" },
  { label: "Families Served", value: "1,200", suffix: "+" },
];

const services = [
  {
    name: "Retirement Planning",
    description: "Build a secure retirement with personalized income strategies, Social Security optimization, and comprehensive retirement readiness assessments tailored to your unique goals.",
    href: "/services/retirement-planning",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Investment Management",
    description: "Grow your wealth with disciplined portfolio management, diversification strategies, and ongoing rebalancing designed to maximize returns while managing risk.",
    href: "/services/investment-management",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    name: "Wealth Preservation",
    description: "Protect your legacy with sophisticated risk management, asset protection strategies, and wealth transfer planning that safeguards what you&apos;ve worked to build.",
    href: "/services/wealth-preservation",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Tax Optimization Strategies",
    description: "Minimize your tax burden with proactive tax-loss harvesting, Roth conversion strategies, and tax-efficient investment placement that keeps more money in your pocket.",
    href: "/services/tax-strategies",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    name: "Estate Planning",
    description: "Ensure your legacy endures with comprehensive estate plans, trust strategies, and succession planning that protects your family and honors your wishes.",
    href: "/services/estate-planning",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: "Sean and his team completely transformed our approach to retirement. Their personalized strategy gave us the confidence to retire three years earlier than we thought possible.",
    author: "Robert & Linda M.",
    role: "Retired Healthcare Executives",
    rating: 5,
  },
  {
    content: "The tax optimization strategies LDASD implemented saved us over $45,000 in the first year alone. More importantly, we finally have a clear roadmap for our financial future.",
    author: "Jennifer K.",
    role: "Technology Business Owner",
    rating: 5,
  },
  {
    content: "After working with multiple advisors over the years, LDASD stands apart. Their fiduciary commitment and genuine care for our success is evident in everything they do.",
    author: "Michael T.",
    role: "Chief Medical Officer",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section with 3D Effect */}
      <section className="relative isolate min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        {/* Animated gradient orbs - 3D effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-[150px]" />
        </div>

        {/* 3D Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 160, 82, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(196, 160, 82, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            transform: "perspective(1000px) rotateX(60deg)",
            transformOrigin: "top",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent ring-1 ring-accent/20 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Trusted Fiduciary Financial Advisors
                </span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl leading-[1.1]">
                <span className="block">Clarity.</span>
                <span className="block">Confidence.</span>
                <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  Financial Peace of Mind.
                </span>
              </h1>

              <p className="mt-8 text-xl leading-8 text-white/80 max-w-xl">
                Personalized wealth management strategies that protect your legacy,
                optimize your taxes, and grow your retirement savings with confidence.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/book"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-primary shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:bg-accent-light transition-all duration-300 transform hover:scale-105"
                >
                  <span>Schedule Your Free Strategy Call</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-accent transition-colors font-medium"
                >
                  Explore Our Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 3D Stats Card */}
            <div className="relative perspective-1000">
              <div
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 ring-1 ring-white/20 shadow-2xl transform hover:rotate-y-3 transition-transform duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl" />
                <div className="relative grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <p className="text-4xl sm:text-5xl font-bold text-accent">
                        {stat.value}<span className="text-2xl">{stat.suffix}</span>
                      </p>
                      <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-primary text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  CFP® Certified
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Indicators */}
      <section className="relative py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-foreground/40">
            <span className="text-sm font-medium uppercase tracking-wider">Trusted By</span>
            <span className="text-lg font-semibold">Forbes Featured</span>
            <span className="text-lg font-semibold">5-Star Google Reviews</span>
            <span className="text-lg font-semibold">BBB A+ Rated</span>
            <span className="text-lg font-semibold">NAPFA Member</span>
          </div>
        </div>
      </section>

      {/* About Section with 3D Card Effect */}
      <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
                Your Trusted Financial Partner
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Meet Sean Gelt, CFP®
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground/70">
                With over 25 years of experience guiding high-net-worth individuals and families,
                Sean brings a rare combination of technical expertise and genuine care to every
                client relationship. As a Certified Financial Planner™ and fiduciary advisor,
                his only obligation is to your success.
              </p>
              <p className="mt-4 text-lg leading-8 text-foreground/70">
                Sean specializes in comprehensive retirement income planning, tax optimization
                strategies, and multi-generational wealth transfer for clients approaching or
                enjoying retirement. His holistic approach ensures every aspect of your financial
                life works together seamlessly.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {["Certified Financial Planner™", "Fiduciary Advisor", "25+ Years Experience"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  Learn More About Our Approach
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              {/* 3D Image container */}
              <div
                className="relative group"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-3"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <div className="text-center text-white/50">
                      <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <p className="text-lg font-medium">Sean Gelt, CFP®</p>
                    </div>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform">
                  <span className="text-primary font-bold text-xl">CFP®</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
              Comprehensive Financial Solutions
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Wealth Management Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/70">
              From retirement planning to estate preservation, we offer a complete suite
              of fiduciary financial services designed to help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Link
                key={service.name}
                href={service.href}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ring-1 ring-black/5"
                style={{ perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ring-1 ring-black/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with 3D Carousel Effect */}
      <section className="relative py-24 sm:py-32 bg-primary overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
          <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-wider text-sm uppercase mb-4">
              Client Success Stories
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Discover how we&apos;ve helped families and business owners achieve financial peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/20 hover:bg-white/15 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Elements */}
      <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-primary rounded-3xl p-12 md:p-20 overflow-hidden shadow-2xl">
            {/* 3D decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-white/10 blur-[60px]" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Ready to Take Control of Your Financial Future?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Schedule a complimentary 30-minute strategy session to discuss your goals
                and discover how we can help you achieve financial peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/book"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-primary shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:bg-accent-light transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Free Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all"
                >
                  Contact Us
                </Link>
              </div>

              <p className="mt-8 text-sm text-white/50">
                No obligation. No pressure. Just a conversation about your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
