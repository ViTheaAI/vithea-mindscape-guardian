'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Cpu,
  Workflow,
  BarChart3,
  Code2,
  Lightbulb,
  GitMerge,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

export function SolutionsGrid() {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-[#060a14] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modular Solution Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              What We Build
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Purpose-built software systems, automation pipelines, and intelligent applications designed specifically around where operational friction occurs.
            </p>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors whitespace-nowrap"
          >
            <span>View detailed technical specifications</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid Layout (Inspired by Linear & Scale AI) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Bento Card 1: Intelligent Applications (Large 8-col Hero Card) */}
          <div className="md:col-span-12 lg:col-span-8 rounded-3xl p-7 sm:p-9 bento-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  FLAGSHIP CAPABILITY
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-200 transition-colors">
                Intelligent Applications
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
                Custom AI-powered applications designed for specific business and organizational needs. Rather than generic conversational bots, we engineer targeted software tools that assist employees, organize domain knowledge, and accelerate complex multi-step workflows.
              </p>

              {/* Interactive Visual Element: Domain Knowledge & Entity Preview */}
              <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    Context-Aware Retrieval & Workflow Assistant
                  </span>
                  <span className="text-emerald-400">P99 Latency &lt; 420ms</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-slate-400 text-[11px]">Knowledge Ingestion</div>
                    <div className="text-slate-200 font-medium mt-0.5">SOPs, Guides, Wikis</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-slate-400 text-[11px]">Processing Engine</div>
                    <div className="text-sky-300 font-medium mt-0.5">Vector + Hybrid Search</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-slate-400 text-[11px]">Human Outcome</div>
                    <div className="text-emerald-400 font-medium mt-0.5">Cited, Audited Answers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {['Domain Assistants', 'Document Intelligence', 'Custom AI Tools', 'Role-Based Access'].map((tag) => (
                  <span key={tag} className="text-xs text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/solutions#intelligent-applications"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Full architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Workflow Automation (4-col Card) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl p-7 bento-card flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-105 transition-transform">
                <Workflow className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
                Automation Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Software that reduces repetitive manual workflows and connects information seamlessly across processes.
              </p>

              {/* Visual Pipeline Stack */}
              <div className="space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Webhook Event</span>
                  <span className="text-sky-400">TRIGGER</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 pl-3 border-l-2 border-indigo-500">
                  <span>Extract & Validate</span>
                  <span className="text-indigo-300">AUTO</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400 pl-3 border-l-2 border-emerald-500">
                  <span>Sync Across Apps</span>
                  <span>DONE</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Event-driven pipelines</span>
              <Link
                href="/solutions#automation-systems"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Data-Powered Tools (4-col Card) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl p-7 bento-card flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-200 transition-colors">
                Data-Powered Tools
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Applications that organize complex operational information and turn it into useful insights and real-time operational visibility.
              </p>

              <ul className="space-y-2 mb-6">
                {['Multi-source normalization', 'Operational trend summaries', 'Automated anomaly detection'].map((item) => (
                  <li key={item} className="text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Decision support</span>
              <Link
                href="/solutions#data-powered-tools"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 4: Custom Software (4-col Card) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl p-7 bento-card flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-200 transition-colors">
                Custom Software
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Purpose-built software systems, internal management tools, robust APIs, and integrations tailored to how your team operates.
              </p>

              {/* Code snippet visual */}
              <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-[11px] text-slate-300 mb-6">
                <div className="text-slate-500">{`// Custom Webhook Adapter`}</div>
                <div className="text-sky-400 mt-0.5">POST /v1/workflow/dispatch</div>
                <div className="text-emerald-400 mt-0.5">200 OK — Payload normalized</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Full-stack & APIs</span>
              <Link
                href="/solutions#custom-software"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 5 & 6 (Combined 4-col Card for Prototypes & Integration) */}
          <div className="md:col-span-12 lg:col-span-4 rounded-3xl p-7 bento-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <GitMerge className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5">
                Prototypes & AI Integration
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Rapid technical validation for organizations exploring AI opportunities, and safe integration of emerging models into existing production stacks.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2">
                  <Layers className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Rapid Proof of Concept (POC) validation</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2">
                  <GitMerge className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Legacy system AI middleware & caching</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400">Feasibility & Scale</span>
              <Link
                href="/solutions#ai-prototypes-poc"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
