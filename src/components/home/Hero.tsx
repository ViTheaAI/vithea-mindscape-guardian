'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Layers, Sparkles, Workflow, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-subtle">
      {/* Radial soft background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-glow pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[300px] bg-radial-glow-accent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Independent AI Technology & Software Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Building Practical AI Solutions for a{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Changing World.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              ViThea is an independent AI technology company developing intelligent software, automation solutions, and innovative applications for businesses and organizations across diverse industries.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-base transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-slate-200 font-medium text-base transition-all"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Subtle philosophy note */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                Problem-first approach
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                Production-ready code
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                Industry-flexible
              </span>
            </div>
          </div>

          {/* Abstract Interactive Capability Visual (NOT a chatbot UI) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-6 bg-gradient-to-b from-[#0e172a]/90 to-[#0b1222]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">vithea-pipeline.engine</span>
                </div>
                <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                  ACTIVE PIPELINE
                </span>
              </div>

              {/* Data transformation visual representation */}
              <div className="py-6 space-y-4">
                {/* Node 1: Operational Input */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Real-World Friction & Data</div>
                      <div className="text-[11px] text-slate-400">Scattered records, manual paperwork & messages</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">INGEST</span>
                </div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-5 bg-gradient-to-b from-slate-600 to-sky-500" />
                </div>

                {/* Node 2: Intelligence & Processing */}
                <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-sky-200">ViThea Intelligence Layer</div>
                      <div className="text-[11px] text-sky-400/80">Entity extraction, ML modeling & validation</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300">PROCESS</span>
                </div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-5 bg-gradient-to-b from-sky-500 to-emerald-500" />
                </div>

                {/* Node 3: Automated Action & Visibility */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-emerald-200">Streamlined Action</div>
                      <div className="text-[11px] text-emerald-400/80">Structured records, triggered notifications & insight</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">DELIVER</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  Practical AI + Software Architecture
                </span>
                <span className="text-slate-400 font-mono">Ready to integrate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
