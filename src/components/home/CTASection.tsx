import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#070b14] to-[#04070d] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#0d162a] via-[#0b1222] to-[#0d162a] border border-sky-500/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Project Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a Problem Worth Solving?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us what you&apos;re trying to build, automate, improve, or explore. We&apos;ll help determine whether AI or software can provide a practical solution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-base transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-medium text-base transition-all"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
