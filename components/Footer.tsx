import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Retirement Planning", href: "/services/retirement-planning" },
    { name: "Investment Management", href: "/services/investment-management" },
    { name: "Wealth Preservation", href: "/services/wealth-preservation" },
    { name: "Tax Strategies", href: "/services/tax-strategies" },
    { name: "Estate Planning", href: "/services/estate-planning" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
    { name: "Book a Call", href: "/book" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              LDASD<span className="text-accent">.</span>
            </Link>
            <p className="text-sm leading-6 text-white/70">
              Clarity. Confidence. Financial Peace of Mind.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>12544 High Bluff Drive</p>
              <p>Suite 200</p>
              <p>San Diego, California 92130</p>
              <p className="pt-2">
                <a href="tel:+18587506206" className="hover:text-accent transition-colors">
                  (858) 750-6206
                </a>
              </p>
              <p>
                <a href="mailto:sean@ldasd.com" className="hover:text-accent transition-colors">
                  sean@ldasd.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-white/70 hover:text-accent transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-white/70 hover:text-accent transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-white/70 hover:text-accent transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-white/50">
            Investment advisory services offered through LDASD Financial Services.
            Past performance is not indicative of future results. Investing involves risk, including the possible
            loss of principal. No investment strategy can guarantee a profit or protect against loss in periods
            of declining values.
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs leading-5 text-white/50">
            &copy; {new Date().getFullYear()} LDASD Financial Services. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-white/50 mt-4 md:mt-0">
            Designed with care for your financial future.
          </p>
        </div>
      </div>
    </footer>
  );
}
