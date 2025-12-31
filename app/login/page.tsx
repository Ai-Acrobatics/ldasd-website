"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login - replace with actual authentication
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality will be connected to your authentication system.");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary flex items-center justify-center px-4 py-12">
      {/* Prism/Glass background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-rose-500/5 via-amber-500/5 to-violet-500/5 blur-[80px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Glass card with prism effect */}
        <div className="relative">
          {/* Prism border effect */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-rose-400/30 via-amber-400/20 via-emerald-400/20 via-cyan-400/20 to-violet-400/30 opacity-60 blur-sm" />
          
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            {/* Logo/Brand */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-white">LDASD Portal</h1>
                <p className="text-white/70 text-sm mt-1">Access your estate planning documents</p>
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white/80 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/30 bg-white/10 text-secondary focus:ring-secondary/30" />
                  Remember me
                </label>
                <Link href="/forgot-password" className="text-secondary hover:text-secondary-light transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-secondary px-8 py-4 text-base font-semibold text-white hover:bg-secondary-light hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-white/70 text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/book" className="text-secondary hover:text-secondary-light font-medium transition-colors">
                  Get started today
                </Link>
              </p>
            </div>

            {/* Help section */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <div>
                  <p className="text-white/80 text-sm font-medium">Need help?</p>
                  <p className="text-white/60 text-xs mt-1">
                    Contact us at{" "}
                    <a href="mailto:support@ldasd.com" className="text-secondary hover:underline">
                      support@ldasd.com
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+18587506206" className="text-secondary hover:underline">
                      (858) 750-6206
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
