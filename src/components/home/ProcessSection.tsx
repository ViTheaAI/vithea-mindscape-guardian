import React from 'react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/data/process';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

export function ProcessSection() {
  return (
    <section id="how-we-work" className="py-24 bg-[#070b14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Understand First. Build With Purpose.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              We believe the most reliable technology comes from deeply understanding operational friction before writing any code.
            </p>
          </div>
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>Read full methodology</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5-step interactive process display */}
        <div className="space-y-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0d1527] to-[#09101f] border border-white/5 hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-sky-400/60 group-hover:text-sky-400 transition-colors">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-sky-400 font-medium">
                      {step.headline}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-3 pt-2 lg:pt-0 lg:border-l lg:border-white/5 lg:pl-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Outcomes
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.slice(0, 2).map((d) => (
                      <li key={d} className="text-xs text-slate-400 flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
