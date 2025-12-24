"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/images/logo/logo.png"
                alt="LDASD Estate Planning"
                width={140}
                height={50}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
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
                    <div className="bg-white rounded-xl shadow-premium ring-1 ring-black/5 overflow-hidden">
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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/book"
              className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white hover:bg-secondary-light hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu with backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Dark backdrop overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Slide-in menu panel */}
        <div 
          className={`absolute inset-y-0 right-0 w-full max-w-[85vw] sm:max-w-sm bg-primary shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logo/logo.png"
                  alt="LDASD Estate Planning"
                  width={120}
                  height={44}
                  className="h-9 sm:h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-white hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-4 sm:px-6 py-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-white hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="h-4 w-4 text-white/50" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-white/10 pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white active:bg-white/15 transition-colors touch-manipulation"
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

            {/* CTA Button */}
            <div className="px-4 sm:px-6 py-6 border-t border-white/10">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary-light active:scale-[0.98] transition-all shadow-lg touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <p className="mt-4 text-center text-xs text-white/50">
                Protecting families since 2010
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
