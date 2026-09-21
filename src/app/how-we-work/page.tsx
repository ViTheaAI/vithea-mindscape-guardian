import type { Metadata } from 'next';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/data/process';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Work — Methodology',
  description:
    'Understand First. Build With Purpose. Explore the ViThea 5-step engineering and technology development process.'
};

export default function HowWeWorkPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#080f20] to-[#070b14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-3">
              Our Methodology
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Understand First. Build With Purpose.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We never force a pre-packaged technology into a problem that calls for a different approach. Every engagement follows a disciplined, problem-first engineering lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-[#0d1527] to-[#080e1a] border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-sky-400">
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phase {step.number}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h2>
                <p className="text-sm text-sky-400 font-medium">
                  {step.headline}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="lg:col-span-3 lg:border-l lg:border-white/5 lg:pl-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {step.deliverables.map((item) => (
                    <li key={item} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Engineering Principles */}
      <section className="py-16 bg-[#080e1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-2">
              Engineering Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Principles We Stand By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Honest Technical Grounding</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We clearly separate what technology currently does from what is speculative. No buzzwords, no inflated accuracy claims, and no unnecessary complexity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Appropriate Technology</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Not every workflow requires an LLM. We select the simplest, fastest, and most cost-effective tool—whether that is deterministic code, statistical models, or modern generative AI.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Production Durability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We build software that is documented, testable, and maintainable, ensuring solutions continue functioning smoothly as your organization scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Ready to review your operational workflow?
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Let&apos;s walk through your process and identify where practical technology creates value.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-md"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
