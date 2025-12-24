import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  products: [
    { name: "Trust", href: "/products/trust" },
    { name: "Will", href: "/products/will" },
    { name: "Guardianship", href: "/products/guardianship" },
    { name: "Estate Plan", href: "/products/estate-plan" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Learn", href: "/learn" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Mobile CTA - Only shown on small screens */}
        <div className="sm:hidden py-6 border-b border-white/10">
          <Link
            href="/book"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-secondary px-6 py-3 text-base font-semibold text-white shadow-lg active:scale-[0.98] transition-transform"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            
            {/* Brand - Hidden on mobile, shown from sm up */}
            <div className="hidden sm:block sm:col-span-4 lg:col-span-1 lg:pr-8">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/logo.png"
                  alt="LDASD Estate Planning"
                  width={140}
                  height={50}
                  className="h-10 lg:h-12 w-auto"
                />
              </Link>
              <p className="mt-3 text-xs lg:text-sm leading-5 text-white/60 max-w-xs">
                Simple, affordable estate planning for every family.
              </p>
              {/* Contact - Desktop only */}
              <div className="hidden lg:block mt-4 space-y-1.5 text-xs text-white/60">
                <p>San Diego, California</p>
                <a href="tel:+18587506206" className="block hover:text-secondary transition-colors">
                  (858) 750-6206
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Products</h3>
              <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {footerLinks.products.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs sm:text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
              <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs sm:text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal - Inline on mobile */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
              <ul role="list" className="mt-3 sm:mt-4 flex sm:block gap-4 sm:space-y-2 sm:space-x-0">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs sm:text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Tablet only (hidden on mobile and desktop) */}
            <div className="hidden sm:block lg:hidden">
              <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
              <div className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-white/60">
                <p>San Diego, CA</p>
                <a href="tel:+18587506206" className="block hover:text-secondary transition-colors">
                  (858) 750-6206
                </a>
                <a href="mailto:sean@ldasd.com" className="block hover:text-secondary transition-colors">
                  sean@ldasd.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 sm:py-6">
          {/* Mobile Contact Row */}
          <div className="sm:hidden flex justify-center gap-6 mb-4 text-xs text-white/60">
            <a href="tel:+18587506206" className="hover:text-secondary transition-colors">
              (858) 750-6206
            </a>
            <a href="mailto:sean@ldasd.com" className="hover:text-secondary transition-colors">
              sean@ldasd.com
            </a>
          </div>
          
          {/* Disclaimer - Condensed on mobile */}
          <p className="text-[10px] sm:text-xs text-white/40 text-center max-w-3xl mx-auto leading-relaxed">
            <span className="hidden sm:inline">LDASD Estate Planning provides legal document preparation services. We are not a law firm and do not provide legal advice. </span>
            <span className="sm:hidden">Not a law firm. </span>
            Consult an attorney for complex needs.
          </p>
          
          {/* Copyright */}
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1 text-[10px] sm:text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} LDASD Estate Planning</p>
            <p className="hidden sm:block">Your legacy, simplified.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
