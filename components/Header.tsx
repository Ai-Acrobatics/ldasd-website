"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Trust", href: "/products/trust" },
      { name: "Will", href: "/products/will" },
      { name: "Guardianship", href: "/products/guardianship" },
      { name: "Estate Plan", href: "/products/estate-plan" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Who We Serve", href: "/who-we-serve" },
  { name: "Learn", href: "/learn" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// White logo SVG component for dark backgrounds
function LogoWhite({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Interlocking rings symbol */}
      <g transform="translate(0, 5)">
        {/* Left ring */}
        <ellipse cx="25" cy="25" rx="18" ry="12" stroke="white" strokeWidth="3" fill="none" transform="rotate(-20 25 25)" />
        {/* Center ring (sage accent) */}
        <ellipse cx="40" cy="20" rx="15" ry="10" stroke="#84A98C" strokeWidth="2.5" fill="none" opacity="0.7" />
        {/* Right ring */}
        <ellipse cx="55" cy="25" rx="18" ry="12" stroke="white" strokeWidth="3" fill="none" transform="rotate(20 55 25)" />
        {/* Infinity-like crossing */}
        <path d="M20 30 Q40 15 60 30" stroke="white" strokeWidth="3" fill="none" />
      </g>
      {/* Text */}
      <text x="80" y="30" fontFamily="DM Sans, sans-serif" fontSize="24" fontWeight="600" fill="white" letterSpacing="2">
        LDASD
      </text>
      <text x="80" y="48" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="500" fill="white" opacity="0.9" letterSpacing="1.5">
        ESTATE PLANNING SERVICES
      </text>
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <LogoWhite className="h-12 w-auto" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white hover:text-secondary transition-all duration-300 flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 top-full pt-2 w-56">
                    <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-premium ring-1 ring-black/5 overflow-hidden">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-secondary/10 hover:text-primary transition-all duration-300"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
            {/* Login Portal Button */}
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Log In
            </Link>
            <Link
              href="/book"
              className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white hover:bg-secondary-light hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm shadow-premium">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <LogoWhite className="h-10 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white hover:bg-white/10 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10 transition-all duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium leading-6 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  {/* Mobile Login Button */}
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-center text-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Log In to Portal
                  </Link>
                  <Link
                    href="/book"
                    className="block rounded-full bg-secondary px-6 py-3 text-center text-base font-semibold text-white hover:bg-secondary-light transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
