import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/navigation';

export function CTASection() {
  return (
    <section className="py-24 bg-[#03060e] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 bento-card border border-sky-500/20 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.email}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Have a Problem Worth Solving?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re trying to build, automate, improve, or explore. We&apos;ll evaluate whether AI or custom software can deliver practical value.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-sky-500/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs font-medium border border-white/10"
            >
              <span>Email: {COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
