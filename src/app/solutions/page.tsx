import type { Metadata } from 'next';
import Link from 'next/link';
import { SOLUTIONS } from '@/data/solutions';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions & Capabilities',
  description:
    'Explore ViThea solutions: Intelligent Applications, Automation Systems, Data-Powered Tools, Custom Software, AI Prototypes, and AI Technology Integration.'
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#070b14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              Capabilities & Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              What We Build
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We design and engineer practical technology systems built around your specific operational workflows. Every solution begins with a clear understanding of the friction point.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Solutions List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SOLUTIONS.map((sol, index) => (
          <div
            key={sol.id}
            id={sol.id}
            className="scroll-mt-32 rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0d1629] to-[#09101f] border border-white/10 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded">
                    0{index + 1}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Solution Category
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {sol.title}
                </h2>

                <p className="text-base text-slate-300 leading-relaxed">
                  {sol.longDescription}
                </p>

                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                    Technologies Utilized
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sol.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?type=${encodeURIComponent(sol.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-all shadow-md shadow-sky-500/20"
                  >
                    <span>Discuss {sol.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-white/5">
                {/* Core capabilities */}
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-sky-400 mb-3">
                    Core Capabilities
                  </h3>
                  <ul className="space-y-2">
                    {sol.capabilities.map((cap) => (
                      <li key={cap} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical use cases */}
                <div className="pt-4 border-t border-white/5">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                    Practical Use Cases
                  </h3>
                  <ul className="space-y-2">
                    {sol.useCases.map((uc) => (
                      <li key={uc} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-sky-950/40 via-blue-950/30 to-slate-900/60 border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Need a specialized technology solution?
            </h3>
            <p className="text-sm text-slate-300">
              We can evaluate whether AI, automation, or custom software can solve your specific bottleneck.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm whitespace-nowrap transition-all shadow-md"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
