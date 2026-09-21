import React from 'react';
import Link from 'next/link';
import { TECHNICAL_CAPABILITIES } from '@/data/capabilities';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#060a14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              Core Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Technical Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We focus on solving operational friction through purpose-built software architectures, intelligent parsing, and reliable automation.
            </p>
          </div>

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors whitespace-nowrap"
          >
            <span>Explore all technical architectures</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="group rounded-3xl p-7 bento-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20">
                    {cap.tag}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {cap.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-sky-200 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {cap.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6">
                  {cap.architectureHighlights.slice(0, 3).map((item) => (
                    <div key={item} className="text-xs text-slate-400 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {cap.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 text-[11px] font-mono border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
