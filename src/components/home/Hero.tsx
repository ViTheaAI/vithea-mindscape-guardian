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
    badge: 'OCR & Parsing Pipeline',
    inputTitle: 'Raw Business Document (PDF / Scan)',
    rawInput: 'Vendor: Apex Logistics | Inv #4092 | Date: Sept 18 | Line Items: Fleet Dispatch ($1,250.00), Fuel Surcharge ($120.00) | Net Total: $1,370.00',
    processingLabel: 'ViThea Vision-Entity Extraction',
    extractedEntities: [
      { key: 'Entity', value: 'Apex Logistics Corp' },
      { key: 'Invoice ID', value: '#4092 (Verified)' },
      { key: 'Extracted Total', value: '$1,370.00 CAD' },
      { key: 'Confidence', value: '99.4%' }
    ],
    outputAction: 'Formatted structured JSON dispatched to internal operations system and ERP schema.'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Assistant',
    badge: 'Unstructured Chat → Milestone',
    inputTitle: 'Field Communication / Message Stream',
    rawInput: '"Hey Iris, client signed off on adding recessed lighting to the master bed. Extra $850 approved, materials arriving Thursday."',
    processingLabel: 'ViThea NLP Intent & Milestone Pipeline',
    extractedEntities: [
      { key: 'Action Item', value: 'Scope Change Order' },
      { key: 'Milestone Value', value: '+$850.00' },
      { key: 'Delivery Target', value: 'Thursday' },
      { key: 'Notification', value: 'Client reminder queued' }
    ],
    outputAction: 'Created calendar milestone, updated project scope register, and queued payment trigger.'
  },
  {
    id: 'operational-data',
    name: 'Data Synthesis',
    badge: 'Multi-Source Aggregation',
    inputTitle: 'Disparate Systems & Operational Feeds',
    rawInput: 'Telemetry: 14 service tickets pending | Inventory: 3 spare units | Vendor latency spiked 34% in Northeast zone.',
    processingLabel: 'ViThea Anomaly & Trend Correlation',
    extractedEntities: [
      { key: 'Status Summary', value: 'Supply Bottleneck Detected' },
      { key: 'Root Cause', value: 'Vendor fulfillment delay' },
      { key: 'Risk Score', value: 'Moderate' },
      { key: 'Recommendation', value: 'Re-route buffer inventory' }
    ],
    outputAction: 'Surfaced actionable executive brief and automated preventative dispatch.'
  }
];

export function Hero() {
  const [activeScenario, setActiveScenario] = useState<SimulationScenario>(SCENARIOS[0]);
  const [isRunning, setIsRunning] = useState(false);

  const handleSimulate = (scenario: SimulationScenario) => {
    setActiveScenario(scenario);
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 400);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-tech">
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] ambient-glow-cyan pointer-events-none" />
      <div className="absolute top-32 right-0 w-[500px] h-[350px] ambient-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning Copy */}
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
              ViThea is an independent AI technology company developing intelligent software, automation solutions, and innovative applications for businesses and organizations across diverse industries.
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
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-200 font-medium text-sm transition-all"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Technical Trust Strip */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Problem-first architecture
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Production-ready software
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Multi-industry applicability
              </span>
            </div>
          </div>

          {/* Right Column: Scale AI & Cognition Style Interactive Pipeline Sandbox */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#0b1224]/95 via-[#080d1a]/95 to-[#060a14]/95 border border-white/15 shadow-2xl backdrop-blur-2xl">
              
              {/* Window Titlebar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    vithea-runtime.v2
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* Scenario Toggle Pills (Interactive Sandbox) */}
              <div className="pt-4 pb-3">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Interactive Pipeline Demonstration
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

              {/* Live Flow Stages */}
              <div className={`space-y-3 transition-opacity duration-200 ${isRunning ? 'opacity-40' : 'opacity-100'}`}>
                
                {/* Stage 1: Ingest */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                      <Database className="w-3 h-3 text-slate-400" />
                      01. Operational Ingestion
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">RAW_PAYLOAD</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono bg-black/30 p-2 rounded-lg border border-white/5 line-clamp-2">
                    {activeScenario.rawInput}
                  </div>
                </div>

                {/* Stage 2: Intelligence & Extraction */}
                <div className="p-3 rounded-xl bg-sky-950/20 border border-sky-500/25 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 font-semibold text-sky-300">
                      <Cpu className="w-3 h-3 text-sky-400" />
                      02. ViThea Intelligence Engine
                    </span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">
                      {activeScenario.badge}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    {activeScenario.extractedEntities.map((ent) => (
                      <div key={ent.key} className="bg-black/40 p-1.5 rounded border border-white/5">
                        <span className="text-[10px] text-slate-400 block">{ent.key}</span>
                        <span className="text-xs font-mono font-medium text-slate-200 truncate block">
                          {ent.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage 3: Automated Action Output */}
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-emerald-300">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
                      <Workflow className="w-3 h-3 text-emerald-400" />
                      03. Automated Result
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      EXECUTED
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {activeScenario.outputAction}
                  </p>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Play className="w-3 h-3 text-sky-400 fill-sky-400" />
                  Click tabs above to switch pipelines
                </span>
                <Link
                  href="/solutions"
                  className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                >
                  <span>All capabilities</span>
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
