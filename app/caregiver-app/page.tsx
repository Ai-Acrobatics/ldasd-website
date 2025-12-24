'use client';

import { useState, useEffect } from 'react';

interface FormData {
  email: string;
}

export default function CaregiverAppPage() {
  const [formData, setFormData] = useState<FormData>({ email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 65 ? 10 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.includes('@')) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ email: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary-light relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
            <span className="text-secondary font-semibold text-sm tracking-wide">LAUNCHING SOON</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Never Wonder Where
            <br />
            <span className="text-secondary">Your Caregiver Is</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto">
            Real-time tracking and notifications so families stay informed and caregivers stay connected.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* iPhone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-accent blur-3xl opacity-30" />

              {/* iPhone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20" />

                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-12 bg-primary/5 flex items-center justify-between px-6 text-xs font-semibold text-gray-700">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-5 py-4 bg-gradient-to-r from-primary to-primary-light">
                    <h2 className="text-white text-lg font-bold mb-1">Today&apos;s Visit</h2>
                    <p className="text-white/70 text-xs">2:00 PM - John Smith</p>
                  </div>

                  {/* Caregiver Card */}
                  <div className="mx-5 -mt-2 mb-4">
                    <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-lg">
                          M
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm">Maria Rodriguez</h3>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-green-600 font-semibold text-xs">On the way</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-3 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600">Estimated arrival</span>
                          <span className="text-sm font-bold text-primary">10 min</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-secondary to-accent h-full rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Map */}
                      <div className="relative h-32 bg-gradient-to-br from-sky to-primary-light/20 rounded-xl overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 120">
                          <path d="M 0 60 Q 50 40, 100 60 T 200 60" stroke="#3D5A50" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        </svg>
                        <div className="absolute top-4 right-6">
                          <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-8">
                          <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-5 space-y-2">
                    <button className="w-full bg-primary text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Caregiver
                    </button>
                    <button className="w-full bg-white text-primary font-semibold py-3 rounded-xl text-sm border border-gray-200 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Send Message
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
              </div>
            </div>
          </div>

          {/* Features & Signup */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-white mb-6">Peace of Mind, In Real-Time</h2>

              {[
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", title: "Real-Time GPS Tracking", desc: "See exactly where your caregiver is and when they'll arrive." },
                { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", title: "Family Notifications", desc: "Automatic alerts when caregivers arrive, leave, or encounter delays." },
                { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Doctor Integration", desc: "Share visit reports directly with healthcare providers." },
                { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Smart Scheduling", desc: "Manage appointments and set recurring visits in one place." },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-white/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signup */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
              <p className="text-white/70 mb-6">Be the first to know when we launch.</p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-secondary hover:bg-accent text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span>Joining...</span>
                    ) : (
                      <>
                        <span>Join the Waitlist</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h4>
                  <p className="text-white/70">We&apos;ll notify you when we launch.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-white/60 text-sm mb-6 font-medium tracking-wide">TRUSTED BY FAMILIES & HEALTHCARE PROVIDERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
            <span className="text-white/80 font-semibold text-lg">HIPAA Compliant</span>
            <div className="w-px h-6 bg-white/20" />
            <span className="text-white/80 font-semibold text-lg">SOC 2 Certified</span>
            <div className="w-px h-6 bg-white/20" />
            <span className="text-white/80 font-semibold text-lg">256-bit Encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}
