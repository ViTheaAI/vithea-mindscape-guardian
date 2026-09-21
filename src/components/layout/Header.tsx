'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { MAIN_NAV } from '@/data/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070b14]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Logo showTagline={true} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {MAIN_NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-400 bg-white/[0.04]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/solutions"
            className="text-xs font-medium text-slate-400 hover:text-slate-200 px-3 py-2 transition-colors"
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-semibold transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/contact"
            className="px-3 py-1.5 rounded-md bg-sky-500 text-slate-950 text-xs font-semibold"
          >
            Start
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a101f] px-4 pt-3 pb-6 space-y-2">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-sky-500 text-slate-950 font-semibold text-sm"
            >
              Start a Project
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-slate-400 hover:text-white text-xs font-medium"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
