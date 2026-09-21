'use client';

import React, { useState } from 'react';
import { AlertCircle, FileText, Cpu, Cog, CheckCircle2 } from 'lucide-react';

interface StageDetail {
  number: string;
  step: string;
  short: string;
  icon: React.ElementType;
  operationalReality: string;
  vitheaTransformation: string;
  concreteDeliverable: string;
  principle: string;
}

const STAGES: StageDetail[] = [
  {
    number: '01',
    step: 'Problem',
    short: 'Identify Friction',
    icon: AlertCircle,
    operationalReality: 'Teams spend hours every week managing scattered communication, copying data between incompatible tools, and chasing overdue paperwork.',
    vitheaTransformation: 'We map the operational flow, measure where delays and errors concentrate, and define an exact technical scope.',
    concreteDeliverable: 'Workflow friction audit & technical scope boundary document.',
    principle: 'Understand the problem first without forcing pre-packaged tools.'
  },
  {
    number: '02',
    step: 'Information',
    short: 'Structure Data',
    icon: FileText,
    operationalReality: 'Critical business data is trapped in scanned PDFs, informal text messages, chat threads, and messy local spreadsheets.',
    vitheaTransformation: 'We design ingestion pipelines that extract, sanitize, and validate unstructured records into clean, reliable data structures.',
    concreteDeliverable: 'Sanitized schema & automated multi-format ingestion pipelines.',
    principle: 'Organize raw operational inputs into predictable data formats.'
  },
  {
    number: '03',
    step: 'Intelligence',
    short: 'Apply Context',
    icon: Cpu,
    operationalReality: 'Raw data is too voluminous for employees to parse manually, leading to missed operational risks and overlooked opportunities.',
    vitheaTransformation: 'We integrate domain-specific AI models to surface anomalies, extract high-confidence key-value entities, and provide summaries.',
    concreteDeliverable: 'Trained entity-extraction models & operational contextual summaries.',
    principle: 'AI is used to assist and surface insights, not replace human judgment.'
  },
  {
    number: '04',
    step: 'Automation',
    short: 'Orchestrate Action',
    icon: Cog,
    operationalReality: 'Even after insights are gathered, routine dispatch, milestone reminders, and notifications require repetitive manual clicks.',
    vitheaTransformation: 'We construct resilient event-driven software bridges that automate notifications, update ERP/CRMs, and synchronize calendars.',
    concreteDeliverable: 'Production event workers with retry logic and audit trails.',
    principle: 'Deterministic automation for repetitive chores ensures zero missed steps.'
  },
  {
    number: '05',
    step: 'Action',
    short: 'Deliver Impact',
    icon: CheckCircle2,
    operationalReality: 'Organizations need clear operational visibility and reliable day-to-day execution to scale confidently.',
    vitheaTransformation: 'Staff receive clear notifications, clean dashboards, and frictionless tools that save time and reduce errors.',
    concreteDeliverable: 'Unified operational visibility dashboards & intuitive employee tools.',
    principle: 'Durable software that improves continuously as organizational needs evolve.'
  }
];

export function TransformationFlow() {
  const [selectedStage, setSelectedStage] = useState<StageDetail>(STAGES[0]);

  return (
    <section className="py-24 sm:py-32 bg-[#040711] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            Transformation Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            From Information to Action.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Many organizations have information, processes, and ideas that are difficult to manage manually. ViThea helps turn those challenges into practical technology solutions.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Bar (Faculty AI Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {STAGES.map((st) => {
            const Icon = st.icon;
            const isSelected = selectedStage.number === st.number;
            return (
              <button
                key={st.number}
                type="button"
                onClick={() => setSelectedStage(st)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-sky-950/40 to-[#0c1426] border-sky-400/50 shadow-lg shadow-sky-500/10'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-sky-500 text-slate-950'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {st.number}
                  </span>
                </div>
                <div>
                  <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {st.step}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">
                    {st.short}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Interactive Detail View */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#0a1122] to-[#070b16] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full w-fit border border-sky-500/20">
                <span>PHASE {selectedStage.number} DEEP-DIVE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedStage.step}: {selectedStage.short}
              </h3>
              <p className="text-xs text-sky-400/90 font-mono leading-relaxed">
                Core principle: {selectedStage.principle}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box 1: The Operational Reality */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block">
                  Current Operational Bottleneck
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedStage.operationalReality}
                </p>
              </div>

              {/* Box 2: ViThea Transformation */}
              <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 space-y-2">
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block">
                  ViThea Engineering Approach
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedStage.vitheaTransformation}
                </p>
              </div>

              {/* Box 3: Concrete Deliverable (Full Span) */}
              <div className="sm:col-span-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-400">Concrete Deliverable:</span>
                  <strong className="text-slate-200 font-medium">{selectedStage.concreteDeliverable}</strong>
                </div>
                <span className="text-slate-500 font-mono hidden sm:inline">VERIFIED</span>
              </div>
            </div>

          </div>
        </div>

        {/* Grounded disclaimer banner */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Engineering note:</strong> We use AI to support, assist, automate, surface insights, simplify, organize, and accelerate—never overpromising magic or replacing human accountability.
          </p>
        </div>

      </div>
    </section>
  );
}
