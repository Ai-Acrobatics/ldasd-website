import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  products: [
    { name: "Trust", href: "/products/trust" },
    { name: "Will", href: "/products/will" },
    { name: "Guardianship", href: "/products/guardianship" },
    { name: "Estate Plan", href: "/products/estate-plan" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Learn", href: "/learn" },
    { name: "Contact", href: "/contact" },
    { name: "Get Started", href: "/book" },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 pt-12 sm:pt-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact - Full width on mobile */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/logo.png"
                alt="LDASD Estate Planning"
                width={160}
                height={58}
                className="h-12 sm:h-14 w-auto mx-auto lg:mx-0"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/70 max-w-xs mx-auto lg:mx-0">
              Protecting what matters most with simple, affordable estate planning.
            </p>
            
            {/* Contact Info - Styled for mobile */}
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p className="font-medium text-white/90">San Diego, California</p>
              <p>12544 High Bluff Drive, Suite 200</p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 pt-2">
                <a 
                  href="tel:+18587506206" 
                  className="inline-flex items-center gap-2 hover:text-secondary transition-colors py-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (858) 750-6206
                </a>
                <a 
                  href="mailto:sean@ldasd.com" 
                  className="inline-flex items-center gap-2 hover:text-secondary transition-colors py-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  sean@ldasd.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links - 3 columns on tablet/desktop, 2 on mobile */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
              <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {footerLinks.products.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm leading-6 text-white/70 hover:text-secondary transition-colors py-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm leading-6 text-white/70 hover:text-secondary transition-colors py-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm leading-6 text-white/70 hover:text-secondary transition-colors py-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-xs leading-5 text-white/50 text-center lg:text-left">
            LDASD Estate Planning provides legal document preparation services. We are not a law firm and do not provide legal advice.
            For complex estate planning needs, we recommend consulting with a licensed attorney in your state.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs leading-5 text-white/50">
            &copy; {new Date().getFullYear()} LDASD Estate Planning. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-white/50">
            Your legacy, simplified.
          </p>
        </div>
      </div>
    </footer>
  );
}
