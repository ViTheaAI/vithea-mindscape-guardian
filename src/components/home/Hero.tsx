'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Play, CheckCircle, Database, Cpu, Workflow, Terminal } from 'lucide-react';

interface SimulationScenario {
  id: string;
  name: string;
  badge: string;
  inputTitle: string;
  rawInput: string;
  processingLabel: string;
  extractedEntities: { key: string; value: string }[];
  outputAction: string;
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: 'document-intelligence',
    name: 'Document Intelligence',
    badge: 'OCR & Schema Parsing',
    inputTitle: 'Multi-Format Ingestion Stream',
    rawInput: 'Document: Spec_Manifest.pdf | Status: Ingested | Fields: Vendor_ID, Timestamp, Line_Items, Total_Amount | OCR Checksum: verified | Target: Accounting_Sync',
    processingLabel: 'ViThea Vision-Entity Extraction Pipeline',
    extractedEntities: [
      { key: 'Classification', value: 'Commercial Spec' },
      { key: 'Key Entities', value: 'Extracted & Sanitized' },
      { key: 'Validation', value: 'Schema Conformance Passed' },
      { key: 'Confidence', value: '99.4%' }
    ],
    outputAction: 'Sanitized JSON schema dispatched to downstream ERP and internal database tables.'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    badge: 'Event Orchestration',
    inputTitle: 'Asynchronous Event Stream',
    rawInput: 'Event: project.milestone.completed | Source: webhook.adapter | Payload: milestone_id=902, notify_stakeholders=true, sync_database=true',
    processingLabel: 'ViThea Queue & Dispatch Worker',
    extractedEntities: [
      { key: 'Event Type', value: 'Milestone Execution' },
      { key: 'Retry Strategy', value: 'Exponential Backoff' },
      { key: 'Target Services', value: 'CRM, Calendar, Alerts' },
      { key: 'Audit Log', value: 'Recorded in Ledger' }
    ],
    outputAction: 'Executed cross-system state updates and queued automated stakeholder confirmations.'
  },
  {
    id: 'operational-data',
    name: 'Data Synthesis',
    badge: 'Multi-Source Telemetry',
    inputTitle: 'Operational Telemetry Feeds',
    rawInput: 'Metrics: Latency=140ms | Queue_Depth=42 | Multi-source feeds normalized across 3 distributed service layers without loss.',
    processingLabel: 'ViThea Correlation & Anomaly Engine',
    extractedEntities: [
      { key: 'Health Status', value: 'Operational' },
      { key: 'Anomaly Filter', value: '0 Critical Violations' },
      { key: 'Trend Score', value: 'Stable Performance' },
      { key: 'Visibility', value: 'Real-Time Sync' }
    ],
    outputAction: 'Surfaced actionable executive telemetry brief and scheduled automated summaries.'
  }
];

export function Hero() {
  const [activeScenario, setActiveScenario] = useState<SimulationScenario>(SCENARIOS[0]);
  const [isRunning, setIsRunning] = useState(false);

  const handleSimulate = (scenario: SimulationScenario) => {
    setActiveScenario(scenario);
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 300);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-tech">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] ambient-glow-cyan pointer-events-none" />
      <div className="absolute top-32 right-0 w-[500px] h-[350px] ambient-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Independent AI Technology & Software Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Building Practical AI Solutions for a{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-glow-sky">
                Changing World.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              ViThea is an independent AI technology company developing practical software solutions, intelligent applications, and automation tools for businesses and organizations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-400/35 hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/capabilities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-200 font-medium text-sm transition-all"
              >
                <span>Explore Technical Capabilities</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Problem-first approach
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Production-ready code
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Confidentiality assured
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#0b1224]/95 via-[#080d1a]/95 to-[#060a14]/95 border border-white/15 shadow-2xl backdrop-blur-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    vithea-runtime.pipeline
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              <div className="pt-4 pb-3">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Interactive Pipeline Architecture
                </div>
                <div className="grid grid-cols-3 gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                  {SCENARIOS.map((sc) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => handleSimulate(sc)}
                      className={`px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all text-center truncate ${
                        activeScenario.id === sc.id
                          ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {sc.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`space-y-3 transition-opacity duration-200 ${isRunning ? 'opacity-40' : 'opacity-100'}`}>
                
                {/* Stage 1: Ingestion Pipeline - Full text display without truncation */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                      <Database className="w-3.5 h-3.5 text-slate-400" />
                      01. Ingestion Pipeline
                    </span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">
                      INGEST_STREAM
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-mono bg-black/40 p-2.5 rounded-lg border border-white/5 break-words whitespace-normal leading-relaxed">
                    {activeScenario.rawInput}
                  </div>
                </div>

                {/* Stage 2: Intelligence Engine */}
                <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/25 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 font-semibold text-sky-300">
                      <Cpu className="w-3.5 h-3.5 text-sky-400" />
                      02. ViThea Intelligence Engine
                    </span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">
                      {activeScenario.badge}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {activeScenario.extractedEntities.map((ent) => (
                      <div key={ent.key} className="bg-black/40 p-2 rounded-lg border border-white/5">
                        <span className="text-[10px] text-slate-400 block font-mono">{ent.key}</span>
                        <span className="text-xs font-mono font-medium text-slate-200 break-words block mt-0.5">
                          {ent.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage 3: Automated Result */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-emerald-300">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
                      <Workflow className="w-3.5 h-3.5 text-emerald-400" />
                      03. Automated Result
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      <CheckCircle className="w-3 h-3" />
                      EXECUTED
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    {activeScenario.outputAction}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Play className="w-3 h-3 text-sky-400 fill-sky-400" />
                  Click tabs to preview pipeline
                </span>
                <Link
                  href="/capabilities"
                  className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                >
                  <span>All architectures</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
