import React from 'react';
import { AlertCircle, FileText, Cpu, Cog, CheckCircle2 } from 'lucide-react';

export function TransformationFlow() {
  const steps = [
    {
      icon: AlertCircle,
      label: 'Problem',
      description: 'Identify where friction, delays, or manual burdens occur in the organization.'
    },
    {
      icon: FileText,
      label: 'Information',
      description: 'Gather and organize unstructured messages, files, and operational records.'
    },
    {
      icon: Cpu,
      label: 'Intelligence',
      description: 'Surface contextual insights and extract structured entities using AI.'
    },
    {
      icon: Cog,
      label: 'Automation',
      description: 'Streamline repetitive steps into reliable software-driven workflows.'
    },
    {
      icon: CheckCircle2,
      label: 'Action',
      description: 'Deliver actionable visibility, notifications, and clear operational outcomes.'
    }
  ];

  return (
    <section className="py-24 bg-[#070b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            How We Help
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            From Information to Action.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Many organizations have information, processes, and ideas that are difficult to manage manually. ViThea helps turn those challenges into practical technology solutions.
          </p>
        </div>

        {/* 5-step visual flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="relative rounded-xl p-5 bg-gradient-to-b from-[#0c1424] to-[#080d18] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-sky-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>
                    {idx === 0 && 'Define & scope'}
                    {idx === 1 && 'Collect & clean'}
                    {idx === 2 && 'Model & interpret'}
                    {idx === 3 && 'Automate logic'}
                    {idx === 4 && 'Deliver impact'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grounded disclaimer / boundary */}
        <div className="mt-12 p-5 rounded-xl bg-white/[0.02] border border-white/5 max-w-3xl">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">Our engineering philosophy:</span> We do not claim AI replaces human decision-making or guarantees overnight miracles. Instead, we build software that supports teams, surfaces insights, automates repetitive chores, and accelerates operational execution.
          </p>
        </div>
      </div>
    </section>
  );
}
